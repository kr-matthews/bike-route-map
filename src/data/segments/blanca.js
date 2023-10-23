import {
  BLANCA_10TH_E,
  BLANCA_10TH_NW,
  BLANCA_10TH_SW,
  BLANCA_15TH,
  BLANCA_16TH_NE,
  BLANCA_16TH_SE,
  BLANCA_16TH_TRAIL,
  BLANCA_4TH_E,
  BLANCA_4TH_W,
  BLANCA_6TH,
  BLANCA_8TH_E,
  BLANCA_8TH_NW,
  BLANCA_8TH_SW,
} from "../intersections";
import { ROUTES } from "../routes";

export const BLANCA = [
  {
    routeNames: [ROUTES.blanca.name],
    description: "northbound",
    type: "uncomfortable",
    oneWay: "required",
    positions: [
      BLANCA_16TH_SE,
      BLANCA_16TH_NE,
      [49.26029, -123.21528],
      [49.26211, -123.21522],
      BLANCA_10TH_E,
      BLANCA_8TH_E,
      [49.26738, -123.21503],
      BLANCA_4TH_E,
    ],
  },
  {
    routeNames: [ROUTES.blanca.name],
    description: "4th to 6th",
    type: "uncomfortable",
    oneWay: "required",
    positions: [BLANCA_4TH_W, BLANCA_6TH],
  },
  {
    routeNames: [ROUTES.blanca.name],
    description: "southbound with lane",
    oneWay: "required",
    positions: [
      BLANCA_6TH,
      BLANCA_8TH_NW,
      BLANCA_8TH_SW,
      BLANCA_10TH_NW,
      BLANCA_10TH_SW,
      [49.26209, -123.2154],
      [49.26027, -123.21546],
      BLANCA_15TH,
    ],
  },
  {
    routeNames: [ROUTES.blanca.name],
    description: "southbound no lane",
    type: "uncomfortable",
    oneWay: "required",
    positions: [BLANCA_15TH, [49.2588, -123.21569], BLANCA_16TH_TRAIL],
  },
];
