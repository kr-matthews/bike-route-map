import { LAKE_CITY_BROADWAY_N, LAKE_CITY_LOUGHEED_NW } from "../intersections";
import { ROUTES } from "../routes";

const LAKE_CITY_VENTURE_SW = [49.25763, -122.93815];

export const LAKE_CITY = [
  {
    routeNames: [ROUTES.lakeCity.name],
    description: "mup",
    type: "mixed",
    positions: [
      LAKE_CITY_LOUGHEED_NW,
      [49.25456, -122.93823],
      [49.25473, -122.93823],
      [49.2548, -122.93817],
      LAKE_CITY_VENTURE_SW,
    ],
  },
  {
    routeNames: [ROUTES.lakeCity.name],
    description: "road",
    type: "shared",
    positions: [
      LAKE_CITY_VENTURE_SW,
      [49.2577, -122.93796],
      [49.25903, -122.93796],
      [49.25932, -122.93793],
      [49.25968, -122.93785],
      [49.25999, -122.93773],
      [49.26031, -122.93756],
      [49.2606, -122.93733],
      [49.26085, -122.9371],
      LAKE_CITY_BROADWAY_N,
    ],
  },
];
