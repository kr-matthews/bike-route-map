import {
  ALEXANDER_POWELL,
  CARRALL_EXPO,
  CARRALL_KEEFER,
  CARRALL_PACIFIC,
  CARRALL_PENDER,
  CARRALL_SEAWALL,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const CARRALL = [
  {
    routes: [ROUTES.carrall.name],
    description: "primary",
    videos: [VIDEOS.carrallNb],
    positions: [
      CARRALL_SEAWALL,
      [49.27596, -123.10653],
      [49.2766, -123.10646],
      CARRALL_PACIFIC,
      [49.27763, -123.10638],
      [49.27785, -123.10632],
      CARRALL_EXPO,
      [49.27828, -123.1059],
      [49.27863, -123.10504],
      [49.27884, -123.10473],
      [49.27907, -123.10454],
      CARRALL_KEEFER,
      [49.27938, -123.10444],
      CARRALL_PENDER,
      [49.28147, -123.10436],
      [49.28248, -123.1043],
      [49.28297, -123.10429],
      [49.28323, -123.10422],
      ALEXANDER_POWELL,
    ],
  },
];
