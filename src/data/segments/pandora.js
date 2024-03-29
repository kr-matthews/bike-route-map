import {
  KASLO_PANDORA,
  LAKEWOOD_PANDORA,
  MCLEAN_FRANKLIN,
  NANAIMO_PANDORA_E,
  NANAIMO_PANDORA_W,
  RENFREW_PANDORA,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const GARDEN_PANDORA = [49.28301, -123.05779];

export const PANDORA = [
  {
    routeNames: [ROUTES.pandora.name],
    description: "west of garden",
    type: "quiet",
    videoIds: [VIDEOS.pandoraWb.id, VIDEOS.pandoraEb.id],
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
      GARDEN_PANDORA,
    ],
  },
  {
    routeNames: [ROUTES.pandora.name],
    description: "garden to nanaimo",
    type: "quiet",
    videoIds: [VIDEOS.pandoraWb.id, VIDEOS.pandoraEb.id, VIDEOS.nanaimoSb.id],
    videoIdsStartAtStart: [VIDEOS.nanaimoSb.id],
    positions: [GARDEN_PANDORA, NANAIMO_PANDORA_W],
  },
  {
    routeNames: [ROUTES.pandora.name],
    description: "east of nanaimo",
    type: "quiet",
    videoIds: [VIDEOS.pandoraWb.id, VIDEOS.pandoraEb.id],
    videoIdsStartAtEnd: [VIDEOS.pandoraWb.id],
    videoIdsEndAtEnd: [VIDEOS.pandoraEb.id],
    positions: [
      NANAIMO_PANDORA_W,
      NANAIMO_PANDORA_E,
      [49.28299, -123.05457],
      [49.28298, -123.05194],
      [49.28298, -123.04931],
      KASLO_PANDORA,
      [49.28298, -123.04433],
      RENFREW_PANDORA,
    ],
  },
];
