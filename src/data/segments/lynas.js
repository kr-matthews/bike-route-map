import {
  LYNAS_DOVER_N,
  LYNAS_DOVER_S,
  LYNAS_GRANVILLE_N,
  LYNAS_GRANVILLE_S,
  LYNAS_RIVER,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const LYNAS_OPAL = [49.16619, -123.16461];
const LYNAS_TIFFANY = [49.16723, -123.16459];

export const LYNAS = [
  {
    routeNames: [ROUTES.lynas.name],
    description: "granville to path",
    type: "quiet",
    videoIds: [VIDEOS.lynasNb.id],
    videoIdsStartAtStart: [VIDEOS.lynasNb.id],
    positions: [
      LYNAS_GRANVILLE_S,
      LYNAS_GRANVILLE_N,
      [49.16465, -123.16457],
      [49.16608, -123.16456],
      [49.16615, -123.16458],
      LYNAS_OPAL,
    ],
  },
  {
    routeNames: [ROUTES.lynas.name],
    description: "path",
    type: "combined",
    videoIds: [VIDEOS.lynasNb.id],
    positions: [
      LYNAS_OPAL,
      [49.16626, -123.16458],
      [49.16634, -123.16457],
      [49.16656, -123.16457],
      [49.16662, -123.16452],
      [49.16695, -123.16451],
      [49.16705, -123.16459],
      LYNAS_TIFFANY,
    ],
  },
  {
    routeNames: [ROUTES.lynas.name],
    description: "path to dover",
    type: "quiet",
    videoIds: [VIDEOS.lynasNb.id],
    positions: [
      LYNAS_TIFFANY,
      [49.16736, -123.16454],
      [49.16874, -123.16452],
      [49.17012, -123.16453],
      LYNAS_DOVER_S,
    ],
  },
  {
    routeNames: [ROUTES.lynas.name],
    description: "dover to dover",
    type: "quiet",
    videoIds: [VIDEOS.lynasNb.id],
    positions: [LYNAS_DOVER_S, LYNAS_DOVER_N],
  },
  {
    routeNames: [ROUTES.lynas.name],
    description: "dover to river rd",
    type: "quiet",
    videoIds: [VIDEOS.lynasNb.id],
    videoIdsEndAtEnd: [VIDEOS.lynasNb.id],
    positions: [LYNAS_DOVER_N, LYNAS_RIVER],
  },
];
