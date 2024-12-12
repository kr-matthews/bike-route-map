import {
  FORBES_3RD_N,
  FORBES_3RD_SE,
  FORBES_3RD_SW,
  THIRD_2ND_N,
  THIRD_2ND_NW,
  THIRD_2ND_S,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const FORBES_3RD_NE = [49.31724, -123.08562];

export const THIRD_MARINE = [
  // eb
  {
    routeNames: [ROUTES.thirdMarine.name],
    description: "eb crossing 2nd",
    type: "mixed",
    oneWay: "recommended",
    positions: [THIRD_2ND_NW, THIRD_2ND_S],
  },
  {
    routeNames: [ROUTES.thirdMarine.name],
    description: "eb",
    type: "mixed",
    oneWay: "recommended",
    videoIds: [VIDEOS.first2ndEb.id],
    videoIdsEndAtEnd: [VIDEOS.first2ndEb.id],
    positions: [
      THIRD_2ND_S,
      [49.31887, -123.08971],
      [49.31841, -123.08867],
      [49.31832, -123.08846],
      [49.31791, -123.08751],
      [49.31782, -123.0873],
      [49.31731, -123.08612],
      [49.31726, -123.08602],
      FORBES_3RD_SW,
    ],
  },
  {
    routeNames: [ROUTES.thirdMarine.name],
    description: "eb crossing forbes",
    type: "mixed",
    oneWay: "recommended",
    positions: [FORBES_3RD_SW, FORBES_3RD_SE],
  },

  // wb
  {
    routeNames: [ROUTES.thirdMarine.name],
    description: "wb forbes crossing 3rd",
    type: "mixed",
    oneWay: "recommended",
    videoIds: [VIDEOS.forbesEsplanadeWb.id],
    videoIdsEndAtEnd: [VIDEOS.forbesEsplanadeWb.id],
    positions: [
      FORBES_3RD_SE,
      [49.31709, -123.08563],
      [49.31722, -123.08565],
      FORBES_3RD_NE,
    ],
  },
  {
    routeNames: [ROUTES.thirdMarine.name],
    description: "wb: half-crossing forbes",
    type: "painted",
    oneWay: "required",
    hideArrows: true,
    positions: [FORBES_3RD_NE, FORBES_3RD_N],
  },
  {
    routeNames: [ROUTES.thirdMarine.name],
    description: "wb: forbes to 2nd",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.first2ndWb.id],
    positions: [
      FORBES_3RD_N,
      [49.31745, -123.08601],
      [49.31804, -123.08737],
      [49.31865, -123.08878],
      [49.31895, -123.08946],
      [49.31909, -123.08974],
      THIRD_2ND_N,
    ],
  },
  {
    routeNames: [ROUTES.thirdMarine.name],
    description: "wb: 2nd to keith/marine",
    type: "painted",
    oneWay: "required",
    positions: [
      THIRD_2ND_N,
      [49.31936, -123.09022],
      [49.3197, -123.09075],
      [49.31993, -123.09112],
    ],
  },
];
