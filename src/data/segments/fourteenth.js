import {
  ALDER_14TH,
  HEATHER_14TH_N,
  HEATHER_14TH_S,
  ONTARIO_14TH,
  PRINCE_EDWARD_14TH,
  YUKON_14TH,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const FOURTEENTH = [
  {
    routeNames: [ROUTES.fourteenth.name],
    description: "alder to heather",
    videos: [VIDEOS.fourteenthWb.id],
    videosEndAtStart: [VIDEOS.fourteenthWb.id],
    positions: [
      ALDER_14TH,
      [49.25876, -123.12917],
      [49.25873, -123.1268],
      [49.25869, -123.12434],
      [49.25865, -123.12197],
      HEATHER_14TH_S,
    ],
  },
  {
    routeNames: [ROUTES.fourteenth.name],
    description: "heather to prince edward",
    videos: [VIDEOS.fourteenthWb.id],
    videosStartAtEnd: [VIDEOS.fourteenthWb.id],
    positions: [
      HEATHER_14TH_N,
      [49.25878, -123.1177],
      [49.25874, -123.11506],
      YUKON_14TH,
      [49.25867, -123.11112],
      [49.25865, -123.10972],
      [49.25855, -123.10953],
      [49.2585, -123.10703],
      ONTARIO_14TH,
      [49.25844, -123.10316],
      [49.2584, -123.10116],
      [49.25841, -123.10054],
      [49.25837, -123.09838],
      PRINCE_EDWARD_14TH,
    ],
  },
];
