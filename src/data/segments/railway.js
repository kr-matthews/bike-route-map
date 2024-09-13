import {
  RAILWAY_COLBECK_E,
  RAILWAY_GARRY_NW,
  RAILWAY_GRANVILLE_MIDDLE,
  RAILWAY_GRANVILLE_NW,
  RAILWAY_GRANVILLE_SE,
  RAILWAY_GREENWAY_WESTWATER,
  RAILWAY_MONCTON_SW,
  RAILWAY_WILLIAMS_NE,
  RAILWAY_WILLIAMS_NW,
  RAILWAY_WILLIAMS_SE,
  RAILWAY_WOODWARDS_E,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const RAILWAY_GRANVILLE_SW = [49.16223, -123.16949];

const WESTWATER_IMPERIAL = [49.12182, -123.17157];
const WESTWATER_W = [49.12262, -123.17279];
const IMPERIAL_WESTWATER = [49.12293, -123.174];

const RAILWAY_WESTWATER = [49.12228, -123.17142];
const RAILWAY_PAINTED_S = [49.12463, -123.16978];

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

  // imperial landing & westwater
  {
    description: "imperial landing",
    type: "mixed",
    positions: [
      [49.12381, -123.18111],
      [49.12378, -123.18103],
      [49.1237, -123.18095],
      [49.12354, -123.18081],
      [49.12339, -123.18058],
      [49.1233, -123.18031],
      [49.12324, -123.18013],
      [49.12276, -123.17764],
      [49.12248, -123.17614],
      [49.1225, -123.17606],
      [49.12256, -123.17598],
      [49.123, -123.17588],
      [49.12324, -123.17581],
      [49.12339, -123.17552],
      [49.12319, -123.17478],
      [49.123, -123.17408],
      IMPERIAL_WESTWATER,
      [49.12293, -123.174],
      [49.12279, -123.17402],
      [49.12257, -123.17414],
      [49.12192, -123.17388],
      [49.12185, -123.17379],
      [49.12157, -123.17265],
      [49.12156, -123.17252],
      [49.12158, -123.17242],
      [49.12181, -123.17189],
      [49.12183, -123.17182],
      [49.12184, -123.17174],
      WESTWATER_IMPERIAL,
    ],
  },
  {
    description: "path to westwater",
    type: "mixed",
    positions: [IMPERIAL_WESTWATER, WESTWATER_W],
  },
  {
    description: "westwater w of railway",
    type: "quiet",
    positions: [WESTWATER_W, RAILWAY_WESTWATER],
  },
  {
    description: "westwater s of railway",
    type: "quiet",
    positions: [WESTWATER_IMPERIAL, RAILWAY_WESTWATER],
  },
  {
    description: "westwater e of railway",
    type: "quiet",
    positions: [
      WESTWATER_IMPERIAL,
      [49.12171, -123.1716],
      [49.12166, -123.17159],
      [49.1216, -123.17153],
      [49.12156, -123.17147],
      [49.1214, -123.17096],
      [49.12134, -123.17073],
      [49.1213, -123.17051],
      [49.12129, -123.17027],
      [49.1213, -123.17012],
      [49.12131, -123.17004],
      [49.12135, -123.16995],
      [49.12142, -123.1698],
      [49.12168, -123.16952],
      [49.12172, -123.16943],
      [49.12172, -123.16934],
      RAILWAY_GREENWAY_WESTWATER,
    ],
  },

  // south part
  {
    routeNames: [ROUTES.railway.name],
    description: "railway ave quiet",
    type: "quiet",
    positions: [
      RAILWAY_WESTWATER,
      [49.12258, -123.17127],
      [49.12279, -123.17111],
      [49.12294, -123.17092],
      [49.12302, -123.17077],
      [49.12311, -123.17055],
      [49.12344, -123.1694],
      [49.12358, -123.16946],
      [49.12396, -123.16966],
      [49.12417, -123.16973],
      [49.12446, -123.16978],
      RAILWAY_PAINTED_S,
    ],
  },

  // nb
  {
    routeNames: [ROUTES.railway.name],
    description: "nb: pre-moncton to steveston",
    type: "painted",
    oneWay: "required",
    positions: [
      RAILWAY_PAINTED_S,
      [49.12474, -123.16969],
      [49.12508, -123.16969],
      [49.12518, -123.1697],
      [49.12527, -123.1697],
      [49.12543, -123.16971],
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
      RAILWAY_WOODWARDS_E,
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
    positions: [RAILWAY_FRANCIS_SE, RAILWAY_COLBECK_E, NB_PRE_BLUNDELL],
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
    description: "sb: steveston to garry",
    type: "painted",
    oneWay: "required",
    positions: [
      RAILWAY_STEVESTON_NW,
      [49.13364, -123.16988],
      [49.13188, -123.16989],
      RAILWAY_GARRY_NW,
    ],
  },
  {
    routeNames: [ROUTES.railway.name],
    description: "sb: garry to moncton",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.railwayGreenwaySb.id],
    positions: [
      RAILWAY_GARRY_NW,
      [49.12564, -123.16989],
      [49.12546, -123.16985],
      RAILWAY_MONCTON_SW,
    ],
  },
  {
    routeNames: [ROUTES.railway.name],
    description: "sb: post-moncton",
    type: "painted",
    oneWay: "required",
    positions: [RAILWAY_MONCTON_SW, [49.12473, -123.16985], RAILWAY_PAINTED_S],
  },
];
