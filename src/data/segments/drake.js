import {
  BURRARD_DRAKE_E,
  BURRARD_DRAKE_W,
  GRANVILLE_DRAKE_W,
  HORNBY_DRAKE,
  ROLSTON_DRAKE_SW,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const HORNBY_DRAKE_E_ALLEY = [49.27704, -123.12935];

export const DRAKE = [
  {
    routeNames: [ROUTES.drake.name],
    description: "crossing burrard",
    type: "dedicated",
    videoIds: [VIDEOS.burnabyEb.id],
    positions: [BURRARD_DRAKE_W, BURRARD_DRAKE_E],
  },
  {
    routeNames: [ROUTES.drake.name],
    description: "burrard to hornby",
    type: "dedicated",
    videoIds: [VIDEOS.burnabyWb.id, VIDEOS.burnabyEb.id],
    videoIdsStartAtEnd: [VIDEOS.burnabyWb.id],
    positions: [BURRARD_DRAKE_E, HORNBY_DRAKE],
  },
  {
    routeNames: [ROUTES.drake.name],
    description: "hornby to alley",
    type: "dedicated",
    videoIds: [VIDEOS.burnabyEb.id],
    videoIdsEndAtEnd: [VIDEOS.burnabyEb.id],
    positions: [HORNBY_DRAKE, HORNBY_DRAKE_E_ALLEY],
  },
  {
    routeNames: [ROUTES.drake.name],
    description: "hornby alley to granville",
    type: "dedicated",
    positions: [
      HORNBY_DRAKE_E_ALLEY,
      [49.27675, -123.12888],
      GRANVILLE_DRAKE_W,
    ],
  },
  {
    routeNames: [ROUTES.drake.name],
    description: "granville to rolston",
    type: "dedicated",
    positions: [GRANVILLE_DRAKE_W, ROLSTON_DRAKE_SW],
  },
];
