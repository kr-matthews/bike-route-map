import {
  CARDERO_ALBERNI_N,
  CARDERO_ALBERNI_S,
  CARDERO_BEACH,
  CARDERO_BURNABY,
  CARDERO_COMOX,
  CARDERO_GEORGIA_N,
  CARDERO_GEORGIA_S,
  CARDERO_HARO,
  CARDERO_SEAWALL_N,
  CARDERO_SEAWALL_S,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const CARDERO_PANTAGES_S = [49.28488, -123.13919];
const CARDERO_JEPSON_YOUNG = [49.28624, -123.13712];
const CARDERO_ROBSON = [49.28946, -123.13227];

export const CARDERO = [
  {
    routeNames: [ROUTES.cardero.name],
    type: "dedicated",
    description: "seawall to beach",
    isClosed: true,
    positions: [
      CARDERO_SEAWALL_S,
      [49.28298, -123.14201],
      [49.28304, -123.14195],
      CARDERO_BEACH,
    ],
  },
  {
    routeNames: [ROUTES.cardero.name],
    description: "beach to burnaby",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.carderoNb.id, ROUTE_VIDEOS.carderoSb.id],
    videoIdsStartAtStart: [ROUTE_VIDEOS.carderoNb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.carderoSb.id],
    positions: [CARDERO_BEACH, [49.28382, -123.14081], CARDERO_BURNABY],
  },
  {
    routeNames: [ROUTES.cardero.name],
    description: "burnaby plaza",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.carderoNb.id, ROUTE_VIDEOS.carderoSb.id],
    positions: [CARDERO_BURNABY, CARDERO_PANTAGES_S],
  },
  {
    routeNames: [ROUTES.cardero.name],
    description: "pantages to lord roberts",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.carderoSb.id, ROUTE_VIDEOS.carderoNb.id],
    positions: [
      CARDERO_PANTAGES_S,
      [49.28524, -123.13867],
      [49.28595, -123.1376],
      CARDERO_JEPSON_YOUNG,
    ],
  },
  {
    routeNames: [ROUTES.cardero.name],
    description: "lord roberts",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.carderoSb.id, ROUTE_VIDEOS.carderoNb.id],
    positions: [CARDERO_JEPSON_YOUNG, CARDERO_COMOX],
  },
  {
    routeNames: [ROUTES.cardero.name],
    description: "comox to robson",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.carderoSb.id, ROUTE_VIDEOS.carderoNb.id],
    positions: [
      CARDERO_COMOX,
      [49.28736, -123.13546],
      [49.28805, -123.1344],
      CARDERO_HARO,
      CARDERO_ROBSON,
    ],
  },
  {
    routeNames: [ROUTES.cardero.name],
    description: "robson to seawall",
    type: "shared",
    videoIds: [ROUTE_VIDEOS.carderoSb.id, ROUTE_VIDEOS.carderoNb.id],
    videoIdsStartAtEnd: [ROUTE_VIDEOS.carderoSb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.carderoNb.id],
    positions: [
      CARDERO_ROBSON,
      CARDERO_ALBERNI_S,
      CARDERO_ALBERNI_N,
      CARDERO_GEORGIA_S,
      CARDERO_GEORGIA_N,
      [49.29182, -123.12873],
      [49.29183, -123.12864],
      CARDERO_SEAWALL_N,
    ],
  },
];
