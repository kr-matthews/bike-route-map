import {
  GRANT_MCCONACHIE_WB_START,
  NO_3_BRIDGEPORT,
  SEA_ISLAND_CONNECTOR_W,
  TEMPLETON_GRANT_MCCONACHIE_NE_E,
  TEMPLETON_GRANT_MCCONACHIE_NE_N,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const MOREY_SEA_ISLAND_CONNECTOR_E = [49.1922, -123.13425];
const MOREY_SEA_ISLAND_CONNECTOR_W = [49.19271, -123.13878];

const ARTHUR_LAING_OVERPASS_S = [49.19483, -123.14015];
const ARTHUR_LAING_OVERPASS_N = [49.19529, -123.14029];

export const SEA_ISLAND_CONNECTOR = [
  {
    routeNames: [ROUTES.seaIslandConnector.name],
    description: "no. 3 to bridge",
    type: "painted",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.seaIslandConnectorWb.id],
    videoIdsStartAtStart: [VIDEOS.seaIslandConnectorWb.id],
    positions: [
      NO_3_BRIDGEPORT,
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
    videoIds: [VIDEOS.seaIslandConnectorWb.id],
    positions: [MOREY_SEA_ISLAND_CONNECTOR_E, MOREY_SEA_ISLAND_CONNECTOR_W],
  },
  {
    routeNames: [ROUTES.seaIslandConnector.name],
    description: "bridge to airport rd connection",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.seaIslandConnectorWb.id],
    positions: [
      MOREY_SEA_ISLAND_CONNECTOR_W,
      [49.19276, -123.13905],
      [49.19282, -123.1393],
      [49.1929, -123.13953],
      [49.193, -123.13973],
      [49.19309, -123.13987],
      [49.19321, -123.14002],
      [49.19334, -123.14014],
      SEA_ISLAND_CONNECTOR_W,
    ],
  },
  {
    description: "to grant mcconachie/arthur laing overpass",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    positions: [
      SEA_ISLAND_CONNECTOR_W,
      [49.19362, -123.1403],
      [49.19377, -123.14033],
      [49.19396, -123.14032],
      [49.19422, -123.14026],
      [49.19462, -123.14017],
      ARTHUR_LAING_OVERPASS_S,
    ],
  },
  {
    description: "grant mcconachie/arthur laing overpass",
    type: "shoulder",
    oneWay: "required",
    elevation: 1,
    positions: [
      ARTHUR_LAING_OVERPASS_S,
      [49.19494, -123.14016],
      [49.19506, -123.14019],
      [49.19517, -123.14023],
      ARTHUR_LAING_OVERPASS_N,
    ],
  },
  {
    description: "grant mcconachie/arthur laing overpass to join",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    positions: [
      ARTHUR_LAING_OVERPASS_N,
      [49.19542, -123.14037],
      [49.19559, -123.14053],
      [49.19574, -123.14071],
      [49.19585, -123.14091],
      [49.19596, -123.14116],
      [49.19604, -123.14144],
      [49.19608, -123.14171],
      [49.19611, -123.14203],
      [49.19611, -123.14227],
      GRANT_MCCONACHIE_WB_START,
    ],
  },
  {
    description: "grant mcconachie eb to templeton nb slip",
    type: "shoulder",
    oneWay: "required",
    positions: [
      TEMPLETON_GRANT_MCCONACHIE_NE_E,
      [49.19347, -123.15014],
      [49.19349, -123.15027],
      [49.19354, -123.1504],
      [49.1936, -123.1505],
      TEMPLETON_GRANT_MCCONACHIE_NE_N,
    ],
  },
];
