import {
  ARBUTUS_WHYTE,
  BURRARD_1ST_E,
  BURRARD_1ST_W,
  BURRARD_PACIFIC_NE,
  BURRARD_PACIFIC_NW,
  BURRARD_PACIFIC_SE_E,
  BURRARD_PACIFIC_SE_W,
  BURRARD_PACIFIC_SW,
  CAMBIE_1ST_N,
  CARDERO_BEACH,
  CARRALL_EXPO_NE,
  CARRALL_EXPO_NW,
  CARRALL_PACIFIC_SE,
  CARRALL_PACIFIC_SW,
  CASTINGS_SEAWALL,
  CHESTNUT_1ST,
  CHESTNUT_YORK,
  CHILCO_BEACH,
  COLUMBIA_1ST_N,
  COLUMBIA_1ST_S,
  CYPRESS_1ST,
  CYPRESS_WHYTE,
  EXPO_UNION,
  GRANVILLE_SEABREEZE,
  HOMER_BEACH,
  HOMER_PACIFIC_N,
  HOMER_PACIFIC_S,
  HORNBY_BEACH,
  HORNBY_PACIFIC_NE,
  HORNBY_PACIFIC_SE,
  NELSON_PACIFIC_SE,
  ONTARIO_1ST_N,
  ONTARIO_1ST_NE,
  ONTARIO_1ST_S,
  ONTARIO_1ST_SE,
  QUEBEC_1ST_NE,
  QUEBEC_1ST_NW,
  QUEBEC_1ST_SE,
  QUEBEC_1ST_SW,
  QUEBEC_5TH,
  QUEBEC_KEEFER_E,
  QUEBEC_KEEFER_W,
  QUEBEC_SEAWALL,
  QUEBEC_UNION_NE,
  QUEBEC_UNION_NW,
  QUEBEC_UNION_SE,
  QUEBEC_UNION_SW,
  RICHARDS_BEACH,
  RICHARDS_PACIFIC_NE,
  RICHARDS_PACIFIC_SE,
  SEAWALL_BEACH,
  SEAWALL_DAVIE_E,
  SEAWALL_DAVIE_W,
  SEAWALL_WHYTE,
  SMITHE_EXPO_N,
  SPYGLASS_COMMODORE,
  THURLOW_SEAWALL,
  WALLACE_3RD,
  WALLACE_4TH_S,
  WYLIE_1ST_N,
  WYLIE_1ST_S,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const PARKING_LOT_ON_1ST = [49.27063, -123.14178];
const FIR_1ST_E = [49.27059, -123.14113];
const FIRST_AVE_SPLIT = [49.26817, -123.11428];

const BC_PLACE_TUNNEL_START = [49.27787, -123.11109];
const BC_PLACE_TUNNEL_END = [49.2765, -123.11398];
const SEYMOUR_PACIFIC = [49.27441, -123.12828];
const HOWE_PACIFIC = [49.27577, -123.13035];
const THURLOW_PACIFIC_N = [49.27832, -123.13436];
const THURLOW_PACIFIC_W = [49.27833, -123.13447];

const EASTBOUND_SPLIT_AT_BURRARD = [49.27704, -123.13263];
const QUEBEC_QUEBEC_NW = [49.27634, -123.10282];
const QUEBEC_QUEBEC_SW = [49.27628, -123.10277];
const QUEBEC_TERMINAL_SW = [49.27288, -123.10192];
const QUEBEC_3RD = [49.26822, -123.10276];

const JERVIS_BEACH_SW = [49.28071, -123.13823];
const BEACH_SPLIT = [49.28129, -123.13918];
const BEACH_JERVIS_SPLIT = [49.28052, -123.13843];
const THURLOW_BEACH = [49.27757, -123.13548];
const THURLOW_SEASIDE_PATH = [49.27751, -123.13542];
const GRANVILLE_BEACH = [49.2741, -123.13082];

const PACIFIC_DAVIE_NE = [49.27413, -123.12143];
const PACIFIC_DAVIE_NW = [49.27409, -123.12158];
const MARINASIDE_DAVIE_NW = [49.27309, -123.12002];
const MARINASIDE_DAVIE_NE = [49.27315, -123.11992];
const MARINASIDE_DAVIE_W = [49.27293, -123.11995];
const MARINASIDE_DAVIE_E = [49.27313, -123.11967];

const QUEBEC_PATH_SPLIT = [49.27621, -123.10287];
const QUEBEC_EXPO_SE = [49.2766, -123.10222];
const QUEBEC_EXPO_NE = [49.27671, -123.1023];

const CASTINGS_LAMEYS_MILL = [49.26646, -123.13076];

export const SEASIDE_BYPASS = [
  // connections
  {
    description: "chestnut",
    videos: [VIDEOS.yorkEb],
    positions: [CHESTNUT_1ST, CHESTNUT_YORK],
  },
  {
    oneWay: "required",
    description: "left onto burrard",
    positions: [EASTBOUND_SPLIT_AT_BURRARD, BURRARD_PACIFIC_SE_W],
  },
  {
    routes: [ROUTES.seasideBypass.name],
    description: "4th to 3rd",
    positions: [WALLACE_4TH_S, WALLACE_3RD],
  },
  {
    description: "quebec: 5th to 3rd",
    type: "unofficial",
    positions: [QUEBEC_3RD, QUEBEC_5TH],
  },
  // false creek south
  {
    routes: [ROUTES.seasideBypass.name],
    description: "cypress to fir",
    positions: [
      CYPRESS_1ST,
      CHESTNUT_1ST,
      BURRARD_1ST_W,
      BURRARD_1ST_E,
      [49.27064, -123.14312],
      PARKING_LOT_ON_1ST,
    ],
  },
  {
    routes: [ROUTES.seasideBypass.name],
    description: "1st to fir via parking lot",
    oneWay: "required",
    positions: [
      PARKING_LOT_ON_1ST,
      [49.27059, -123.14165],
      [49.27058, -123.14122],
      FIR_1ST_E,
    ],
  },
  {
    routes: [ROUTES.seasideBypass.name],
    description: "fir to 1st",
    oneWay: "recommended",
    positions: [
      FIR_1ST_E,
      [49.27085, -123.14139],
      [49.27072, -123.14156],
      PARKING_LOT_ON_1ST,
    ],
  },
  {
    routes: [ROUTES.seasideBypass.name],
    description: "false creek primary",
    positions: [
      FIR_1ST_E,
      [49.27051, -123.14104],
      [49.2704, -123.14094],
      [49.27031, -123.14086],
      [49.27024, -123.14083],
      [49.27015, -123.1408],
      [49.27004, -123.1408],
      [49.26971, -123.1408],
      [49.26968, -123.13914],
      [49.26966, -123.13892],
      [49.2696, -123.13862],
      [49.26957, -123.13846],
      [49.26951, -123.13823],
      [49.26945, -123.13802],
      [49.26942, -123.13792],
      [49.26935, -123.13775],
      [49.2693, -123.13765],
      [49.26922, -123.13757],
      [49.26893, -123.13746],
      [49.2688, -123.1374],
      [49.26868, -123.1373],
      [49.26848, -123.1371],
      [49.26834, -123.13695],
      [49.26817, -123.13674],
      [49.26804, -123.13654],
      [49.26791, -123.13635],
      [49.26779, -123.13612],
      [49.26773, -123.13599],
      [49.26765, -123.13575],
      [49.2676, -123.13556],
      [49.26754, -123.13537],
      [49.26718, -123.13413],
      [49.2671, -123.1338],
      [49.26698, -123.1333],
      [49.26676, -123.13248],
      [49.26669, -123.13209],
      [49.26661, -123.13167],
      [49.26649, -123.13096],
      CASTINGS_LAMEYS_MILL,
      [49.26643, -123.13045],
      [49.26641, -123.13006],
      [49.2664, -123.12943],
      [49.26638, -123.12873],
      [49.26637, -123.12829],
      [49.26635, -123.1277],
      [49.26629, -123.1276],
      [49.26627, -123.12734],
      [49.26624, -123.12636],
      [49.26622, -123.12512],
      [49.26621, -123.1241],
      [49.26618, -123.12274],
      [49.26618, -123.12151],
      [49.26619, -123.12098],
      [49.26624, -123.1207],
      [49.26625, -123.12055],
      [49.26641, -123.1205],
      [49.26647, -123.12045],
      [49.2665, -123.1204],
      [49.26652, -123.12033],
      [49.26654, -123.12021],
      [49.26654, -123.12009],
      [49.26654, -123.11983],
      [49.26656, -123.11973],
      [49.26668, -123.11941],
      [49.26674, -123.11923],
      [49.26686, -123.11885],
      [49.26695, -123.11835],
      [49.26699, -123.11796],
      [49.26688, -123.11778],
      [49.26683, -123.11765],
      [49.26683, -123.11754],
      [49.26684, -123.11746],
      [49.26734, -123.1165],
      [49.26784, -123.11549],
      SPYGLASS_COMMODORE,
      CAMBIE_1ST_N,
      [49.26819, -123.11478],
      [49.26819, -123.11468],
      [49.26818, -123.11457],
      [49.26816, -123.11438],
      FIRST_AVE_SPLIT,
    ],
  },
  {
    routes: [ROUTES.seasideBypass.name],
    description: "1st eb",
    oneWay: "required",
    positions: [
      FIRST_AVE_SPLIT,
      [49.26815, -123.11416],
      [49.26818, -123.11401],
      WYLIE_1ST_S,
      [49.26899, -123.11235],
      [49.26936, -123.11159],
      [49.26973, -123.11076],
      [49.27004, -123.11018],
      [49.27012, -123.11003],
      [49.27018, -123.10985],
      [49.27021, -123.1097],
      COLUMBIA_1ST_S,
      [49.27018, -123.10719],
      [49.27017, -123.10665],
      ONTARIO_1ST_S,
      ONTARIO_1ST_SE,
    ],
  },
  {
    routes: [ROUTES.seasideBypass.name],
    description: "1st wb",
    oneWay: "required",
    positions: [
      ONTARIO_1ST_NE,
      ONTARIO_1ST_N,
      [49.27033, -123.10667],
      COLUMBIA_1ST_N,
      [49.27039, -123.10964],
      [49.27038, -123.10977],
      [49.27036, -123.10989],
      [49.27033, -123.11],
      [49.27029, -123.1101],
      [49.26987, -123.11088],
      [49.2691, -123.11249],
      WYLIE_1ST_N,
      [49.26824, -123.11416],
      FIRST_AVE_SPLIT,
    ],
  },
  {
    routes: [ROUTES.seasideBypass.name, ROUTES.centralValleyGreenway.name],
    description: "1st ontario to quebec",
    oneWay: "required",
    positions: [ONTARIO_1ST_SE, QUEBEC_1ST_SW, QUEBEC_1ST_SE],
  },
  {
    routes: [ROUTES.seasideBypass.name, ROUTES.centralValleyGreenway.name],
    description: "1st quebec to ontario",
    oneWay: "required",
    positions: [QUEBEC_1ST_NW, ONTARIO_1ST_NE],
  },
  {
    description: "quebec 3rd to 1st",
    oneWay: "required",
    positions: [
      QUEBEC_3RD,
      [49.26828, -123.10268],
      [49.26871, -123.10265],
      [49.26886, -123.10258],
      [49.26892, -123.10255],
      [49.26896, -123.10254],
      [49.26901, -123.10254],
      [49.26911, -123.10252],
      [49.2693, -123.1025],
      QUEBEC_1ST_SE,
    ],
  },
  {
    routes: [ROUTES.seasideBypass.name],
    description: "quebec -> expo",
    oneWay: "required",
    positions: [
      QUEBEC_1ST_SE,
      QUEBEC_1ST_NE,
      [49.27053, -123.10242],
      [49.27088, -123.1023],
      [49.2712, -123.10216],
      [49.27188, -123.10179],
      [49.27224, -123.10165],
      [49.27243, -123.10163],
      [49.27287, -123.1016],
      [49.27311, -123.10158],
      [49.27381, -123.10155],
      [49.27413, -123.10158],
      [49.27487, -123.10178],
      [49.27504, -123.10182],
      [49.27606, -123.10205],
      [49.27635, -123.10212],
      [49.27655, -123.1022],
      QUEBEC_EXPO_SE,
      QUEBEC_EXPO_NE,
      [49.27678, -123.10236],
      [49.27689, -123.10244],
      [49.27699, -123.10253],
      [49.2771, -123.10265],
      [49.27722, -123.1028],
      [49.27732, -123.10294],
      [49.27741, -123.10309],
      [49.2775, -123.10329],
      [49.27758, -123.10348],
      EXPO_UNION,
    ],
  },
  {
    routes: [ROUTES.seasideBypass.name],
    description: "expo bi-directional",
    positions: [
      CARRALL_EXPO_NW,
      CARRALL_EXPO_NE,
      [49.27799, -123.1055],
      [49.27782, -123.10433],
      [49.27778, -123.10406],
      [49.27772, -123.10381],
      [49.27766, -123.1036],
      EXPO_UNION,
    ],
  },
  {
    routes: [ROUTES.seasideBypass.name],
    description: "expo pre-tunnel",
    oneWay: "required",
    elevation: -0.5,
    positions: [
      CARRALL_EXPO_NW,
      [49.27813, -123.10632],
      [49.27817, -123.10644],
      [49.27822, -123.10659],
      [49.27829, -123.10675],
      [49.27862, -123.10743],
      [49.27866, -123.10756],
      [49.2787, -123.10768],
      [49.27872, -123.10779],
      [49.27875, -123.10797],
      [49.27876, -123.10812],
      [49.27876, -123.1083],
      [49.27875, -123.10847],
      [49.27871, -123.10867],
      [49.27867, -123.10879],
      [49.27862, -123.10896],
      [49.27857, -123.10906],
      [49.27806, -123.11008],
      [49.27799, -123.11022],
      [49.27791, -123.11048],
      [49.27789, -123.11066],
      [49.27786, -123.11087],
      BC_PLACE_TUNNEL_START,
    ],
  },
  {
    routes: [ROUTES.seasideBypass.name],
    description: "bc place",
    oneWay: "required",
    elevation: -1,
    hideArrows: true,
    positions: [
      BC_PLACE_TUNNEL_START,
      [49.27789, -123.11137],
      [49.2779, -123.11151],
      [49.27791, -123.11166],
      [49.2779, -123.11179],
      [49.27788, -123.11192],
      [49.27786, -123.11206],
      [49.27784, -123.11217],
      [49.2778, -123.11233],
      [49.27771, -123.11257],
      [49.27762, -123.11279],
      [49.27754, -123.11294],
      [49.27736, -123.11329],
      [49.27724, -123.11348],
      [49.27713, -123.11363],
      [49.27703, -123.11373],
      [49.27696, -123.11379],
      [49.27687, -123.11384],
      BC_PLACE_TUNNEL_END,
    ],
  },
  {
    routes: [ROUTES.seasideBypass.name],
    description: "expo -> pacific",
    oneWay: "required",
    elevation: -0.5,
    positions: [
      BC_PLACE_TUNNEL_END,
      [49.27643, -123.11402],
      [49.27638, -123.11407],
      [49.27628, -123.11416],
      [49.27594, -123.11463],
      SMITHE_EXPO_N,
      [49.27575, -123.11487],
      [49.27544, -123.11526],
      [49.27497, -123.11591],
      [49.27472, -123.11627],
      [49.27463, -123.11642],
      [49.27458, -123.11653],
      [49.27452, -123.1167],
      [49.27449, -123.11683],
      [49.27447, -123.1169],
      [49.27446, -123.11699],
      [49.27445, -123.1171],
      [49.27445, -123.11725],
      [49.27445, -123.11737],
      [49.2745, -123.1178],
      [49.27457, -123.11826],
      [49.27461, -123.11853],
      [49.27462, -123.11879],
      [49.27462, -123.11909],
      [49.27461, -123.11928],
      [49.2746, -123.11941],
      [49.27458, -123.1196],
      [49.27454, -123.1198],
      [49.27449, -123.12001],
      [49.27429, -123.1208],
      PACIFIC_DAVIE_NE,
      PACIFIC_DAVIE_NW,
      [49.27387, -123.1224],
      [49.27351, -123.12375],
      [49.27329, -123.12456],
      [49.27324, -123.12477],
      [49.27321, -123.12492],
      [49.27318, -123.1251],
      [49.27317, -123.12533],
      [49.27316, -123.12548],
      [49.27316, -123.12558],
      HOMER_PACIFIC_N,
      [49.27321, -123.12611],
      [49.27325, -123.1263],
      [49.2733, -123.12647],
      [49.27338, -123.12668],
      [49.27345, -123.12683],
      [49.27353, -123.12696],
      RICHARDS_PACIFIC_NE,
      [49.27385, -123.12745],
      SEYMOUR_PACIFIC,
    ],
  },
  {
    routes: [ROUTES.seasideBypass.name],
    description: "wb under granville",
    oneWay: "required",
    type: "uncomfortable",
    positions: [
      SEYMOUR_PACIFIC,
      [49.27472, -123.12875],
      [49.27491, -123.12904],
      [49.27534, -123.12969],
      [49.27552, -123.12997],
      [49.27572, -123.13028],
      HOWE_PACIFIC,
    ],
  },
  {
    routes: [ROUTES.seasideBypass.name],
    description: "wb around burrard",
    oneWay: "required",
    positions: [
      HOWE_PACIFIC,
      HORNBY_PACIFIC_NE,
      BURRARD_PACIFIC_NE,
      BURRARD_PACIFIC_NW,
      [49.27737, -123.13286],
      [49.27781, -123.13356],
      THURLOW_PACIFIC_N,
      THURLOW_PACIFIC_W,
    ],
  },
  {
    routes: [ROUTES.seasideBypass.name],
    description: "pacific eb",
    oneWay: "required",
    positions: [
      THURLOW_PACIFIC_W,
      [49.27825, -123.13445],
      [49.27822, -123.13443],
      [49.2778, -123.1338],
      [49.27726, -123.13305],
      [49.27717, -123.13295],
      [49.27705, -123.13288],
      BURRARD_PACIFIC_SW,
      [49.27698, -123.1328],
      EASTBOUND_SPLIT_AT_BURRARD,
      [49.27689, -123.13243],
      BURRARD_PACIFIC_SE_E,
      [49.2766, -123.13204],
      HORNBY_PACIFIC_SE,
      [49.27594, -123.13101],
      [49.27561, -123.13055],
      [49.27556, -123.13048],
      [49.27531, -123.13011],
      [49.27452, -123.12891],
      [49.27427, -123.12853],
      [49.27413, -123.12832],
      [49.27384, -123.12787],
      RICHARDS_PACIFIC_SE,
      [49.27341, -123.12719],
      [49.27338, -123.12708],
      [49.27334, -123.12701],
      [49.27322, -123.12676],
      [49.27314, -123.12654],
      [49.27305, -123.12621],
      HOMER_PACIFIC_S,
      [49.27298, -123.12576],
      [49.27297, -123.1254],
      [49.27299, -123.12516],
      [49.27303, -123.12488],
      [49.27311, -123.12451],
      [49.27336, -123.12356],
      [49.27359, -123.12268],
      [49.27394, -123.12135],
      [49.27399, -123.12117],
      [49.27423, -123.12027],
      [49.2743, -123.11999],
      [49.27438, -123.11959],
      [49.27441, -123.11931],
      [49.27442, -123.11882],
      [49.27441, -123.11866],
      [49.2744, -123.11847],
      [49.27429, -123.11787],
      [49.2741, -123.11677],
      [49.27405, -123.11639],
      [49.27402, -123.11608],
      [49.27403, -123.11566],
      [49.27406, -123.11534],
      [49.2741, -123.11503],
      NELSON_PACIFIC_SE,
      [49.27417, -123.11476],
      [49.27429, -123.11437],
      [49.27435, -123.11423],
      [49.27435, -123.11415],
      [49.27433, -123.114],
      [49.27433, -123.11392],
      [49.27458, -123.11329],
      [49.27474, -123.11294],
      [49.27481, -123.11282],
      [49.27506, -123.11236],
      [49.27549, -123.1115],
      [49.2759, -123.11068],
      [49.27622, -123.11004],
      [49.27656, -123.1093],
      [49.27675, -123.10889],
      [49.27686, -123.10864],
      [49.27697, -123.10827],
      [49.27704, -123.10794],
      [49.27707, -123.10769],
      [49.27708, -123.10732],
      CARRALL_PACIFIC_SW,
      CARRALL_PACIFIC_SE,
      [49.27702, -123.10425],
      [49.27701, -123.10403],
      [49.27696, -123.1038],
      [49.27688, -123.10354],
      [49.27677, -123.10332],
      [49.27659, -123.1031],
      QUEBEC_QUEBEC_NW,
    ],
  },
  {
    routes: [ROUTES.seasideBypass.name],
    description: "quebec sb no lane",
    oneWay: "required",
    type: "uncomfortable",
    positions: [
      QUEBEC_QUEBEC_NW,
      QUEBEC_QUEBEC_SW,
      [49.27618, -123.10266],
      [49.27601, -123.10249],
      [49.27586, -123.10236],
      [49.27575, -123.1023],
      [49.27561, -123.10225],
      [49.27503, -123.10208],
      [49.27436, -123.10193],
      [49.27425, -123.10191],
      [49.27407, -123.10188],
      [49.27394, -123.10187],
      [49.27358, -123.10189],
      [49.27313, -123.10192],
      QUEBEC_TERMINAL_SW,
    ],
  },
  {
    routes: [ROUTES.seasideBypass.name],
    description: "quebec sb lane",
    oneWay: "required",
    positions: [
      QUEBEC_TERMINAL_SW,
      [49.27255, -123.10191],
      [49.27207, -123.102],
      [49.27179, -123.10213],
      [49.27127, -123.10242],
      [49.27104, -123.1026],
      [49.27091, -123.10266],
      [49.27068, -123.10272],
      [49.27039, -123.10277],
      QUEBEC_1ST_NW,
    ],
  },
  {
    description: "quebec 1st to 3rd",
    oneWay: "required",
    positions: [
      QUEBEC_1ST_NW,
      QUEBEC_1ST_SW,
      [49.27006, -123.10276],
      [49.26971, -123.10277],
      [49.26932, -123.10278],
      [49.26908, -123.1028],
      [49.26871, -123.10281],
      [49.26828, -123.10283],
      QUEBEC_3RD,
    ],
  },
  {
    routes: [ROUTES.seasideBypass.name],
    description: "pacific: beach to burrard",
    type: "uncomfortable",
    positions: [
      JERVIS_BEACH_SW,
      [49.2807, -123.13814],
      [49.27969, -123.13658],
      THURLOW_PACIFIC_W,
    ],
  },
  {
    routes: [ROUTES.seasideBypass.name],
    description: "beach: to jervis",
    positions: [
      [49.29035, -123.14566],
      [49.29017, -123.14537],
      CHILCO_BEACH,
      [49.28859, -123.1429],
      [49.28853, -123.14282],
      [49.28835, -123.14259],
      [49.28826, -123.1425],
      [49.28818, -123.14244],
      [49.28804, -123.14242],
      [49.28763, -123.1424],
      [49.28719, -123.14235],
      [49.28704, -123.14236],
      [49.28693, -123.14243],
      [49.28682, -123.14251],
      [49.28664, -123.14253],
      [49.28657, -123.14251],
      [49.28629, -123.14256],
      [49.2852, -123.1428],
      [49.28472, -123.14287],
      [49.28462, -123.14287],
      [49.28445, -123.14283],
      [49.28416, -123.14267],
      [49.28367, -123.14234],
      [49.28324, -123.14206],
      CARDERO_BEACH,
      [49.28284, -123.14154],
      [49.28233, -123.14072],
      [49.28154, -123.13952],
      [49.28136, -123.13927],
      BEACH_SPLIT,
      [49.28112, -123.13889],
      JERVIS_BEACH_SW,
    ],
  },
  // other bypasses
  {
    description: "beach-beach",
    positions: [BEACH_JERVIS_SPLIT, JERVIS_BEACH_SW],
  },
  {
    description: "beach: beach to hornby",
    positions: [
      BEACH_SPLIT,
      [49.2807, -123.1386],
      BEACH_JERVIS_SPLIT,
      [49.28041, -123.13832],
      [49.27991, -123.13781],
      [49.27926, -123.13715],
      THURLOW_BEACH,
      THURLOW_SEASIDE_PATH,
      [49.27688, -123.13479],
      [49.27642, -123.13436],
      [49.27614, -123.13406],
      [49.27608, -123.13398],
      [49.276, -123.13384],
      [49.27538, -123.1329],
      HORNBY_BEACH,
    ],
  },
  {
    description: "beach: hornby to granville",
    type: "unofficial",
    positions: [HORNBY_BEACH, [49.27473, -123.13183], GRANVILLE_BEACH],
  },
  {
    description: "under granville bridge",
    positions: [GRANVILLE_BEACH, GRANVILLE_SEABREEZE],
  },
  {
    description: "beach east of granville",
    positions: [
      GRANVILLE_BEACH,
      [49.27343, -123.1298],
      [49.27335, -123.12967],
      [49.27333, -123.12963],
      [49.27329, -123.12954],
      [49.27325, -123.12941],
      [49.27324, -123.12935],
      [49.27325, -123.12924],
      [49.27325, -123.12916],
      [49.27328, -123.12906],
      [49.27329, -123.12895],
      [49.2733, -123.12883],
      [49.27329, -123.12871],
      [49.27327, -123.12862],
      [49.27325, -123.12852],
      [49.27321, -123.12842],
      RICHARDS_BEACH,
      [49.27311, -123.12827],
      [49.27307, -123.12823],
      [49.27301, -123.12818],
      [49.27297, -123.12817],
      [49.27291, -123.12814],
      [49.27286, -123.12814],
      [49.2728, -123.12814],
      [49.27274, -123.12816],
      [49.27262, -123.1282],
      [49.27255, -123.1282],
      [49.27248, -123.12819],
      [49.27243, -123.12816],
      [49.2724, -123.12814],
      [49.27227, -123.12798],
      [49.27187, -123.12739],
      HOMER_BEACH,
      SEAWALL_BEACH,
    ],
  },
  {
    description: "thurlow: seawall to beach",
    isClosed: true,
    positions: [
      THURLOW_SEAWALL,
      [49.27732, -123.13606],
      [49.27732, -123.13582],
      [49.27736, -123.13563],
      THURLOW_SEASIDE_PATH,
    ],
  },
  {
    description: "thurlow: beach to pacific",
    positions: [THURLOW_BEACH, THURLOW_PACIFIC_N],
  },
  {
    description: "davie: pacific to marinaside and back",
    oneWay: "required",
    positions: [
      PACIFIC_DAVIE_NW,
      MARINASIDE_DAVIE_NW,
      [49.27304, -123.12003],
      [49.27298, -123.12001],
      MARINASIDE_DAVIE_W,
      [49.2729, -123.11989],
      [49.27289, -123.11982],
      [49.27291, -123.11971],
      [49.27296, -123.11963],
      [49.27302, -123.11961],
      [49.27308, -123.11962],
      MARINASIDE_DAVIE_E,
      [49.27316, -123.11976],
      [49.27316, -123.11981],
      MARINASIDE_DAVIE_NE,
      PACIFIC_DAVIE_NE,
    ],
  },
  {
    description: "davie/marinaside circle completion",
    oneWay: "required",
    hideArrows: true,
    positions: [MARINASIDE_DAVIE_NE, MARINASIDE_DAVIE_NW],
  },
  {
    description: "davie: west connection to seawall",
    positions: [
      SEAWALL_DAVIE_W,
      [49.27277, -123.11987],
      [49.27281, -123.11992],
      MARINASIDE_DAVIE_W,
    ],
  },
  {
    description: "davie: east connection to seawall",
    positions: [
      MARINASIDE_DAVIE_E,
      [49.27312, -123.11957],
      [49.27314, -123.11951],
      SEAWALL_DAVIE_E,
    ],
  },
  {
    description: "seawall to quebec/pacific",
    positions: [
      QUEBEC_SEAWALL,
      [49.27565, -123.10301],
      [49.27564, -123.10245],
      [49.27567, -123.10238],
      [49.27574, -123.10239],
      [49.27585, -123.10249],
      QUEBEC_PATH_SPLIT,
    ],
  },
  {
    description: "quebec connection to union nb",
    oneWay: "required",
    positions: [
      QUEBEC_PATH_SPLIT,
      QUEBEC_QUEBEC_SW,
      [49.27633, -123.10267],
      [49.27642, -123.10247],
      [49.27651, -123.10232],
      QUEBEC_EXPO_SE,
      [49.27669, -123.10215],
      [49.27681, -123.1021],
      [49.2769, -123.10209],
      QUEBEC_UNION_SE,
      QUEBEC_UNION_NE,
      [49.27792, -123.10208],
      [49.27865, -123.10209],
      [49.27887, -123.10209],
      [49.27903, -123.1021],
      [49.27915, -123.10212],
      QUEBEC_KEEFER_E,
    ],
  },
  {
    description: "quebec connection from union sb",
    oneWay: "required",
    positions: [
      QUEBEC_KEEFER_W,
      [49.27916, -123.10221],
      [49.2791, -123.1022],
      [49.279, -123.10218],
      [49.27866, -123.10218],
      QUEBEC_UNION_NW,
      QUEBEC_UNION_SW,
      [49.27717, -123.10223],
      [49.27688, -123.10224],
      [49.2768, -123.10225],
      QUEBEC_EXPO_NE,
      [49.2766, -123.10239],
      [49.27641, -123.10272],
      QUEBEC_QUEBEC_NW,
      [49.27628, -123.10289],
      [49.27623, -123.10289],
      QUEBEC_PATH_SPLIT,
    ],
  },
  {
    description: "castings connection",
    positions: [
      CASTINGS_SEAWALL,
      [49.26687, -123.13127],
      [49.2667, -123.13085],
      [49.26664, -123.13079],
      [49.26659, -123.13074],
      CASTINGS_LAMEYS_MILL,
    ],
  },
  {
    routes: [ROUTES.seasideBypass.name],
    description: "whyte",
    positions: [
      ARBUTUS_WHYTE,
      [49.27538, -123.15009],
      CYPRESS_WHYTE,
      [49.27531, -123.14623],
      [49.27531, -123.14593],
      [49.2753, -123.14574],
      [49.27526, -123.14558],
      [49.27521, -123.14545],
      [49.27513, -123.14523],
      [49.27508, -123.14507],
      [49.27506, -123.14492],
      [49.27503, -123.14467],
      [49.27503, -123.14435],
      [49.27507, -123.14405],
      [49.27513, -123.14378],
      [49.27521, -123.14352],
      [49.27547, -123.14295],
      SEAWALL_WHYTE,
    ],
  },
];
