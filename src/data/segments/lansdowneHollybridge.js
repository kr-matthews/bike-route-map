import {
  GILBERT_LANSDOWNE_NE,
  GILBERT_LANSDOWNE_NW,
  HOLLYBRIDGE_MIDDLE_ARM_E,
  HOLLYBRIDGE_MIDDLE_ARM_W,
  MINORU_LANSDOWNE_NE,
  MINORU_LANSDOWNE_NW,
} from "../intersections";
import { ROUTES } from "../routes";

const HOLLYBRIDGE_RIVER_E = [49.17464, -123.14855];
const HOLLYBRIDGE_RIVER_W = [49.17479, -123.14871];
const HOLLYBRIDGE_MIDDLE_ARM_SPLIT = [49.17642, -123.1501];

export const LANSDOWNE_HOLLYBRIDGE = [
  {
    description: "lansdowne lane",
    type: "dedicated",
    oneWay: "required",
    positions: [
      [49.17392, -123.1424],
      [49.17391, -123.14392],
    ],
  },
  {
    routeNames: [ROUTES.lansdowneHollybridge.name],
    description: "hollybridge & lansdowne",
    type: "mixed", // 1 block is combined (or dedicated?)
    positions: [
      HOLLYBRIDGE_MIDDLE_ARM_E,
      [49.17665, -123.14981],
      [49.17658, -123.14995],
      [49.1765, -123.15005],
      HOLLYBRIDGE_MIDDLE_ARM_SPLIT,
      [49.17613, -123.15022],
      [49.17481, -123.14873],
      HOLLYBRIDGE_RIVER_W,
      HOLLYBRIDGE_RIVER_E,
      [49.17461, -123.14853],
      [49.17424, -123.14811],
      [49.17412, -123.14789],
      [49.17405, -123.14767],
      [49.17398, -123.1474],
      [49.17397, -123.14726],
      [49.17397, -123.14573],
      GILBERT_LANSDOWNE_NW,
      GILBERT_LANSDOWNE_NE,
      [49.17396, -123.14523],
      [49.17396, -123.14509],
      [49.17394, -123.145],
      [49.17395, -123.14488],
      [49.17396, -123.14426],
      [49.17397, -123.14396],
      [49.17396, -123.14383],
      [49.17396, -123.14373],
      [49.17396, -123.14258],
      [49.17396, -123.14248],
      [49.17397, -123.14236],
      [49.17393, -123.14211],
      [49.17394, -123.14041],
      MINORU_LANSDOWNE_NW,
      MINORU_LANSDOWNE_NE,
    ],
  },
  {
    routeNames: [ROUTES.lansdowneHollybridge.name],
    description: "hollybridge west split",
    type: "combined",
    positions: [
      HOLLYBRIDGE_MIDDLE_ARM_SPLIT,
      [49.17647, -123.15032],
      [49.17647, -123.1504],
      [49.17639, -123.15057],
      HOLLYBRIDGE_MIDDLE_ARM_W,
    ],
  },
];
