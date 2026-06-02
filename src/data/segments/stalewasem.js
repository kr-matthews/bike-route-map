import {
  MCBRIDE_COLUMBIA_NE,
  MCBRIDE_COLUMBIA_NW,
  MILLENNIUM_MEMORIAL_OVERPASS,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const ONE_24_112_N = [49.20646, -122.87865];
const EAST_SIDE_ELEVATION_START = [49.2061, -122.88218];
const EAST_SIDE_ELEVATION_END = [49.21125, -122.89823];
const EAST_SIDE_END = [49.21137, -122.89844];
const MCBRIDE_EAST_SIDE = [49.21152, -122.89838];

const MCBRIDE_ROYAL_SE = [49.21208, -122.89877];
const MCBRIDE_ROYAL_SW = [49.21198, -122.89896];
const MCBRIDE_MEMORIAL_SE = [49.21503, -122.90243];
const MEMORIAL_OVERPASS_E = [49.21471, -122.90195];
const MEMORIAL_OVERPASS_W = [49.21451, -122.90258];

// const BRIDGEVIEW_112A_W = [49.20695, -122.86749];

export const STALEWASEM = [
  // west side

  // east side
  {
    routeNames: [ROUTES.stalewasem.name],
    description: "east - south pre-elevation",
    type: "mixed",
    elevation: 0.5,
    videoIds: [ROUTE_VIDEOS.stalewasemEastSb.id],
    positions: [
      ONE_24_112_N,
      [49.20647, -122.8793],
      [49.20645, -122.87971],
      [49.20642, -122.87996],
      [49.20627, -122.87996],
      [49.20621, -122.87996],
      [49.20618, -122.88001],
      [49.20612, -122.88073],
      EAST_SIDE_ELEVATION_START,
    ],
  },
  {
    routeNames: [ROUTES.stalewasem.name],
    description: "east",
    type: "mixed",
    elevation: 1,
    videoIds: [ROUTE_VIDEOS.stalewasemEastSb.id],
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
    videoIds: [ROUTE_VIDEOS.stalewasemEastSb.id],
    positions: [EAST_SIDE_ELEVATION_END, [49.21133, -122.89831], EAST_SIDE_END],
  },

  // south end
  {
    description: "124 st at east end of bridge",
    type: "quiet",
    undesignated: true,
    videoIds: [ROUTE_VIDEOS.stalewasemEastSb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.stalewasemEastSb.id],
    positions: [ONE_24_112_N, [49.20712, -122.87864]],
  },
  // {
  //   description: "bridgeview connecting to bc parkway",
  //   type: "dedicated",
  //   oneWay: "required",
  //   positions: [
  //     BRIDGEVIEW_112A_W,
  //     [49.2068, -122.86752],
  //     [49.20667, -122.86756],
  //     [49.20657, -122.86764],
  //     [49.20652, -122.86751],
  //     [49.20616, -122.86763],
  //     BRIDGEVIEW_KING_GEORGE_SW,
  //   ],
  // },

  // north end
  {
    description: "east side to mcbride",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.stalewasemEastSb.id],
    positions: [EAST_SIDE_END, [49.2115, -122.89841], MCBRIDE_EAST_SIDE],
  },
  {
    description: "mcbride w - columbia to east side",
    type: "mixed",
    isClosed: true,
    positions: [MCBRIDE_COLUMBIA_NW, [49.21118, -122.89799], MCBRIDE_EAST_SIDE],
  },
  {
    description: "mcbride w - east side to royal",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.stalewasemEastSb.id],
    positions: [MCBRIDE_EAST_SIDE, MCBRIDE_ROYAL_SW],
  },
  {
    description: "mcbride e - columbia to royal",
    type: "mixed",
    positions: [
      MCBRIDE_COLUMBIA_NE,
      [49.21138, -122.8979],
      [49.21186, -122.89853],
      MCBRIDE_ROYAL_SE,
    ],
  },
  {
    description: "crossing mcbride at royal s",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.stalewasemEastSb.id],
    positions: [MCBRIDE_ROYAL_SW, MCBRIDE_ROYAL_SE],
  },
  {
    description: "royal s - bushby to mcbride",
    type: "mixed",
    positions: [
      [49.21137, -122.90007],
      [49.21166, -122.89952],
      [49.21174, -122.89942],
      MCBRIDE_ROYAL_SW,
    ],
  },
  {
    description: "mcbride e - royal to memorial-ish",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.stalewasemEastSb.id],
    videoIdsStartAtEnd: [ROUTE_VIDEOS.stalewasemEastSb.id],
    positions: [
      MCBRIDE_ROYAL_SE,
      [49.21226, -122.89895],
      [49.2124, -122.8992],
      [49.2124, -122.8992],
      [49.21262, -122.89952],
      [49.21367, -122.90081],
      [49.21388, -122.90102],
      [49.21412, -122.90132],
      MCBRIDE_MEMORIAL_SE,
    ],
  },
  {
    description: "memorial overpass to queen's park - e",
    type: "mixed",
    elevation: 0.5,
    positions: [
      MCBRIDE_MEMORIAL_SE,
      [49.21506, -122.90237],
      [49.21501, -122.90226],
      [49.21473, -122.90189],
      MEMORIAL_OVERPASS_E,
    ],
  },
  {
    description: "memorial overpass to queen's park",
    type: "mixed",
    elevation: 1,
    positions: [MEMORIAL_OVERPASS_E, MEMORIAL_OVERPASS_W],
  },
  {
    description: "memorial overpass to queen's park - w",
    type: "mixed",
    elevation: 0.5,
    positions: [MEMORIAL_OVERPASS_W, MILLENNIUM_MEMORIAL_OVERPASS],
  },
];
