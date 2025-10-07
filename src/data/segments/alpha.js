import { ALPHA_FRANCES_E } from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

export const ALPHA = [
  {
    routeNames: [ROUTES.alpha.name],
    description: "primary",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.alphaSb.id],
    videoIdsStartAtEnd: [ROUTE_VIDEOS.alphaSb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.alphaSb.id],
    positions: [
      [49.27567, -123.00021],
      [49.27687, -123.00018],
      [49.2769, -123.00019],
      [49.27745, -123.00019],
      [49.27748, -123.0002],
      [49.27786, -123.00021],
      [49.27791, -123.00018],
      [49.27848, -123.00018],
      [49.27854, -123.00021],
      [49.27894, -123.00021],
      [49.27898, -123.00019],
      [49.27912, -123.00019],
      ALPHA_FRANCES_E,
    ],
  },
];
