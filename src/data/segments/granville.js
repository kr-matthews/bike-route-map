import {
  GARDEN_CITY_GRANVILLE_NW,
  GARDEN_CITY_GRANVILLE_S,
  GARDEN_CITY_GRANVILLE_W,
  RAILWAY_GRANVILLE_MIDDLE,
  RAILWAY_GRANVILLE_NW,
  RAILWAY_GRANVILLE_SE,
  RAILWAY_GREENWAY_GRANVILLE_N,
  RAILWAY_GREENWAY_GRANVILLE_S,
} from "../intersections";
import { ROUTES } from "../routes";

const RAILWAY_GRANVILLE_N = [49.1626, -123.16888];
const GARDEN_CITY_GRANVILLE_SW = [49.16272, -123.12627];
const WB_LANE_START = [49.16268, -123.16942];

export const GRANVILLE = [
  // eb
  {
    routeNames: [ROUTES.granville.name],
    description: "from no. 1",
    type: "painted",
    oneWay: "required",
    positions: [
      [49.16279, -123.18107],
      [49.16282, -123.18031],
      [49.16285, -123.17036],
      RAILWAY_GREENWAY_GRANVILLE_S,
    ],
  },
  {
    routeNames: [ROUTES.granville.name],
    description: "greenway to railway split",
    type: "painted",
    oneWay: "required",
    positions: [
      RAILWAY_GREENWAY_GRANVILLE_S,
      [49.1628, -123.17003],
      [49.16274, -123.16981],
      [49.16267, -123.16966],
      RAILWAY_GRANVILLE_NW,
    ],
  },
  {
    routeNames: [ROUTES.granville.name],
    description: "railway split to continue eb",
    type: "shared",
    oneWay: "required",
    positions: [
      RAILWAY_GRANVILLE_NW,
      RAILWAY_GRANVILLE_MIDDLE,
      RAILWAY_GRANVILLE_SE,
    ],
  },
  {
    description: "to garden city sb",
    oneWay: "required",
    type: "shared",
    positions: [
      GARDEN_CITY_GRANVILLE_SW,
      [49.16271, -123.12576],
      GARDEN_CITY_GRANVILLE_S,
    ],
  },
  {
    routeNames: [ROUTES.granville.name],
    description: "primary eb",
    type: "painted",
    oneWay: "required",
    positions: [
      RAILWAY_GRANVILLE_SE,
      [49.16241, -123.16883],
      [49.16248, -123.16862],
      [49.16255, -123.16837],
      [49.16259, -123.16816],
      [49.16262, -123.1679],
      [49.16264, -123.16766],
      [49.16264, -123.1646],
      [49.16264, -123.15885],
      [49.16263, -123.1519],
      [49.16262, -123.14779],
      [49.16262, -123.14026],
      [49.16262, -123.13671],
      [49.16262, -123.13644],
      [49.16261, -123.13095],
      [49.16261, -123.1279],
      [49.16262, -123.12733],
      [49.16265, -123.1268],
      GARDEN_CITY_GRANVILLE_SW,
      [49.16282, -123.12593],
      GARDEN_CITY_GRANVILLE_W,
    ],
  },

  // wb
  {
    routeNames: [ROUTES.granville.name],
    description: "railway to greenway wb 1",
    type: "shared",
    oneWay: "required",
    positions: [
      RAILWAY_GRANVILLE_N,
      [49.16256, -123.16911],
      [49.16261, -123.16933],
      WB_LANE_START,
    ],
  },
  {
    routeNames: [ROUTES.granville.name],
    description: "railway to greenway wb 2",
    type: "painted",
    oneWay: "required",
    positions: [
      WB_LANE_START,
      [49.16275, -123.16959],
      [49.16284, -123.1698],
      [49.16289, -123.17],
      RAILWAY_GREENWAY_GRANVILLE_N,
    ],
  },
  {
    description: "wb continue to sb",
    oneWay: "required",
    type: "painted",
    positions: [
      RAILWAY_GRANVILLE_N,
      [49.16251, -123.16908],
      RAILWAY_GRANVILLE_MIDDLE,
    ],
  },
  {
    routeNames: [ROUTES.granville.name],
    description: "primary wb",
    type: "painted",
    oneWay: "required",
    positions: [
      GARDEN_CITY_GRANVILLE_NW,
      [49.16307, -123.12598],
      [49.16295, -123.12633],
      [49.16288, -123.12667],
      [49.16284, -123.12705],
      [49.16282, -123.1278],
      [49.16282, -123.13101],
      [49.16283, -123.13375],
      [49.16282, -123.13643],
      [49.16282, -123.13671],
      [49.16284, -123.14011],
      [49.16284, -123.14039],
      [49.16284, -123.14301],
      [49.16283, -123.1478],
      [49.16283, -123.15316],
      [49.16283, -123.15885],
      [49.16283, -123.1646],
      [49.16283, -123.16772],
      [49.16281, -123.16796],
      [49.16279, -123.16816],
      [49.16274, -123.16839],
      [49.16269, -123.1686],
      RAILWAY_GRANVILLE_N,
    ],
  },
  {
    routeNames: [ROUTES.granville.name],
    description: "to no. 1",
    type: "painted",
    oneWay: "required",
    positions: [
      RAILWAY_GREENWAY_GRANVILLE_N,
      [49.16294, -123.17036],
      [49.16291, -123.18031],
      [49.16288, -123.18107],
    ],
  },
];
