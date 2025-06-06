import {
  GARDEN_CITY_PATTERSON_E,
  GREAT_CANADIAN_SEA_ISLAND_NE,
  SEA_ISLAND_WAY_E,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const SB_START = [49.20613, -123.13036];
const SOUTHBOUND_ELEVATION_START = [49.20542, -123.13025];
const SOUTHBOUND_ELEVATION_END = [49.19153, -123.11989];
const SOUTHBOUND_SPLIT = [49.19144, -123.12005];
const BRIDGEPORT_SPLIT = [49.19195, -123.11957];
const SEA_ISLAND_SPLIT = [49.19157, -123.11884];
const SEA_ISLAND_PATH_END = [49.19118, -123.1237];
const PATH_PATTERSON = [49.19019, -123.11692];
const NORTHBOUND_SIDEWALK_START = [49.19028, -123.11582];
const NORTHBOUND_ELEVATION_START = [49.19119, -123.1174];
const NORTHBOUND_ELEVATION_END = [49.20454, -123.12955];
const NB_POST_BRIDGE_SPLIT = [49.2047, -123.12953];

export const OAK_STREET_BRIDGE = [
  // north end
  {
    description: "approaching 71/oak",
    type: "shared",
    oneWay: "required",
    undesignated: true,
    videoIds: [VIDEOS.oakSb.id],
    videoIdsStartAtStart: [VIDEOS.oakSb.id],
    positions: [
      [49.20692, -123.131],
      [49.20691, -123.13042],
      [49.20687, -123.1304],
      [49.20644, -123.13041],
      [49.20613, -123.13041],
      SB_START,
    ],
  },

  // south end
  {
    routeNames: [ROUTES.oakStreetBridge.name],
    description: "sea island way",
    type: "mixed",
    oneWay: "recommended",
    videoIds: [VIDEOS.oakSb.id],
    positions: [
      SOUTHBOUND_SPLIT,
      [49.1914, -123.12015],
      [49.19134, -123.12032],
      [49.19129, -123.12046],
      [49.19125, -123.12067],
      [49.19121, -123.12096],
      [49.19119, -123.12123],
      [49.19118, -123.12192],
      SEA_ISLAND_PATH_END,
    ],
  },
  {
    routeNames: [ROUTES.oakStreetBridge.name],
    description: "sea island way missing end",
    type: "other",
    oneWay: "recommended",
    videoIds: [VIDEOS.oakSb.id],
    positions: [
      SEA_ISLAND_PATH_END,
      [49.19116, -123.12396],
      [49.19118, -123.12408],
      [49.19123, -123.1242],
      [49.19119, -123.12428],
      GREAT_CANADIAN_SEA_ISLAND_NE,
    ],
  },
  {
    description: "sb double-back",
    type: "other",
    positions: [
      SOUTHBOUND_SPLIT,
      [49.19144, -123.12005],
      [49.19148, -123.12005],
      [49.19152, -123.12002],
      [49.19168, -123.11978],
      [49.19174, -123.11971],
      [49.19183, -123.11963],
      [49.19187, -123.11961],
      BRIDGEPORT_SPLIT,
    ],
  },
  {
    description: "sb following bus",
    positions: [
      BRIDGEPORT_SPLIT,
      [49.19193, -123.11942],
      [49.19192, -123.11934],
      [49.19187, -123.1192],
      [49.1918, -123.11909],
      [49.19171, -123.11896],
      SEA_ISLAND_SPLIT,
    ],
  },
  {
    description: "connection with bridgeport",
    type: "other",
    positions: [[49.19195, -123.12035], BRIDGEPORT_SPLIT],
  },
  {
    description: "connection with patterson - N",
    videoIds: [VIDEOS.oakNb.id],
    positions: [
      PATH_PATTERSON,
      [49.19031, -123.11692],
      [49.19053, -123.11723],
      [49.19064, -123.11766],
      [49.19069, -123.1181],
      [49.19071, -123.1185],
      [49.19072, -123.11896],
      SEA_ISLAND_WAY_E,
    ],
  },
  {
    description: "connection with patterson - S",
    videoIds: [VIDEOS.oakNb.id, VIDEOS.seaIslandWayEb25.id],
    videoIdsEndAtEnd: [VIDEOS.seaIslandWayEb25.id],
    positions: [
      SEA_ISLAND_WAY_E,
      [49.19146, -123.11898],
      [49.19151, -123.11895],
      [49.19154, -123.11891],
      SEA_ISLAND_SPLIT,
    ],
  },
  {
    description: "patterson from garden city",
    type: "quiet",
    videoIds: [VIDEOS.oakNb.id],
    positions: [GARDEN_CITY_PATTERSON_E, PATH_PATTERSON],
  },

  // southbound
  {
    routeNames: [ROUTES.oakStreetBridge.name],
    description: "sb pre-bridge",
    type: "mixed",
    oneWay: "recommended",
    elevation: 0.5,
    videoIds: [VIDEOS.oakSb.id],
    positions: [
      SB_START,
      [49.20586, -123.13032],
      [49.20568, -123.1303],
      SOUTHBOUND_ELEVATION_START,
    ],
  },
  {
    routeNames: [ROUTES.oakStreetBridge.name],
    description: "sb bridge",
    type: "mixed",
    oneWay: "recommended",
    elevation: 1,
    videoIds: [VIDEOS.oakSb.id],
    positions: [
      SOUTHBOUND_ELEVATION_START,
      [49.20505, -123.13014],
      [49.20477, -123.13004],
      [49.20456, -123.12994],
      [49.20421, -123.12975],
      [49.20403, -123.12963],
      [49.20371, -123.12939],
      [49.20339, -123.12912],
      [49.20241, -123.12819],
      [49.20159, -123.12742],
      [49.20087, -123.12674],
      [49.19968, -123.12562],
      [49.19875, -123.12475],
      [49.19778, -123.12386],
      [49.19668, -123.12284],
      [49.19512, -123.12138],
      [49.19369, -123.12007],
      [49.19326, -123.11968],
      [49.19305, -123.11952],
      [49.19284, -123.11939],
      [49.19262, -123.11933],
      [49.19253, -123.11932],
      [49.1924, -123.11933],
      [49.19232, -123.11934],
      [49.1922, -123.11936],
      [49.19211, -123.11938],
      [49.19196, -123.11946],
      [49.19183, -123.11956],
      [49.1917, -123.11967],
      SOUTHBOUND_ELEVATION_END,
    ],
  },
  {
    routeNames: [ROUTES.oakStreetBridge.name],
    description: "sb pre-split",
    type: "mixed",
    oneWay: "recommended",
    hideArrows: true,
    elevation: 0.5,
    videoIds: [VIDEOS.oakSb.id],
    positions: [
      SOUTHBOUND_ELEVATION_END,
      [49.19149, -123.11997],
      SOUTHBOUND_SPLIT,
    ],
  },

  // northbound
  {
    routeNames: [ROUTES.oakStreetBridge.name],
    description: "nb under bridge",
    oneWay: "recommended",
    videoIds: [VIDEOS.oakNb.id],
    positions: [
      SEA_ISLAND_SPLIT,
      [49.19159, -123.11875],
      [49.19158, -123.11867],
      [49.19157, -123.11858],
      [49.19149, -123.11818],
      [49.19149, -123.11808],
      [49.19155, -123.11777],
      [49.19153, -123.11748],
      [49.19146, -123.11733],
      [49.19053, -123.11589],
      [49.19043, -123.11592],
      [49.19031, -123.11576],
      [49.19028, -123.11576],
      NORTHBOUND_SIDEWALK_START,
    ],
  },
  {
    routeNames: [ROUTES.oakStreetBridge.name],
    description: "nb pre-bridge",
    oneWay: "recommended",
    elevation: 0.5,
    videoIds: [VIDEOS.oakNb.id],
    positions: [
      NORTHBOUND_SIDEWALK_START,
      [49.1904, -123.11602],
      [49.19109, -123.11724],
      NORTHBOUND_ELEVATION_START,
    ],
  },
  {
    routeNames: [ROUTES.oakStreetBridge.name],
    description: "nb bridge",
    type: "mixed",
    oneWay: "recommended",
    elevation: 1,
    videoIds: [VIDEOS.oakNb.id],
    positions: [
      NORTHBOUND_ELEVATION_START,
      [49.19137, -123.11761],
      [49.19163, -123.11786],
      [49.19191, -123.11813],
      [49.19347, -123.1196],
      [49.1958, -123.12174],
      [49.1981, -123.12386],
      [49.20069, -123.1263],
      [49.2029, -123.12838],
      [49.20301, -123.12849],
      [49.20312, -123.12858],
      [49.20329, -123.12868],
      [49.20352, -123.12886],
      [49.20363, -123.12895],
      [49.20387, -123.12914],
      [49.20409, -123.12932],
      [49.20426, -123.12942],
      [49.20439, -123.1295],
      [49.20448, -123.12954],
      NORTHBOUND_ELEVATION_END,
    ],
  },
  {
    routeNames: [ROUTES.oakStreetBridge.name],
    description: "nb post-bridge",
    type: "mixed",
    oneWay: "recommended",
    elevation: 0.5,
    videoIds: [VIDEOS.oakNb.id],
    positions: [
      NORTHBOUND_ELEVATION_END,
      [49.20461, -123.12955],
      [49.20465, -123.12954],
      NB_POST_BRIDGE_SPLIT,
    ],
  },
  {
    routeNames: [ROUTES.oakStreetBridge.name],
    description: "nb post-bridge east",
    type: "mixed",
    oneWay: "recommended",
    positions: [
      NB_POST_BRIDGE_SPLIT,
      [49.20477, -123.12948],
      [49.20482, -123.12944],
      [49.20485, -123.1294],
      [49.2049, -123.12934],
      [49.20492, -123.12929],
      [49.20507, -123.12893],
    ],
  },
  {
    routeNames: [ROUTES.oakStreetBridge.name],
    description: "nb post-bridge west/under",
    type: "mixed",
    oneWay: "recommended",
    videoIds: [VIDEOS.oakNb.id],
    videoIdsEndAtEnd: [VIDEOS.oakNb.id],
    positions: [
      NB_POST_BRIDGE_SPLIT,
      [49.20464, -123.12947],
      [49.20454, -123.12946],
      [49.20449, -123.12949],
      [49.20443, -123.12983],
      [49.20441, -123.12999],
      [49.20433, -123.13022],
      [49.20431, -123.13038],
    ],
  },
];
