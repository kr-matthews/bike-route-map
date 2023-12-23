import {
  ADERA_68TH,
  ANGUS_33RD_N,
  ANGUS_33RD_S,
  ANGUS_45TH,
  ANGUS_59TH,
  ANGUS_KING_EDWARD_NE,
  ANGUS_KING_EDWARD_NW,
  ANGUS_KING_EDWARD_S,
  ANGUS_MATTHEWS_E,
  ANGUS_MATTHEWS_W,
  ANGUS_NANTON,
  CORNISH_68TH,
  CYPRESS_10TH,
  CYPRESS_1ST,
  CYPRESS_1ST_NE,
  CYPRESS_1ST_NW,
  CYPRESS_7TH,
  CYPRESS_ARBUTUS_GREENWAY,
  CYPRESS_CORNWALL_N,
  CYPRESS_CORNWALL_SE,
  CYPRESS_CORNWALL_SW,
  CYPRESS_OGDEN,
  CYPRESS_WHYTE,
  CYPRESS_YORK_SE,
  CYPRESS_YORK_SW,
  MARINE_70TH_N,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const CYPRESS = [
  {
    routeNames: [ROUTES.cypress.name],
    description: "cornish",
    videos: [VIDEOS.cypressNb.id],
    positions: [MARINE_70TH_N, CORNISH_68TH],
  },
  {
    routeNames: [ROUTES.cypress.name],
    description: "68th to king edward",
    videos: [VIDEOS.cypressNb.id],
    positions: [
      ADERA_68TH,
      [49.2123, -123.14356],
      [49.2132, -123.14353],
      [49.21325, -123.14662],
      [49.21504, -123.14752],
      [49.2166, -123.14829],
      [49.21674, -123.14835],
      ANGUS_59TH,
      [49.21944, -123.14825],
      [49.22179, -123.14816],
      [49.22416, -123.14807],
      [49.22572, -123.14801],
      [49.22706, -123.14797],
      [49.22888, -123.14791],
      ANGUS_45TH,
      [49.23262, -123.14778],
      [49.23444, -123.14771],
      [49.23632, -123.14763],
      [49.23727, -123.1476],
      [49.2376, -123.14743],
      [49.23781, -123.14718],
      [49.23847, -123.14608],
      [49.23858, -123.1459],
      [49.23879, -123.14572],
      [49.23905, -123.14564],
      [49.23994, -123.1456],
      ANGUS_33RD_S,
      ANGUS_33RD_N,
      [49.2436, -123.1455],
      [49.24563, -123.14545],
      [49.24611, -123.14559],
      [49.2468, -123.14602],
      [49.2473, -123.14617],
      ANGUS_NANTON,
      ANGUS_KING_EDWARD_S,
    ],
  },
  {
    routeNames: [ROUTES.cypress.name],
    description: "angus to 1st",
    videos: [VIDEOS.cypressNb.id],
    positions: [
      ANGUS_MATTHEWS_W,
      [49.25126, -123.14725],
      [49.25115, -123.148],
      [49.25113, -123.1484],
      [49.25113, -123.14869],
      [49.25293, -123.14854],
      [49.2542, -123.1485],
      [49.25445, -123.14849],
      [49.25629, -123.14841],
      [49.25721, -123.14837],
      [49.25907, -123.14831],
      [49.26092, -123.14824],
      CYPRESS_10TH,
      [49.26375, -123.14814],
      CYPRESS_7TH,
      CYPRESS_ARBUTUS_GREENWAY,
      [49.26807, -123.14797],
      [49.26981, -123.14792],
      CYPRESS_1ST,
    ],
  },
  {
    routeNames: [ROUTES.cypress.name],
    description: "north end",
    videos: [VIDEOS.cypressNb.id],
    videosEndAtEnd: [VIDEOS.cypressNb.id],
    positions: [
      CYPRESS_CORNWALL_N,
      [49.27347, -123.14777],
      [49.27446, -123.14773],
      CYPRESS_WHYTE,
      [49.27621, -123.14767],
      CYPRESS_OGDEN,
    ],
  },
  {
    routeNames: [ROUTES.cypress.name],
    description: "angus median nb",
    oneWay: "required",
    videos: [VIDEOS.cypressNb.id],
    positions: [
      ANGUS_KING_EDWARD_S,
      ANGUS_KING_EDWARD_NE,
      [49.25003, -123.14596],
      [49.25029, -123.14589],
      [49.25071, -123.14575],
      ANGUS_MATTHEWS_E,
      ANGUS_MATTHEWS_W,
    ],
  },
  {
    routeNames: [ROUTES.cypress.name],
    description: "angus median sb",
    oneWay: "required",
    positions: [
      ANGUS_MATTHEWS_W,
      [49.25067, -123.14596],
      [49.2503, -123.14609],
      [49.25002, -123.14615],
      ANGUS_KING_EDWARD_NW,
      ANGUS_KING_EDWARD_S,
    ],
  },
  {
    routeNames: [ROUTES.cypress.name, ROUTES.seasideBypass.name],
    description: "1st to york",
    oneWay: "required",
    videos: [VIDEOS.cypressNb.id],
    positions: [CYPRESS_1ST, CYPRESS_1ST_NE, CYPRESS_YORK_SE],
  },
  {
    routeNames: [ROUTES.cypress.name],
    description: "york to cornwall",
    oneWay: "required",
    videos: [VIDEOS.cypressNb.id],
    positions: [CYPRESS_YORK_SE, CYPRESS_CORNWALL_SE],
  },
  {
    routeNames: [ROUTES.cypress.name],
    description: "crossing cornwall",
    videos: [VIDEOS.cypressNb.id],
    positions: [CYPRESS_CORNWALL_SE, CYPRESS_CORNWALL_N],
  },
  {
    routeNames: [ROUTES.cypress.name],
    description: "cornwall to york",
    oneWay: "required",
    positions: [CYPRESS_CORNWALL_N, CYPRESS_CORNWALL_SW, CYPRESS_YORK_SW],
  },
  {
    routeNames: [ROUTES.cypress.name, ROUTES.seasideBypass.name],
    description: "york to 1st",
    oneWay: "required",
    videos: [VIDEOS.seasideBypassFalseCreekSouthEb.id],
    videosStartAtStart: [VIDEOS.seasideBypassFalseCreekSouthEb.id],
    positions: [CYPRESS_YORK_SW, CYPRESS_1ST_NW, CYPRESS_1ST],
  },
];
