import {
  BEATTY_NELSON_SE,
  BEATTY_NELSON_SW,
  BUTE_NELSON,
  HOMER_NELSON,
  HORNBY_NELSON_E,
  RICHARDS_NELSON,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const BURRARD_NELSON = [49.2812, -123.12604];

export const NELSON = [
  {
    description: "unofficial part",
    oneWay: "required",
    type: "shared",
    videos: [VIDEOS.cambieBridgeNelsonSb.id],
    hideUnlessVideo: true,
    videosStartAtStart: [VIDEOS.cambieBridgeNelsonSb.id],
    positions: [
      BUTE_NELSON,
      [49.2825, -123.12801],
      BURRARD_NELSON,
      HORNBY_NELSON_E,
      [49.2799, -123.12401],
      [49.27926, -123.12304],
      [49.27863, -123.12203],
      [49.27804, -123.12111],
      RICHARDS_NELSON,
    ],
  },
  {
    routeNames: [ROUTES.nelson.name],
    oneWay: "required",
    type: "dedicated",
    description: "official part",
    elevation: 0.5,
    videos: [VIDEOS.cambieBridgeNelsonSb.id],
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
