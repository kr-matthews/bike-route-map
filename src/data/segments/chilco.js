import {
  CHILCO_ALBERNI_E,
  CHILCO_ALBERNI_W,
  CHILCO_BEACH,
  CHILCO_COMOX,
  CHILCO_GEORGIA_S,
  CHILCO_HARO,
  CHILCO_SEAWALL,
  STANLEY_PARK_LOOP_ALBERNI,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const CHILCO = [
  {
    description: "connection to stanley park loop",
    positions: [STANLEY_PARK_LOOP_ALBERNI, CHILCO_ALBERNI_W],
  },
  {
    routeNames: [ROUTES.chilco.name],
    description: "closed",
    isClosed: true,
    videos: [VIDEOS.chilcoSb.id],
    positions: [CHILCO_SEAWALL, CHILCO_BEACH],
  },
  {
    routeNames: [ROUTES.chilco.name],
    description: "primary",
    videos: [VIDEOS.chilcoSb.id],
    videosEndAtStart: [VIDEOS.chilcoSb.id],
    positions: [
      CHILCO_BEACH,
      [49.28988, -123.14369],
      CHILCO_COMOX,
      [49.29128, -123.14156],
      [49.29198, -123.14052],
      CHILCO_HARO,
      [49.29338, -123.13842],
      CHILCO_ALBERNI_W,
      CHILCO_ALBERNI_E,
    ],
  },
  {
    routeNames: [ROUTES.chilco.name],
    description: "connection from georgia",
    oneWay: "required",
    videos: [VIDEOS.chilcoSb.id],
    positions: [CHILCO_GEORGIA_S, [49.29436, -123.13677], CHILCO_ALBERNI_E],
  },
];
