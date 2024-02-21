import {
  ARGYLE_KENT_N_E,
  BALACLAVA_CELTIC,
  BOUNDARY_FRASER_RIVER,
  ELLIOTT_KENT_PATH,
  GLADSTONE_KENT,
  KERR_FRASER_TRAIL,
  RIVER_DISTRICT_CROSSING_DETOUR_SPLIT,
  VICTORIA_KENT_N,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const FRASERVIEW_START = [49.20832, -123.07006];
const VICTORIA_FRASER_RIVER = [49.20683, -123.06619];
const VICTORIA_KENT_S = [49.20721, -123.06619];
const RIVER_DISTRICT_CROSSING_FRASER_RIVER = [49.20301, -123.03199];

const EAST_OF_ELLIOTT = [49.20553, -123.05646];

const DUDLEY_CREEK_W = [49.20234, -123.02829];
const DUDLEY_CREEK_E = [49.20222, -123.02782];

export const FRASER_RIVER_TRAIL = [
  {
    routeNames: [ROUTES.fraserRiverTrail.name],
    description: "southlands",
    type: "mixed",
    positions: [
      BALACLAVA_CELTIC,
      [49.21761, -123.17618],
      [49.21754, -123.17614],
      [49.21743, -123.17611],
      [49.21693, -123.17613],
      [49.21682, -123.17613],
      [49.21676, -123.17611],
      [49.21665, -123.17603],
      [49.21651, -123.17601],
      [49.21648, -123.17598],
      [49.21647, -123.17562],
      [49.21644, -123.17545],
      [49.21624, -123.17498],
      [49.21617, -123.1747],
      [49.21613, -123.17435],
      [49.21614, -123.1733],
      [49.21615, -123.17323],
      [49.21618, -123.17311],
      [49.21615, -123.17292],
      [49.21615, -123.17136],
      [49.21611, -123.17051],
      [49.21611, -123.17025],
      [49.21596, -123.16959],
      [49.21586, -123.16908],
      [49.21582, -123.16881],
      [49.21578, -123.16867],
      [49.21576, -123.16853],
      [49.21577, -123.16842],
      [49.21584, -123.16826],
      [49.21585, -123.16818],
      [49.21583, -123.16812],
      [49.21578, -123.16807],
      [49.21569, -123.16802],
      [49.21563, -123.16793],
      [49.21555, -123.16754],
      [49.21536, -123.16678],
      [49.21523, -123.16635],
      [49.21501, -123.16568],
      [49.21477, -123.1651],
      [49.2147, -123.16496],
      [49.21462, -123.16477],
      [49.21454, -123.16454],
      [49.21454, -123.16431],
    ],
  },
  {
    routeNames: [ROUTES.fraserRiverTrail.name],
    description: "marpole - fraser river park",
    type: "mixed",
    positions: [
      [49.21087, -123.15527],
      [49.21086, -123.15535],
      [49.21086, -123.1556],
      [49.21083, -123.15564],
      [49.21076, -123.15562],
      [49.21072, -123.15558],
      [49.21073, -123.15549],
      [49.2107, -123.1554],
      [49.2105, -123.15505],
      [49.21043, -123.15497],
      [49.21034, -123.15481],
      [49.20962, -123.15368],
      [49.20943, -123.15337],
      [49.20932, -123.15316],
      [49.20925, -123.15294],
      [49.20918, -123.15282],
      [49.20903, -123.15273],
      [49.20898, -123.15265],
      [49.20892, -123.15254],
      [49.20885, -123.15234],
      [49.20879, -123.15214],
      [49.2087, -123.15201],
      [49.20836, -123.15171],
      [49.20822, -123.15159],
      [49.2081, -123.1514],
      [49.20802, -123.15117],
      [49.20796, -123.15098],
      [49.20793, -123.15076],
      [49.20789, -123.15064],
      [49.2078, -123.15045],
      [49.20763, -123.15018],
      [49.20753, -123.15001],
      [49.20742, -123.1497],
      [49.20735, -123.14968],
      [49.20708, -123.14945],
    ],
  },
  {
    routeNames: [ROUTES.fraserRiverTrail.name],
    description: "marpole - hudson",
    type: "mixed",
    positions: [
      [49.20107, -123.13972],
      [49.20103, -123.13963],
      [49.20101, -123.13944],
      [49.20093, -123.13923],
      [49.20088, -123.13922],
      [49.20083, -123.13917],
      [49.2006, -123.13787],
      [49.20051, -123.13754],
      [49.20043, -123.13702],
      [49.20037, -123.13689],
      [49.20034, -123.13672],
      [49.20034, -123.13656],
      [49.20028, -123.13606],
      [49.20032, -123.1358],
      [49.20038, -123.1357],
      [49.20055, -123.13563],
      [49.20059, -123.13554],
    ],
  },
  {
    description: "victoria st connection path",
    type: "mixed",
    positions: [VICTORIA_FRASER_RIVER, VICTORIA_KENT_S],
  },
  {
    description: "victoria st connection road",
    type: "quiet",
    positions: [VICTORIA_KENT_S, VICTORIA_KENT_N],
  },
  {
    description: "from kent to fraserview portion",
    type: "shared",
    hideUnlessVideo: true,
    videoIds: [VIDEOS.fraserRiverFraserviewEb.id],
    positions: [
      ARGYLE_KENT_N_E,
      [49.20886, -123.07136],
      [49.20872, -123.07144],
      FRASERVIEW_START,
    ],
  },
  {
    routeNames: [ROUTES.fraserRiverTrail.name],
    description: "victoria-fraserview",
    type: "comfortable",
    videoIds: [VIDEOS.fraserRiverFraserviewEb.id],
    positions: [
      FRASERVIEW_START,
      [49.20826, -123.07009],
      [49.20794, -123.07006],
      [49.20776, -123.06989],
      [49.20756, -123.06972],
      [49.20746, -123.06953],
      [49.20741, -123.06929],
      [49.20738, -123.06906],
      [49.20734, -123.06889],
      [49.20723, -123.06871],
      [49.20718, -123.06858],
      [49.20715, -123.06845],
      [49.20717, -123.068],
      [49.20716, -123.06778],
      [49.20713, -123.06767],
      [49.2068, -123.0673],
      [49.20663, -123.0671],
      [49.20652, -123.06678],
      [49.20653, -123.06669],
      [49.20677, -123.06652],
      [49.20683, -123.06643],
      VICTORIA_FRASER_RIVER,
      [49.20681, -123.06601],
      [49.20675, -123.06593],
      [49.20627, -123.06594],
      [49.20624, -123.06589],
      [49.20623, -123.06535],
      [49.20618, -123.06507],
      [49.20619, -123.06461],
      [49.20617, -123.06447],
      [49.20608, -123.06436],
      [49.20596, -123.0642],
      [49.20588, -123.06404],
      [49.20586, -123.06388],
      [49.20587, -123.06374],
      [49.20593, -123.06352],
      [49.20597, -123.06336],
      [49.20598, -123.06328],
      [49.20599, -123.06293],
      [49.206, -123.0628],
      [49.20605, -123.06266],
      [49.20615, -123.06258],
      [49.20623, -123.06253],
      [49.20626, -123.06245],
      [49.20634, -123.06234],
      GLADSTONE_KENT,
    ],
  },
  {
    description: "river district kent connection",
    positions: [
      RIVER_DISTRICT_CROSSING_FRASER_RIVER,
      [49.20318, -123.03193],
      [49.20333, -123.03183],
      [49.20348, -123.03172],
      [49.20364, -123.03166],
      [49.20383, -123.03166],
      RIVER_DISTRICT_CROSSING_DETOUR_SPLIT,
    ],
  },
  {
    routeNames: [ROUTES.fraserRiverTrail.name],
    description: "river district - near elliott",
    type: "other",
    videoIds: [VIDEOS.fraserRiverFraserviewEb.id, VIDEOS.sunriseNb.id],
    videoIdsStartAtEnd: [VIDEOS.sunriseNb.id],
    positions: [
      ELLIOTT_KENT_PATH,
      [49.20571, -123.05676],
      [49.20571, -123.05693],
      [49.20564, -123.05692],
      [49.20563, -123.05676],
      [49.2056, -123.05667],
      EAST_OF_ELLIOTT,
    ],
  },
  {
    routeNames: [ROUTES.fraserRiverTrail.name],
    description: "fraserview - elliott to kerr",
    type: "comfortable",
    videoIds: [VIDEOS.fraserRiverFraserviewEb.id],
    videoIdsEndAtEnd: [VIDEOS.fraserRiverFraserviewEb.id],
    positions: [
      EAST_OF_ELLIOTT,
      [49.20554, -123.05569],
      [49.20561, -123.05524],
      [49.20566, -123.05469],
      [49.2057, -123.05417],
      [49.20571, -123.05396],
      [49.20575, -123.05364],
      [49.20577, -123.05341],
      [49.20576, -123.05331],
      [49.20572, -123.05323],
      [49.20567, -123.05318],
      [49.2056, -123.05312],
      [49.20555, -123.05304],
      [49.20551, -123.05294],
      [49.2055, -123.05283],
      [49.2055, -123.05256],
      [49.20548, -123.05245],
      [49.20543, -123.05226],
      [49.20539, -123.05209],
      [49.20537, -123.05192],
      [49.20536, -123.05176],
      [49.20538, -123.05155],
      [49.20541, -123.05139],
      [49.20545, -123.05124],
      [49.20547, -123.05107],
      [49.20547, -123.05093],
      [49.20545, -123.05081],
      [49.20541, -123.05068],
      [49.20537, -123.05057],
      [49.20535, -123.05046],
      [49.20535, -123.05032],
      [49.20535, -123.04902],
      [49.20538, -123.04814],
      [49.20542, -123.0479],
      [49.20543, -123.04692],
      [49.20539, -123.04655],
      [49.20539, -123.04635],
      [49.2055, -123.04578],
      [49.20551, -123.04554],
      [49.2055, -123.04514],
      [49.20564, -123.04459],
      [49.20565, -123.04441],
      [49.20562, -123.04424],
      [49.20548, -123.04387],
      [49.20545, -123.04374],
      [49.20546, -123.04363],
      [49.20566, -123.04315],
      [49.2057, -123.04304],
      [49.20572, -123.0429],
      [49.20569, -123.04271],
      KERR_FRASER_TRAIL,
    ],
  },
  {
    routeNames: [ROUTES.fraserRiverTrail.name],
    type: "mixed",
    description: "river district - kerr to boundary",
    positions: [
      KERR_FRASER_TRAIL,
      [49.20569, -123.0421],
      [49.20559, -123.04185],
      [49.20553, -123.04143],
      [49.20542, -123.04087],
      [49.20539, -123.04053],
      [49.20519, -123.0397],
      [49.20491, -123.03878],
      [49.20478, -123.03824],
      [49.20477, -123.03798],
      [49.20466, -123.03794],
      [49.20448, -123.03713],
      [49.20446, -123.03688],
      [49.20438, -123.0368],
      [49.20428, -123.03662],
      [49.20402, -123.03577],
      [49.20379, -123.03515],
      [49.20367, -123.03457],
      [49.2036, -123.0344],
      [49.2035, -123.0344],
      [49.20339, -123.0341],
      [49.20338, -123.03403],
      [49.2034, -123.03392],
      [49.20334, -123.03369],
      [49.20319, -123.03281],
      RIVER_DISTRICT_CROSSING_FRASER_RIVER,
      [49.20293, -123.03161],
      [49.20289, -123.03137],
      [49.20285, -123.03108],
      [49.20278, -123.03072],
      [49.20269, -123.03052],
      [49.20261, -123.03023],
      [49.20254, -123.02991],
      [49.20252, -123.02962],
      [49.20254, -123.02927],
      [49.20238, -123.02867],
      [49.20234, -123.02843],
      DUDLEY_CREEK_W,
      [49.20232, -123.02823],
      [49.20229, -123.02817],
      [49.20226, -123.02812],
      [49.20223, -123.028],
      [49.20223, -123.02787],
      DUDLEY_CREEK_E,
      [49.20206, -123.0268],
      [49.20197, -123.02615],
      [49.20183, -123.02543],
      [49.20176, -123.02487],
      [49.20171, -123.02463],
      [49.20148, -123.02368],
      BOUNDARY_FRASER_RIVER,
    ],
  },
  {
    routeNames: [ROUTES.fraserRiverTrail.name],
    description: "river district - dudley creek bump",
    type: "mixed",
    positions: [
      DUDLEY_CREEK_W,
      [49.20267, -123.0282],
      [49.20289, -123.02823],
      [49.20298, -123.02821],
      [49.20302, -123.02813],
      [49.20301, -123.02798],
      [49.20294, -123.02789],
      [49.20285, -123.02784],
      [49.20275, -123.02786],
      [49.20253, -123.02789],
      [49.20233, -123.0279],
      [49.20228, -123.02788],
      DUDLEY_CREEK_E,
    ],
  },
];
