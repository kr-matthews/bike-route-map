import {} from "../intersections";
import { ROUTES } from "../routes";

const MOREY_SEA_ISLAND_CONNECTOR_E = [49.1922, -123.13425];
const MOREY_SEA_ISLAND_CONNECTOR_W = [49.19271, -123.13878];

export const SEA_ISLAND_CONNECTOR = [
  {
    routeNames: [ROUTES.seaIslandConnector.name],
    description: "no. 3 to bridge",
    type: "painted",
    oneWay: "required",
    elevation: 0.5,
    positions: [
      [49.19206, -123.12976],
      [49.19204, -123.13084],
      [49.19205, -123.13202],
      [49.19211, -123.1331],
      MOREY_SEA_ISLAND_CONNECTOR_E,
    ],
  },
  {
    routeNames: [ROUTES.seaIslandConnector.name],
    description: "bridge",
    type: "shoulder",
    oneWay: "required",
    elevation: 1,
    positions: [MOREY_SEA_ISLAND_CONNECTOR_E, MOREY_SEA_ISLAND_CONNECTOR_W],
  },
  {
    routeNames: [ROUTES.seaIslandConnector.name],
    description: "bridge to airport rd connection",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    positions: [
      MOREY_SEA_ISLAND_CONNECTOR_W,
      [49.19276, -123.13905],
      [49.19282, -123.1393],
      [49.1929, -123.13953],
      [49.193, -123.13973],
      [49.19309, -123.13987],
      [49.19321, -123.14002],
      [49.19334, -123.14014],
      [49.19347, -123.14024],
    ],
  },
];
