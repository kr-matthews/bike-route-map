import {
  BEATTY_NELSON,
  BURRARD_NELSON,
  BUTE_NELSON,
  HOMER_NELSON,
  RICHARDS_NELSON,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const NELSON = [
  {
    routes: [ROUTES.nelson.name],
    // technically is one way, but since hidden, don't specify
    description: "unofficial part",
    type: "unofficial",
    videos: [VIDEOS.cambieBridgeNelsonSb],
    hideUnlessVideo: true,
    positions: [
      BUTE_NELSON,
      [49.2825, -123.12801],
      BURRARD_NELSON,
      [49.28053, -123.12498],
      [49.2799, -123.12401],
      [49.27926, -123.12304],
      [49.27863, -123.12203],
      [49.27804, -123.12111],
      RICHARDS_NELSON,
    ],
  },
  {
    routes: [ROUTES.nelson.name],
    directions: ["eastbound"],
    description: "official part",
    videos: [VIDEOS.cambieBridgeNelsonSb],
    positions: [
      RICHARDS_NELSON,
      HOMER_NELSON,
      [49.27695, -123.11954],
      [49.27661, -123.11898],
      [49.27607, -123.11816],
      BEATTY_NELSON,
    ],
  },
];