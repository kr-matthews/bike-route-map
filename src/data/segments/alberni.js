import {
  CARDERO_ALBERNI_N,
  CARDERO_ALBERNI_S,
  CHILCO_ALBERNI_E,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const EB_LANE_END = [49.29222, -123.13452];
const EB_LANE_START = [49.29187, -123.134];

const WB_LANE_END = [49.29193, -123.13388];
const WB_LANE_START = [49.29228, -123.13445];

export const ALBERNI = [
  {
    routeNames: [ROUTES.alberni.name],
    description: "eb: chilco to denman",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.alberniEb.id],
    positions: [CHILCO_ALBERNI_E, [49.29402, -123.13728], EB_LANE_END],
  },
  {
    routeNames: [ROUTES.alberni.name],
    description: "eb: near denman",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.alberniEb.id],
    positions: [EB_LANE_END, EB_LANE_START],
  },
  {
    routeNames: [ROUTES.alberni.name],
    description: "eb: denman to cardero",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.alberniEb.id],
    videoIdsEndAtEnd: [VIDEOS.alberniEb.id],
    positions: [EB_LANE_START, CARDERO_ALBERNI_S],
  },
  {
    routeNames: [ROUTES.alberni.name],
    description: "wb: cardero to denman",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.alberniWb.id],
    videoIdsStartAtStart: [VIDEOS.alberniWb.id],
    positions: [CARDERO_ALBERNI_N, WB_LANE_END],
  },
  {
    routeNames: [ROUTES.alberni.name],
    description: "wb: near denman",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.alberniWb.id],
    positions: [WB_LANE_END, WB_LANE_START],
  },
  {
    routeNames: [ROUTES.alberni.name],
    description: "wb: denman to chilco",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.alberniWb.id],
    positions: [WB_LANE_START, [49.29405, -123.13718], CHILCO_ALBERNI_E],
  },
];
