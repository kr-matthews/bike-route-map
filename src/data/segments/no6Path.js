import {
  NO_6_WESTMINSTER_NW,
  NO_6_WESTMINSTER_SW,
  NO_6_WESTMINSTER_S_W,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const NO_6_COMMERCE_SW = [49.17618, -123.06931];
const NO_6_CAMBIE_NW = [49.18483, -123.06926];

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
    videoIds: [ROUTE_VIDEOS.no6PathSb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.no6PathSb.id],
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
      NO_6_COMMERCE_SW,
    ],
  },
  {
    description: "no. 6 gap",
    type: "shared",
    undesignated: true,
    videoIds: [ROUTE_VIDEOS.no6PathSb.id],
    positions: [
      NO_6_COMMERCE_SW,
      [49.17632, -123.06919],
      [49.17954, -123.06917],
      [49.18166, -123.06915],
      [49.18472, -123.06913],
      NO_6_CAMBIE_NW,
    ],
  },
  {
    routeNames: [ROUTES.no6Path.name],
    description: "north section",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.no6PathSb.id],
    videoIdsStartAtEnd: [ROUTE_VIDEOS.no6PathSb.id],
    positions: [
      NO_6_CAMBIE_NW,
      [49.18631, -123.06928],
      [49.18638, -123.06926],
      [49.18677, -123.06926],
      [49.18685, -123.06928],
      [49.19028, -123.06931],
      [49.19126, -123.06933],
      [49.19142, -123.06937],
      [49.19179, -123.06937],
      // [49.19189, -123.06936], // just a sidewalk
    ],
  },
];
