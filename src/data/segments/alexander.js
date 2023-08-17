import {
  ALEXANDER_POWELL,
  HAWKS_POWELL,
  MAIN_ALEXANDER,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const MAIN_ELEVATED_N = [49.28522, -123.10017];
const MAIN_ELEVATED_S = [49.28425, -123.09945];
const MAIN_WATERFRONT = [49.28513, -123.10043];
const UNDERGROUND_E = [49.28736, -123.11275];
const UNDERGROUND_W = [49.28957, -123.11852];

export const ALEXANDER = [
  {
    routes: [ROUTES.alexander.name],
    description: "primary",
    videos: [VIDEOS.alexanderEb],
    positions: [
      ALEXANDER_POWELL,
      [49.28347, -123.10385],
      [49.28377, -123.10215],
      [49.28408, -123.10058],
      [49.28411, -123.1003],
      MAIN_ALEXANDER,
      [49.28407, -123.09787],
      [49.28401, -123.09526],
      [49.28397, -123.09331],
      [49.28395, -123.09137],
      [49.28391, -123.08945],
      [49.28389, -123.0883],
      [49.28356, -123.08711],
      [49.28347, -123.08705],
      HAWKS_POWELL,
    ],
  },
  // TODO move to seaside
  {
    description: "waterfront pre-underground",
    type: "unofficial",
    elevation: -0.5,
    positions: [[49.28981, -123.11882], UNDERGROUND_W],
  },
  {
    description: "waterfront underground",
    type: "unofficial",
    elevation: -1,
    positions: [
      UNDERGROUND_W,
      [49.28913, -123.11808],
      [49.28892, -123.1181],
      [49.28891, -123.11801],
      [49.28832, -123.11581],
      [49.28785, -123.1142],
      UNDERGROUND_E,
    ],
  },
  {
    description: "waterfront",
    type: "unofficial",
    elevation: -0.5,
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
    description: "pre-loop",
    type: "unofficial",
    elevation: 0.5,
    positions: [MAIN_WATERFRONT, MAIN_ELEVATED_N],
  },
  {
    description: "loop",
    type: "unofficial",
    elevation: 1,
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
    description: "post-loop",
    type: "unofficial",
    elevation: 0.5,
    positions: [MAIN_ELEVATED_S, MAIN_ALEXANDER],
  },
];
