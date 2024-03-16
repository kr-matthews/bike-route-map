import {
  BC_PARKWAY_22ND_STATION_SPLIT,
  BC_PARKWAY_7TH,
  COLUMBIA_SHERBROOKE_W,
  FIFTH_7TH,
  MCBRIDE_OVERPASS_E,
  MCBRIDE_SEVENTH_W,
  STEWARDSON_GRIMSTON_S,
  TENTH_7TH,
  TWENTY_THIRD_7TH,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const BC_PARKWAY_22ND_STATION = [49.20009, -122.94948];
const TWENTIETH_7TH_E_N = [49.20162, -122.94669];
const TWENTIETH_7TH_E_S = [49.20136, -122.94635];
const EIGHTH_7TH_W = [49.21243, -122.92577];
const PRE_OVERPASS_W = [49.22112, -122.91061];
const MCBRIDE_OVERPASS_W = [49.22113, -122.91066];
const POST_OVERPASS_E = [49.2208, -122.90967];
const BETWEEN_MCBRIDE_CUMBERLAND = [49.22218, -122.90771];
const CUMBERLAND_7TH = [49.22276, -122.90658];
const RICHMOND_SHILES = [49.22518, -122.89867];
const RICHMOND_SHERBROOKE = [49.22797, -122.89861];
const RICHMOND_EIGHTH_N = [49.22963, -122.89855];
const RICHMOND_SURREY = [49.23063, -122.89852];
const SURREY_TENTH_S = [49.23292, -122.90139];

const TWENTIETH_MEAD_E = [49.20097, -122.94586];
const STEWARDSON_OVERPASS_N = [49.20183, -122.94173];
const STEWARDSON_OVERPASS_S = [49.20175, -122.9409];
const STEWARDSON_OVERPASS_S_POST = [49.20172, -122.94098];

export const CROSSTOWN_NEW_WESTMINSTER = [
  {
    description: "richmond st to eight ave",
    type: "shared",
    positions: [RICHMOND_SHERBROOKE, RICHMOND_EIGHTH_N],
  },
  {
    description: "richmond st to surrey st",
    type: "quiet",
    positions: [RICHMOND_EIGHTH_N, RICHMOND_SURREY],
  },
  {
    description: "surrey st",
    type: "quiet",
    positions: [RICHMOND_SURREY, SURREY_TENTH_S],
  },
  {
    description: "crossing tenth",
    type: "mixed",
    positions: [
      SURREY_TENTH_S,
      [49.23303, -122.90143],
      [49.23306, -122.90137],
      [49.23313, -122.90146],
    ],
  },
  {
    description: "bc parkway curve",
    type: "mixed",
    positions: [
      BC_PARKWAY_22ND_STATION_SPLIT,
      [49.19973, -122.95081],
      [49.19995, -122.94992],
      [49.20004, -122.9497],
      [49.20012, -122.94953],
      BC_PARKWAY_22ND_STATION,
    ],
  },
  {
    description: "grimston park alt: sidewalk",
    type: "other",
    positions: [TWENTIETH_7TH_E_S, TWENTIETH_MEAD_E],
  },
  {
    description: "grimston park alt: park",
    type: "mixed",
    elevation: 0.5,
    positions: [
      TWENTIETH_MEAD_E,
      [49.2011, -122.9451],
      [49.20117, -122.94453],
      [49.20138, -122.94302],
      [49.20148, -122.94251],
      [49.20153, -122.9424],
      [49.20158, -122.94223],
      STEWARDSON_OVERPASS_N,
    ],
  },
  {
    description: "grimston park alt: overpass",
    type: "mixed",
    elevation: 1,
    positions: [
      STEWARDSON_OVERPASS_N,
      [49.20195, -122.94148],
      [49.20164, -122.94112],
      [49.20184, -122.94054],
      [49.20187, -122.94058],
      STEWARDSON_OVERPASS_S,
    ],
  },
  {
    description: "grimston park alt: after overpass",
    type: "mixed",
    elevation: 0.5,
    positions: [STEWARDSON_OVERPASS_S, STEWARDSON_OVERPASS_S_POST],
  },
  {
    description: "grimston park alt: end bit",
    type: "mixed",
    positions: [
      STEWARDSON_OVERPASS_S_POST,
      [49.20165, -122.94117],
      STEWARDSON_GRIMSTON_S,
    ],
  },
  {
    description: "to marine way",
    type: "shared",
    videoIds: [VIDEOS.marineWayWb.id],
    positions: [TWENTY_THIRD_7TH, BC_PARKWAY_7TH],
  },
  {
    routeNames: [ROUTES.crosstownNewWestminster.name],
    description: "west bit",
    type: "shared",
    positions: [
      BC_PARKWAY_7TH,
      [49.19956, -122.95047],
      BC_PARKWAY_22ND_STATION,
      [49.20047, -122.94883],
      [49.20152, -122.94687],
      TWENTIETH_7TH_E_N,
    ],
  },
  {
    routeNames: [ROUTES.crosstownNewWestminster.name],
    description: "20th sidewalk",
    type: "other",
    positions: [TWENTIETH_7TH_E_N, TWENTIETH_7TH_E_S],
  },
  {
    routeNames: [ROUTES.crosstownNewWestminster.name],
    description: "20th to 10th",
    type: "quiet",
    positions: [
      TWENTIETH_7TH_E_S,
      [49.20141, -122.94623],
      [49.20184, -122.94544],
      [49.20253, -122.94417],
      [49.20361, -122.94216],
      [49.20448, -122.94055],
      [49.20545, -122.93873],
      [49.20729, -122.9353],
      [49.20812, -122.93375],
      [49.20897, -122.93223],
      TENTH_7TH,
    ],
  },
  {
    routeNames: [ROUTES.crosstownNewWestminster.name],
    description: "through park",
    type: "mixed",
    positions: [
      TENTH_7TH,
      [49.21099, -122.92846],
      [49.21104, -122.92841],
      [49.21114, -122.9285],
      [49.21125, -122.92856],
      [49.21131, -122.92856],
      [49.21139, -122.92851],
      [49.21147, -122.92843],
      [49.21152, -122.92832],
      [49.21156, -122.9281],
      [49.21179, -122.92794],
      [49.21188, -122.92782],
      [49.21193, -122.92765],
      [49.21193, -122.92751],
      [49.21198, -122.9273],
      [49.21204, -122.92717],
      [49.2121, -122.92708],
      [49.21214, -122.92706],
      [49.21225, -122.92702],
      [49.2123, -122.92697],
      [49.21243, -122.92664],
      [49.21252, -122.92649],
      [49.21258, -122.92636],
      [49.2127, -122.92615],
      EIGHTH_7TH_W,
    ],
  },
  {
    routeNames: [ROUTES.crosstownNewWestminster.name],
    description: "8th to 5th",
    type: "painted",
    oneWay: "required",
    positions: [
      EIGHTH_7TH_W,
      [49.21252, -122.9255],
      [49.21353, -122.92365],
      [49.2144, -122.92202],
      [49.21449, -122.92185],
      [49.21505, -122.92084],
      FIFTH_7TH,
    ],
  },
  {
    routeNames: [ROUTES.crosstownNewWestminster.name],
    description: "5th to 8th",
    type: "painted",
    oneWay: "required",
    positions: [
      FIFTH_7TH,
      [49.21514, -122.92093],
      [49.21456, -122.92199],
      [49.21448, -122.92214],
      [49.21362, -122.92373],
      [49.21262, -122.9256],
      EIGHTH_7TH_W,
    ],
  },
  {
    routeNames: [ROUTES.crosstownNewWestminster.name],
    description: "5th to nearly-mcbride",
    type: "quiet",
    positions: [
      FIFTH_7TH,
      [49.21586, -122.91945],
      [49.21785, -122.91575],
      [49.21891, -122.91379],
      [49.21954, -122.91263],
      [49.22013, -122.91155],
      [49.22063, -122.91058],
      [49.2207, -122.91046],
      MCBRIDE_SEVENTH_W,
    ],
  },
  {
    routeNames: [ROUTES.crosstownNewWestminster.name],
    description: "to west mcbride ramp",
    type: "mixed",
    positions: [
      MCBRIDE_SEVENTH_W,
      [49.22079, -122.91035],
      [49.22087, -122.91036],
      [49.22095, -122.91041],
      PRE_OVERPASS_W,
    ],
  },
  {
    routeNames: [ROUTES.crosstownNewWestminster.name],
    description: "before mcbride",
    type: "mixed",
    elevation: 0.5,
    positions: [PRE_OVERPASS_W, MCBRIDE_OVERPASS_W],
  },
  {
    routeNames: [ROUTES.crosstownNewWestminster.name],
    description: "mcbride overpass",
    type: "mixed",
    elevation: 1,
    positions: [
      MCBRIDE_OVERPASS_W,
      [49.221, -122.91065],
      [49.22086, -122.91048],
      [49.22083, -122.91043],
      [49.2208, -122.91028],
      [49.22101, -122.90989],
      [49.22093, -122.90973],
      [49.22085, -122.90962],
      [49.22076, -122.90953],
      [49.22068, -122.90947],
      MCBRIDE_OVERPASS_E,
    ],
  },
  {
    routeNames: [ROUTES.crosstownNewWestminster.name],
    description: "after mcbride",
    type: "mixed",
    elevation: 0.5,
    positions: [MCBRIDE_OVERPASS_E, POST_OVERPASS_E],
  },
  {
    routeNames: [ROUTES.crosstownNewWestminster.name],
    description: "mcbride to parking lot",
    type: "mixed",
    positions: [
      POST_OVERPASS_E,
      [49.22105, -122.90993],
      [49.22218, -122.90784],
      BETWEEN_MCBRIDE_CUMBERLAND,
    ],
  },
  {
    routeNames: [ROUTES.crosstownNewWestminster.name],
    description: "parking lot to richmond",
    type: "quiet",
    positions: [
      BETWEEN_MCBRIDE_CUMBERLAND,
      CUMBERLAND_7TH,
      [49.22475, -122.90286],
      [49.22491, -122.90262],
      [49.2252, -122.90261],
      [49.22518, -122.9],
      RICHMOND_SHILES,
    ],
  },
  {
    routeNames: [ROUTES.crosstownNewWestminster.name],
    description: "richmond north half",
    type: "shared",
    positions: [RICHMOND_SHILES, RICHMOND_SHERBROOKE],
  },
  {
    routeNames: [ROUTES.crosstownNewWestminster.name],
    description: "sherbrooke",
    type: "quiet",
    positions: [
      RICHMOND_SHERBROOKE,
      [49.22795, -122.8963],
      COLUMBIA_SHERBROOKE_W,
    ],
  },
  {
    routeNames: [ROUTES.crosstownNewWestminster.name],
    description: "alt: cumberland & richmond",
    type: "shared",
    positions: [
      CUMBERLAND_7TH,
      [49.22153, -122.90506],
      [49.22147, -122.90493],
      [49.22142, -122.90479],
      [49.22064, -122.90246],
      [49.2206, -122.90229],
      [49.22059, -122.90213],
      [49.22055, -122.89879],
      [49.22372, -122.8987],
      RICHMOND_SHILES,
    ],
  },
];
