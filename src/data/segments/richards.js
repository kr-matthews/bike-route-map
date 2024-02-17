import {
  RICHARDS_BEACH,
  RICHARDS_DUNSMUIR,
  RICHARDS_HELMCKEN,
  RICHARDS_NELSON,
  RICHARDS_PACIFIC_NE,
  RICHARDS_PACIFIC_SE,
  RICHARDS_SMITHE,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const RICHARDS_PACIFIC_SE_S = [49.27346, -123.12782];
const NORTH_OF_HELMCKEN = [49.2772, -123.12214];

export const RICHARDS = [
  {
    routeNames: [ROUTES.richards.name],
    description: "south tip",
    type: "quiet",
    positions: [RICHARDS_BEACH, [49.27345, -123.12792], RICHARDS_PACIFIC_SE_S],
  },
  {
    routeNames: [ROUTES.richards.name],
    description: "south of helmcken",
    type: "dedicated",
    positions: [
      RICHARDS_PACIFIC_SE_S,
      RICHARDS_PACIFIC_SE,
      RICHARDS_PACIFIC_NE,
      [49.27481, -123.12578],
      [49.27584, -123.12419],
      RICHARDS_HELMCKEN,
    ],
  },
  {
    routeNames: [ROUTES.richards.name],
    description: "little bit north of helmcken",
    type: "dedicated",
    videos: [VIDEOS.comoxHelmckenWb.id],
    videosStartAtEnd: [VIDEOS.comoxHelmckenWb.id],
    positions: [RICHARDS_HELMCKEN, NORTH_OF_HELMCKEN],
  },
  {
    routeNames: [ROUTES.richards.name],
    description: "north of helmcken",
    type: "dedicated",
    positions: [
      NORTH_OF_HELMCKEN,
      RICHARDS_NELSON,
      RICHARDS_SMITHE,
      [49.28008, -123.11783],
      [49.2812, -123.11612],
      RICHARDS_DUNSMUIR,
      [49.28335, -123.11284],
      [49.28401, -123.11187],
      [49.2846, -123.11096],
    ],
  },
];
