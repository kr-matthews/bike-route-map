import {
  ARBUTUS_WHYTE,
  BALACLAVA_POINT_GREY,
  BURRARD_CANADA_PLACE,
  CARDERO_SEAWALL_N,
  CARDERO_SEAWALL_S,
  CARRALL_SEAWALL,
  CASTINGS_SEAWALL,
  CHESTNUT_OGDEN,
  CHILCO_SEAWALL,
  CYPRESS_OGDEN,
  DENMAN_GEORGIA_N,
  FIR_1ST_N,
  GRANVILLE_SEABREEZE,
  HIGHBURY_POINT_GREY,
  HORNBY_SEABREEZE,
  MARINASIDE_SEAWALL,
  MARINE_SEAWALL,
  MARINE_SEAWALL_CONNECTION_1,
  MARINE_SEAWALL_CONNECTION_2,
  ONTARIO_PATH_SEASIDE,
  PINE_1ST,
  QUEBEC_SEAWALL,
  SEASIDE_W_END,
  SEAWALL_BEACH,
  SEAWALL_DAVIE_E,
  SEAWALL_DAVIE_W,
  STANLEY_PARK_LOOP_JOIN_E,
  SEAWALL_WATERFRONT,
  SEAWALL_WHYTE,
  SPYGLASS_SEAWALL,
  STANLEY_PARK_LANE_BEACH,
  STANLEY_PARK_LOOP_SPLIT_W,
  STEPHENS_POINT_GREY,
  THIRD_SEASIDE,
  THURLOW_SEAWALL,
  TRAFALGAR_POINT_GREY,
  COLUMBIA_SEAWALL,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const SEASIDE_POINT_GREY_W = [49.27133, -123.19079];
const SEASIDE_WHYTE_E = [49.27631, -123.14042];
const CREEKSIDE_1ST = [49.2714, -123.14019];
const FIR_1ST_NW = [49.27089, -123.14144];

const DENMAN_SEAWALL = [49.29345, -123.13229];

const SEAWALL_STANLEY_PARK_WEST_END = [49.29031, -123.14571];
const SEAWALL_UNDER_BURRARD_N = [49.27587, -123.13547];

const MID_CONVENTION_CENTER = [49.28962, -123.11524];
const NORTH_OF_CANADA_PLACE = [49.28832, -123.11518];
const WEST_OF_COLUMBIA = [49.27181, -123.11004];
const EAST_OF_TRAFALGAR = [49.27359, -123.16412];
const EAST_OF_SPYGLASS = [49.2712, -123.11435];

// !! connections: bc place? to confirm

export const SEASIDE = [
  // connections
  {
    description: "seaside bypass end",
    positions: [SEAWALL_STANLEY_PARK_WEST_END, STANLEY_PARK_LANE_BEACH],
  },
  {
    description: "denman",
    positions: [DENMAN_GEORGIA_N, [49.29341, -123.13255], DENMAN_SEAWALL],
  },
  {
    description: "road/path connection",
    positions: [FIR_1ST_NW, FIR_1ST_N],
  },
  {
    description: "1st/fir connection",
    positions: [
      PINE_1ST,
      [49.27067, -123.14319],
      [49.27066, -123.14179],
      [49.27074, -123.14161],
      FIR_1ST_NW,
      [49.27098, -123.14133],
      [49.27102, -123.14126],
      [49.27108, -123.14114],
      [49.27117, -123.14092],
      [49.2714, -123.14028],
      CREEKSIDE_1ST,
    ],
  },
  // sections
  {
    routeNames: [ROUTES.seaside.name],
    description: "spanish banks & jericho",
    positions: [
      SEASIDE_W_END,
      [49.27875, -123.23615],
      [49.27871, -123.23593],
      [49.27874, -123.23533],
      [49.27882, -123.23497],
      [49.27925, -123.23387],
      [49.27927, -123.23371],
      [49.27927, -123.2335],
      [49.27922, -123.23337],
      [49.27918, -123.23325],
      [49.27898, -123.23183],
      [49.27891, -123.23152],
      [49.27889, -123.23133],
      [49.27888, -123.23091],
      [49.27882, -123.23045],
      [49.27867, -123.22896],
      [49.27861, -123.2286],
      [49.27859, -123.22816],
      [49.27856, -123.22792],
      [49.27851, -123.22767],
      [49.27842, -123.2275],
      [49.27823, -123.22725],
      [49.27813, -123.22709],
      [49.27803, -123.22687],
      [49.27793, -123.22657],
      [49.27788, -123.22631],
      [49.27782, -123.22591],
      [49.27777, -123.22546],
      [49.27766, -123.22392],
      [49.2776, -123.22319],
      [49.27737, -123.22295],
      [49.27733, -123.2229],
      [49.27731, -123.22283],
      MARINE_SEAWALL_CONNECTION_1,
      [49.2773, -123.22273],
      [49.27734, -123.22255],
      [49.27739, -123.22227],
      [49.27739, -123.22216],
      [49.2773, -123.22183],
      [49.27724, -123.22146],
      [49.27683, -123.21961],
      [49.27668, -123.21859],
      [49.27662, -123.21773],
      [49.27657, -123.21742],
      [49.27654, -123.217],
      [49.27645, -123.21622],
      [49.27643, -123.21585],
      [49.27639, -123.21557],
      [49.27634, -123.21546],
      [49.27619, -123.2153],
      [49.27606, -123.2151],
      MARINE_SEAWALL_CONNECTION_2,
      [49.276, -123.21474],
      [49.27596, -123.21372],
      [49.27587, -123.21343],
      [49.27567, -123.21301],
      [49.27552, -123.21255],
      [49.27534, -123.21172],
      [49.27521, -123.21135],
      [49.2751, -123.21095],
      [49.27493, -123.20995],
      [49.27488, -123.20943],
      [49.27491, -123.20811],
      [49.27495, -123.20773],
      [49.27497, -123.20729],
      [49.27494, -123.20715],
      [49.27489, -123.20668],
      [49.27492, -123.20643],
      [49.27501, -123.20582],
      MARINE_SEAWALL,
      [49.27497, -123.20548],
      [49.27499, -123.20508],
      [49.27526, -123.20348],
      [49.27527, -123.20318],
      [49.2753, -123.20296],
      [49.27543, -123.20263],
      [49.27547, -123.20252],
      [49.27549, -123.20239],
      [49.27548, -123.20222],
      [49.27533, -123.20174],
      [49.2752, -123.20154],
      [49.27506, -123.20149],
      [49.27492, -123.20143],
      [49.27474, -123.20127],
      [49.27458, -123.2011],
      [49.27447, -123.2009],
      [49.27432, -123.20053],
      [49.27427, -123.20026],
      [49.27425, -123.19996],
      [49.27427, -123.19952],
      [49.27416, -123.19933],
      [49.27407, -123.19902],
      [49.27404, -123.19869],
      [49.27405, -123.19825],
      [49.27403, -123.19806],
      [49.27392, -123.19766],
      [49.27385, -123.19751],
      [49.2737, -123.19731],
      [49.27355, -123.19725],
      [49.27334, -123.19711],
      [49.27317, -123.19698],
      [49.27294, -123.19665],
      [49.27247, -123.19544],
      [49.27233, -123.19504],
      [49.27199, -123.19411],
      [49.27177, -123.19362],
      THIRD_SEASIDE,
    ],
  },
  {
    routeNames: [ROUTES.seaside.name],
    description: "jericho/kits overlap",
    videos: [VIDEOS.seasideKitsWb],
    videosEndAtStart: [VIDEOS.seasideKitsWb],
    positions: [
      THIRD_SEASIDE,
      [49.27172, -123.19274],
      [49.27134, -123.19088],
      SEASIDE_POINT_GREY_W,
    ],
  },
  {
    routeNames: [ROUTES.seaside.name],
    description: "kits: point grey to trafalgar",
    videos: [VIDEOS.seasideKitsWb],
    positions: [
      SEASIDE_POINT_GREY_W,
      [49.27165, -123.18951],
      [49.2723, -123.18763],
      HIGHBURY_POINT_GREY,
      [49.27237, -123.18734],
      [49.27235, -123.18567],
      [49.27229, -123.18552],
      [49.27228, -123.18515],
      [49.27227, -123.18508],
      [49.27226, -123.18455],
      [49.27218, -123.18387],
      [49.27215, -123.18352],
      [49.27195, -123.1816],
      [49.27176, -123.17976],
      [49.27173, -123.17941],
      [49.27153, -123.17759],
      [49.27142, -123.17657],
      [49.27137, -123.17648],
      [49.27136, -123.17641],
      [49.27136, -123.17624],
      [49.27135, -123.17619],
      [49.27129, -123.17599],
      [49.27133, -123.17554],
      [49.27116, -123.17388],
      BALACLAVA_POINT_GREY,
      [49.27112, -123.17344],
      [49.27108, -123.171],
      [49.27106, -123.16986],
      [49.27112, -123.16928],
      [49.2712, -123.16896],
      [49.27136, -123.16849],
      [49.27163, -123.16783],
      [49.27168, -123.16777],
      [49.27186, -123.16729],
      [49.27189, -123.16717],
      STEPHENS_POINT_GREY,
      [49.27276, -123.16499],
      TRAFALGAR_POINT_GREY,
    ],
  },
  {
    routeNames: [ROUTES.seaside.name],
    description: "kits - bit near trafalgar",
    videos: [VIDEOS.seasideKitsWb, VIDEOS.valleySb],
    videosStartAtEnd: [VIDEOS.valleySb],
    positions: [
      TRAFALGAR_POINT_GREY,
      [49.27338, -123.16434],
      [49.27347, -123.1643],
      EAST_OF_TRAFALGAR,
    ],
  },
  {
    routeNames: [ROUTES.seaside.name],
    description: "kits - trafalgar to whyte",
    videos: [VIDEOS.seasideKitsWb],
    videosStartAtEnd: [VIDEOS.seasideKitsWb],
    positions: [
      EAST_OF_TRAFALGAR,
      [49.2736, -123.16393],
      [49.27357, -123.16206],
      [49.27355, -123.16014],
      [49.27351, -123.15996],
      [49.27343, -123.15981],
      [49.27332, -123.15971],
      [49.2731, -123.15969],
      [49.27277, -123.15898],
      [49.2727, -123.1551],
      [49.27274, -123.15499],
      [49.27328, -123.15488],
      [49.2733, -123.1546],
      [49.27335, -123.15448],
      [49.27343, -123.15282],
      [49.2734, -123.15274],
      [49.2734, -123.15261],
      [49.27464, -123.15256],
      ARBUTUS_WHYTE,
      [49.27584, -123.1515],
      [49.27586, -123.15144],
      [49.27626, -123.15109],
      [49.27625, -123.15007],
      [49.27713, -123.15003],
      [49.27719, -123.14998],
      [49.27721, -123.14991],
      [49.27693, -123.1483],
      CYPRESS_OGDEN,
      [49.2768, -123.14746],
      CHESTNUT_OGDEN,
      [49.27725, -123.14617],
      [49.27729, -123.14609],
      [49.2774, -123.14587],
      [49.27752, -123.14573],
      [49.27772, -123.14562],
      [49.27811, -123.14543],
      [49.27846, -123.14525],
      [49.27856, -123.14515],
      [49.27863, -123.14502],
      [49.27867, -123.1449],
      [49.27871, -123.14475],
      [49.27872, -123.1446],
      [49.27873, -123.14443],
      [49.27872, -123.14417],
      [49.27871, -123.144],
      [49.27864, -123.14359],
      [49.2785, -123.14298],
      [49.27841, -123.14268],
      [49.27833, -123.14246],
      [49.27825, -123.14231],
      [49.27791, -123.14188],
      [49.2778, -123.14173],
      [49.27766, -123.14143],
      [49.27756, -123.14124],
      [49.27746, -123.14113],
      [49.27735, -123.14102],
      [49.27645, -123.14044],
      SEASIDE_WHYTE_E,
      SEAWALL_WHYTE,
    ],
  },
  {
    routeNames: [ROUTES.seaside.name],
    description: "false creek south: whyte to spyglass",
    positions: [
      SEAWALL_WHYTE,
      [49.27524, -123.14003],
      [49.27519, -123.14004],
      [49.27487, -123.13983],
      [49.27475, -123.13982],
      [49.27464, -123.13974],
      [49.27446, -123.1396],
      [49.27421, -123.13952],
      [49.27411, -123.1395],
      [49.27406, -123.13949],
      [49.27401, -123.1395],
      [49.27396, -123.13953],
      [49.27392, -123.13958],
      [49.27389, -123.13963],
      [49.27385, -123.13972],
      [49.27384, -123.14012],
      [49.27382, -123.14025],
      [49.27367, -123.14046],
      [49.27328, -123.14057],
      [49.27283, -123.14078],
      [49.27276, -123.14081],
      [49.27267, -123.14083],
      [49.27254, -123.1408],
      [49.27146, -123.1402],
      CREEKSIDE_1ST,
      [49.27137, -123.1402],
      [49.27134, -123.14019],
      [49.27128, -123.14019],
      [49.27113, -123.14006],
      [49.2711, -123.13999],
      [49.2712, -123.13953],
      [49.2712, -123.13944],
      [49.27116, -123.13938],
      [49.27106, -123.13929],
      [49.27091, -123.13911],
      [49.27089, -123.13903],
      [49.2709, -123.13893],
      [49.27093, -123.13877],
      [49.27092, -123.13867],
      [49.27089, -123.13859],
      [49.27085, -123.13853],
      [49.2708, -123.13847],
      [49.27071, -123.13842],
      [49.27067, -123.13835],
      [49.27065, -123.13826],
      [49.27066, -123.13818],
      [49.27067, -123.13807],
      [49.27066, -123.13801],
      [49.27064, -123.13796],
      [49.27049, -123.13769],
      [49.27045, -123.13765],
      [49.27023, -123.13765],
      [49.27017, -123.13763],
      [49.27015, -123.1376],
      [49.27004, -123.1374],
      [49.27004, -123.13733],
      [49.27006, -123.13722],
      [49.26987, -123.13692],
      [49.26978, -123.13684],
      [49.26975, -123.13673],
      [49.26975, -123.13662],
      [49.26975, -123.13652],
      [49.26974, -123.13639],
      [49.26971, -123.13629],
      [49.26932, -123.13574],
      [49.26922, -123.13567],
      [49.2689, -123.13557],
      [49.26882, -123.13549],
      [49.26876, -123.13539],
      [49.26861, -123.13525],
      [49.26851, -123.13504],
      [49.26846, -123.13469],
      [49.26843, -123.13445],
      [49.26839, -123.13434],
      [49.26826, -123.13411],
      [49.26821, -123.134],
      [49.26818, -123.1335],
      [49.26815, -123.13339],
      [49.26809, -123.13329],
      [49.26784, -123.13306],
      [49.26778, -123.13298],
      [49.26777, -123.13285],
      [49.26777, -123.13258],
      [49.26776, -123.13254],
      [49.26774, -123.1325],
      [49.26732, -123.13215],
      [49.26725, -123.13205],
      [49.26719, -123.13191],
      [49.26714, -123.13174],
      CASTINGS_SEAWALL,
      [49.26722, -123.13115],
      [49.26768, -123.13049],
      [49.26787, -123.13013],
      [49.26787, -123.12984],
      [49.26806, -123.12949],
      [49.26809, -123.12941],
      [49.2681, -123.12934],
      [49.2681, -123.12928],
      [49.26809, -123.12921],
      [49.26806, -123.12911],
      [49.268, -123.129],
      [49.26798, -123.12891],
      [49.26797, -123.12814],
      [49.26799, -123.12807],
      [49.26798, -123.12798],
      [49.26794, -123.12784],
      [49.26794, -123.12772],
      [49.26799, -123.1275],
      [49.26804, -123.1274],
      [49.26808, -123.12731],
      [49.26811, -123.12719],
      [49.2681, -123.12649],
      [49.26792, -123.12584],
      [49.26776, -123.12553],
      [49.26759, -123.12523],
      [49.26753, -123.12494],
      [49.26751, -123.12474],
      [49.26751, -123.12454],
      [49.26754, -123.12438],
      [49.26762, -123.12415],
      [49.2678, -123.12379],
      [49.26787, -123.12357],
      [49.26791, -123.12338],
      [49.26791, -123.12319],
      [49.2679, -123.12299],
      [49.26789, -123.12281],
      [49.26785, -123.12255],
      [49.26789, -123.12232],
      [49.26806, -123.12196],
      [49.26808, -123.12185],
      [49.26809, -123.12166],
      [49.26807, -123.12152],
      [49.2679, -123.12128],
      [49.26777, -123.12115],
      [49.2677, -123.121],
      [49.26766, -123.12086],
      [49.26765, -123.12067],
      [49.26763, -123.11957],
      [49.26763, -123.11919],
      [49.26764, -123.11909],
      [49.2677, -123.11892],
      [49.26778, -123.11882],
      [49.26788, -123.11876],
      [49.26796, -123.11872],
      [49.26838, -123.1187],
      [49.26843, -123.11868],
      [49.26857, -123.11846],
      [49.26861, -123.11844],
      [49.26895, -123.11843],
      [49.26919, -123.11798],
      [49.26923, -123.11795],
      [49.26931, -123.11795],
      [49.26937, -123.11798],
      [49.26943, -123.11797],
      [49.26947, -123.11792],
      [49.2695, -123.11784],
      [49.26949, -123.11776],
      [49.2695, -123.11767],
      [49.26952, -123.11762],
      [49.26957, -123.11756],
      [49.26966, -123.11753],
      [49.26975, -123.1175],
      [49.26982, -123.11742],
      [49.26987, -123.11734],
      [49.27002, -123.11689],
      [49.27012, -123.11672],
      [49.27029, -123.1165],
      [49.27035, -123.11637],
      [49.27042, -123.11616],
      [49.27048, -123.116],
      [49.27056, -123.11586],
      [49.27067, -123.11574],
      [49.27074, -123.11562],
      [49.27078, -123.1155],
      [49.2708, -123.11538],
      SPYGLASS_SEAWALL,
    ],
  },
  {
    routeNames: [ROUTES.seaside.name],
    description: "false creek south: under cambie bridge",
    videos: [VIDEOS.yukonSb],
    videosStartAtEnd: [VIDEOS.yukonSb],
    positions: [
      SPYGLASS_SEAWALL,
      [49.27085, -123.11515],
      [49.27105, -123.11491],
      [49.27112, -123.11473],
      [49.27114, -123.11467],
      EAST_OF_SPYGLASS,
    ],
  },
  {
    routeNames: [ROUTES.seaside.name],
    description: "false creek south: cambie bridge to columbia-ish",
    positions: [
      EAST_OF_SPYGLASS,
      [49.27121, -123.11419],
      [49.27118, -123.11404],
      [49.27105, -123.1138],
      [49.27103, -123.11372],
      [49.27103, -123.11364],
      [49.27104, -123.11355],
      [49.27117, -123.11336],
      [49.2712, -123.11329],
      [49.27122, -123.11307],
      [49.27126, -123.11297],
      [49.27132, -123.11281],
      [49.27135, -123.1126],
      [49.27139, -123.11228],
      [49.27144, -123.11203],
      [49.27149, -123.11177],
      [49.27154, -123.11119],
      [49.27165, -123.11066],
      [49.27167, -123.1105],
      [49.27168, -123.11031],
      [49.27172, -123.1102],
      [49.27175, -123.11012],
      WEST_OF_COLUMBIA,
    ],
  },
  {
    routeNames: [ROUTES.seaside.name],
    description: "false creek south - little bit west of columbia",
    videos: [VIDEOS.columbiaNb],
    videosEndAtStart: [VIDEOS.columbiaNb],
    positions: [
      WEST_OF_COLUMBIA,
      [49.27215, -123.1097],
      [49.27219, -123.10962],
      [49.2722, -123.10958],
      [49.27221, -123.10947],
      COLUMBIA_SEAWALL,
    ],
  },
  {
    routeNames: [ROUTES.seaside.name],
    description: "false creek south - east of columbia",
    positions: [
      COLUMBIA_SEAWALL,
      [49.27219, -123.10827],
      [49.27217, -123.1082],
      [49.27169, -123.10797],
      [49.27168, -123.10795],
      [49.27165, -123.10784],
      [49.27164, -123.10685],
      [49.27167, -123.1068],
      [49.2717, -123.10679],
      [49.27195, -123.10678],
      [49.27199, -123.10676],
      [49.27202, -123.10665],
      [49.27198, -123.10449],
      [49.27198, -123.10449],
      ONTARIO_PATH_SEASIDE,
      [49.272, -123.10424],
      [49.27199, -123.10369],
      [49.272, -123.10352],
      [49.27238, -123.10278],
      [49.27248, -123.10261],
      [49.27255, -123.10254],
      [49.27262, -123.10253],
      [49.27274, -123.10252],
      [49.27282, -123.10249],
      [49.27292, -123.10242],
      [49.27302, -123.10231],
      [49.27349, -123.10229],
      [49.27366, -123.10233],
      [49.27386, -123.10243],
      [49.27397, -123.10247],
      [49.27407, -123.10247],
      [49.27418, -123.10247],
      [49.27436, -123.10248],
      [49.27452, -123.10252],
      [49.27468, -123.10258],
      [49.27492, -123.10272],
      [49.27512, -123.10288],
      [49.27538, -123.10316],
      [49.2756, -123.10317],
      QUEBEC_SEAWALL,
    ],
  },
  {
    routeNames: [ROUTES.seaside.name],
    description: "false creek north - open",
    positions: [
      HORNBY_SEABREEZE,
      [49.27417, -123.13265],
      [49.27369, -123.1319],
      [49.27358, -123.13184],
      GRANVILLE_SEABREEZE,
      [49.27341, -123.1316],
      [49.27339, -123.13146],
      [49.2733, -123.13132],
      [49.27326, -123.1313],
      [49.27316, -123.13137],
      [49.27311, -123.13136],
      [49.27307, -123.13133],
      [49.27259, -123.13059],
      [49.27255, -123.13053],
      [49.27252, -123.1305],
      [49.27248, -123.13049],
      [49.27245, -123.13051],
      [49.27238, -123.13063],
      [49.27234, -123.13066],
      [49.27231, -123.13066],
      [49.27228, -123.13064],
      [49.27171, -123.12975],
      [49.27169, -123.1297],
      [49.27169, -123.12964],
      [49.2717, -123.12957],
      [49.27186, -123.12931],
      [49.27188, -123.12926],
      [49.27189, -123.1292],
      [49.27188, -123.12915],
      [49.27099, -123.12778],
      [49.27098, -123.12754],
      [49.27078, -123.12725],
      [49.27075, -123.12718],
      [49.27073, -123.1271],
      [49.27072, -123.12654],
      SEAWALL_BEACH,
      [49.27195, -123.12492],
      [49.27204, -123.12484],
      [49.27208, -123.12477],
      [49.2721, -123.1247],
      [49.27209, -123.12429],
      [49.2721, -123.12415],
      [49.27213, -123.12394],
      [49.27218, -123.12374],
      [49.27219, -123.12365],
      [49.27219, -123.12356],
      [49.27217, -123.12347],
      [49.27213, -123.12339],
      [49.27093, -123.12153],
      [49.27093, -123.12117],
      [49.27181, -123.11984],
      SEAWALL_DAVIE_W,
      [49.27271, -123.11977],
      [49.2728, -123.11958],
      [49.27288, -123.11945],
      [49.27296, -123.11942],
      [49.27306, -123.11939],
      SEAWALL_DAVIE_E,
      [49.27316, -123.11931],
      [49.27324, -123.11914],
      [49.27334, -123.11878],
      [49.27339, -123.11845],
      [49.2734, -123.11816],
      [49.27339, -123.11795],
      [49.27337, -123.11771],
      [49.27332, -123.11739],
      [49.27321, -123.11705],
      [49.27307, -123.11673],
      [49.27307, -123.11564],
      [49.27308, -123.11545],
      [49.27312, -123.11525],
      [49.27328, -123.11484],
      MARINASIDE_SEAWALL,
      [49.27328, -123.11468],
      [49.27309, -123.11391],
      [49.27308, -123.11376],
      [49.27309, -123.11357],
      [49.2731, -123.11343],
      [49.27316, -123.1132],
      [49.27324, -123.11301],
      [49.27399, -123.11149],
      [49.27414, -123.11143],
      [49.27452, -123.11058],
      [49.27456, -123.11054],
      [49.27469, -123.11049],
      [49.27473, -123.11043],
      [49.27476, -123.11034],
      [49.27474, -123.10999],
      [49.27474, -123.1099],
      [49.27478, -123.1098],
      [49.27505, -123.10973],
      [49.27508, -123.10968],
      [49.2751, -123.10963],
      [49.2751, -123.10954],
      [49.27508, -123.1093],
      [49.2751, -123.10923],
      [49.27515, -123.10917],
      [49.27523, -123.10907],
      [49.2753, -123.10897],
      [49.27544, -123.10891],
      [49.27584, -123.10879],
      [49.2759, -123.10874],
      [49.27595, -123.10867],
      [49.27598, -123.10859],
      [49.27601, -123.1085],
      [49.27602, -123.10836],
      [49.27599, -123.10765],
      [49.27595, -123.10733],
      [49.27595, -123.10717],
      [49.27598, -123.107],
      [49.27596, -123.10688],
      CARRALL_SEAWALL,
      [49.27578, -123.10644],
      [49.27577, -123.10611],
      [49.27575, -123.10607],
      [49.27573, -123.10499],
      [49.27571, -123.10482],
      [49.2757, -123.10344],
      [49.27569, -123.1033],
      [49.27568, -123.10324],
      QUEBEC_SEAWALL,
    ],
  },
  {
    routeNames: [ROUTES.seaside.name],
    description: "false creek north - closed",
    isClosed: true,
    positions: [
      SEAWALL_UNDER_BURRARD_N,
      [49.2758, -123.1355],
      [49.27572, -123.13577],
      [49.27565, -123.13584],
      [49.2756, -123.13581],
      [49.27548, -123.13563],
      [49.27547, -123.13558],
      [49.27564, -123.13505],
      [49.27519, -123.13433],
      [49.27518, -123.13421],
      HORNBY_SEABREEZE,
    ],
  },
  {
    routeNames: [ROUTES.seaside.name],
    description: "west end - closed",
    isClosed: true,
    positions: [
      SEAWALL_STANLEY_PARK_WEST_END,
      [49.29012, -123.14541],
      [49.28943, -123.14433],
      CHILCO_SEAWALL,
      [49.28853, -123.14294],
      [49.2884, -123.14276],
      [49.28827, -123.14264],
      [49.2882, -123.1426],
      [49.28814, -123.14257],
      [49.28718, -123.1425],
      [49.28704, -123.14252],
      [49.28696, -123.14257],
      [49.28691, -123.14256],
      [49.28681, -123.1426],
      [49.28666, -123.14263],
      [49.28658, -123.14261],
      [49.28569, -123.14279],
      [49.28564, -123.14278],
      [49.28474, -123.14297],
      [49.28466, -123.14299],
      [49.28459, -123.14298],
      [49.28447, -123.14294],
      [49.28434, -123.14291],
      [49.28426, -123.14291],
      [49.28413, -123.14292],
      [49.28303, -123.14219],
      CARDERO_SEAWALL_S,
      [49.28243, -123.14164],
      [49.28231, -123.14154],
      [49.28223, -123.1415],
      [49.28218, -123.1415],
      [49.28212, -123.14151],
      [49.28206, -123.14152],
      [49.282, -123.1415],
      [49.28187, -123.14145],
      [49.28178, -123.14138],
      [49.28171, -123.14132],
      [49.28164, -123.14123],
      [49.28157, -123.14114],
      [49.2815, -123.14096],
      [49.28148, -123.14094],
      [49.28133, -123.1408],
      [49.28116, -123.14054],
      [49.28104, -123.14041],
      [49.28046, -123.13961],
      [49.28041, -123.13956],
      [49.28036, -123.13953],
      [49.27997, -123.1394],
      [49.27992, -123.13938],
      [49.27985, -123.13929],
      [49.27975, -123.1391],
      [49.27966, -123.13892],
      [49.27949, -123.1387],
      [49.27931, -123.1385],
      [49.27913, -123.13832],
      [49.27908, -123.13826],
      [49.27906, -123.13819],
      [49.27903, -123.13808],
      [49.279, -123.13795],
      [49.27898, -123.13782],
      [49.27895, -123.13774],
      [49.27889, -123.13766],
      [49.2788, -123.13761],
      [49.27876, -123.1376],
      [49.27859, -123.13766],
      [49.27855, -123.13765],
      [49.27845, -123.13756],
      [49.27785, -123.13696],
      [49.2777, -123.13679],
      [49.27738, -123.13624],
      THURLOW_SEAWALL,
      [49.27724, -123.13616],
      [49.27713, -123.13616],
      [49.27689, -123.13621],
      [49.27678, -123.1362],
      [49.27629, -123.1357],
      [49.27611, -123.13554],
      SEAWALL_UNDER_BURRARD_N,
    ],
  },
  {
    routeNames: [ROUTES.seaside.name],
    description: "stanley park non-loop",
    positions: [
      STANLEY_PARK_LOOP_SPLIT_W,
      [49.29426, -123.14917],
      [49.29423, -123.14921],
      [49.29415, -123.14932],
      [49.29397, -123.14952],
      [49.29387, -123.14961],
      [49.29374, -123.14969],
      [49.2933, -123.14972],
      [49.29321, -123.14972],
      [49.29306, -123.14969],
      [49.29282, -123.14954],
      [49.29258, -123.1493],
      [49.29175, -123.14835],
      [49.29093, -123.14732],
      [49.29083, -123.14723],
      [49.29072, -123.1471],
      [49.29058, -123.1469],
      [49.2905, -123.14671],
      [49.2904, -123.14645],
      [49.29035, -123.14606],
      [49.29033, -123.14576],
      SEAWALL_STANLEY_PARK_WEST_END,
    ],
  },
  {
    routeNames: [ROUTES.seaside.name],
    description: "coal harbour (minus half con. cen.)",
    positions: [
      STANLEY_PARK_LOOP_JOIN_E,
      [49.29515, -123.13588],
      [49.29502, -123.13577],
      [49.29497, -123.13569],
      [49.2949, -123.13549],
      [49.29488, -123.13531],
      [49.29486, -123.13501],
      [49.29484, -123.13472],
      [49.29479, -123.13445],
      [49.29469, -123.13413],
      [49.29461, -123.13402],
      [49.29448, -123.13391],
      [49.29434, -123.13382],
      [49.29422, -123.13361],
      [49.29407, -123.13324],
      [49.29403, -123.13312],
      [49.29393, -123.13295],
      [49.29382, -123.13282],
      [49.29368, -123.13268],
      [49.29359, -123.13254],
      [49.29352, -123.13244],
      [49.29351, -123.13237],
      DENMAN_SEAWALL,
      [49.29345, -123.13223],
      [49.29351, -123.13212],
      [49.29305, -123.13141],
      [49.29312, -123.1313],
      [49.29272, -123.13068],
      [49.29275, -123.13055],
      [49.29325, -123.12978],
      [49.29328, -123.12956],
      [49.29327, -123.1294],
      [49.29328, -123.1293],
      [49.29333, -123.12922],
      [49.29315, -123.12892],
      [49.29307, -123.12879],
      [49.29274, -123.12779],
      [49.29271, -123.12774],
      [49.29212, -123.12861],
      [49.29208, -123.12865],
      [49.29205, -123.12868],
      [49.29201, -123.1287],
      [49.29198, -123.12868],
      [49.29195, -123.12865],
      CARDERO_SEAWALL_N,
      [49.29193, -123.12859],
      [49.29191, -123.12851],
      [49.29118, -123.12738],
      [49.29071, -123.12665],
      [49.29055, -123.12627],
      [49.29057, -123.12619],
      [49.29053, -123.12603],
      [49.29049, -123.12594],
      [49.29045, -123.12564],
      [49.29045, -123.1254],
      [49.29045, -123.12516],
      [49.29057, -123.12457],
      [49.29086, -123.12394],
      [49.29124, -123.12331],
      [49.29125, -123.12327],
      [49.29125, -123.12324],
      [49.29124, -123.12317],
      [49.29095, -123.1227],
      [49.29073, -123.12233],
      [49.2905, -123.12186],
      [49.29024, -123.12126],
      [49.29014, -123.12098],
      [49.29, -123.12049],
      [49.28987, -123.11995],
      [49.28983, -123.11964],
      [49.2898, -123.11942],
      [49.28979, -123.11917],
      [49.2898, -123.11888],
      SEAWALL_WATERFRONT,
      [49.28988, -123.11855],
      [49.28999, -123.11824],
      [49.29016, -123.11792],
      [49.29032, -123.11765],
      [49.29003, -123.11671],
      [49.2899, -123.11629],
      MID_CONVENTION_CENTER,
    ],
  },
  {
    routeNames: [ROUTES.seaside.name],
    description: "half convention center",
    videos: [VIDEOS.hornbyNb],
    videosEndAtStart: [VIDEOS.hornbyNb],
    positions: [
      MID_CONVENTION_CENTER,
      [49.28944, -123.11443],
      [49.28939, -123.11431],
      [49.28933, -123.11428],
      [49.28925, -123.11432],
      [49.28893, -123.11469],
      [49.28852, -123.11514],
      NORTH_OF_CANADA_PLACE,
      NORTH_OF_CANADA_PLACE,
    ],
  },
  {
    routeNames: [ROUTES.seaside.name],
    description: "tip connecting to burrard",
    videos: [VIDEOS.burrardSb, VIDEOS.hornbyNb],
    videosStartAtStart: [VIDEOS.burrardSb],
    positions: [NORTH_OF_CANADA_PLACE, BURRARD_CANADA_PLACE],
  },
];
