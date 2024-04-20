import {
  NO_6_WESTMINSTER_NW,
  NO_6_WESTMINSTER_SW,
  NO_6_WESTMINSTER_S_W,
} from "../intersections";
import { ROUTES } from "../routes";

export const NO_6_PATH = [
  {
    routeNames: [ROUTES.no6Path.name, ROUTES.westminsterHwy.name],
    description: "crossing westminster",
    type: "mixed",
    positions: [
      NO_6_WESTMINSTER_S_W,
      [49.17005, -123.06931],
      NO_6_WESTMINSTER_SW,
      NO_6_WESTMINSTER_NW,
    ],
  },
  {
    routeNames: [ROUTES.no6Path.name],
    description: "south section",
    type: "mixed",
    positions: [
      NO_6_WESTMINSTER_NW,
      [49.17034, -123.06934],
      [49.17042, -123.06933],
      [49.17046, -123.06934],
      [49.17143, -123.0693],
      [49.17172, -123.06933],
      [49.17259, -123.06931],
      [49.17311, -123.06931],
      [49.17375, -123.06935],
      [49.17618, -123.06931],
    ],
  },
  {
    routeNames: [ROUTES.no6Path.name],
    description: "north section",
    type: "mixed",
    positions: [
      [49.18483, -123.06926],
      [49.18631, -123.06928],
      [49.18638, -123.06926],
      [49.18677, -123.06926],
      [49.18685, -123.06928],
      [49.19028, -123.06931],
      [49.19126, -123.06933],
      [49.19142, -123.06937],
      [49.19179, -123.06937],
      [49.19189, -123.06936],
    ],
  },
];
