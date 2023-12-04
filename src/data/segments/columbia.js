import {
  COLUMBIA_1ST_N,
  COLUMBIA_1ST_S,
  COLUMBIA_5TH,
  COLUMBIA_SEAWALL,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const COLUMBIA = [
  {
    routeNames: [ROUTES.columbia.name],
    description: "primary",
    videos: [VIDEOS.columbiaNb.id],
    videosStartAtStart: [VIDEOS.columbiaNb.id],
    positions: [
      COLUMBIA_5TH,
      [49.26749, -123.10944],
      [49.26835, -123.10944],
      [49.26923, -123.10943],
      COLUMBIA_1ST_S,
      COLUMBIA_1ST_N,
      [49.27159, -123.10937],
      COLUMBIA_SEAWALL,
    ],
  },
];
