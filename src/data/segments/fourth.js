import {
  BLANCA_4TH_E,
  BLANCA_4TH_W,
  CHANCELLOR_4TH,
  DRUMMOND_4TH,
  HIGHBURY_4TH_N,
  HIGHBURY_4TH_S,
  MARINE_4TH_N,
  MARINE_4TH_S,
  WALLACE_4TH_N,
  WALLACE_4TH_S,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const CHANCELLOR_4TH_N = [49.26906, -123.22552];
const CHANCELLOR_4TH_S = [49.26896, -123.22563];

const SPLIT_WEST_OF_MARINE = [49.26843, -123.20086];

export const FOURTH = [
  {
    routeNames: [ROUTES.fourth.name],
    description: "connection between chancellor and 4th",
    videos: [VIDEOS.fourthEb],
    positions: [CHANCELLOR_4TH, CHANCELLOR_4TH_S],
  },
  {
    routeNames: [ROUTES.fourth.name],
    description: "chancellor blvd eastbound",
    type: "uncomfortable",
    videos: [VIDEOS.fourthEb],
    oneWay: "required",
    positions: [
      CHANCELLOR_4TH_S,
      [49.26874, -123.22495],
      [49.2686, -123.2242],
      [49.26856, -123.22351],
      [49.26859, -123.22291],
      [49.26892, -123.21962],
      DRUMMOND_4TH,
    ],
  },
  {
    routeNames: [ROUTES.fourth.name],
    description: "chancellor blvd westbound",
    type: "uncomfortable",
    oneWay: "required",
    positions: [
      DRUMMOND_4TH,
      [49.26902, -123.21963],
      [49.26867, -123.2229],
      [49.26865, -123.22354],
      [49.2687, -123.2242],
      [49.26885, -123.22491],
      CHANCELLOR_4TH_N,
      CHANCELLOR_4TH_S,
    ],
  },
  {
    routeNames: [ROUTES.fourth.name],
    description: "west portion",
    videos: [VIDEOS.fourthEb],
    positions: [
      DRUMMOND_4TH,
      [49.26912, -123.2178],
      BLANCA_4TH_W,
      BLANCA_4TH_E,
      [49.26907, -123.21195],
      [49.26902, -123.20889],
      [49.26897, -123.20627],
      [49.2689, -123.20586],
      [49.26826, -123.20319],
      [49.26821, -123.20224],
      [49.26829, -123.20135],
      SPLIT_WEST_OF_MARINE,
    ],
  },
  {
    routeNames: [ROUTES.fourth.name],
    description: "brief eb to marine",
    type: "uncomfortable",
    oneWay: "required",
    videos: [VIDEOS.fourthEb],
    positions: [SPLIT_WEST_OF_MARINE, MARINE_4TH_S],
  },
  {
    routeNames: [ROUTES.fourth.name, ROUTES.seasideBypass.name],
    description: "eb to wallace",
    videos: [VIDEOS.fourthEb],
    oneWay: "required",
    positions: [
      MARINE_4TH_S,
      [49.26873, -123.19938],
      [49.26872, -123.19806],
      [49.26862, -123.19345],
      WALLACE_4TH_S,
    ],
  },
  {
    routeNames: [ROUTES.fourth.name],
    description: "wallace to highbury",
    videos: [VIDEOS.fourthEb],
    oneWay: "required",
    positions: [WALLACE_4TH_S, [49.26863, -123.18871], HIGHBURY_4TH_S],
  },
  {
    routeNames: [ROUTES.fourth.name],
    description: "highbury to wallace",
    type: "uncomfortable",
    oneWay: "required",
    positions: [HIGHBURY_4TH_N, [49.26871, -123.18874], WALLACE_4TH_N],
  },
  {
    routeNames: [ROUTES.fourth.name, ROUTES.seasideBypass.name],
    description: "wallace to marine",
    type: "uncomfortable",
    oneWay: "required",
    positions: [
      WALLACE_4TH_N,
      [49.26883, -123.19343],
      [49.26889, -123.19803],
      [49.26889, -123.19942],
      MARINE_4TH_N,
    ],
  },
  {
    routeNames: [ROUTES.fourth.name],
    description: "brief wb beyond marin",
    type: "uncomfortable",
    oneWay: "required",
    positions: [MARINE_4TH_N, SPLIT_WEST_OF_MARINE],
  },
];
