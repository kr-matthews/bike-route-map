import {
  MARINE_ARTHUR_LAING_N,
  MARINE_ARTHUR_LAING_S,
  POST_SEA_ISLAND_CONNECTOR,
  SEA_ISLAND_CONNECTOR_ARTHUR_LAING_N,
  SEA_ISLAND_CONNECTOR_ARTHUR_LAING_S,
  SEA_ISLAND_CONNECTOR_W,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const SOUTHBOUND_ELEVATION_START = [49.20434, -123.13851];
const SOUTHBOUND_ELEVATION_END = [49.19611, -123.13778];

const NORTHBOUND_ELEVATION_START = [49.19607, -123.13747];
const NORTHBOUND_ELEVATION_END = [49.20442, -123.13833];

export const ARTHUR_LAING = [
  // south ends
  {
    description: "nb path from connector to bridge",
    type: "dedicated",
    videoIds: [VIDEOS.arthurLaingNb.id],
    videoIdsStartAtStart: [VIDEOS.arthurLaingNb.id],
    positions: [
      SEA_ISLAND_CONNECTOR_W,
      [49.19345, -123.14017],
      [49.19339, -123.14013],
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

  // sb
  {
    routeNames: [ROUTES.arthurLaingBridge.name],
    description: "sb pre-elevation",
    type: "shared",
    elevation: 0.5,
    oneWay: "required",
    hideArrows: true,
    videoIds: [VIDEOS.arthurLaingSb.id],
    positions: [MARINE_ARTHUR_LAING_S, SOUTHBOUND_ELEVATION_START],
  },
  {
    routeNames: [ROUTES.arthurLaingBridge.name],
    description: "sb elevated",
    type: "shoulder",
    elevation: 1,
    oneWay: "required",
    videoIds: [VIDEOS.arthurLaingSb.id],
    positions: [
      SOUTHBOUND_ELEVATION_START,
      [49.20378, -123.13694],
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
      [49.20176, -123.13506],
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
    videoIds: [VIDEOS.arthurLaingSb.id],
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
    videoIds: [VIDEOS.arthurLaingNb.id, VIDEOS.russBakerNb.id],
    videoIdsEndAtEnd: [VIDEOS.russBakerNb.id],
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
    videoIds: [VIDEOS.arthurLaingNb.id],
    positions: [
      NORTHBOUND_ELEVATION_START,
      [49.1963, -123.1372],
      [49.1966, -123.13692],
      [49.1969, -123.13672],
      [49.19727, -123.13653],
      [49.19828, -123.13613],
      [49.19953, -123.13563],
      [49.20025, -123.13534],
      [49.2008, -123.13503],
      [49.20131, -123.13476],
      [49.20174, -123.13456],
      [49.20191, -123.13448],
      [49.2021, -123.13442],
      [49.20235, -123.13442],
      [49.20251, -123.13447],
      [49.20264, -123.13452],
      [49.20272, -123.13456],
      [49.20283, -123.13464],
      [49.20291, -123.13471],
      [49.20299, -123.13479],
      [49.2031, -123.13491],
      [49.20317, -123.13501],
      [49.20325, -123.13516],
      [49.20331, -123.13529],
      [49.20338, -123.13546],
      [49.20348, -123.13573],
      [49.20377, -123.13649],
      [49.204, -123.13711],
      [49.20419, -123.13766],
      NORTHBOUND_ELEVATION_END,
    ],
  },
  {
    routeNames: [ROUTES.arthurLaingBridge.name],
    description: "nb post-elevation",
    type: "shared",
    elevation: 0.5,
    oneWay: "required",
    hideArrows: true,
    videoIds: [VIDEOS.arthurLaingNb.id],
    positions: [NORTHBOUND_ELEVATION_END, MARINE_ARTHUR_LAING_N],
  },
];
