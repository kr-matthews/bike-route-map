import {
  HIGHBURY_3RD,
  HIGHBURY_4TH_N,
  HIGHBURY_4TH_S,
  HIGHBURY_8TH,
  HIGHBURY_POINT_GREY,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

export const HIGHBURY = [
  {
    routeNames: [ROUTES.highbury.name],
    description: "all",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.highburySb.id, ROUTE_VIDEOS.highburyNb.id],
    videoIdsStartAtEnd: [ROUTE_VIDEOS.highburySb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.highburySb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.highburyNb.id],
    positions: [
      HIGHBURY_8TH,
      [49.26694, -123.18772],
      HIGHBURY_4TH_S,
      HIGHBURY_4TH_N,
      HIGHBURY_3RD,
      [49.27044, -123.18755],
      [49.27134, -123.18752],
      HIGHBURY_POINT_GREY,
    ],
  },
];
