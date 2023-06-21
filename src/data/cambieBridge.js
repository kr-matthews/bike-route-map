import { ASH_7TH, YUKON_5TH } from "./intersections";
import { VIDEOS } from "./videos";

export const CAMBIE_BRIDGE = {
  name: "Cambie Bridge",
  legs: [
    {
      videos: {
        northbound: VIDEOS.cambieBridgeSmithNb,
        southbound: VIDEOS.cambieBridgeNelsonSb,
      },
      segments: [
        // TODO: add missing segments: crossing 2nd under bridge; all north end
        {
          description: "ash",
          videos: ["southbound"],
          directions: ["northbound", "southbound", "eastbound", "westbound"],
          positions: [
            ASH_7TH,
            [49.26579, -123.11742],
            [49.26601, -123.11743],
            [49.26608, -123.11743],
          ],
        },
        {
          description: "north side of 2nd, west of bridge",
          videos: ["southbound"],
          directions: ["northbound", "southbound", "eastbound", "westbound"],
          positions: [
            [49.26608, -123.11743],
            [49.26608, -123.11704],
            [49.2661, -123.11677],
            [49.26614, -123.11654],
            [49.26623, -123.11621],
            [49.26634, -123.11593],
            [49.26639, -123.11581],
            [49.26661, -123.11534],
          ],
        },
        {
          description: "north side of 2nd, under bridge",
          videos: [],
          directions: ["northbound", "southbound", "eastbound", "westbound"],
          positions: [
            [49.26662, -123.11535],
            [49.2666, -123.11529],
            [49.26661, -123.11521],
            [49.26677, -123.11485],
            [49.26694, -123.1145],
            [49.26695, -123.11447],
          ],
        },
        {
          description: "crossing 2nd, east side",
          videos: ["northbound"],
          directions: ["northbound", "southbound", "eastbound", "westbound"],
          positions: [
            [49.26666, -123.11446],
            [49.26668, -123.11444],
            [49.26695, -123.11447],
          ],
        },
        {
          description: "crossing 2nd, west side",
          videos: [],
          directions: ["northbound", "southbound", "eastbound", "westbound"],
          positions: [
            [49.26591, -123.11591],
            [49.26599, -123.11603],
            [49.26614, -123.11614],
            [49.26623, -123.11621],
          ],
        },
        {
          description: "northbound ramp",
          videos: [],
          directions: ["northbound", "southbound", "eastbound", "westbound"],
          positions: [
            [49.26737, -123.11459],
            [49.26739, -123.11456],
            [49.26754, -123.11455],
            [49.26758, -123.11456],
            [49.2678, -123.11458],
            [49.26785, -123.11471],
            [49.26787, -123.11487],
          ],
        },
        {
          description: "under bridge",
          videos: [],
          directions: ["northbound", "southbound", "eastbound", "westbound"],
          positions: [
            [49.26677, -123.11485],
            [49.26787, -123.11487],
            [49.26812, -123.11487],
          ],
        },
        {
          description: "south side of 2nd",
          videos: [],
          directions: ["northbound", "southbound", "eastbound", "westbound"],
          positions: [
            [49.26579, -123.11742],
            [49.26578, -123.11622],
            [49.26581, -123.1161],
            [49.26591, -123.11591],
            [49.26601, -123.11566],
            [49.26617, -123.11533],
            [49.26627, -123.11503],
            [49.26648, -123.1147],
            [49.26654, -123.11457],
            [49.2666, -123.11451],
            [49.26666, -123.11446],
          ],
        },
        {
          description: "5th",
          videos: ["northbound"],
          directions: ["northbound", "southbound", "eastbound", "westbound"],
          positions: [
            [49.26666, -123.11446],
            [49.26665, -123.11435],
            [49.26667, -123.11428],
            YUKON_5TH,
          ],
        },
        {
          description: "bridge north",
          onTop: true,
          directions: ["northbound"],
          positions: [
            [49.26695, -123.11447],
            [49.26698, -123.11447],
            [49.26719, -123.11457],
            [49.26738, -123.1146],
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
            [49.27389, -123.11434],
            [49.27389, -123.11454],
            [49.27392, -123.11455],
            [49.27422, -123.11455],
            [49.27465, -123.11452],
            [49.27495, -123.11447],
            [49.27536, -123.11445],
            [49.27542, -123.11449],
            [49.27544, -123.11452],
            [49.27547, -123.11458],
            [49.2756, -123.11463],
            [49.27578, -123.1147],
          ],
        },
        {
          description: "bridge south",
          onTop: true,
          directions: ["southbound"],
          positions: [
            [49.27541, -123.11725],
            [49.27452, -123.11587],
            [49.27428, -123.11551],
            [49.27408, -123.1153],
            [49.27386, -123.11514],
            [49.27361, -123.11502],
            [49.27337, -123.11497],
            [49.27294, -123.11497],
            [49.27264, -123.11497],
            [49.27184, -123.11503],
            [49.27105, -123.11506],
            [49.27019, -123.11511],
            [49.26926, -123.11515],
            [49.2683, -123.11519],
            [49.26793, -123.1152],
            [49.26762, -123.11519],
            [49.26735, -123.11516],
            [49.26713, -123.11518],
            [49.26694, -123.11524],
            [49.26688, -123.11529],
            [49.26681, -123.11538],
            [49.26675, -123.11541],
            [49.26669, -123.11538],
            [49.26661, -123.11534],
          ],
        },
      ],
    },
  ],
};
