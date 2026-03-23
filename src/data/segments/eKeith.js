import {
  GRAND_BLVD_W_KEITH_NW,
  GRAND_BLVD_W_KEITH_SE,
  ST_ANDREWS_KEITH_N_W,
  ST_ANDREWS_KEITH_S,
} from "../intersections";
import { ROUTES } from "../routes";

const GRAND_BLVD_W_KEITH_S_W = [49.31346, -123.0581];

export const E_KEITH = [
  // eb
  {
    routeNames: [ROUTES.eKeith.name],
    description: "eb before st andrews",
    type: "painted",
    oneWay: "required",
    positions: [
      [49.3143, -123.06796],
      [49.31425, -123.06785],
      ST_ANDREWS_KEITH_S,
    ],
  },
  {
    routeNames: [ROUTES.eKeith.name],
    description: "eb st andrews to grand blvd w",
    type: "painted",
    oneWay: "required",
    positions: [
      ST_ANDREWS_KEITH_S,
      [49.31411, -123.06749],
      [49.31375, -123.06665],
      [49.31369, -123.06648],
      [49.31364, -123.06627],
      [49.3136, -123.06597],
      [49.31358, -123.06562],
      [49.31355, -123.06317],
      [49.31351, -123.06017],
      [49.31349, -123.05869],
      GRAND_BLVD_W_KEITH_S_W,
    ],
  },
  {
    routeNames: [ROUTES.eKeith.name],
    description: "eb mup",
    type: "mixed",
    oneWay: "required",
    positions: [GRAND_BLVD_W_KEITH_S_W, GRAND_BLVD_W_KEITH_SE],
  },

  // wb
  {
    routeNames: [ROUTES.eKeith.name],
    description: "wb",
    type: "painted",
    oneWay: "required",
    positions: [
      GRAND_BLVD_W_KEITH_NW,
      [49.31357, -123.05788],
      [49.31359, -123.06019],
      [49.31363, -123.0632],
      [49.31366, -123.06523],
      [49.31366, -123.06553],
      [49.31368, -123.06568],
      [49.31373, -123.06588],
      [49.31425, -123.06711],
      ST_ANDREWS_KEITH_N_W,
    ],
  },
];
