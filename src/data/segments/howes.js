import {
  BOYD_EB_JOIN_AFTER_HOWES,
  BOYD_EB_SPLIT_FOR_HOWES,
  HOWES_DYKE,
  HOWES_EWEN_SE,
  HOWES_EWEN_SW,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const HOWES_BOYD_SW = [49.18983, -122.9487];
const SB_SHOULDER_END = [49.18957, -122.94825];
const SB_LANE_START = [49.18938, -122.9482];
const NB_LANE_START = [49.18775, -122.94795];
const NB_LANE_END = [49.18894, -122.94802];

export const HOWES = [
  {
    description: "sb: shoulder",
    type: "shoulder",
    oneWay: "required",
    positions: [
      BOYD_EB_SPLIT_FOR_HOWES,
      [49.18929, -122.94968],
      [49.18954, -122.94947],
      [49.18964, -122.94935],
      [49.18979, -122.949],
      [49.18982, -122.94887],
      HOWES_BOYD_SW,
    ],
  },
  {
    routeNames: [ROUTES.howes.name],
    description: "sb: shoulder",
    type: "shoulder",
    oneWay: "required",
    positions: [
      HOWES_BOYD_SW,
      [49.18981, -122.94851],
      [49.18979, -122.94844],
      [49.18975, -122.94838],
      [49.18966, -122.9483],
      SB_SHOULDER_END,
    ],
  },
  {
    routeNames: [ROUTES.howes.name],
    description: "sb: shared",
    type: "shared",
    oneWay: "required",
    positions: [SB_SHOULDER_END, SB_LANE_START],
  },
  {
    routeNames: [ROUTES.howes.name],
    description: "sb: lane",
    type: "painted",
    oneWay: "required",
    positions: [
      SB_LANE_START,
      [49.18919, -122.94822],
      [49.18887, -122.9483],
      [49.18867, -122.94837],
      [49.18853, -122.9484],
      [49.18841, -122.94841],
      [49.18823, -122.94841],
      [49.18814, -122.9484],
      [49.1879, -122.94833],
      [49.1875, -122.94812],
      [49.1874, -122.94802],
      [49.18716, -122.94774],
      [49.18703, -122.94756],
      [49.18635, -122.94687],
      HOWES_EWEN_SW,
    ],
  },
  {
    routeNames: [ROUTES.howes.name],
    description: "nb: shared (was lane 10 years ago)",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.howesNb.id],
    positions: [
      HOWES_EWEN_SE,
      [49.18639, -122.94672],
      [49.18752, -122.94781],
      NB_LANE_START,
    ],
  },
  {
    routeNames: [ROUTES.howes.name],
    description: "nb: lane",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.howesNb.id],
    positions: [
      NB_LANE_START,
      [49.18802, -122.94805],
      [49.18829, -122.9481],
      [49.18848, -122.9481],
      [49.18867, -122.94808],
      NB_LANE_END,
    ],
  },
  {
    routeNames: [ROUTES.howes.name],
    description: "nb: shoulder",
    type: "shoulder",
    oneWay: "required",
    videoIds: [VIDEOS.howesNb.id],
    videoIdsEndAtEnd: [VIDEOS.howesNb.id],
    positions: [
      NB_LANE_END,
      [49.18904, -122.94796],
      [49.1893, -122.94794],
      [49.18943, -122.94794],
      [49.1896, -122.94799],
      [49.18971, -122.94807],
      [49.18985, -122.94816],
      [49.18991, -122.94818],
      [49.19002, -122.94819],
      [49.19011, -122.94816],
      BOYD_EB_JOIN_AFTER_HOWES,
    ],
  },
  {
    routeNames: [ROUTES.howes.name],
    description: "south of ewen",
    type: "mixed",
    videoIds: [VIDEOS.howesNb.id],
    videoIdsStartAtStart: [VIDEOS.howesNb.id],
    positions: [
      HOWES_DYKE,
      [49.18242, -122.94298],
      [49.18239, -122.94306],
      [49.18378, -122.9444],
      [49.18435, -122.94496],
      [49.1854, -122.94598],
      HOWES_EWEN_SW,
    ],
  },
];
