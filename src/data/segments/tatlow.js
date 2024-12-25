import {
  TATLOW_15TH,
  TATLOW_MARINE_N,
  TATLOW_MARINE_S,
  TATLOW_SPIRIT,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const TATLOW_MAPLEWOOD = [49.3181, -123.1175];
const TATLOW_PARK_N = [49.32342, -123.11757];

export const TATLOW = [
  {
    routeNames: [ROUTES.tatlow.name],
    description: "south tip",
    type: "mixed",
    videoIds: [VIDEOS.tatlowNb.id],
    positions: [TATLOW_SPIRIT, TATLOW_MAPLEWOOD],
  },
  {
    routeNames: [ROUTES.tatlow.name],
    description: "maplewood to 15th",
    type: "quiet",
    videoIds: [VIDEOS.tatlowNb.id],
    positions: [
      TATLOW_MAPLEWOOD,
      [49.31817, -123.11752],
      [49.31885, -123.11751],
      [49.32144, -123.11743],
      TATLOW_15TH,
    ],
  },
  {
    routeNames: [ROUTES.tatlow.name],
    description: "park nb",
    type: "quiet",
    oneWay: "recommended",
    videoIds: [VIDEOS.tatlowNb.id],
    positions: [
      TATLOW_15TH,
      [49.32226, -123.11757],
      [49.32334, -123.11755],
      TATLOW_PARK_N,
    ],
  },
  {
    routeNames: [ROUTES.tatlow.name],
    description: "park sb",
    type: "mixed",
    oneWay: "required",
    videoIds: [VIDEOS.fifteenthEb.id],
    positions: [
      TATLOW_PARK_N,
      [49.32334, -123.11764],
      [49.32325, -123.11772],
      [49.32321, -123.11773],
      [49.32235, -123.11775],
      [49.3223, -123.11773],
      [49.32223, -123.11766],
      TATLOW_15TH,
    ],
  },
  {
    routeNames: [ROUTES.tatlow.name],
    description: "park to marine",
    type: "quiet",
    videoIds: [VIDEOS.tatlowNb.id, VIDEOS.fifteenthEb.id],
    videoIdsEndAtEnd: [VIDEOS.tatlowNb.id],
    positions: [TATLOW_PARK_N, TATLOW_MARINE_S],
  },
  {
    routeNames: [ROUTES.tatlow.name],
    description: "crossing marine",
    type: "quiet",
    videoIds: [VIDEOS.fifteenthEb.id],
    videoIdsStartAtEnd: [VIDEOS.fifteenthEb.id],
    positions: [TATLOW_MARINE_S, TATLOW_MARINE_N],
  },
];
