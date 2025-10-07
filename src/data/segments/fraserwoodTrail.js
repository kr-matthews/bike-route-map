import {
  ALEX_FRASER_NW_FRASERWOOD,
  BOUNDARY_DYKE,
  FRASERWOOD_WESTMINSTER_CONNECTION_S,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

export const FRASERWOOD_TRAIL = [
  {
    routeNames: [ROUTES.fraserwoodTrail.name],
    description: "west of alex fraser",
    type: "mixed",
    positions: [
      FRASERWOOD_WESTMINSTER_CONNECTION_S,
      [49.16709, -122.97536],
      [49.16769, -122.97373],
      [49.16781, -122.97336],
      [49.16788, -122.973],
      [49.16819, -122.97118],
      [49.16866, -122.96876],
      [49.1687, -122.96841],
      [49.16879, -122.96796],
      [49.16889, -122.968],
      [49.16912, -122.96734],
      [49.1692, -122.967],
      [49.16931, -122.96676],
      [49.16937, -122.96664],
      [49.16952, -122.96627],
      [49.16971, -122.96591],
      [49.17006, -122.96534],
      [49.17063, -122.96457],
      [49.171, -122.96416],
      [49.17184, -122.96354],
      [49.17187, -122.96349],
      [49.17237, -122.96314],
      [49.17321, -122.96249],
      [49.17342, -122.96233],
      [49.17377, -122.96206],
      [49.17404, -122.96182],
      [49.1743, -122.96151],
      ALEX_FRASER_NW_FRASERWOOD,
    ],
  },
  {
    routeNames: [ROUTES.fraserwoodTrail.name],
    description: "east of alex fraser",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.alexFraserSb.id],
    positions: [
      ALEX_FRASER_NW_FRASERWOOD,
      [49.17543, -122.95929],
      [49.17618, -122.95748],
      [49.17623, -122.95741],
      BOUNDARY_DYKE,
    ],
  },
];
