import {
  BLANCA_10TH_E,
  BLANCA_10TH_NW,
  BLANCA_10TH_SW,
  BLANCA_16TH_NE,
  BLANCA_16TH_NW_SLIP,
  BLANCA_4TH_N,
  BLANCA_4TH_SE,
  BLANCA_4TH_SW,
  BLANCA_8TH_E,
  BLANCA_8TH_NW,
  BLANCA_8TH_SW,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const BLANCA_6TH = [49.26738, -123.21518];
const SOUTHBOUND_LANE_END = [49.25914, -123.21549];

export const BLANCA = [
  {
    routeNames: [ROUTES.blanca.name],
    description: "northbound",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.blancaNb.id],
    videoIdsStartAtStart: [VIDEOS.blancaNb.id],
    videoIdsEndAtEnd: [VIDEOS.blancaNb.id],
    positions: [
      // BLANCA_16TH_SE,
      BLANCA_16TH_NE,
      [49.26029, -123.21528],
      [49.26211, -123.21522],
      BLANCA_10TH_E,
      BLANCA_8TH_E,
      [49.26738, -123.21503],
      BLANCA_4TH_SE,
    ],
  },
  {
    routeNames: [ROUTES.blanca.name],
    description: "nb crossing 4th",
    type: "shared",
    oneWay: "required",
    positions: [BLANCA_4TH_SE, BLANCA_4TH_N],
  },
  {
    routeNames: [ROUTES.blanca.name],
    description: "4th to 6th",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.blancaSb.id],
    videoIdsStartAtStart: [VIDEOS.blancaSb.id],
    positions: [BLANCA_4TH_N, BLANCA_4TH_SW, BLANCA_6TH],
  },
  {
    routeNames: [ROUTES.blanca.name],
    description: "southbound with lane",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.blancaSb.id],
    positions: [
      BLANCA_6TH,
      BLANCA_8TH_NW,
      BLANCA_8TH_SW,
      BLANCA_10TH_NW,
      BLANCA_10TH_SW,
      [49.26209, -123.2154],
      [49.26027, -123.21546],
      SOUTHBOUND_LANE_END,
    ],
  },
  {
    routeNames: [ROUTES.blanca.name],
    description: "southbound no lane",
    type: "shared",
    oneWay: "required",
    hideArrows: true,
    videoIds: [VIDEOS.blancaSb.id, VIDEOS.sixteenthWb.id],
    videoIdsStartAtStart: [VIDEOS.sixteenthWb.id],
    positions: [SOUTHBOUND_LANE_END, BLANCA_16TH_NW_SLIP],
  },
];
