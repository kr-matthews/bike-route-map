import {
  ASH_7TH_E,
  ASH_7TH_W,
  BEATTY_NELSON_SE,
  CAMBIE_1ST_N,
  MARINASIDE_SEAWALL,
  NELSON_PACIFIC_SE,
  SMITHE_SMITHE_PATH,
  SPYGLASS_1ST,
  SPYGLASS_COMMODORE,
  SPYGLASS_SEAWALL,
  YUKON_5TH_W,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const CAMBIE_1ST_S = [49.26812, -123.11487];
const CAMBIE_2ND_N_E = [49.26677, -123.11485];
const CAMBIE_2ND_N_W = [49.26674, -123.11489];
const CAMBIE_2ND_NE = [49.26695, -123.11447];
const CAMBIE_2ND_NW = [49.26661, -123.11534];
const CAMBIE_2ND_SE = [49.26666, -123.11446];
const CAMBIE_2ND_SW = [49.26648, -123.1147];
const CAMBIE_LOOP_2ND_N = [49.26623, -123.11621];
const CAMBIE_LOOP_2ND_S = [49.26591, -123.11591];

const ASH_2ND_SE = [49.26579, -123.11737];
const ASH_2ND_SW = [49.26577, -123.11747];
const ASH_2ND_N = [49.26601, -123.11743];

const NORTHBOUND_ELEVATED_START = [49.26719, -123.11457];
const NORTHBOUND_ON_RAMP_PRE_PRE_MERGE = [49.26758, -123.11456];
const NORTHBOUND_ON_RAMP_PRE_MERGE = [49.26754, -123.11455];
const NORTHBOUND_ON_RAMP_MERGE = [49.26737, -123.11459];
const NORTHBOUND_ELEVATED_END = [49.27495, -123.11447];

const UNDER_BRIDGE_NODE = [49.26787, -123.11487];
const SPYGLASS_LOOP_S = [49.27042, -123.11521];

const SPIRAL_PRE_SPLIT_1 = [49.27288, -123.1146];
const SPIRAL_PRE_SPLIT_2 = [49.27383, -123.11446];
const SPIRAL_PRE_SPLIT_3 = [49.27402, -123.11417];
const SPIRAL_PRE_SPLIT_4 = [49.2739, -123.11429];
const SPIRAL_SPLIT = [49.27389, -123.11434];
const SPIRAL_PRE_BOTTOM = [49.27385, -123.11427];
const SPIRAL_BOTTOM = [49.27383, -123.11435];

export const CAMBIE_BRIDGE = [
  {
    routeNames: [ROUTES.cambieBridge.name],
    description: "northbound pre-bridge",
    type: "combined",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.cambieBridgeSmitheNb.id],
    positions: [
      CAMBIE_2ND_NE,
      [49.26703, -123.11446],
      NORTHBOUND_ELEVATED_START,
    ],
  },
  {
    routeNames: [ROUTES.cambieBridge.name],
    description: "northbound bridge 0",
    type: "combined",
    oneWay: "required",
    videoIds: [VIDEOS.cambieBridgeSmitheNb.id],
    elevation: 1,
    positions: [NORTHBOUND_ELEVATED_START, NORTHBOUND_ON_RAMP_MERGE],
  },
  {
    routeNames: [ROUTES.cambieBridge.name],
    description: "northbound bridge 1",
    type: "combined",
    oneWay: "required",
    videoIds: [VIDEOS.cambieBridgeNb.id, VIDEOS.cambieBridgeSmitheNb.id],
    elevation: 1,
    positions: [
      NORTHBOUND_ON_RAMP_MERGE,
      [49.26866, -123.11467],
      [49.26948, -123.11476],
      [49.26992, -123.11475],
      [49.27071, -123.11471],
      [49.27123, -123.11469],
      [49.27256, -123.11464],
      SPIRAL_PRE_SPLIT_1,
    ],
  },
  {
    routeNames: [ROUTES.cambieBridge.name],
    description: "northbound bridge 2",
    type: "combined",
    oneWay: "required",
    videoIds: [VIDEOS.cambieBridgeNb.id, VIDEOS.cambieBridgeSmitheNb.id],
    elevation: 1.5,
    positions: [SPIRAL_PRE_SPLIT_1, SPIRAL_PRE_SPLIT_2],
  },
  {
    routeNames: [ROUTES.cambieBridge.name],
    description: "northbound bridge spiral 1",
    type: "combined",
    oneWay: "required",
    hideArrows: true,
    videoIds: [VIDEOS.cambieBridgeNb.id, VIDEOS.cambieBridgeSmitheNb.id],
    elevation: 2,
    positions: [
      SPIRAL_PRE_SPLIT_2,
      [49.27397, -123.11439],
      [49.27397, -123.11433],
      [49.27415, -123.11414],
      [49.27417, -123.1141],
      [49.27416, -123.11408],
      [49.27414, -123.11407],
      SPIRAL_PRE_SPLIT_3,
    ],
  },
  {
    routeNames: [ROUTES.cambieBridge.name],
    description: "northbound bridge spiral 2",
    type: "combined",
    oneWay: "required",
    hideArrows: "true",
    videoIds: [VIDEOS.cambieBridgeNb.id, VIDEOS.cambieBridgeSmitheNb.id],
    elevation: 1.5,
    positions: [SPIRAL_PRE_SPLIT_3, [49.27393, -123.11425], SPIRAL_PRE_SPLIT_4],
  },
  {
    routeNames: [ROUTES.cambieBridge.name],
    description: "northbound bridge post-spiral tiny bit",
    type: "mixed",
    oneWay: "required",
    hideArrows: true,
    videoIds: [VIDEOS.cambieBridgeNb.id, VIDEOS.cambieBridgeSmitheNb.id],
    elevation: 1,
    positions: [SPIRAL_PRE_SPLIT_4, SPIRAL_SPLIT],
  },
  {
    routeNames: [ROUTES.cambieBridge.name],
    description: "northbound bridge post-spiral",
    type: "mixed",
    oneWay: "required",
    videoIds: [VIDEOS.cambieBridgeSmitheNb.id],
    elevation: 1,
    positions: [
      SPIRAL_SPLIT,
      [49.27389, -123.11454],
      [49.27392, -123.11455],
      [49.27422, -123.11455],
      [49.27465, -123.11452],
      NORTHBOUND_ELEVATED_END,
    ],
  },
  {
    routeNames: [ROUTES.cambieBridge.name],
    description: "northbound post-bridge",
    type: "comfortable",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.cambieBridgeSmitheNb.id],
    positions: [
      NORTHBOUND_ELEVATED_END,
      [49.27532, -123.11445],
      [49.2754, -123.11452],
      SMITHE_SMITHE_PATH,
    ],
  },
  {
    description: "smithe to spirals, on ground",
    type: "dedicated",
    videoIds: [VIDEOS.cambieBridgeSb.id],
    positions: [
      SMITHE_SMITHE_PATH,
      [49.27569, -123.11451],
      [49.27558, -123.11445],
      [49.2754, -123.11438],
      [49.27505, -123.11439],
      [49.27477, -123.11444],
      [49.27463, -123.11449],
      [49.27443, -123.1146],
      [49.27431, -123.1149],
      [49.27423, -123.11494],
      NELSON_PACIFIC_SE,
      SPIRAL_BOTTOM,
    ],
  },
  {
    description: "spirals to seawall",
    type: "dedicated",
    videoIds: [VIDEOS.cambieBridgeNb.id, VIDEOS.cambieBridgeSb.id],
    positions: [
      SPIRAL_BOTTOM,
      [49.27364, -123.11465],
      [49.27359, -123.11476],
      [49.27338, -123.1148],
      MARINASIDE_SEAWALL,
    ],
  },
  {
    description: "north spiral connection top",
    type: "mixed",
    elevation: 1,
    videoIds: [VIDEOS.cambieBridgeNb.id],
    positions: [SPIRAL_SPLIT, [49.27392, -123.11433], [49.27394, -123.11431]],
  },
  {
    description: "north spiral connection mid",
    type: "mixed",
    elevation: 1,
    videoIds: [VIDEOS.cambieBridgeNb.id],
    positions: [
      [49.27394, -123.11431],
      [49.27413, -123.11412],
      [49.27414, -123.11406],
      [49.27411, -123.11403],
      SPIRAL_PRE_BOTTOM,
    ],
  },
  {
    description: "north spiral connection bottom",
    type: "mixed",
    elevation: 0.5,
    videoIds: [VIDEOS.cambieBridgeNb.id],
    positions: [SPIRAL_PRE_BOTTOM, SPIRAL_BOTTOM],
  },

  {
    routeNames: [ROUTES.cambieBridge.name],
    description: "southbound side",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.cambieBridgeSb.id, VIDEOS.cambieBridgeNelsonSb.id],
    elevation: 1,
    positions: [
      BEATTY_NELSON_SE,
      [49.27452, -123.1158],
      [49.27428, -123.11546],
      [49.27408, -123.11526],
      [49.27386, -123.11511],
      [49.27361, -123.11498],
      [49.27337, -123.11495],
      [49.27294, -123.11494],
      [49.27264, -123.11496],
      [49.27184, -123.115],
      [49.27105, -123.11503],
      [49.27019, -123.11506],
      [49.26926, -123.1151],
      [49.2683, -123.11516],
      [49.26793, -123.11518],
      [49.26762, -123.11517],
      [49.26735, -123.11516],
      [49.26713, -123.11517],
      [49.26694, -123.11524],
      [49.26688, -123.11529],
      [49.26681, -123.11538],
      [49.26675, -123.11541],
      [49.26669, -123.11538],
      CAMBIE_2ND_NW,
    ],
  },
  {
    description: "crossing ash",
    videoIds: [VIDEOS.heatherSb.id],
    positions: [ASH_2ND_SW, ASH_2ND_SE],
  },
  {
    description: "sb: crossing 2nd",
    type: "quiet",
    oneWay: "required",
    videoIds: [VIDEOS.cambieBridgeNelsonSb.id],
    positions: [ASH_2ND_N, ASH_2ND_SW],
  },
  {
    description: "sb: 2nd to 7th",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.cambieBridgeNelsonSb.id, VIDEOS.heatherSb.id],
    videoIdsEndAtEnd: [VIDEOS.cambieBridgeNelsonSb.id],
    positions: [ASH_2ND_SW, ASH_7TH_W],
  },
  {
    description: "nb: 7th to 2nd",
    type: "painted",
    oneWay: "required",
    positions: [ASH_7TH_E, ASH_2ND_SE],
  },
  {
    description: "nb: crossing 2nd",
    type: "quiet",
    positions: [ASH_2ND_SE, ASH_2ND_N],
  },
  {
    description: "connection to off broadway via 2nd",
    type: "dedicated",
    elevation: 0.5,
    videoIds: [VIDEOS.cambieBridgeNelsonSb.id],
    positions: [
      ASH_2ND_N,
      [49.26608, -123.11743],
      [49.26608, -123.11704],
      [49.2661, -123.11677],
      [49.26614, -123.11654],
      CAMBIE_LOOP_2ND_N,
      [49.26634, -123.11593],
      [49.26639, -123.11581],
      CAMBIE_2ND_NW,
    ],
  },
  {
    description: "2nd, north side, under bridge",
    type: "combined",
    elevation: 0.5,
    videoIds: [VIDEOS.cambieBridgeSb.id],
    positions: [
      CAMBIE_2ND_NW,
      [49.2666, -123.11529],
      [49.26661, -123.11521],
      CAMBIE_2ND_N_W,
      CAMBIE_2ND_N_E,
    ],
  },
  {
    description: "2nd, north side, east of bridge",
    type: "combined",
    elevation: 0.5,
    positions: [CAMBIE_2ND_N_E, CAMBIE_2ND_NE],
  },
  {
    description: "2nd, south side (west of middle)",
    type: "dedicated",
    videoIds: [VIDEOS.heatherSb.id],
    positions: [
      ASH_2ND_SE,
      [49.26578, -123.11622],
      [49.26581, -123.1161],
      [49.26591, -123.11591],
      [49.26601, -123.11566],
      [49.26617, -123.11533],
      [49.26627, -123.11503],
      CAMBIE_2ND_SW,
    ],
  },
  {
    description: "2nd, south side (east of middle)",
    type: "combined",
    positions: [
      CAMBIE_2ND_SW,
      [49.26654, -123.11457],
      [49.2666, -123.11451],
      CAMBIE_2ND_SE,
    ],
  },
  {
    description: "crossing 2nd, east side",
    type: "combined",
    videoIds: [VIDEOS.cambieBridgeSmitheNb.id],
    positions: [CAMBIE_2ND_SE, CAMBIE_2ND_NE],
  },
  {
    description: "crossing 2nd, under",
    type: "combined",
    videoIds: [VIDEOS.heatherSb.id],
    videoIdsStartAtEnd: [VIDEOS.heatherSb.id],
    positions: [CAMBIE_2ND_SW, CAMBIE_2ND_N_W],
  },
  {
    description: "crossing 2nd, west side",
    positions: [
      CAMBIE_LOOP_2ND_S,
      [49.26599, -123.11603],
      [49.26614, -123.11614],
      CAMBIE_LOOP_2ND_N,
    ],
  },
  {
    description: "northbound alt on-ramp top",
    type: "mixed",
    elevation: 1,
    videoIds: [VIDEOS.cambieBridgeNb.id],
    positions: [
      NORTHBOUND_ON_RAMP_MERGE,
      [49.26739, -123.11456],
      NORTHBOUND_ON_RAMP_PRE_MERGE,
    ],
  },
  {
    description: "northbound alt on-ramp mid",
    type: "mixed",
    elevation: 0.5,
    videoIds: [VIDEOS.cambieBridgeNb.id],
    positions: [NORTHBOUND_ON_RAMP_PRE_MERGE, NORTHBOUND_ON_RAMP_PRE_PRE_MERGE],
  },
  {
    description: "northbound alt on-ramp bottom",
    type: "mixed",
    videoIds: [VIDEOS.cambieBridgeNb.id],
    positions: [
      NORTHBOUND_ON_RAMP_PRE_PRE_MERGE,
      [49.2678, -123.11458],
      [49.26785, -123.11471],
      UNDER_BRIDGE_NODE,
    ],
  },
  {
    description: "under bridge 1",
    type: "mixed",
    videoIds: [VIDEOS.cambieBridgeSb.id],
    positions: [CAMBIE_2ND_N_E, UNDER_BRIDGE_NODE],
  },
  {
    description: "under bridge 2",
    type: "mixed",
    videoIds: [VIDEOS.cambieBridgeNb.id, VIDEOS.cambieBridgeSb.id],
    positions: [UNDER_BRIDGE_NODE, CAMBIE_1ST_S, CAMBIE_1ST_N],
  },
  {
    description: "beside bridge",
    type: "quiet",
    videoIds: [
      VIDEOS.cambieBridgeNb.id,
      VIDEOS.yukonSb.id,
      VIDEOS.cambieBridgeSb.id,
    ],
    videoIdsEndAtEnd: [VIDEOS.cambieBridgeSb.id],
    positions: [
      SPYGLASS_1ST,
      [49.26912, -123.11526],
      [49.27003, -123.11524],
      SPYGLASS_LOOP_S,
      SPYGLASS_SEAWALL,
    ],
  },
  // if you want to be pedantic about the parking lot loop, but it makes the map too confusing
  // {
  //   description: "spyglass loop nb",
  //   oneway: "required",
  //   positions: [
  //     SPYGLASS_LOOP_S,
  //     [49.27058, -123.11498],
  //     [49.27074, -123.11497],
  //     [49.27079, -123.11509],
  //     SPYGLASS_SEAWALL,
  //   ],
  // },
  // {
  //   description: "spyglass loop sb",
  //   oneWay: "required",
  //   positions: [SPYGLASS_SEAWALL, SPYGLASS_LOOP_S],
  // },
  {
    description: "connection 1st to spyglass",
    type: "quiet",
    oneWay: "required",
    videoIds: [VIDEOS.cambieBridgeSb.id],
    positions: [CAMBIE_1ST_N, [49.2682, -123.11514], SPYGLASS_1ST],
  },
  {
    description: "connection commodore from spyglass",
    type: "quiet",
    videoIds: [VIDEOS.cambieBridgeNb.id, VIDEOS.yukonSb.id],
    positions: [SPYGLASS_1ST, SPYGLASS_COMMODORE],
  },
  {
    description: "connection to off broadway via 5th",
    type: "quiet",
    videoIds: [VIDEOS.cambieBridgeSmitheNb.id],
    videoIdsStartAtEnd: [VIDEOS.cambieBridgeSmitheNb.id],
    positions: [
      CAMBIE_2ND_SE,
      [49.26665, -123.11435],
      [49.26667, -123.11428],
      YUKON_5TH_W,
    ],
  },
];
