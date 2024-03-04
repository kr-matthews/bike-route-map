import {
  BEATTY_PENDER_NE,
  BEATTY_PENDER_NW,
  BEATTY_PENDER_SE,
  BEATTY_PENDER_SW,
  CAMBIE_PENDER_NE,
  CAMBIE_PENDER_SE,
  CARRALL_PENDER_NE,
  CARRALL_PENDER_NW,
  CARRALL_PENDER_SE,
  CARRALL_PENDER_SW,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const TAYLOR_PENDER = [49.28079, -123.10559];

export const PENDER = [
  {
    description: "brief lane at howe",
    type: "painted",
    oneWay: "required",
    positions: [
      [49.28563, -123.1164],
      [49.28535, -123.11598],
    ],
  },
  {
    routeNames: [ROUTES.pender.name],
    description: "eb",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.penderEb.id],
    videoIdsStartAtStart: [VIDEOS.penderEb.id],
    videoIdsEndAtEnd: [VIDEOS.penderEb.id],
    positions: [
      CAMBIE_PENDER_SE,
      [49.28137, -123.10963],
      BEATTY_PENDER_SW,
      BEATTY_PENDER_SE,
      [49.28102, -123.1076],
      [49.28065, -123.10563],
      CARRALL_PENDER_SW,
    ],
  },
  {
    routeNames: [ROUTES.pender.name],
    description: "eb carrall intersection",
    type: "painted",
    oneWay: "required",
    hideArrows: true,
    positions: [CARRALL_PENDER_SW, CARRALL_PENDER_SE],
  },
  {
    routeNames: [ROUTES.pender.name],
    description: "wb no lane",
    type: "shared",
    oneWay: "required",
    positions: [CARRALL_PENDER_NE, CARRALL_PENDER_NW, TAYLOR_PENDER],
  },
  {
    routeNames: [ROUTES.pender.name],
    description: "wb lane",
    type: "painted",
    oneWay: "required",
    positions: [
      TAYLOR_PENDER,
      [49.28115, -123.10756],
      BEATTY_PENDER_NE,
      BEATTY_PENDER_NW,
      [49.28157, -123.10985],
      CAMBIE_PENDER_NE,
    ],
  },
];
