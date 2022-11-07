window.BENCHMARK_DATA = {
  "lastUpdate": 1667823443197,
  "repoUrl": "https://github.com/AzHicham/openslide-rs",
  "entries": {
    "openslide-rs Benchmark": [
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "747dbc79b69cb9a989f7710451b6d768cf0826cd",
          "message": "feat: Impl Clone for Error",
          "timestamp": "2022-10-15T20:27:48Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/5/commits/747dbc79b69cb9a989f7710451b6d768cf0826cd"
        },
        "date": 1666004020505,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1869834,
            "range": "± 241379",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 7862578,
            "range": "± 1450046",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1885262,
            "range": "± 252325",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8154006,
            "range": "± 1044700",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1970408,
            "range": "± 327607",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8089739,
            "range": "± 1282436",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hicham.azimani@owkin.com",
            "name": "HichamAz",
            "username": "AzHicham"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "abe42d011fe5e272d21065f7c9ac967504cf46d1",
          "message": "feat: Impl Clone for Error (#5)",
          "timestamp": "2022-10-17T12:49:56+02:00",
          "tree_id": "d46c448ac996676af1af9346ee55100c3ec0a4a0",
          "url": "https://github.com/AzHicham/openslide-rs/commit/abe42d011fe5e272d21065f7c9ac967504cf46d1"
        },
        "date": 1666004052051,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2490049,
            "range": "± 58885",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 10254770,
            "range": "± 290932",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2397808,
            "range": "± 105539",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 10084177,
            "range": "± 676280",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2292041,
            "range": "± 191718",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 10051365,
            "range": "± 439774",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hicham.azimani@owkin.com",
            "name": "Hicham AZIMANI",
            "username": "AzHicham"
          },
          "committer": {
            "email": "hicham.azimani@owkin.com",
            "name": "Hicham AZIMANI",
            "username": "AzHicham"
          },
          "distinct": true,
          "id": "3c25235b98d52b9ccf512fbc8f5c8de05545f9cc",
          "message": "bump: 0.2.1\n\nFix pre-commit",
          "timestamp": "2022-10-17T13:00:04+02:00",
          "tree_id": "73de20f5e95f58fe17d015b08e3cdea21f870893",
          "url": "https://github.com/AzHicham/openslide-rs/commit/3c25235b98d52b9ccf512fbc8f5c8de05545f9cc"
        },
        "date": 1666004615819,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1940535,
            "range": "± 61369",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 7975198,
            "range": "± 22902",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1876530,
            "range": "± 9160",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 7979959,
            "range": "± 27359",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1829926,
            "range": "± 8333",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 7807431,
            "range": "± 17367",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "03f0372ff745044928688e369fa4a20e4c7774a2",
          "message": "refactor: Add SlideRead, SlideProperty trait",
          "timestamp": "2022-10-18T20:17:18Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/7/commits/03f0372ff745044928688e369fa4a20e4c7774a2"
        },
        "date": 1666354892578,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2508298,
            "range": "± 374754",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 10226563,
            "range": "± 933526",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2352915,
            "range": "± 366105",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 9915788,
            "range": "± 1597453",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2309371,
            "range": "± 286300",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 9754444,
            "range": "± 1214180",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "c3b6eeab6241573dc294e809b91dbb1b5a2f9ad6",
          "message": "refactor: Add SlideReader & SlideProperty trait",
          "timestamp": "2022-10-18T20:17:18Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/7/commits/c3b6eeab6241573dc294e809b91dbb1b5a2f9ad6"
        },
        "date": 1666356590054,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1940355,
            "range": "± 16006",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 7996280,
            "range": "± 66233",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1878686,
            "range": "± 8009",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8007600,
            "range": "± 92264",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1832152,
            "range": "± 10379",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 7818783,
            "range": "± 40063",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "d8118e09670c6087e2583f51e9aac085910fef70",
          "message": "fix: DeepZoom resize fix",
          "timestamp": "2022-10-18T20:17:18Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/8/commits/d8118e09670c6087e2583f51e9aac085910fef70"
        },
        "date": 1666610392866,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2452511,
            "range": "± 117829",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 10053886,
            "range": "± 493618",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2364994,
            "range": "± 118873",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 10101388,
            "range": "± 451301",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2312975,
            "range": "± 155768",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 9911206,
            "range": "± 428176",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "8419da37b903b5852c74e2d759d6d3af72c2ec8b",
          "message": "fix: DeepZoom resize fix",
          "timestamp": "2022-10-18T20:17:18Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/8/commits/8419da37b903b5852c74e2d759d6d3af72c2ec8b"
        },
        "date": 1666611539927,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2120527,
            "range": "± 15982",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8643640,
            "range": "± 151748",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2041166,
            "range": "± 13337",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8664210,
            "range": "± 93518",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1961820,
            "range": "± 14441",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8368906,
            "range": "± 127159",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "37152f91988925afbdb5d3815b8c0c3277969728",
          "message": "fix: DeepZoom resize fix",
          "timestamp": "2022-10-18T20:17:18Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/8/commits/37152f91988925afbdb5d3815b8c0c3277969728"
        },
        "date": 1666615287892,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2157651,
            "range": "± 10104",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8915708,
            "range": "± 47994",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2061330,
            "range": "± 9266",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8931158,
            "range": "± 43438",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1983794,
            "range": "± 10868",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8618725,
            "range": "± 45240",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hicham.azimani@owkin.com",
            "name": "HichamAz",
            "username": "AzHicham"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0306a9ac6edc3f7530f9ebef76b80f17375cc081",
          "message": "fix: DeepZoom resize fix (#8)",
          "timestamp": "2022-10-24T14:43:04+02:00",
          "tree_id": "1bba5cbc8286d7834c0a1b897e86564002379c60",
          "url": "https://github.com/AzHicham/openslide-rs/commit/0306a9ac6edc3f7530f9ebef76b80f17375cc081"
        },
        "date": 1666615595161,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1884793,
            "range": "± 19516",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 7715577,
            "range": "± 108635",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1805071,
            "range": "± 11769",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 7729716,
            "range": "± 78958",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1737894,
            "range": "± 12251",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 7450389,
            "range": "± 95983",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hicham.azimani@owkin.com",
            "name": "Hicham AZIMANI",
            "username": "AzHicham"
          },
          "committer": {
            "email": "hicham.azimani@owkin.com",
            "name": "Hicham AZIMANI",
            "username": "AzHicham"
          },
          "distinct": true,
          "id": "68c544369421c056bc5c2e0cafa98d8eb76fa7dc",
          "message": "bump: 0.3.0",
          "timestamp": "2022-10-24T14:50:02+02:00",
          "tree_id": "0beab3afbb9a9aff150382ee0b51388b07301eca",
          "url": "https://github.com/AzHicham/openslide-rs/commit/68c544369421c056bc5c2e0cafa98d8eb76fa7dc"
        },
        "date": 1666616029219,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2125238,
            "range": "± 29275",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8670185,
            "range": "± 120719",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2049587,
            "range": "± 27428",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8670298,
            "range": "± 98453",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1966534,
            "range": "± 18234",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8371392,
            "range": "± 140623",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "d18e745f5aced4a8e47c175665c3c5a597d93073",
          "message": "feat: use better filter for resize (deepzoom)",
          "timestamp": "2022-10-24T14:16:15Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/9/commits/d18e745f5aced4a8e47c175665c3c5a597d93073"
        },
        "date": 1666621839848,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2581660,
            "range": "± 535901",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 10581303,
            "range": "± 1060540",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2512694,
            "range": "± 208267",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 10516652,
            "range": "± 1108763",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2380808,
            "range": "± 237153",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 10193609,
            "range": "± 998351",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hicham.azimani@owkin.com",
            "name": "HichamAz",
            "username": "AzHicham"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7811a66fd36dbcc7672d42826b32787d0f4dd2d7",
          "message": "feat: use better filter for resize (deepzoom) (#9)",
          "timestamp": "2022-10-24T16:27:44+02:00",
          "tree_id": "a71dbd3931a62d1b9ce5973cf4eef7fa5ad89f92",
          "url": "https://github.com/AzHicham/openslide-rs/commit/7811a66fd36dbcc7672d42826b32787d0f4dd2d7"
        },
        "date": 1666621922411,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2366177,
            "range": "± 232053",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 9773645,
            "range": "± 1343158",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2318318,
            "range": "± 274610",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 9750595,
            "range": "± 1083325",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2219642,
            "range": "± 348038",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 9347544,
            "range": "± 990287",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "4b566e2ab363490cfdc3872853b6fc95f9576ed9",
          "message": "feat: Faster resize (deepzoom)",
          "timestamp": "2022-10-24T14:16:15Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/10/commits/4b566e2ab363490cfdc3872853b6fc95f9576ed9"
        },
        "date": 1666631271583,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2000264,
            "range": "± 15760",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8158864,
            "range": "± 61464",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1912280,
            "range": "± 8229",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8181345,
            "range": "± 56660",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1833861,
            "range": "± 10043",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 7866131,
            "range": "± 78293",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hicham.azimani@owkin.com",
            "name": "HichamAz",
            "username": "AzHicham"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5b58aa5fb84659622bb5f00b305c90a32763e744",
          "message": "feat: Faster resize (deepzoom) (#10)",
          "timestamp": "2022-10-24T19:16:53+02:00",
          "tree_id": "b2d4c170079f6a41cd4e49b8cc9b1a7d6620327b",
          "url": "https://github.com/AzHicham/openslide-rs/commit/5b58aa5fb84659622bb5f00b305c90a32763e744"
        },
        "date": 1666632059618,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1985363,
            "range": "± 11136",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8084745,
            "range": "± 47335",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1906954,
            "range": "± 8538",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8106744,
            "range": "± 39418",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1830939,
            "range": "± 6804",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 7802265,
            "range": "± 23101",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "38a14429301723fe944727d72beef799f9352454",
          "message": "fix: Compute offset in Deepzoom",
          "timestamp": "2022-10-24T14:16:15Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/11/commits/38a14429301723fe944727d72beef799f9352454"
        },
        "date": 1666689071859,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2130835,
            "range": "± 24616",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8720844,
            "range": "± 176691",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2049767,
            "range": "± 17661",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8747574,
            "range": "± 111645",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1970916,
            "range": "± 19282",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8410658,
            "range": "± 97470",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hicham.azimani@owkin.com",
            "name": "HichamAz",
            "username": "AzHicham"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0d1c3cd19a0206a0a6171dcd63995e226a985001",
          "message": "fix: Compute offset in Deepzoom (#11)",
          "timestamp": "2022-10-25T11:13:43+02:00",
          "tree_id": "443f75f4c427fff94ae1d199a0232c7e6e2f58d4",
          "url": "https://github.com/AzHicham/openslide-rs/commit/0d1c3cd19a0206a0a6171dcd63995e226a985001"
        },
        "date": 1666689448485,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2135382,
            "range": "± 33673",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8722541,
            "range": "± 249026",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2042610,
            "range": "± 17247",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8765960,
            "range": "± 170798",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1975614,
            "range": "± 26582",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8425996,
            "range": "± 190910",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hicham.azimani@owkin.com",
            "name": "Hicham AZIMANI",
            "username": "AzHicham"
          },
          "committer": {
            "email": "hicham.azimani@owkin.com",
            "name": "Hicham AZIMANI",
            "username": "AzHicham"
          },
          "distinct": true,
          "id": "e97ebef8cbbde60942ef5654cde5249a38db2b1c",
          "message": "bump: 0.3.3",
          "timestamp": "2022-10-25T11:14:26+02:00",
          "tree_id": "db26d98fa8a866ed1ac810f502c18e022dea5320",
          "url": "https://github.com/AzHicham/openslide-rs/commit/e97ebef8cbbde60942ef5654cde5249a38db2b1c"
        },
        "date": 1666689537580,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2460376,
            "range": "± 811156",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 10413107,
            "range": "± 3551445",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2297520,
            "range": "± 1167703",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 9944305,
            "range": "± 5875619",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2415920,
            "range": "± 523343",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 9481272,
            "range": "± 1666764",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0c8be40ddcb4d2d99393926e74912a31f79bb6f9",
          "message": "build(deps): bump libc from 0.2.135 to 0.2.137 (#13)\n\nBumps [libc](https://github.com/rust-lang/libc) from 0.2.135 to 0.2.137.\r\n- [Release notes](https://github.com/rust-lang/libc/releases)\r\n- [Commits](https://github.com/rust-lang/libc/compare/0.2.135...0.2.137)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: libc\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-10-30T19:19:21+01:00",
          "tree_id": "7517877205955e89e28402aa0d5b78474ddcfa5f",
          "url": "https://github.com/AzHicham/openslide-rs/commit/0c8be40ddcb4d2d99393926e74912a31f79bb6f9"
        },
        "date": 1667154223958,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2138123,
            "range": "± 32815",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8704364,
            "range": "± 125973",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2046748,
            "range": "± 41995",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8721413,
            "range": "± 149276",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1970615,
            "range": "± 21679",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8404269,
            "range": "± 175870",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "49699333+dependabot[bot]@users.noreply.github.com",
            "name": "dependabot[bot]",
            "username": "dependabot[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "79a616858b6bf8cd766edf58824c58524dba9fa0",
          "message": "build(deps): bump MeilCli/regex-match from 1.5.15 to 1.5.16 (#16)\n\nBumps [MeilCli/regex-match](https://github.com/MeilCli/regex-match) from 1.5.15 to 1.5.16.\r\n- [Release notes](https://github.com/MeilCli/regex-match/releases)\r\n- [Commits](https://github.com/MeilCli/regex-match/compare/v1.5.15...v1.5.16)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: MeilCli/regex-match\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2022-11-01T11:51:57+01:00",
          "tree_id": "fec282463167694f0047c2a8ac44d7826f392bc2",
          "url": "https://github.com/AzHicham/openslide-rs/commit/79a616858b6bf8cd766edf58824c58524dba9fa0"
        },
        "date": 1667300161775,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2112877,
            "range": "± 16720",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8599450,
            "range": "± 73138",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2035245,
            "range": "± 12128",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8627207,
            "range": "± 115929",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1957698,
            "range": "± 11756",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8282700,
            "range": "± 55732",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "f6dc78bb987f2554d7287b1839a1d54ab671921e",
          "message": "refactor: Stabilize API",
          "timestamp": "2022-10-25T14:29:05Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/17/commits/f6dc78bb987f2554d7287b1839a1d54ab671921e"
        },
        "date": 1667321679402,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1984193,
            "range": "± 8919",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8091813,
            "range": "± 38891",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1907914,
            "range": "± 9903",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8129933,
            "range": "± 45899",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1830125,
            "range": "± 8028",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 7818577,
            "range": "± 28340",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "b480a3d99e2dc2ae4b78b2c1e8c5ab9dbffb8900",
          "message": "refactor: Stabilize API",
          "timestamp": "2022-11-05T12:23:07Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/17/commits/b480a3d99e2dc2ae4b78b2c1e8c5ab9dbffb8900"
        },
        "date": 1667668560223,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2118317,
            "range": "± 17317",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8596073,
            "range": "± 32252",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2039174,
            "range": "± 11354",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8615441,
            "range": "± 64492",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1960679,
            "range": "± 10288",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8277176,
            "range": "± 70990",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "561b30678a2caa9e5d9fe9fd3b6ac24dca9b0726",
          "message": "refactor: Stabilize API",
          "timestamp": "2022-11-05T12:23:07Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/17/commits/561b30678a2caa9e5d9fe9fd3b6ac24dca9b0726"
        },
        "date": 1667668854040,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1509504,
            "range": "± 32562",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 6002093,
            "range": "± 98649",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1489062,
            "range": "± 48014",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 6029566,
            "range": "± 83413",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1418665,
            "range": "± 40558",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 5758118,
            "range": "± 90215",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "b54ac718f848c352a099357ca073e1d03392e12b",
          "message": "refactor: Stabilize API",
          "timestamp": "2022-11-05T12:23:07Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/17/commits/b54ac718f848c352a099357ca073e1d03392e12b"
        },
        "date": 1667672400470,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2525670,
            "range": "± 95475",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 10310574,
            "range": "± 312717",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2432116,
            "range": "± 84624",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 10453119,
            "range": "± 236898",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2338205,
            "range": "± 94115",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 9861425,
            "range": "± 327000",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "f6bef910d704957325945b050aa3f4ae38b7b62b",
          "message": "refactor: Stabilize API",
          "timestamp": "2022-11-05T12:23:07Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/17/commits/f6bef910d704957325945b050aa3f4ae38b7b62b"
        },
        "date": 1667673305672,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2618740,
            "range": "± 287291",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 10740072,
            "range": "± 1396698",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2596754,
            "range": "± 452412",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 10963161,
            "range": "± 1784217",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2467588,
            "range": "± 498253",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 10657480,
            "range": "± 1406969",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "69c76b15dabc31a7258f627649a7229c6328689d",
          "message": "refactor: Stabilize API",
          "timestamp": "2022-11-05T12:23:07Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/17/commits/69c76b15dabc31a7258f627649a7229c6328689d"
        },
        "date": 1667673559878,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1889391,
            "range": "± 23133",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 7732897,
            "range": "± 289030",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1819020,
            "range": "± 19351",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 7835458,
            "range": "± 184461",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1752934,
            "range": "± 23443",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 7567903,
            "range": "± 178459",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "b0b49b37465e5ace60598b6a6f8c9b1d8c41a7ba",
          "message": "refactor: Stabilize API",
          "timestamp": "2022-11-05T12:23:07Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/17/commits/b0b49b37465e5ace60598b6a6f8c9b1d8c41a7ba"
        },
        "date": 1667821243078,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2601717,
            "range": "± 358385",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 10607631,
            "range": "± 1109954",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2479986,
            "range": "± 334933",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 10616061,
            "range": "± 2035691",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2447426,
            "range": "± 360678",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 10182278,
            "range": "± 1439685",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "2e8149a3f1c0c615fc81feae7ec4c8b261a140b0",
          "message": "refactor: Stabilize API",
          "timestamp": "2022-11-05T12:23:07Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/17/commits/2e8149a3f1c0c615fc81feae7ec4c8b261a140b0"
        },
        "date": 1667822496491,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1261244,
            "range": "± 2402",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 5021973,
            "range": "± 18398",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1240254,
            "range": "± 2422",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 5033228,
            "range": "± 11633",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1188128,
            "range": "± 2236",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4823422,
            "range": "± 6376",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "2c800bc3dd3a452ddd3aa8512a11e75b667f53f8",
          "message": "refactor: Stabilize API",
          "timestamp": "2022-11-05T12:23:07Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/17/commits/2c800bc3dd3a452ddd3aa8512a11e75b667f53f8"
        },
        "date": 1667822560969,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2499639,
            "range": "± 101671",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 10066803,
            "range": "± 322954",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2391260,
            "range": "± 77616",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 9998237,
            "range": "± 292364",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2269384,
            "range": "± 88998",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 9599052,
            "range": "± 280240",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "b753790e213811ac38c8ccaf7f7f4b7526f2d3b9",
          "message": "refactor: Stabilize API",
          "timestamp": "2022-11-05T12:23:07Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/17/commits/b753790e213811ac38c8ccaf7f7f4b7526f2d3b9"
        },
        "date": 1667823168724,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2115159,
            "range": "± 19484",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8636966,
            "range": "± 96660",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2038877,
            "range": "± 15469",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8641217,
            "range": "± 87724",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1956992,
            "range": "± 17150",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8460377,
            "range": "± 270755",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "committer": {
            "name": "AzHicham",
            "username": "AzHicham"
          },
          "id": "bf0d4120cbdf140cec2ef745f18ff9659215a5b6",
          "message": "refactor: Stabilize API",
          "timestamp": "2022-11-05T12:23:07Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/17/commits/bf0d4120cbdf140cec2ef745f18ff9659215a5b6"
        },
        "date": 1667823442771,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1992401,
            "range": "± 11813",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 8182699,
            "range": "± 69648",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1911770,
            "range": "± 8057",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 8195007,
            "range": "± 62954",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1837984,
            "range": "± 8324",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 7899482,
            "range": "± 75835",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}