import { CAMBIE_DUNSMUIR } from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const CAMBIE_GASTOWN = [
  {
    routes: [ROUTES.cambieGastown.name],
    description: "primary",
    oneWay: "required",
    videos: [VIDEOS.cambieGastownNb],
    positions: [
      CAMBIE_DUNSMUIR,
      [49.28143, -123.11002],
      [49.2816, -123.10989],
      [49.28251, -123.10949],
      [49.28347, -123.10908],
      [49.2842, -123.10878],
      [49.28427, -123.10877],
    ],
  },
];
