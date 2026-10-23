import {
  ARDEN_BROADWAY_NEE,
  KENSINGTON_BROADWAY_S_W,
  LAKE_CITY_BROADWAY_N,
  SPERLING_BROADWAY_E,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const KENSINGTON_BROADWAY = [49.2618, -122.96821];
const BAINBRIDGE_BROADWAY_NW = [49.26148, -122.95605];

export const BROADWAY_BURNABY = [
  {
    description: "kensington & broadway sw corner",
    type: "mixed",
    undesignated: true,
    positions: [
      KENSINGTON_BROADWAY_S_W,
      [49.26177, -122.96839],
      [49.26175, -122.96833],
      KENSINGTON_BROADWAY,
    ],
  },
  {
    description: "broadway gap, kensington to sperling",
    type: "shared",
    undesignated: true,
    positions: [
      KENSINGTON_BROADWAY,
      [49.26178, -122.96781],
      [49.2618, -122.96718],
      [49.26181, -122.96656],
      [49.26178, -122.96617],
      [49.2617, -122.96553],
      [49.26161, -122.96483],
      SPERLING_BROADWAY_E,
    ],
  },
  {
    description: "broadway gap, sperling to bainbridge",
    type: "shared",
    undesignated: true,
    videoIds: [ROUTE_VIDEOS.broadwayBurnabyEb.id],
    videoIdsStartAtStart: [ROUTE_VIDEOS.broadwayBurnabyEb.id],
    positions: [
      SPERLING_BROADWAY_E,
      [49.26143, -122.96289],
      [49.26143, -122.9627],
      [49.262, -122.95909],
      [49.26203, -122.95876],
      [49.26201, -122.9585],
      [49.26193, -122.95817],
      [49.26155, -122.95699],
      [49.26139, -122.95609],
      BAINBRIDGE_BROADWAY_NW,
    ],
  },
  {
    routeNames: [ROUTES.broadwayBurnaby.name],
    description: "mup",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.broadwayBurnabyEb.id],
    positions: [
      BAINBRIDGE_BROADWAY_NW,
      [49.26147, -122.95599],
      [49.26133, -122.95523],
      [49.26114, -122.95407],
      [49.26116, -122.95334],
      [49.26119, -122.95315],
      [49.26125, -122.95146],
      [49.26131, -122.94991],
      [49.26132, -122.94927],
      [49.26134, -122.94818],
      [49.26138, -122.94588],
      [49.26138, -122.94537],
      [49.26127, -122.94467],
      [49.26102, -122.94355],
      [49.26096, -122.9432],
      [49.26094, -122.94293],
      [49.26097, -122.94228],
      [49.261, -122.94213],
      [49.26101, -122.94191],
      [49.26097, -122.94165],
      [49.26099, -122.93965],
      LAKE_CITY_BROADWAY_N,
    ],
  },
  {
    routeNames: [ROUTES.broadwayBurnaby.name],
    description: "e of lake city",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.broadwayBurnabyEb.id, ROUTE_VIDEOS.lakeCityNb.id],
    videoIdsEndAtEnd: [
      ROUTE_VIDEOS.broadwayBurnabyEb.id,
      ROUTE_VIDEOS.lakeCityNb.id,
    ],
    positions: [
      LAKE_CITY_BROADWAY_N,
      [49.26102, -122.93668],
      ARDEN_BROADWAY_NEE,
    ],
  },
];
