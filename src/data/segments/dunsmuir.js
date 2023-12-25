import {
  BEATTY_DUNSMUIR_NE,
  BEATTY_DUNSMUIR_NW,
  CAMBIE_DUNSMUIR,
  CITADEL_PARADE_DUNSMUIR,
  HOMER_DUNSMUIR,
  HORNBY_DUNSMUIR,
  MAIN_DUNSMUIR,
  RICHARDS_DUNSMUIR,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const WEST_OF_CAMBIE = [49.28084, -123.11197];

export const DUNSMUIR = [
  {
    routeNames: [ROUTES.dunsmuir.name],
    description: "downtown to just before cambie",
    type: "dedicated",
    elevation: 0.5,
    positions: [
      HORNBY_DUNSMUIR,
      [49.28431, -123.1174],
      [49.28367, -123.11638],
      [49.28302, -123.11537],
      RICHARDS_DUNSMUIR,
      HOMER_DUNSMUIR,
      [49.28114, -123.11245],
      WEST_OF_CAMBIE,
    ],
  },
  {
    routeNames: [ROUTES.dunsmuir.name],
    description: "just before cambie",
    type: "dedicated",
    elevation: 0.5,
    videos: [VIDEOS.cambieGastownNb.id],
    videosStartAtStart: [VIDEOS.cambieGastownNb.id],
    positions: [WEST_OF_CAMBIE, CAMBIE_DUNSMUIR],
  },
  {
    routeNames: [ROUTES.dunsmuir.name],
    description: "cambie to out of downtown",
    type: "dedicated",
    elevation: 0.5,
    positions: [
      CAMBIE_DUNSMUIR,
      BEATTY_DUNSMUIR_NW,
      BEATTY_DUNSMUIR_NE,
      [49.27968, -123.11017],
      CITADEL_PARADE_DUNSMUIR,
    ],
  },
  {
    routeNames: [ROUTES.dunsmuir.name],
    description: "viaduct",
    type: "dedicated",
    elevation: 1,
    positions: [
      CITADEL_PARADE_DUNSMUIR,
      [49.27893, -123.10909],
      [49.27859, -123.10854],
      [49.27831, -123.10798],
      [49.27808, -123.10749],
      [49.27792, -123.10702],
      [49.27773, -123.10625],
      [49.2776, -123.10553],
      [49.27753, -123.10472],
      [49.2775, -123.10395],
      [49.27749, -123.10334],
      [49.27753, -123.10201],
      [49.27757, -123.10093],
      MAIN_DUNSMUIR,
    ],
  },
];
