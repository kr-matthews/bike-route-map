import {
  CHESTERFIELD_17TH,
  GRAND_BLVD_W_17TH_E,
  JONES_17TH,
  ST_ANDREWS_17TH,
} from "../intersections";
import { ROUTES } from "../routes";

export const SEVENTEENTH_NV = [
  {
    routeNames: [ROUTES.seventeenthNv.name],
    description: "all",
    type: "quiet",
    positions: [
      JONES_17TH,
      CHESTERFIELD_17TH,
      ST_ANDREWS_17TH,
      GRAND_BLVD_W_17TH_E,
      [49.32399, -123.05644],
    ],
  },
];
