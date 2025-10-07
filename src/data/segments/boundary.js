import {
  BOUNDARY_EWEN,
  BOUNDARY_WESTMINSTER_EN,
  BOUNDARY_WESTMINSTER_ES,
  BOUNDARY_WESTMINSTER_NE,
  DOCKSIDE_SOUTH_DYKE,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const BOUNDARY_SALTER = [49.17853, -122.95682];

export const BOUNDARY = [
  {
    description: "dockside",
    type: "quiet",
    undesignated: true,
    videoIds: [ROUTE_VIDEOS.boundaryTrailSb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.boundaryTrailSb.id],
    positions: [
      DOCKSIDE_SOUTH_DYKE,
      [49.17745, -122.95519],
      [49.17771, -122.95547],
      [49.17838, -122.95603],
      [49.17874, -122.95636],
      BOUNDARY_SALTER,
    ],
  },
  {
    routeNames: [ROUTES.boundary.name],
    description: "all",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.boundaryTrailSb.id],
    videoIdsStartAtEnd: [ROUTE_VIDEOS.boundaryTrailSb.id],
    positions: [
      BOUNDARY_SALTER,
      [49.17861, -122.95702],
      [49.18031, -122.957],
      [49.18162, -122.95701],
      [49.18173, -122.95695],
      BOUNDARY_EWEN,
      [49.18212, -122.95699],
      [49.18253, -122.957],
      [49.18275, -122.95708],
      [49.18291, -122.95707],
      [49.18302, -122.95704],
      [49.18317, -122.95709],
      [49.18346, -122.95709],
      [49.18354, -122.95708],
      BOUNDARY_WESTMINSTER_ES,
      BOUNDARY_WESTMINSTER_EN,
      [49.18391, -122.95709],
      BOUNDARY_WESTMINSTER_NE,
      [49.18403, -122.95704],
      [49.18406, -122.95709],
      [49.18411, -122.95712],
      [49.18418, -122.95715],
      [49.18494, -122.95716],
      [49.18535, -122.95715],
    ],
  },
];
