import {
  AIRPORT_TEMPLETON_STATION_SW,
  MCDONALD_BEACH_PATH_GRAUER_N,
  MCDONALD_BEACH_PATH_GRAUER_S,
  TEMPLETON_GRAUER_NE,
  TEMPLETON_GRAUER_NW,
  TEMPLETON_GRAUER_SE,
  TEMPLETON_GRAUER_SW,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const GRAUER = [
  {
    routeNames: [ROUTES.grauer.name],
    description: "eb crossing templeton",
    type: "shoulder",
    oneWay: "required",
    positions: [TEMPLETON_GRAUER_SW, TEMPLETON_GRAUER_SE],
  },
  {
    routeNames: [ROUTES.grauer.name],
    description: "eb",
    type: "shoulder",
    oneWay: "required",
    videoIds: [VIDEOS.grauerEb.id],
    videoIdsEndAtEnd: [VIDEOS.grauerEb.id],
    videoIdsStartAtStart: [VIDEOS.grauerEb.id],
    positions: [
      TEMPLETON_GRAUER_SE,
      [49.19929, -123.14885],
      [49.1993, -123.1487],
      [49.1993, -123.14798],
      [49.19929, -123.14724],
      [49.19933, -123.14688],
      [49.19933, -123.14504],
      [49.19933, -123.14279],
      [49.19932, -123.14252],
      [49.1993, -123.14228],
      [49.19927, -123.14207],
      [49.19921, -123.14179],
      [49.19891, -123.1407],
      [49.1988, -123.14026],
      [49.1987, -123.13981],
      [49.1986, -123.13931],
      MCDONALD_BEACH_PATH_GRAUER_S,
      [49.19841, -123.13849],
      [49.19829, -123.13814],
      [49.19808, -123.13758],
      [49.19798, -123.13736],
      [49.19788, -123.13717],
      [49.19773, -123.13695],
      [49.19756, -123.13675],
      [49.19742, -123.1366],
      [49.19732, -123.13655],
      [49.19722, -123.1365],
      [49.19709, -123.1365],
      [49.19698, -123.13651],
      [49.19689, -123.13655],
      [49.1962, -123.13702],
      AIRPORT_TEMPLETON_STATION_SW,
    ],
  },
  {
    routeNames: [ROUTES.grauer.name],
    description: "wb 1",
    type: "shoulder",
    oneWay: "required",
    videoIds: [VIDEOS.mcdonaldBeachTrailWb.id],
    videoIdsStartAtStart: [VIDEOS.mcdonaldBeachTrailWb.id],
    positions: [
      AIRPORT_TEMPLETON_STATION_SW,
      [49.19616, -123.13693],
      [49.19642, -123.13673],
      [49.19669, -123.13656],
      [49.1969, -123.13642],
      [49.19701, -123.13637],
      [49.1971, -123.13636],
      [49.19729, -123.13639],
      [49.19738, -123.13643],
      [49.19753, -123.13653],
      [49.19771, -123.13674],
      [49.19782, -123.13691],
      [49.19796, -123.13713],
      [49.19809, -123.13739],
      [49.1982, -123.13765],
      [49.19833, -123.13797],
      [49.1985, -123.13853],
      MCDONALD_BEACH_PATH_GRAUER_N,
    ],
  },
  {
    routeNames: [ROUTES.grauer.name],
    description: "wb 2",
    type: "shoulder",
    oneWay: "required",
    positions: [
      MCDONALD_BEACH_PATH_GRAUER_N,
      [49.19873, -123.13958],
      [49.19889, -123.14025],
      [49.19904, -123.14085],
      [49.19922, -123.14147],
      [49.1993, -123.14173],
      [49.19934, -123.14192],
      [49.19938, -123.14216],
      [49.19939, -123.14234],
      [49.19942, -123.1427],
      [49.19942, -123.14679],
      [49.19941, -123.14722],
      [49.1994, -123.14767],
      [49.19942, -123.14886],
      TEMPLETON_GRAUER_NE,
      TEMPLETON_GRAUER_NW,
    ],
  },
];
