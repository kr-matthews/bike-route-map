import { RENFREW_22ND, RUPERT_22ND, SLOCAN_22ND } from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const TWENTY_SECOND = [
  {
    routes: [ROUTES.twentySecond.name],
    description: "with lane",
    videos: [VIDEOS.twentySecondEb],
    positions: [
      [49.25064, -123.05649],
      [49.25066, -123.05223],
      SLOCAN_22ND,
      RENFREW_22ND,
    ],
  },
  {
    routes: [ROUTES.twentySecond.name],
    description: "without lane",
    type: "uncomfortable",
    videos: [VIDEOS.twentySecondEb],
    positions: [
      RENFREW_22ND,
      [49.2506, -123.03901],
      RUPERT_22ND,
      [49.25063, -123.0285],
      [49.25064, -123.02338],
    ],
  },
];
