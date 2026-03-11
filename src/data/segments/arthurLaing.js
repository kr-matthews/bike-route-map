import {
  MARINE_ARTHUR_LAING_N,
  MARINE_ARTHUR_LAING_S,
  OAK_OAK_BRIDGE_PATH,
  POST_SEA_ISLAND_CONNECTOR,
  SEA_ISLAND_CONNECTOR_ARTHUR_LAING_N,
  SEA_ISLAND_CONNECTOR_ARTHUR_LAING_S,
  SEA_ISLAND_CONNECTOR_W,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const SOUTHBOUND_ELEVATION_START = [49.20403, -123.13767];
const SOUTHBOUND_ELEVATION_END = [49.19611, -123.13778];

const NORTHBOUND_ELEVATION_START = [49.19607, -123.13747];
const NORTHBOUND_ELEVATION_END = [49.20417, -123.13754];

const OAK_MARINE_S = [49.20452, -123.1304];
const W_BRANCH_PRE_ELEVATION = [49.20439, -123.1312];
const W_BRANCH_ELEVATION_START = [49.20421, -123.13169];
const W_BRANCH_PRE_JOIN = [49.20192, -123.13492];
const SB_BRANCH_JOIN = [49.20176, -123.13506];
const NB_BRANCH_SPLIT = [49.2008, -123.13503];
const E_BRANCH_POST_SPLIT = [49.20113, -123.13501];
const E_BRANCH_ELEVATION_END = [49.20407, -123.13163];
const E_BRANCH_POST_ELEVATION = [49.20415, -123.13133];

const LVL_2_1 = [49.20191, -123.13448];
const LVL_2_2 = [49.20235, -123.13442];
const LVL_2_3 = [49.20283, -123.13464];

export const ARTHUR_LAING = [
  // south ends
  {
    description: "nb exiting from connector",
    type: "dedicated",
    videoIds: [
      ROUTE_VIDEOS.arthurLaingNb.id,
      ROUTE_VIDEOS.seaIslandConnectorWb.id,
    ],
    videoIdsStartAtStart: [ROUTE_VIDEOS.arthurLaingNb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.seaIslandConnectorWb.id],
    positions: [
      SEA_ISLAND_CONNECTOR_W,
      [49.19345, -123.14017],
      [49.19339, -123.14013],
      POST_SEA_ISLAND_CONNECTOR,
    ],
  },
  {
    description: "nb path from connector to bridge",
    type: "dedicated",
    videoIds: [ROUTE_VIDEOS.arthurLaingNb.id],
    positions: [
      POST_SEA_ISLAND_CONNECTOR,
      [49.19348, -123.14013],
      [49.19366, -123.14014],
      [49.19385, -123.14012],
      [49.19405, -123.14007],
      [49.19433, -123.1399],
      [49.19444, -123.13983],
      [49.19452, -123.13984],
      [49.19473, -123.1399],
      [49.19495, -123.14004],
      SEA_ISLAND_CONNECTOR_ARTHUR_LAING_S,
    ],
  },

  // sb east branch
  {
    description: "oak from kent",
    type: "shared",
    undesignated: true,
    videoIds: [ROUTE_VIDEOS.arthurLaingOakSb.id],
    videoIdsStartAtStart: [ROUTE_VIDEOS.arthurLaingOakSb.id],
    positions: [[49.20293, -123.13046], OAK_OAK_BRIDGE_PATH, OAK_MARINE_S],
  },
  {
    description: "marine from oak",
    type: "shared",
    oneWay: "required",
    undesignated: true,
    videoIds: [ROUTE_VIDEOS.arthurLaingOakSb.id],
    positions: [OAK_MARINE_S, [49.20462, -123.13045], W_BRANCH_PRE_ELEVATION],
  },
  {
    routeNames: [ROUTES.arthurLaingBridge.name],
    description: "sb east pre-elevation",
    type: "shared",
    elevation: 0.5,
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.arthurLaingOakSb.id],
    positions: [W_BRANCH_PRE_ELEVATION, W_BRANCH_ELEVATION_START],
  },
  {
    routeNames: [ROUTES.arthurLaingBridge.name],
    description: "sb east elevated",
    type: "shoulder",
    elevation: 1,
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.arthurLaingOakSb.id],
    positions: [
      W_BRANCH_ELEVATION_START,
      [49.20417, -123.13184],
      [49.20394, -123.13239],
      [49.20368, -123.13299],
      [49.20349, -123.13342],
      [49.20332, -123.13374],
      [49.20317, -123.13398],
      [49.20302, -123.13418],
      [49.20284, -123.13438],
      [49.20272, -123.13449],
      [49.20259, -123.1346],
      [49.2024, -123.13473],
      [49.20212, -123.13486],
      W_BRANCH_PRE_JOIN,
    ],
  },
  {
    routeNames: [ROUTES.arthurLaingBridge.name],
    description: "sb east crossing",
    type: "shared",
    elevation: 1,
    oneWay: "required",
    hideArrows: true,
    videoIds: [ROUTE_VIDEOS.arthurLaingOakSb.id],
    positions: [W_BRANCH_PRE_JOIN, SB_BRANCH_JOIN],
  },

  // sb west branch
  {
    routeNames: [ROUTES.arthurLaingBridge.name],
    description: "sb west pre-elevation",
    type: "shared",
    elevation: 0.5,
    oneWay: "required",
    hideArrows: true,
    videoIds: [ROUTE_VIDEOS.arthurLaingSb.id],
    positions: [MARINE_ARTHUR_LAING_S, SOUTHBOUND_ELEVATION_START],
  },
  {
    routeNames: [ROUTES.arthurLaingBridge.name],
    description: "sb west elevated",
    type: "shoulder",
    elevation: 1,
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.arthurLaingSb.id],
    positions: [
      SOUTHBOUND_ELEVATION_START,
      [49.20347, -123.13611],
      [49.20334, -123.1358],
      [49.20322, -123.13558],
      [49.20313, -123.13545],
      [49.203, -123.1353],
      [49.20289, -123.13521],
      [49.20278, -123.13512],
      [49.20265, -123.13505],
      [49.20253, -123.13501],
      [49.20239, -123.13497],
      [49.20227, -123.13496],
      [49.20215, -123.13496],
      [49.202, -123.13498],
      SB_BRANCH_JOIN,
    ],
  },

  // sb
  {
    routeNames: [ROUTES.arthurLaingBridge.name],
    description: "sb elevated",
    type: "shoulder",
    elevation: 1,
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.arthurLaingSb.id, ROUTE_VIDEOS.arthurLaingOakSb.id],
    positions: [
      SB_BRANCH_JOIN,
      [49.20144, -123.13517],
      [49.20114, -123.13527],
      [49.2008, -123.13539],
      [49.20049, -123.13551],
      [49.20004, -123.13569],
      [49.19936, -123.13596],
      [49.19874, -123.13621],
      [49.19831, -123.13637],
      [49.19778, -123.13659],
      [49.19729, -123.13678],
      [49.1971, -123.13688],
      [49.19681, -123.13706],
      [49.19661, -123.13721],
      [49.19637, -123.13747],
      [49.19624, -123.13761],
      SOUTHBOUND_ELEVATION_END,
    ],
  },
  {
    routeNames: [ROUTES.arthurLaingBridge.name],
    description: "sb ground",
    type: "shoulder",
    elevation: 0.5,
    oneWay: "required",
    videoIds: [
      ROUTE_VIDEOS.arthurLaingSb.id,
      ROUTE_VIDEOS.russBakerSb.id,
      ROUTE_VIDEOS.grantMcConachieWb.id,
      ROUTE_VIDEOS.arthurLaingOakSb.id,
    ],
    videoIdsStartAtStart: [
      ROUTE_VIDEOS.russBakerSb.id,
      ROUTE_VIDEOS.grantMcConachieWb.id,
    ],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.arthurLaingOakSb.id],
    positions: [
      SOUTHBOUND_ELEVATION_END,
      [49.19596, -123.138],
      [49.19578, -123.13829],
      [49.19559, -123.13867],
      [49.19543, -123.13909],
      [49.19535, -123.13936],
      SEA_ISLAND_CONNECTOR_ARTHUR_LAING_N,
    ],
  },

  // nb
  {
    routeNames: [ROUTES.arthurLaingBridge.name],
    description: "nb pre-elevation",
    type: "shoulder",
    elevation: 0.5,
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.arthurLaingNb.id, ROUTE_VIDEOS.russBakerNb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.russBakerNb.id],
    positions: [
      SEA_ISLAND_CONNECTOR_ARTHUR_LAING_S,
      [49.19505, -123.13977],
      [49.19522, -123.13912],
      [49.19543, -123.13856],
      [49.19561, -123.13819],
      [49.19583, -123.13781],
      NORTHBOUND_ELEVATION_START,
    ],
  },
  {
    routeNames: [ROUTES.arthurLaingBridge.name],
    description: "nb elevated",
    type: "shoulder",
    elevation: 1,
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.arthurLaingNb.id],
    positions: [
      NORTHBOUND_ELEVATION_START,
      [49.1963, -123.1372],
      [49.1966, -123.13692],
      [49.1969, -123.13672],
      [49.19727, -123.13653],
      [49.19828, -123.13613],
      [49.19953, -123.13563],
      [49.20025, -123.13534],
      NB_BRANCH_SPLIT,
    ],
  },

  // nb west branch
  {
    routeNames: [ROUTES.arthurLaingBridge.name],
    description: "nb west elevated 1",
    type: "shoulder",
    elevation: 1,
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.arthurLaingNb.id],
    positions: [
      NB_BRANCH_SPLIT,
      [49.20131, -123.13476],
      [49.20174, -123.13456],
      LVL_2_1,
    ],
  },
  {
    routeNames: [ROUTES.arthurLaingBridge.name],
    description: "nb west elevated 2",
    type: "shoulder",
    elevation: 1.5,
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.arthurLaingNb.id],
    positions: [LVL_2_1, [49.2021, -123.13442], LVL_2_2],
  },
  {
    routeNames: [ROUTES.arthurLaingBridge.name],
    description: "nb west elevated 3",
    type: "shoulder",
    elevation: 2,
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.arthurLaingNb.id],
    positions: [
      LVL_2_2,
      [49.20251, -123.13447],
      [49.20264, -123.13452],
      [49.20272, -123.13456],
      LVL_2_3,
    ],
  },
  {
    routeNames: [ROUTES.arthurLaingBridge.name],
    description: "nb west elevated 4",
    type: "shoulder",
    elevation: 1.5,
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.arthurLaingNb.id],
    positions: [
      LVL_2_3,
      [49.20291, -123.13471],
      [49.20299, -123.13479],
      [49.2031, -123.13491],
      [49.20317, -123.13501],
      [49.20325, -123.13516],
      [49.20331, -123.13529],
      [49.20336, -123.13537],
      [49.20351, -123.13572],
      [49.20393, -123.1369],
      NORTHBOUND_ELEVATION_END,
    ],
  },
  {
    routeNames: [ROUTES.arthurLaingBridge.name],
    description: "nb west post-elevation",
    type: "shared",
    elevation: 0.5,
    oneWay: "required",
    hideArrows: true,
    videoIds: [ROUTE_VIDEOS.arthurLaingNb.id],
    positions: [NORTHBOUND_ELEVATION_END, MARINE_ARTHUR_LAING_N],
  },

  // nb - east branch
  {
    routeNames: [ROUTES.arthurLaingBridge.name],
    description: "nb east crossing",
    type: "shared",
    elevation: 1,
    oneWay: "required",
    hideArrows: true,
    positions: [NB_BRANCH_SPLIT, E_BRANCH_POST_SPLIT],
  },
  {
    routeNames: [ROUTES.arthurLaingBridge.name],
    description: "nb east elevated",
    type: "shoulder",
    elevation: 1,
    oneWay: "required",
    positions: [
      E_BRANCH_POST_SPLIT,
      [49.20193, -123.13469],
      [49.20215, -123.1346],
      [49.2023, -123.13453],
      [49.2025, -123.1344],
      [49.20263, -123.13431],
      [49.20277, -123.13418],
      [49.20291, -123.13403],
      [49.20307, -123.13381],
      [49.20321, -123.13359],
      [49.20335, -123.13332],
      E_BRANCH_ELEVATION_END,
    ],
  },
  {
    routeNames: [ROUTES.arthurLaingBridge.name],
    description: "nb east post-elevation",
    type: "shared",
    elevation: 0.5,
    oneWay: "required",
    positions: [E_BRANCH_ELEVATION_END, E_BRANCH_POST_ELEVATION],
  },
  {
    description: "marine eb",
    type: "shared",
    oneWay: "required",
    undesignated: true,
    positions: [E_BRANCH_POST_ELEVATION, OAK_MARINE_S],
  },
];
