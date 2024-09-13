import {
  ASH_WILLIAMS_N,
  ASH_WILLIAMS_S,
  FOURTH_WILLIAMS_N,
  FOURTH_WILLIAMS_S,
  GARDEN_CITY_WILLIAMS_NE,
  GARDEN_CITY_WILLIAMS_NW,
  GARDEN_CITY_WILLIAMS_S,
  NISHI_WILLIAMS_N,
  NISHI_WILLIAMS_S,
  RAILWAY_WILLIAMS_NE,
  RAILWAY_WILLIAMS_NW,
  RAILWAY_WILLIAMS_SE,
  RAILWAY_WILLIAMS_SW,
  SHELL_WILLIAMS_N,
  SHELL_WILLIAMS_S,
  WEST_DYKE_WILLIAMS,
} from "../intersections";
import { ROUTES } from "../routes";

const WILLIAMS_W = [49.14101, -123.19428];
const WILLIAMS_LANES_W = [49.14102, -123.19237];
const EB_LANE_START = [49.14099, -123.19075];

const NO_1_WILLIAMS_SW_W = [49.14101, -123.18207];
const NO_1_WILLIAMS_SE = [49.14099, -123.18124];
const NO_3_WILLIAMS_SW_W = [49.14083, -123.13705];
const NO_3_WILLIAMS_SE = [49.14082, -123.13654];

const NO_3_WILLIAMS_NE = [49.14094, -123.13653];
const NO_3_WILLIAMS_NE_E = [49.14094, -123.13594];
const NO_3_WILLIAMS_NW_W = [49.14095, -123.13809];

export const WILLIAMS = [
  // west end
  {
    description: "ramp from dyke",
    type: "mixed",
    positions: [
      WEST_DYKE_WILLIAMS,
      [49.14086, -123.19454],
      [49.14093, -123.19444],
      [49.14096, -123.19436],
      WILLIAMS_W,
    ],
  },
  {
    routeNames: [ROUTES.williams.name],
    description: "west end",
    type: "quiet",
    positions: [WILLIAMS_W, WILLIAMS_LANES_W],
  },

  // eb
  {
    routeNames: [ROUTES.williams.name],
    description: "eb: pre-painted lane",
    type: "shared",
    oneWay: "required",
    positions: [
      WILLIAMS_LANES_W,
      [49.14099, -123.19218],
      [49.14099, -123.19178],
      EB_LANE_START,
    ],
  },
  {
    routeNames: [ROUTES.williams.name],
    description: "eb: to crabapple",
    type: "painted",
    oneWay: "required",
    positions: [EB_LANE_START, FOURTH_WILLIAMS_S],
  },
  {
    routeNames: [ROUTES.williams.name, ROUTES.crabappleRidge.name],
    description: "eb: crabapple",
    type: "painted",
    oneWay: "required",
    positions: [FOURTH_WILLIAMS_S, NISHI_WILLIAMS_S],
  },
  {
    routeNames: [ROUTES.williams.name],
    description: "eb: crabapple to no. 1",
    type: "painted",
    oneWay: "required",
    positions: [NISHI_WILLIAMS_S, NO_1_WILLIAMS_SW_W],
  },
  {
    routeNames: [ROUTES.williams.name],
    description: "eb: crossing no. 1",
    type: "shared",
    oneWay: "required",
    positions: [NO_1_WILLIAMS_SW_W, NO_1_WILLIAMS_SE],
  },
  {
    routeNames: [ROUTES.williams.name],
    description: "eb: no. 1 to no. 3",
    type: "painted",
    oneWay: "required",
    positions: [
      NO_1_WILLIAMS_SE,
      [49.14099, -123.1761],
      [49.14098, -123.17205],
      RAILWAY_WILLIAMS_SW,
      RAILWAY_WILLIAMS_SE,
      [49.14098, -123.1637],
      [49.14096, -123.15898],
      [49.14091, -123.14789],
      NO_3_WILLIAMS_SW_W,
    ],
  },
  {
    routeNames: [ROUTES.williams.name],
    description: "eb: crossing no. 3",
    type: "shared",
    oneWay: "required",
    positions: [NO_3_WILLIAMS_SW_W, NO_3_WILLIAMS_SE],
  },
  {
    routeNames: [ROUTES.williams.name],
    description: "eb: no. 3 to no. 5",
    type: "painted",
    oneWay: "required",
    positions: [
      NO_3_WILLIAMS_SE,
      [49.14081, -123.13085],
      GARDEN_CITY_WILLIAMS_S,
      [49.14076, -123.12095],
      ASH_WILLIAMS_S,
      [49.14068, -123.11413],
      SHELL_WILLIAMS_S,
      [49.14065, -123.1023],
      [49.14064, -123.09195],
    ],
  },

  // wb
  {
    routeNames: [ROUTES.williams.name],
    description: "wb: no. 5 to no. 3",
    type: "painted",
    oneWay: "required",
    positions: [
      [49.14074, -123.09195],
      [49.14075, -123.09794],
      [49.14075, -123.1023],
      SHELL_WILLIAMS_N,
      [49.14078, -123.10917],
      [49.1408, -123.11412],
      ASH_WILLIAMS_N,
      [49.14087, -123.12179],
      GARDEN_CITY_WILLIAMS_NE,
      GARDEN_CITY_WILLIAMS_NW,
      [49.14092, -123.13167],
      [49.14093, -123.13561],
      [49.14094, -123.13568],
      NO_3_WILLIAMS_NE_E,
    ],
  },
  {
    routeNames: [ROUTES.williams.name],
    description: "wb: no. 3 protected",
    type: "dedicated",
    oneWay: "required",
    positions: [NO_3_WILLIAMS_NE_E, NO_3_WILLIAMS_NE],
  },
  {
    routeNames: [ROUTES.williams.name],
    description: "wb: no. 3 shared",
    type: "shared",
    oneWay: "required",
    positions: [NO_3_WILLIAMS_NE, NO_3_WILLIAMS_NW_W],
  },
  {
    routeNames: [ROUTES.williams.name],
    description: "wb: no. 3 to crabapple",
    type: "painted",
    oneWay: "required",
    positions: [
      NO_3_WILLIAMS_NW_W,
      [49.14096, -123.13938],
      [49.14099, -123.14494],
      [49.14101, -123.1479],
      [49.14103, -123.15088],
      [49.14105, -123.15747],
      [49.14106, -123.15897],
      [49.14106, -123.16514],
      RAILWAY_WILLIAMS_NE,
      RAILWAY_WILLIAMS_NW,
      [49.14109, -123.17529],
      [49.14111, -123.18138],
      NISHI_WILLIAMS_N,
    ],
  },
  {
    routeNames: [ROUTES.williams.name, ROUTES.crabappleRidge.name],
    description: "wb: crabapple",
    type: "painted",
    oneWay: "required",
    positions: [NISHI_WILLIAMS_N, FOURTH_WILLIAMS_N],
  },
  {
    routeNames: [ROUTES.williams.name],
    description: "wb: crabapple to end",
    type: "painted",
    oneWay: "required",
    positions: [
      FOURTH_WILLIAMS_N,
      [49.14109, -123.19013],
      [49.14108, -123.19177],
      [49.14108, -123.19218],
      WILLIAMS_LANES_W,
    ],
  },
];
