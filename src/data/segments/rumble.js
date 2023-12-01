import { GILLEY_RUMBLE_NW, MCKAY_RUMBLE } from "../intersections";
import { ROUTES } from "../routes";

export const RUMBLE = [
  {
    routeNames: [ROUTES.rumble.name],
    description: "west half",
    positions: [
      [49.21489, -123.02355],
      [49.2149, -123.02091],
      [49.21492, -123.01508],
      [49.21492, -123.01241],
      MCKAY_RUMBLE,
      [49.21492, -123.00494],
      [49.21491, -122.99938],
      [49.21492, -122.99387],
      [49.21494, -122.98862],
    ],
  },
  {
    routeNames: [ROUTES.rumble.name],
    description: "east half",
    positions: [
      [49.21497, -122.98285],
      [49.21488, -122.97753],
      [49.21485, -122.97474],
      [49.2148, -122.97222],
      GILLEY_RUMBLE_NW,
    ],
  },
];
