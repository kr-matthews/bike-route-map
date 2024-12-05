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
import { VIDEOS } from "../videos";

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
    videoIds: [VIDEOS.carderoNb.id],
    videoIdsStartAtStart: [VIDEOS.carderoNb.id],
    positions: [CARDERO_BEACH, [49.28382, -123.14081], CARDERO_BURNABY],
  },
  {
    routeNames: [ROUTES.cardero.name],
    description: "burnaby plaza",
    type: "mixed",
    videoIds: [VIDEOS.carderoNb.id],
    positions: [CARDERO_BURNABY, CARDERO_PANTAGES_S],
  },
  {
    routeNames: [ROUTES.cardero.name],
    description: "pantages to lord roberts",
    type: "quiet",
    videoIds: [VIDEOS.carderoNb.id],
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
    videoIds: [VIDEOS.carderoNb.id],
    positions: [CARDERO_JEPSON_YOUNG, CARDERO_COMOX],
  },
  {
    routeNames: [ROUTES.cardero.name],
    description: "comox to robson",
    type: "quiet",
    videoIds: [VIDEOS.carderoNb.id],
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
    videoIds: [VIDEOS.carderoNb.id],
    videoIdsEndAtEnd: [VIDEOS.carderoNb.id],
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
