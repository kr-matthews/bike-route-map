import {
  ASH_2ND,
  ASH_7TH,
  BEATTY_NELSON,
  CAMBIE_1ST_N,
  CAMBIE_1ST_S,
  CAMBIE_2ND_N,
  CAMBIE_2ND_NW,
  CAMBIE_2ND_SE,
  CAMBIE_2ND_SW,
  CAMBIE_LOOP_2ND_N,
  CAMBIE_LOOP_2ND_S,
  CAMBIE_NB_ON_RAMP,
  CAMBIE_NB_ON_RAMP_JOIN,
  CAMBIE_PARKING_ENTRANCE,
  CAMBIE_SB_OFF_RAMP,
  CAMBIE_SPIRAL_BOTTOM,
  CAMBIE_SPIRAL_MIDDLE,
  MARINASIDE_SEAWALL,
  SMITHE_SMITHE_PATH,
  SPYGLASS_1ST,
  SPYGLASS_COMMODORE,
  SPYGLASS_LOOP_S,
  SPYGLASS_SEAWALL,
  YUKON_5TH,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const CAMBIE_BRIDGE = [
  {
    routes: [ROUTES.cambieBridge.name],
    description: "northbound side",
    directions: ["northbound"],
    videos: [VIDEOS.cambieBridgeSmithNb],
    elevated: true,
    positions: [
      CAMBIE_NB_ON_RAMP,
      [49.26698, -123.11447],
      [49.26719, -123.11457],
      CAMBIE_NB_ON_RAMP_JOIN,
      [49.26866, -123.11467],
      [49.26948, -123.11476],
      [49.26992, -123.11475],
      [49.27071, -123.11471],
      [49.27123, -123.11469],
      [49.27256, -123.11464],
      [49.27288, -123.1146],
      [49.27383, -123.11446],
      [49.27397, -123.11439],
      [49.27397, -123.11433],
      [49.27415, -123.11414],
      [49.27417, -123.1141],
      [49.27416, -123.11408],
      [49.27414, -123.11407],
      [49.27393, -123.11425],
      [49.2739, -123.11429],
      CAMBIE_SPIRAL_MIDDLE,
      [49.27389, -123.11454],
      [49.27392, -123.11455],
      [49.27422, -123.11455],
      [49.27465, -123.11452],
      [49.27495, -123.11447],
      [49.27532, -123.11445],
      [49.2754, -123.11452],
      SMITHE_SMITHE_PATH,
    ],
  },
  {
    description: "north connection to pacific",
    positions: [
      SMITHE_SMITHE_PATH,
      [49.27569, -123.11451],
      [49.27558, -123.11445],
      [49.2754, -123.11438],
      [49.27505, -123.1144],
      [49.27477, -123.11445],
      [49.27463, -123.11449],
      [49.27443, -123.1146],
      [49.27431, -123.11491],
      [49.27423, -123.11494],
      [49.27414, -123.11484],
      CAMBIE_SPIRAL_BOTTOM,
      [49.27364, -123.11465],
      [49.27359, -123.11476],
      MARINASIDE_SEAWALL,
    ],
  },
  {
    description: "north spiral connection",
    positions: [
      CAMBIE_SPIRAL_MIDDLE,
      [49.27413, -123.11412],
      [49.27411, -123.11403],
      [49.27384, -123.11427],
      CAMBIE_SPIRAL_BOTTOM,
    ],
  },
  {
    routes: [ROUTES.cambieBridge.name],
    description: "southbound side",
    directions: ["southbound"],
    videos: [VIDEOS.cambieBridgeNelsonSb],
    elevated: true,
    positions: [
      BEATTY_NELSON,
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
      CAMBIE_SB_OFF_RAMP,
    ],
  },
  {
    description: "connection to off-broadway via 2nd & ash",
    videos: [VIDEOS.cambieBridgeNelsonSb],
    positions: [
      ASH_7TH,
      ASH_2ND,
      [49.26601, -123.11743],
      [49.26608, -123.11743],
      [49.26608, -123.11704],
      [49.2661, -123.11677],
      [49.26614, -123.11654],
      CAMBIE_LOOP_2ND_N,
      [49.26634, -123.11593],
      [49.26639, -123.11581],
      CAMBIE_SB_OFF_RAMP,
    ],
  },
  {
    description: "2nd, north side, under bridge",
    positions: [
      CAMBIE_SB_OFF_RAMP,
      [49.2666, -123.11529],
      [49.26661, -123.11521],
      CAMBIE_2ND_NW,
      CAMBIE_2ND_N,
      [49.26694, -123.1145],
      CAMBIE_NB_ON_RAMP,
    ],
  },
  {
    description: "2nd, south side",
    positions: [
      ASH_2ND,
      [49.26578, -123.11622],
      [49.26581, -123.1161],
      [49.26591, -123.11591],
      [49.26601, -123.11566],
      [49.26617, -123.11533],
      [49.26627, -123.11503],
      CAMBIE_2ND_SW,
      [49.26654, -123.11457],
      [49.2666, -123.11451],
      CAMBIE_2ND_SE,
    ],
  },
  {
    description: "crossing 2nd, east side",
    videos: [VIDEOS.cambieBridgeSmithNb],
    positions: [CAMBIE_2ND_SE, [49.26668, -123.11444], CAMBIE_NB_ON_RAMP],
  },
  {
    description: "crossing 2nd, under",
    positions: [CAMBIE_2ND_NW, CAMBIE_2ND_SW],
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
    description: "northbound alt on-ramp",
    positions: [
      CAMBIE_NB_ON_RAMP_JOIN,
      [49.26739, -123.11456],
      [49.26754, -123.11455],
      [49.26758, -123.11456],
      [49.2678, -123.11458],
      [49.26785, -123.11471],
      CAMBIE_PARKING_ENTRANCE,
    ],
  },
  {
    description: "under bridge",
    positions: [
      CAMBIE_2ND_N,
      CAMBIE_PARKING_ENTRANCE,
      CAMBIE_1ST_S,
      CAMBIE_1ST_N,
    ],
  },
  {
    description: "beside bridge",
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
  //   directions: ["northbound"],
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
  //   directions: ["southbound"],
  //   positions: [SPYGLASS_SEAWALL, SPYGLASS_LOOP_S],
  // },
  {
    description: "connection 1st to spyglass",
    directions: ["northbound"],
    positions: [CAMBIE_1ST_N, [49.2682, -123.11514], SPYGLASS_1ST],
  },
  {
    description: "connection commodore from spyglass",
    positions: [SPYGLASS_1ST, SPYGLASS_COMMODORE],
  },
  {
    description: "connection to off-broadway via 5th",
    videos: [VIDEOS.cambieBridgeSmithNb],
    positions: [
      CAMBIE_2ND_SE,
      [49.26665, -123.11435],
      [49.26667, -123.11428],
      YUKON_5TH,
    ],
  },
];
