import {
  ALEXANDER_POWELL,
  HAWKS_POWELL,
  MAIN_ALEXANDER,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const EAST_OF_WATER = [49.28355, -123.10351];
const COLUMBIA_ALEXANDER = [49.28377, -123.10215];
const NORTH_OF_POWELL = [49.28347, -123.08704];

export const ALEXANDER = [
  {
    routeNames: [ROUTES.alexander.name],
    description: "west bit",
    type: "dedicated",
    videoIds: [
      VIDEOS.alexanderEb.id,
      VIDEOS.alexanderWb.id,
      VIDEOS.carrallSb.id,
      VIDEOS.waterWb.id,
      VIDEOS.waterEb.id,
    ],
    videoIdsStartAtEnd: [VIDEOS.waterWb.id],
    videoIdsEndAtEnd: [VIDEOS.waterEb.id],
    positions: [ALEXANDER_POWELL, [49.28347, -123.10385], EAST_OF_WATER],
  },
  {
    routeNames: [ROUTES.alexander.name],
    description: "parking lot",
    type: "quiet",
    videoIds: [
      VIDEOS.alexanderEb.id,
      VIDEOS.alexanderWb.id,
      VIDEOS.carrallSb.id,
    ],
    videoIdsStartAtEnd: [VIDEOS.carrallSb.id],
    positions: [EAST_OF_WATER, COLUMBIA_ALEXANDER],
  },
  {
    routeNames: [ROUTES.alexander.name],
    description: "primary",
    type: "quiet",
    videoIds: [VIDEOS.alexanderEb.id, VIDEOS.alexanderWb.id],
    positions: [
      COLUMBIA_ALEXANDER,
      [49.28408, -123.10058],
      [49.28411, -123.1003],
      MAIN_ALEXANDER,
      [49.28407, -123.09787],
      [49.28401, -123.09526],
      [49.28397, -123.09331],
      [49.28395, -123.09137],
      [49.28391, -123.08945],
      [49.28389, -123.0883],
      [49.28356, -123.08711],
      NORTH_OF_POWELL,
    ],
  },
  {
    routeNames: [ROUTES.alexander.name],
    description: "hawks",
    type: "dedicated",
    videoIds: [
      VIDEOS.alexanderWb.id,
      VIDEOS.alexanderEb.id,
      VIDEOS.powellEb.id,
      VIDEOS.powellWb.id,
    ],
    videoIdsStartAtStart: [VIDEOS.powellEb.id],
    videoIdsStartAtEnd: [VIDEOS.alexanderWb.id],
    videoIdsEndAtStart: [VIDEOS.powellWb.id],
    videoIdsEndAtEnd: [VIDEOS.alexanderEb.id],
    positions: [NORTH_OF_POWELL, HAWKS_POWELL],
  },
];
