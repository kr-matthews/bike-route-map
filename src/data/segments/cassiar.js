import {
  CASSIAR_ADANAC,
  CASSIAR_CAMBRIDGE,
  CASSIAR_SKEENA_PATH,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const CASSIAR = [
  {
    routeNames: [ROUTES.cassiar.name],
    description: "primary",
    videos: [VIDEOS.cassiarSb],
    videosEndAtStart: [VIDEOS.cassiarSb],
    positions: [
      CASSIAR_ADANAC,
      [49.27782, -123.03086],
      [49.27826, -123.03089],
      [49.27908, -123.03087],
      [49.28019, -123.03083],
      [49.28073, -123.03082],
      [49.28099, -123.03128],
      [49.2813, -123.03128],
      [49.28153, -123.03084],
      [49.28206, -123.03083],
      [49.28295, -123.03087],
      [49.28385, -123.03088],
      [49.2847, -123.03088],
      [49.28557, -123.03087],
      [49.28567, -123.03082],
      [49.28634, -123.03032],
      [49.28658, -123.03016],
      [49.2867, -123.02997],
      CASSIAR_CAMBRIDGE,
      [49.28701, -123.02974],
      [49.28743, -123.0292],
      CASSIAR_SKEENA_PATH,
    ],
  },
];
