import {
  BEATTY_SMITHE_N,
  BEATTY_SMITHE_S,
  BURRARD_SMITHE,
  RICHARDS_SMITHE,
  SMITHE_EXPO_N,
  SMITHE_SMITHE_PATH,
  THURLOW_HARO,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const SMITHE = [
  {
    routes: [ROUTES.smithe.name],
    description: "bi-directional",
    videos: [VIDEOS.cambieBridgeSmithNb],
    positions: [
      THURLOW_HARO,
      [49.28391, -123.12584],
      [49.28382, -123.12571],
      [49.28371, -123.12557],
      [49.2836, -123.12544],
      [49.28347, -123.12534],
      [49.28337, -123.12527],
      [49.28315, -123.12516],
      [49.28287, -123.12504],
      [49.28271, -123.12493],
      [49.28258, -123.12482],
      [49.28246, -123.12467],
      BURRARD_SMITHE,
      [49.28225, -123.12435],
      [49.28159, -123.12332],
      [49.28097, -123.12239],
      [49.28033, -123.12135],
      [49.2797, -123.12038],
      RICHARDS_SMITHE,
    ],
  },
  {
    routes: [ROUTES.smithe.name],
    directions: ["westbound"],
    description: "uni-directional",
    videos: [VIDEOS.cambieBridgeSmithNb],
    positions: [
      BEATTY_SMITHE_N,
      [49.27718, -123.11652],
      [49.27751, -123.117],
      [49.27777, -123.11741],
      [49.27844, -123.11846],
      RICHARDS_SMITHE,
    ],
  },
  {
    routes: [ROUTES.smithe.name],
    description: "beatty to expo",
    videos: [VIDEOS.cambieBridgeSmithNb],
    positions: [
      BEATTY_SMITHE_N,
      BEATTY_SMITHE_S,
      [49.2764, -123.11524],
      [49.27629, -123.11508],
      [49.27613, -123.11486],
      [49.276, -123.11476],
      SMITHE_EXPO_N,
      SMITHE_SMITHE_PATH,
    ],
  },
];
