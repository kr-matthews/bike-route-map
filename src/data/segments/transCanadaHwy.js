import {
  CAPILANO_HWY_1_S_NE,
  EAGLERIDGE_PATH_START,
  HORSESHOE_BAY_SW,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const NELSON_CREEK_HWY_1_SW = [49.36197, -123.26354];
const NELSON_CREEK_HWY_1_SE = [49.36159, -123.26026];
const WESTPORT_HWY_1_SW = [49.36035, -123.25652];
const WESTPORT_HWY_1_SE = [49.36012, -123.25593];
const ALMONDEL_HWY_1_SW = [49.34892, -123.23885];
const ALMONDEL_HWY_1_SE = [49.34898, -123.23598];
const TWENTY_FIRST_HWY_1_SW = [49.34388, -123.1682];
const TWENTY_FIRST_HWY_1_SE = [49.34391, -123.16738];
const FIFTEENTH_OVERPASS_SW = [49.34309, -123.15641];
const FIFTEENTH_OVERPASS_SE = [49.34285, -123.15521];
const TAYLOR_HWY_1_SW = [49.3372, -123.13521];
const TAYLOR_HWY_1_SE = [49.33715, -123.13447];
const EB_PRE_CAPILANO_BRIDGE = [49.33329, -123.122];
const CAPILANO_OVERPASS_SW = [49.33248, -123.11942];
const CAPILANO_OVERPASS_SE = [49.33247, -123.11684];
const EB_SHOULDER_END = [49.33245, -123.11593];

const CAPILANO_NB_LANE_END = [49.33257, -123.11711];
const WB_PATH_START = [49.33382, -123.11622];
const CAPILANO_OVERPASS_NE = [49.33264, -123.11687];
const CAPILANO_OVERPASS_NW = [49.33265, -123.11942];
const KEITH_HWY_1 = [49.33285, -123.12052];
const THIRD_HWY_1 = [49.33424, -123.12301];
const HADDEN_HWY_1 = [49.33774, -123.12957];
const WB_PRE_TAYLOR = [49.338, -123.13219];
const WESTCOT_HWY_1 = [49.33811, -123.13669];
const CROSS_CREEK_HWY_1_PATH_E = [49.34232, -123.15251];
const CROSS_CREEK_HWY_1_PATH_W = [49.34232, -123.15275];
const FIFTEENTH_OVERPASS_NE = [49.34301, -123.15495];
const FIFTEENTH_OVERPASS_NW = [49.34324, -123.15607];
const TWENTY_FIRST_HWY_1_NE = [49.34426, -123.16742];
const TWENTY_FIRST_HWY_1_NW = [49.34422, -123.16827];
const ALMONDEL_HWY_1_NE = [49.34921, -123.23572];
const ALMONDEL_HWY_1_NW = [49.3491, -123.23885];
const WESTPORT_HWY_1_NE = [49.36019, -123.25558];
const WESTPORT_HWY_1_NW = [49.36047, -123.25623];
const NELSON_CREEK_HWY_1_NE = [49.36176, -123.26011];
const NELSON_CREEK_HWY_1_NW = [49.36216, -123.26315];
const PRE_TUNNEL = [49.3614, -123.26983];
const TUNNEL_E = [49.36134, -123.2701];
const TUNNEL_W = [49.36103, -123.27121];

export const TRANS_CANADA_HWY = [
  // connections
  {
    description: "path to keith",
    type: "mixed",
    positions: [
      KEITH_HWY_1,
      [49.3329, -123.12042],
      [49.33294, -123.1203],
      [49.33296, -123.12005],
      [49.33292, -123.11976],
      [49.33283, -123.11922],
    ],
  },
  {
    description: "path to 3rd",
    type: "mixed",
    positions: [
      THIRD_HWY_1,
      [49.33469, -123.12372],
      [49.33475, -123.12385],
      [49.3348, -123.12392],
      [49.33487, -123.12397],
      [49.33491, -123.12404],
      [49.33498, -123.12414],
      [49.33508, -123.12416],
      [49.33538, -123.12417],
      [49.33545, -123.12415],
      [49.33551, -123.12409],
      [49.33557, -123.12409],
    ],
  },

  // eb
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "eb horseshoe to nelson creek",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.transCanadaHwyEb.id],
    positions: [
      HORSESHOE_BAY_SW,
      [49.36366, -123.27616],
      [49.36347, -123.27621],
      [49.36319, -123.27623],
      [49.36294, -123.27621],
      [49.36269, -123.27615],
      [49.36247, -123.27603],
      [49.36226, -123.27589],
      [49.3621, -123.27578],
      [49.36193, -123.27563],
      [49.3618, -123.27549],
      [49.36167, -123.27532],
      [49.36157, -123.2752],
      [49.36146, -123.2751],
      [49.36135, -123.27499],
      [49.36138, -123.27488],
      [49.36128, -123.27466],
      [49.36117, -123.27441],
      [49.36109, -123.27421],
      [49.36103, -123.27395],
      [49.36095, -123.27358],
      [49.36087, -123.27348],
      [49.36083, -123.2732],
      [49.36081, -123.27272],
      [49.36078, -123.27237],
      [49.36077, -123.27213],
      [49.36078, -123.27174],
      [49.36078, -123.27154],
      [49.36079, -123.27097],
      [49.36082, -123.27043],
      [49.36091, -123.26974],
      [49.36105, -123.26901],
      [49.36119, -123.2684],
      [49.36126, -123.26807],
      [49.36138, -123.26747],
      [49.36151, -123.26687],
      [49.36161, -123.26636],
      [49.36168, -123.26598],
      [49.36174, -123.26562],
      [49.36178, -123.26533],
      [49.36184, -123.26488],
      [49.36191, -123.26436],
      [49.36195, -123.26402],
      [49.36197, -123.26386],
      [49.36197, -123.26365],
      NELSON_CREEK_HWY_1_SW,
    ],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "eb nelson creek bridge",
    type: "shoulder",
    oneWay: "required",
    elevation: 1,
    videoIds: [VIDEOS.transCanadaHwyEb.id],
    positions: [
      NELSON_CREEK_HWY_1_SW,
      [49.36196, -123.26319],
      [49.36194, -123.26269],
      [49.36191, -123.26235],
      [49.36186, -123.26194],
      [49.36181, -123.2615],
      [49.36176, -123.26114],
      [49.36167, -123.26066],
      NELSON_CREEK_HWY_1_SE,
    ],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "eb nelson creek to westport",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.transCanadaHwyEb.id],
    positions: [
      NELSON_CREEK_HWY_1_SE,
      [49.3615, -123.25991],
      [49.36137, -123.2595],
      [49.36093, -123.25819],
      [49.36055, -123.25707],
      WESTPORT_HWY_1_SW,
    ],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "eb westport overpass",
    type: "shoulder",
    oneWay: "required",
    elevation: 1,
    videoIds: [VIDEOS.transCanadaHwyEb.id],
    positions: [WESTPORT_HWY_1_SW, [49.36023, -123.25619], WESTPORT_HWY_1_SE],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "eb westport to almondel",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.transCanadaHwyEb.id],
    positions: [
      WESTPORT_HWY_1_SE,
      [49.35994, -123.25553],
      [49.35977, -123.25523],
      [49.35956, -123.25493],
      [49.35935, -123.25468],
      [49.35915, -123.25447],
      [49.35888, -123.25423],
      [49.35866, -123.25407],
      [49.35842, -123.25393],
      [49.35815, -123.25382],
      [49.35787, -123.25375],
      [49.35763, -123.25371],
      [49.35734, -123.25371],
      [49.35706, -123.25375],
      [49.35667, -123.25383],
      [49.35578, -123.25407],
      [49.35532, -123.2542],
      [49.35498, -123.25431],
      [49.35478, -123.25437],
      [49.3546, -123.2544],
      [49.35439, -123.25443],
      [49.35422, -123.25444],
      [49.354, -123.25444],
      [49.35379, -123.25442],
      [49.35356, -123.25437],
      [49.35354, -123.2542],
      [49.35339, -123.25413],
      [49.35323, -123.25404],
      [49.35303, -123.2539],
      [49.3528, -123.25371],
      [49.3526, -123.25352],
      [49.35239, -123.25328],
      [49.35219, -123.25302],
      [49.35196, -123.25266],
      [49.35177, -123.25226],
      [49.3516, -123.25185],
      [49.35145, -123.25138],
      [49.35134, -123.25091],
      [49.35126, -123.25042],
      [49.3512, -123.24986],
      [49.35118, -123.24942],
      [49.35109, -123.24926],
      [49.35109, -123.24885],
      [49.35109, -123.24842],
      [49.35108, -123.24798],
      [49.35105, -123.24761],
      [49.35102, -123.24733],
      [49.35098, -123.24703],
      [49.35093, -123.24673],
      [49.35087, -123.24639],
      [49.35079, -123.24608],
      [49.35069, -123.24571],
      [49.35037, -123.24495],
      [49.35009, -123.24431],
      [49.34978, -123.24356],
      [49.34952, -123.24295],
      [49.34936, -123.24258],
      [49.34927, -123.24234],
      [49.34919, -123.24208],
      [49.3491, -123.24175],
      [49.34903, -123.24145],
      [49.34898, -123.24113],
      [49.34894, -123.24062],
      [49.34892, -123.24022],
      [49.34892, -123.23916],
      ALMONDEL_HWY_1_SW,
    ],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "eb almondel overpass",
    type: "shoulder",
    oneWay: "required",
    elevation: 1,
    videoIds: [VIDEOS.transCanadaHwyEb.id],
    positions: [ALMONDEL_HWY_1_SW, [49.34894, -123.23705], ALMONDEL_HWY_1_SE],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "eb almondel to 21st",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.transCanadaHwyEb.id],
    positions: [
      ALMONDEL_HWY_1_SE,
      [49.349, -123.23544],
      [49.349, -123.23485],
      [49.34899, -123.23433],
      [49.34897, -123.23384],
      [49.34893, -123.23329],
      [49.34889, -123.23267],
      [49.34883, -123.23202],
      [49.34875, -123.23125],
      [49.34867, -123.23061],
      [49.34857, -123.22995],
      [49.34846, -123.22926],
      [49.34838, -123.22885],
      [49.3483, -123.22844],
      [49.34818, -123.22784],
      [49.34797, -123.22701],
      [49.34776, -123.22613],
      [49.34726, -123.22411],
      [49.34706, -123.2233],
      [49.34683, -123.22248],
      [49.34673, -123.22212],
      [49.34656, -123.22134],
      [49.34643, -123.22067],
      [49.34648, -123.22035],
      [49.34642, -123.21984],
      [49.34637, -123.21932],
      [49.34633, -123.21874],
      [49.34628, -123.2177],
      [49.34626, -123.21717],
      [49.34616, -123.21708],
      [49.34617, -123.21652],
      [49.34615, -123.21593],
      [49.34612, -123.21515],
      [49.34607, -123.21418],
      [49.34605, -123.21341],
      [49.346, -123.21251],
      [49.34599, -123.21197],
      [49.346, -123.21097],
      [49.34603, -123.21013],
      [49.34609, -123.20942],
      [49.34621, -123.20804],
      [49.34635, -123.20661],
      [49.34643, -123.20573],
      [49.34646, -123.20497],
      [49.34654, -123.20434],
      [49.34663, -123.20357],
      [49.34681, -123.20161],
      [49.3469, -123.20064],
      [49.34695, -123.20014],
      [49.34698, -123.19964],
      [49.34701, -123.19898],
      [49.34705, -123.19815],
      [49.34707, -123.19772],
      [49.34718, -123.19756],
      [49.34722, -123.19668],
      [49.34726, -123.19575],
      [49.34728, -123.19507],
      [49.34729, -123.19454],
      [49.34729, -123.19418],
      [49.34728, -123.19373],
      [49.34727, -123.19306],
      [49.34723, -123.19198],
      [49.3472, -123.19153],
      [49.34718, -123.19138],
      [49.3471, -123.19127],
      [49.34707, -123.19105],
      [49.34702, -123.19068],
      [49.34697, -123.19037],
      [49.34687, -123.18998],
      [49.34677, -123.18965],
      [49.34669, -123.18937],
      [49.34654, -123.18902],
      [49.34631, -123.18855],
      [49.34582, -123.18772],
      [49.34533, -123.18686],
      [49.34518, -123.18655],
      [49.34502, -123.18618],
      [49.34487, -123.18573],
      [49.34475, -123.1853],
      [49.34467, -123.18488],
      [49.34461, -123.18444],
      [49.34455, -123.18384],
      [49.34446, -123.18227],
      [49.3444, -123.18104],
      [49.34434, -123.18057],
      [49.34433, -123.17992],
      [49.3443, -123.17919],
      [49.34425, -123.17855],
      [49.3442, -123.17809],
      [49.34415, -123.17771],
      [49.34406, -123.17726],
      [49.34397, -123.17676],
      [49.34374, -123.17541],
      [49.34382, -123.17522],
      [49.34376, -123.17464],
      [49.34372, -123.17398],
      [49.34367, -123.17318],
      [49.34365, -123.17229],
      [49.34366, -123.17137],
      [49.34369, -123.17055],
      [49.34376, -123.16955],
      [49.34383, -123.16879],
      [49.34387, -123.16843],
      TWENTY_FIRST_HWY_1_SW,
    ],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "eb 21st overpass",
    type: "shoulder",
    oneWay: "required",
    elevation: 1,
    videoIds: [VIDEOS.transCanadaHwyEb.id],
    positions: [TWENTY_FIRST_HWY_1_SW, TWENTY_FIRST_HWY_1_SE],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "eb 21st to 15th",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.transCanadaHwyEb.id],
    positions: [
      TWENTY_FIRST_HWY_1_SE,
      [49.34394, -123.16697],
      [49.34394, -123.1665],
      [49.34394, -123.16608],
      [49.34391, -123.16552],
      [49.34386, -123.16482],
      [49.34377, -123.16466],
      [49.34376, -123.16436],
      [49.34374, -123.16391],
      [49.3437, -123.16342],
      [49.34364, -123.1626],
      [49.34358, -123.16198],
      [49.34354, -123.16146],
      [49.34349, -123.16109],
      [49.34341, -123.16061],
      [49.34337, -123.16032],
      [49.34345, -123.16021],
      [49.34343, -123.15976],
      [49.34337, -123.15913],
      [49.34331, -123.15844],
      [49.34324, -123.15763],
      [49.34319, -123.15717],
      [49.34312, -123.15663],
      FIFTEENTH_OVERPASS_SW,
    ],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "eb 15th overpass",
    type: "shoulder",
    oneWay: "required",
    elevation: 1,
    videoIds: [VIDEOS.transCanadaHwyEb.id],
    positions: [
      FIFTEENTH_OVERPASS_SW,
      [49.34304, -123.15615],
      [49.34291, -123.1555],
      FIFTEENTH_OVERPASS_SE,
    ],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "eb 15th to taylor",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.transCanadaHwyEb.id],
    positions: [
      FIFTEENTH_OVERPASS_SE,
      [49.34276, -123.1548],
      [49.34262, -123.15429],
      [49.34248, -123.15383],
      [49.34232, -123.15338],
      [49.34219, -123.15305],
      [49.34205, -123.15295],
      [49.34188, -123.15249],
      [49.34172, -123.1521],
      [49.34155, -123.15174],
      [49.34136, -123.15137],
      [49.34113, -123.15096],
      [49.34068, -123.15025],
      [49.34029, -123.14967],
      [49.33997, -123.14919],
      [49.33963, -123.14869],
      [49.33935, -123.14824],
      [49.33915, -123.14787],
      [49.33899, -123.14755],
      [49.33887, -123.14726],
      [49.33875, -123.14693],
      [49.33862, -123.14647],
      [49.33852, -123.14595],
      [49.33845, -123.14556],
      [49.3384, -123.14501],
      [49.33834, -123.14445],
      [49.33826, -123.1435],
      [49.33821, -123.14278],
      [49.33812, -123.14166],
      [49.33801, -123.14071],
      [49.33792, -123.13988],
      [49.33782, -123.13914],
      [49.3377, -123.13831],
      [49.33747, -123.13668],
      [49.33737, -123.13605],
      [49.33733, -123.13566],
      [49.33732, -123.13551],
      [49.33729, -123.13538],
      [49.33725, -123.13528],
      TAYLOR_HWY_1_SW,
    ],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "eb crossing taylor",
    type: "other",
    oneWay: "required",
    videoIds: [VIDEOS.transCanadaHwyEb.id],
    positions: [
      TAYLOR_HWY_1_SW,
      [49.33726, -123.13511],
      [49.33726, -123.13487],
      [49.33724, -123.13464],
      [49.33721, -123.13457],
      TAYLOR_HWY_1_SE,
    ],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "eb taylor to capilano river",
    type: "shoulder",
    oneWay: "required",
    videoIds: [VIDEOS.transCanadaHwyEb.id],
    positions: [
      TAYLOR_HWY_1_SE,
      [49.33722, -123.13438],
      [49.33726, -123.13424],
      [49.33729, -123.13401],
      [49.33732, -123.13357],
      [49.33735, -123.13293],
      [49.33739, -123.13214],
      [49.33742, -123.13131],
      [49.33742, -123.13085],
      [49.33739, -123.13043],
      [49.33735, -123.1301],
      [49.33728, -123.12959],
      [49.33717, -123.12916],
      [49.33704, -123.1287],
      [49.33687, -123.12824],
      [49.33672, -123.1279],
      [49.33651, -123.12746],
      [49.33621, -123.1269],
      [49.33568, -123.12598],
      [49.3347, -123.12428],
      [49.33381, -123.12286],
      EB_PRE_CAPILANO_BRIDGE,
    ],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "eb capilano protected shoulder",
    type: "dedicated",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.transCanadaHwyEb.id],
    positions: [
      EB_PRE_CAPILANO_BRIDGE,
      [49.33325, -123.122],
      [49.33313, -123.12181],
      [49.33301, -123.12159],
      [49.33291, -123.1214],
      [49.33279, -123.12114],
      [49.33271, -123.12094],
      [49.33263, -123.12073],
      [49.33258, -123.12051],
      [49.33252, -123.12017],
      [49.33249, -123.11989],
      [49.33247, -123.11962],
      CAPILANO_OVERPASS_SW,
    ],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "eb capilano river bridge",
    type: "other",
    oneWay: "required",
    elevation: 1,
    videoIds: [VIDEOS.transCanadaHwyEb.id],
    positions: [CAPILANO_OVERPASS_SW, CAPILANO_OVERPASS_SE],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "eb capilano off ramp",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.transCanadaHwyEb.id],
    positions: [
      CAPILANO_OVERPASS_SE,
      [49.33247, -123.11646],
      [49.33247, -123.11614],
      EB_SHOULDER_END,
    ],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "eb exit to capilano",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.transCanadaHwyEb.id],
    videoIdsEndAtEnd: [VIDEOS.transCanadaHwyEb.id],
    positions: [
      EB_SHOULDER_END,
      [49.33242, -123.11575],
      [49.33235, -123.11553],
      [49.33228, -123.11537],
      [49.33221, -123.11526],
      [49.33213, -123.11519],
      [49.332, -123.11513],
      [49.33191, -123.11512],
      [49.3318, -123.11515],
      [49.33172, -123.1152],
      [49.33165, -123.11526],
      [49.3316, -123.11532],
      [49.33153, -123.11545],
      [49.33149, -123.11557],
      [49.33146, -123.11574],
      [49.33146, -123.11678],
      CAPILANO_HWY_1_S_NE,
    ],
  },

  // wb
  {
    description: "capilano nb under hwy 1 part 1",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.transCanadaHwyWb.id],
    videoIdsStartAtStart: [VIDEOS.transCanadaHwyWb.id],
    positions: [
      CAPILANO_HWY_1_S_NE,
      [49.33165, -123.11712],
      [49.33227, -123.11712],
      CAPILANO_NB_LANE_END,
    ],
  },
  {
    description: "capilano nb under hwy 1 part 2",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.transCanadaHwyWb.id],
    positions: [
      CAPILANO_NB_LANE_END,
      [49.33278, -123.11708],
      [49.33307, -123.11696],
      [49.33332, -123.11679],
      [49.33365, -123.11652],
      [49.3338, -123.11639],
      [49.33383, -123.11626],
      WB_PATH_START,
    ],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "wb capilano onramp",
    type: "mixed",
    elevation: 0.5,
    videoIds: [VIDEOS.transCanadaHwyWb.id],
    positions: [
      WB_PATH_START,
      [49.3338, -123.11619],
      [49.33381, -123.1161],
      [49.33379, -123.116],
      [49.33376, -123.11592],
      [49.33371, -123.11582],
      [49.33363, -123.11574],
      [49.33353, -123.11566],
      [49.33341, -123.11562],
      [49.33297, -123.11566],
      [49.33291, -123.11564],
      [49.33287, -123.11566],
      [49.33282, -123.1157],
      [49.33279, -123.11577],
      [49.33278, -123.11598],
      [49.33273, -123.11649],
      [49.33268, -123.11672],
      CAPILANO_OVERPASS_NE,
    ],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "wb capilano river",
    type: "other",
    elevation: 1,
    videoIds: [VIDEOS.transCanadaHwyWb.id],
    positions: [
      CAPILANO_OVERPASS_NE,
      [49.33263, -123.11754],
      [49.33263, -123.11822],
      [49.33263, -123.11854],
      [49.33264, -123.119],
      CAPILANO_OVERPASS_NW,
    ],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "wb capilano proper path",
    type: "mixed",
    elevation: 0.5,
    videoIds: [VIDEOS.transCanadaHwyWb.id],
    positions: [
      CAPILANO_OVERPASS_NW,
      [49.33267, -123.11955],
      [49.33271, -123.11983],
      [49.33275, -123.12016],
      [49.33279, -123.12035],
      KEITH_HWY_1,
      [49.33294, -123.12076],
      [49.33302, -123.12097],
      [49.33324, -123.12136],
      THIRD_HWY_1,
    ],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "wb 3rd to taylor",
    type: "shoulder",
    oneWay: "required",
    videoIds: [VIDEOS.transCanadaHwyWb.id],
    positions: [
      THIRD_HWY_1,
      [49.33426, -123.12316],
      [49.33466, -123.12382],
      [49.33513, -123.12461],
      [49.33565, -123.12548],
      [49.33637, -123.12664],
      [49.33664, -123.12707],
      [49.3369, -123.1275],
      [49.33711, -123.1279],
      [49.33729, -123.12827],
      [49.33745, -123.12864],
      [49.33763, -123.1291],
      [49.33766, -123.12914],
      [49.33767, -123.12932],
      HADDEN_HWY_1,
      [49.33779, -123.12972],
      [49.33784, -123.12999],
      [49.33787, -123.13021],
      [49.33791, -123.13053],
      [49.33795, -123.13099],
      [49.33798, -123.13149],
      WB_PRE_TAYLOR,
    ],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "wb crossing taylor",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.transCanadaHwyWb.id],
    positions: [
      WB_PRE_TAYLOR,
      [49.33804, -123.13322],
      [49.33808, -123.13459],
      [49.33808, -123.13507],
      [49.33809, -123.1354],
      [49.33811, -123.13633],
      WESTCOT_HWY_1,
    ],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "wb taylor to cross creek",
    type: "shoulder",
    oneWay: "required",
    videoIds: [VIDEOS.transCanadaHwyWb.id],
    positions: [
      WESTCOT_HWY_1,
      [49.33813, -123.13681],
      [49.33815, -123.138],
      [49.33817, -123.13889],
      [49.33821, -123.1397],
      [49.33834, -123.14158],
      [49.33853, -123.14406],
      [49.33858, -123.14448],
      [49.33868, -123.14541],
      [49.33875, -123.1459],
      [49.33887, -123.14647],
      [49.33903, -123.14699],
      [49.33919, -123.14737],
      [49.33952, -123.14801],
      [49.34025, -123.14915],
      [49.34103, -123.15029],
      [49.34134, -123.15076],
      [49.34167, -123.15123],
      [49.34186, -123.15155],
      [49.3421, -123.15195],
      [49.34222, -123.15217],
      [49.34235, -123.15241],
      CROSS_CREEK_HWY_1_PATH_E,
    ],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "wb cross creek ramp crossing",
    type: "dedicated",
    oneWay: "required",
    hideArrows: true,
    videoIds: [VIDEOS.transCanadaHwyWb.id],
    positions: [CROSS_CREEK_HWY_1_PATH_E, CROSS_CREEK_HWY_1_PATH_W],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "wb cross creek to 15th",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.transCanadaHwyWb.id],
    positions: [
      CROSS_CREEK_HWY_1_PATH_W,
      [49.34248, -123.15315],
      [49.34261, -123.15351],
      [49.34274, -123.15393],
      [49.34284, -123.15428],
      [49.34293, -123.1546],
      FIFTEENTH_OVERPASS_NE,
    ],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "wb 15th overpass",
    type: "shoulder",
    oneWay: "required",
    elevation: 1,
    videoIds: [VIDEOS.transCanadaHwyWb.id],
    positions: [
      FIFTEENTH_OVERPASS_NE,
      [49.34308, -123.15527],
      [49.34316, -123.15567],
      [49.3432, -123.15585],
      FIFTEENTH_OVERPASS_NW,
    ],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "wb 15th to 21st",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.transCanadaHwyWb.id],
    positions: [
      FIFTEENTH_OVERPASS_NW,
      [49.34328, -123.1563],
      [49.34332, -123.15663],
      [49.34337, -123.15712],
      [49.34346, -123.15786],
      [49.34355, -123.15793],
      [49.34356, -123.15827],
      [49.34357, -123.15853],
      [49.3436, -123.15886],
      [49.34367, -123.15961],
      [49.34374, -123.16043],
      [49.34388, -123.16142],
      [49.34398, -123.16244],
      [49.34403, -123.16288],
      [49.34407, -123.16319],
      [49.34412, -123.16347],
      [49.34406, -123.16362],
      [49.34409, -123.16394],
      [49.34416, -123.1646],
      [49.34421, -123.16509],
      [49.34424, -123.16553],
      [49.34427, -123.16623],
      [49.34428, -123.16688],
      [49.34427, -123.16725],
      TWENTY_FIRST_HWY_1_NE,
    ],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "wb 21st overpass",
    type: "shoulder",
    oneWay: "required",
    elevation: 1,
    videoIds: [VIDEOS.transCanadaHwyWb.id],
    positions: [
      TWENTY_FIRST_HWY_1_NE,
      [49.34425, -123.1676],
      [49.34423, -123.16806],
      TWENTY_FIRST_HWY_1_NW,
    ],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "wb 21st to almondel",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.transCanadaHwyWb.id],
    positions: [
      TWENTY_FIRST_HWY_1_NW,
      [49.34421, -123.16849],
      [49.34414, -123.16938],
      [49.34408, -123.17042],
      [49.34402, -123.17143],
      [49.344, -123.1718],
      [49.34398, -123.17232],
      [49.34398, -123.17275],
      [49.34399, -123.17331],
      [49.34401, -123.174],
      [49.34405, -123.17481],
      [49.34412, -123.17557],
      [49.34422, -123.17645],
      [49.34429, -123.17701],
      [49.34435, -123.17751],
      [49.34439, -123.17785],
      [49.34443, -123.17827],
      [49.34446, -123.17865],
      [49.34449, -123.17912],
      [49.34452, -123.17967],
      [49.34454, -123.1802],
      [49.34454, -123.18051],
      [49.34464, -123.18066],
      [49.34466, -123.18106],
      [49.34469, -123.18203],
      [49.34472, -123.183],
      [49.34475, -123.18358],
      [49.34478, -123.1841],
      [49.34482, -123.18451],
      [49.34487, -123.18481],
      [49.34495, -123.18523],
      [49.34505, -123.1856],
      [49.34513, -123.18585],
      [49.34527, -123.18619],
      [49.34546, -123.18659],
      [49.34571, -123.18705],
      [49.34596, -123.18749],
      [49.3463, -123.18804],
      [49.34651, -123.18842],
      [49.34666, -123.1887],
      [49.34682, -123.18906],
      [49.34697, -123.18945],
      [49.34713, -123.18986],
      [49.34721, -123.19014],
      [49.34729, -123.19046],
      [49.34735, -123.1908],
      [49.34742, -123.19123],
      [49.34746, -123.19153],
      [49.3475, -123.19186],
      [49.34742, -123.19204],
      [49.34744, -123.1925],
      [49.34748, -123.19335],
      [49.34751, -123.19449],
      [49.34752, -123.19553],
      [49.3475, -123.19679],
      [49.34747, -123.19778],
      [49.34739, -123.19922],
      [49.34747, -123.19932],
      [49.34737, -123.20014],
      [49.34726, -123.20112],
      [49.34714, -123.20218],
      [49.34704, -123.2032],
      [49.34697, -123.20385],
      [49.34692, -123.20425],
      [49.34686, -123.20466],
      [49.34682, -123.20501],
      [49.34681, -123.20536],
      [49.34679, -123.20564],
      [49.34672, -123.20649],
      [49.34668, -123.20714],
      [49.34662, -123.20805],
      [49.34656, -123.20906],
      [49.34655, -123.20936],
      [49.34642, -123.20967],
      [49.34636, -123.21047],
      [49.34633, -123.21091],
      [49.34631, -123.21133],
      [49.34627, -123.21201],
      [49.34627, -123.21259],
      [49.34628, -123.21353],
      [49.34636, -123.215],
      [49.34642, -123.21611],
      [49.34651, -123.21777],
      [49.34657, -123.21863],
      [49.34666, -123.21878],
      [49.34667, -123.21903],
      [49.34671, -123.21954],
      [49.34682, -123.22035],
      [49.3469, -123.22089],
      [49.347, -123.22143],
      [49.34712, -123.222],
      [49.34735, -123.2229],
      [49.34778, -123.2246],
      [49.34802, -123.2255],
      [49.34821, -123.2263],
      [49.34833, -123.22686],
      [49.34849, -123.22744],
      [49.34858, -123.22784],
      [49.34866, -123.22828],
      [49.3488, -123.22918],
      [49.34891, -123.22961],
      [49.349, -123.23001],
      [49.34908, -123.23065],
      [49.34907, -123.23091],
      [49.34914, -123.23215],
      [49.34917, -123.2327],
      [49.34921, -123.23333],
      [49.34922, -123.23411],
      [49.34923, -123.2349],
      [49.34922, -123.23543],
      ALMONDEL_HWY_1_NE,
    ],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "wb almondel overpass",
    type: "shoulder",
    oneWay: "required",
    elevation: 1,
    videoIds: [VIDEOS.transCanadaHwyWb.id],
    positions: [ALMONDEL_HWY_1_NE, [49.34916, -123.23658], ALMONDEL_HWY_1_NW],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "wb almondel to westport",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.transCanadaHwyWb.id],
    positions: [
      ALMONDEL_HWY_1_NW,
      [49.34911, -123.2396],
      [49.34911, -123.24022],
      [49.34913, -123.24054],
      [49.34918, -123.24098],
      [49.34928, -123.24152],
      [49.34938, -123.24191],
      [49.34953, -123.24235],
      [49.34989, -123.24313],
      [49.3503, -123.24401],
      [49.35033, -123.24434],
      [49.35062, -123.24499],
      [49.3508, -123.24545],
      [49.3509, -123.24576],
      [49.351, -123.24607],
      [49.35107, -123.24633],
      [49.35114, -123.24664],
      [49.35123, -123.24717],
      [49.35129, -123.24784],
      [49.35132, -123.24819],
      [49.35141, -123.24835],
      [49.35142, -123.24901],
      [49.35143, -123.24957],
      [49.35145, -123.24988],
      [49.35148, -123.25029],
      [49.35155, -123.25075],
      [49.35163, -123.25114],
      [49.35176, -123.25162],
      [49.35192, -123.25203],
      [49.35205, -123.25232],
      [49.35219, -123.25258],
      [49.3524, -123.25291],
      [49.35261, -123.25315],
      [49.3529, -123.25345],
      [49.35319, -123.2537],
      [49.35347, -123.25387],
      [49.35383, -123.25402],
      [49.35415, -123.25409],
      [49.35446, -123.25409],
      [49.35488, -123.25405],
      [49.35541, -123.2539],
      [49.35642, -123.25361],
      [49.35697, -123.25348],
      [49.35719, -123.25345],
      [49.35745, -123.25343],
      [49.3577, -123.25344],
      [49.35794, -123.25348],
      [49.35814, -123.25353],
      [49.35836, -123.25361],
      [49.35876, -123.25381],
      [49.35914, -123.25412],
      [49.35941, -123.25438],
      [49.35959, -123.25457],
      [49.35977, -123.25481],
      [49.35995, -123.25509],
      [49.36012, -123.25544],
      WESTPORT_HWY_1_NE,
    ],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "wb westport overpass",
    type: "shoulder",
    oneWay: "required",
    elevation: 1,
    videoIds: [VIDEOS.transCanadaHwyWb.id],
    positions: [WESTPORT_HWY_1_NE, [49.36033, -123.2559], WESTPORT_HWY_1_NW],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "wb westport to nelson creek",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.transCanadaHwyWb.id],
    positions: [
      WESTPORT_HWY_1_NW,
      [49.36062, -123.2566],
      [49.36079, -123.25707],
      [49.36097, -123.25756],
      [49.3612, -123.25824],
      [49.36138, -123.2588],
      [49.3616, -123.25949],
      [49.3617, -123.25986],
      NELSON_CREEK_HWY_1_NE,
    ],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "wb nelson creek overpass",
    type: "shoulder",
    oneWay: "required",
    elevation: 1,
    videoIds: [VIDEOS.transCanadaHwyWb.id],
    positions: [
      NELSON_CREEK_HWY_1_NE,
      [49.36185, -123.26056],
      [49.36192, -123.26094],
      [49.36198, -123.26137],
      [49.36205, -123.26192],
      [49.3621, -123.26236],
      [49.36214, -123.26285],
      NELSON_CREEK_HWY_1_NW,
    ],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "wb nelson creek to tunnel a",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.horseshoeBayNb.id, VIDEOS.transCanadaHwyWb.id],
    videoIdsStartAtStart: [VIDEOS.horseshoeBayNb.id],
    positions: [
      NELSON_CREEK_HWY_1_NW,
      [49.3622, -123.26364],
      [49.3622, -123.26412],
      [49.36219, -123.26458],
      [49.36215, -123.26509],
      [49.36209, -123.2657],
      [49.36202, -123.26616],
      [49.36173, -123.26757],
      [49.3616, -123.26836],
      [49.36147, -123.26935],
      PRE_TUNNEL,
    ],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "wb nelson creek to tunnel b",
    type: "shoulder",
    oneWay: "required",
    elevation: -0.5,
    videoIds: [VIDEOS.horseshoeBayNb.id, VIDEOS.transCanadaHwyWb.id],
    positions: [PRE_TUNNEL, TUNNEL_E],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "wb tunnel",
    type: "shoulder",
    oneWay: "required",
    elevation: -1,
    videoIds: [VIDEOS.horseshoeBayNb.id, VIDEOS.transCanadaHwyWb.id],
    positions: [
      TUNNEL_E,
      [49.36119, -123.2706],
      [49.3611, -123.27089],
      TUNNEL_W,
    ],
  },
  {
    routeNames: [ROUTES.transCanadaHwy.name],
    description: "wb tunnel to path",
    type: "shoulder",
    oneWay: "required",
    elevation: -0.5,
    videoIds: [VIDEOS.horseshoeBayNb.id, VIDEOS.transCanadaHwyWb.id],
    positions: [
      TUNNEL_W,
      [49.361, -123.27143],
      [49.361, -123.27167],
      [49.36102, -123.27184],
      [49.36106, -123.27206],
      [49.36111, -123.27225],
      EAGLERIDGE_PATH_START,
    ],
  },
];
