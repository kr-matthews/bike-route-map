import {
  CPR_TRAIL_PITT_RIVER_BRIDGE,
  PITT_RIVER_BRIDGE_GRAVEL_N,
  POCO_TRAIL_BELFAST,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const BELFAST_PITT_RIVER_BRIDGE = [49.24982, -122.73258];
const ELEVATION_W = [49.24933, -122.7319];
const ELEVATION_E = [49.24676, -122.72609];
const GRAVEL_TRAIL_S = [49.24658, -122.72565];

export const PITT_RIVER_BRIDGE = [
  {
    description: "connection with poco trail",
    type: "mixed",
    videoIds: [
      ROUTE_VIDEOS.pittRiverBridgeEb.id,
      ROUTE_VIDEOS.pittRiverBridgeWb.id,
    ],
    videoIdsStartAtStart: [ROUTE_VIDEOS.pittRiverBridgeEb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.pittRiverBridgeWb.id],
    positions: [
      POCO_TRAIL_BELFAST,
      [49.2496, -122.73167],
      [49.24967, -122.73176],
      [49.24974, -122.73189],
      [49.24992, -122.73248],
      BELFAST_PITT_RIVER_BRIDGE,
    ],
  },
  {
    description: "connection along lougheed",
    type: "mixed",
    positions: [
      [49.25313, -122.74144],
      [49.25239, -122.73969],
      [49.25235, -122.73947],
      [49.25227, -122.73931],
      [49.25216, -122.73914],
      [49.25199, -122.73872],
      [49.2519, -122.73859],
      [49.25185, -122.73845],
      [49.25144, -122.73749],
      [49.25121, -122.7368],
      [49.25116, -122.73661],
      [49.25114, -122.73639],
      [49.25114, -122.73462],
      [49.25117, -122.73446],
      [49.25121, -122.73436],
      [49.25114, -122.73426],
      [49.25106, -122.73421],
      [49.25097, -122.73406],
      [49.25084, -122.73425],
      [49.25058, -122.73393],
      [49.2504, -122.7337],
      [49.25015, -122.73332],
      [49.2499, -122.73281],
      BELFAST_PITT_RIVER_BRIDGE,
    ],
  },
  {
    description: "informal gravel path east side",
    type: "other",
    videoIds: [ROUTE_VIDEOS.pittRiverBridgeWb.id],
    positions: [
      GRAVEL_TRAIL_S,
      [49.24667, -122.72564],
      [49.24673, -122.72559],
      [49.24679, -122.72552],
      PITT_RIVER_BRIDGE_GRAVEL_N,
    ],
  },
  {
    routeNames: [ROUTES.pittRiverBridge.name],
    description: "west side",
    type: "mixed",
    elevation: 0.5,
    videoIds: [
      ROUTE_VIDEOS.pittRiverBridgeEb.id,
      ROUTE_VIDEOS.pittRiverBridgeWb.id,
    ],
    positions: [
      BELFAST_PITT_RIVER_BRIDGE,
      [49.24962, -122.73202],
      [49.24958, -122.73196],
      [49.24956, -122.73198],
      [49.24957, -122.73203],
      [49.24967, -122.7324],
      [49.24967, -122.73246],
      [49.24966, -122.73248],
      [49.24964, -122.73246],
      ELEVATION_W,
    ],
  },
  {
    routeNames: [ROUTES.pittRiverBridge.name],
    description: "elevated",
    type: "mixed",
    elevation: 1,
    videoIds: [
      ROUTE_VIDEOS.pittRiverBridgeEb.id,
      ROUTE_VIDEOS.pittRiverBridgeWb.id,
    ],
    positions: [
      ELEVATION_W,
      [49.2491, -122.7314],
      [49.24905, -122.73136],
      [49.24851, -122.73018],
      [49.24754, -122.72792],
      ELEVATION_E,
    ],
  },
  {
    routeNames: [ROUTES.pittRiverBridge.name],
    description: "east side",
    type: "mixed",
    elevation: 0.5,
    videoIds: [
      ROUTE_VIDEOS.pittRiverBridgeEb.id,
      ROUTE_VIDEOS.pittRiverBridgeWb.id,
    ],
    positions: [ELEVATION_E, GRAVEL_TRAIL_S],
  },
  {
    routeNames: [ROUTES.pittRiverBridge.name],
    description: "east side after gravel",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.pittRiverBridgeEb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.pittRiverBridgeEb.id],
    positions: [
      GRAVEL_TRAIL_S,
      [49.24616, -122.72467],
      [49.24611, -122.72442],
      CPR_TRAIL_PITT_RIVER_BRIDGE,
    ],
  },
];
