import {
  EAST_MALL_16TH_EN,
  EAST_MALL_16TH_ES,
  EAST_MALL_16TH_NE,
  EAST_MALL_16TH_NW,
  EAST_MALL_16TH_SE,
  EAST_MALL_16TH_SW,
  EAST_MALL_16TH_WN,
  EAST_MALL_16TH_WS,
  EAST_MALL_STADIUM_E,
  EAST_MALL_STADIUM_W,
  EAST_MALL_UNIVERSITY,
  MARINE_CHANCELLOR_NW,
  MARINE_CHANCELLOR_SE,
  MARINE_CHANCELLOR_SW,
} from "../intersections";
import { ROUTES } from "../routes";

const NB_POST_16TH = [49.25489, -123.24147];
const SB_PRE_16TH = [49.25482, -123.24172];
const AGRONOMY_LANE = [49.26101, -123.2467];
const PEDESTRIANIZED_S = [49.26537, -123.25013];
const PEDESTRIANIZED_N = [49.26709, -123.25159];
const PRE_MARINE_SPLIT = [49.27024, -123.25419];

export const EAST_MALL = [
  {
    description: "nb: from ross",
    type: "mixed",
    oneWay: "required",
    hideArrows: true,
    positions: [
      [49.25386, -123.24067],
      [49.25389, -123.24065],
      EAST_MALL_16TH_SE,
    ],
  },
  {
    description: "sb: to ross",
    type: "mixed",
    oneWay: "required",
    positions: [
      EAST_MALL_16TH_SW,
      [49.25375, -123.24097],
      [49.25368, -123.24089],
      [49.25355, -123.24075],
      [49.25353, -123.24066],
    ],
  },
  {
    description: "crossing 16th west side",
    type: "mixed",
    oneWay: "recommended",
    positions: [
      EAST_MALL_16TH_WN,
      [49.2541, -123.24148],
      [49.25401, -123.24141],
      EAST_MALL_16TH_WS,
    ],
  },
  {
    description: "crossing 16th east side",
    type: "mixed",
    oneWay: "recommended",
    positions: [
      EAST_MALL_16TH_ES,
      [49.25422, -123.24066],
      [49.25429, -123.24072],
      EAST_MALL_16TH_EN,
    ],
  },
  {
    description: "sb: crossing marine/chancellor",
    type: "shared",
    oneWay: "required",
    positions: [MARINE_CHANCELLOR_NW, MARINE_CHANCELLOR_SW],
  },

  {
    routeNames: [ROUTES.eastMall.name],
    description: "nb: post-16th",
    type: "mixed",
    oneWay: "required",
    positions: [
      EAST_MALL_16TH_NE,
      [49.25467, -123.24128],
      [49.25483, -123.24137],
      NB_POST_16TH,
    ],
  },
  {
    routeNames: [ROUTES.eastMall.name],
    description: "nb: 16th to lane end",
    type: "painted",
    oneWay: "required",
    positions: [
      NB_POST_16TH,
      [49.25505, -123.24157],
      EAST_MALL_STADIUM_E,
      [49.25842, -123.24431],
      [49.2601, -123.24569],
      [49.2602, -123.24579],
      [49.26028, -123.24586],
      [49.26036, -123.24596],
      [49.26042, -123.24609],
      [49.26049, -123.24623],
      [49.26056, -123.24631],
      [49.26096, -123.24662],
      AGRONOMY_LANE,
    ],
  },
  {
    routeNames: [ROUTES.eastMall.name],
    description: "sb: lane start to 16th",
    type: "painted",
    oneWay: "required",
    positions: [
      AGRONOMY_LANE,
      [49.26095, -123.24668],
      [49.26047, -123.24632],
      [49.26006, -123.24602],
      [49.25832, -123.24459],
      EAST_MALL_STADIUM_W,
      SB_PRE_16TH,
    ],
  },
  {
    routeNames: [ROUTES.eastMall.name],
    description: "sb: pre-16th",
    type: "mixed",
    oneWay: "required",
    positions: [
      SB_PRE_16TH,
      [49.2547, -123.24172],
      [49.25449, -123.24154],
      EAST_MALL_16TH_NW,
    ],
  },
  {
    routeNames: [ROUTES.eastMall.name],
    description: "lanes to pedestrianized",
    type: "quiet",
    positions: [
      AGRONOMY_LANE,
      [49.26136, -123.24695],
      [49.26173, -123.24719],
      [49.26233, -123.24767],
      [49.26258, -123.24787],
      [49.26379, -123.24887],
      [49.26448, -123.24944],
      [49.26531, -123.25012],
      PEDESTRIANIZED_S,
    ],
  },
  {
    routeNames: [ROUTES.eastMall.name],
    description: "pedestrianized",
    type: "mixed",
    positions: [PEDESTRIANIZED_S, EAST_MALL_UNIVERSITY, PEDESTRIANIZED_N],
  },
  {
    routeNames: [ROUTES.eastMall.name],
    description: "pedestrianized to pre-marine",
    type: "quiet",
    positions: [
      PEDESTRIANIZED_N,
      [49.26901, -123.25316],
      [49.26976, -123.25378],
      PRE_MARINE_SPLIT,
    ],
  },
  {
    routeNames: [ROUTES.eastMall.name],
    description: "nb: to marine",
    type: "painted",
    oneWay: "required",
    positions: [
      PRE_MARINE_SPLIT,
      [49.2708, -123.25398],
      [49.27103, -123.25395],
      MARINE_CHANCELLOR_SE,
    ],
  },
  {
    routeNames: [ROUTES.eastMall.name],
    description: "sb: from marine",
    type: "painted",
    oneWay: "required",
    positions: [
      MARINE_CHANCELLOR_SW,
      [49.27089, -123.25421],
      [49.27086, -123.25419],
      [49.27082, -123.25418],
      [49.27042, -123.25431],
      [49.27036, -123.2543],
      PRE_MARINE_SPLIT,
    ],
  },
];
