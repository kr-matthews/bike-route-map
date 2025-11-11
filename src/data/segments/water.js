import {
  ALEXANDER_POWELL,
  CAMBIE_WATER_N,
  CAMBIE_WATER_S,
  RICHARDS_CORDOVA_SE,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const BI_DIRECTIONAL_E = [49.28458, -123.11029];
const WB_SHARED_END = [49.28461, -123.11022];

export const WATER = [
  {
    routeNames: [ROUTES.water.name],
    description: "bi-directional",
    type: "dedicated",
    videoIds: [ROUTE_VIDEOS.waterEb.id],
    videoIdsStartAtStart: [ROUTE_VIDEOS.waterEb.id],
    positions: [
      RICHARDS_CORDOVA_SE,
      [49.28465, -123.11078],
      [49.28465, -123.11071],
      BI_DIRECTIONAL_E,
    ],
  },
  {
    routeNames: [ROUTES.water.name],
    description: "eb",
    type: "painted",
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.waterEb.id],
    positions: [
      BI_DIRECTIONAL_E,
      CAMBIE_WATER_S,
      [49.28383, -123.10636],
      [49.28349, -123.10441],
      [49.28336, -123.10415],
      ALEXANDER_POWELL,
    ],
  },
  {
    routeNames: [ROUTES.water.name],
    description: "wb",
    type: "shared",
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.waterWb.id],
    positions: [
      ALEXANDER_POWELL,
      [49.28347, -123.10424],
      [49.28353, -123.10439],
      [49.28389, -123.10637],
      CAMBIE_WATER_N,
      WB_SHARED_END,
    ],
  },
  {
    routeNames: [ROUTES.water.name],
    description: "wb crossing over",
    type: "shared",
    oneWay: "required",
    hideArrows: true,
    positions: [WB_SHARED_END, BI_DIRECTIONAL_E],
  },
  {
    routeNames: [ROUTES.water.name],
    description: "wb old",
    type: "shared",
    oneWay: "required",
    undesignated: true,
    videoIds: [ROUTE_VIDEOS.waterWb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.waterWb.id],
    positions: [
      WB_SHARED_END,
      [49.28469, -123.11068],
      [49.28469, -123.11085],
      RICHARDS_CORDOVA_SE,
    ],
  },
];
