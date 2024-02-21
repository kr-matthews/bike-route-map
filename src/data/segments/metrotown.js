import {
  BONSOR_BC_PARKWAY,
  MCKAY_BC_PARKWAY,
  MCKAY_CENTRAL_SE,
  NELSON_BENNETT_SW,
  NELSON_HAZEL_SW,
  NELSON_SANDERS_E,
  SUSSEX_HAZEL_NE,
  SUSSEX_HAZEL_NW,
  SUSSEX_HAZEL_S,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const MCKAY_HAZEL_SW = [49.23023, -123.00209];
const MCKAY_KINGSWAY_NW = [49.22966, -123.0027];
const MCKAY_KINGSWAY_SW = [49.22947, -123.00289];
const BONSOR_CENTRAL_SW = [49.22347, -122.9986];
const MCMURRAY_HAZEL_NW = [49.22859, -122.99659];

const NELSON_BENNETT_NW = [49.22526, -122.9943];
const BONSOR_CENTRAL_NW = [49.22354, -122.99854];
const MCKAY_CENTRAL_NE = [49.22684, -123.00553];
const MCKAY_KINGSBOROUGH_NE = [49.22801, -123.00427];
const MCKAY_KINGSWAY_SE = [49.22938, -123.00268];

export const METROTOWN = [
  // connections
  {
    description: "bc parkway connection - mckay",
    type: "mixed",
    videoIds: [VIDEOS.metrotownCcw.id],
    videoIdsLoopAtStart: [VIDEOS.metrotownCcw.id],
    positions: [
      MCKAY_BC_PARKWAY,
      [49.22659, -123.00574],
      [49.22667, -123.00572],
      MCKAY_CENTRAL_SE,
    ],
  },
  {
    description: "mckay crossing central",
    type: "shared",
    positions: [MCKAY_CENTRAL_SE, MCKAY_CENTRAL_NE],
  },
  {
    description: "bc parkway connection - bonsor",
    type: "mixed",
    positions: [
      BONSOR_BC_PARKWAY,
      [49.22345, -122.99868],
      BONSOR_CENTRAL_SW,
      BONSOR_CENTRAL_NW,
    ],
  },
  {
    description: "nelson crossing bennett",
    type: "shared",
    oneWay: "recommended",
    hideArrows: true,
    videoIds: [VIDEOS.nelsonPathSb.id],
    videoIdsStartAtEnd: [VIDEOS.nelsonPathSb.id],
    positions: [NELSON_BENNETT_SW, NELSON_BENNETT_NW],
  },
  {
    description: "kingsway crossing mckay",
    type: "shared",
    oneWay: "required",
    positions: [MCKAY_KINGSWAY_SW, MCKAY_KINGSWAY_SE],
  },
  {
    description: "kingsway to center",
    type: "dedicated",
    oneWay: "required",
    positions: [
      MCKAY_KINGSWAY_SE,
      [49.22913, -123.00202],
      [49.22874, -123.00082],
    ],
  },

  // ccw
  {
    routeNames: [ROUTES.metrotown.name],
    description: "ccw: sussex to mckay",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.metrotownCcw.id],
    positions: [
      SUSSEX_HAZEL_NE,
      SUSSEX_HAZEL_NW,
      [49.23025, -123.00169],
      [49.23028, -123.00194],
      MCKAY_HAZEL_SW,
    ],
  },
  {
    routeNames: [ROUTES.metrotown.name],
    description: "ccw: hazel to kingsway",
    type: "combined",
    oneWay: "required",
    videoIds: [VIDEOS.metrotownCcw.id],
    positions: [
      MCKAY_HAZEL_SW,
      [49.23017, -123.00216],
      [49.23014, -123.00222],
      [49.22975, -123.00262],
      [49.22972, -123.00263],
      MCKAY_KINGSWAY_NW,
    ],
  },
  {
    routeNames: [ROUTES.metrotown.name],
    description: "ccw: kingsway to mcmurray",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.metrotownCcw.id],
    positions: [
      MCKAY_KINGSWAY_NW,
      MCKAY_KINGSWAY_SW,
      [49.22887, -123.00363],
      [49.22875, -123.00377],
      [49.228, -123.00455],
      [49.22693, -123.00567],
      [49.22682, -123.00573],
      MCKAY_CENTRAL_SE,
      [49.22646, -123.00496],
      [49.2247, -123.00113],
      [49.22414, -123.0001],
      [49.22393, -122.99965],
      BONSOR_CENTRAL_SW,
      [49.22346, -122.99854],
      [49.22349, -122.99847],
      [49.225, -122.99687],
      [49.22508, -122.99675],
      [49.22513, -122.99664],
      [49.22516, -122.99651],
      [49.22518, -122.99638],
      NELSON_BENNETT_SW,
      [49.2252, -122.99414],
      [49.22527, -122.99409],
      [49.22575, -122.99409],
      [49.22613, -122.99416],
      [49.22669, -122.99415],
      [49.22784, -122.99414],
      NELSON_SANDERS_E,
      [49.22796, -122.99437],
      [49.22797, -122.99487],
      [49.228, -122.9951],
      [49.22805, -122.99532],
      [49.22812, -122.99553],
      [49.22833, -122.99597],
      [49.22844, -122.99626],
      MCMURRAY_HAZEL_NW,
    ],
  },
  {
    routeNames: [ROUTES.metrotown.name],
    description: "ccw: mcmurray to sussex",
    type: "combined",
    oneWay: "required",
    videoIds: [VIDEOS.metrotownCcw.id],
    positions: [MCMURRAY_HAZEL_NW, SUSSEX_HAZEL_NE],
  },

  // cw
  {
    routeNames: [ROUTES.metrotown.name],
    description: "cw: hazel to kingsborough",
    type: "shared",
    oneWay: "required",
    positions: [
      SUSSEX_HAZEL_S,
      [49.22884, -122.99771],
      [49.22841, -122.99642],
      [49.22827, -122.99606],
      [49.22822, -122.99595],
      [49.22811, -122.99572],
      [49.22804, -122.99557],
      [49.22796, -122.99529],
      [49.2279, -122.99502],
      NELSON_HAZEL_SW,
      [49.22677, -122.99435],
      [49.2261, -122.99435],
      [49.22585, -122.9943],
      NELSON_BENNETT_NW,
      [49.22525, -122.99636],
      [49.22522, -122.99654],
      [49.22516, -122.99675],
      [49.22506, -122.99691],
      BONSOR_CENTRAL_NW,
      [49.22376, -122.99905],
      [49.22394, -122.99941],
      [49.22437, -123.0002],
      [49.22478, -123.001],
      [49.22509, -123.00164],
      [49.22545, -123.00242],
      [49.2264, -123.00453],
      [49.22663, -123.00503],
      MCKAY_CENTRAL_NE,
      [49.22791, -123.00443],
      MCKAY_KINGSBOROUGH_NE,
    ],
  },
  {
    routeNames: [ROUTES.metrotown.name],
    description: "cw: mckay lane",
    type: "combined",
    oneWay: "required",
    positions: [
      MCKAY_KINGSBOROUGH_NE,
      [49.22832, -123.00394],
      [49.22845, -123.00386],
      [49.22869, -123.00361],
      [49.22879, -123.00349],
      [49.22888, -123.00335],
      [49.22915, -123.00299],
      [49.22927, -123.0028],
      MCKAY_KINGSWAY_SE,
    ],
  },
  {
    routeNames: [ROUTES.metrotown.name],
    description: "cw: kingsway to sussex",
    type: "shared",
    oneWay: "required",
    positions: [
      MCKAY_KINGSWAY_SE,
      [49.2296, -123.00247],
      [49.23019, -123.00187],
      SUSSEX_HAZEL_S,
    ],
  },
];
