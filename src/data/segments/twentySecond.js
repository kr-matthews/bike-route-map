import {
  CARLETON_KINCAID,
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

const BOUNDARY_22ND_E = [49.25064, -123.02338];
const INGLETON_KINCAID = [49.2488, -123.01745];
const MACDONALD_KINCAID_N = [49.24887, -123.01528];

export const TWENTY_SECOND = [
  {
    description: "boundary to kincaid",
    type: "quiet",
    undesignated: true,
    videoIds: [VIDEOS.twentySecondEb.id],
    positions: [
      BOUNDARY_22ND_E,
      [49.25061, -123.01982],
      [49.2506, -123.01746],
      INGLETON_KINCAID,
    ],
  },
  {
    description: "kincaid main",
    type: "shared",
    undesignated: true,
    videoIds: [VIDEOS.twentySecondEb.id],
    positions: [
      INGLETON_KINCAID,
      [49.2488, -123.01621],
      [49.24882, -123.01576],
      MACDONALD_KINCAID_N,
    ],
  },
  {
    description: "kincaid side",
    type: "quiet",
    undesignated: true,
    videoIds: [VIDEOS.twentySecondEb.id],
    positions: [
      MACDONALD_KINCAID_N,
      [49.24873, -123.01525],
      [49.24873, -123.01291],
      [49.24877, -123.01267],
      CARLETON_KINCAID,
    ],
  },

  {
    routeNames: [ROUTES.twentySecond.name],
    description: "with lane eb",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.twentySecondEb.id],
    videoIdsStartAtStart: [VIDEOS.twentySecondEb.id],
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
    videoIds: [VIDEOS.twentySecondWb.id],
    positions: [RENFREW_22ND_E, RENFREW_22ND_N, WESTBOUND_LANE_START],
  },
  {
    routeNames: [ROUTES.twentySecond.name],
    description: "with lane wb",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.twentySecondWb.id],
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
    videoIds: [VIDEOS.twentySecondWb.id],
    videoIdsEndAtEnd: [VIDEOS.twentySecondWb.id],
    positions: [WESTBOUND_LANE_END, [49.25071, -123.05649]],
  },
  {
    routeNames: [ROUTES.twentySecond.name],
    description: "without lane",
    type: "shared",
    videoIds: [VIDEOS.twentySecondEb.id, VIDEOS.twentySecondWb.id],
    videoIdsStartAtEnd: [VIDEOS.twentySecondWb.id],
    positions: [
      RENFREW_22ND_E,
      [49.2506, -123.03901],
      RUPERT_22ND_W,
      RUPERT_22ND_E,
      [49.25063, -123.0285],
      BOUNDARY_22ND_E,
    ],
  },
];
