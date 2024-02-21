import { WINDERMERE_ADANAC, WINDERMERE_HASTINGS_N } from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const WINDERMERE = [
  {
    routeNames: [ROUTES.windermere.name],
    description: "primary",
    type: "quiet",
    videoIds: [VIDEOS.windermereNb.id, VIDEOS.windermereSb.id],
    videoIdsStartAtStart: [VIDEOS.windermereNb.id],
    videoIdsStartAtEnd: [VIDEOS.windermereSb.id],
    videoIdsEndAtStart: [VIDEOS.windermereSb.id],
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
