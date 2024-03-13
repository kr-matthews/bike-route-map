import {
  EAST_MALL_AGRONOMY,
  MARINE_AGRONOMY,
  WESBROOK_AGRONOMY_E,
  WESBROOK_AGRONOMY_W,
  WEST_MALL_AGRONOMY_N,
  WEST_MALL_AGRONOMY_S,
} from "../intersections";
import { ROUTES } from "../routes";

export const AGRONOMY = [
  {
    routeNames: [ROUTES.agronomy.name],
    description: "marine to west mall",
    type: "quiet",
    positions: [MARINE_AGRONOMY, [49.26024, -123.25381], WEST_MALL_AGRONOMY_N],
  },
  {
    routeNames: [ROUTES.agronomy.name],
    description: "west mall to wesbrook",
    type: "quiet",
    positions: [
      WEST_MALL_AGRONOMY_S,
      [49.26006, -123.25064],
      [49.26012, -123.25043],
      [49.26057, -123.24916],
      EAST_MALL_AGRONOMY,
      [49.26176, -123.24577],
      WESBROOK_AGRONOMY_W,
      WESBROOK_AGRONOMY_E,
    ],
  },
];
