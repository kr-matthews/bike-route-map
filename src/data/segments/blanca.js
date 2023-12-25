import {
  BLANCA_10TH_E,
  BLANCA_10TH_NW,
  BLANCA_10TH_SW,
  BLANCA_16TH_NE,
  BLANCA_16TH_NW_SLIP,
  BLANCA_4TH_N,
  BLANCA_4TH_SE,
  BLANCA_4TH_SW,
  BLANCA_6TH,
  BLANCA_8TH_E,
  BLANCA_8TH_NW,
  BLANCA_8TH_SW,
} from "../intersections";
import { ROUTES } from "../routes";

export const SOUTHBOUND_LANE_END = [49.25914, -123.21549];

export const BLANCA = [
  {
    routeNames: [ROUTES.blanca.name],
    description: "northbound",
    type: "shared",
    oneWay: "required",
    positions: [
      // BLANCA_16TH_SE,
      BLANCA_16TH_NE,
      [49.26029, -123.21528],
      [49.26211, -123.21522],
      BLANCA_10TH_E,
      BLANCA_8TH_E,
      [49.26738, -123.21503],
      BLANCA_4TH_SE,
      BLANCA_4TH_N,
    ],
  },
  {
    routeNames: [ROUTES.blanca.name],
    description: "4th to 6th",
    type: "shared",
    oneWay: "required",
    positions: [BLANCA_4TH_N, BLANCA_4TH_SW, BLANCA_6TH],
  },
  {
    routeNames: [ROUTES.blanca.name],
    description: "southbound with lane",
    type: "painted",
    oneWay: "required",
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
    positions: [SOUTHBOUND_LANE_END, BLANCA_16TH_NW_SLIP],
  },
];
