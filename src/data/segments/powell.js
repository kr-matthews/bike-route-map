import { HAWKS_POWELL, MCLEAN_POWELL } from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const POWELL = [
  {
    routes: [ROUTES.powell.name],
    description: "pre-overpass",
    elevatedAdj: true,
    videos: [VIDEOS.powellEb],
    positions: [HAWKS_POWELL, [49.28298, -123.08546], [49.28294, -123.08513]],
  },
  {
    routes: [ROUTES.powell.name],
    description: "overpass",
    elevated: true,
    videos: [VIDEOS.powellEb],
    positions: [
      [49.28294, -123.08513],
      [49.28282, -123.0844],
      [49.28273, -123.08384],
      [49.28262, -123.0826],
      [49.28264, -123.08191],
      [49.28273, -123.08131],
    ],
  },
  {
    routes: [ROUTES.powell.name],
    description: "post-overpass",
    elevatedAdj: true,
    videos: [VIDEOS.powellEb],
    positions: [
      [49.28273, -123.08131],
      [49.28301, -123.07924],
      [49.28304, -123.07894],
      [49.28315, -123.07701],
      MCLEAN_POWELL,
    ],
  },
];
