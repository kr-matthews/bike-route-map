import {
  BURRARD_BURNABY_E,
  BURRARD_BURNABY_W,
  BUTE_BURNABY,
  CARDERO_BURNABY,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const BURNABY = [
  {
    routeNames: [ROUTES.burnaby.name],
    description: "primary",
    type: "quiet",
    videoIds: [VIDEOS.burnabyEb.id, VIDEOS.burnabyWb.id],
    videoIdsStartAtStart: [VIDEOS.burnabyEb.id],
    videoIdsEndAtStart: [VIDEOS.burnabyWb.id],
    positions: [
      CARDERO_BURNABY,
      [49.28375, -123.13854],
      [49.28297, -123.13734],
      [49.2821, -123.136],
      BUTE_BURNABY,
      [49.27967, -123.13225],
      BURRARD_BURNABY_W,
    ],
  },
  {
    routeNames: [ROUTES.burnaby.name],
    description: "crossing burrard",
    type: "quiet",
    videoIds: [VIDEOS.burnabyWb.id, VIDEOS.burrardNb.id],
    videoIdsEndAtStart: [VIDEOS.burrardNb.id],
    positions: [BURRARD_BURNABY_W, BURRARD_BURNABY_E],
  },
];
