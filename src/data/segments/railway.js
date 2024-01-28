import {
  RAILWAY_GRANVILLE_MIDDLE,
  RAILWAY_GRANVILLE_NW,
  RAILWAY_GRANVILLE_SE,
  RAILWAY_WILLIAMS_NE,
  RAILWAY_WILLIAMS_NW,
  RAILWAY_WILLIAMS_SE,
} from "../intersections";
import { ROUTES } from "../routes";

const RAILWAY_GRANVILLE_SW = [49.16223, -123.16949];

const NB_PRE_STEVESTON = [49.13301, -123.16975];
const RAILWAY_STEVESTON_SE = [49.13362, -123.16975];
const NB_PRE_WILLIAMS = [49.14036, -123.16977];
const NB_PRE_FRANCIS = [49.14774, -123.16976];
const RAILWAY_FRANCIS_SE = [49.14833, -123.16975];
const NB_PRE_BLUNDELL = [49.15494, -123.16978];
const NB_POST_BLUNDELL = [49.1564, -123.16977];

const SB_PRE_BLUNDELL = [49.1565, -123.16992];
const RAILWAY_BLUNDELL_NW = [49.15567, -123.16992];
const SB_PRE_STEVESTON = [49.13422, -123.16989];
const RAILWAY_STEVESTON_NW = [49.13382, -123.16988];

export const RAILWAY = [
  {
    description: "railway split to continue sb",
    oneWay: "required",
    type: "shared",
    positions: [
      RAILWAY_GRANVILLE_NW,
      [49.1625, -123.16945],
      [49.16242, -123.16941],
      [49.16231, -123.16944],
      RAILWAY_GRANVILLE_SW,
    ],
  },

  // nb
  {
    routeNames: [ROUTES.railway.name],
    description: "nb: pre-moncton to steveston",
    type: "painted",
    oneWay: "required",
    positions: [
      [49.12474, -123.16975],
      [49.12508, -123.16975],
      [49.12518, -123.16974],
      [49.12527, -123.16974],
      [49.12543, -123.16976],
      [49.1262, -123.16976],
      [49.12934, -123.16976],
      NB_PRE_STEVESTON,
    ],
  },
  {
    routeNames: [ROUTES.railway.name],
    description: "nb: pre-steveston",
    type: "shared",
    oneWay: "required",
    positions: [NB_PRE_STEVESTON, RAILWAY_STEVESTON_SE],
  },
  {
    routeNames: [ROUTES.railway.name],
    description: "nb: steveston to williams",
    type: "painted",
    oneWay: "required",
    positions: [
      RAILWAY_STEVESTON_SE,
      [49.13383, -123.16973],
      [49.13415, -123.16973],
      [49.13425, -123.16976],
      [49.13676, -123.16977],
      NB_PRE_WILLIAMS,
    ],
  },
  {
    routeNames: [ROUTES.railway.name],
    description: "nb: pre-williams",
    type: "shared",
    oneWay: "required",
    positions: [NB_PRE_WILLIAMS, RAILWAY_WILLIAMS_SE, RAILWAY_WILLIAMS_NE],
  },
  {
    routeNames: [ROUTES.railway.name],
    description: "nb: williams to francis",
    type: "painted",
    oneWay: "required",
    positions: [
      RAILWAY_WILLIAMS_NE,
      [49.14392, -123.16976],
      [49.14682, -123.16975],
      NB_PRE_FRANCIS,
    ],
  },
  {
    routeNames: [ROUTES.railway.name],
    description: "nb: pre-francis",
    type: "shared",
    oneWay: "required",
    positions: [NB_PRE_FRANCIS, RAILWAY_FRANCIS_SE],
  },
  {
    routeNames: [ROUTES.railway.name],
    description: "nb: francis to blundell",
    type: "painted",
    oneWay: "required",
    positions: [RAILWAY_FRANCIS_SE, [49.15248, -123.16977], NB_PRE_BLUNDELL],
  },
  {
    routeNames: [ROUTES.railway.name],
    description: "nb: blundell",
    type: "shared",
    oneWay: "required",
    positions: [NB_PRE_BLUNDELL, [49.15567, -123.16977], NB_POST_BLUNDELL],
  },
  {
    routeNames: [ROUTES.railway.name],
    description: "nb: blundell to granville",
    type: "painted",
    oneWay: "required",
    positions: [
      NB_POST_BLUNDELL,
      [49.16033, -123.16976],
      [49.16145, -123.16977],
      [49.16156, -123.16975],
      [49.16168, -123.16971],
      [49.16185, -123.16961],
      [49.16201, -123.16947],
      [49.16216, -123.16926],
      RAILWAY_GRANVILLE_SE,
    ],
  },

  // sb
  {
    routeNames: [ROUTES.railway.name],
    description: "sb: granville to slip",
    type: "painted",
    oneWay: "required",
    positions: [RAILWAY_GRANVILLE_MIDDLE, RAILWAY_GRANVILLE_SW],
  },
  {
    routeNames: [ROUTES.railway.name],
    description: "sb: granville to blundell",
    type: "painted",
    oneWay: "required",
    positions: [
      RAILWAY_GRANVILLE_SW,
      [49.16213, -123.1696],
      [49.16195, -123.16972],
      [49.16178, -123.16984],
      [49.16161, -123.16989],
      [49.16142, -123.16991],
      [49.16033, -123.16991],
      SB_PRE_BLUNDELL,
    ],
  },
  {
    routeNames: [ROUTES.railway.name],
    description: "sb: pre-blundell",
    type: "shared",
    oneWay: "required",
    positions: [SB_PRE_BLUNDELL, RAILWAY_BLUNDELL_NW],
  },
  {
    routeNames: [ROUTES.railway.name],
    description: "sb: blundell to steveston",
    type: "painted",
    oneWay: "required",
    positions: [
      RAILWAY_BLUNDELL_NW,
      [49.15554, -123.16992],
      [49.15245, -123.16991],
      [49.14894, -123.16989],
      [49.14843, -123.16989],
      [49.14832, -123.16989],
      [49.14584, -123.1699],
      [49.14389, -123.1699],
      RAILWAY_WILLIAMS_NW,
      [49.13675, -123.16989],
      SB_PRE_STEVESTON,
    ],
  },
  {
    routeNames: [ROUTES.railway.name],
    description: "sb: pre-stevenson",
    type: "shared",
    oneWay: "required",
    positions: [SB_PRE_STEVESTON, RAILWAY_STEVESTON_NW],
  },
  {
    routeNames: [ROUTES.railway.name],
    description: "sb: steveston to post-moncton",
    type: "painted",
    oneWay: "required",
    positions: [
      RAILWAY_STEVESTON_NW,
      [49.13364, -123.16988],
      [49.13188, -123.16989],
      [49.12933, -123.16989],
      [49.12564, -123.16989],
      [49.12546, -123.16985],
      [49.12508, -123.16984],
      [49.12473, -123.16982],
    ],
  },
];
