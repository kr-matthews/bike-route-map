import { ALDER_10TH, ALDER_14TH, ALDER_7TH } from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

export const ALDER = [
  {
    routeNames: [ROUTES.alder.name],
    description: "all",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.alderSb.id, ROUTE_VIDEOS.alderNb.id],
    videoIdsStartAtStart: [ROUTE_VIDEOS.alderNb.id],
    videoIdsStartAtEnd: [ROUTE_VIDEOS.alderSb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.alderSb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.alderNb.id],
    positions: [ALDER_14TH, [49.26068, -123.13148], ALDER_10TH, ALDER_7TH],
  },
];
