import { MAIN_ALEXANDER, SEAWALL_WATERFRONT } from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const MAIN_ELEVATED_N = [49.28522, -123.10017];
const MAIN_ELEVATED_S = [49.28425, -123.09945];
const MAIN_WATERFRONT = [49.28513, -123.10043];
const UNDERGROUND_E = [49.28736, -123.11275];
const UNDERGROUND_W = [49.28957, -123.11852];
const WATERFRONT_W = [49.28892, -123.1181];

export const WATERFRONT = [
  {
    routeNames: [ROUTES.waterfront.name],
    description: "pre-underground",
    type: "mixed",
    elevation: -0.5,
    videoIds: [VIDEOS.waterfrontEb.id],
    videoIdsStartAtStart: [VIDEOS.waterfrontEb.id],
    positions: [SEAWALL_WATERFRONT, [49.28964, -123.11859], UNDERGROUND_W],
  },
  {
    routeNames: [ROUTES.waterfront.name],
    description: "underground path",
    type: "mixed",
    elevation: -1,
    videoIds: [VIDEOS.waterfrontEb.id],
    positions: [UNDERGROUND_W, [49.28913, -123.11808], WATERFRONT_W],
  },
  {
    routeNames: [ROUTES.waterfront.name],
    description: "waterfront underground",
    type: "shared",
    elevation: -1,
    videoIds: [VIDEOS.waterfrontEb.id],
    positions: [
      WATERFRONT_W,
      [49.28891, -123.11801],
      [49.28832, -123.11581],
      [49.28785, -123.1142],
      UNDERGROUND_E,
    ],
  },
  {
    routeNames: [ROUTES.waterfront.name],
    description: "waterfront surface",
    type: "shared",
    elevation: -0.5,
    videoIds: [VIDEOS.waterfrontEb.id],
    positions: [
      UNDERGROUND_E,
      [49.28709, -123.11211],
      [49.28675, -123.11129],
      [49.28643, -123.11026],
      [49.28615, -123.10928],
      [49.28605, -123.10887],
      [49.28554, -123.10707],
      [49.28506, -123.10544],
      [49.2846, -123.10381],
      [49.28453, -123.10349],
      [49.2845, -123.10315],
      [49.28446, -123.1013],
      [49.28444, -123.10105],
      [49.28452, -123.10065],
      [49.28479, -123.10068],
      [49.28499, -123.1006],
      MAIN_WATERFRONT,
    ],
  },
  {
    routeNames: [ROUTES.waterfront.name],
    description: "pre-loop",
    type: "shared",
    elevation: 0.5,
    videoIds: [VIDEOS.waterfrontEb.id],
    positions: [MAIN_WATERFRONT, MAIN_ELEVATED_N],
  },
  {
    routeNames: [ROUTES.waterfront.name],
    description: "loop",
    type: "shared",
    elevation: 1,
    videoIds: [VIDEOS.waterfrontEb.id],
    positions: [
      MAIN_ELEVATED_N,
      [49.28524, -123.09988],
      [49.28519, -123.0996],
      [49.2851, -123.09939],
      [49.28496, -123.09923],
      [49.2848, -123.09916],
      [49.2846, -123.09918],
      [49.28444, -123.0993],
      MAIN_ELEVATED_S,
    ],
  },
  {
    routeNames: [ROUTES.waterfront.name],
    description: "post-loop",
    type: "shared",
    elevation: 0.5,
    videoIds: [VIDEOS.waterfrontEb.id],
    videoIdsEndAtEnd: [VIDEOS.waterfrontEb.id],
    positions: [MAIN_ELEVATED_S, MAIN_ALEXANDER],
  },
];
