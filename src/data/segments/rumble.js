import {
  BULLER_RUMBLE_N,
  GILLEY_RUMBLE_NW,
  MCKAY_RUMBLE,
  BOUNDARY_RUMBLE_NE,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const ROYAL_OAK_RUMBLE_NW = [49.21495, -122.98867];
const MACPHERSON_RUMBLE_N = [49.21497, -122.98285];

export const RUMBLE = [
  {
    routeNames: [ROUTES.rumble.name],
    description: "west half",
    type: "mixed",
    videoIds: [VIDEOS.rumbleWb.id],
    videoIdsEndAtStart: [VIDEOS.rumbleWb.id],
    positions: [
      BOUNDARY_RUMBLE_NE,
      [49.2149, -123.02091],
      [49.21492, -123.01508],
      [49.21492, -123.01241],
      MCKAY_RUMBLE,
      [49.21492, -123.00494],
      [49.21491, -122.99938],
      [49.21492, -122.99387],
      ROYAL_OAK_RUMBLE_NW,
    ],
  },
  {
    description: "missing middle",
    undesignated: true,
    type: "other",
    videoIds: [VIDEOS.rumbleWb.id],
    positions: [ROYAL_OAK_RUMBLE_NW, MACPHERSON_RUMBLE_N],
  },
  {
    routeNames: [ROUTES.rumble.name],
    description: "bad street part",
    type: "shared",
    positions: [
      ROYAL_OAK_RUMBLE_NW,
      [49.21487, -122.98867],
      [49.21487, -122.98286],
      MACPHERSON_RUMBLE_N,
    ],
  },
  {
    routeNames: [ROUTES.rumble.name],
    description: "east half",
    type: "mixed",
    videoIds: [VIDEOS.rumbleWb.id],
    positions: [
      MACPHERSON_RUMBLE_N,
      BULLER_RUMBLE_N,
      [49.21485, -122.97474],
      [49.2148, -122.97222],
      GILLEY_RUMBLE_NW,
    ],
  },
];
