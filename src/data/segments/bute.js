import {
  BUTE_BURNABY,
  BUTE_COMOX,
  BUTE_HARO,
  BUTE_NELSON,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const BUTE_DAVIE_S = [49.28179, -123.13337];
const BUTE_PANTAGES_N = [49.28144, -123.13388];
const BUTE_STOVOLD_N = [49.28496, -123.12858];
const BUTE_ROSEMARY_BROWN = [49.28567, -123.12749];
const BUTE_ROBSON = [49.286, -123.12698];

export const BUTE = [
  {
    routeNames: [ROUTES.bute.name],
    description: "burnaby to lane",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.buteNb.id, ROUTE_VIDEOS.buteSb.id],
    videoIdsStartAtStart: [ROUTE_VIDEOS.buteNb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.buteSb.id],
    positions: [BUTE_BURNABY, BUTE_PANTAGES_N],
  },
  {
    routeNames: [ROUTES.bute.name],
    description: "plaza at denman",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.buteNb.id, ROUTE_VIDEOS.buteSb.id],
    positions: [BUTE_PANTAGES_N, BUTE_DAVIE_S],
  },
  {
    routeNames: [ROUTES.bute.name],
    description: "denman to stovold",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.buteNb.id, ROUTE_VIDEOS.buteSb.id],
    positions: [
      BUTE_DAVIE_S,
      [49.2825, -123.13232],
      BUTE_COMOX,
      [49.28391, -123.13018],
      BUTE_NELSON,
      [49.28461, -123.12911],
      BUTE_STOVOLD_N,
    ],
  },
  {
    routeNames: [ROUTES.bute.name],
    description: "plaza at haro",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.buteSb.id, ROUTE_VIDEOS.buteNb.id],
    positions: [BUTE_STOVOLD_N, BUTE_HARO],
  },
  {
    routeNames: [ROUTES.bute.name],
    description: "haro to lane",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.buteSb.id, ROUTE_VIDEOS.buteNb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.buteNb.id],
    positions: [BUTE_HARO, BUTE_ROSEMARY_BROWN],
  },
  {
    routeNames: [ROUTES.bute.name],
    description: "plaza at robson",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.buteSb.id],
    videoIdsStartAtEnd: [ROUTE_VIDEOS.buteSb.id],
    positions: [BUTE_ROSEMARY_BROWN, BUTE_ROBSON],
  },
];
