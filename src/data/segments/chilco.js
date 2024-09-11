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

const CHILCO_HENSHAW_S = [49.29092, -123.14212];

export const CHILCO = [
  {
    description: "connection to stanley park loop",
    type: "mixed",
    videoIds: [VIDEOS.alberniEb.id, VIDEOS.alberniWb.id],
    videoIdsEndAtStart: [VIDEOS.alberniWb.id],
    positions: [STANLEY_PARK_LOOP_ALBERNI, CHILCO_ALBERNI_W],
  },
  {
    routeNames: [ROUTES.chilco.name],
    description: "beach to seawall",
    type: "dedicated",
    isClosed: true,
    positions: [CHILCO_SEAWALL, CHILCO_BEACH],
  },
  {
    routeNames: [ROUTES.chilco.name],
    description: "beach to comox",
    type: "quiet",
    videoIds: [VIDEOS.chilcoSb.id],
    videoIdsEndAtStart: [VIDEOS.chilcoSb.id],
    positions: [CHILCO_BEACH, [49.28988, -123.14369], CHILCO_COMOX],
  },
  {
    routeNames: [ROUTES.chilco.name],
    description: "lord roberts plaza",
    type: "mixed",
    videoIds: [VIDEOS.chilcoSb.id],
    positions: [CHILCO_COMOX, CHILCO_HENSHAW_S],
  },
  {
    routeNames: [ROUTES.chilco.name],
    description: "henshaw to alberni",
    type: "quiet",
    videoIds: [VIDEOS.chilcoSb.id],
    positions: [
      CHILCO_HENSHAW_S,
      [49.29128, -123.14156],
      [49.29198, -123.14052],
      CHILCO_HARO,
      [49.29338, -123.13842],
      CHILCO_ALBERNI_W,
    ],
  },
  {
    routeNames: [ROUTES.chilco.name],
    description: "chilco/alberni bend",
    type: "quiet",
    videoIds: [VIDEOS.chilcoSb.id, VIDEOS.alberniEb.id, VIDEOS.alberniWb.id],
    positions: [CHILCO_ALBERNI_W, CHILCO_ALBERNI_E],
  },
  {
    routeNames: [ROUTES.chilco.name],
    description: "connection from georgia",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.chilcoSb.id],
    positions: [CHILCO_GEORGIA_S, [49.29436, -123.13677], CHILCO_ALBERNI_E],
  },
];
