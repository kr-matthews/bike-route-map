import {
  BRIDGEVIEW_KING_GEORGE_SW,
  MCBRIDE_COLUMBIA_NW,
} from "../intersections";
import { ROUTES } from "../routes";

const EAST_SIDE_112 = [49.20646, -122.87865];
const EAST_SIDE_ELEVATION_START = [49.2061, -122.88218];
const EAST_SIDE_ELEVATION_END = [49.21125, -122.89823];
const EAST_SIDE_END = [49.21137, -122.89844];
const MCBRIDE_EAST_SIDE = [49.21152, -122.89838];

const BRIDGEVIEW_112A_W = [49.20695, -122.86749];

export const STALEWASEM = [
  // west side

  // east side
  {
    routeNames: [ROUTES.stalewasem.name],
    description: "east - south pre-elevation",
    type: "mixed",
    elevation: 0.5,
    positions: [
      EAST_SIDE_112,
      [49.20646, -122.8792],
      [49.20645, -122.87952],
      [49.20639, -122.87999],
      [49.20631, -122.87999],
      [49.2062, -122.87998],
      [49.20615, -122.88004],
      [49.20611, -122.88087],
      EAST_SIDE_ELEVATION_START,
    ],
  },
  {
    routeNames: [ROUTES.stalewasem.name],
    description: "east",
    type: "mixed",
    elevation: 1,
    positions: [
      EAST_SIDE_ELEVATION_START,
      [49.2061, -122.8836],
      [49.20611, -122.88486],
      [49.20611, -122.88529],
      [49.2062, -122.8861],
      [49.20638, -122.88685],
      [49.20655, -122.88749],
      [49.20824, -122.89235],
      [49.20962, -122.89627],
      [49.21009, -122.8974],
      [49.21022, -122.89764],
      [49.21033, -122.89773],
      [49.21044, -122.89777],
      [49.21055, -122.89774],
      [49.21065, -122.89764],
      [49.21074, -122.89752],
      [49.21111, -122.89813],
      EAST_SIDE_ELEVATION_END,
    ],
  },
  {
    routeNames: [ROUTES.stalewasem.name],
    description: "east - north post-elevation",
    type: "mixed",
    elevation: 0.5,
    positions: [EAST_SIDE_ELEVATION_END, [49.21133, -122.89831], EAST_SIDE_END],
  },

  // south end
  // !!!
  // {
  //   description: "112/124/112A",
  //   type: "shared",
  //   undesignated: true,
  //   positions: [
  //     EAST_SIDE_112,
  //     [49.20635, -122.87982],
  //     [49.20637, -122.87954],
  //     [49.20635, -122.87919],
  //     [49.20634, -122.87881],
  //     [49.20654, -122.87867],
  //     [49.2071, -122.87865],
  //     [49.20713, -122.87091],
  //     ONE_26A_112A_S,
  //     BRIDGEVIEW_112A_W,
  //   ],
  // },
  {
    description: "bridgeview connecting to bc parkway",
    type: "dedicated",
    oneWay: "required",
    positions: [
      BRIDGEVIEW_112A_W,
      [49.2068, -122.86752],
      [49.20667, -122.86756],
      [49.20657, -122.86764],
      [49.20652, -122.86751],
      [49.20616, -122.86763],
      BRIDGEVIEW_KING_GEORGE_SW,
    ],
  },

  // north end
  {
    description: "east side to mcbride",
    type: "mixed",
    positions: [EAST_SIDE_END, [49.2115, -122.89841], MCBRIDE_EAST_SIDE],
  },
  {
    description: "mcbride w - columbia to east side",
    type: "mixed",
    positions: [MCBRIDE_COLUMBIA_NW, [49.21118, -122.89799], MCBRIDE_EAST_SIDE],
  },
  {
    description: "mcbride w - east side to royal",
    type: "mixed",
    positions: [MCBRIDE_EAST_SIDE, [49.21198, -122.89896]],
  },
];
