import { SHELL_STEVESTON_SE } from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const NO_4_STEVESTON_SE = [49.13334, -123.11417];

export const STEVESTON_HWY = [
  {
    routeNames: [ROUTES.stevestonHwy.name],
    description: "no. 3 to no. 4",
    type: "mixed",
    positions: [
      [49.13342, -123.13647],
      [49.13342, -123.13553],
      [49.13342, -123.13506],
      [49.13343, -123.13444],
      [49.13344, -123.13337],
      [49.13344, -123.13249],
      [49.13343, -123.13094],
      [49.13343, -123.12947],
      [49.13343, -123.12754],
      [49.13342, -123.1245],
      [49.13341, -123.11991],
      [49.13339, -123.11627],
      [49.13335, -123.11579],
      [49.13335, -123.1145],
      [49.13334, -123.11445],
      NO_4_STEVESTON_SE,
    ],
  },
  {
    routeNames: [ROUTES.stevestonHwy.name],
    description: "no. 4 to shell",
    type: "mixed",
    videoIds: [VIDEOS.stevestonEb.id],
    videoIdsStartAtStart: [VIDEOS.stevestonEb.id],
    videoIdsEndAtEnd: [VIDEOS.stevestonEb.id],
    positions: [
      NO_4_STEVESTON_SE,
      [49.13336, -123.11082],
      [49.13335, -123.10681],
      [49.13334, -123.10432],
      [49.13331, -123.1041],
      [49.13331, -123.10348],
      SHELL_STEVESTON_SE,
    ],
  },
];
