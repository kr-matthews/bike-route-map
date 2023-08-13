import {
  BURRARD_1ST_E,
  BURRARD_1ST_W,
  BURRARD_4TH,
  BURRARD_7TH,
  BURRARD_ARBUTUS_GREENWAY_E,
  BURRARD_ARBUTUS_GREENWAY_W,
  BURRARD_BURNABY_E,
  BURRARD_BURNABY_W,
  BURRARD_COMOX,
  BURRARD_CORNWALL_E,
  BURRARD_CORNWALL_NW,
  BURRARD_CORNWALL_SW,
  BURRARD_DRAKE_E,
  BURRARD_DRAKE_W,
  BURRARD_DUNSMUIR,
  BURRARD_HASTINGS,
  BURRARD_NORTHBOUND_SPLIT,
  BURRARD_PACIFIC_NE,
  BURRARD_PACIFIC_SW,
  BURRARD_SMITHE,
  BURRARD_SOUTHBOUND_MERGE,
  BURRARD_YORK,
  CHESTNUT_CORNWALL,
  CHESTNUT_YORK,
  HORNBY_DRAKE,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const BURRARD = [
  // northbound
  {
    routes: [ROUTES.burrard.name],
    description: "6th to 4th nb",
    directions: ["northbound"],
    type: "unofficial",
    hideUnlessVideo: true,
    videos: [VIDEOS.burrardNb],
    positions: [
      BURRARD_ARBUTUS_GREENWAY_E,
      [49.26716, -123.14554],
      BURRARD_4TH,
    ],
  },
  {
    routes: [ROUTES.burrard.name],
    description: "northbound pre-bridge",
    directions: ["northbound"],
    videos: [VIDEOS.burrardNb],
    positions: [
      BURRARD_4TH,
      [49.26889, -123.14547],
      [49.26977, -123.14543],
      BURRARD_1ST_E,
      [49.27072, -123.14534],
      [49.27145, -123.14529],
      [49.27183, -123.14527],
      [49.27206, -123.14521],
      BURRARD_CORNWALL_E,
      [49.27243, -123.14499],
      [49.27274, -123.14462],
      [49.27296, -123.14428],
      [49.27323, -123.14368],
    ],
  },
  {
    routes: [ROUTES.burrard.name],
    description: "northbound bridge",
    directions: ["northbound"],
    elevated: true,
    videos: [VIDEOS.burrardNb],
    positions: [
      [49.27323, -123.14368],
      [49.27394, -123.14146],
      [49.27468, -123.13917],
      [49.27526, -123.13737],
      [49.27564, -123.13616],
      [49.27647, -123.13358],
      [49.27661, -123.13313],
    ],
  },
  {
    routes: [ROUTES.burrard.name],
    description: "northbound post-bridge",
    directions: ["northbound"],
    videos: [VIDEOS.burrardNb],
    positions: [
      [49.27661, -123.13313],
      BURRARD_NORTHBOUND_SPLIT,
      [49.27685, -123.13242],
      BURRARD_PACIFIC_NE,
      BURRARD_DRAKE_E,
      BURRARD_BURNABY_E,
    ],
  },
  {
    routes: [ROUTES.burrard.name],
    description: "northbound end",
    directions: ["northbound"],
    positions: [BURRARD_BURNABY_E, [49.27851, -123.12991]],
  },
  // north end
  {
    description: "drake connection with hornby",
    positions: [
      BURRARD_DRAKE_W,
      BURRARD_DRAKE_E,
      HORNBY_DRAKE,
      [49.27704, -123.12935],
    ],
  },
  // southbound
  {
    routes: [ROUTES.burrard.name],
    description: "southbound pre-bridge",
    directions: ["southbound"],
    positions: [
      BURRARD_HASTINGS,
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
      [49.28018, -123.12768],
      [49.2795, -123.12873],
      [49.27914, -123.12926],
      BURRARD_BURNABY_W,
      BURRARD_DRAKE_W,
      [49.27775, -123.13142],
      BURRARD_PACIFIC_SW,
      BURRARD_SOUTHBOUND_MERGE,
    ],
  },
  {
    routes: [ROUTES.burrard.name],
    description: "southbound bridge",
    directions: ["southbound"],
    elevated: true,
    positions: [
      BURRARD_SOUTHBOUND_MERGE,
      [49.27622, -123.135],
      [49.27579, -123.13633],
      [49.27541, -123.13748],
      [49.27497, -123.13884],
      [49.27423, -123.14109],
      [49.27337, -123.14377],
    ],
  },
  {
    routes: [ROUTES.burrard.name],
    description: "southbound post-bridge",
    directions: ["southbound"],
    positions: [
      [49.27337, -123.14377],
      [49.27325, -123.14414],
      [49.27303, -123.14483],
      [49.27286, -123.14511],
      BURRARD_CORNWALL_NW,
    ],
  },
  {
    routes: [ROUTES.burrard.name],
    description: "york bi-directional",
    positions: [
      BURRARD_YORK,
      [49.27218, -123.14563],
      BURRARD_CORNWALL_SW,
      BURRARD_CORNWALL_NW,
    ],
  },
  {
    routes: [ROUTES.burrard.name],
    description: "kits",
    directions: ["southbound"],
    positions: [
      BURRARD_YORK,
      [49.27162, -123.14561],
      BURRARD_1ST_W,
      [49.26978, -123.14567],
      [49.2689, -123.14574],
      [49.26801, -123.14577],
      [49.26717, -123.14578],
      BURRARD_ARBUTUS_GREENWAY_W,
      BURRARD_7TH,
    ],
  },
  {
    routes: [ROUTES.burrard.name],
    description: "southbound end",
    directions: ["southbound"],
    positions: [BURRARD_7TH, [49.26517, -123.14582]],
  },
  // south end
  {
    description: "york connection",
    positions: [
      CHESTNUT_YORK,
      [49.27153, -123.14593],
      [49.27159, -123.14578],
      BURRARD_YORK,
    ],
  },
  {
    description: "cypress to burrard connection",
    directions: ["eastbound"],
    positions: [
      [49.27238, -123.14786],
      [49.27238, -123.14773],
      [49.27235, -123.14635],
      [49.2723, -123.14585],
      BURRARD_CORNWALL_SW,
    ],
  },
  {
    description: "connection crossing burrard at cornwall",
    positions: [BURRARD_CORNWALL_SW, BURRARD_CORNWALL_E],
  },
  {
    description: "southbound to chestnut connection",
    positions: [
      CHESTNUT_CORNWALL,
      [49.27254, -123.14592],
      [49.27252, -123.14577],
      [49.27258, -123.14554],
      BURRARD_CORNWALL_NW,
    ],
  },
  {
    description: "chestnut to cypress connection",
    directions: ["westbound"],
    positions: [
      CHESTNUT_CORNWALL,
      [49.27256, -123.14656],
      [49.27253, -123.1467],
      [49.27254, -123.14779],
    ],
  },
];
