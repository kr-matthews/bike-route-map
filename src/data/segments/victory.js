import {
  ANTRIM_BC_PARKWAY,
  BULLER_PRENTER,
  BULLER_RUMBLE_N,
  MCKAY_VICTORY,
} from "../intersections";
import { ROUTES } from "../routes";

const ANTRIM_BERESFORD = [49.21917, -122.98504];
const MACPHERSON_BERESFORD_E = [49.21875, -122.9828];

export const VICTORY = [
  {
    description: "connection with bc parkway",
    type: "comfortable",
    positions: [ANTRIM_BERESFORD, [49.21923, -122.98511], ANTRIM_BC_PARKWAY],
  },
  {
    routeNames: [ROUTES.victory.name],
    description: "patterson to beresford",
    type: "quiet",
    positions: [
      [49.2184, -123.01233],
      [49.21839, -123.01057],
      MCKAY_VICTORY,
      [49.21839, -123.00678],
      [49.21838, -123.00515],
      [49.21846, -123.00484],
      [49.21845, -123.00135],
      [49.21845, -122.99758],
      [49.21845, -122.99404],
      [49.21848, -122.99112],
      [49.2185, -122.98848],
      [49.2185, -122.98504],
      [49.2191, -122.98506],
      ANTRIM_BERESFORD,
    ],
  },
  {
    routeNames: [ROUTES.victory.name],
    description: "busy beresford",
    type: "shared",
    positions: [
      ANTRIM_BERESFORD,
      [49.21876, -122.98307],
      MACPHERSON_BERESFORD_E,
    ],
  },
  {
    routeNames: [ROUTES.victory.name],
    description: "macpherson to hedley",
    type: "quiet",
    positions: [
      MACPHERSON_BERESFORD_E,
      [49.2184, -122.98113],
      [49.21805, -122.97942],
      [49.21796, -122.97899],
      [49.21774, -122.97827],
      [49.21752, -122.97767],
      BULLER_PRENTER,
      [49.21632, -122.97755],
      [49.21564, -122.97753],
      BULLER_RUMBLE_N,
      [49.21386, -122.9775],
      [49.21385, -122.97477],
      [49.21382, -122.97196],
      [49.2138, -122.96735],
    ],
  },
];
