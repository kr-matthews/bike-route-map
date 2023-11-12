import { ALDER_10TH, ALDER_14TH, ALDER_7TH } from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const ALDER = [
  {
    routeNames: [ROUTES.alder.name],
    description: "all",
    videos: [VIDEOS.alderNb],
    videosStartAtStart: [VIDEOS.alderNb],
    videosEndAtEnd: [VIDEOS.alderNb],
    positions: [ALDER_14TH, [49.26068, -123.13148], ALDER_10TH, ALDER_7TH],
  },
];
