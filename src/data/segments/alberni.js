import { CARDERO_ALBERNI, CHILCO_ALBERNI_E } from "../intersections";
import { ROUTES } from "../routes";

export const ALBERNI = [
  {
    routes: [ROUTES.alberni.name],
    description: "primary",
    positions: [
      CHILCO_ALBERNI_E,
      [49.29322, -123.13597],
      [49.29219, -123.13437],
      [49.29116, -123.13279],
      CARDERO_ALBERNI,
    ],
  },
];
