import { HAWKS_POWELL, MCLEAN_POWELL } from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const OVERPASS_START = [49.28294, -123.08513];
const OVERPASS_END = [49.28273, -123.08131];

export const POWELL = [
  {
    routeNames: [ROUTES.powell.name],
    description: "pre-overpass",
    type: "dedicated",
    elevation: 0.5,
    videoIds: [VIDEOS.powellEb.id],
    positions: [HAWKS_POWELL, [49.28298, -123.08546], OVERPASS_START],
  },
  {
    routeNames: [ROUTES.powell.name],
    description: "overpass",
    type: "dedicated",
    elevation: 1,
    videoIds: [VIDEOS.powellEb.id],
    positions: [
      OVERPASS_START,
      [49.28282, -123.0844],
      [49.28273, -123.08384],
      [49.28262, -123.0826],
      [49.28264, -123.08191],
      OVERPASS_END,
    ],
  },
  {
    routeNames: [ROUTES.powell.name],
    description: "post-overpass",
    type: "comfortable",
    elevation: 0.5,
    videoIds: [VIDEOS.powellEb.id],
    videoIdsEndAtEnd: [VIDEOS.powellEb.id],
    positions: [
      OVERPASS_END,
      [49.28301, -123.07924],
      [49.28304, -123.07894],
      [49.28315, -123.07701],
      MCLEAN_POWELL,
    ],
  },
];
