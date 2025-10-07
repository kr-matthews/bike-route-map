import {
  LIGHTHOUSE_PLACE_PATH_JOIN,
  LYNAS_DOVER_N,
  LYNAS_DOVER_S,
  LYNAS_RIVER,
  NO_2_RIVER_E_E,
  NO_2_RIVER_W_N,
  NO_2_RUSS_BAKER_E,
  NO_2_RUSS_BAKER_W,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const NO_2_RIVER_E = [49.17229, -123.15866];
const NB_ELEVATION_START = [49.17304, -123.15833];
const NB_ELEVATION_END = [49.17805, -123.15538];
const SB_ELEVATION_START = [49.1781, -123.15563];
const SB_ELEVATION_END = [49.17315, -123.15857];
const NO_2_RIVER_W = [49.17227, -123.15891];

const NO_2_RIVER = [49.17387, -123.1589];
const RIVER_RIVER_W = [49.17228, -123.15713];
const NO_2_DOVER_PATH_E = [49.17226, -123.15905];
const NO_2_DOVER_PATH_W = [49.17224, -123.1604];

export const NO_2 = [
  // south west side
  {
    description: "west side ground lane",
    type: "painted",
    oneWay: "required",
    positions: [
      NO_2_RIVER,
      [49.17371, -123.15885],
      [49.17294, -123.15885],
      NO_2_RIVER_W,
    ],
  },
  {
    description: "west side path a",
    type: "mixed",
    positions: [
      NO_2_DOVER_PATH_E,
      [49.17305, -123.15896],
      LIGHTHOUSE_PLACE_PATH_JOIN,
    ],
  },
  {
    description: "west side path b",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.no2BridgeSb.id],
    positions: [LIGHTHOUSE_PLACE_PATH_JOIN, NO_2_RIVER],
  },
  {
    description: "river to post-bridge lane",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.no2BridgeNb.id, ROUTE_VIDEOS.no2BridgeSb.id],
    positions: [NO_2_RIVER, NO_2_RIVER_W_N],
  },
  {
    description: "connection with dover",
    type: "mixed",
    positions: [
      NO_2_DOVER_PATH_W,
      [49.17224, -123.15914],
      NO_2_DOVER_PATH_E,
      NO_2_RIVER_W,
    ],
  },
  {
    description: "dover n",
    type: "quiet",
    positions: [
      LYNAS_DOVER_N,
      [49.17207, -123.16357],
      [49.17212, -123.16314],
      [49.17233, -123.16219],
      [49.17241, -123.16168],
      [49.1724, -123.16047],
      [49.17232, -123.16041],
      NO_2_DOVER_PATH_W,
    ],
  },
  {
    description: "dover s",
    type: "quiet",
    positions: [
      LYNAS_DOVER_S,
      [49.17089, -123.16312],
      [49.17104, -123.16233],
      [49.17108, -123.16194],
      [49.17108, -123.16045],
      [49.17114, -123.16032],
      [49.1712, -123.16027],
      NO_2_DOVER_PATH_W,
    ],
  },

  // south east side
  {
    description: "river rd from lynas",
    type: "shared",
    oneWay: "recommended",
    videoIds: [ROUTE_VIDEOS.no2Nb.id],
    positions: [
      LYNAS_RIVER,
      [49.17351, -123.16366],
      [49.17358, -123.1624],
      [49.17364, -123.16164],
      [49.17373, -123.16097],
      [49.1738, -123.16039],
      [49.17384, -123.15986],
      [49.17387, -123.15924],
      NO_2_RIVER,
    ],
  },
  {
    description: "river rd",
    type: "shared",
    oneWay: "recommended",
    videoIds: [ROUTE_VIDEOS.no2Nb.id, ROUTE_VIDEOS.no2BridgeNb.id],
    positions: [
      NO_2_RIVER,
      [49.17388, -123.15864],
      [49.17393, -123.15803],
      [49.17393, -123.15793],
      [49.1739, -123.15774],
      [49.17385, -123.15755],
      [49.17378, -123.15742],
      [49.17366, -123.15727],
      [49.17354, -123.15716],
      [49.17345, -123.15713],
      [49.17333, -123.15712],
      RIVER_RIVER_W,
    ],
  },
  {
    description: "path: river rd to bridge",
    type: "mixed",
    oneWay: "recommended",
    videoIds: [ROUTE_VIDEOS.no2Nb.id, ROUTE_VIDEOS.no2BridgeNb.id],
    positions: [RIVER_RIVER_W, [49.17226, -123.15748], NO_2_RIVER_E_E],
  },
  {
    description: "path: bridge sidewalk to bridge road",
    type: "mixed",
    oneWay: "recommended",
    hideArrows: true,
    videoIds: [ROUTE_VIDEOS.no2Nb.id],
    positions: [NO_2_RIVER_E_E, NO_2_RIVER_E],
  },

  // nb
  {
    routeNames: [ROUTES.no2.name],
    description: "nb: westminster to path",
    type: "painted",
    oneWay: "required",
    positions: [
      [49.17032, -123.15868],
      [49.17143, -123.15866],
      [49.17188, -123.15871],
      NO_2_RIVER_E,
    ],
  },
  {
    routeNames: [ROUTES.no2.name],
    description: "nb: path to bridge",
    type: "painted",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [ROUTE_VIDEOS.no2Nb.id],
    positions: [
      NO_2_RIVER_E,
      [49.17248, -123.15861],
      [49.17273, -123.1585],
      NB_ELEVATION_START,
    ],
  },
  {
    routeNames: [ROUTES.no2.name],
    description: "nb: bridge",
    type: "painted",
    oneWay: "required",
    elevation: 1,
    videoIds: [ROUTE_VIDEOS.no2Nb.id],
    positions: [
      NB_ELEVATION_START,
      [49.17398, -123.15787],
      [49.17691, -123.1563],
      [49.17721, -123.15609],
      [49.17745, -123.15592],
      [49.17768, -123.15572],
      [49.17783, -123.15559],
      NB_ELEVATION_END,
    ],
  },
  {
    routeNames: [ROUTES.no2.name],
    description: "nb: post-bridge",
    type: "painted",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [ROUTE_VIDEOS.no2Nb.id, ROUTE_VIDEOS.russBakerNb.id],
    videoIdsStartAtStart: [ROUTE_VIDEOS.russBakerNb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.no2Nb.id],
    positions: [NB_ELEVATION_END, NO_2_RUSS_BAKER_E],
  },

  // sb
  {
    routeNames: [ROUTES.no2.name],
    description: "sb: pre-bridge",
    type: "painted",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [ROUTE_VIDEOS.russBakerSb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.russBakerSb.id],
    positions: [NO_2_RUSS_BAKER_W, SB_ELEVATION_START],
  },
  {
    routeNames: [ROUTES.no2.name],
    description: "sb: bridge",
    type: "painted",
    oneWay: "required",
    elevation: 1,
    positions: [
      SB_ELEVATION_START,
      [49.17784, -123.15587],
      [49.17762, -123.15606],
      [49.17741, -123.15622],
      [49.17723, -123.15636],
      [49.17688, -123.15658],
      [49.17418, -123.15802],
      SB_ELEVATION_END,
    ],
  },
  {
    routeNames: [ROUTES.no2.name],
    description: "sb: bridge to path",
    type: "painted",
    oneWay: "required",
    elevation: 0.5,
    positions: [
      SB_ELEVATION_END,
      [49.17293, -123.15869],
      [49.17268, -123.1588],
      NO_2_RIVER_W,
    ],
  },
  {
    routeNames: [ROUTES.no2.name],
    description: "sb: path to westminster",
    type: "painted",
    oneWay: "required",
    positions: [
      NO_2_RIVER_W,
      [49.17182, -123.15895],
      [49.1706, -123.15899],
      [49.17052, -123.15901],
      [49.17046, -123.15904],
      [49.17042, -123.15908],
      [49.17037, -123.15915],
    ],
  },
];
