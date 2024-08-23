use image::Rgba;

/// StainingType enum
#[derive(Clone, Copy)]
pub enum StainingType {
    HAndE,
    IHC,
}

pub fn is_pixel_colored(pixel: &Rgba<u8>, staining_type: StainingType) -> bool {
    match staining_type {
        StainingType::HAndE => is_pixel_colored_hande(pixel),
        StainingType::IHC => is_pixel_colored_ihc(pixel),
    }
}

fn is_pixel_colored_hande(pixel: &Rgba<u8>) -> bool {
    let r = pixel[0] as f32;
    let g = pixel[1] as f32;
    let b = pixel[2] as f32;

    let is_not_white = (r - g).abs() > 20.0 || (r - b).abs() > 20.0 || (g - b).abs() > 20.0;
    let intensity_variation = (r + g + b) / 3.0;
    let is_sufficiently_dark = intensity_variation < 230.0;

    is_not_white && is_sufficiently_dark
}

fn is_pixel_colored_ihc(pixel: &Rgba<u8>) -> bool {
    let r = pixel[0] as f32;
    let g = pixel[1] as f32;
    let b = pixel[2] as f32;

    let is_brown_or_red = (r > g && r > b) || (r > 100.0 && g > 40.0 && b < 60.0);
    let intensity_variation = (r + g + b) / 3.0;
    let is_sufficiently_dark = intensity_variation < 230.0;

    is_brown_or_red && is_sufficiently_dark
}
