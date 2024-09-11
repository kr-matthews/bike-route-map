import {
  BURRARD_DUNSMUIR,
  CARDERO_GEORGIA_N,
  HORNBY_DUNSMUIR,
  NICOLA_PENDER,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const JERVIS_PENDER = [49.28908, -123.12549];

export const DUNSMUIR_MELVILLE_PENDER = [
  {
    routeNames: [ROUTES.dunsmuirMelvillePender.name],
    description: "dunsmuir/melville",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.lionsGateBridgeNb.id],
    videoIdsStartAtStart: [VIDEOS.lionsGateBridgeNb.id],
    positions: [
      HORNBY_DUNSMUIR,
      BURRARD_DUNSMUIR,
      [49.28561, -123.11944],
      [49.28577, -123.11971],
      [49.28591, -123.11999],
      [49.28599, -123.12036],
      [49.28609, -123.12114],
      [49.28614, -123.12137],
      [49.28627, -123.1217],
      [49.28648, -123.12201],
      [49.28789, -123.12418],
      [49.28855, -123.12525],
      [49.28883, -123.12567],
      [49.28895, -123.12566],
      JERVIS_PENDER,
    ],
  },
  {
    routeNames: [ROUTES.dunsmuirMelvillePender.name],
    description: "pender",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.lionsGateBridgeNb.id],
    positions: [
      JERVIS_PENDER,
      [49.28962, -123.12737],
      NICOLA_PENDER,
      [49.29034, -123.12987],
      [49.29047, -123.13022],
      CARDERO_GEORGIA_N,
    ],
  },
];
