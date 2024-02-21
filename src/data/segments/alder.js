import { ALDER_10TH, ALDER_14TH, ALDER_7TH } from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const ALDER = [
  {
    routeNames: [ROUTES.alder.name],
    description: "all",
    type: "quiet",
    videoIds: [VIDEOS.alderNb.id],
    videoIdsStartAtStart: [VIDEOS.alderNb.id],
    videoIdsEndAtEnd: [VIDEOS.alderNb.id],
    positions: [ALDER_14TH, [49.26068, -123.13148], ALDER_10TH, ALDER_7TH],
  },
];
