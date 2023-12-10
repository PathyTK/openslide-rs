window.BENCHMARK_DATA = {
  "lastUpdate": 1702239068039,
  "repoUrl": "https://github.com/AzHicham/openslide-rs",
  "entries": {
    "openslide-rs Benchmark": [
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
          "id": "e9860df76cd1c7861e68abec9da4fd8bffeb586b",
          "message": "build(deps): bump libc from 0.2.148 to 0.2.149 (#106)\n\nBumps [libc](https://github.com/rust-lang/libc) from 0.2.148 to 0.2.149.\r\n- [Release notes](https://github.com/rust-lang/libc/releases)\r\n- [Commits](https://github.com/rust-lang/libc/compare/0.2.148...0.2.149)\r\n\r\n---\r\nupdated-dependencies:\r\n- dependency-name: libc\r\n  dependency-type: direct:production\r\n  update-type: version-update:semver-patch\r\n...\r\n\r\nSigned-off-by: dependabot[bot] <support@github.com>\r\nCo-authored-by: dependabot[bot] <49699333+dependabot[bot]@users.noreply.github.com>",
          "timestamp": "2023-10-10T10:24:00+01:00",
          "tree_id": "481824ee1978a420483c8a8e4241504c87501b74",
          "url": "https://github.com/AzHicham/openslide-rs/commit/e9860df76cd1c7861e68abec9da4fd8bffeb586b"
        },
        "date": 1696929941412,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 2220314,
            "range": "± 19490",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 9070510,
            "range": "± 120998",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 2130144,
            "range": "± 16286",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 9106156,
            "range": "± 141167",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 2052232,
            "range": "± 13522",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 8818545,
            "range": "± 163831",
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
          "id": "56bfcfdac003952bfcb6652a28ac8127d050f60d",
          "message": "chore(deps): update actions/setup-python action to v5",
          "timestamp": "2023-11-06T22:28:46Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/115/commits/56bfcfdac003952bfcb6652a28ac8127d050f60d"
        },
        "date": 1701867759831,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1234536,
            "range": "± 25430",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4944349,
            "range": "± 383619",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1197713,
            "range": "± 21322",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4946176,
            "range": "± 81608",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1143209,
            "range": "± 35169",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4728226,
            "range": "± 126050",
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
          "id": "6613a4a30b8c1ec4d99085c8e1e8214e6cd583d2",
          "message": "refactor!: Improve API",
          "timestamp": "2023-11-06T22:28:46Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/117/commits/6613a4a30b8c1ec4d99085c8e1e8214e6cd583d2"
        },
        "date": 1702120641709,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1357352,
            "range": "± 84611",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1355890,
            "range": "± 85721",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 5425619,
            "range": "± 183806",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 5416678,
            "range": "± 106093",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1314720,
            "range": "± 32382",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 5440500,
            "range": "± 91571",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1263672,
            "range": "± 29999",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 5207967,
            "range": "± 135487",
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
          "id": "8c7de76f7e4eff56ed87750af75198c14c584eef",
          "message": "refactor!: Improve API",
          "timestamp": "2023-11-06T22:28:46Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/117/commits/8c7de76f7e4eff56ed87750af75198c14c584eef"
        },
        "date": 1702121200605,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1172497,
            "range": "± 9281",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1171020,
            "range": "± 8397",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4697392,
            "range": "± 29797",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4698101,
            "range": "± 35261",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1134966,
            "range": "± 6216",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4712579,
            "range": "± 28780",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1086740,
            "range": "± 13028",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4506031,
            "range": "± 22329",
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
          "id": "67d646d60c37c2b4bc31145c34413de2c006c559",
          "message": "refactor!: Improve API",
          "timestamp": "2023-11-06T22:28:46Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/117/commits/67d646d60c37c2b4bc31145c34413de2c006c559"
        },
        "date": 1702121556874,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1172701,
            "range": "± 8483",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1173809,
            "range": "± 5303",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4704199,
            "range": "± 18182",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4706384,
            "range": "± 497648",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1141576,
            "range": "± 49083",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4744641,
            "range": "± 303571",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1088090,
            "range": "± 7205",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4517462,
            "range": "± 57115",
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
          "id": "f4f03f36e1da97cd79d18d882fc8ab41e226d506",
          "message": "refactor!: Improve API",
          "timestamp": "2023-11-06T22:28:46Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/117/commits/f4f03f36e1da97cd79d18d882fc8ab41e226d506"
        },
        "date": 1702121788081,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1175396,
            "range": "± 8424",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1177040,
            "range": "± 9174",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4721882,
            "range": "± 61808",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4720731,
            "range": "± 66893",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1139817,
            "range": "± 13815",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4730409,
            "range": "± 54830",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1089906,
            "range": "± 9332",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4526849,
            "range": "± 27220",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hicham.azimani@owkin.com",
            "name": "Hicham Azimani",
            "username": "AzHicham"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "89bfe54d3f67be427ccf4d77d1a111cb8b7a6e8b",
          "message": "refactor!: Improve API (#117)\n\n* refactor: Improve Interface\r\n\r\n* refactor: Improve DeepZoom interface\r\n\r\n* fix: tests for Openslide 4",
          "timestamp": "2023-12-09T12:48:06+01:00",
          "tree_id": "1251c19f84f1f9f45fee7132a46c6278528f0a34",
          "url": "https://github.com/AzHicham/openslide-rs/commit/89bfe54d3f67be427ccf4d77d1a111cb8b7a6e8b"
        },
        "date": 1702122612804,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1174361,
            "range": "± 8071",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1173280,
            "range": "± 7298",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4708994,
            "range": "± 37114",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4709408,
            "range": "± 67507",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1137540,
            "range": "± 9160",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4734901,
            "range": "± 80415",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1087664,
            "range": "± 9737",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4517678,
            "range": "± 40387",
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
          "id": "f4f03f36e1da97cd79d18d882fc8ab41e226d506",
          "message": "feat: Add support for Openslide 4.x",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/118/commits/f4f03f36e1da97cd79d18d882fc8ab41e226d506"
        },
        "date": 1702122665664,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1171932,
            "range": "± 10596",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1173551,
            "range": "± 11095",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4701862,
            "range": "± 28691",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4700822,
            "range": "± 27526",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1135693,
            "range": "± 9663",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4715786,
            "range": "± 48427",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1085155,
            "range": "± 4602",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4509799,
            "range": "± 66607",
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
          "id": "803f6e544e8ebd2a9a5d5dead0dfd4de6c155963",
          "message": "feat: Add support for Openslide 4.x",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/118/commits/803f6e544e8ebd2a9a5d5dead0dfd4de6c155963"
        },
        "date": 1702122813896,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1173545,
            "range": "± 6896",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1172990,
            "range": "± 50788",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4701604,
            "range": "± 40618",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4717565,
            "range": "± 392903",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1137509,
            "range": "± 15691",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4726024,
            "range": "± 269493",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1084990,
            "range": "± 11702",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4510669,
            "range": "± 23880",
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
          "id": "bd9b089e12fd907673564e4a106bb0de5e0e9fb6",
          "message": "feat: Add support for Openslide 4.x",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/118/commits/bd9b089e12fd907673564e4a106bb0de5e0e9fb6"
        },
        "date": 1702127596937,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1178895,
            "range": "± 11626",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1178889,
            "range": "± 16912",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1179746,
            "range": "± 10909",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4744804,
            "range": "± 393562",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4743734,
            "range": "± 78635",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4745884,
            "range": "± 515463",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1143892,
            "range": "± 10969",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4763258,
            "range": "± 41922",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1092616,
            "range": "± 6927",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4543351,
            "range": "± 41806",
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
          "id": "58a89ab1b8e0500db668969343e92d6728b0b88c",
          "message": "fix(deps): update rust crate openslide-sys to 1.0.3",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/119/commits/58a89ab1b8e0500db668969343e92d6728b0b88c"
        },
        "date": 1702127633554,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1174243,
            "range": "± 5732",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1174068,
            "range": "± 6883",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4709524,
            "range": "± 41606",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4711445,
            "range": "± 51159",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1136848,
            "range": "± 9235",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4726958,
            "range": "± 56626",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1088449,
            "range": "± 6957",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4525222,
            "range": "± 89830",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hicham.azimani@owkin.com",
            "name": "Hicham Azimani",
            "username": "AzHicham"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1911455402a3039f56a72cc8befd60da3bc72711",
          "message": "feat: Add support for Openslide 4.x (#118)",
          "timestamp": "2023-12-09T14:14:41+01:00",
          "tree_id": "5cf05e1824887473dc1185955dcbc7eab615e7a9",
          "url": "https://github.com/AzHicham/openslide-rs/commit/1911455402a3039f56a72cc8befd60da3bc72711"
        },
        "date": 1702127779645,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1174741,
            "range": "± 8226",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1175096,
            "range": "± 9223",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1176436,
            "range": "± 12406",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4728602,
            "range": "± 28274",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4725596,
            "range": "± 50711",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4724551,
            "range": "± 56379",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1139618,
            "range": "± 11657",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4738644,
            "range": "± 86330",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1087743,
            "range": "± 8899",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4531293,
            "range": "± 60344",
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
          "id": "4ca361c634ba16bc82191e1db93342b1c7bf2392",
          "message": "ci: Update deps & ci",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/120/commits/4ca361c634ba16bc82191e1db93342b1c7bf2392"
        },
        "date": 1702128208994,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1173328,
            "range": "± 10223",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1174733,
            "range": "± 10554",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1176726,
            "range": "± 9604",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4708204,
            "range": "± 16139",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4712144,
            "range": "± 35750",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4712661,
            "range": "± 42107",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1137355,
            "range": "± 8106",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4719910,
            "range": "± 105189",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1087570,
            "range": "± 7325",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4520485,
            "range": "± 42504",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hicham.azimani@owkin.com",
            "name": "Hicham Azimani",
            "username": "AzHicham"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "906f09a9e40acb268735fbebd178862a8d4902d5",
          "message": "ci: Update deps & ci (#120)",
          "timestamp": "2023-12-09T14:31:57+01:00",
          "tree_id": "08d9b1d1b837885ae21c4741faafdef36100c59f",
          "url": "https://github.com/AzHicham/openslide-rs/commit/906f09a9e40acb268735fbebd178862a8d4902d5"
        },
        "date": 1702128839080,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1171972,
            "range": "± 8073",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1172322,
            "range": "± 14696",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1173247,
            "range": "± 5419",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4704596,
            "range": "± 28620",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4699182,
            "range": "± 49299",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4705389,
            "range": "± 33276",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1136486,
            "range": "± 5606",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4720181,
            "range": "± 36402",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1085203,
            "range": "± 8360",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4513222,
            "range": "± 24242",
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
          "id": "1e4b36c6073920ef1599f81c58a8a729cce65c1d",
          "message": "ci: Update release workflow",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/121/commits/1e4b36c6073920ef1599f81c58a8a729cce65c1d"
        },
        "date": 1702223726967,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1171586,
            "range": "± 30453",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1172676,
            "range": "± 12356",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1174268,
            "range": "± 13737",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4704529,
            "range": "± 78564",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4704498,
            "range": "± 82774",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4707874,
            "range": "± 49449",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1136124,
            "range": "± 7977",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4722141,
            "range": "± 68468",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1086000,
            "range": "± 4915",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4516374,
            "range": "± 45465",
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
          "id": "38b73c4f72e5445c2b204e7a503aabb9e836bda3",
          "message": "ci: Update release workflow",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/121/commits/38b73c4f72e5445c2b204e7a503aabb9e836bda3"
        },
        "date": 1702224899356,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1189385,
            "range": "± 16930",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1184364,
            "range": "± 16848",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1189196,
            "range": "± 10872",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4791897,
            "range": "± 191587",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4750418,
            "range": "± 62630",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4766151,
            "range": "± 80800",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1143622,
            "range": "± 8336",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4778736,
            "range": "± 36130",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1092761,
            "range": "± 8778",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4548209,
            "range": "± 52297",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hicham.azimani@owkin.com",
            "name": "Hicham Azimani",
            "username": "AzHicham"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "81e77aa340c2d5cae13f60f9cebbb1f5a5081bb6",
          "message": "ci: Update release workflow (#121)",
          "timestamp": "2023-12-10T17:22:29+01:00",
          "tree_id": "a7c07ff03a45cf6bace92502b88507d52209397a",
          "url": "https://github.com/AzHicham/openslide-rs/commit/81e77aa340c2d5cae13f60f9cebbb1f5a5081bb6"
        },
        "date": 1702225471346,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1174037,
            "range": "± 6511",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1172535,
            "range": "± 7348",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1173927,
            "range": "± 20915",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4708384,
            "range": "± 29622",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4709478,
            "range": "± 27337",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4702407,
            "range": "± 66459",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1136519,
            "range": "± 7424",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4717927,
            "range": "± 26758",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1085770,
            "range": "± 8507",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4510439,
            "range": "± 23738",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hicham.azimani@owkin.com",
            "name": "Hicham Azimani",
            "username": "AzHicham"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": false,
          "id": "81e77aa340c2d5cae13f60f9cebbb1f5a5081bb6",
          "message": "ci: Update release workflow (#121)",
          "timestamp": "2023-12-10T17:22:29+01:00",
          "tree_id": "a7c07ff03a45cf6bace92502b88507d52209397a",
          "url": "https://github.com/AzHicham/openslide-rs/commit/81e77aa340c2d5cae13f60f9cebbb1f5a5081bb6"
        },
        "date": 1702225508436,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1175058,
            "range": "± 13862",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1174670,
            "range": "± 10320",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1176826,
            "range": "± 5321",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4715142,
            "range": "± 23159",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4712595,
            "range": "± 22460",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4711307,
            "range": "± 275073",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1137207,
            "range": "± 6925",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4739632,
            "range": "± 42552",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1087419,
            "range": "± 4879",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4528496,
            "range": "± 43718",
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
          "id": "394b4f606122cf601403cfd00587a414d00e7cd7",
          "message": "ci: Enable renovate pre-commit",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/123/commits/394b4f606122cf601403cfd00587a414d00e7cd7"
        },
        "date": 1702227100533,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1176158,
            "range": "± 11437",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1174729,
            "range": "± 9485",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1175954,
            "range": "± 14072",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4714457,
            "range": "± 61414",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4713472,
            "range": "± 45996",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4714361,
            "range": "± 73007",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1137392,
            "range": "± 7462",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4728617,
            "range": "± 126351",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1088892,
            "range": "± 9663",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4515053,
            "range": "± 35215",
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
          "id": "eff84c931e2f1720ea2ad73daca5566b0375988a",
          "message": "ci: Enable renovate pre-commit",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/123/commits/eff84c931e2f1720ea2ad73daca5566b0375988a"
        },
        "date": 1702228300652,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1178011,
            "range": "± 13410",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1179940,
            "range": "± 35182",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1185503,
            "range": "± 14235",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4724805,
            "range": "± 744711",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4728605,
            "range": "± 270665",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4764022,
            "range": "± 241613",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1140279,
            "range": "± 24358",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4750512,
            "range": "± 67343",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1085985,
            "range": "± 13340",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4510778,
            "range": "± 44240",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "hicham.azimani@owkin.com",
            "name": "Hicham Azimani",
            "username": "AzHicham"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "de7165c78dcbcffae6b349dd42d8bcf0c6737ede",
          "message": "ci: Enable renovate pre-commit (#123)",
          "timestamp": "2023-12-10T18:14:34+01:00",
          "tree_id": "4d971d4012516adf71765a8ab53986649d2646f0",
          "url": "https://github.com/AzHicham/openslide-rs/commit/de7165c78dcbcffae6b349dd42d8bcf0c6737ede"
        },
        "date": 1702228566184,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1181114,
            "range": "± 6823",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1181591,
            "range": "± 24000",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1184705,
            "range": "± 19669",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4747606,
            "range": "± 53791",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4741280,
            "range": "± 198299",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4750011,
            "range": "± 186366",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1140382,
            "range": "± 8089",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4762742,
            "range": "± 79939",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1089928,
            "range": "± 7778",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4539831,
            "range": "± 22897",
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
          "id": "07090097edc5ef62379e553dd33c9549bacf5bcf",
          "message": "chore(deps): update pre-commit",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/124/commits/07090097edc5ef62379e553dd33c9549bacf5bcf"
        },
        "date": 1702228620164,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1175165,
            "range": "± 11674",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1174013,
            "range": "± 8965",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1174823,
            "range": "± 7277",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4725413,
            "range": "± 26955",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4719636,
            "range": "± 81068",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4707980,
            "range": "± 170702",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1136991,
            "range": "± 7728",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4719611,
            "range": "± 51237",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1086607,
            "range": "± 6670",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4514389,
            "range": "± 317308",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1152138cfc89e0b2e2c3293fa1146ab5eadd6183",
          "message": "chore(deps): update pre-commit (#124)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2023-12-10T18:24:26+01:00",
          "tree_id": "d5cabeda2a8f3de80b913686c47d48e107f1153d",
          "url": "https://github.com/AzHicham/openslide-rs/commit/1152138cfc89e0b2e2c3293fa1146ab5eadd6183"
        },
        "date": 1702229159223,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1185259,
            "range": "± 16504",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1181980,
            "range": "± 13231",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1183053,
            "range": "± 22829",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4768809,
            "range": "± 103353",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4782437,
            "range": "± 242977",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4768550,
            "range": "± 519880",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1145625,
            "range": "± 11515",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4782909,
            "range": "± 83255",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1092547,
            "range": "± 6436",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4559886,
            "range": "± 35922",
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
          "id": "f00b275d4abbdf59cfc8d3e0d990ad324252653a",
          "message": "fix(deps): update rust crate openslide-sys to 1.0.4",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/125/commits/f00b275d4abbdf59cfc8d3e0d990ad324252653a"
        },
        "date": 1702229194649,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1177743,
            "range": "± 13102",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1174838,
            "range": "± 12335",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1174650,
            "range": "± 9371",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4712128,
            "range": "± 61982",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4709582,
            "range": "± 59402",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4715052,
            "range": "± 32060",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1135832,
            "range": "± 7272",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4717969,
            "range": "± 32939",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1086182,
            "range": "± 10830",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4514177,
            "range": "± 44234",
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
          "id": "7c985b8436d287650103b15ed5af007bb9462858",
          "message": "fix(deps): update rust crate openslide-sys to 1.0.4",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/125/commits/7c985b8436d287650103b15ed5af007bb9462858"
        },
        "date": 1702229248702,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1174302,
            "range": "± 11447",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1174659,
            "range": "± 7570",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1174543,
            "range": "± 8843",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4711938,
            "range": "± 27639",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4706373,
            "range": "± 31408",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4719271,
            "range": "± 74539",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1137802,
            "range": "± 6162",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4728590,
            "range": "± 34941",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1086059,
            "range": "± 10252",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4513591,
            "range": "± 13993",
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
          "id": "c0686adc86d1ce21e1bcc0470ea4fec9d9a1d049",
          "message": "ci: Run tests for feature openslide4",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/126/commits/c0686adc86d1ce21e1bcc0470ea4fec9d9a1d049"
        },
        "date": 1702229623717,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1190552,
            "range": "± 92101",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1189324,
            "range": "± 17764",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1191662,
            "range": "± 17548",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4771978,
            "range": "± 69682",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4772319,
            "range": "± 121291",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4773284,
            "range": "± 73877",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1153058,
            "range": "± 13679",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4789162,
            "range": "± 42507",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1094682,
            "range": "± 7164",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4553800,
            "range": "± 21207",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "53fd62845eacc1e4e4ae729c3c8261cdd0326cac",
          "message": "fix(deps): update rust crate openslide-sys to 1.0.4 (#125)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2023-12-10T18:32:24+01:00",
          "tree_id": "a8616d05108a662bb72ee682d2c7afe3d65e3f86",
          "url": "https://github.com/AzHicham/openslide-rs/commit/53fd62845eacc1e4e4ae729c3c8261cdd0326cac"
        },
        "date": 1702229715635,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1172609,
            "range": "± 12641",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1172101,
            "range": "± 23372",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1173951,
            "range": "± 7939",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4711358,
            "range": "± 315697",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4735102,
            "range": "± 723705",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4717046,
            "range": "± 83718",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1138489,
            "range": "± 9263",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4726937,
            "range": "± 28956",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1086499,
            "range": "± 21671",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4515025,
            "range": "± 26944",
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
          "id": "42d3fe3c1871da66925856ef253afaa26f74f08e",
          "message": "ci: Run tests for feature openslide4",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/126/commits/42d3fe3c1871da66925856ef253afaa26f74f08e"
        },
        "date": 1702238273763,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1170733,
            "range": "± 6932",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1171091,
            "range": "± 60176",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1172893,
            "range": "± 7148",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4697221,
            "range": "± 33211",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4699922,
            "range": "± 319217",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4717441,
            "range": "± 424571",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1136952,
            "range": "± 6649",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4713371,
            "range": "± 22501",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1086715,
            "range": "± 6660",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4507733,
            "range": "± 26799",
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
          "id": "b276c05fb767bfbe69d7e96d57223445ec176f34",
          "message": "ci: Run tests for feature openslide4",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/126/commits/b276c05fb767bfbe69d7e96d57223445ec176f34"
        },
        "date": 1702238674696,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1170541,
            "range": "± 61238",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1170208,
            "range": "± 22817",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1171279,
            "range": "± 59259",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4680207,
            "range": "± 242044",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4694761,
            "range": "± 288910",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4699309,
            "range": "± 493803",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1133765,
            "range": "± 34472",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4712097,
            "range": "± 24957",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1085007,
            "range": "± 6424",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4507552,
            "range": "± 17520",
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
          "id": "9f5348ceb5ccaf53a27802d94eb8299361beca05",
          "message": "ci: Run tests for feature openslide4",
          "timestamp": "2023-12-09T11:48:30Z",
          "url": "https://github.com/AzHicham/openslide-rs/pull/126/commits/9f5348ceb5ccaf53a27802d94eb8299361beca05"
        },
        "date": 1702239067004,
        "tool": "cargo",
        "benches": [
          {
            "name": "deepzoom_read_image_256",
            "value": 1171774,
            "range": "± 6025",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_arc",
            "value": 1174472,
            "range": "± 104078",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_256_recreate_dz",
            "value": 1172690,
            "range": "± 4622",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512",
            "value": 4698380,
            "range": "± 33536",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_arc",
            "value": 4701034,
            "range": "± 51576",
            "unit": "ns/iter"
          },
          {
            "name": "deepzoom_read_image_512_recreate_dz",
            "value": 4699913,
            "range": "± 27868",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_256",
            "value": 1135393,
            "range": "± 10651",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_image_512",
            "value": 4715643,
            "range": "± 45009",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_256",
            "value": 1086077,
            "range": "± 8863",
            "unit": "ns/iter"
          },
          {
            "name": "openslide_read_region_512",
            "value": 4508581,
            "range": "± 25870",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}