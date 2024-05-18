import {
  NO_2_BRIDGE_SIDEWALK_NE,
  NO_2_RIVER_E_E,
  NO_2_RUSS_BAKER_W,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const NB_ELEVATION_START = [49.17301, -123.15827];
const NB_ELEVATION_END = [49.17804, -123.15534];
const SB_ELEVATION_START = [49.1781, -123.15567];
const SB_ELEVATION_END = [49.17317, -123.15863];

export const NO_2_BRIDGE = [
  // east side
  {
    routeNames: [ROUTES.no2Bridge.name],
    description: "nb: pre-bridge",
    type: "mixed",
    oneWay: "recommended",
    elevation: 0.5,
    videoIds: [VIDEOS.no2BridgeNb.id],
    positions: [
      NO_2_RIVER_E_E,
      [49.17259, -123.15842],
      [49.17265, -123.15842],
      [49.17274, -123.15836],
      NB_ELEVATION_START,
    ],
  },
  {
    routeNames: [ROUTES.no2Bridge.name],
    description: "nb: bridge",
    type: "mixed",
    oneWay: "recommended",
    elevation: 1,
    videoIds: [VIDEOS.no2BridgeNb.id],
    positions: [
      NB_ELEVATION_START,
      [49.17333, -123.15814],
      [49.17361, -123.15798],
      [49.17402, -123.15781],
      [49.1754, -123.15707],
      [49.17689, -123.15626],
      [49.17718, -123.15607],
      [49.17742, -123.1559],
      [49.17776, -123.15561],
      [49.17793, -123.15545],
      NB_ELEVATION_END,
    ],
  },
  {
    routeNames: [ROUTES.no2Bridge.name],
    description: "nb: post-bridge",
    type: "mixed",
    oneWay: "recommended",
    elevation: 0.5,
    videoIds: [VIDEOS.no2BridgeNb.id, VIDEOS.seaIslandPathNb.id],
    videoIdsStartAtStart: [VIDEOS.seaIslandPathNb.id],
    positions: [
      NB_ELEVATION_END,
      [49.17814, -123.15524],
      [49.17823, -123.15513],
      NO_2_BRIDGE_SIDEWALK_NE,
    ],
  },

  // west side
  {
    routeNames: [ROUTES.no2Bridge.name],
    description: "sb: pre-bridge",
    type: "mixed",
    oneWay: "recommended",
    elevation: 0.5,
    positions: [
      NO_2_RUSS_BAKER_W,
      [49.1785, -123.15528],
      [49.17815, -123.15562],
      SB_ELEVATION_START,
    ],
  },
  {
    routeNames: [ROUTES.no2Bridge.name],
    description: "sb: bridge",
    type: "mixed",
    oneWay: "recommended",
    elevation: 1,
    positions: [
      SB_ELEVATION_START,
      [49.17792, -123.15586],
      [49.17766, -123.15608],
      [49.17746, -123.15623],
      [49.17717, -123.15644],
      [49.17694, -123.15659],
      [49.17652, -123.15682],
      [49.1745, -123.1579],
      [49.17402, -123.15815],
      [49.17372, -123.15835],
      SB_ELEVATION_END,
    ],
  },
  {
    routeNames: [ROUTES.no2Bridge.name],
    description: "sb: post-bridge",
    type: "mixed",
    oneWay: "recommended",
    elevation: 0.5,
    positions: [
      SB_ELEVATION_END,
      [49.17293, -123.15874],
      [49.17293, -123.15884],
    ],
  },
];
