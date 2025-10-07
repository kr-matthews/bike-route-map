import {
  WYLIE_1ST_N,
  WYLIE_1ST_S,
  YUKON_10TH_E,
  YUKON_10TH_W,
  YUKON_14TH,
  YUKON_29TH_N,
  YUKON_29TH_S,
  YUKON_5TH_E,
  YUKON_5TH_W,
  YUKON_7TH_NE,
  YUKON_7TH_NW,
  YUKON_7TH_SE,
  YUKON_7TH_SW,
  YUKON_KING_EDWARD_SE,
  YUKON_KING_EDWARD_SW,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const YUKON_16TH_E_N = [49.2569, -123.1125];
const YUKON_16TH_W_N = [49.25691, -123.11314];
const YUKON_12TH = [49.26037, -123.11302];
const YUKON_BROADWAY = [49.26325, -123.11285];
const WYLIE_2ND_N = [49.2676, -123.11316];

export const YUKON = [
  {
    routeNames: [ROUTES.yukon.name],
    description: "crossing 29th",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.cambieNb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.cambieNb.id],
    positions: [YUKON_29TH_S, YUKON_29TH_N],
  },
  {
    routeNames: [ROUTES.yukon.name],
    description: "29th to king edward",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.yukonSb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.yukonSb.id],
    positions: [
      YUKON_29TH_N,
      [49.24697, -123.11228],
      [49.2486, -123.11221],
      YUKON_KING_EDWARD_SE,
    ],
  },
  {
    routeNames: [ROUTES.yukon.name],
    description: "king edward overlap",
    type: "dedicated",
    videoIds: [ROUTE_VIDEOS.yukonSb.id],
    positions: [YUKON_KING_EDWARD_SE, YUKON_KING_EDWARD_SW],
  },
  {
    routeNames: [ROUTES.yukon.name],
    description: "king edward to 16th",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.yukonSb.id],
    positions: [
      YUKON_KING_EDWARD_SW,
      [49.25005, -123.11279],
      [49.252, -123.1127],
      [49.25392, -123.11262],
      [49.25578, -123.11255],
      YUKON_16TH_E_N,
    ],
  },
  {
    routeNames: [ROUTES.yukon.name],
    description: "16th",
    type: "dedicated",
    videoIds: [ROUTE_VIDEOS.yukonSb.id],
    positions: [YUKON_16TH_E_N, YUKON_16TH_W_N],
  },
  {
    routeNames: [ROUTES.yukon.name],
    description: "16th to 12th",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.yukonSb.id],
    positions: [YUKON_16TH_W_N, YUKON_14TH, YUKON_12TH],
  },
  {
    routeNames: [ROUTES.yukon.name],
    description: "nb: 12th to broadway",
    type: "shared",
    oneWay: "required",
    positions: [
      YUKON_12TH,
      [49.26048, -123.11299],
      YUKON_10TH_E,
      YUKON_BROADWAY,
    ],
  },
  {
    routeNames: [ROUTES.yukon.name],
    description: "nb: broadway to 7th",
    type: "painted",
    oneWay: "required",
    positions: [YUKON_BROADWAY, [49.26391, -123.11283], YUKON_7TH_SE],
  },
  {
    routeNames: [ROUTES.yukon.name, ROUTES.offBroadway.name],
    description: "nb: 7th to 5th",
    type: "painted",
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.offBroadwayEb.id],
    positions: [
      YUKON_7TH_SE,
      YUKON_7TH_NE,
      [49.26573, -123.11273],
      YUKON_5TH_E,
    ],
  },
  {
    routeNames: [ROUTES.yukon.name],
    description: "nb: 5th to wylie",
    type: "painted",
    oneWay: "required",
    positions: [
      YUKON_5TH_E,
      [49.26736, -123.11267],
      [49.26753, -123.1128],
      WYLIE_2ND_N,
    ],
  },
  {
    routeNames: [ROUTES.yukon.name],
    description: "sb: wylie to 5th",
    type: "painted",
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.yukonSb.id],
    positions: [
      WYLIE_2ND_N,
      [49.26753, -123.11308],
      [49.26749, -123.11287],
      [49.26744, -123.11281],
      YUKON_5TH_W,
    ],
  },
  {
    routeNames: [ROUTES.yukon.name, ROUTES.offBroadway.name],
    description: "sb: 5th to 7th",
    type: "painted",
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.yukonSb.id, ROUTE_VIDEOS.offBroadwayWb.id],
    positions: [YUKON_5TH_W, [49.26574, -123.11287], YUKON_7TH_NW],
  },
  {
    routeNames: [ROUTES.yukon.name],
    description: "sb: 7th to 12th",
    type: "painted",
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.yukonSb.id],
    positions: [
      YUKON_7TH_NW,
      YUKON_7TH_SW,
      [49.26392, -123.11296],
      [49.26319, -123.11298],
      YUKON_10TH_W,
      [49.26049, -123.11308],
      YUKON_12TH,
    ],
  },
  {
    routeNames: [ROUTES.yukon.name],
    description: "2nd to 1st",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.yukonSb.id],
    positions: [WYLIE_2ND_N, WYLIE_1ST_S],
  },
  {
    routeNames: [ROUTES.yukon.name],
    description: "crossing 1st",
    type: "quiet",
    positions: [WYLIE_1ST_S, WYLIE_1ST_N],
  },
];
