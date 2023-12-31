import {
  RUPERT_22ND_E,
  RUPERT_22ND_W,
  SLOCAN_22ND_N,
  SLOCAN_22ND_S,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const RENFREW_22ND_E = [49.25063, -123.04403];
const RENFREW_22ND_N = [49.25068, -123.04429];
const RENFREW_22ND_S = [49.25057, -123.0442];

const WESTBOUND_LANE_START = [49.25068, -123.0451];
const WESTBOUND_LANE_END = [49.25071, -123.05589];

export const TWENTY_SECOND = [
  {
    routeNames: [ROUTES.twentySecond.name],
    description: "with lane eb",
    type: "painted",
    oneWay: "required",
    positions: [
      [49.25059, -123.05649],
      [49.25061, -123.05223],
      SLOCAN_22ND_S,
      RENFREW_22ND_S,
      RENFREW_22ND_E,
    ],
  },
  {
    routeNames: [ROUTES.twentySecond.name],
    description: "without lane wb 1",
    type: "shared",
    oneWay: "required",
    videos: [VIDEOS.twentySecondEb.id],
    positions: [RENFREW_22ND_E, RENFREW_22ND_N, WESTBOUND_LANE_START],
  },
  {
    routeNames: [ROUTES.twentySecond.name],
    description: "with lane wb",
    type: "painted",
    oneWay: "required",
    videos: [VIDEOS.twentySecondEb.id],
    positions: [
      WESTBOUND_LANE_START,
      SLOCAN_22ND_N,
      [49.25071, -123.05223],
      WESTBOUND_LANE_END,
    ],
  },
  {
    routeNames: [ROUTES.twentySecond.name],
    description: "without lane wb 2",
    type: "shared",
    oneWay: "required",
    videos: [VIDEOS.twentySecondEb.id],
    videosEndAtEnd: [VIDEOS.twentySecondEb.id],
    positions: [WESTBOUND_LANE_END, [49.25071, -123.05649]],
  },
  {
    routeNames: [ROUTES.twentySecond.name],
    description: "without lane",
    type: "shared",
    videos: [VIDEOS.twentySecondEb.id],
    videosStartAtEnd: [VIDEOS.twentySecondEb.id],
    positions: [
      RENFREW_22ND_E,
      [49.2506, -123.03901],
      RUPERT_22ND_W,
      RUPERT_22ND_E,
      [49.25063, -123.0285],
      [49.25064, -123.02338],
    ],
  },
];
