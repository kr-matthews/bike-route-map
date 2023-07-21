import { HAWKS_POWELL, MCLEAN_POWELL } from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const POWELL = [
  {
    routes: [ROUTES.powell.name],
    description: "primary",
    videos: [VIDEOS.powellEb],
    positions: [
      HAWKS_POWELL,
      [49.28298, -123.08546],
      [49.28282, -123.0844],
      [49.28269, -123.08384],
      [49.28258, -123.0826],
      [49.28261, -123.08191],
      [49.28298, -123.07924],
      [49.28303, -123.07894],
      [49.28312, -123.07701],
      MCLEAN_POWELL,
    ],
  },
];
