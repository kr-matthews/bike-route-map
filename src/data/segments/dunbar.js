import {
  DUNBAR_16TH_N,
  DUNBAR_16TH_S,
  DUNBAR_18TH,
  DUNBAR_18TH_LANE,
  DUNBAR_24TH_LANE,
  DUNBAR_29TH,
  DUNBAR_39TH,
  DUNBAR_40TH_LANE,
  DUNBAR_KING_EDWARD_LANE,
  DUNBAR_MARINE_N,
  DUNBAR_MARINE_S,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const DUNBAR = [
  {
    routeNames: [ROUTES.dunbar.name],
    description: "crossing marine",
    type: "uncomfortable",
    positions: [DUNBAR_MARINE_S, DUNBAR_MARINE_N],
  },
  {
    routeNames: [ROUTES.dunbar.name],
    description: "marine to 41st",
    type: "uncomfortable",
    videos: [VIDEOS.dunbarNb],
    videosStartAtStart: [VIDEOS.dunbarNb],
    positions: [
      DUNBAR_MARINE_N,
      [49.23284, -123.18538],
      [49.23477, -123.18534],
      DUNBAR_40TH_LANE,
    ],
  },
  {
    routeNames: [ROUTES.dunbar.name],
    description: "41st to king edward",
    videos: [VIDEOS.dunbarNb],
    positions: [
      DUNBAR_40TH_LANE,
      DUNBAR_39TH,
      [49.23858, -123.1853],
      [49.24048, -123.18528],
      [49.24235, -123.18526],
      [49.24427, -123.18524],
      DUNBAR_29TH,
      [49.24809, -123.18521],
      DUNBAR_KING_EDWARD_LANE,
    ],
  },
  {
    routeNames: [ROUTES.dunbar.name],
    description: "king edward",
    type: "uncomfortable",
    videos: [VIDEOS.dunbarNb],
    positions: [DUNBAR_KING_EDWARD_LANE, DUNBAR_24TH_LANE],
  },
  {
    routeNames: [ROUTES.dunbar.name],
    description: "king edward to 18th",
    videos: [VIDEOS.dunbarNb],
    positions: [
      DUNBAR_24TH_LANE,
      [49.25195, -123.18517],
      [49.25377, -123.18516],
      [49.25559, -123.18514],
      DUNBAR_18TH_LANE,
    ],
  },
  {
    routeNames: [ROUTES.dunbar.name],
    description: "18th to 16th",
    type: "uncomfortable",
    videos: [VIDEOS.dunbarNb],
    positions: [DUNBAR_18TH_LANE, DUNBAR_18TH, DUNBAR_16TH_S, DUNBAR_16TH_N],
  },
  {
    description: "16th eastbound connection",
    oneWay: "required",
    positions: [[49.25785, -123.18594], DUNBAR_16TH_S, [49.25783, -123.18408]],
  },
  {
    description: "16th westbound connection east",
    oneWay: "required",
    positions: [[49.258, -123.18408], DUNBAR_16TH_N],
  },
  {
    description: "16th westbound connection west",
    oneWay: "required",
    videos: [VIDEOS.dunbarNb],
    videosEndAtEnd: [VIDEOS.dunbarNb],
    positions: [DUNBAR_16TH_N, [49.25802, -123.18605]],
  },
];
