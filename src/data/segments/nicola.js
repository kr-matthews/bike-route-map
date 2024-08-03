import { NICOLA_GEORGIA, NICOLA_HARO, NICOLA_PENDER } from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const NICOLA = [
  {
    routeNames: [ROUTES.nicola.name],
    description: "primary",
    type: "quiet",
    videoIds: [VIDEOS.nicolaSb.id, VIDEOS.nicolaNb.id],
    videoIdsStartAtStart: [VIDEOS.nicolaNb.id],
    videoIdsStartAtEnd: [VIDEOS.nicolaSb.id],
    videoIdsEndAtStart: [VIDEOS.nicolaSb.id],
    positions: [
      NICOLA_HARO,
      [49.28869, -123.13111],
      [49.28939, -123.13006],
      NICOLA_GEORGIA,
    ],
  },
  {
    routeNames: [ROUTES.nicola.name],
    description: "georgia to pender",
    type: "quiet",
    oneWay: "recommended",
    videoIds: [VIDEOS.nicolaNb.id],
    videoIdsEndAtEnd: [VIDEOS.nicolaNb.id],
    positions: [NICOLA_GEORGIA, NICOLA_PENDER],
  },
];
