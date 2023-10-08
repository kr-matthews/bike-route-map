import {
  ASH_2ND,
  ASH_7TH,
  BEATTY_NELSON_SE,
  CAMBIE_1ST_N,
  CAMBIE_1ST_S,
  CAMBIE_2ND_N_E,
  CAMBIE_2ND_N_W,
  CAMBIE_2ND_SE,
  CAMBIE_2ND_SW,
  CAMBIE_2ND_NE,
  CAMBIE_2ND_NW,
  CAMBIE_LOOP_2ND_N,
  CAMBIE_LOOP_2ND_S,
  MARINASIDE_SEAWALL,
  SMITHE_SMITHE_PATH,
  SPYGLASS_1ST,
  SPYGLASS_COMMODORE,
  SPYGLASS_SEAWALL,
  YUKON_5TH,
  NELSON_PACIFIC_SE,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

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
    routes: [ROUTES.cambieBridge.name],
    description: "northbound pre-bridge",
    oneWay: "required",
    elevation: 0.5,
    videos: [VIDEOS.cambieBridgeSmithNb],
    positions: [
      CAMBIE_2ND_NE,
      [49.26703, -123.11446],
      NORTHBOUND_ELEVATED_START,
    ],
  },
  {
    routes: [ROUTES.cambieBridge.name],
    description: "northbound bridge 1",
    oneWay: "required",
    videos: [VIDEOS.cambieBridgeSmithNb],
    elevation: 1,
    positions: [
      NORTHBOUND_ELEVATED_START,
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
    routes: [ROUTES.cambieBridge.name],
    description: "northbound bridge 2",
    oneWay: "required",
    videos: [VIDEOS.cambieBridgeSmithNb],
    elevation: 1.5,
    positions: [SPIRAL_PRE_SPLIT_1, SPIRAL_PRE_SPLIT_2],
  },
  {
    routes: [ROUTES.cambieBridge.name],
    description: "northbound bridge spiral 1",
    oneWay: "required",
    hideArrows: true,
    videos: [VIDEOS.cambieBridgeSmithNb],
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
    routes: [ROUTES.cambieBridge.name],
    description: "northbound bridge spiral 2",
    oneWay: "required",
    hideArrows: "true",
    videos: [VIDEOS.cambieBridgeSmithNb],
    elevation: 1.5,
    positions: [SPIRAL_PRE_SPLIT_3, [49.27393, -123.11425], SPIRAL_PRE_SPLIT_4],
  },
  {
    routes: [ROUTES.cambieBridge.name],
    description: "northbound bridge post-spiral",
    oneWay: "required",
    videos: [VIDEOS.cambieBridgeSmithNb],
    elevation: 1,
    positions: [
      SPIRAL_PRE_SPLIT_4,
      SPIRAL_SPLIT,
      [49.27389, -123.11454],
      [49.27392, -123.11455],
      [49.27422, -123.11455],
      [49.27465, -123.11452],
      NORTHBOUND_ELEVATED_END,
    ],
  },
  {
    routes: [ROUTES.cambieBridge.name],
    description: "northbound post-bridge",
    oneWay: "required",
    elevation: 0.5,
    videos: [VIDEOS.cambieBridgeSmithNb],
    positions: [
      NORTHBOUND_ELEVATED_END,
      [49.27532, -123.11445],
      [49.2754, -123.11452],
      SMITHE_SMITHE_PATH,
    ],
  },
  {
    description: "nb connection to pacific",
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
      [49.27364, -123.11465],
      [49.27359, -123.11476],
      MARINASIDE_SEAWALL,
    ],
  },
  {
    description: "north spiral connection top",
    elevation: 1,
    positions: [SPIRAL_SPLIT, [49.27392, -123.11433], [49.27394, -123.11431]],
  },
  {
    description: "north spiral connection mid",
    elevation: 1,
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
    elevation: 0.5,
    positions: [SPIRAL_PRE_BOTTOM, SPIRAL_BOTTOM],
  },
  {
    routes: [ROUTES.cambieBridge.name],
    description: "southbound side",
    oneWay: "required",
    videos: [VIDEOS.cambieBridgeNelsonSb],
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
    description: "connection to off broadway via ash",
    elevation: 0.5,
    videos: [VIDEOS.cambieBridgeNelsonSb, VIDEOS.heatherSb],
    positions: [ASH_7TH, ASH_2ND],
  },
  {
    description: "connection to off broadway via 2nd",
    elevation: 0.5,
    videos: [VIDEOS.cambieBridgeNelsonSb],
    positions: [
      ASH_2ND,
      [49.26601, -123.11743],
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
    elevation: 0.5,
    positions: [
      CAMBIE_2ND_NW,
      [49.2666, -123.11529],
      [49.26661, -123.11521],
      CAMBIE_2ND_N_W,
      CAMBIE_2ND_N_E,
      CAMBIE_2ND_NE,
    ],
  },
  {
    description: "2nd, south side (west of middle)",
    videos: [VIDEOS.heatherSb],
    positions: [
      ASH_2ND,
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
    positions: [
      CAMBIE_2ND_SW,
      [49.26654, -123.11457],
      [49.2666, -123.11451],
      CAMBIE_2ND_SE,
    ],
  },
  {
    description: "crossing 2nd, east side",
    videos: [VIDEOS.cambieBridgeSmithNb],
    positions: [CAMBIE_2ND_SE, CAMBIE_2ND_NE],
  },
  {
    description: "crossing 2nd, under",
    videos: [VIDEOS.heatherSb],
    positions: [CAMBIE_2ND_N_W, CAMBIE_2ND_SW],
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
    elevation: 1,
    positions: [
      NORTHBOUND_ON_RAMP_MERGE,
      [49.26739, -123.11456],
      NORTHBOUND_ON_RAMP_PRE_MERGE,
    ],
  },
  {
    description: "northbound alt on-ramp mid",
    elevation: 0.5,
    positions: [NORTHBOUND_ON_RAMP_PRE_MERGE, NORTHBOUND_ON_RAMP_PRE_PRE_MERGE],
  },
  {
    description: "northbound alt on-ramp bottom",
    positions: [
      NORTHBOUND_ON_RAMP_PRE_PRE_MERGE,
      [49.2678, -123.11458],
      [49.26785, -123.11471],
      UNDER_BRIDGE_NODE,
    ],
  },
  {
    description: "under bridge",
    positions: [CAMBIE_2ND_N_E, UNDER_BRIDGE_NODE, CAMBIE_1ST_S, CAMBIE_1ST_N],
  },
  {
    description: "beside bridge",
    videos: [VIDEOS.yukonSb],
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
    oneWay: "required",
    positions: [CAMBIE_1ST_N, [49.2682, -123.11514], SPYGLASS_1ST],
  },
  {
    description: "connection commodore from spyglass",
    videos: [VIDEOS.yukonSb],
    positions: [SPYGLASS_1ST, SPYGLASS_COMMODORE],
  },
  {
    description: "connection to off broadway via 5th",
    videos: [VIDEOS.cambieBridgeSmithNb],
    positions: [
      CAMBIE_2ND_SE,
      [49.26665, -123.11435],
      [49.26667, -123.11428],
      YUKON_5TH,
    ],
  },
];
