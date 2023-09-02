import {
  WYLIE_1ST_N,
  WYLIE_1ST_S,
  YUKON_10TH,
  YUKON_14TH,
  YUKON_29TH,
  YUKON_5TH,
  YUKON_7TH,
  YUKON_KING_EDWARD_SE,
  YUKON_KING_EDWARD_SW,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const YUKON = [
  {
    routes: [ROUTES.yukon.name],
    description: "29th to king edward",
    videos: [VIDEOS.yukonSb],
    positions: [
      YUKON_29TH,
      [49.24697, -123.11228],
      [49.2486, -123.11221],
      YUKON_KING_EDWARD_SE,
    ],
  },
  {
    routes: [ROUTES.yukon.name],
    description: "king edward overlap",
    videos: [VIDEOS.yukonSb],
    positions: [YUKON_KING_EDWARD_SE, YUKON_KING_EDWARD_SW],
  },
  {
    routes: [ROUTES.yukon.name],
    description: "king edward to 7th",
    videos: [VIDEOS.yukonSb],
    positions: [
      YUKON_KING_EDWARD_SW,
      [49.25005, -123.11279],
      [49.252, -123.1127],
      [49.25392, -123.11262],
      [49.25578, -123.11255],
      [49.2569, -123.1125],
      [49.25691, -123.11314],
      YUKON_14TH,
      [49.26037, -123.11302],
      YUKON_10TH,
      [49.26392, -123.11288],
      YUKON_7TH,
    ],
  },
  {
    routes: [ROUTES.yukon.name, ROUTES.offBroadway.name],
    description: "off-broadway",
    videos: [VIDEOS.yukonSb, VIDEOS.offBroadwayWb],
    positions: [YUKON_7TH, [49.26571, -123.11279], YUKON_5TH],
  },
  {
    routes: [ROUTES.yukon.name],
    description: "7th to 1st",
    videos: [VIDEOS.yukonSb],
    positions: [
      YUKON_5TH,
      [49.26737, -123.11272],
      [49.26751, -123.11282],
      [49.26753, -123.11309],
      WYLIE_1ST_S,
    ],
  },
  {
    routes: [ROUTES.yukon.name],
    description: "crossing 1st",
    positions: [WYLIE_1ST_S, WYLIE_1ST_N],
  },
];
