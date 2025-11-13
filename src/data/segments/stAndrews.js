import {
  ESPLANADE_WB_MERGE,
  ST_ANDREWS_3RD,
  ST_ANDREWS_4TH,
  ST_ANDREWS_ESPLANADE_SE,
  ST_ANDREWS_SPIRIT,
} from "../intersections";
import { ROUTES } from "../routes";

const ST_ANDREWS_ESPLANADE_N = [49.30854, -123.07329];

export const ST_ANDREWS = [
  {
    description: "join esplanade wb",
    type: "shared",
    oneWay: "required",
    positions: [
      ST_ANDREWS_ESPLANADE_N,
      [49.30855, -123.07339],
      [49.30857, -123.0735],
      [49.30877, -123.07398],
      ESPLANADE_WB_MERGE,
    ],
  },
  {
    description: "join low level eb",
    type: "painted",
    oneWay: "required",
    positions: [
      ST_ANDREWS_ESPLANADE_N,
      [49.30852, -123.07344],
      [49.30848, -123.07346],
      [49.30835, -123.07347],
      ST_ANDREWS_ESPLANADE_SE,
    ],
  },
  {
    routeNames: [ROUTES.stAndrews.name],
    description: "south bit",
    type: "shared",
    positions: [
      ST_ANDREWS_SPIRIT,
      [49.30836, -123.07301],
      [49.30844, -123.0732],
      [49.30848, -123.07327],
      [49.30851, -123.07329],
      ST_ANDREWS_ESPLANADE_N,
    ],
  },
  {
    routeNames: [ROUTES.stAndrews.name],
    description: "esplanade to 4th",
    type: "quiet",
    positions: [
      ST_ANDREWS_ESPLANADE_N,
      [49.30926, -123.07255],
      [49.31004, -123.07179],
      ST_ANDREWS_3RD,
      ST_ANDREWS_4TH,
    ],
  },
];
