import {
  CARRALL_KEEFER_E,
  CARRALL_KEEFER_W,
  HEATLEY_UNION,
  QUEBEC_KEEFER_E,
  QUEBEC_KEEFER_W,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const GORE_KEEFER = [49.27944, -123.09719];

export const KEEFER = [
  {
    routeNames: [ROUTES.keefer.name],
    description: "west",
    type: "uncomfortable",
    videos: [VIDEOS.keeferEb],
    positions: [
      CARRALL_KEEFER_W,
      CARRALL_KEEFER_E,
      [49.2792, -123.10271],
      [49.27921, -123.10256],
      QUEBEC_KEEFER_W,
      QUEBEC_KEEFER_E,
      [49.27932, -123.10202],
      [49.27943, -123.10156],
      [49.27948, -123.1013],
      [49.2795, -123.10113],
      [49.27951, -123.10092],
      [49.2795, -123.10051],
      [49.27949, -123.09973],
      GORE_KEEFER,
    ],
  },
  {
    routeNames: [ROUTES.keefer.name],
    description: "east",
    videos: [VIDEOS.keeferEb],
    positions: [
      GORE_KEEFER,
      [49.27944, -123.09719],
      [49.27938, -123.09353],
      [49.27931, -123.08998],
      [49.2793, -123.08978],
      [49.27924, -123.08967],
      [49.27919, -123.08964],
      [49.27912, -123.08963],
      [49.27839, -123.08966],
      HEATLEY_UNION,
    ],
  },
];
