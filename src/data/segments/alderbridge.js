import {
  GARDEN_CITY_ALDERBRIDGE_NE,
  GARDEN_CITY_ALDERBRIDGE_NW,
  SHELL_ALDERBRIDGE_NE,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const JAYDEN_MEWS_ALDERBRIDGE = [49.17743, -123.11493];
const NO_4_ALDERBRIDGE_NE = [49.17742, -123.11389];

export const ALDERBRIDGE = [
  {
    routeNames: [ROUTES.alderbridge.name],
    description: "west",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.alderbridgeWb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.alderbridgeWb.id],
    positions: [
      GARDEN_CITY_ALDERBRIDGE_NW,
      GARDEN_CITY_ALDERBRIDGE_NE,
      [49.17749, -123.12431],
      [49.17747, -123.12413],
      [49.17748, -123.12347],
      [49.17745, -123.12322],
      [49.17743, -123.12196],
      [49.17742, -123.12148],
      [49.17744, -123.12118],
      [49.17743, -123.12045],
      [49.17739, -123.12016],
      [49.17739, -123.11857],
      [49.17739, -123.1182],
      [49.17739, -123.11678],
      [49.17743, -123.11522],
      JAYDEN_MEWS_ALDERBRIDGE,
    ],
  },
  {
    routeNames: [ROUTES.alderbridge.name],
    description: "missing",
    type: "other",
    videoIds: [ROUTE_VIDEOS.alderbridgeWb.id],
    positions: [
      JAYDEN_MEWS_ALDERBRIDGE,
      [49.1774, -123.11491],
      [49.17741, -123.11428],
      [49.17742, -123.11418],
      NO_4_ALDERBRIDGE_NE,
    ],
  },
  {
    routeNames: [ROUTES.alderbridge.name],
    description: "east",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.alderbridgeWb.id],
    videoIdsStartAtEnd: [ROUTE_VIDEOS.alderbridgeWb.id],
    positions: [
      NO_4_ALDERBRIDGE_NE,
      [49.1774, -123.11121],
      [49.17739, -123.1086],
      [49.17738, -123.10676],
      [49.17738, -123.10567],
      [49.17728, -123.10463],
      [49.17727, -123.10449],
      [49.17725, -123.10349],
      [49.17732, -123.10326],
      [49.17726, -123.10309],
      SHELL_ALDERBRIDGE_NE,
    ],
  },
];
