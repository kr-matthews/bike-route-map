import { MAIN_1ST_NE } from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const MAIN_INDUSTRIAL_E = [49.27045, -123.10051];
const PATH_W = [49.27178, -123.09803];

export const TERMINAL_PATH = [
  {
    description: "connection from cvg: main",
    type: "shared",
    oneWay: "required",
    undesignated: true,
    videoIds: [VIDEOS.terminalEb.id],
    videoIdsStartAtStart: [VIDEOS.terminalEb.id],
    positions: [
      MAIN_1ST_NE,
      [49.27016, -123.1004],
      [49.2702, -123.10052],
      MAIN_INDUSTRIAL_E,
    ],
  },
  {
    description: "connection from cvg: the rest",
    type: "quiet",
    undesignated: true,
    videoIds: [VIDEOS.terminalEb.id],
    positions: [
      MAIN_INDUSTRIAL_E,
      [49.2705, -123.10045],
      [49.27049, -123.10021],
      [49.27046, -123.10004],
      [49.27031, -123.09953],
      [49.26995, -123.09832],
      [49.26991, -123.09816],
      [49.27005, -123.09809],
      [49.27055, -123.09809],
      [49.27108, -123.09807],
      [49.27178, -123.09807],
      PATH_W,
    ],
  },
  {
    routeNames: [ROUTES.terminalPath.name],
    description: "primary",
    type: "mixed",
    videoIds: [VIDEOS.terminalEb.id, VIDEOS.terminalWb.id],
    videoIdsStartAtEnd: [VIDEOS.terminalWb.id],
    videoIdsEndAtStart: [VIDEOS.terminalWb.id],
    videoIdsEndAtEnd: [VIDEOS.terminalEb.id],
    positions: [
      PATH_W,
      [49.27178, -123.09793],
      [49.27142, -123.09574],
      [49.27134, -123.09532],
      [49.27122, -123.09486],
      [49.27092, -123.09361],
      [49.27032, -123.09119],
      [49.26997, -123.0898],
      [49.26988, -123.08925],
      [49.26987, -123.08907],
      [49.2698, -123.08855],
      [49.26987, -123.08845],
      [49.26988, -123.08839],
      [49.26975, -123.08794],
      [49.26968, -123.08761],
      [49.26961, -123.08697],
      [49.26947, -123.08635],
      [49.26911, -123.08425],
    ],
  },
];
