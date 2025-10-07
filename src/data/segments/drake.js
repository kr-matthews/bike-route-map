import {
  BURRARD_DRAKE_E,
  BURRARD_DRAKE_W,
  GRANVILLE_DRAKE_W,
  HORNBY_DRAKE,
  HOWE_DRAKE_W,
  ROLSTON_DRAKE_SW,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const HORNBY_DRAKE_E_ALLEY = [49.27704, -123.12935];

export const DRAKE = [
  {
    routeNames: [ROUTES.drake.name],
    description: "crossing burrard",
    type: "dedicated",
    videoIds: [ROUTE_VIDEOS.drakeEb.id, ROUTE_VIDEOS.burnabyEb.id],
    positions: [BURRARD_DRAKE_W, BURRARD_DRAKE_E],
  },
  {
    routeNames: [ROUTES.drake.name],
    description: "burrard to hornby",
    type: "dedicated",
    videoIds: [
      ROUTE_VIDEOS.drakeEb.id,
      ROUTE_VIDEOS.burnabyWb.id,
      ROUTE_VIDEOS.burnabyEb.id,
    ],
    videoIdsStartAtEnd: [ROUTE_VIDEOS.burnabyWb.id],
    positions: [BURRARD_DRAKE_E, HORNBY_DRAKE],
  },
  {
    routeNames: [ROUTES.drake.name],
    description: "hornby to alley",
    type: "dedicated",
    videoIds: [ROUTE_VIDEOS.drakeEb.id, ROUTE_VIDEOS.burnabyEb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.burnabyEb.id],
    positions: [HORNBY_DRAKE, HORNBY_DRAKE_E_ALLEY],
  },
  {
    routeNames: [ROUTES.drake.name],
    description: "hornby alley to howe",
    type: "dedicated",
    videoIds: [
      ROUTE_VIDEOS.drakeEb.id,
      ROUTE_VIDEOS.granvilleConnectorHoweSb.id,
    ],
    videoIdsStartAtStart: [ROUTE_VIDEOS.granvilleConnectorHoweSb.id],
    positions: [HORNBY_DRAKE_E_ALLEY, HOWE_DRAKE_W],
  },
  {
    routeNames: [ROUTES.drake.name],
    description: "howe to granville",
    type: "dedicated",
    videoIds: [ROUTE_VIDEOS.drakeEb.id, ROUTE_VIDEOS.granvilleConnectorSb.id],
    videoIdsStartAtStart: [ROUTE_VIDEOS.granvilleConnectorSb.id],
    positions: [HOWE_DRAKE_W, GRANVILLE_DRAKE_W],
  },
  {
    routeNames: [ROUTES.drake.name],
    description: "granville to rolston",
    type: "dedicated",
    videoIds: [ROUTE_VIDEOS.drakeEb.id],
    positions: [GRANVILLE_DRAKE_W, ROLSTON_DRAKE_SW],
  },
];
