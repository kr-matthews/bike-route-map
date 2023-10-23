import {
  BURRARD_DUNSMUIR,
  CARDERO_GEORGIA_N,
  CARDERO_GEORGIA_S,
  CHILCO_GEORGIA_S,
  DENMAN_GEORGIA_N,
  HORNBY_DUNSMUIR,
  JERVIS_PENDER,
  LIONS_GATE_KLAHANIE,
  LIONS_GATE_SPIRIT_TRAIL_E,
  LIONS_GATE_SPIRIT_TRAIL_W,
  NICOLA_GEORGIA,
  NICOLA_PENDER,
  STANLEY_PARK_LOOP_CAUSEWAY_UNDERPASS_SPLIT,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const NORTHBOUND_ELEVATED_START = [49.31196, -123.14164];
const NORTHBOUND_ELEVATED_END = [49.32399, -123.13058];
const SOUTHBOUND_ELEVATED_START = [49.32405, -123.13074];
const SOUTHBOUND_ELEVATED_END = [49.31204, -123.14182];

const NORTHBOUND_LAGOON_OVERPASS_START = [49.29476, -123.13659];
const NORTHBOUND_LAGOON_OVERPASS_END = [49.2951, -123.1366];
const SOUTHBOUND_LAGOON_OVERPASS_START = [49.29501, -123.137];
const SOUTHBOUND_LAGOON_OVERPASS_END = [49.29457, -123.13689];

const NORTHBOUND_CAR_OVERPASS_START = [49.29714, -123.13652];
const NORTHBOUND_CAR_OVERPASS_END = [49.29747, -123.1368];
const SOUTHBOUND_CAR_OVERPASS_START = [49.29732, -123.13697];
const SOUTHBOUND_CAR_OVERPASS_END = [49.29703, -123.13672];

const NORTHBOUND_OFF_RAMP_SPLIT = [49.32551, -123.12856];
const SOUTHBOUND_ON_RAMP_MERGE = [49.32494, -123.13028];

const NORTHBOUND_ON_PATH_1 = [49.29646, -123.1361];
const NORTHBOUND_ON_PATH_2 = [49.29793, -123.13745];
const SOUTHBOUND_OFF_TRAIL = [49.29807, -123.13803];

export const LIONS_GATE_BRIDGE = [
  // connections
  {
    description: "lagoon dr off-trail",
    oneWay: "required",
    positions: [
      SOUTHBOUND_OFF_TRAIL,
      [49.29778, -123.1377],
      [49.29751, -123.13737],
      [49.29725, -123.13709],
      [49.29717, -123.13695],
    ],
  },
  {
    description: "lagoon dr on-path",
    oneWay: "recommended",
    positions: [
      [49.29744, -123.13644],
      [49.29749, -123.13648],
      [49.29775, -123.13647],
      [49.29785, -123.13665],
      [49.2979, -123.13682],
      [49.29794, -123.13704],
      [49.29794, -123.13719],
      [49.29792, -123.13729],
      NORTHBOUND_ON_PATH_2,
    ],
  },
  {
    description: "lagoon path on-path",
    oneWay: "recommended",
    positions: [
      STANLEY_PARK_LOOP_CAUSEWAY_UNDERPASS_SPLIT,
      [49.29521, -123.1364],
      [49.29612, -123.13591],
      [49.29625, -123.13596],
      [49.2964, -123.13597],
      [49.29646, -123.136],
      NORTHBOUND_ON_PATH_1,
    ],
  },

  // northbound
  {
    description: "melville",
    oneWay: "required",
    videos: [VIDEOS.lionsGateBridgeNb],
    positions: [
      HORNBY_DUNSMUIR,
      BURRARD_DUNSMUIR,
      [49.28561, -123.11944],
      [49.28577, -123.11971],
      [49.28591, -123.11999],
      [49.28599, -123.12036],
      [49.28609, -123.12114],
      [49.28614, -123.12137],
      [49.28627, -123.1217],
      [49.28648, -123.12201],
      [49.28789, -123.12418],
      [49.28855, -123.12525],
      [49.28883, -123.12567],
      [49.28895, -123.12566],
      JERVIS_PENDER,
    ],
  },
  {
    description: "pender",
    oneWay: "required",
    type: "uncomfortable",
    videos: [VIDEOS.lionsGateBridgeNb],
    positions: [
      JERVIS_PENDER,
      [49.28962, -123.12737],
      NICOLA_PENDER,
      [49.29034, -123.12987],
      CARDERO_GEORGIA_N,
    ],
  },
  {
    description: "georgia westbound",
    oneWay: "required",
    elevation: 0.5,
    videos: [VIDEOS.lionsGateBridgeNb],
    positions: [
      CARDERO_GEORGIA_N,
      [49.29164, -123.13209],
      DENMAN_GEORGIA_N,
      [49.29374, -123.13532],
      [49.29444, -123.13629],
      [49.2946, -123.13649],
      NORTHBOUND_LAGOON_OVERPASS_START,
    ],
  },
  {
    routeNames: [ROUTES.lionsGate.name],
    description: "nb lagoon overpass",
    oneWay: "required",
    elevation: 1,
    videos: [VIDEOS.lionsGateBridgeNb],
    positions: [
      NORTHBOUND_LAGOON_OVERPASS_START,
      [49.29494, -123.13662],
      NORTHBOUND_LAGOON_OVERPASS_END,
    ],
  },
  {
    routeNames: [ROUTES.lionsGate.name],
    description: "northbound between overpasses",
    oneWay: "required",
    elevation: 0.5,
    videos: [VIDEOS.lionsGateBridgeNb],
    positions: [
      NORTHBOUND_LAGOON_OVERPASS_END,
      [49.29593, -123.13612],
      [49.29615, -123.13602],
      [49.2963, -123.1361],
      NORTHBOUND_ON_PATH_1,
      [49.29657, -123.13614],
      [49.29684, -123.13627],
      NORTHBOUND_CAR_OVERPASS_START,
    ],
  },
  {
    routeNames: [ROUTES.lionsGate.name],
    description: "northbound car overpass",
    oneWay: "required",
    elevation: 1,
    videos: [VIDEOS.lionsGateBridgeNb],
    positions: [NORTHBOUND_CAR_OVERPASS_START, NORTHBOUND_CAR_OVERPASS_END],
  },
  {
    routeNames: [ROUTES.lionsGate.name],
    description: "northbound causeway",
    oneWay: "required",
    elevation: 0.5,
    videos: [VIDEOS.lionsGateBridgeNb],
    positions: [
      NORTHBOUND_CAR_OVERPASS_END,
      [49.29765, -123.13698],
      NORTHBOUND_ON_PATH_2,
      [49.29809, -123.13779],
      [49.29849, -123.13883],
      [49.29883, -123.13976],
      [49.29919, -123.1406],
      [49.29956, -123.14127],
      [49.30009, -123.14208],
      [49.30056, -123.1427],
      [49.30126, -123.14353],
      [49.30195, -123.14414],
      [49.3026, -123.14455],
      [49.30319, -123.14486],
      [49.30378, -123.1451],
      [49.30432, -123.1452],
      [49.30524, -123.14523],
      [49.30624, -123.14513],
      [49.30742, -123.14481],
      [49.30839, -123.1444],
      [49.30893, -123.14411],
      [49.30921, -123.14391],
      [49.30929, -123.14386],
      [49.30963, -123.14363],
      [49.30975, -123.1436],
      [49.31035, -123.14312],
      [49.31092, -123.1426],
      [49.31144, -123.14212],
      [49.31174, -123.14166],
      NORTHBOUND_ELEVATED_START,
    ],
  },
  {
    routeNames: [ROUTES.lionsGate.name],
    description: "northbound bridge",
    oneWay: "required",
    elevation: 1,
    videos: [VIDEOS.lionsGateBridgeNb],
    positions: [
      NORTHBOUND_ELEVATED_START,
      [49.31206, -123.14155],
      [49.3124, -123.14124],
      [49.31369, -123.14006],
      [49.3162, -123.13776],
      [49.31831, -123.13583],
      [49.32069, -123.13363],
      [49.32326, -123.13126],
      NORTHBOUND_ELEVATED_END,
    ],
  },
  {
    routeNames: [ROUTES.lionsGate.name],
    description: "northbound post-bridge",
    oneWay: "required",
    elevation: 0.5,
    videos: [VIDEOS.lionsGateBridgeNb],
    positions: [
      NORTHBOUND_ELEVATED_END,
      [49.32508, -123.1295],
      [49.32524, -123.1293],
      [49.32539, -123.12901],
      [49.32548, -123.12877],
      NORTHBOUND_OFF_RAMP_SPLIT,
    ],
  },

  // southbound
  {
    routeNames: [ROUTES.lionsGate.name],
    description: "southbound pre-bridge",
    oneWay: "required",
    elevation: 0.5,
    videos: [VIDEOS.lionsGateBridgeSb],
    positions: [SOUTHBOUND_ON_RAMP_MERGE, SOUTHBOUND_ELEVATED_START],
  },
  {
    routeNames: [ROUTES.lionsGate.name],
    description: "southbound bridge",
    oneWay: "required",
    elevation: 1,
    videos: [VIDEOS.lionsGateBridgeSb],
    positions: [
      SOUTHBOUND_ELEVATED_START,
      [49.32344, -123.1313],
      [49.32199, -123.13265],
      [49.31867, -123.13574],
      [49.31539, -123.13875],
      SOUTHBOUND_ELEVATED_END,
    ],
  },
  {
    routeNames: [ROUTES.lionsGate.name],
    description: "southbound causeway",
    oneWay: "required",
    elevation: 0.5,
    videos: [VIDEOS.lionsGateBridgeSb],
    positions: [
      SOUTHBOUND_ELEVATED_END,
      [49.31192, -123.14201],
      [49.31152, -123.14231],
      [49.31085, -123.14292],
      [49.30996, -123.14371],
      [49.30979, -123.1438],
      [49.30895, -123.14434],
      [49.30785, -123.14485],
      [49.3067, -123.14522],
      [49.30565, -123.14539],
      [49.30458, -123.14541],
      [49.30376, -123.14529],
      [49.30277, -123.14491],
      [49.30175, -123.14425],
      [49.30094, -123.14346],
      [49.2999, -123.14211],
      [49.29919, -123.14092],
      [49.29861, -123.13963],
      SOUTHBOUND_OFF_TRAIL,
      [49.29785, -123.13758],
      [49.29761, -123.13726],
      SOUTHBOUND_CAR_OVERPASS_START,
    ],
  },
  {
    routeNames: [ROUTES.lionsGate.name],
    description: "southbound causeway car overpass",
    oneWay: "required",
    elevation: 1,
    videos: [VIDEOS.lionsGateBridgeSb],
    positions: [SOUTHBOUND_CAR_OVERPASS_START, SOUTHBOUND_CAR_OVERPASS_END],
  },
  {
    routeNames: [ROUTES.lionsGate.name],
    description: "southbound causeway between overpasses",
    oneWay: "required",
    elevation: 0.5,
    videos: [VIDEOS.lionsGateBridgeSb],
    positions: [
      SOUTHBOUND_CAR_OVERPASS_END,
      [49.29663, -123.13653],
      [49.29644, -123.13645],
      [49.29625, -123.13642],
      [49.29597, -123.13652],
      [49.2953, -123.13692],
      SOUTHBOUND_LAGOON_OVERPASS_START,
    ],
  },
  {
    routeNames: [ROUTES.lionsGate.name],
    description: "southbound lagoon overpass",
    oneWay: "required",
    elevation: 1,
    videos: [VIDEOS.lionsGateBridgeSb],
    positions: [
      SOUTHBOUND_LAGOON_OVERPASS_START,
      [49.29478, -123.13698],
      SOUTHBOUND_LAGOON_OVERPASS_END,
    ],
  },
  {
    routeNames: [ROUTES.lionsGate.name],
    description: "southbound lagoon overpass to chilco",
    oneWay: "required",
    elevation: 0.5,
    videos: [VIDEOS.lionsGateBridgeSb],
    positions: [SOUTHBOUND_LAGOON_OVERPASS_END, CHILCO_GEORGIA_S],
  },
  {
    description: "georgia eastbound",
    oneWay: "required",
    videos: [VIDEOS.lionsGateBridgeSb],
    positions: [
      CHILCO_GEORGIA_S,
      [49.29353, -123.13537],
      [49.29257, -123.13383],
      [49.29155, -123.13225],
      CARDERO_GEORGIA_S,
      NICOLA_GEORGIA,
    ],
  },
  {
    description: "connection to marine eastbound",
    oneWay: "required",
    positions: [
      NORTHBOUND_OFF_RAMP_SPLIT,
      [49.32559, -123.12836],
      [49.3256, -123.12812],
      [49.32558, -123.12785],
      [49.32547, -123.12725],
      [49.32543, -123.12677],
    ],
  },
  {
    description: "connection to spirit",
    videos: [VIDEOS.lionsGateBridgeNb],
    positions: [
      NORTHBOUND_OFF_RAMP_SPLIT,
      [49.3246, -123.12935],
      [49.32413, -123.13004],
      [49.32363, -123.13051],
      [49.32354, -123.13068],
      LIONS_GATE_SPIRIT_TRAIL_E,
    ],
  },
  {
    description: "connection from spirit",
    videos: [VIDEOS.lionsGateBridgeSb],
    positions: [
      SOUTHBOUND_ON_RAMP_MERGE,
      [49.32492, -123.13036],
      [49.32432, -123.13075],
      LIONS_GATE_SPIRIT_TRAIL_W,
    ],
  },
  {
    description: "connection around loops",
    positions: [
      SOUTHBOUND_ON_RAMP_MERGE,
      [49.32518, -123.13012],
      [49.32528, -123.12996],
      [49.32565, -123.12974],
      [49.32585, -123.12977],
      [49.326, -123.12983],
      [49.32622, -123.13009],
      [49.32635, -123.1304],
      [49.3263, -123.13049],
      [49.32645, -123.13105],
      [49.3265, -123.13109],
      [49.32664, -123.13103],
      [49.32679, -123.13093],
      [49.32691, -123.1308],
      [49.32692, -123.13067],
      [49.32687, -123.13039],
      [49.32664, -123.12932],
      [49.3271, -123.12895],
      [49.3272, -123.12859],
      [49.32713, -123.12768],
      [49.32701, -123.12729],
      [49.32684, -123.12705],
      LIONS_GATE_KLAHANIE,
    ],
  },
  {
    description: "connection from marine westbound",
    oneWay: "required",
    positions: [
      [49.32547, -123.12615],
      [49.32557, -123.1264],
      [49.3257, -123.12667],
      [49.32583, -123.12689],
      [49.32603, -123.12699],
      [49.32622, -123.12699],
      [49.32647, -123.12695],
      LIONS_GATE_KLAHANIE,
    ],
  },
];
