import {
  CARDERO_ALBERNI_N,
  CARDERO_ALBERNI_S,
  CARDERO_BEACH,
  CARDERO_BURNABY,
  CARDERO_COMOX,
  CARDERO_GEORGIA_N,
  CARDERO_GEORGIA_S,
  CARDERO_HARO,
  CARDERO_SEAWALL_N,
  CARDERO_SEAWALL_S,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const CARDERO = [
  {
    routeNames: [ROUTES.cardero.name],
    type: "dedicated",
    description: "seawall to beach",
    isClosed: true,
    positions: [
      CARDERO_SEAWALL_S,
      [49.28298, -123.14201],
      [49.28304, -123.14195],
      CARDERO_BEACH,
    ],
  },
  {
    routeNames: [ROUTES.cardero.name],
    description: "primary",
    type: "quiet",
    videos: [VIDEOS.carderoNb.id],
    videosStartAtStart: [VIDEOS.carderoNb.id],
    videosEndAtEnd: [VIDEOS.carderoNb.id],
    positions: [
      CARDERO_BEACH,
      [49.28382, -123.14081],
      CARDERO_BURNABY,
      [49.28524, -123.13867],
      [49.28595, -123.1376],
      CARDERO_COMOX,
      [49.28736, -123.13546],
      [49.28805, -123.1344],
      CARDERO_HARO,
      [49.28946, -123.13227],
      CARDERO_ALBERNI_S,
      CARDERO_ALBERNI_N,
      CARDERO_GEORGIA_S,
      CARDERO_GEORGIA_N,
      [49.29182, -123.12873],
      [49.29183, -123.12864],
      CARDERO_SEAWALL_N,
    ],
  },
];
