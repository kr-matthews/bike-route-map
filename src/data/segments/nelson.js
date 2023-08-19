import {
  BEATTY_NELSON_SE,
  BEATTY_NELSON_SW,
  BURRARD_NELSON,
  BUTE_NELSON,
  HOMER_NELSON,
  RICHARDS_NELSON,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const NELSON = [
  {
    description: "unofficial part",
    oneWay: "required",
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
    oneWay: "required",
    description: "official part",
    elevation: 0.5,
    videos: [VIDEOS.cambieBridgeNelsonSb],
    positions: [
      RICHARDS_NELSON,
      HOMER_NELSON,
      [49.27695, -123.11956],
      [49.27659, -123.11899],
      [49.27604, -123.11817],
      BEATTY_NELSON_SW,
      BEATTY_NELSON_SE,
    ],
  },
];
