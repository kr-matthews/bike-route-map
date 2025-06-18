import {
  ALEXANDER_POWELL,
  CAMBIE_WATER_N,
  CAMBIE_WATER_S,
  RICHARDS_CORDOVA_SE,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const WATER = [
  {
    routeNames: [ROUTES.water.name],
    description: "eb",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.waterEb.id],
    videoIdsStartAtStart: [VIDEOS.waterEb.id],
    positions: [
      RICHARDS_CORDOVA_SE,
      [49.28465, -123.11071],
      CAMBIE_WATER_S,
      [49.28383, -123.10636],
      [49.28349, -123.10441],
      [49.28336, -123.10415],
      ALEXANDER_POWELL,
    ],
  },
  {
    routeNames: [ROUTES.water.name],
    description: "wb",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.waterWb.id],
    videoIdsEndAtEnd: [VIDEOS.waterWb.id],
    positions: [
      ALEXANDER_POWELL,
      [49.28347, -123.10424],
      [49.28353, -123.10439],
      [49.28389, -123.10637],
      CAMBIE_WATER_N,
      [49.28469, -123.11068],
      [49.28469, -123.11085],
      RICHARDS_CORDOVA_SE,
    ],
  },
];
