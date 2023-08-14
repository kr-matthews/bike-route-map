import {
  KASLO_PANDORA,
  LAKEWOOD_PANDORA,
  MCLEAN_FRANKLIN,
  NANAIMO_PANDORA,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const PANDORA = [
  {
    routes: [ROUTES.pandora.name],
    description: "primary",
    videos: [VIDEOS.pandoraEb],
    positions: [
      MCLEAN_FRANKLIN,
      [49.28221, -123.07262],
      [49.28311, -123.07258],
      [49.2831, -123.07035],
      [49.28307, -123.06821],
      [49.28303, -123.06551],
      [49.28303, -123.06362],
      LAKEWOOD_PANDORA,
      [49.283, -123.05973],
      [49.28301, -123.05779],
      NANAIMO_PANDORA,
      [49.28299, -123.05457],
      [49.28298, -123.05194],
      [49.28298, -123.04931],
      KASLO_PANDORA,
      [49.28298, -123.04419],
    ],
  },
];
