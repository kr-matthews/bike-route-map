import {
  BEWICKE_3RD_S,
  BEWICKE_KEITH_SE,
  BEWICKE_SPIRIT_N,
  BEWICKE_SPIRIT_S,
  BEWICKE_THIRD_NE,
} from "../intersections";
import { ROUTES } from "../routes";

export const BEWICKE_GREENWAY = [
  {
    routeNames: [ROUTES.bewickeGreenway.name],
    description: "south tip",
    type: "mixed",
    positions: [
      [49.31336, -123.09183],
      [49.31349, -123.09176],
      [49.31361, -123.09178],
      [49.31368, -123.09182],
      [49.31374, -123.09185],
      BEWICKE_SPIRIT_S,
    ],
  },
  {
    routeNames: [ROUTES.bewickeGreenway.name],
    description: "north section",
    type: "mixed",
    positions: [
      BEWICKE_SPIRIT_N,
      [49.31528, -123.09175],
      [49.31558, -123.0918],
      [49.31659, -123.09179],
      [49.31667, -123.09176],
      [49.31751, -123.09174],
      [49.31845, -123.09172],
      [49.31895, -123.09171],
      [49.31895, -123.09146],
      [49.31915, -123.09146],
      [49.31939, -123.09144],
      [49.31966, -123.09132],
      [49.31979, -123.09131],
      BEWICKE_3RD_S,
      BEWICKE_THIRD_NE,
      BEWICKE_KEITH_SE,
      [49.32005, -123.09117],
      [49.32013, -123.0912],
      [49.32023, -123.09123],
    ],
  },
];
