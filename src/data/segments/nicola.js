import { NICOLA_GEORGIA, NICOLA_HARO, NICOLA_PENDER } from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

export const NICOLA = [
  {
    routeNames: [ROUTES.nicola.name],
    description: "primary",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.nicolaSb.id, ROUTE_VIDEOS.nicolaNb.id],
    videoIdsStartAtStart: [ROUTE_VIDEOS.nicolaNb.id],
    videoIdsStartAtEnd: [ROUTE_VIDEOS.nicolaSb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.nicolaSb.id],
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
    videoIds: [ROUTE_VIDEOS.nicolaNb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.nicolaNb.id],
    positions: [NICOLA_GEORGIA, NICOLA_PENDER],
  },
];
