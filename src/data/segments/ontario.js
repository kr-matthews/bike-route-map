import {
  ONTARIO_10TH,
  ONTARIO_14TH,
  ONTARIO_1ST_N,
  ONTARIO_1ST_N_N,
  ONTARIO_1ST_S,
  ONTARIO_26TH_S,
  ONTARIO_30TH,
  ONTARIO_33RD,
  ONTARIO_37TH,
  ONTARIO_42ND,
  ONTARIO_45TH,
  ONTARIO_58TH,
  ONTARIO_59TH,
  ONTARIO_5TH,
  ONTARIO_63RD,
  ONTARIO_KENT_N,
  ONTARIO_PATH_ATHLETES,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const ONTARIO = [
  {
    routes: [ROUTES.ontario.name],
    description: "kent to 59th",
    videos: [VIDEOS.ontarioNb],
    positions: [
      ONTARIO_KENT_N,
      [49.20939, -123.1067],
      [49.20946, -123.10677],
      [49.21219, -123.10666],
      [49.21249, -123.10655],
      ONTARIO_63RD,
      [49.21507, -123.10637],
      ONTARIO_59TH,
    ],
  },
  {
    routes: [ROUTES.ontario.name, ROUTES.masumiMitsui.name],
    description: "masumi mitsui",
    videos: [VIDEOS.ontarioNb],
    positions: [ONTARIO_59TH, ONTARIO_58TH],
  },
  {
    routes: [ROUTES.ontario.name],
    description: "58th to false creek",
    videos: [VIDEOS.ontarioNb],
    positions: [
      ONTARIO_58TH,
      [49.21854, -123.10621],
      [49.22024, -123.10614],
      [49.22204, -123.10609],
      [49.22383, -123.10602],
      [49.22574, -123.10597],
      [49.22766, -123.1059],
      ONTARIO_45TH,
      [49.23097, -123.10574],
      ONTARIO_42ND,
      [49.23368, -123.10564],
      [49.23551, -123.10556],
      ONTARIO_37TH,
      ONTARIO_33RD,
      ONTARIO_30TH,
      [49.24453, -123.10519],
      [49.24605, -123.10512],
      ONTARIO_26TH_S,
      [49.24883, -123.105],
      [49.24991, -123.10495],
      [49.25186, -123.10487],
      [49.25377, -123.10477],
      [49.25422, -123.10476],
      [49.2543, -123.10483],
      [49.25441, -123.10491],
      [49.25455, -123.10501],
      [49.25466, -123.10505],
      [49.25644, -123.10494],
      [49.25679, -123.10516],
      ONTARIO_14TH,
      [49.26027, -123.10503],
      ONTARIO_10TH,
      [49.263, -123.1049],
      [49.26466, -123.10482],
      ONTARIO_5TH,
      [49.2683, -123.10468],
      ONTARIO_1ST_S,
      ONTARIO_1ST_N,
      ONTARIO_1ST_N_N,
      [49.27151, -123.10456],
      ONTARIO_PATH_ATHLETES,
    ],
  },
];
