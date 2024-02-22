import {
  BOUNDARY_EWEN,
  BOUNDARY_WESTMINSTER_EN,
  BOUNDARY_WESTMINSTER_ES,
} from "../intersections";
import { ROUTES } from "../routes";

export const BOUNDARY = [
  {
    routeNames: [ROUTES.boundary.name],
    description: "all",
    type: "mixed",
    positions: [
      [49.17853, -122.95682],
      [49.17861, -122.95702],
      [49.18031, -122.957],
      [49.18162, -122.95701],
      [49.18173, -122.95695],
      BOUNDARY_EWEN,
      [49.18212, -122.95699],
      [49.18253, -122.957],
      [49.18275, -122.95708],
      [49.18291, -122.95707],
      [49.18302, -122.95704],
      [49.18317, -122.95709],
      [49.18346, -122.95709],
      [49.18354, -122.95705],
      BOUNDARY_WESTMINSTER_ES,
      BOUNDARY_WESTMINSTER_EN,
    ],
  },
];
