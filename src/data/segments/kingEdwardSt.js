import {
  KING_EDWARD_LOUGHEED_NE,
  KING_EDWARD_LOUGHEED_NW,
  KING_EDWARD_LOUGHEED_SE,
  KING_EDWARD_LOUGHEED_SW,
  KING_EDWARD_UNITED_NE,
  KING_EDWARD_UNITED_NW,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const KING_EDWARD_ELEVATION_START = [49.23141, -122.86171];
const KING_EDWARD_ELEVATION_END = [49.23293, -122.86177];
const KING_EDWARD_ELEVATION_START_NB = [49.23133, -122.86145];
const KING_EDWARD_ELEVATION_END_NB = [49.23288, -122.8615];
const KING_EDWARD_ELEVATION_START_SB = [49.23293, -122.86172];
const KING_EDWARD_ELEVATION_END_SB = [49.23141, -122.86167];

export const KING_EDWARD_ST = [
  {
    routeNames: [ROUTES.kingEdwardSt.name],
    description: "south end - mup",
    type: "mixed",
    elevation: 0.5,
    videoIds: [ROUTE_VIDEOS.kingEdwardStMupSb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.kingEdwardStMupSb.id],
    positions: [
      KING_EDWARD_UNITED_NW,
      [49.23068, -122.86176],
      KING_EDWARD_ELEVATION_START,
    ],
  },
  {
    routeNames: [ROUTES.kingEdwardSt.name],
    description: "bridge - mup",
    type: "mixed",
    elevation: 1,
    videoIds: [ROUTE_VIDEOS.kingEdwardStMupSb.id],
    positions: [KING_EDWARD_ELEVATION_START, KING_EDWARD_ELEVATION_END],
  },
  {
    routeNames: [ROUTES.kingEdwardSt.name],
    description: "north end - mup",
    type: "mixed",
    elevation: 0.5,
    videoIds: [ROUTE_VIDEOS.kingEdwardStMupSb.id],
    videoIdsStartAtEnd: [ROUTE_VIDEOS.kingEdwardStMupSb.id],
    positions: [
      KING_EDWARD_ELEVATION_END,
      [49.23416, -122.86184],
      [49.23428, -122.86192],
      KING_EDWARD_LOUGHEED_SW,
      KING_EDWARD_LOUGHEED_NW,
    ],
  },

  {
    routeNames: [ROUTES.kingEdwardSt.name],
    description: "south end - road nb",
    type: "painted",
    elevation: 0.5,
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.kingEdwardStNb.id],
    videoIdsStartAtStart: [ROUTE_VIDEOS.kingEdwardStNb.id],
    positions: [
      KING_EDWARD_UNITED_NE,
      [49.23066, -122.86141],
      [49.23072, -122.86143],
      KING_EDWARD_ELEVATION_START_NB,
    ],
  },
  {
    routeNames: [ROUTES.kingEdwardSt.name],
    description: "road nb",
    type: "painted",
    elevation: 1,
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.kingEdwardStNb.id],
    positions: [KING_EDWARD_ELEVATION_START_NB, KING_EDWARD_ELEVATION_END_NB],
  },
  {
    routeNames: [ROUTES.kingEdwardSt.name],
    description: "north end - road nb",
    type: "painted",
    elevation: 0.5,
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.kingEdwardStNb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.kingEdwardStNb.id],
    positions: [
      KING_EDWARD_ELEVATION_END_NB,
      [49.2333, -122.86145],
      KING_EDWARD_LOUGHEED_SE,
      KING_EDWARD_LOUGHEED_NE,
    ],
  },

  {
    routeNames: [ROUTES.kingEdwardSt.name],
    description: "south end - road sb",
    type: "painted",
    elevation: 0.5,
    oneWay: "required",
    positions: [
      KING_EDWARD_LOUGHEED_SW,
      [49.23434, -122.86179],
      KING_EDWARD_ELEVATION_START_SB,
    ],
  },
  {
    routeNames: [ROUTES.kingEdwardSt.name],
    description: "road sb",
    type: "painted",
    elevation: 1,
    oneWay: "required",
    positions: [KING_EDWARD_ELEVATION_START_SB, KING_EDWARD_ELEVATION_END_SB],
  },
  {
    routeNames: [ROUTES.kingEdwardSt.name],
    description: "north end - road sb",
    type: "painted",
    elevation: 0.5,
    oneWay: "required",
    positions: [
      KING_EDWARD_ELEVATION_END_SB,
      [49.23141, -122.86167],
      [49.23072, -122.86171],
      [49.23065, -122.86174],
      KING_EDWARD_UNITED_NW,
    ],
  },
];
