import {
  HIGHBURY_3RD,
  HIGHBURY_4TH_N,
  HIGHBURY_4TH_S,
  HIGHBURY_8TH,
  HIGHBURY_POINT_GREY,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const HIGHBURY = [
  {
    routes: [ROUTES.highbury.name],
    description: "all",
    videos: [VIDEOS.highburyNb],
    positions: [
      HIGHBURY_8TH,
      [49.26694, -123.18772],
      HIGHBURY_4TH_N,
      HIGHBURY_4TH_S,
      HIGHBURY_3RD,
      [49.27044, -123.18755],
      [49.27134, -123.18752],
      HIGHBURY_POINT_GREY,
    ],
  },
];
