import {
  BEATTY_DUNSMUIR_NE,
  BEATTY_DUNSMUIR_NW,
  BEATTY_NELSON_SE,
  BEATTY_NELSON_SW,
  BEATTY_PENDER_NE,
  BEATTY_PENDER_NW,
  BEATTY_PENDER_SE,
  BEATTY_PENDER_SW,
  BEATTY_SMITHE_N,
  BEATTY_SMITHE_S,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const BEATTY = [
  {
    routes: [ROUTES.beatty.name],
    description: "nb",
    oneWay: "required",
    elevation: 0.5,
    positions: [
      BEATTY_NELSON_SE,
      [49.2755, -123.11708],
      [49.2756, -123.11689],
      [49.27646, -123.11559],
      BEATTY_SMITHE_S,
      [49.27754, -123.11397],
      [49.27868, -123.11225],
      BEATTY_DUNSMUIR_NE,
      BEATTY_PENDER_SE,
      BEATTY_PENDER_NE,
    ],
  },
  {
    routes: [ROUTES.beatty.name],
    description: "sb",
    oneWay: "required",
    videos: [VIDEOS.beattySb],
    positions: [
      BEATTY_PENDER_NW,
      BEATTY_PENDER_SW,
      BEATTY_DUNSMUIR_NW,
      [49.27878, -123.11231],
      [49.27763, -123.11404],
      BEATTY_SMITHE_N,
      [49.27564, -123.11704],
      BEATTY_NELSON_SW,
    ],
  },
];
