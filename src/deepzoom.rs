//! Support for Deep Zoom images.
//! This module provides functionality for generating Deep Zoom images from `OpenSlide` objects.
//! This is a simple translation of python `DeepZoomGenerator` implementation

use crate::{
    errors::OpenSlideError,
    traits::Slide,
    utils::{resize_rgb_image, resize_rgba_image},
    Address, DeepZoomGenerator, Region, Result, Size,
};
use image::{RgbImage, RgbaImage};
use std::borrow::Borrow;
use std::collections::{HashMap, HashSet};
use crate::stains::is_pixel_colored;
use crate::stains::StainingType;
use crate::union::UnionFind;

impl<S: Slide, B: Borrow<S>> DeepZoomGenerator<S, B> {
    pub fn new(slide: B, tile_size: u32, overlap: u32, limit_bounds: bool) -> Result<Self> {
        let nb_level = slide.borrow().get_level_count()?;

        let (slide_level_dimensions, l0_offset) = if limit_bounds {
            let bounds = slide.borrow().get_bounds();
            let bounds_x = bounds.x.unwrap_or(0);
            let bounds_y = bounds.y.unwrap_or(0);

            // Level 0 coordinate offset

            let l0_offset = Address {
                x: bounds_x,
                y: bounds_y,
            };

            // Slide level dimensions scale factor in each axis
            let slide_dimensions = slide.borrow().get_level_dimensions(0)?;
            let slide_dimensions = &slide_dimensions;

            let bounds_width = bounds.width.unwrap_or(slide_dimensions.w);
            let bounds_height = bounds.height.unwrap_or(slide_dimensions.h);

            let size_scale = (
                bounds_width as f32 / slide_dimensions.w as f32,
                bounds_height as f32 / slide_dimensions.h as f32,
            );

            let slide_level_dimensions: Result<Vec<Size>> = (0..nb_level)
                .map(|level| match slide.borrow().get_level_dimensions(level) {
                    Ok(size) => Ok(Size {
                        w: (size.w as f32 * size_scale.0).ceil() as _,
                        h: (size.h as f32 * size_scale.1).ceil() as _,
                    }),
                    Err(err) => Err(err),
                })
                .collect();
            (slide_level_dimensions?, l0_offset)
        } else {
            let l0_offset = Address { x: 0, y: 0 };
            let slide_level_dimensions: Result<Vec<Size>> = (0..nb_level)
                .map(|level| slide.borrow().get_level_dimensions(level))
                .collect();
            (slide_level_dimensions?, l0_offset)
        };
        let slide_level0_dimensions = slide_level_dimensions[0];

        // Deep Zooom levels

        let level_dimensions = {
            let mut z_size = Size {
                w: slide_level0_dimensions.w,
                h: slide_level0_dimensions.h,
            };
            let mut level_dimensions = vec![z_size];

            while z_size.w > 1 || z_size.h > 1 {
                z_size.w = ((z_size.w as f32 / 2.0).ceil() as u32).max(1) as _;
                z_size.h = ((z_size.h as f32 / 2.0).ceil() as u32).max(1) as _;
                level_dimensions.push(z_size);
            }
            level_dimensions.reverse();
            level_dimensions
        };

        // Tile
        let level_tiles: Vec<Size> = level_dimensions
            .iter()
            .map(|Size { w, h }| Size {
                w: (*w as f32 / tile_size as f32).ceil() as _,
                h: (*h as f32 / tile_size as f32).ceil() as _,
            })
            .collect();

        // Deep Zoom level count
        let level_count = level_dimensions.len();

        // Total downsamples for each Deep Zoom level
        let l0_z_downsamples: Vec<f64> = (0..level_count)
            .map(|level| 2_u64.pow((level_count - level - 1) as _) as f64)
            .collect();

        // Preferred slide levels for each Deep Zoom level
        let slide_from_dz_level: Result<Vec<u32>> = l0_z_downsamples
            .iter()
            .map(|downsample| slide.borrow().get_best_level_for_downsample(*downsample))
            .collect();
        let slide_from_dz_level = slide_from_dz_level?;

        // Piecewise downsamples
        let l0_l_downsamples: Result<Vec<f64>> = (0..nb_level)
            .map(|level| slide.borrow().get_level_downsample(level))
            .collect();
        let l0_l_downsamples = l0_l_downsamples?;

        let l_z_downsamples: Vec<f64> = (0..level_count)
            .map(|dz_level| {
                l0_z_downsamples[dz_level]
                    / l0_l_downsamples[slide_from_dz_level[dz_level] as usize]
            })
            .collect();

        Ok(DeepZoomGenerator {
            slide,
            _phantom: Default::default(),
            tile_size,
            overlap,
            l0_offset,
            level_dimensions,
            slide_level_dimensions,
            level_tiles,
            level_count,
            slide_from_dz_level,
            l0_l_downsamples,
            l_z_downsamples,
        })
    }

    pub fn level_count(&self) -> usize {
        self.level_count
    }

    pub fn level_tiles(&self) -> &[Size] {
        &self.level_tiles
    }

    pub fn level_dimensions(&self) -> &[Size] {
        &self.level_dimensions
    }

    pub fn level_slides(&self) -> Vec<f64> {
        self.l0_l_downsamples.to_vec()
    }

    // get scale

    /// Returns the scale in micro meters for a given Deep Zoom level.
    ///
    /// # Arguments
    ///
    /// * `level` - The Deep Zoom level for which to calculate the scale.
    ///
    /// # Returns
    ///
    /// * `Ok(f64)` - The scale in micro meters representing the physical length per pixel at the given level.
    /// * `Err(OpenSlideError)` - If the level is invalid or physical dimensions are unavailable.
    pub fn get_scale_in_micro_meters(&self, level: u32) -> Result<f64, OpenSlideError> {
        // Validate the zoom level
        if (level as usize) >= self.level_count {
            return Err(OpenSlideError::CoreError("Invalid Deep Zoom level".to_string()));
        }
        // Retrieve the downsample factor for the given level
        let downsample_factor = self.l_z_downsamples[level as usize];

        // Retrieve physical dimensions of the slide at level 0 (assuming in micrometers)
        let physical_width_um = self.slide_level_dimensions[0].w as f64;
        let physical_height_um = self.slide_level_dimensions[0].h as f64;

        // Retrieve pixel dimensions at level 0
        let level0_dimensions = &self.slide_level_dimensions[0];
        let pixel_width_level0 = physical_width_um / level0_dimensions.w as f64; // µm per pixel
        let pixel_height_level0 = physical_height_um / level0_dimensions.h as f64; // µm per pixel

        // Assuming square pixels, you can average or choose one
        let pixel_size_um = (pixel_width_level0 + pixel_height_level0) / 2.0;

        // Calculate physical pixel length at the given zoom level
        let physical_pixel_length_um = pixel_size_um * downsample_factor;
        Ok(physical_pixel_length_um)
    }


    pub fn tile_count(&self) -> u32 {
        self.level_tiles.iter().map(|&size| size.w * size.h).sum()
    }

    pub fn get_tile_rgba(&self, level: u32, location: Address) -> Result<RgbaImage> {
        let (region, final_size) = self.get_tile_info(level, location)?;

        let image = self.slide.borrow().read_image_rgba(&region)?;

        let size = Size {
            w: image.width(),
            h: image.height(),
        };

        if final_size != size {
            Ok(resize_rgba_image(image, &final_size)?)
        } else {
            Ok(image)
        }
    }

    pub fn get_tile_rgb(&self, level: u32, location: Address) -> Result<RgbImage> {
        let (region, final_size) = self.get_tile_info(level, location)?;
        let image = self.slide.borrow().read_image_rgb(&region)?;

        let size = Size {
            w: image.width(),
            h: image.height(),
        };

        if final_size != size {
            Ok(resize_rgb_image(image, &final_size)?)
        } else {
            Ok(image)
        }
    }

    pub fn get_tile_info(&self, level: u32, address: Address) -> Result<(Region, Size)> {
        if level as usize >= self.level_count() {
            return Err(OpenSlideError::CoreError("Invalid level".to_string()));
        }
        if address.x >= self.level_tiles[level as usize].w
            || address.y >= self.level_tiles[level as usize].h
        {
            return Err(OpenSlideError::CoreError("Invalid address".to_string()));
        }

        let level_tiles = self.level_tiles[level as usize];
        let level_dimensions = self.level_dimensions[level as usize];

        // Get preferred slide level
        let slide_level = self.slide_from_dz_level[level as usize];
        let slide_level_dimensions = self.slide_level_dimensions[slide_level as usize];

        // Calculate top/left and bottom/right overlap
        let z_overlap_topleft = Address {
            x: if address.x != 0 { self.overlap } else { 0 },
            y: if address.y != 0 { self.overlap } else { 0 },
        };

        // Calculate top/left and bottom/right overlap
        let z_overlap_bottomright = Address {
            x: if address.x != (level_tiles.w - 1) {
                self.overlap
            } else {
                0
            },
            y: if address.y != (level_tiles.h - 1) {
                self.overlap
            } else {
                0
            },
        };

        // Get final size of the tile
        let z_size = Size {
            w: self
                .tile_size
                .min(level_dimensions.w - self.tile_size * address.x)
                + z_overlap_topleft.x
                + z_overlap_bottomright.x,
            h: self
                .tile_size
                .min(level_dimensions.h - self.tile_size * address.y)
                + z_overlap_topleft.y
                + z_overlap_bottomright.y,
        };

        // Obtain the region coordinates
        let z_location = Address {
            x: address.x * self.tile_size,
            y: address.y * self.tile_size,
        };

        let l_location = (
            self.l_z_downsamples[level as usize] * f64::from(z_location.x - z_overlap_topleft.x),
            self.l_z_downsamples[level as usize] * f64::from(z_location.y - z_overlap_topleft.y),
        );

        // Round location down and size up, and add offset of active area
        let l0_location = Address {
            x: (self.l0_l_downsamples[slide_level as usize] * l_location.0
                + f64::from(self.l0_offset.x)) as _,
            y: (self.l0_l_downsamples[slide_level as usize] * l_location.1
                + f64::from(self.l0_offset.y)) as _,
        };

        let l_size = Size {
            w: (slide_level_dimensions.w - l_location.0.ceil() as u32)
                .min((self.l_z_downsamples[level as usize] * f64::from(z_size.w)).ceil() as _),
            h: (slide_level_dimensions.h - l_location.1.ceil() as u32)
                .min((self.l_z_downsamples[level as usize] * f64::from(z_size.h)).ceil() as _),
        };

        let region = Region {
            address: l0_location,
            level: slide_level,
            size: l_size,
        };

        Ok((region, z_size))
    }

    pub fn get_tile_thumbnail(&self, size: &Size) -> Result<RgbaImage> {
        self.slide.borrow().thumbnail_rgba(size)
    }

    pub fn get_tile_thumbnail_rgb(&self, size: &Size) -> Result<RgbImage> {
        self.slide.borrow().thumbnail_rgb(size)
    }

    pub fn get_level_dimension(&self, level: u32) -> Result<Size> {
        self.slide.borrow().get_level_dimensions(level)
    }

    pub fn convert_point_to_level0(&self, level: u32, point: Address) -> Result<Address> {
        if level as usize >= self.level_count() {
            return Err(OpenSlideError::CoreError("Invalid level".to_string()));
        }

        // Calculate downsampling factor for the specified level to level 0
        let downsample_factor = self.l_z_downsamples[level as usize];

        // Convert the point using the downsampling factor and offset
        let level0_x =
            (downsample_factor * point.x as f64 + self.l0_offset.x as f64).round() as u32;
        let level0_y =
            (downsample_factor * point.y as f64 + self.l0_offset.y as f64).round() as u32;

        Ok(Address {
            x: level0_x,
            y: level0_y,
        })
    }

    pub fn get_colored_pixels(&self) -> HashSet<(usize, usize)> {
        let thumbnail = self.get_tile_thumbnail(&Size { w: 512, h: 512 }).unwrap();
        let width = thumbnail.width() as usize;
        let height = thumbnail.height() as usize;
        let mut colored_pixels = HashSet::new();
        // Mark colored pixels
        for y in 0..height {
            for x in 0..width {
                let pixel = thumbnail.get_pixel(x as u32, y as u32);
                if is_pixel_colored(pixel, StainingType::HAndE) {
                    colored_pixels.insert((x, y));
                }
            }
        }

        colored_pixels
    }


    // scan through the colored lines on thumbnail then convert
    pub fn get_stained_columns_level0(&self) -> HashMap<usize, Vec<(usize, usize)>> {
        let thumbnail = self.get_tile_thumbnail(&Size { w: 512, h: 512 }).unwrap();
        let width = thumbnail.width() as usize;
        let height = thumbnail.height() as usize;

        let mut colored_columns: HashMap<usize, Vec<(usize, usize)>> = HashMap::new();

        for x in 0..width {
            let mut y1 = 0;
            let mut y2 = 0;
            let mut background_count = 0;
            let mut in_colored_region = false;

            for y in 0..height {
                let pixel = thumbnail.get_pixel(x as u32, y as u32);

                if is_pixel_colored(pixel, StainingType::HAndE) {
                    if !in_colored_region {
                        // Start of a new colored region
                        y1 = y;
                        in_colored_region = true;
                    }
                    // Once we see a colored pixel, reset the background counter
                    background_count = 0;
                } else {
                    // Pixel is not colored
                    if in_colored_region {
                        // We are currently in a colored region, so increment background count
                        background_count += 1;

                        // If background_count is large enough, finalize the region
                        if background_count > 20 {
                            // y2 is the last valid colored pixel row ~20 pixels ago
                            // Use saturating_sub to avoid negative if y < 20
                            let candidate_y2 = y.saturating_sub(20);

                            // If region is large enough, push it
                            if candidate_y2 > y1 + 10 {
                                let level0_x = self
                                    .convert_point_from_thumbnail_to_level0(Address {
                                        x: x as u32,
                                        y: y1 as u32,
                                    })
                                    .unwrap()
                                    .x;
                                let level0_y1 = self
                                    .convert_point_from_thumbnail_to_level0(Address {
                                        x: x as u32,
                                        y: y1 as u32,
                                    })
                                    .unwrap()
                                    .y;
                                let level0_y2 = self
                                    .convert_point_from_thumbnail_to_level0(Address {
                                        x: x as u32,
                                        y: candidate_y2 as u32,
                                    })
                                    .unwrap()
                                    .y;

                                colored_columns
                                    .entry(level0_x as usize)
                                    .or_insert_with(Vec::new)
                                    .push((level0_y1 as usize, level0_y2 as usize));
                            }

                            // Reset state
                            y1 = 0;
                            y2 = 0;
                            background_count = 0;
                            in_colored_region = false;
                        }
                    }
                }
            }

            // If we finish the column still "in_colored_region", finalize it up to the bottom
            if in_colored_region {
                // Let y2 be the last row in the thumbnail
                let candidate_y2 = height - 1;
                if candidate_y2 > y1 + 10 {
                    let level0_x = self
                        .convert_point_from_thumbnail_to_level0(Address {
                            x: x as u32,
                            y: y1 as u32,
                        })
                        .unwrap()
                        .x;
                    let level0_y1 = self
                        .convert_point_from_thumbnail_to_level0(Address {
                            x: x as u32,
                            y: y1 as u32,
                        })
                        .unwrap()
                        .y;
                    let level0_y2 = self
                        .convert_point_from_thumbnail_to_level0(Address {
                            x: x as u32,
                            y: candidate_y2 as u32,
                        })
                        .unwrap()
                        .y;

                    colored_columns
                        .entry(level0_x as usize)
                        .or_insert_with(Vec::new)
                        .push((level0_y1 as usize, level0_y2 as usize));
                }
            }
        }

        colored_columns
    }


    pub fn get_image_rect_boundslevel0(&self) -> Result<ColoredRegions> {
        let thumbnail = self.get_tile_thumbnail(&Size { w: 512, h: 512 }).unwrap();
        let width = thumbnail.width() as usize;
        let height = thumbnail.height() as usize;
        let mut uf = UnionFind::new(width * height);
        let mut colored_pixels = HashSet::new();

        // Mark colored pixels
        for y in 0..height {
            for x in 0..width {
                let pixel = thumbnail.get_pixel(x as u32, y as u32);
                if is_pixel_colored(pixel, StainingType::HAndE) {
                    colored_pixels.insert((x, y));
                }
            }
        }

        // Union adjacent colored pixels
        for &(x, y) in &colored_pixels {
            let current_index = y * width + x;

            // Check and union with left neighbor
            if x > 0 && colored_pixels.contains(&(x - 1, y)) {
                let left_index = y * width + (x - 1);
                uf.union(current_index, left_index);
            }

            // Check and union with top neighbor
            if y > 0 && colored_pixels.contains(&(x, y - 1)) {
                let top_index = (y - 1) * width + x;
                uf.union(current_index, top_index);
            }
        }

        // Extract bounding boxes for connected components
        let mut component_map = std::collections::HashMap::new();
        for &(x, y) in &colored_pixels {
            let root = uf.find(y * width + x);

            // Update the bounding box for the connected component
            let entry = component_map.entry(root).or_insert((x, y, x, y));
            entry.0 = entry.0.min(x); // min_x
            entry.1 = entry.1.min(y); // min_y
            entry.2 = entry.2.max(x); // max_x
            entry.3 = entry.3.max(y); // max_y
        }

        // Convert bounding boxes to Regions
        let mut regions = Vec::new();
        for (_, (min_x, min_y, max_x, max_y)) in component_map {
            let region_width = (max_x - min_x + 1) as u32;
            let region_height = (max_y - min_y + 1) as u32;

            // if the bounding box is considered big enough
            if region_width >= 20 && region_height >= 20 {
                let bounding_box = Region {
                    address: Address {
                        x: min_x as u32,
                        y: min_y as u32,
                    },
                    level: 0,
                    size: Size {
                        w: region_width,
                        h: region_height,
                    },
                };

                regions.push(bounding_box);
            }
        }
        Ok(ColoredRegions {
            regions: regions,
            colored_pixels: colored_pixels,
        })
    }

    // Get image bounds from the slide ignoring background regions
    // @depercated should return level 0 and then convert to thumbnail
    pub fn get_image_rect_bounds(&self) -> Result<Vec<Region>> {
        let thumbnail = self.get_tile_thumbnail(&Size { w: 512, h: 512 }).unwrap();
        let width = thumbnail.width() as usize;
        let height = thumbnail.height() as usize;
        let mut uf = UnionFind::new(width * height);
        let mut colored_pixels = vec![false; width * height];

        // Mark colored pixels
        for y in 0..height {
            for x in 0..width {
                let pixel = thumbnail.get_pixel(x as u32, y as u32);
                if is_pixel_colored(pixel, StainingType::HAndE) {
                    colored_pixels[y * width + x] = true;
                }
            }
        }

        // Union adjacent colored pixels
        for y in 0..height {
            for x in 0..width {
                if colored_pixels[y * width + x] {
                    if x > 0 && colored_pixels[y * width + (x - 1)] {
                        uf.union(y * width + x, y * width + (x - 1));
                    }
                    if y > 0 && colored_pixels[(y - 1) * width + x] {
                        uf.union(y * width + x, (y - 1) * width + x);
                    }
                }
            }
        }

        // Extract bounding boxes for connected components
        let mut component_map = std::collections::HashMap::new();
        for y in 0..height {
            for x in 0..width {
                if colored_pixels[y * width + x] {
                    let root = uf.find(y * width + x);
                    let entry = component_map.entry(root).or_insert((x, y, x, y));
                    entry.0 = entry.0.min(x);
                    entry.1 = entry.1.min(y);
                    entry.2 = entry.2.max(x);
                    entry.3 = entry.3.max(y);
                }
            }
        }

        // Convert bounding boxes to Regions
        let mut regions = Vec::new();
        for (_, (min_x, min_y, max_x, max_y)) in component_map {
            let region_width = (max_x - min_x + 1) as u32;
            let region_height = (max_y - min_y + 1) as u32;

            // if the bounding box is considered big enough
            if region_width >= 20 && region_height >= 20 {
                let bounding_box = Region {
                    address: Address {
                        x: min_x as u32,
                        y: min_y as u32,
                    },
                    level: 0,
                    size: Size {
                        w: region_width,
                        h: region_height,
                    },
                };

                let bounding_box_conv = self
                    .convert_rect_from_thumbnail_to_level0(bounding_box.address, bounding_box.size)
                    .unwrap();
                regions.push(bounding_box_conv);
            }
        }
        Ok(regions)
    }

    pub fn convert_point_from_thumbnail_to_level0(
        &self,
        coordinates: Address,
    ) -> Result<Address> {
        // Get dimensions of the highest resolution level (level 0)
        let level0_dimensions = self.slide_level_dimensions[0];
        let thumbnail_dimensions = Size { w: 512, h: 512 };

        // Calculate the downsampling factors
        let downsample_factor_x = level0_dimensions.w as f32 / thumbnail_dimensions.w as f32;
        let downsample_factor_y = level0_dimensions.h as f32 / thumbnail_dimensions.h as f32;

        // Convert thumbnail coordinates to level 0 coordinates
        Ok(Address {
            x: (coordinates.x as f32 * downsample_factor_x).round() as u32,
            y: (coordinates.y as f32 * downsample_factor_y).round() as u32,
        })
    }

    pub fn convert_rect_from_thumbnail_to_level0(
        &self,
        thumbnail_coords: Address,
        thumbnail_size: Size,
    ) -> Result<Region> {
        // Get dimensions of the highest resolution level (level 0)
        let level0_dimensions = self.slide_level_dimensions[0];
        let thumbnail_dimensions = Size { w: 512, h: 512 };

        // Calculate the downsampling factors
        let downsample_factor_x = level0_dimensions.w as f32 / thumbnail_dimensions.w as f32;
        let downsample_factor_y = level0_dimensions.h as f32 / thumbnail_dimensions.h as f32;

        // Convert thumbnail coordinates to level 0 coordinates
        let level0_coords = Address {
            x: (thumbnail_coords.x as f32 * downsample_factor_x).round() as u32,
            y: (thumbnail_coords.y as f32 * downsample_factor_y).round() as u32,
        };

        // Convert thumbnail size to level 0 size
        let level0_size = Size {
            w: (thumbnail_size.w as f32 * downsample_factor_x).round() as u32,
            h: (thumbnail_size.h as f32 * downsample_factor_y).round() as u32,
        };

        let region = Region {
            address: level0_coords,
            level: 0,
            size: level0_size,
        };

        Ok(region)
    }
}

pub struct ColoredRegions {
    pub regions: Vec<Region>,
    pub colored_pixels: HashSet<(usize, usize)>,
}
pub struct Bounds {
    pub x: Option<u32>,
    pub y: Option<u32>,
    pub width: Option<u32>,
    pub height: Option<u32>,
}
