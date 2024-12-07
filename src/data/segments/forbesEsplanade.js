import {
  FORBES_3RD_SW,
  ST_ANDREWS_ESPLANADE_NE,
  ST_ANDREWS_ESPLANADE_SE,
  ST_ANDREWS_ESPLANADE_SW,
} from "../intersections";
import { ROUTES } from "../routes";

const ST_GEORGES_ESPLANADE_NW = [49.30988, -123.07655];

export const FORBES_ESPLANADE = [
  // eb
  {
    routeNames: [ROUTES.forbesEsplanade.name],
    description: "eb",
    type: "dedicated", // except the first little bit
    oneWay: "required",
    positions: [
      FORBES_3RD_SW,
      [49.31716, -123.08594],
      [49.31693, -123.08595],
      [49.31689, -123.08594],
      [49.31509, -123.086],
      [49.31398, -123.08603],
      [49.31389, -123.08603],
      [49.31383, -123.08602],
      [49.31378, -123.08599],
      [49.31374, -123.08592],
      [49.31365, -123.08571],
      [49.31239, -123.08277],
      [49.3123, -123.08256],
      [49.31173, -123.08123],
      [49.31149, -123.08077],
      [49.31109, -123.07984],
      [49.31106, -123.07973],
      [49.30995, -123.07715],
      [49.30976, -123.07669],
      [49.30964, -123.07629],
      [49.30955, -123.07608],
      [49.3094, -123.07573],
      [49.30924, -123.07537],
      [49.30916, -123.07528],
      [49.30891, -123.07479],
      [49.30847, -123.07393],
      ST_ANDREWS_ESPLANADE_SW,
    ],
  },
  {
    routeNames: [ROUTES.forbesEsplanade.name],
    description: "eb last bit",
    type: "painted",
    oneWay: "required",
    positions: [ST_ANDREWS_ESPLANADE_SW, ST_ANDREWS_ESPLANADE_SE],
  },

  // wb
  {
    routeNames: [ROUTES.forbesEsplanade.name],
    description: "wb painted start",
    type: "painted",
    oneWay: "required",
    positions: [
      ST_ANDREWS_ESPLANADE_NE,
      [49.30846, -123.07347],
      [49.309, -123.0745],
      [49.3091, -123.07469],
      [49.3092, -123.07489],
      [49.30976, -123.07617],
      ST_GEORGES_ESPLANADE_NW,
    ],
  },
  {
    routeNames: [ROUTES.forbesEsplanade.name],
    description: "wb",
    type: "dedicated", // except the end little bit
    oneWay: "required",
    positions: [
      ST_GEORGES_ESPLANADE_NW,
      [49.30996, -123.07676],
      [49.31106, -123.07931],
      [49.31118, -123.07958],
      [49.31243, -123.08243],
      [49.31252, -123.08263],
      [49.31308, -123.08398],
      [49.31319, -123.08417],
      [49.31331, -123.08446],
      [49.31339, -123.08461],
      [49.3138, -123.08557],
      [49.31387, -123.08573],
      [49.31391, -123.08579],
      [49.31396, -123.08582],
      [49.31404, -123.08583],
      [49.31437, -123.08584],
      [49.31509, -123.08581],
      [49.31607, -123.08578],
      [49.31655, -123.08576],
      [49.31667, -123.08574],
      [49.31703, -123.08572],
      [49.31709, -123.08568],
    ],
  },
];
