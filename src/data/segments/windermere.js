import { WINDERMERE_ADANAC, WINDERMERE_HASTINGS_N } from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

export const WINDERMERE = [
  {
    routeNames: [ROUTES.windermere.name],
    description: "primary",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.windermereNb.id, ROUTE_VIDEOS.windermereSb.id],
    videoIdsStartAtStart: [ROUTE_VIDEOS.windermereNb.id],
    videoIdsStartAtEnd: [ROUTE_VIDEOS.windermereSb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.windermereSb.id],
    positions: [
      WINDERMERE_ADANAC,
      [49.27784, -123.03622],
      [49.27825, -123.03621],
      [49.27907, -123.03621],
      [49.28021, -123.03621],
      WINDERMERE_HASTINGS_N,
    ],
  },
];
