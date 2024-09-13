import {
  MCCALLAN_MIDDLE_ARM,
  RAILWAY_GARRY_NW,
  RAILWAY_GREENWAY_COLBECK,
  RAILWAY_GREENWAY_GRANVILLE_N,
  RAILWAY_GREENWAY_GRANVILLE_S,
  RAILWAY_GREENWAY_WESTWATER,
  RAILWAY_GREENWAY_WOODWARDS,
  RAILWAY_MONCTON_SW,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const MCCALLAN_WESTMINSTER_SW_S = [49.16987, -123.17013];
const MCCALLAN_WESTMINSTER_NW = [49.17024, -123.17013];
const MCCALLAN_WESTMINSTER_N = [49.17024, -123.17003];
const MCCALLAN_WESTMINSTER_NE = [49.17024, -123.16992];

const RAILWAY_GREENWAY_MONCTON_S = [49.12506, -123.17003];
const RAILWAY_GREENWAY_GARRY_N = [49.1294, -123.16999];

export const RAILWAY_GREENWAY = [
  {
    description: "pre-mccallan split",
    type: "comfortable",
    positions: [
      MCCALLAN_WESTMINSTER_SW_S,
      [49.17006, -123.17013],
      MCCALLAN_WESTMINSTER_NW,
    ],
  },
  {
    description: "mccallan",
    type: "quiet",
    positions: [MCCALLAN_WESTMINSTER_N, [49.17354, -123.16999]],
  },
  {
    description: "crossing mccallan at westminster",
    type: "quiet",
    positions: [
      MCCALLAN_WESTMINSTER_NW,
      MCCALLAN_WESTMINSTER_N,
      MCCALLAN_WESTMINSTER_NE,
    ],
  },

  {
    routeNames: [ROUTES.railwayGreenway.name],
    description: "westwater to moncton",
    type: "mixed",
    videoIds: [VIDEOS.railwayGreenwaySb.id],
    videoIdsEndAtStart: [VIDEOS.railwayGreenwaySb.id],
    positions: [
      RAILWAY_GREENWAY_WESTWATER,
      [49.12174, -123.16899],
      [49.12184, -123.16898],
      [49.12196, -123.16902],
      [49.12212, -123.16923],
      [49.12221, -123.16935],
      [49.12249, -123.16955],
      [49.12286, -123.16995],
      [49.12292, -123.16998],
      [49.12296, -123.16998],
      [49.1231, -123.16991],
      [49.12316, -123.1699],
      [49.12337, -123.17003],
      RAILWAY_GREENWAY_MONCTON_S,
    ],
  },
  {
    routeNames: [ROUTES.railwayGreenway.name],
    description: "crossing moncton",
    type: "mixed",
    positions: [RAILWAY_GREENWAY_MONCTON_S, [49.12522, -123.16997]],
  },
  {
    description: "greenway to road at moncton",
    type: "mixed",
    undesignated: true,
    videoIds: [VIDEOS.railwayGreenwaySb.id],
    positions: [RAILWAY_GREENWAY_MONCTON_S, RAILWAY_MONCTON_SW],
  },
  {
    routeNames: [ROUTES.railwayGreenway.name],
    description: "crossing garry",
    type: "comfortable",
    positions: [[49.12926, -123.17], RAILWAY_GREENWAY_GARRY_N],
  },
  {
    description: "road to greenway at garry",
    type: "comfortable",
    undesignated: true,
    videoIds: [VIDEOS.railwayGreenwaySb.id],
    positions: [RAILWAY_GARRY_NW, RAILWAY_GREENWAY_GARRY_N],
  },
  {
    routeNames: [ROUTES.railwayGreenway.name],
    description: "primary",
    type: "comfortable",
    videoIds: [VIDEOS.railwayGreenwaySb.id],
    videoIdsStartAtEnd: [VIDEOS.railwayGreenwaySb.id],
    positions: [
      RAILWAY_GREENWAY_GARRY_N,
      [49.12949, -123.17001],
      [49.13047, -123.17002],
      [49.13061, -123.17006],
      [49.13073, -123.17002],
      [49.13359, -123.17002],
      [49.13364, -123.16997],
      [49.13383, -123.16997],
      [49.13392, -123.17004],
      [49.13416, -123.17002],
      [49.13808, -123.17002],
      [49.13835, -123.17016],
      [49.13921, -123.17011],
      [49.13934, -123.17004],
      [49.14091, -123.17002],
      [49.14099, -123.16999],
      [49.14113, -123.16999],
      [49.14119, -123.17002],
      [49.14202, -123.17003],
      [49.14223, -123.17015],
      [49.14288, -123.17015],
      [49.14306, -123.17003],
      RAILWAY_GREENWAY_WOODWARDS,
      [49.14572, -123.17003],
      [49.14579, -123.16994],
      [49.14591, -123.16995],
      [49.14597, -123.17003],
      [49.14825, -123.17004],
      [49.1483, -123.16999],
      [49.14846, -123.16999],
      [49.14854, -123.17004],
      [49.14876, -123.17006],
      [49.14906, -123.17017],
      RAILWAY_GREENWAY_COLBECK,
      [49.15346, -123.17018],
      [49.15372, -123.17005],
      [49.15548, -123.17003],
      [49.15554, -123.16997],
      [49.15571, -123.16996],
      [49.15574, -123.17004],
      [49.15662, -123.17005],
      [49.15673, -123.17015],
      [49.15887, -123.17016],
      [49.15908, -123.17008],
      [49.16262, -123.17009],
      [49.16276, -123.17016],
      RAILWAY_GREENWAY_GRANVILLE_S,
      RAILWAY_GREENWAY_GRANVILLE_N,
      MCCALLAN_WESTMINSTER_SW_S,
      [49.17007, -123.16992],
      MCCALLAN_WESTMINSTER_NE,
      [49.17345, -123.16988],
      [49.17354, -123.1698],
      [49.17363, -123.1698],
      [49.17366, -123.16947],
      MCCALLAN_MIDDLE_ARM,
    ],
  },
];
