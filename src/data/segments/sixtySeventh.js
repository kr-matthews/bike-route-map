import {
  ADERA_68TH,
  ARBUTUS_GREENWAY_68TH,
  CORNISH_68TH,
  HEATHER_67TH,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const GRANVILLE_68TH_E = [49.21052, -123.14037];
const GRANVILLE_67TH_E = [49.21089, -123.14036];

export const SIXTY_SEVENTH = [
  {
    routeNames: [ROUTES.sixtySeventh.name],
    description: "greenway to adera",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.sixtySeventhPlusWb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.sixtySeventhPlusWb.id],
    positions: [
      ARBUTUS_GREENWAY_68TH,
      [49.21064, -123.14522],
      [49.21059, -123.14511],
      ADERA_68TH,
    ],
  },
  {
    routeNames: [ROUTES.sixtySeventh.name, ROUTES.cypress.name],
    description: "cypress overlap",
    type: "quiet",
    videoIds: [
      ROUTE_VIDEOS.sixtySeventhPlusWb.id,
      ROUTE_VIDEOS.cypressNb.id,
      ROUTE_VIDEOS.cypressSb.id,
    ],
    positions: [ADERA_68TH, CORNISH_68TH],
  },
  {
    routeNames: [ROUTES.sixtySeventh.name],
    description: "cornish to granville",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.sixtySeventhPlusWb.id],
    positions: [CORNISH_68TH, GRANVILLE_68TH_E],
  },
  {
    routeNames: [ROUTES.sixtySeventh.name],
    description: "granville sidewalk",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.sixtySeventhPlusWb.id],
    positions: [GRANVILLE_68TH_E, GRANVILLE_67TH_E],
  },
  {
    routeNames: [ROUTES.sixtySeventh.name],
    description: "east of granville",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.sixtySeventhPlusWb.id],
    positions: [
      GRANVILLE_67TH_E,
      [49.21085, -123.13777],
      [49.21082, -123.13569],
      [49.2108, -123.13432],
      [49.21077, -123.13291],
      [49.21073, -123.13019],
      [49.21069, -123.12741],
      HEATHER_67TH,
    ],
  },
];
