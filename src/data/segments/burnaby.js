import {
  BURRARD_BURNABY_E,
  BURRARD_BURNABY_W,
  BUTE_BURNABY,
  CARDERO_BURNABY,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

export const BURNABY = [
  {
    routeNames: [ROUTES.burnaby.name],
    description: "primary",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.burnabyEb.id, ROUTE_VIDEOS.burnabyWb.id],
    videoIdsStartAtStart: [ROUTE_VIDEOS.burnabyEb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.burnabyWb.id],
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
    videoIds: [ROUTE_VIDEOS.burnabyWb.id, ROUTE_VIDEOS.burrardNb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.burrardNb.id],
    positions: [BURRARD_BURNABY_W, BURRARD_BURNABY_E],
  },
];
