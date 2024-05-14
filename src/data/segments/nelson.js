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
const CAMBIE_NELSON_SW = [49.27604, -123.11817];

export const NELSON = [
  {
    description: "nelson unofficial part",
    oneWay: "required",
    type: "shared",
    videoIds: [VIDEOS.cambieBridgeNelsonSb.id],
    hideUnlessVideo: true,
    videoIdsStartAtStart: [VIDEOS.cambieBridgeNelsonSb.id],
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
    description: "richards to cambie",
    videoIds: [VIDEOS.cambieBridgeNelsonSb.id],
    positions: [
      RICHARDS_NELSON,
      HOMER_NELSON,
      [49.27695, -123.11956],
      [49.27659, -123.11899],
      CAMBIE_NELSON_SW,
    ],
  },
  {
    routeNames: [ROUTES.nelson.name],
    oneWay: "required",
    type: "dedicated",
    description: "cambie to beatty",
    elevation: 0.5,
    videoIds: [VIDEOS.cambieBridgeNelsonSb.id, VIDEOS.beattyNb.id],
    videoIdsStartAtStart: [VIDEOS.beattyNb.id],
    positions: [CAMBIE_NELSON_SW, BEATTY_NELSON_SW],
  },
  {
    routeNames: [ROUTES.nelson.name],
    description: "'crossing' beatty",
    type: "dedicated",
    oneWay: "required",
    hideArrows: true,
    elevation: 0.5,
    videoIds: [
      VIDEOS.cambieBridgeNelsonSb.id,
      VIDEOS.cambieBridgeSb.id,
      VIDEOS.beattyNb.id,
    ],
    positions: [BEATTY_NELSON_SW, BEATTY_NELSON_SE],
  },
];
