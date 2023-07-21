import {
  CHILCO_ALBERNI_E,
  CHILCO_ALBERNI_W,
  CHILCO_BEACH,
  CHILCO_COMOX,
  CHILCO_GEORGIA_S,
  CHILCO_HARO,
} from "../intersections";
import { ROUTES } from "../routes";

export const CHILCO = [
  {
    routes: [ROUTES.chilco.name],
    description: "primary",
    positions: [
      CHILCO_BEACH,
      [49.28988, -123.14369],
      CHILCO_COMOX,
      [49.29128, -123.14156],
      [49.29198, -123.14052],
      CHILCO_HARO,
      [49.29338, -123.13842],
      CHILCO_ALBERNI_W,
      CHILCO_ALBERNI_E,
    ],
  },
  {
    routes: [ROUTES.chilco.name],
    description: "connection from georgia",
    directions: ["southbound"],
    positions: [CHILCO_GEORGIA_S, CHILCO_ALBERNI_E],
  },
];
