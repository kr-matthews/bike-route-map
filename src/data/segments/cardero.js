import {
  CARDERO_ALBERNI,
  CARDERO_BEACH,
  CARDERO_BURNABY,
  CARDERO_COMOX,
  CARDERO_GEORGIA_N,
  CARDERO_GEORGIA_S,
  CARDERO_HARO,
  CARDERO_SEAWALL,
} from "../intersections";
import { ROUTES } from "../routes";

export const CARDERO = [
  {
    routes: [ROUTES.cardero.name],
    description: "primary",
    positions: [
      CARDERO_BEACH,
      [49.28382, -123.14081],
      CARDERO_BURNABY,
      [49.28524, -123.13867],
      [49.28595, -123.1376],
      CARDERO_COMOX,
      [49.28736, -123.13546],
      [49.28805, -123.1344],
      CARDERO_HARO,
      [49.28946, -123.13227],
      CARDERO_ALBERNI,
      CARDERO_GEORGIA_S,
      CARDERO_GEORGIA_N,
      CARDERO_SEAWALL,
    ],
  },
];
