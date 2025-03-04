import {
  BURGESS_12TH,
  CARIBOO_ARMSTRONG_E,
  CASCADE_ARMSTRONG,
  EIGHTEENTH_STRIDE_W,
  FIFTEENTH_14TH_N,
  FIFTEENTH_LONDON,
  FIFTEENTH_STRIDE,
  FOURTH_13TH,
  MARY_12TH,
  STATION_HILL_SOUTHPOINT_NE,
  STATION_HILL_SOUTHPOINT_SE,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const GRIFFITHS_SOUTHPOINT_E = [49.21125, -122.95549];
const CUMBERLAND_ARMSTRONG = [49.22973, -122.91514];
const CARIBOO_ARMSTRONG_W_SPLIT = [49.23536, -122.90469];
const FIFTEENTH_13TH_W = [49.21325, -122.94556];
const FIFTEENTH_13TH_E = [49.21335, -122.94544];
const FIFTEENTH_14TH = [49.21427, -122.94669];
const FIFTEENTH_12TH = [49.21242, -122.94433];
const FIFTEENTH_11TH = [49.2117, -122.94339];

export const SOUTHEAST = [
  {
    description: "15th nb",
    type: "combined",
    oneWay: "required",
    videoIds: [VIDEOS.highlandParkLineWb.id],
    positions: [FIFTEENTH_13TH_E, FIFTEENTH_14TH, FIFTEENTH_14TH_N],
  },
  {
    description: "15th sb",
    type: "combined",
    oneWay: "required",
    positions: [FIFTEENTH_14TH_N, [49.21417, -122.94683], FIFTEENTH_13TH_W],
  },
  {
    routeNames: [ROUTES.edmonds.name],
    description: "15th",
    type: "mixed",
    videoIds: [VIDEOS.highlandParkLineWb.id],
    positions: [
      FIFTEENTH_11TH,
      [49.21173, -122.9435],
      [49.2124, -122.9444],
      [49.21323, -122.94552],
      FIFTEENTH_13TH_W,
    ],
  },
  {
    routeNames: [ROUTES.edmonds.name],
    description: "crossing at 13th",
    type: "mixed",
    videoIds: [VIDEOS.highlandParkLineWb.id],
    positions: [FIFTEENTH_13TH_W, FIFTEENTH_13TH_E],
  },
  {
    routeNames: [ROUTES.edmonds.name],
    description: "connection from london 1",
    type: "quiet",
    videoIds: [VIDEOS.highlandParkLineWb.id],
    videoIdsStartAtStart: [VIDEOS.highlandParkLineWb.id],
    positions: [
      FIFTEENTH_LONDON,
      [49.21081, -122.94259],
      [49.21102, -122.94249],
      FIFTEENTH_11TH,
    ],
  },
  {
    routeNames: [ROUTES.edmonds.name],
    description: "connection from london 2",
    type: "quiet",
    positions: [FIFTEENTH_11TH, FIFTEENTH_12TH],
  },

  {
    routeNames: [ROUTES.southeast.name, ROUTES.edmonds.name],
    description: "southpoint eb",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.southeastEb.id],
    positions: [
      STATION_HILL_SOUTHPOINT_SE,
      [49.21002, -122.95785],
      [49.21011, -122.95762],
      [49.21023, -122.95731],
      [49.21105, -122.9558],
      [49.21123, -122.9555],
      GRIFFITHS_SOUTHPOINT_E,
    ],
  },
  {
    routeNames: [ROUTES.southeast.name, ROUTES.edmonds.name],
    description: "southpoint wb",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.southeastWb.id],
    videoIdsEndAtEnd: [VIDEOS.southeastWb.id],
    positions: [
      GRIFFITHS_SOUTHPOINT_E,
      [49.21129, -122.95556],
      [49.21114, -122.95588],
      [49.21033, -122.95739],
      [49.21019, -122.95769],
      [49.21004, -122.95807],
      STATION_HILL_SOUTHPOINT_NE,
    ],
  },
  {
    routeNames: [ROUTES.southeast.name, ROUTES.edmonds.name],
    description: "stride",
    type: "quiet",
    videoIds: [VIDEOS.southeastEb.id, VIDEOS.southeastWb.id],
    positions: [
      GRIFFITHS_SOUTHPOINT_E,
      [49.21129, -122.9554],
      [49.2115, -122.95504],
      [49.21166, -122.95476],
      EIGHTEENTH_STRIDE_W,
      [49.21327, -122.95177],
      [49.21419, -122.95006],
      FIFTEENTH_STRIDE,
    ],
  },
  {
    routeNames: [ROUTES.southeast.name, ROUTES.edmonds.name],
    description: "stride to 14th",
    type: "quiet",
    videoIds: [
      VIDEOS.southeastEb.id,
      VIDEOS.southeastWb.id,
      VIDEOS.highlandParkLineWb.id,
    ],
    positions: [FIFTEENTH_STRIDE, FIFTEENTH_14TH_N],
  },
  {
    routeNames: [ROUTES.southeast.name, ROUTES.edmonds.name],
    description: "14th to 12th",
    type: "quiet",
    videoIds: [VIDEOS.southeastEb.id, VIDEOS.southeastWb.id],
    positions: [
      FIFTEENTH_14TH_N,
      [49.21329, -122.9455], // FIFTEENTH_13TH_N
      FIFTEENTH_12TH,
    ],
  },
  {
    routeNames: [ROUTES.southeast.name],
    description: "15th to cumberland",
    type: "quiet",
    videoIds: [VIDEOS.southeastEb.id, VIDEOS.southeastWb.id],
    positions: [
      FIFTEENTH_12TH,
      [49.21367, -122.94203],
      [49.21484, -122.93988],
      [49.21554, -122.93861],
      MARY_12TH,
      [49.21676, -122.93636],
      [49.21729, -122.93539],
      BURGESS_12TH,
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
    videoIds: [VIDEOS.southeastWb.id, VIDEOS.southeastEb.id],
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
    videoIds: [VIDEOS.southeastWb.id, VIDEOS.southeastEb.id],
    videoIdsStartAtEnd: [VIDEOS.southeastWb.id],
    videoIdsEndAtEnd: [VIDEOS.southeastEb.id],
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
