import {
  FORBES_3RD_N,
  FORBES_3RD_SE,
  FORBES_3RD_SW,
  HEYWOOD_SPIRIT_NE,
} from "../intersections";
import { ROUTES } from "../routes";

const HEYWOOD_4TH_E = [49.30928, -123.04866];

export const FOURTH_NV = [
  {
    description: "cross 3rd nb",
    type: "quiet",
    oneWay: "required",
    positions: [FORBES_3RD_SE, FORBES_3RD_N],
  },
  {
    description: "cross 3rd sb",
    type: "quiet",
    oneWay: "required",
    positions: [FORBES_3RD_N, FORBES_3RD_SW],
  },
  {
    routeNames: [ROUTES.fourthNV.name],
    description: "primary",
    type: "quiet",
    positions: [
      FORBES_3RD_N,
      [49.31829, -123.0858],
      [49.31832, -123.08575],
      [49.31832, -123.08568],
      [49.31691, -123.08244],
      [49.31561, -123.07947],
      [49.31557, -123.07934],
      [49.31422, -123.07628],
      [49.31289, -123.07319],
      [49.31159, -123.07021],
      [49.31028, -123.06721],
      [49.30976, -123.06603],
      [49.3096, -123.06566],
      [49.30957, -123.06556],
      [49.30956, -123.06545],
      [49.30954, -123.06324],
      [49.30951, -123.06024],
      [49.30948, -123.05721],
      [49.30946, -123.05444],
      [49.30943, -123.05209],
      [49.30939, -123.04887],
      [49.30935, -123.04875],
      HEYWOOD_4TH_E,
    ],
  },
  {
    routeNames: [ROUTES.fourthNV.name],
    description: "e end, to spirit trail",
    type: "mixed",
    positions: [HEYWOOD_4TH_E, HEYWOOD_SPIRIT_NE],
  },
];
