import { GILLEY_RUMBLE_NW, MCKAY_RUMBLE } from "../intersections";
import { ROUTES } from "../routes";

const ROYAL_OAK_RUMBLE_NW = [49.21494, -122.98862];
const MACPHERSON_RUMBLE_N = [49.21497, -122.98285];

export const RUMBLE = [
  {
    routeNames: [ROUTES.rumble.name],
    description: "west half",
    type: "mixed",
    positions: [
      [49.21489, -123.02355],
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
    routeNames: [ROUTES.rumble.name],
    description: "missing middle",
    type: "other",
    positions: [ROYAL_OAK_RUMBLE_NW, MACPHERSON_RUMBLE_N],
  },
  {
    routeNames: [ROUTES.rumble.name],
    description: "east half",
    type: "mixed",
    positions: [
      MACPHERSON_RUMBLE_N,
      [49.21488, -122.97753],
      [49.21485, -122.97474],
      [49.2148, -122.97222],
      GILLEY_RUMBLE_NW,
    ],
  },
];
