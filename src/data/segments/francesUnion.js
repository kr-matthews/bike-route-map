import {
  BARNET_INLET_N,
  BARNET_RIDGE,
  BOUNDARY_ADANAC,
  CARLETON_FRANCES,
  CLIFF_BRUNETTE_FRASER,
  CLIFF_UNION,
  INLET_BAYVIEW_E,
  INLET_BAYVIEW_W,
  INLET_RIDGE_E,
  INLET_RIDGE_W,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const BARNET_INLET_S = [49.28822, -122.94958];

const CLIFF_WESTRIDGE_PARK = [49.28122, -122.95928];
const HASTINGS_OVERPASS_N = [49.28086, -122.96047];
const HASTINGS_OVERPASS_S = [49.27997, -122.96001];
const OVERPASS_ADJ_S = [49.28002, -122.96012];

const EAST_OF_BOUNDARY_ADANAC = [49.27756, -123.0221];

export const FRANCES_UNION = [
  {
    description: "connection via ridge dr",
    type: "shared-pedestrian",
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
    videos: [VIDEOS.adanacWb.id],
    videosStartAtEnd: [VIDEOS.adanacWb.id],
    positions: [
      BOUNDARY_ADANAC,
      [49.27757, -123.02325],
      EAST_OF_BOUNDARY_ADANAC,
    ],
  },
  {
    routeNames: [ROUTES.francesUnion.name],
    description: "primary",
    positions: [
      EAST_OF_BOUNDARY_ADANAC,
      [49.27755, -123.0211],
      [49.27752, -123.01867],
      [49.2793, -123.01865],
      [49.27927, -123.01421],
      CARLETON_FRANCES,
      [49.27923, -123.00869],
      [49.27919, -123.00306],
      [49.27917, -122.99748],
      [49.27914, -122.9921],
      [49.27913, -122.98785],
      [49.27911, -122.9837],
      [49.2791, -122.98096],
      [49.27911, -122.98031],
      [49.27919, -122.9792],
      [49.27916, -122.97558],
      [49.27923, -122.97545],
      [49.27991, -122.97545],
      [49.28007, -122.97532],
      [49.28014, -122.97515],
      [49.28017, -122.9747],
      [49.28024, -122.97444],
      [49.28024, -122.97424],
      [49.28021, -122.9741],
      [49.2802, -122.97362],
      [49.28014, -122.97334],
      [49.27994, -122.97316],
      [49.27947, -122.97259],
      [49.27939, -122.97264],
      [49.2785, -122.97129],
      [49.27804, -122.97063],
      [49.27785, -122.97046],
      [49.27773, -122.97022],
      [49.27782, -122.96982],
      [49.2778, -122.96686],
      [49.2778, -122.96465],
      [49.27779, -122.96227],
      CLIFF_UNION,
      [49.27778, -122.95627],
      [49.27776, -122.95342],
      [49.28038, -122.95339],
      [49.2824, -122.95338],
      [49.28296, -122.95337],
      BARNET_RIDGE,
    ],
  },
  {
    routeNames: [ROUTES.francesUnion.name],
    description: "eb to highway",
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
    type: "shared-pedestrian",
    positions: [INLET_BAYVIEW_E, INLET_BAYVIEW_W],
  },
  {
    routeNames: [ROUTES.francesUnion.name],
    description: "wb to overpass",
    oneWay: "recommended",
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
      [49.28655, -122.95643],
      [49.286, -122.95885],
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
    elevation: 0.5,
    positions: [
      CLIFF_WESTRIDGE_PARK,
      [49.28105, -122.95942],
      [49.28096, -122.95967],
      [49.28097, -122.96016],
      [49.281, -122.96032],
      [49.28095, -122.96044],
      HASTINGS_OVERPASS_N,
    ],
  },
  {
    routeNames: [ROUTES.francesUnion.name],
    description: "hastings overpass",
    elevation: 1,
    positions: [
      HASTINGS_OVERPASS_N,
      [49.28035, -122.96047],
      [49.27986, -122.96027],
      [49.27982, -122.96014],
      [49.27988, -122.96001],
      HASTINGS_OVERPASS_S,
    ],
  },
  {
    routeNames: [ROUTES.francesUnion.name],
    description: "wb post-overpass",
    elevation: 0.5,
    positions: [HASTINGS_OVERPASS_S, OVERPASS_ADJ_S],
  },
  {
    routeNames: [ROUTES.francesUnion.name],
    description: "overpass to union",
    positions: [
      OVERPASS_ADJ_S,
      [49.27999, -122.96028],
      [49.27992, -122.96034],
      [49.27981, -122.96028],
      [49.27977, -122.96003],
      [49.27979, -122.95975],
      [49.27997, -122.95937],
      [49.27997, -122.95919],
      [49.2799, -122.95899],
      CLIFF_BRUNETTE_FRASER,
      [49.27974, -122.95894],
      CLIFF_UNION,
    ],
  },
];
