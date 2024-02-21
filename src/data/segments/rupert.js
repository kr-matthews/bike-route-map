import {
  RUPERT_22ND_E,
  RUPERT_22ND_W,
  RUPERT_29TH_E,
  RUPERT_29TH_W,
  RUPERT_CVG_E,
  RUPERT_CVG_W,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const RUPERT = [
  {
    routeNames: [ROUTES.rupert.name],
    description: "nb",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.rupertNb.id],
    videoIdsStartAtStart: [VIDEOS.rupertNb.id],
    positions: [
      RUPERT_29TH_E,
      [49.24475, -123.03383],
      [49.24494, -123.03376],
      [49.24509, -123.03373],
      [49.24536, -123.03372],
      [49.24709, -123.03369],
      [49.24878, -123.0337],
      [49.24968, -123.03369],
      RUPERT_22ND_E,
      [49.25232, -123.0337],
      [49.25477, -123.03368],
      [49.25641, -123.03367],
      [49.25814, -123.03363],
      [49.25937, -123.03363],
      [49.26056, -123.03362],
      [49.2606, -123.03354],
      RUPERT_CVG_E,
    ],
  },
  {
    routeNames: [ROUTES.rupert.name],
    description: "sb",
    type: "painted",
    oneWay: "required",
    positions: [
      RUPERT_CVG_W,
      [49.2604, -123.03392],
      [49.25971, -123.03393],
      [49.25932, -123.03393],
      [49.2588, -123.03393],
      [49.25806, -123.03393],
      [49.2577, -123.03393],
      [49.25726, -123.03392],
      [49.25556, -123.03393],
      [49.25401, -123.03394],
      [49.25233, -123.03394],
      RUPERT_22ND_W,
      [49.24878, -123.03394],
      [49.2471, -123.03395],
      [49.24535, -123.03398],
      [49.245, -123.03398],
      [49.24488, -123.034],
      [49.24475, -123.03404],
      [49.24466, -123.03408],
      RUPERT_29TH_W,
    ],
  },
];
