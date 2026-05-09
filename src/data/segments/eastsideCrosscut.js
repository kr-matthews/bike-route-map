import {
  LILLOOET_ADANAC,
  NOOTKA_CVG,
  WINDERMERE_PENDER,
} from "../intersections";
import { ROUTES } from "../routes";

const NOOTKA_BROADWAY_N = [49.26203, -123.04017];
const N_OF_LILLOOET_BROADWAY = [49.26213, -123.0391];

export const EASTSIDE_CROSSCUT = [
  {
    routeNames: [ROUTES.eastsideCrosscut.name],
    description: "cvg to broadway",
    type: "quiet",
    positions: [NOOTKA_CVG, NOOTKA_BROADWAY_N],
  },
  {
    routeNames: [ROUTES.eastsideCrosscut.name],
    description: "along broadway",
    type: "mixed",
    positions: [
      NOOTKA_BROADWAY_N,
      [49.26203, -123.0391],
      N_OF_LILLOOET_BROADWAY,
    ],
  },
  {
    routeNames: [ROUTES.eastsideCrosscut.name],
    description: "broadway to windermere",
    type: "quiet",
    positions: [
      N_OF_LILLOOET_BROADWAY,
      [49.26219, -123.03905],
      [49.27326, -123.03891],
      LILLOOET_ADANAC,
      [49.28021, -123.03884],
      WINDERMERE_PENDER,
    ],
  },
];
