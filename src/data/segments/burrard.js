import {
  BURRARD_1ST_E,
  BURRARD_1ST_W,
  BURRARD_7TH_W,
  BURRARD_ARBUTUS_GREENWAY_E,
  BURRARD_ARBUTUS_GREENWAY_W,
  BURRARD_BURNABY_E,
  BURRARD_BURNABY_W,
  BURRARD_COMOX,
  BURRARD_DRAKE_E,
  BURRARD_DRAKE_W,
  BURRARD_DUNSMUIR,
  BURRARD_HASTINGS,
  BURRARD_HELMCKEN_SE,
  BURRARD_HELMCKEN_SW,
  BURRARD_PACIFIC_NE,
  BURRARD_PACIFIC_NW,
  BURRARD_PACIFIC_SE_E,
  BURRARD_PACIFIC_SE_W,
  BURRARD_PACIFIC_SW,
  BURRARD_SMITHE,
  BURRARD_YORK,
  CHESTNUT_CORNWALL,
  CHESTNUT_OGDEN,
  CHESTNUT_WHYTE,
  CYPRESS_CORNWALL_N,
  CYPRESS_CORNWALL_SE,
  CYPRESS_CORNWALL_SW,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const BURRARD_4TH_E = [49.26806, -123.1455];
const BURRARD_CORNWALL_E = [49.27232, -123.14504];
const BURRARD_CORNWALL_SW = [49.27231, -123.14556];
const BURRARD_CORNWALL_NW = [49.2726, -123.14538];
const BURRARD_NORTHBOUND_SPLIT = [49.2767, -123.13279];
const BURRARD_SOUTHBOUND_MERGE = [49.27687, -123.13302];
const NORTHBOUND_ELEVATION_START = [49.27323, -123.14368];
const NORTHBOUND_ELEVATION_END = [49.27661, -123.13313];
const SOUTHBOUND_ELEVATED_START = [49.2768, -123.1332];
const SOUTHBOUND_ELEVATED_END = [49.27337, -123.14377];
const SB_PRE_CORNWALL = [49.27303, -123.14483];
const NORTHBOUND_ENDPOINT = [49.27851, -123.12991];
const SOUTHBOUND_ENDPOINT = [49.26517, -123.14582];

export const BURRARD = [
  // chestnut
  {
    description: "chestnut",
    type: "quiet",
    videoIds: [VIDEOS.burrardBridgeSb.id],
    positions: [
      CHESTNUT_CORNWALL,
      [49.27267, -123.14633],
      [49.27296, -123.14634],
      [49.27305, -123.14636],
      [49.27352, -123.14633],
      [49.27358, -123.14631],
      [49.27442, -123.14626],
      CHESTNUT_WHYTE,
      [49.27675, -123.14616],
      CHESTNUT_OGDEN,
    ],
  },

  // connection
  {
    description: "left onto helmcken",
    type: "dedicated",
    oneWay: "required",
    positions: [BURRARD_HELMCKEN_SW, BURRARD_HELMCKEN_SE],
  },

  // northbound
  {
    description: "6th to 4th nb",
    type: "shared",
    oneWay: "required",
    undesignated: true,
    videoIds: [VIDEOS.burrardNb.id],
    positions: [
      BURRARD_ARBUTUS_GREENWAY_E,
      [49.26716, -123.14554],
      BURRARD_4TH_E,
    ],
  },
  {
    routeNames: [ROUTES.burrard.name],
    description: "nb 4th to 1st",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.burrardNb.id],
    positions: [
      BURRARD_4TH_E,
      [49.26889, -123.14547],
      [49.26977, -123.14543],
      BURRARD_1ST_E,
    ],
  },
  {
    routeNames: [ROUTES.burrard.name],
    description: "nb 1st to bridge",
    type: "dedicated",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.burrardBridgeNb.id, VIDEOS.burrardNb.id],
    positions: [
      BURRARD_1ST_E,
      [49.27072, -123.14534],
      [49.27145, -123.14529],
      [49.27183, -123.14527],
      [49.27206, -123.14521],
      BURRARD_CORNWALL_E,
      [49.27243, -123.14499],
      [49.27274, -123.14462],
      [49.27296, -123.14428],
      NORTHBOUND_ELEVATION_START,
    ],
  },
  {
    routeNames: [ROUTES.burrard.name],
    description: "northbound bridge",
    type: "dedicated",
    oneWay: "required",
    elevation: 1,
    videoIds: [VIDEOS.burrardBridgeNb.id, VIDEOS.burrardNb.id],
    positions: [
      NORTHBOUND_ELEVATION_START,
      [49.27394, -123.14146],
      [49.27468, -123.13917],
      [49.27526, -123.13737],
      [49.27564, -123.13616],
      [49.27647, -123.13358],
      NORTHBOUND_ELEVATION_END,
    ],
  },
  {
    routeNames: [ROUTES.burrard.name],
    description: "northbound post-bridge",
    type: "dedicated",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.burrardBridgeNb.id, VIDEOS.burrardNb.id],
    positions: [NORTHBOUND_ELEVATION_END, BURRARD_NORTHBOUND_SPLIT],
  },
  {
    routeNames: [ROUTES.burrard.name],
    description: "northbound post-bridge post-split",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.burrardNb.id],
    positions: [
      BURRARD_NORTHBOUND_SPLIT,
      [49.2768, -123.13249],
      BURRARD_PACIFIC_SE_W,
      BURRARD_PACIFIC_NE,
      BURRARD_DRAKE_E,
    ],
  },
  {
    routeNames: [ROUTES.burrard.name],
    description: "northbound drake to burnaby",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.burrardNb.id, VIDEOS.burnabyWb.id],
    positions: [BURRARD_DRAKE_E, BURRARD_BURNABY_E],
  },
  {
    routeNames: [ROUTES.burrard.name],
    description: "northbound end",
    type: "dedicated",
    oneWay: "required",
    positions: [BURRARD_BURNABY_E, NORTHBOUND_ENDPOINT],
  },

  // north end
  {
    description: "from pacific eb",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.burrardBridgeSb.id],
    positions: [
      BURRARD_PACIFIC_SW,
      [49.27695, -123.13289],
      BURRARD_SOUTHBOUND_MERGE,
    ],
  },
  {
    description: "to pacific eb",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.burrardBridgeNb.id],
    positions: [
      BURRARD_NORTHBOUND_SPLIT,
      [49.27678, -123.13244],
      BURRARD_PACIFIC_SE_E,
    ],
  },

  // southbound
  {
    routeNames: [ROUTES.burrard.name],
    description: "sb: downtown",
    type: "painted",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.burrardSb.id],
    positions: [
      BURRARD_HASTINGS,
      [49.28713, -123.1172],
      [49.28665, -123.11792],
      BURRARD_DUNSMUIR,
      [49.28522, -123.12009],
      [49.28448, -123.1212],
      [49.28406, -123.12183],
      [49.28335, -123.12287],
      BURRARD_SMITHE,
      [49.28194, -123.12502],
      [49.28125, -123.12606],
      BURRARD_COMOX,
      BURRARD_HELMCKEN_SW,
      [49.2795, -123.12873],
      [49.27914, -123.12926],
      BURRARD_BURNABY_W,
    ],
  },
  {
    routeNames: [ROUTES.burrard.name],
    description: "sb: burnaby to drake",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.burrardSb.id, VIDEOS.burnabyEb.id],
    positions: [BURRARD_BURNABY_W, BURRARD_DRAKE_W],
  },
  {
    routeNames: [ROUTES.burrard.name],
    description: "sb: drake to bridge",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.burrardSb.id],
    positions: [
      BURRARD_DRAKE_W,
      [49.27775, -123.13142],
      BURRARD_PACIFIC_NW,
      [49.27692, -123.13289],
      BURRARD_SOUTHBOUND_MERGE,
    ],
  },
  {
    routeNames: [ROUTES.burrard.name],
    description: "sb: pre-bridge",
    type: "dedicated",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.burrardBridgeSb.id, VIDEOS.burrardSb.id],
    positions: [BURRARD_SOUTHBOUND_MERGE, SOUTHBOUND_ELEVATED_START],
  },
  {
    routeNames: [ROUTES.burrard.name],
    description: "southbound bridge",
    type: "dedicated",
    oneWay: "required",
    elevation: 1,
    videoIds: [VIDEOS.burrardBridgeSb.id, VIDEOS.burrardSb.id],
    positions: [
      SOUTHBOUND_ELEVATED_START,
      [49.27622, -123.135],
      [49.27579, -123.13633],
      [49.27541, -123.13748],
      [49.27497, -123.13884],
      [49.27423, -123.14109],
      SOUTHBOUND_ELEVATED_END,
    ],
  },
  {
    routeNames: [ROUTES.burrard.name],
    description: "southbound post-bridge 1",
    type: "dedicated",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.burrardBridgeSb.id, VIDEOS.burrardSb.id],
    positions: [
      SOUTHBOUND_ELEVATED_END,
      [49.27325, -123.14414],
      SB_PRE_CORNWALL,
    ],
  },
  {
    routeNames: [ROUTES.burrard.name],
    description: "southbound post-bridge 2",
    type: "dedicated",
    oneWay: "required",
    videoIds: [
      VIDEOS.burrardBridgeSb.id,
      VIDEOS.burrardSb.id,
      VIDEOS.yorkWb.id,
    ],
    videoIdsStartAtStart: [VIDEOS.yorkWb.id],
    positions: [SB_PRE_CORNWALL, [49.27286, -123.14511], BURRARD_CORNWALL_NW],
  },
  {
    routeNames: [ROUTES.burrard.name],
    description: "york bi-directional",
    type: "dedicated",
    videoIds: [VIDEOS.yorkWb.id, VIDEOS.burrardSb.id],
    positions: [
      BURRARD_YORK,
      [49.27218, -123.14563],
      BURRARD_CORNWALL_SW,
      BURRARD_CORNWALL_NW,
    ],
  },
  {
    routeNames: [ROUTES.burrard.name],
    description: "kits",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.burrardSb.id],
    videoIdsEndAtEnd: [VIDEOS.burrardSb.id],
    positions: [
      BURRARD_YORK,
      [49.27162, -123.14561],
      BURRARD_1ST_W,
      [49.26978, -123.14567],
      [49.2689, -123.14574],
      [49.26801, -123.14577],
      [49.26717, -123.14578],
      BURRARD_ARBUTUS_GREENWAY_W,
      BURRARD_7TH_W,
    ],
  },
  {
    routeNames: [ROUTES.burrard.name],
    description: "southbound end",
    type: "dedicated",
    oneWay: "required",
    positions: [BURRARD_7TH_W, SOUTHBOUND_ENDPOINT],
  },

  // south end
  {
    description: "cypress to burrard connection",
    type: "dedicated",
    oneWay: "required",
    positions: [
      CYPRESS_CORNWALL_SW,
      CYPRESS_CORNWALL_SE,
      [49.27235, -123.14635],
      [49.2723, -123.14585],
      BURRARD_CORNWALL_SW,
    ],
  },
  {
    description: "connection crossing burrard at cornwall",
    type: "dedicated",
    positions: [BURRARD_CORNWALL_SW, BURRARD_CORNWALL_E],
  },
  {
    description: "southbound to chestnut connection",
    type: "dedicated",
    videoIds: [VIDEOS.burrardBridgeSb.id],
    positions: [
      CHESTNUT_CORNWALL,
      [49.27254, -123.14596],
      [49.27252, -123.14577],
      [49.27258, -123.14554],
      BURRARD_CORNWALL_NW,
    ],
  },
  {
    description: "chestnut to cypress connection",
    type: "dedicated",
    oneWay: "required",
    positions: [
      CHESTNUT_CORNWALL,
      [49.27256, -123.14656],
      [49.27253, -123.1467],
      CYPRESS_CORNWALL_N,
    ],
  },
];
