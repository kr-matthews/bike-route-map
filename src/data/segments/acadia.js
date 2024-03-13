import {
  ACADIA_OSOYOOS,
  ACADIA_UNIVERSITY_N,
  ACADIA_UNIVERSITY_S,
} from "../intersections";
import { ROUTES } from "../routes";

export const ACADIA = [
  {
    routeNames: [ROUTES.acadia.name],
    description: "all",
    type: "quiet",
    positions: [
      ACADIA_OSOYOOS,
      [49.26083, -123.23379],
      [49.2609, -123.23379],
      [49.26097, -123.23382],
      [49.26163, -123.23437],
      [49.26169, -123.23444],
      [49.26325, -123.23573],
      [49.26342, -123.23587],
      [49.26485, -123.23705],
      [49.26594, -123.2379],
      ACADIA_UNIVERSITY_S,
      ACADIA_UNIVERSITY_N,
    ],
  },
];
