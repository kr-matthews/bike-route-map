import {
  BURRARD_DUNSMUIR,
  CARDERO_GEORGIA_N,
  CARDERO_GEORGIA_S,
  CHILCO_GEORGIA_S,
  DENMAN_GEORGIA_N,
  HORNBY_DUNSMUIR,
  LIONS_GATE_KLAHANIE,
  LIONS_GATE_SPIRIT_TRAIL_E,
  LIONS_GATE_SPIRIT_TRAIL_W,
  NICOLA_GEORGIA,
  NICOLA_PENDER,
  STANLEY_PARK_LOOP_CAUSEWAY_UNDERPASS_SPLIT,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const JERVIS_PENDER = [49.28908, -123.12549];

const NORTHBOUND_ELEVATED_START = [49.31196, -123.14164];
const NORTHBOUND_ELEVATED_END = [49.32399, -123.13057];
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

const NORTHBOUND_OFF_RAMP_SPLIT = [49.3255, -123.12855];
const SOUTHBOUND_ON_RAMP_MERGE = [49.32494, -123.13028];

const NORTHBOUND_ON_PATH_1 = [49.29646, -123.1361];
const NORTHBOUND_ON_PATH_2 = [49.29793, -123.13745];
const SOUTHBOUND_OFF_TRAIL = [49.29807, -123.13804];

export const LIONS_GATE_BRIDGE = [
  // connections
  {
    description: "lagoon dr off-trail",
    type: "dedicated",
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
    type: "mixed",
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
    type: "mixed",
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
    type: "painted",
    oneWay: "required",
    videos: [VIDEOS.lionsGateBridgeNb.id],
    videosStartAtStart: [VIDEOS.lionsGateBridgeNb.id],
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
    type: "shared",
    oneWay: "required",
    videos: [VIDEOS.lionsGateBridgeNb.id],
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
    type: "painted",
    oneWay: "required",
    elevation: 0.5,
    videos: [VIDEOS.lionsGateBridgeNb.id],
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
    type: "painted",
    oneWay: "required",
    elevation: 1,
    videos: [VIDEOS.lionsGateBridgeNb.id],
    positions: [
      NORTHBOUND_LAGOON_OVERPASS_START,
      [49.29494, -123.13662],
      NORTHBOUND_LAGOON_OVERPASS_END,
    ],
  },
  {
    routeNames: [ROUTES.lionsGate.name],
    description: "northbound between overpasses 1",
    type: "painted",
    oneWay: "required",
    elevation: 0.5,
    videos: [VIDEOS.lionsGateBridgeNb.id],
    positions: [
      NORTHBOUND_LAGOON_OVERPASS_END,
      [49.29593, -123.13612],
      [49.29615, -123.13602],
      [49.2963, -123.1361],
      NORTHBOUND_ON_PATH_1,
    ],
  },
  {
    routeNames: [ROUTES.lionsGate.name],
    description: "northbound between overpasses 2",
    type: "mixed",
    oneWay: "required",
    elevation: 0.5,
    videos: [VIDEOS.lionsGateBridgeNb.id],
    positions: [
      NORTHBOUND_ON_PATH_1,
      [49.29657, -123.13614],
      [49.29684, -123.13627],
      NORTHBOUND_CAR_OVERPASS_START,
    ],
  },
  {
    routeNames: [ROUTES.lionsGate.name],
    description: "northbound car overpass",
    type: "mixed",
    oneWay: "required",
    elevation: 1,
    videos: [VIDEOS.lionsGateBridgeNb.id],
    positions: [NORTHBOUND_CAR_OVERPASS_START, NORTHBOUND_CAR_OVERPASS_END],
  },
  {
    routeNames: [ROUTES.lionsGate.name],
    description: "northbound causeway",
    oneWay: "required",
    elevation: 0.5,
    videos: [VIDEOS.lionsGateBridgeNb.id],
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
    videos: [VIDEOS.lionsGateBridgeNb.id],
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
    videos: [VIDEOS.lionsGateBridgeNb.id],
    positions: [
      NORTHBOUND_ELEVATED_END,
      [49.32445, -123.13009],
      [49.32515, -123.12944],
      [49.32524, -123.12931],
      [49.32532, -123.12907],
      [49.32543, -123.12892],
      [49.3255, -123.12875],
      [49.32551, -123.12868],
      [49.32551, -123.12862],
      NORTHBOUND_OFF_RAMP_SPLIT,
    ],
  },

  // southbound
  {
    routeNames: [ROUTES.lionsGate.name],
    description: "southbound pre-bridge",
    oneWay: "required",
    elevation: 0.5,
    videos: [VIDEOS.lionsGateBridgeSb.id],
    positions: [
      SOUTHBOUND_ON_RAMP_MERGE,
      [49.32466, -123.13041],
      SOUTHBOUND_ELEVATED_START,
    ],
  },
  {
    routeNames: [ROUTES.lionsGate.name],
    description: "southbound bridge",
    oneWay: "required",
    elevation: 1,
    videos: [VIDEOS.lionsGateBridgeSb.id],
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
    videos: [VIDEOS.lionsGateBridgeSb.id],
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
    ],
  },
  {
    routeNames: [ROUTES.lionsGate.name],
    description: "southbound causeway painted",
    type: "painted",
    oneWay: "required",
    videos: [VIDEOS.lionsGateBridgeSb.id],
    positions: [
      SOUTHBOUND_OFF_TRAIL,
      [49.29785, -123.13758],
      [49.29761, -123.13726],
      SOUTHBOUND_CAR_OVERPASS_START,
    ],
  },
  {
    routeNames: [ROUTES.lionsGate.name],
    description: "southbound causeway car overpass",
    type: "painted",
    oneWay: "required",
    elevation: 1,
    videos: [VIDEOS.lionsGateBridgeSb.id],
    positions: [SOUTHBOUND_CAR_OVERPASS_START, SOUTHBOUND_CAR_OVERPASS_END],
  },
  {
    routeNames: [ROUTES.lionsGate.name],
    description: "southbound causeway between overpasses",
    type: "painted",
    oneWay: "required",
    elevation: 0.5,
    videos: [VIDEOS.lionsGateBridgeSb.id],
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
    type: "painted",
    oneWay: "required",
    elevation: 1,
    videos: [VIDEOS.lionsGateBridgeSb.id, VIDEOS.chilcoSb.id],
    videosStartAtStart: [VIDEOS.chilcoSb.id],
    positions: [
      SOUTHBOUND_LAGOON_OVERPASS_START,
      [49.29478, -123.13698],
      SOUTHBOUND_LAGOON_OVERPASS_END,
    ],
  },
  {
    routeNames: [ROUTES.lionsGate.name],
    description: "southbound lagoon overpass to chilco",
    type: "painted",
    oneWay: "required",
    elevation: 0.5,
    videos: [VIDEOS.lionsGateBridgeSb.id, VIDEOS.chilcoSb.id],
    positions: [SOUTHBOUND_LAGOON_OVERPASS_END, CHILCO_GEORGIA_S],
  },
  {
    description: "georgia eastbound",
    oneWay: "required",
    type: "painted",
    videos: [VIDEOS.lionsGateBridgeSb.id],
    videosEndAtEnd: [VIDEOS.lionsGateBridgeSb.id],
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
    videos: [VIDEOS.lionsGateBridgeNb.id],
    videosEndAtEnd: [VIDEOS.lionsGateBridgeNb.id],
    positions: [
      NORTHBOUND_OFF_RAMP_SPLIT,
      [49.32459, -123.12934],
      [49.32418, -123.12998],
      [49.32366, -123.13048],
      [49.32357, -123.13061],
      [49.32352, -123.13079],
      LIONS_GATE_SPIRIT_TRAIL_E,
    ],
  },
  {
    description: "connection from spirit",
    videos: [VIDEOS.lionsGateBridgeSb.id],
    // !! actually starts a bit early (but spirit not added yet)
    videosStartAtStart: [VIDEOS.lionsGateBridgeSb.id],
    positions: [
      LIONS_GATE_SPIRIT_TRAIL_W,
      [49.32432, -123.13075],
      [49.32492, -123.13036],
      SOUTHBOUND_ON_RAMP_MERGE,
    ],
  },
  {
    description: "connection around loops",
    positions: [
      SOUTHBOUND_ON_RAMP_MERGE,
      [49.32518, -123.13013],
      [49.32525, -123.12999],
      [49.32547, -123.12982],
      [49.32563, -123.12975],
      [49.32583, -123.12977],
      [49.32601, -123.12985],
      [49.32617, -123.13002],
      [49.32629, -123.13022],
      [49.32636, -123.1304],
      [49.3263, -123.13048],
      [49.32637, -123.1308],
      [49.32646, -123.13106],
      [49.32652, -123.13109],
      [49.32682, -123.13091],
      [49.32689, -123.13083],
      [49.32693, -123.13072],
      [49.32688, -123.13042],
      [49.3268, -123.13],
      [49.32665, -123.12949],
      [49.32664, -123.12942],
      [49.32664, -123.12933],
      [49.32667, -123.12928],
      [49.32706, -123.12899],
      [49.32714, -123.12881],
      [49.32716, -123.12871],
      [49.32719, -123.1286],
      [49.32719, -123.12841],
      [49.32714, -123.128],
      [49.32712, -123.12765],
      [49.32706, -123.12738],
      [49.32697, -123.12719],
      [49.32685, -123.12705],
      LIONS_GATE_KLAHANIE,
    ],
  },
  {
    description: "connection from marine westbound",
    oneWay: "required",
    positions: [
      [49.32546, -123.12603],
      [49.32551, -123.12617],
      [49.32561, -123.12645],
      [49.32566, -123.12661],
      [49.32578, -123.12683],
      [49.32588, -123.12694],
      [49.326, -123.127],
      [49.32614, -123.12701],
      [49.32636, -123.12696],
      [49.32647, -123.12695],
      [49.32669, -123.12685],
      LIONS_GATE_KLAHANIE,
    ],
  },
  {
    description: "connection to klahanie",
    positions: [
      LIONS_GATE_KLAHANIE,
      [49.32669, -123.12661],
      [49.32651, -123.12594],
      [49.3265, -123.12579],
    ],
  },
];
