import {
  BUCKINGHAM_BURRIS_N,
  BUCKINGHAM_BURRIS_S,
  CLIFF_BRUNETTE_FRASER,
  CLIFF_UNION,
  DEER_LAKE_CANADA_W,
  KENSINGTON_SPROTT_E,
  KENSINGTON_SPROTT_W,
  LAKES_CVG_S,
  MARY_12TH,
  SPERLING_JOE_SAKIC_N,
  SPERLING_LOUGHEED_NE,
  SPERLING_LOUGHEED_SE,
  SPERLING_WINSTON,
} from "../intersections";
import { ROUTES } from "../routes";

const SPERLING_BROADWAY_SE = [49.26151, -122.96453];
const SPERLING_ADAIR = [49.26436, -122.96461];

export const LAKES = [
  {
    routeNames: [ROUTES.lakes.name],
    description: "southeast to midtown",
    positions: [
      MARY_12TH,
      [49.21697, -122.93885],
      [49.21793, -122.94012],
      [49.21806, -122.94017],
      [49.2195, -122.94197],
      [49.22011, -122.94274],
      [49.22071, -122.94349],
      [49.22132, -122.94426],
      [49.22193, -122.94502],
      [49.22255, -122.9458],
      [49.22153, -122.94772],
      [49.22216, -122.94849],
      [49.22278, -122.94927],
      [49.2233, -122.94993],
      [49.22348, -122.94994],
      [49.22604, -122.95309],
      [49.2261, -122.95329],
      [49.22668, -122.95404],
      [49.2269, -122.95423],
      [49.22712, -122.95434],
      [49.22739, -122.95442],
      [49.22768, -122.95439],
      [49.22831, -122.95419],
      [49.22856, -122.9559],
      [49.22863, -122.95614],
      [49.22883, -122.95648],
      [49.22902, -122.95666],
      [49.22992, -122.95702],
      [49.23011, -122.95703],
      [49.23023, -122.957],
      [49.23039, -122.95689],
      [49.23051, -122.95676],
      [49.23061, -122.95658],
      [49.23069, -122.95639],
      [49.23076, -122.95608],
      [49.23097, -122.9549],
      [49.23111, -122.95437],
      [49.23123, -122.95415],
      [49.23137, -122.95399],
      [49.23198, -122.95346],
      [49.23213, -122.95337],
      [49.23226, -122.95333],
      [49.23237, -122.95332],
      [49.23245, -122.95334],
      [49.23262, -122.95344],
      [49.23272, -122.95355],
      [49.23279, -122.95367],
      [49.23285, -122.95383],
      [49.23288, -122.95396],
      [49.23288, -122.95413],
      [49.23285, -122.95433],
      [49.23268, -122.95508],
      [49.23267, -122.95526],
      [49.23268, -122.95541],
      [49.23275, -122.95564],
      [49.23282, -122.95577],
      BUCKINGHAM_BURRIS_S,
      BUCKINGHAM_BURRIS_N,
      [49.23545, -122.95914],
      [49.23554, -122.95939],
      [49.23667, -122.96339],
      [49.23694, -122.96434],
      [49.23703, -122.96469],
      [49.23877, -122.9647],
      [49.2389, -122.9647],
      [49.23896, -122.96472],
      [49.23906, -122.96481],
      [49.23903, -122.96488],
      [49.23902, -122.96497],
      [49.239, -122.9651],
      [49.23898, -122.96519],
      [49.23896, -122.96529],
      [49.23892, -122.96535],
      [49.23887, -122.96545],
      [49.23882, -122.96553],
      [49.23878, -122.96565],
      [49.23876, -122.96575],
      [49.23875, -122.96583],
      [49.23876, -122.96595],
      [49.2388, -122.96614],
      [49.23881, -122.96626],
      [49.23881, -122.96633],
      [49.23878, -122.96644],
      [49.23874, -122.96655],
      [49.23845, -122.96708],
      [49.23842, -122.96721],
      [49.23841, -122.96733],
      [49.23842, -122.96741],
      [49.23845, -122.9675],
      [49.23848, -122.96755],
      [49.23872, -122.96785],
      [49.23886, -122.96802],
      [49.23899, -122.96812],
      [49.23908, -122.96814],
      [49.2395, -122.96814],
      [49.23968, -122.96808],
      [49.23996, -122.96806],
      [49.2403, -122.96807],
      [49.24086, -122.96805],
      [49.24095, -122.96807],
      [49.24111, -122.96813],
      [49.24146, -122.9685],
      [49.24156, -122.96863],
      [49.24162, -122.96874],
      [49.24168, -122.96888],
      [49.24171, -122.96898],
      DEER_LAKE_CANADA_W,
    ],
  },
  {
    routeNames: [ROUTES.lakes.name],
    description: "kensington to cvg",
    type: "comfortable",
    positions: [
      KENSINGTON_SPROTT_W,
      KENSINGTON_SPROTT_E,
      [49.24993, -122.96466],
      [49.25211, -122.96465],
      SPERLING_JOE_SAKIC_N,
      [49.25465, -122.96465],
      [49.25594, -122.96466],
      [49.25641, -122.96465],
      [49.25671, -122.96464],
      LAKES_CVG_S,
    ],
  },
  {
    routeNames: [ROUTES.lakes.name],
    description: "cvg to lougheed",
    type: "mixed",
    positions: [
      SPERLING_WINSTON,
      [49.25827, -122.96436],
      [49.2584, -122.96439],
      [49.25879, -122.96447],
      [49.25889, -122.96444],
      [49.25922, -122.96445],
      [49.25932, -122.96435],
      [49.25941, -122.96446],
      SPERLING_LOUGHEED_SE,
      SPERLING_LOUGHEED_NE,
    ],
  },
  {
    routeNames: [ROUTES.lakes.name],
    description: "sperling bad sidewalk",
    type: "other",
    positions: [
      SPERLING_LOUGHEED_NE,
      [49.25976, -122.96442],
      [49.25984, -122.96447],
      [49.26042, -122.96446],
      [49.26051, -122.96448],
      [49.26074, -122.96448],
      [49.26096, -122.96452],
      [49.26133, -122.96469],
      [49.26138, -122.96469],
      [49.26142, -122.96465],
      SPERLING_BROADWAY_SE,
    ],
  },
  {
    routeNames: [ROUTES.lakes.name],
    description: "sperling shared",
    type: "shared",
    positions: [
      SPERLING_BROADWAY_SE,
      [49.26165, -122.96464],
      [49.263, -122.96463],
      [49.26392, -122.96462],
      SPERLING_ADAIR,
    ],
  },
  {
    routeNames: [ROUTES.lakes.name],
    description: "sperling to union",
    type: "comfortable",
    positions: [
      SPERLING_ADAIR,
      [49.26436, -122.95912],
      [49.26606, -122.9591],
      [49.26799, -122.95908],
      [49.26977, -122.95908],
      [49.2716, -122.95905],
      [49.2734, -122.95902],
      [49.27521, -122.959],
      [49.27607, -122.959],
      CLIFF_UNION,
    ],
  },
  {
    routeNames: [ROUTES.lakes.name, ROUTES.francesUnion.name],
    description: "north of union",
    positions: [CLIFF_UNION, [49.27974, -122.95894], CLIFF_BRUNETTE_FRASER],
  },
];
