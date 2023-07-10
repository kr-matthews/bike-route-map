import {
  BUTE_HARO,
  CARDERO_HARO,
  CHILCO_HARO,
  THURLOW_HARO,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const HARO = [
  {
    routes: [ROUTES.haro.name],
    description: "primary",
    videos: [VIDEOS.haroWb],
    positions: [
      [49.2932, -123.14024],
      [49.29316, -123.14024],
      [49.29309, -123.14021],
      [49.29304, -123.14016],
      [49.29302, -123.14008],
      [49.29301, -123.13995],
      CHILCO_HARO,
      [49.29178, -123.13802],
      [49.29078, -123.1365],
      [49.28976, -123.13492],
      CARDERO_HARO,
      [49.28798, -123.13217],
      [49.28722, -123.131],
      [49.28632, -123.12962],
      BUTE_HARO,
      [49.28495, -123.12753],
      [49.28395, -123.12595],
      THURLOW_HARO,
    ],
  },
];
