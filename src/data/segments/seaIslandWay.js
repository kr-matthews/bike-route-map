import {
  GARDEN_CITY_SEA_ISLAND_SW_SLIP,
  GRANT_MCCONACHIE_EB_END,
  NO_3_SEA_ISLAND_SW_S_PRE,
  SEA_ISLAND_WAY_POST_BUS_CONNECTION,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const SEA_ISLAND_RUSS_BAKER_W = [49.19256, -123.14272];
const SEA_ISLAND_RUSS_BAKER_E = [49.19257, -123.14155];
const SEA_ISLAND_MOREY_W = [49.1923, -123.13904];
const SEA_ISLAND_MOREY_E = [49.19123, -123.1345];
const SEA_ISLAND_RIVER_SE = [49.19103, -123.13361];
const NO_3_SEA_ISLAND_SW_SLIP = [49.19086, -123.13084];
const NO_3_SEA_ISLAND_SE_SLIP = [49.19085, -123.13017];
const SEA_ISLAND_BEFORE_GARDEN_CITY = [49.1909, -123.12594];

export const SEA_ISLAND_WAY = [
  {
    description: "join from miller",
    type: "shoulder",
    oneWay: "required",
    undesignated: true,
    videoIds: [VIDEOS.seaIslandWayEb.id],
    videoIdsStartAtStart: [VIDEOS.seaIslandWayEb.id],
    positions: [
      [49.19215, -123.14614],
      [49.19222, -123.14637],
      [49.19226, -123.14647],
      [49.19232, -123.14654],
      [49.1924, -123.14659],
      [49.19254, -123.14663],
      [49.1928, -123.14663],
      [49.19288, -123.14661],
      [49.19295, -123.14656],
      [49.19302, -123.14649],
      [49.19306, -123.14641],
      [49.19309, -123.14629],
      [49.1931, -123.14616],
      [49.19309, -123.14601],
      GRANT_MCCONACHIE_EB_END,
    ],
  },
  {
    description: "to no. 3 sb",
    type: "shared",
    oneWay: "required",
    hideArrows: true,
    positions: [NO_3_SEA_ISLAND_SW_SLIP, NO_3_SEA_ISLAND_SW_S_PRE],
  },
  {
    routeNames: [ROUTES.seaIslandWay.name],
    description: "miller join to russ baker",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.seaIslandWayEb.id],
    positions: [
      GRANT_MCCONACHIE_EB_END,
      [49.19285, -123.14515],
      [49.19273, -123.14476],
      [49.19265, -123.14443],
      [49.1926, -123.14411],
      [49.19257, -123.1437],
      SEA_ISLAND_RUSS_BAKER_W,
    ],
  },
  {
    routeNames: [ROUTES.seaIslandWay.name],
    description: "over russ baker",
    type: "shoulder",
    oneWay: "required",
    elevation: 1,
    videoIds: [VIDEOS.seaIslandWayEb.id],
    positions: [SEA_ISLAND_RUSS_BAKER_W, SEA_ISLAND_RUSS_BAKER_E],
  },
  {
    routeNames: [ROUTES.seaIslandWay.name],
    description: "russ baker to bridge",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.seaIslandWayEb.id],
    positions: [
      SEA_ISLAND_RUSS_BAKER_E,
      [49.19256, -123.14093],
      [49.19255, -123.14069],
      [49.19254, -123.14046],
      [49.19251, -123.14022],
      [49.19245, -123.13977],
      SEA_ISLAND_WAY_POST_BUS_CONNECTION,
      SEA_ISLAND_MOREY_W,
    ],
  },
  {
    routeNames: [ROUTES.seaIslandWay.name],
    description: "moray bridge",
    type: "shoulder",
    oneWay: "required",
    elevation: 1,
    videoIds: [VIDEOS.seaIslandWayEb.id],
    positions: [SEA_ISLAND_MOREY_W, SEA_ISLAND_MOREY_E],
  },
  {
    routeNames: [ROUTES.seaIslandWay.name],
    description: "bridge to river",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.seaIslandWayEb.id],
    positions: [
      SEA_ISLAND_MOREY_E,
      [49.19107, -123.13375],
      SEA_ISLAND_RIVER_SE,
    ],
  },
  {
    routeNames: [ROUTES.seaIslandWay.name],
    description: "river to no 3",
    type: "comfortable",
    oneWay: "required",
    videoIds: [VIDEOS.seaIslandWayEb.id],
    videoIdsEndAtEnd: [VIDEOS.seaIslandWayEb.id],
    positions: [
      SEA_ISLAND_RIVER_SE,
      [49.19098, -123.13354],
      [49.19094, -123.13326],
      [49.19092, -123.13308],
      [49.1909, -123.13301],
      [49.1909, -123.13256],
      [49.19088, -123.13104],
      [49.19086, -123.13095],
      [49.19083, -123.13089],
      NO_3_SEA_ISLAND_SW_SLIP,
      [49.19089, -123.13073],
      [49.1909, -123.13022],
      NO_3_SEA_ISLAND_SE_SLIP,
    ],
  },
  {
    routeNames: [ROUTES.seaIslandWay.name],
    description: "no. 3 to almost garden city",
    type: "shoulder",
    oneWay: "required",
    positions: [
      NO_3_SEA_ISLAND_SE_SLIP,
      [49.19092, -123.12987],
      [49.19092, -123.1297],
      [49.19091, -123.12812],
      SEA_ISLAND_BEFORE_GARDEN_CITY,
    ],
  },
  {
    routeNames: [ROUTES.seaIslandWay.name],
    description: "right turn lane for garden city",
    type: "shared",
    oneWay: "required",
    positions: [
      SEA_ISLAND_BEFORE_GARDEN_CITY,
      [49.1909, -123.1249],
      GARDEN_CITY_SEA_ISLAND_SW_SLIP,
    ],
  },
];
