import {
  BURRARD_DRAKE_E,
  BURRARD_DRAKE_W,
  GRANVILLE_DRAKE_W,
  HOMER_DRAKE_S,
  HORNBY_DRAKE,
  HOWE_DRAKE_W,
  PACIFIC_DRAKE_E,
  PACIFIC_DRAKE_N,
  PACIFIC_DRAKE_S,
  PACIFIC_DRAKE_W,
  RICHARDS_DRAKE_S,
  ROLSTON_DRAKE_SW,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const HORNBY_DRAKE_E_ALLEY = [49.27704, -123.12935];
const HAMILTON_DRAKE_S = [49.27379, -123.12432];

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
  {
    routeNames: [ROUTES.drake.name],
    description: "rolston to hamilton",
    type: "dedicated",
    positions: [
      ROLSTON_DRAKE_SW,
      RICHARDS_DRAKE_S,
      HOMER_DRAKE_S,
      HAMILTON_DRAKE_S,
    ],
  },
  {
    routeNames: [ROUTES.drake.name],
    description: "nb: s of pacific to hamilton",
    type: "shared",
    oneWay: "recommended",
    positions: [
      [49.27329, -123.12344],
      PACIFIC_DRAKE_E,
      PACIFIC_DRAKE_N,
      [49.27383, -123.12422],
      HAMILTON_DRAKE_S,
    ],
  },
  {
    routeNames: [ROUTES.drake.name],
    description: "sb: hamilton to pacific",
    type: "dedicated",
    oneWay: "required",
    positions: [HAMILTON_DRAKE_S, PACIFIC_DRAKE_W],
  },
  {
    routeNames: [ROUTES.drake.name],
    description: "sb: s of pacific",
    type: "painted",
    oneWay: "required",
    positions: [PACIFIC_DRAKE_W, PACIFIC_DRAKE_S, [49.27327, -123.12353]],
  },
];
