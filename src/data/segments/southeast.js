import {
  BC_PARKWAY_14TH,
  CARIBOO_ARMSTRONG_E,
  CASCADE_ARMSTRONG,
  FIFTEENTH_LONDON,
  FOURTH_13TH,
  MARY_12TH,
  STATION_HILL_SOUTHPOINT_E,
} from "../intersections";
import { ROUTES } from "../routes";

const GRIFFITHS_SOUTHPOINT_E = [49.21124, -122.95556];
const CUMBERLAND_ARMSTRONG = [49.22973, -122.91514];
const CARIBOO_ARMSTRONG_W_SPLIT = [49.23536, -122.90469];
const FIFTEENTH_13TH_W = [49.21325, -122.94556];
const FIFTEENTH_12TH = [49.21242, -122.94433];
const FIFTEENTH_11TH = [49.2117, -122.94339];

const EIGHTEENTH_STRIDE_W = [49.21231, -122.95355];
const OVERPASS_14TH_W = [49.20913, -122.95711];
const OVERPASS_14TH_E = [49.20896, -122.95666];
const OVERPASS_GRIFFITHS_W = [49.20858, -122.95376];
const OVERPASS_GRIFFITHS_E = [49.20912, -122.95276];

export const SOUTHEAST = [
  {
    description: "byrne creek secondary: from bc parkway",
    type: "mixed",
    elevation: 0.5,
    positions: [
      BC_PARKWAY_14TH,
      [49.20913, -122.9575],
      [49.20914, -122.95739],
      [49.20914, -122.95718],
      OVERPASS_14TH_W,
    ],
  },
  {
    description: "overpass near 14th",
    type: "mixed",
    elevation: 1,
    positions: [OVERPASS_14TH_W, OVERPASS_14TH_E],
  },
  {
    description: "14th to griffiths",
    type: "mixed",
    elevation: 0.5,
    positions: [
      OVERPASS_14TH_E,
      [49.20888, -122.95646],
      [49.20881, -122.95624],
      [49.20873, -122.95592],
      [49.20868, -122.95574],
      [49.20839, -122.95518],
      [49.20835, -122.95498],
      [49.20832, -122.95477],
      [49.20832, -122.95454],
      [49.20834, -122.95433],
      [49.20839, -122.95412],
      [49.20845, -122.95394],
      OVERPASS_GRIFFITHS_W,
    ],
  },
  {
    description: "griffiths overpass",
    type: "mixed",
    elevation: 1,
    positions: [
      OVERPASS_GRIFFITHS_W,
      [49.20871, -122.95358],
      [49.20887, -122.95341],
      [49.20891, -122.95336],
      [49.20893, -122.9533],
      [49.20899, -122.95298],
      [49.20901, -122.9529],
      [49.20904, -122.95285],
      OVERPASS_GRIFFITHS_E,
    ],
  },
  {
    description: "griffiths to stride",
    type: "mixed",
    elevation: 0.5,
    positions: [
      OVERPASS_GRIFFITHS_E,
      [49.20915, -122.95269],
      [49.20937, -122.95257],
      [49.20944, -122.95255],
      [49.20972, -122.9525],
      [49.20992, -122.95232],
      [49.21016, -122.95206],
      [49.21032, -122.95188],
      [49.21059, -122.95167],
      [49.21065, -122.95164],
      [49.21077, -122.95168],
      [49.21083, -122.95174],
      [49.21135, -122.95239],
      [49.21147, -122.95256],
      [49.2116, -122.95242],
      [49.21193, -122.95285],
      [49.212, -122.95312],
      [49.21226, -122.95348],
      EIGHTEENTH_STRIDE_W,
    ],
  },

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
      FIFTEENTH_11TH,
      [49.21173, -122.9435],
      [49.2124, -122.9444],
      [49.21323, -122.94552],
      FIFTEENTH_13TH_W,
    ],
  },
  {
    description: "connection to london",
    type: "comfortable",
    positions: [
      FIFTEENTH_LONDON,
      [49.21081, -122.94259],
      [49.21102, -122.94249],
      FIFTEENTH_11TH,
      FIFTEENTH_12TH,
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
      EIGHTEENTH_STRIDE_W,
      [49.21327, -122.95177],
      [49.21419, -122.95006],
      [49.21524, -122.94812],
      [49.21433, -122.94692], // FIFTEENTH_14TH_N
      [49.21329, -122.9455], // FIFTEENTH_13TH_N
      FIFTEENTH_12TH,
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
