import { BARNET_ST_JOHN_SW, MOODY_ST_JOHNS_S } from "../intersections";
import { ROUTES } from "../routes";

const MOODY_ST_JOHNS_SE = [49.27657, -122.85002];
const MOODY_BRIDGE_S = [49.2779, -122.85008];
const MOODY_BRIDGE_N = [49.27914, -122.85007];

export const ST_JOHNS = [
  {
    description: "moody path 1",
    type: "mixed",
    elevation: 0.5,
    positions: [
      MOODY_ST_JOHNS_SE,
      [49.27681, -122.85001],
      [49.27761, -122.85002],
      [49.27766, -122.85004],
      [49.27776, -122.85005],
      MOODY_BRIDGE_S,
    ],
  },
  {
    description: "moody bridge path",
    type: "mixed",
    elevation: 1,
    positions: [MOODY_BRIDGE_S, MOODY_BRIDGE_N],
  },
  {
    description: "moody path 2",
    type: "mixed",
    elevation: 0.5,
    positions: [
      MOODY_BRIDGE_N,
      [49.27944, -122.85004],
      [49.27966, -122.85005],
      [49.27971, -122.85005],
      [49.27974, -122.85004],
      [49.27976, -122.85],
      [49.27976, -122.84996],
      [49.27974, -122.84993],
      [49.27971, -122.84992],
      [49.27958, -122.84996],
      [49.2795, -122.84995],
      [49.27942, -122.84993],
      [49.27933, -122.84991],
      [49.27895, -122.84992],
    ],
  },

  {
    routeNames: [ROUTES.stJohns.name],
    description: "primary",
    type: "comfortable",
    positions: [
      BARNET_ST_JOHN_SW,
      [49.27653, -122.86665],
      [49.27652, -122.86568],
      [49.27654, -122.86422],
      [49.27658, -122.86174],
      [49.27662, -122.85865],
      [49.27661, -122.85659],
      [49.2766, -122.85465],
      [49.27659, -122.85243],
      MOODY_ST_JOHNS_S,
    ],
  },
  {
    routeNames: [ROUTES.stJohns.name],
    description: "east half-crosswalk",
    type: "comfortable",
    positions: [MOODY_ST_JOHNS_S, MOODY_ST_JOHNS_SE],
  },
];
