import {
  BARNET_INLET_N,
  BOUNDARY_ADANAC,
  CARLETON_FRANCES,
  CLIFF_BRUNETTE_FRASER,
  CLIFF_UNION,
  DUTHIE_HASTINGS_N,
  DUTHIE_HASTINGS_S,
  INLET_BAYVIEW_E,
  INLET_BAYVIEW_W,
  INLET_RIDGE_E,
  INLET_RIDGE_W,
  WILLINGDON_FRANCES,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const BARNET_INLET_S = [49.28822, -122.94958];

const CLIFF_WESTRIDGE_PARK = [49.28122, -122.95928];
const HASTINGS_OVERPASS_N = [49.28086, -122.96046];
const HASTINGS_OVERPASS_S = [49.27997, -122.96001];

const EAST_OF_BOUNDARY_ADANAC = [49.27756, -123.0221];

const FELL_FRANCES = [49.27916, -122.97556];
const KENSINGTON_UNION_E = [49.27782, -122.96982];
const MALIBU_LANE_E = [49.28655, -122.95643];
const MALIBU_LANE_W = [49.286, -122.95885];

const DUTHIE_UNION = [49.27776, -122.95342];
const BARNET_RIDGE = [49.2833, -122.95354];

export const FRANCES_UNION = [
  {
    description: "connection via ridge dr",
    type: "mixed",
    positions: [
      INLET_RIDGE_W,
      INLET_RIDGE_E,
      [49.28347, -122.95529],
      [49.28347, -122.95399],
      [49.28346, -122.95379],
      BARNET_RIDGE,
    ],
  },
  {
    routeNames: [ROUTES.francesUnion.name],
    description: "just east of boundary",
    type: "quiet",
    videoIds: [VIDEOS.francesUnionWb.id, VIDEOS.adanacWb.id],
    videoIdsStartAtEnd: [VIDEOS.adanacWb.id],
    positions: [
      BOUNDARY_ADANAC,
      [49.27757, -123.02325],
      EAST_OF_BOUNDARY_ADANAC,
    ],
  },
  {
    routeNames: [ROUTES.francesUnion.name],
    description: "adanac to kensington park",
    type: "quiet",
    videoIds: [VIDEOS.francesUnionWb.id],
    positions: [
      EAST_OF_BOUNDARY_ADANAC,
      [49.27755, -123.0211],
      [49.27752, -123.01867],
      [49.2793, -123.01865],
      [49.27927, -123.01421],
      CARLETON_FRANCES,
      [49.27923, -123.00869],
      WILLINGDON_FRANCES,
      [49.27917, -122.99748],
      [49.27914, -122.9921],
      [49.27913, -122.98785],
      [49.27911, -122.9837],
      [49.2791, -122.98096],
      [49.27911, -122.98031],
      [49.27919, -122.9792],
      FELL_FRANCES,
    ],
  },
  {
    routeNames: [ROUTES.francesUnion.name],
    description: "through kensington park",
    type: "mixed",
    videoIds: [VIDEOS.francesUnionWb.id],
    positions: [
      FELL_FRANCES,
      [49.27924, -122.97542],
      [49.27938, -122.97545],
      [49.27965, -122.97543],
      [49.27971, -122.97545],
      [49.2799, -122.97544],
      [49.28, -122.97538],
      [49.2801, -122.97525],
      [49.28013, -122.97511],
      [49.28016, -122.97491],
      [49.28016, -122.97469],
      [49.28024, -122.97443],
      [49.28024, -122.97423],
      [49.28021, -122.9741],
      [49.28019, -122.97353],
      [49.28013, -122.97328],
      [49.2801, -122.97328],
      [49.27994, -122.97314],
      [49.27977, -122.97299],
      [49.27947, -122.9726],
      [49.27942, -122.97264],
      [49.27936, -122.97263],
      [49.27931, -122.97259],
      [49.27929, -122.97251],
      [49.27886, -122.97184],
      [49.27863, -122.9715],
      [49.27844, -122.9712],
      [49.27822, -122.97088],
      [49.27809, -122.9707],
      [49.27797, -122.97058],
      [49.27792, -122.97055],
      [49.27786, -122.97048],
      [49.27781, -122.97036],
      [49.27779, -122.9703],
      [49.27773, -122.97025],
      [49.27779, -122.97001],
      KENSINGTON_UNION_E,
    ],
  },
  {
    routeNames: [ROUTES.francesUnion.name],
    description: "kensington park to cliff",
    type: "quiet",
    videoIds: [VIDEOS.francesUnionWb.id],
    positions: [
      KENSINGTON_UNION_E,
      [49.2778, -122.96686],
      [49.2778, -122.96465],
      [49.27779, -122.96227],
      CLIFF_UNION,
    ],
  },
  {
    routeNames: [ROUTES.francesUnion.name],
    description: "cliff to duthie",
    type: "quiet",
    positions: [CLIFF_UNION, [49.27778, -122.95627], DUTHIE_UNION],
  },
  {
    routeNames: [ROUTES.francesUnion.name],
    description: "duthie",
    type: "shared",
    positions: [
      DUTHIE_UNION,
      DUTHIE_HASTINGS_S,
      DUTHIE_HASTINGS_N,
      [49.2824, -122.95338],
      [49.28296, -122.95337],
      BARNET_RIDGE,
    ],
  },
  {
    routeNames: [ROUTES.francesUnion.name],
    description: "eb to highway",
    type: "quiet",
    oneWay: "recommended",
    positions: [
      BARNET_RIDGE,
      [49.28524, -122.95271],
      [49.28631, -122.95222],
      [49.28684, -122.95162],
      BARNET_INLET_S,
    ],
  },
  {
    routeNames: [ROUTES.francesUnion.name],
    description: "eb ramp",
    type: "dedicated",
    oneWay: "required",
    positions: [
      BARNET_INLET_S,
      [49.28826, -122.94963],
      [49.28825, -122.9497],
      [49.28825, -122.94976],
      [49.28826, -122.94981],
      [49.28829, -122.94981],
      [49.28835, -122.94973],
      BARNET_INLET_N,
    ],
  },
  {
    description: "crossing inlet at bayview",
    type: "mixed",
    positions: [INLET_BAYVIEW_E, INLET_BAYVIEW_W],
  },
  {
    routeNames: [ROUTES.francesUnion.name],
    description: "wb along bayview",
    type: "mixed",
    oneWay: "recommended",
    videoIds: [VIDEOS.francesUnionWb.id],
    positions: [
      INLET_BAYVIEW_W,
      [49.28671, -122.95361],
      [49.28676, -122.95389],
      [49.28682, -122.95395],
      [49.28693, -122.95425],
      [49.28694, -122.95452],
      [49.28691, -122.95482],
      [49.28692, -122.95524],
      [49.28688, -122.95578],
      [49.28676, -122.95607],
      MALIBU_LANE_E,
    ],
  },
  {
    routeNames: [ROUTES.francesUnion.name],
    description: "malibu alley",
    type: "quiet",
    oneWay: "recommended",
    videoIds: [VIDEOS.francesUnionWb.id],
    positions: [MALIBU_LANE_E, MALIBU_LANE_W],
  },
  {
    routeNames: [ROUTES.francesUnion.name],
    description: "wb along cliff to overpass",
    type: "mixed",
    oneWay: "recommended",
    videoIds: [VIDEOS.francesUnionWb.id],
    positions: [
      MALIBU_LANE_W,
      [49.28596, -122.959],
      [49.28553, -122.959],
      [49.28457, -122.95901],
      [49.28344, -122.95902],
      [49.28299, -122.9588],
      [49.28282, -122.95881],
      [49.28235, -122.959],
      [49.28185, -122.95901],
      [49.28135, -122.95921],
      CLIFF_WESTRIDGE_PARK,
    ],
  },
  {
    routeNames: [ROUTES.francesUnion.name],
    description: "wb pre-overpass",
    type: "mixed",
    elevation: 0.5,
    videoIds: [VIDEOS.francesUnionWb.id, VIDEOS.lakesNb.id],
    videoIdsEndAtStart: [VIDEOS.lakesNb.id],
    positions: [
      CLIFF_WESTRIDGE_PARK,
      [49.28112, -122.95933],
      [49.28107, -122.95938],
      [49.28101, -122.95952],
      [49.28097, -122.95961],
      [49.28096, -122.95972],
      [49.28095, -122.95989],
      [49.28095, -122.96003],
      [49.28097, -122.96015],
      [49.28099, -122.96024],
      [49.28099, -122.96034],
      [49.28097, -122.9604],
      [49.28094, -122.96044],
      [49.28091, -122.96046],
      HASTINGS_OVERPASS_N,
    ],
  },
  {
    routeNames: [ROUTES.francesUnion.name],
    description: "hastings overpass",
    type: "mixed",
    elevation: 1,
    videoIds: [VIDEOS.francesUnionWb.id, VIDEOS.lakesNb.id],
    positions: [
      HASTINGS_OVERPASS_N,
      [49.28035, -122.96045],
      [49.27994, -122.96029],
      [49.27986, -122.96025],
      [49.27983, -122.96019],
      [49.27982, -122.96013],
      [49.27983, -122.96007],
      [49.27985, -122.96002],
      [49.27989, -122.95999],
      [49.27991, -122.95999],
      [49.27994, -122.96],
      HASTINGS_OVERPASS_S,
    ],
  },
  {
    routeNames: [ROUTES.francesUnion.name],
    description: "overpass to cliff",
    type: "mixed",
    elevation: 0.5,
    videoIds: [VIDEOS.francesUnionWb.id, VIDEOS.lakesNb.id],
    positions: [
      HASTINGS_OVERPASS_S,
      [49.28, -122.96009],
      [49.28001, -122.96014],
      [49.27999, -122.96025],
      [49.27998, -122.96033],
      [49.27989, -122.96034],
      [49.27984, -122.96031],
      [49.27981, -122.96025],
      [49.27979, -122.96014],
      [49.27978, -122.96004],
      [49.27977, -122.95991],
      [49.27981, -122.95971],
      [49.27984, -122.95964],
      [49.27995, -122.95942],
      [49.27998, -122.95927],
      [49.27997, -122.95918],
      [49.27994, -122.95908],
      CLIFF_BRUNETTE_FRASER,
    ],
  },
];
