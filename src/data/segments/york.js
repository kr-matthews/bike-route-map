import {
  CHESTNUT_YORK,
  CYPRESS_YORK_SE,
  CYPRESS_YORK_SW,
  STEPHENS_YORK,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const MAPLE_YORK_SE = [49.2716, -123.15019];

export const YORK = [
  {
    routeNames: [ROUTES.york.name, ROUTES.seasideBypass.name],
    description: "stephens to maple",
    type: "quiet",
    videoIds: [VIDEOS.yorkEb.id],
    positions: [
      STEPHENS_YORK,
      [49.27189, -123.1645],
      [49.27185, -123.16433],
      [49.27182, -123.16211],
      [49.27178, -123.15976],
      [49.27174, -123.15738],
      [49.2717, -123.15501],
      [49.27166, -123.15265],
      [49.27162, -123.15028],
      MAPLE_YORK_SE,
    ],
  },
  {
    routeNames: [ROUTES.york.name, ROUTES.seasideBypass.name],
    description: "maple to cypress",
    type: "dedicated",
    videoIds: [VIDEOS.yorkEb.id],
    positions: [MAPLE_YORK_SE, CYPRESS_YORK_SW, CYPRESS_YORK_SE],
  },
  {
    routeNames: [ROUTES.york.name],
    description: "cypress to chestnut",
    type: "dedicated",
    videoIds: [VIDEOS.yorkEb.id],
    positions: [CYPRESS_YORK_SE, CHESTNUT_YORK],
  },
];
