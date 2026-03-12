import {
  GRAND_BLVD_W_KEITH_NE,
  QUEENSBURY_3RD_NE,
  QUEENSBURY_3RD_NW,
  QUEENSBURY_3RD_SE,
  QUEENSBURY_3RD_SW,
  QUEENSBURY_4TH_E,
  QUEENSBURY_4TH_W,
} from "../intersections";
import { ROUTES } from "../routes";

const QUEENSBURY_NB_LANE_START = [49.30903, -123.05718];
const QUEENSBURY_SB_LANE_END = [49.30902, -123.05729];
const QUEENSBURY_7TH_W = [49.31249, -123.05721];

const QUEENSBURY_KEITH_SE = [49.31343, -123.05706];
const QUEENSBURY_KEITH_SW = [49.31343, -123.05721];

const GRAND_BLVD_W_KEITH_S_W = [49.31346, -123.0581];
const GRAND_BLVD_W_KEITH_SE = [49.31346, -123.05765];
const GRAND_BLVD_E_KEITH_SW = [49.31344, -123.05667];

export const QUEENSBURY = [
  // keith
  {
    // this is e keith
    description: "keith s side, w of w",
    type: "mixed",
    oneWay: "required",
    positions: [GRAND_BLVD_W_KEITH_S_W, GRAND_BLVD_W_KEITH_SE],
  },
  {
    description: "keith s side, w to queensbury and crossing",
    type: "mixed",
    positions: [
      GRAND_BLVD_W_KEITH_SE,
      QUEENSBURY_KEITH_SW,
      QUEENSBURY_KEITH_SE,
    ],
  },
  {
    description: "keith s side, queensbury to e",
    type: "mixed",
    oneWay: "recommended",
    positions: [GRAND_BLVD_E_KEITH_SW, QUEENSBURY_KEITH_SE],
  },

  {
    description: "w crossing keith",
    type: "mixed",
    positions: [GRAND_BLVD_W_KEITH_SE, GRAND_BLVD_W_KEITH_NE],
  },

  // nb
  {
    routeNames: [ROUTES.queensbury.name],
    description: "nb crossing 3rd",
    type: "painted",
    oneWay: "required",
    positions: [QUEENSBURY_3RD_SE, QUEENSBURY_3RD_NE],
  },
  {
    routeNames: [ROUTES.queensbury.name],
    description: "nb shared",
    type: "shared",
    oneWay: "required",
    positions: [
      QUEENSBURY_3RD_NE,
      [49.30861, -123.05718],
      [49.30892, -123.05717],
      QUEENSBURY_NB_LANE_START,
    ],
  },
  {
    routeNames: [ROUTES.queensbury.name],
    description: "nb painted",
    type: "painted",
    oneWay: "required",
    positions: [
      QUEENSBURY_NB_LANE_START,
      QUEENSBURY_4TH_E,
      QUEENSBURY_KEITH_SE,
    ],
  },

  // sb
  {
    routeNames: [ROUTES.queensbury.name],
    description: "sb shared start",
    type: "shared",
    oneWay: "required",
    positions: [QUEENSBURY_KEITH_SW, [49.31295, -123.0572], QUEENSBURY_7TH_W],
  },
  {
    routeNames: [ROUTES.queensbury.name],
    description: "sb painted",
    type: "painted",
    oneWay: "required",
    positions: [QUEENSBURY_7TH_W, QUEENSBURY_4TH_W, QUEENSBURY_SB_LANE_END],
  },
  {
    routeNames: [ROUTES.queensbury.name],
    description: "sb shared end",
    type: "shared",
    oneWay: "required",
    positions: [
      QUEENSBURY_SB_LANE_END,
      [49.30861, -123.05729],
      QUEENSBURY_3RD_NW,
    ],
  },
  {
    routeNames: [ROUTES.queensbury.name],
    description: "sb crossing 3rd",
    type: "painted",
    oneWay: "required",
    positions: [QUEENSBURY_3RD_NW, QUEENSBURY_3RD_SW],
  },
];
