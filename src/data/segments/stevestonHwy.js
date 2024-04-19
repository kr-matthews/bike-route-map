import { SHELL_STEVESTON_SE } from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const STEVESTON_HWY = [
  {
    routeNames: [ROUTES.stevestonHwy.name],
    description: "primary",
    type: "mixed",
    videoIds: [VIDEOS.stevestonEb.id],
    videoIdsStartAtStart: [VIDEOS.stevestonEb.id],
    videoIdsEndAtEnd: [VIDEOS.stevestonEb.id],
    positions: [
      [49.13334, -123.11417],
      [49.13336, -123.11082],
      [49.13335, -123.10681],
      [49.13334, -123.10432],
      [49.13331, -123.1041],
      [49.13331, -123.10348],
      SHELL_STEVESTON_SE,
    ],
  },
];
