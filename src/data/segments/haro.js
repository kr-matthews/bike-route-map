import {
  BUTE_HARO,
  CARDERO_HARO,
  CHILCO_HARO,
  NICOLA_HARO,
  THURLOW_HARO,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const HARO_W = [49.29302, -123.14008];
const EAST_OF_NICOLA = [49.28772, -123.13177];
const LAGOON_HARO = [49.2932, -123.14024];

export const HARO = [
  {
    routeNames: [ROUTES.haro.name],
    description: "path to/from lagoon dr",
    type: "dedicated",
    videoIds: [VIDEOS.haroWb.id],
    videoIdsEndAtStart: [VIDEOS.haroWb.id],
    positions: [
      LAGOON_HARO,
      [49.29316, -123.14024],
      [49.29309, -123.14021],
      [49.29304, -123.14016],
      HARO_W,
    ],
  },
  {
    routeNames: [ROUTES.haro.name],
    description: "west of nicola",
    type: "quiet",
    videoIds: [VIDEOS.haroWb.id],
    positions: [
      HARO_W,
      [49.29301, -123.13995],
      CHILCO_HARO,
      [49.29178, -123.13802],
      [49.29078, -123.1365],
      [49.28976, -123.13492],
      CARDERO_HARO,
      NICOLA_HARO,
    ],
  },
  {
    routeNames: [ROUTES.haro.name],
    description: "near nicola",
    type: "quiet",
    videoIds: [VIDEOS.haroWb.id, VIDEOS.nicolaNb.id],
    videoIdsStartAtEnd: [VIDEOS.nicolaNb.id],
    positions: [NICOLA_HARO, EAST_OF_NICOLA],
  },
  {
    routeNames: [ROUTES.haro.name],
    description: "east of nicola",
    type: "quiet",
    videoIds: [VIDEOS.haroWb.id],
    videoIdsStartAtEnd: [VIDEOS.haroWb.id],
    positions: [
      EAST_OF_NICOLA,
      [49.28722, -123.131],
      [49.28632, -123.12962],
      BUTE_HARO,
      [49.28495, -123.12753],
      [49.28395, -123.12595],
      THURLOW_HARO,
    ],
  },
];
