import {
  CASSIAR_ADANAC,
  CASSIAR_CAMBRIDGE,
  CASSIAR_DUNDAS_S,
  CASSIAR_SKEENA_PATH,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const CASSIAR_HASTINGS_SE = [49.28073, -123.03082];
const CASSIAR_HASTINGS_NE = [49.28153, -123.03084];

export const CASSIAR = [
  {
    routeNames: [ROUTES.cassiar.name],
    description: "adanac to hastings",
    type: "quiet",
    videoIds: [VIDEOS.cassiarSb.id],
    videoIdsEndAtStart: [VIDEOS.cassiarSb.id],
    positions: [
      CASSIAR_ADANAC,
      [49.27782, -123.03086],
      [49.27826, -123.03089],
      [49.27908, -123.03087],
      [49.28019, -123.03083],
      CASSIAR_HASTINGS_SE,
    ],
  },
  {
    routeNames: [ROUTES.cassiar.name],
    description: "crossing hastings",
    type: "other",
    videoIds: [VIDEOS.cassiarSb.id],
    positions: [
      CASSIAR_HASTINGS_SE,
      [49.28099, -123.03128],
      [49.2813, -123.03128],
      CASSIAR_HASTINGS_NE,
    ],
  },
  {
    routeNames: [ROUTES.cassiar.name],
    description: "hastings to cambridge",
    type: "quiet",
    videoIds: [VIDEOS.cassiarSb.id],
    positions: [
      CASSIAR_HASTINGS_NE,
      [49.28206, -123.03083],
      [49.28295, -123.03087],
      [49.28385, -123.03088],
      CASSIAR_DUNDAS_S,
      [49.28557, -123.03087],
      [49.28567, -123.03082],
      [49.28634, -123.03032],
      [49.28658, -123.03016],
      [49.2867, -123.02997],
      CASSIAR_CAMBRIDGE,
    ],
  },
  {
    routeNames: [ROUTES.cassiar.name],
    description: "path",
    type: "mixed",
    videoIds: [VIDEOS.cassiarSb.id],
    positions: [
      CASSIAR_CAMBRIDGE,
      [49.28701, -123.02974],
      [49.28743, -123.0292],
      CASSIAR_SKEENA_PATH,
    ],
  },
];
