import {
  KASLO_PANDORA,
  LAKEWOOD_PANDORA,
  MCLEAN_FRANKLIN,
  MCLEAN_POWELL,
  NANAIMO_PANDORA,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const PANDORA = [
  // !!! move to mosaic
  {
    routes: [ROUTES.mosaic.name, ROUTES.pandora.name],
    description: "pandora",
    videos: [VIDEOS.pandoraEb],
    positions: [MCLEAN_POWELL, [49.28321, -123.07408], MCLEAN_FRANKLIN],
  },
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
