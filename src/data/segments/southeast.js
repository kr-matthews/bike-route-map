import {
  CARIBOO_ARMSTRONG_E,
  CASCADE_ARMSTRONG,
  FOURTH_13TH,
  MARY_12TH,
  STATION_HILL_SOUTHPOINT_E,
} from "../intersections";
import { ROUTES } from "../routes";

const GRIFFITHS_SOUTHPOINT_E = [49.21124, -122.95556];
const CUMBERLAND_ARMSTRONG = [49.22973, -122.91514];
const CARIBOO_ARMSTRONG_W_SPLIT = [49.23536, -122.90469];
const FIFTEENTH_13TH_W = [49.21325, -122.94556];

export const SOUTHEAST = [
  {
    description: "15th nb",
    type: "combined",
    oneWay: "required",
    positions: [
      [49.21335, -122.94544],
      [49.21427, -122.94669],
    ],
  },
  {
    description: "15th sb",
    type: "combined",
    oneWay: "required",
    positions: [[49.21417, -122.94683], FIFTEENTH_13TH_W],
  },
  {
    description: "15th",
    type: "mixed",
    positions: [
      [49.21173, -122.9435],
      [49.2124, -122.9444],
      [49.21323, -122.94552],
      FIFTEENTH_13TH_W,
    ],
  },

  {
    routeNames: [ROUTES.southeast.name],
    description: "southpoint",
    type: "shared",
    positions: [
      STATION_HILL_SOUTHPOINT_E,
      [49.2102, -122.95748],
      GRIFFITHS_SOUTHPOINT_E,
    ],
  },
  {
    routeNames: [ROUTES.southeast.name],
    description: "middle",
    type: "quiet",
    positions: [
      GRIFFITHS_SOUTHPOINT_E,
      [49.21125, -122.95549],
      [49.21129, -122.9554],
      [49.2115, -122.95504],
      [49.21166, -122.95476],
      [49.21231, -122.95355],
      [49.21327, -122.95177],
      [49.21419, -122.95006],
      [49.21524, -122.94812],
      [49.21433, -122.94692], // FIFTEENTH_14TH_N
      [49.21329, -122.9455], // FIFTEENTH_13TH_N
      [49.21242, -122.94433], // FIFTEENTH_12TH
      [49.21367, -122.94203],
      [49.21484, -122.93988],
      [49.21554, -122.93861],
      MARY_12TH,
      [49.21676, -122.93636],
      [49.21729, -122.93539],
      [49.21781, -122.93442],
      [49.21829, -122.93354],
      [49.21844, -122.93338],
      [49.22023, -122.93007],
      [49.22051, -122.92953],
      [49.22204, -122.92667],
      FOURTH_13TH,
      [49.22457, -122.92432],
      [49.22566, -122.92233],
      [49.22699, -122.91992],
      [49.22718, -122.91986],
      [49.22829, -122.9178],
      CUMBERLAND_ARMSTRONG,
    ],
  },
  {
    routeNames: [ROUTES.southeast.name],
    description: "armstrong",
    type: "shared",
    positions: [
      CUMBERLAND_ARMSTRONG,
      [49.23065, -122.91343],
      [49.23139, -122.91207],
      [49.23297, -122.90915],
      CASCADE_ARMSTRONG,
    ],
  },
  {
    routeNames: [ROUTES.southeast.name],
    description: "armstrong east end",
    type: "shared",
    oneWay: "recommended",
    positions: [
      CASCADE_ARMSTRONG,
      [49.23523, -122.90497],
      [49.23531, -122.9048],
      CARIBOO_ARMSTRONG_W_SPLIT,
      [49.2354, -122.90454],
      [49.23543, -122.9044],
      CARIBOO_ARMSTRONG_E,
    ],
  },
];
