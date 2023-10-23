import {
  BURRARD_BURNABY_E,
  BURRARD_BURNABY_W,
  BUTE_BURNABY,
  CARDERO_BURNABY,
} from "../intersections";
import { ROUTES } from "../routes";

export const BURNABY = [
  {
    routeNames: [ROUTES.burnaby.name],
    description: "primary",
    positions: [
      CARDERO_BURNABY,
      [49.28375, -123.13854],
      [49.28297, -123.13734],
      [49.2821, -123.136],
      BUTE_BURNABY,
      [49.27967, -123.13225],
      BURRARD_BURNABY_W,
      BURRARD_BURNABY_E,
    ],
  },
];
