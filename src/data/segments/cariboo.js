import {
  CARIBOO_ARMSTRONG_E,
  CARIBOO_CARIBOO_PL_E,
  CASCADE_ARMSTRONG,
  STORMONT_CARIBOO_NE_E,
  STORMONT_CARIBOO_NW,
  STORMONT_CARIBOO_N_W,
  STORMONT_CARIBOO_SW,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const NB_LANE_START = [49.23584, -122.90453];
const NB_OVERPASS_START = [49.24466, -122.91018];
const NB_OVERPASS_END = [49.24531, -122.91086];
const STORMONT_CARIBOO_NE_N = [49.2463, -122.91238];
const STORMONT_CARIBOO_SE = [49.24588, -122.91236];
const SB_OVERPASS_START = [49.24523, -122.91099];
const SB_OVERPASS_END = [49.2446, -122.91032];
const SB_PATH_REJOIN = [49.24344, -122.90966];
const CARIBOO_DR_CARIBOO = [49.24283, -122.90896];
const CARIBOO_DR_S = [49.2408, -122.90748];
const CARIBOO_16TH_NW = [49.23889, -122.90735];
const CASCADE_16TH_E = [49.23632, -122.9108];

const PATH_OVERPASS_N = [49.24524, -122.91105];
const PATH_OVERPASS_S = [49.2446, -122.91037];

export const CARIBOO = [
  // alts
  {
    description: "nb from path",
    type: "painted",
    oneWay: "required",
    positions: [
      STORMONT_CARIBOO_SE,
      [49.24602, -122.91239],
      [49.24621, -122.91241],
      STORMONT_CARIBOO_NE_N,
    ],
  },
  {
    description: "path 1",
    type: "mixed",
    elevation: 0.5,
    positions: [
      SB_PATH_REJOIN,
      [49.24344, -122.90972],
      [49.24381, -122.90992],
      PATH_OVERPASS_S,
    ],
  },
  {
    description: "path 2",
    type: "mixed",
    elevation: 1,
    positions: [
      PATH_OVERPASS_S,
      [49.24487, -122.9106],
      [49.24509, -122.91085],
      PATH_OVERPASS_N,
    ],
  },
  {
    description: "path 3",
    type: "mixed",
    elevation: 0.5,
    positions: [
      PATH_OVERPASS_N,
      [49.24555, -122.91156],
      [49.24576, -122.91192],
      [49.24582, -122.9121],
      [49.24585, -122.91231],
      STORMONT_CARIBOO_SE,
    ],
  },

  // nb
  {
    routeNames: [ROUTES.cariboo.name],
    description: "nb first bit",
    type: "shared",
    oneWay: "required",
    positions: [CARIBOO_ARMSTRONG_E, [49.23555, -122.9042], NB_LANE_START],
  },
  {
    routeNames: [ROUTES.cariboo.name],
    description: "nb: before overpass",
    type: "painted",
    oneWay: "required",
    elevation: 0.5,
    positions: [
      NB_LANE_START,
      [49.23617, -122.90493],
      [49.23671, -122.90565],
      [49.2374, -122.90653],
      [49.23757, -122.90668],
      [49.23776, -122.9068],
      [49.23788, -122.90687],
      [49.23811, -122.90693],
      [49.23887, -122.90704],
      [49.23937, -122.9071],
      [49.23954, -122.9071],
      [49.23976, -122.90706],
      [49.2399, -122.90702],
      [49.24003, -122.90695],
      [49.24053, -122.90665],
      [49.24072, -122.90658],
      [49.24095, -122.90654],
      [49.24118, -122.90656],
      [49.24136, -122.90661],
      [49.24154, -122.9067],
      [49.24171, -122.90682],
      [49.24186, -122.90697],
      [49.24199, -122.90713],
      [49.24294, -122.90879],
      [49.24328, -122.9093],
      [49.24335, -122.90937],
      [49.24386, -122.90967],
      [49.24443, -122.91002],
      NB_OVERPASS_START,
    ],
  },
  {
    routeNames: [ROUTES.cariboo.name],
    description: "nb - overpass",
    type: "painted",
    oneWay: "required",
    elevation: 1,
    positions: [
      NB_OVERPASS_START,
      [49.24486, -122.91035],
      [49.24509, -122.91058],
      NB_OVERPASS_END,
    ],
  },
  {
    routeNames: [ROUTES.cariboo.name],
    description: "nb - after overpass",
    type: "painted",
    oneWay: "required",
    elevation: 0.5,
    positions: [
      NB_OVERPASS_END,
      [49.24556, -122.91125],
      [49.24576, -122.9116],
      STORMONT_CARIBOO_NE_E,
      [49.24601, -122.91209],
      [49.24608, -122.91219],
      [49.24614, -122.91225],
      [49.24619, -122.9123],
      STORMONT_CARIBOO_NE_N,
      [49.24647, -122.9124],
      [49.24661, -122.91241],
      [49.24682, -122.91242],
      [49.24736, -122.91244],
      [49.24744, -122.91246],
      [49.24754, -122.91252],
      [49.24761, -122.91259],
      [49.24768, -122.91269],
      [49.24774, -122.9128],
      [49.24785, -122.91313],
      [49.24799, -122.91364],
      [49.24811, -122.91391],
      [49.24827, -122.91414],
      [49.24845, -122.91432],
      [49.24858, -122.91442],
      [49.24867, -122.91445],
      [49.24886, -122.91447],
      [49.24906, -122.91444],
      [49.24939, -122.9143],
      CARIBOO_CARIBOO_PL_E,
    ],
  },

  // sb
  {
    routeNames: [ROUTES.cariboo.name],
    description: "sb - pre-overpass",
    type: "painted",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.caribooSb.id],
    positions: [
      CARIBOO_CARIBOO_PL_E,
      [49.24942, -122.91438],
      [49.24917, -122.9145],
      [49.24909, -122.91453],
      [49.24884, -122.91457],
      [49.24861, -122.91456],
      [49.2484, -122.91441],
      [49.24826, -122.91427],
      [49.2481, -122.91406],
      [49.24798, -122.91383],
      [49.2479, -122.91362],
      [49.24775, -122.91312],
      [49.24766, -122.91283],
      [49.24758, -122.91272],
      [49.2475, -122.91264],
      [49.24741, -122.91259],
      [49.24728, -122.91257],
      [49.2468, -122.91255],
      [49.24668, -122.91257],
      [49.24657, -122.91259],
      [49.24626, -122.91258],
      STORMONT_CARIBOO_N_W,
      [49.24608, -122.91251],
      STORMONT_CARIBOO_NW,
      STORMONT_CARIBOO_SW,
      STORMONT_CARIBOO_SE,
      [49.24587, -122.91215],
      [49.24581, -122.91195],
      [49.2457, -122.91173],
      [49.24555, -122.91147],
      [49.24533, -122.91112],
      SB_OVERPASS_START,
    ],
  },
  {
    routeNames: [ROUTES.cariboo.name],
    description: "sb - overpass",
    type: "painted",
    oneWay: "required",
    elevation: 1,
    videoIds: [VIDEOS.caribooSb.id],
    positions: [
      SB_OVERPASS_START,
      [49.24511, -122.91083],
      [49.24486, -122.91054],
      SB_OVERPASS_END,
    ],
  },
  {
    routeNames: [ROUTES.cariboo.name],
    description: "sb - overpass to cariboo dr",
    type: "painted",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.caribooSb.id],
    positions: [
      SB_OVERPASS_END,
      [49.24391, -122.90992],
      SB_PATH_REJOIN,
      [49.24328, -122.90954],
      [49.2431, -122.90935],
      [49.24298, -122.9092],
      CARIBOO_DR_CARIBOO,
    ],
  },
  {
    routeNames: [ROUTES.cariboo.name],
    description: "sb - cariboo dr",
    type: "quiet",
    oneWay: "recommended",
    videoIds: [VIDEOS.caribooSb.id],
    positions: [
      CARIBOO_DR_CARIBOO,
      [49.2428, -122.90896],
      [49.24272, -122.90902],
      [49.24267, -122.90903],
      [49.24264, -122.90899],
      [49.24256, -122.90885],
      [49.24141, -122.90797],
      CARIBOO_DR_S,
    ],
  },
  {
    routeNames: [ROUTES.cariboo.name],
    description: "sb - path after cariboo dr",
    type: "mixed",
    oneWay: "recommended",
    videoIds: [VIDEOS.caribooSb.id],
    positions: [
      CARIBOO_DR_S,
      [49.24059, -122.90736],
      [49.24001, -122.90736],
      [49.23988, -122.90735],
      [49.23964, -122.90738],
      [49.23938, -122.90739],
      [49.23907, -122.90734],
      [49.23893, -122.90735],
      CARIBOO_16TH_NW,
    ],
  },
  {
    routeNames: [ROUTES.cariboo.name],
    description: "sb - 16th",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.caribooSb.id],
    positions: [
      CARIBOO_16TH_NW,
      [49.23883, -122.90838],
      [49.23881, -122.90859],
      [49.23879, -122.90871],
      [49.23875, -122.90888],
      [49.23871, -122.90905],
      [49.23866, -122.90921],
      [49.23855, -122.90949],
      [49.23845, -122.90972],
      [49.23837, -122.90987],
      [49.2382, -122.91014],
      [49.23806, -122.91031],
      [49.23796, -122.91042],
      [49.23778, -122.91058],
      [49.23764, -122.91068],
      [49.23739, -122.91081],
      [49.23716, -122.91088],
      [49.2369, -122.91091],
      [49.23672, -122.91091],
      [49.23661, -122.91086],
      [49.23637, -122.91088],
      CASCADE_16TH_E,
    ],
  },
  {
    routeNames: [ROUTES.cariboo.name],
    description: "sb - cascade",
    type: "quiet",
    oneWay: "recommended",
    videoIds: [VIDEOS.caribooSb.id],
    videoIdsEndAtEnd: [VIDEOS.caribooSb.id],
    positions: [
      CASCADE_16TH_E,
      [49.2363, -122.90991],
      [49.23628, -122.90977],
      [49.23622, -122.90957],
      [49.23614, -122.90942],
      [49.23593, -122.90914],
      [49.23534, -122.90839],
      [49.23478, -122.90764],
      CASCADE_ARMSTRONG,
    ],
  },
];
