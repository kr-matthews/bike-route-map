import {
  TODD_VANNESS,
  WALES_38TH,
  WALES_45TH,
  WALES_46TH,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const WALES_KINGSWAY_SW = [49.23879, -123.05182];
const DUCHESS_KINGSWAY_NE = [49.23944, -123.05239];

export const WALES_DUCHESS = [
  {
    routeNames: [ROUTES.walesDuchess.name],
    description: "46th to kingsway",
    type: "quiet",
    videos: [VIDEOS.walesDuchessSb.id],
    videosEndAtStart: [VIDEOS.walesDuchessSb.id],
    positions: [
      WALES_46TH,
      WALES_45TH,
      [49.2308, -123.05165],
      [49.23278, -123.05167],
      [49.23385, -123.05168],
      WALES_38TH,
      [49.23737, -123.05175],
      [49.23873, -123.05178],
      [49.23876, -123.05177],
      WALES_KINGSWAY_SW,
    ],
  },
  {
    routeNames: [ROUTES.walesDuchess.name],
    description: "kingsway path",
    type: "combined",
    videos: [VIDEOS.walesDuchessSb.id],
    positions: [
      WALES_KINGSWAY_SW,
      [49.23888, -123.05202],
      [49.2391, -123.05183],
      [49.23938, -123.05242],
      DUCHESS_KINGSWAY_NE,
    ],
  },
  {
    routeNames: [ROUTES.walesDuchess.name],
    description: "kingsway to bc parkway",
    type: "quiet",
    videos: [VIDEOS.walesDuchessSb.id],
    videosStartAtEnd: [VIDEOS.walesDuchessSb.id],
    positions: [
      DUCHESS_KINGSWAY_NE,
      [49.23948, -123.05243],
      [49.23965, -123.05227],
      [49.23999, -123.05194],
      [49.24039, -123.05156],
      [49.2406, -123.05136],
      [49.24077, -123.05113],
      [49.24083, -123.05103],
      [49.24103, -123.05043],
      [49.24112, -123.05024],
      [49.2413, -123.05006],
      [49.24248, -123.04893],
      [49.24236, -123.04862],
      [49.24231, -123.04847],
      [49.24227, -123.04826],
      [49.24223, -123.04807],
      [49.24221, -123.04797],
      [49.24199, -123.0474],
      [49.24163, -123.04649],
      TODD_VANNESS,
    ],
  },
];
