import { NICOLA_GEORGIA, NICOLA_HARO, NICOLA_PENDER } from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const NICOLA = [
  {
    routes: [ROUTES.nicola.name],
    description: "primary",
    videos: [VIDEOS.nicolaNb],
    positions: [
      NICOLA_HARO,
      [49.28869, -123.13111],
      [49.28939, -123.13006],
      NICOLA_GEORGIA,
      NICOLA_PENDER,
    ],
  },
];