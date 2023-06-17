// TODO: add missing values
// TODO: add missing routes
// TODO: break out into separate files
// convention: `all` is northbound, eastbound, or clockwise
const BIKE_ROUTE_DATA = [
  {
    name: "Haro",
    segments: [
      {
        name: undefined,
        videos: { eastbound: null, westbound: null },
        positions: {
          all: [
            [49.2932, -123.14023],
            [49.2931, -123.14021],
            [49.29303, -123.14013],
            [49.29302, -123.13998],
            [49.29267, -123.13939],
            [49.29177, -123.13795],
            [49.29075, -123.13642],
            [49.28975, -123.13485],
            [49.28873, -123.13332],
            [49.28796, -123.13208],
            [49.2872, -123.13094],
            [49.28632, -123.12956],
            [49.28531, -123.12799],
            [49.28492, -123.12744],
            [49.28393, -123.12583],
            [49.28365, -123.12549],
            [49.28327, -123.12522],
            [49.28289, -123.12506],
            [49.2826, -123.12483],
            [49.28231, -123.12447],
          ],
        },
      },
    ],
  },
  {
    name: "Masumi Mitsui Greenway",
    segments: [
      {
        name: undefined,
        videos: { eastbound: null, westbound: null },
        positions: {
          all: [
            [49.21773, -123.14829],
            [49.21768, -123.14384],
            [49.21766, -123.14157],
            [49.21761, -123.14113],
            [49.21752, -123.14075],
            [49.21747, -123.1405],
            [49.21747, -123.14029],
            [49.21747, -123.14015],
            [49.21737, -123.13978],
            [49.21735, -123.13965],
            [49.21738, -123.13954],
            [49.21736, -123.13943],
            [49.21738, -123.13933],
            [49.21735, -123.13778],
            [49.2173, -123.13544],
            [49.21725, -123.13406],
            [49.21716, -123.13133],
            [49.21711, -123.12933],
            [49.21706, -123.12719],
            [49.21702, -123.12457],
            [49.21703, -123.1239],
            [49.21699, -123.12007],
            [49.21696, -123.1171],
            [49.21699, -123.11705],
            [49.21699, -123.11661],
            [49.21783, -123.11658],
            [49.21782, -123.11346],
            [49.21777, -123.11333],
            [49.21777, -123.11279],
            [49.21774, -123.11248],
            [49.21776, -123.11185],
            [49.21771, -123.11109],
            [49.2177, -123.10967],
            [49.21767, -123.10732],
            [49.21767, -123.10669],
            [49.21769, -123.10645],
            [49.21769, -123.10622],
            [49.21683, -123.10624],
            [49.21677, -123.10195],
            [49.21665, -123.09781],
            [49.21653, -123.09099],
            [49.21646, -123.08549],
            [49.21641, -123.08162],
            [49.21641, -123.08082],
            [49.21643, -123.08008],
            [49.2164, -123.07705],
            [49.21639, -123.0746],
            [49.21634, -123.07403],
            [49.21629, -123.07188],
            [49.21678, -123.07179],
            [49.21716, -123.07163],
            [49.21739, -123.07146],
            [49.21735, -123.07125],
            [49.21709, -123.07026],
            [49.21749, -123.06981],
            [49.21775, -123.06931],
            [49.21789, -123.06892],
            [49.21803, -123.06833],
            [49.21806, -123.0678],
            [49.21806, -123.06591],
            [49.21801, -123.06331],
            [49.21797, -123.06074],
            [49.21798, -123.05783],
            [49.21797, -123.05696],
            [49.21788, -123.05651],
            [49.21778, -123.05613],
            [49.21762, -123.05579],
          ],
          eastbound: [
            [49.21762, -123.05579],
            [49.21734, -123.05541],
            [49.21711, -123.05522],
            [49.21696, -123.05514],
            [49.21709, -123.05446],
            [49.21715, -123.05374],
            [49.2171, -123.05201],
            [49.21706, -123.05059],
          ],
          westbound: [
            [49.21806, -123.05057],
            [49.21807, -123.05126],
            [49.21798, -123.05429],
            [49.2185, -123.05473],
            [49.21839, -123.055],
            [49.21812, -123.05518],
            [49.21793, -123.05534],
            [49.21762, -123.05579],
          ],
        },
      },
    ],
  },
  {
    name: "Cambie Bridge",
    segments: [
      {
        name: undefined,
        videos: { northbound: null, southbound: null },
        positions: {
          northbound: [
            [49.26668, -123.11444],
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
            [49.27577, -123.11472],
          ],
          southbound: [
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
            [49.26639, -123.11581],
            [49.26629, -123.11593],
            [49.26618, -123.11621],
            [49.26609, -123.11654],
            [49.26605, -123.11677],
            [49.26603, -123.11704],
            [49.26605, -123.11746],
            [49.26601, -123.11746],
          ],
        },
      },
    ],
  },
  {
    name: "Midtown",
    segments: [
      {
        name: "Vancouver",
        videos: { eastbound: null, westbound: null },
        positions: { all: [] },
      },
      {
        name: "Burnaby",
        videos: { eastbound: null, westbound: null },
        positions: { all: [] },
      },
    ],
  },
  {
    name: "Seaside",
    segments: [
      {
        name: "Coal Harbour",
        videos: { counterClockwise: null, clockwise: null },
        positions: { all: [] },
      },
      {
        name: "Stanley Park",
        videos: { counterClockwise: null, clockwise: null },
        positions: { all: [], counterClockwise: [], clockwise: [] },
      },
      {
        name: "False Creek",
        videos: { counterClockwise: null, clockwise: null },
        positions: { all: [] },
      },
      {
        name: "Point Grey / Spanish Banks",
        videos: { counterClockwise: null, clockwise: null },
        positions: { all: [] },
      },
    ],
  },
];

export { BIKE_ROUTE_DATA };
