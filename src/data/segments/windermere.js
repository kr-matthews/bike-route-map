import {
  WINDERMERE_ADANAC,
  WINDERMERE_HASTINGS_N,
  WINDERMERE_PENDER,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

export const WINDERMERE = [
  {
    routeNames: [ROUTES.windermere.name],
    description: "adanac to pender",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.windermereNb.id, ROUTE_VIDEOS.windermereSb.id],
    videoIdsStartAtStart: [ROUTE_VIDEOS.windermereNb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.windermereSb.id],
    positions: [
      WINDERMERE_ADANAC,
      [49.27784, -123.03622],
      [49.27825, -123.03621],
      [49.27907, -123.03621],
      WINDERMERE_PENDER,
    ],
  },
  {
    routeNames: [ROUTES.windermere.name, ROUTES.eastsideCrosscut.name],
    description: "pender to hastings",
    type: "quiet",
    videoIds: [
      ROUTE_VIDEOS.windermereNb.id,
      ROUTE_VIDEOS.windermereSb.id,
      ROUTE_VIDEOS.eastsideCrosscutNb.id,
    ],
    videoIdsStartAtEnd: [ROUTE_VIDEOS.windermereSb.id],
    positions: [WINDERMERE_PENDER, WINDERMERE_HASTINGS_N],
  },
];
