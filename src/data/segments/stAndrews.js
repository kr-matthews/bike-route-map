import {
  ESPLANADE_WB_MERGE,
  ST_ANDREWS_17TH,
  ST_ANDREWS_23RD_N,
  ST_ANDREWS_3RD,
  ST_ANDREWS_4TH,
  ST_ANDREWS_ESPLANADE_SE,
  ST_ANDREWS_KEITH_S,
  ST_ANDREWS_SPIRIT,
} from "../intersections";
import { ROUTES } from "../routes";

const ST_ANDREWS_ESPLANADE_N = [49.30854, -123.07329];
const ST_ANDREWS_KEITH_NW = [49.31438, -123.06728];
const ST_ANDREWS_13TH_SE = [49.31985, -123.06611];
const ST_ANDREWS_13TH_N = [49.31997, -123.06616];

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
    description: "esplanade to keith",
    type: "quiet",
    positions: [
      ST_ANDREWS_ESPLANADE_N,
      [49.30926, -123.07255],
      [49.31004, -123.07179],
      ST_ANDREWS_3RD,
      ST_ANDREWS_4TH,
      ST_ANDREWS_KEITH_S,
    ],
  },
  {
    routeNames: [ROUTES.stAndrews.name],
    description: "nb keith to 13th",
    type: "painted",
    oneWay: "required",
    positions: [
      ST_ANDREWS_KEITH_S,
      [49.31419, -123.06743],
      [49.31434, -123.06719],
      [49.31508, -123.06641],
      [49.31533, -123.06625],
      [49.31546, -123.06621],
      [49.31669, -123.06616],
      [49.31691, -123.06617],
      [49.31795, -123.06616],
      ST_ANDREWS_13TH_SE,
      ST_ANDREWS_13TH_N,
    ],
  },
  {
    routeNames: [ROUTES.stAndrews.name],
    description: "sb 13th to keith",
    type: "quiet",
    oneWay: "recommended",
    positions: [
      ST_ANDREWS_13TH_N,
      [49.31988, -123.06622],
      [49.31682, -123.06628],
      [49.3155, -123.0663],
      [49.31539, -123.06632],
      [49.31527, -123.06637],
      [49.31511, -123.0665],
      [49.31466, -123.06698],
      ST_ANDREWS_KEITH_NW,
    ],
  },
  {
    routeNames: [ROUTES.stAndrews.name],
    description: "sb crossing keith",
    type: "painted",
    oneWay: "required",
    positions: [
      ST_ANDREWS_KEITH_NW,
      [49.31431, -123.06741],
      [49.31425, -123.06753],
      ST_ANDREWS_KEITH_S,
    ],
  },
  {
    routeNames: [ROUTES.stAndrews.name],
    description: "13th to 23rd/necklace",
    type: "quiet",
    positions: [ST_ANDREWS_13TH_N, ST_ANDREWS_17TH, ST_ANDREWS_23RD_N],
  },
];
