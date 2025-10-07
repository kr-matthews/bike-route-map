import {
  CARRALL_KEEFER_NE,
  CARRALL_KEEFER_SE,
  CARRALL_KEEFER_W,
  HEATLEY_UNION,
  QUEBEC_KEEFER_E,
  QUEBEC_KEEFER_SW,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const GORE_KEEFER = [49.27944, -123.09719];
const EB_LANE_END = [49.2792, -123.10251];

export const KEEFER = [
  {
    routeNames: [ROUTES.keefer.name],
    description: "eb: crossing carrall",
    type: "shared",
    oneWay: "required",
    hideArrows: true,
    positions: [CARRALL_KEEFER_W, CARRALL_KEEFER_SE],
  },
  {
    routeNames: [ROUTES.keefer.name],
    description: "eb: carrall to quebec",
    type: "painted",
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.keeferEb.id],
    videoIdsStartAtStart: [ROUTE_VIDEOS.keeferEb.id],
    positions: [CARRALL_KEEFER_SE, [49.27919, -123.10269], EB_LANE_END],
  },
  {
    routeNames: [ROUTES.keefer.name],
    description: "eb: near quebec",
    type: "shared",
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.keeferEb.id],
    positions: [
      EB_LANE_END,
      [49.27923, -123.10233],
      QUEBEC_KEEFER_SW,
      QUEBEC_KEEFER_E,
    ],
  },
  {
    routeNames: [ROUTES.keefer.name],
    description: "wb: quebec to carrall",
    type: "shared",
    videoIds: [ROUTE_VIDEOS.keeferWb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.keeferWb.id],
    oneWay: "required",
    positions: [
      QUEBEC_KEEFER_E,
      [49.27931, -123.10232],
      [49.27928, -123.1025],
      [49.27926, -123.10261],
      [49.27925, -123.10275],
      [49.27928, -123.10424],
      CARRALL_KEEFER_NE,
    ],
  },
  {
    routeNames: [ROUTES.keefer.name],
    description: "wb: crossing carrall",
    type: "shared",
    oneWay: "required",
    hideArrows: true,
    positions: [CARRALL_KEEFER_NE, CARRALL_KEEFER_W],
  },
  {
    routeNames: [ROUTES.keefer.name],
    description: "quebec to gore",
    type: "shared",
    videoIds: [ROUTE_VIDEOS.keeferEb.id, ROUTE_VIDEOS.keeferWb.id],
    positions: [
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
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.keeferWb.id, ROUTE_VIDEOS.keeferEb.id],
    videoIdsStartAtEnd: [ROUTE_VIDEOS.keeferWb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.keeferEb.id],
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
