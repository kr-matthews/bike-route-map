import {
  FERGUSON_PATH_W,
  MCDONALD_FERGUSON_NW,
  MCDONALD_FERGUSON_SW,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const FERGUSON_PATH = [
  {
    routeNames: [ROUTES.fergusonPath.name],
    description: "all",
    type: "mixed",
    videoIds: [VIDEOS.fergusonPathWb.id],
    videoIdsStartAtEnd: [VIDEOS.fergusonPathWb.id],
    videoIdsEndAtStart: [VIDEOS.fergusonPathWb.id],
    positions: [
      FERGUSON_PATH_W,
      [49.20769, -123.20157],
      [49.20768, -123.20141],
      [49.20765, -123.20123],
      [49.2076, -123.20106],
      [49.20756, -123.20083],
      [49.20754, -123.20032],
      [49.20759, -123.19983],
      [49.2087, -123.19557],
      [49.20882, -123.19494],
      [49.20898, -123.19352],
      [49.20904, -123.19216],
      [49.20903, -123.19138],
      [49.20899, -123.1906],
      [49.20837, -123.18519],
      [49.20771, -123.17941],
      [49.20701, -123.17323],
      [49.20668, -123.17021],
      [49.20665, -123.17003],
      MCDONALD_FERGUSON_NW,
    ],
  },
  {
    description: "crossing ferguson",
    type: "mixed",
    positions: [MCDONALD_FERGUSON_NW, MCDONALD_FERGUSON_SW],
  },
];
