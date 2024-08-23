import { CRANLEY_MARINE, ROYAL_CHATHAM } from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const NELSON_MARINE = [49.37029, -123.27978];
const MARINE_ORCHILL = [49.36328, -123.27737];
const MARINE_ORCHILL_S = [49.36324, -123.27739];
const WESTPORT_MARINE = [49.35293, -123.26065];
const BEACON_MARINE = [49.34072, -123.26325];
const PICCADILLY_PILOT_HOUSE = [49.33891, -123.25509];
const HIGHWAY_PICCADILLY = [49.34028, -123.25189];
const PICCADILLY_MARINE = [49.34106, -123.24838];
const THIRTY_FIRST_MARINE_E = [49.34025, -123.20273];
const THIRTY_FIRST_MARINE_NE = [49.34024, -123.20256];
const TWENTY_SIXTH_MARINE_E = [49.33568, -123.18545];
const MARINE_BEYOND_13TH = [49.32737, -123.15029];
const PARK_ROYAL_MARINE_NW = [49.32699, -123.14053];

export const MARINE_DR = [
  {
    description: "orchill/st georges/nelson",
    type: "quiet",
    positions: [
      MARINE_ORCHILL,
      [49.3633, -123.2775],
      [49.36355, -123.27909],
      [49.36367, -123.27924],
      [49.3642, -123.27952],
      [49.3645, -123.28032],
      [49.3648, -123.28077],
      [49.36527, -123.28094],
      [49.36572, -123.28103],
      [49.36606, -123.28086],
      [49.3663, -123.2808],
      [49.36651, -123.28082],
      [49.3668, -123.281],
      [49.36693, -123.28114],
      [49.36728, -123.28143],
      [49.36803, -123.28147],
      [49.36833, -123.28154],
      [49.36843, -123.28153],
      [49.3696, -123.28043],
      [49.37012, -123.27992],
      NELSON_MARINE,
    ],
  },
  {
    description: "nelson/royal",
    type: "shared",
    videoIds: [VIDEOS.marineDrWb.id],
    videoIdsEndAtEnd: [VIDEOS.marineDrWb.id],
    positions: [
      NELSON_MARINE,
      [49.37048, -123.27947],
      [49.37061, -123.27911],
      [49.37067, -123.27901],
      [49.37078, -123.27892],
      [49.37185, -123.27815],
      [49.37178, -123.27799],
      ROYAL_CHATHAM,
      [49.37448, -123.27419],
    ],
  },

  // piccadilly/water
  {
    description: "beacon/water",
    type: "quiet",
    positions: [
      BEACON_MARINE,
      [49.34061, -123.2633],
      [49.34028, -123.26367],
      [49.34006, -123.26382],
      [49.33962, -123.26276],
      [49.33955, -123.26205],
      [49.33958, -123.26114],
      [49.33957, -123.26093],
      [49.33953, -123.26079],
      [49.33947, -123.26067],
      [49.33913, -123.26006],
      [49.33907, -123.25992],
      [49.33903, -123.25976],
      [49.33897, -123.25947],
      [49.33893, -123.25913],
      [49.33891, -123.25772],
      [49.339, -123.25702],
      [49.33909, -123.25648],
      [49.33921, -123.25605],
      [49.33912, -123.25594],
      [49.33902, -123.2558],
      [49.33896, -123.25566],
      [49.3389, -123.2554],
      PICCADILLY_PILOT_HOUSE,
    ],
  },
  {
    description: "piccadilly s eb",
    type: "quiet",
    oneWay: "required",
    positions: [
      PICCADILLY_PILOT_HOUSE,
      [49.33901, -123.25491],
      [49.33915, -123.2548],
      [49.33928, -123.25469],
      [49.33933, -123.2546],
      [49.33952, -123.25391],
      [49.33966, -123.25358],
      [49.33972, -123.2534],
      [49.33989, -123.25246],
      [49.33992, -123.2524],
      HIGHWAY_PICCADILLY,
    ],
  },
  {
    description: "highway/pilot house",
    type: "quiet",
    oneWay: "required",
    positions: [
      HIGHWAY_PICCADILLY,
      [49.34006, -123.25193],
      [49.33936, -123.2521],
      [49.33918, -123.25211],
      [49.33906, -123.25217],
      [49.33882, -123.25236],
      [49.33872, -123.25248],
      [49.3386, -123.25269],
      [49.33851, -123.25307],
      [49.33848, -123.25341],
      [49.33849, -123.2536],
      [49.33869, -123.25402],
      [49.33886, -123.25426],
      [49.33891, -123.25442],
      [49.33892, -123.25464],
      PICCADILLY_PILOT_HOUSE,
    ],
  },
  {
    description: "piccadilly s",
    type: "quiet",
    positions: [
      HIGHWAY_PICCADILLY,
      [49.34037, -123.25172],
      [49.34053, -123.25132],
      [49.34071, -123.25107],
      [49.34086, -123.25065],
      [49.34095, -123.25021],
      [49.34111, -123.24972],
      [49.34114, -123.24954],
      [49.34115, -123.24937],
      [49.34102, -123.24849],
      PICCADILLY_MARINE,
    ],
  },

  // marine
  {
    routeNames: [ROUTES.marineDr.name],
    description: "whytecliff to nelson",
    type: "shared",
    positions: [
      [49.37378, -123.28909],
      [49.3737, -123.28912],
      [49.37291, -123.2897],
      [49.37261, -123.28986],
      [49.37229, -123.28994],
      [49.37204, -123.28995],
      [49.37188, -123.28992],
      [49.37172, -123.28986],
      [49.37158, -123.28975],
      [49.37132, -123.28937],
      [49.37123, -123.28919],
      [49.37121, -123.28901],
      [49.37122, -123.28879],
      [49.37124, -123.2886],
      [49.37128, -123.28845],
      [49.37138, -123.28825],
      [49.37179, -123.28762],
      [49.37254, -123.28658],
      [49.37359, -123.28511],
      [49.37376, -123.28497],
      [49.37415, -123.28474],
      [49.37431, -123.28462],
      [49.37452, -123.28443],
      [49.37527, -123.2837],
      [49.37542, -123.28348],
      [49.37563, -123.28314],
      [49.37577, -123.28287],
      [49.37583, -123.2827],
      [49.37586, -123.28259],
      [49.37587, -123.28248],
      [49.37584, -123.28237],
      [49.37562, -123.28194],
      [49.37546, -123.28161],
      [49.37537, -123.28148],
      [49.37527, -123.28139],
      [49.37522, -123.28136],
      [49.37516, -123.28136],
      [49.37508, -123.28138],
      [49.37382, -123.28216],
      [49.3737, -123.28225],
      [49.37357, -123.2824],
      [49.37338, -123.28264],
      [49.37323, -123.28279],
      [49.37298, -123.28295],
      [49.3728, -123.28315],
      [49.37262, -123.28333],
      [49.37246, -123.28345],
      [49.3723, -123.28354],
      [49.37193, -123.28366],
      [49.37163, -123.2837],
      [49.37153, -123.28372],
      [49.37133, -123.28383],
      [49.37122, -123.28384],
      [49.37112, -123.2838],
      [49.37104, -123.28375],
      [49.37097, -123.28364],
      [49.37057, -123.28279],
      [49.37044, -123.28246],
      [49.37041, -123.28226],
      [49.3704, -123.28209],
      [49.37034, -123.28128],
      [49.37026, -123.28008],
      NELSON_MARINE,
    ],
  },
  {
    routeNames: [ROUTES.marineDr.name],
    description: "nelson to westport",
    type: "shared",
    videoIds: [VIDEOS.marineDrWb.id],
    positions: [
      NELSON_MARINE,
      [49.37024, -123.2795],
      [49.37018, -123.27879],
      [49.37019, -123.27854],
      [49.37022, -123.27836],
      [49.37038, -123.27774],
      [49.3704, -123.27753],
      [49.37039, -123.27731],
      [49.37032, -123.27701],
      [49.37009, -123.27645],
      [49.37003, -123.27634],
      [49.36984, -123.27619],
      [49.36947, -123.2762],
      [49.36911, -123.27624],
      [49.36877, -123.27627],
      [49.36862, -123.27632],
      [49.36825, -123.27652],
      [49.36804, -123.27661],
      [49.36787, -123.27666],
      [49.36738, -123.27673],
      [49.36679, -123.27677],
      [49.3663, -123.27677],
      [49.36602, -123.27677],
      [49.3657, -123.27685],
      [49.36523, -123.27706],
      [49.3651, -123.27709],
      [49.36494, -123.2771],
      [49.36482, -123.27714],
      [49.36452, -123.27731],
      [49.36439, -123.27736],
      [49.36425, -123.27738],
      [49.3641, -123.27736],
      [49.36386, -123.27729],
      [49.36371, -123.27725],
      [49.36358, -123.27725],
      [49.36337, -123.27733],
      MARINE_ORCHILL,
      MARINE_ORCHILL_S,
      [49.36314, -123.27741],
      [49.36301, -123.27741],
      [49.36266, -123.27733],
      [49.36231, -123.27722],
      [49.36219, -123.27719],
      [49.36204, -123.2772],
      [49.3619, -123.27722],
      [49.36173, -123.27731],
      [49.36153, -123.27748],
      [49.36138, -123.27765],
      [49.36126, -123.27776],
      [49.36105, -123.27786],
      [49.35857, -123.27864],
      [49.35721, -123.27907],
      [49.35699, -123.27911],
      [49.35681, -123.2791],
      [49.35664, -123.27906],
      [49.35645, -123.27895],
      [49.3563, -123.27881],
      [49.35613, -123.27855],
      [49.356, -123.27827],
      [49.3559, -123.27793],
      [49.35575, -123.27717],
      [49.35558, -123.27658],
      [49.35555, -123.27637],
      [49.35556, -123.27621],
      [49.35561, -123.27601],
      [49.3557, -123.27581],
      [49.35603, -123.27536],
      [49.35612, -123.27521],
      [49.35619, -123.27499],
      [49.35629, -123.27462],
      [49.35634, -123.27446],
      [49.35642, -123.27434],
      [49.35651, -123.27422],
      [49.35674, -123.27399],
      [49.35685, -123.27385],
      [49.35695, -123.27368],
      [49.35747, -123.27251],
      [49.35756, -123.27223],
      [49.35837, -123.26905],
      [49.35843, -123.26886],
      [49.35853, -123.26863],
      [49.35876, -123.26816],
      [49.35883, -123.26795],
      [49.35885, -123.2678],
      [49.35886, -123.26765],
      [49.35883, -123.26748],
      [49.35878, -123.26729],
      [49.35871, -123.26713],
      [49.35864, -123.26702],
      [49.35858, -123.26697],
      [49.35845, -123.26692],
      [49.35838, -123.2669],
      [49.35788, -123.26693],
      [49.35773, -123.26692],
      [49.35763, -123.26688],
      [49.35755, -123.26683],
      [49.35749, -123.26676],
      [49.35743, -123.26663],
      CRANLEY_MARINE,
      [49.35628, -123.26319],
      [49.35621, -123.26301],
      [49.35613, -123.26288],
      [49.35605, -123.26279],
      [49.35595, -123.26273],
      [49.35585, -123.2627],
      [49.35575, -123.26271],
      [49.35563, -123.26276],
      [49.35532, -123.26292],
      [49.35508, -123.26313],
      [49.35491, -123.26324],
      [49.35475, -123.26329],
      [49.35458, -123.26327],
      [49.35442, -123.26319],
      [49.35397, -123.26272],
      [49.35374, -123.26228],
      [49.35367, -123.262],
      [49.35352, -123.26132],
      [49.35338, -123.26097],
      [49.35326, -123.26083],
      [49.35316, -123.26075],
      [49.35306, -123.2607],
      WESTPORT_MARINE,
    ],
  },
  {
    routeNames: [ROUTES.marineDr.name],
    description: "westport to lighthouse park",
    type: "shared",
    videoIds: [VIDEOS.marineDrWb.id],
    positions: [
      WESTPORT_MARINE,
      [49.35283, -123.26063],
      [49.35251, -123.26061],
      [49.35242, -123.26063],
      [49.35224, -123.26069],
      [49.35203, -123.26083],
      [49.35185, -123.26108],
      [49.35176, -123.26129],
      [49.35175, -123.26146],
      [49.35177, -123.26164],
      [49.35185, -123.26188],
      [49.35237, -123.26309],
      [49.35246, -123.26337],
      [49.35249, -123.26354],
      [49.3525, -123.26368],
      [49.35249, -123.2638],
      [49.35247, -123.26394],
      [49.35225, -123.26457],
      [49.35221, -123.26474],
      [49.35219, -123.2649],
      [49.35217, -123.26526],
      [49.35214, -123.26541],
      [49.3521, -123.26554],
      [49.35205, -123.26564],
      [49.35195, -123.2658],
      [49.3518, -123.26595],
      [49.35165, -123.26606],
      [49.35126, -123.2662],
      [49.35099, -123.26631],
      [49.35082, -123.26637],
      [49.35068, -123.26638],
      [49.34987, -123.26638],
      [49.34975, -123.26639],
      [49.34967, -123.26643],
      [49.34953, -123.26649],
      [49.34939, -123.26663],
      [49.34905, -123.26701],
      [49.34865, -123.26742],
      [49.34845, -123.26756],
      [49.34827, -123.26766],
      [49.34809, -123.26771],
      [49.34793, -123.26773],
      [49.34783, -123.26773],
      [49.34772, -123.26768],
      [49.34764, -123.2676],
      [49.34737, -123.26725],
      [49.34685, -123.26653],
      [49.34676, -123.26636],
      [49.3466, -123.26621],
      [49.34644, -123.26611],
      [49.3456, -123.26583],
      [49.34547, -123.2658],
      [49.34531, -123.26579],
      [49.3452, -123.26579],
      [49.34492, -123.26586],
      [49.34461, -123.26593],
      [49.34448, -123.26595],
      [49.34429, -123.26593],
      [49.34361, -123.26577],
      [49.34225, -123.26538],
      [49.34186, -123.26524],
      [49.34158, -123.26509],
      [49.34129, -123.26483],
      [49.34103, -123.26448],
      [49.34089, -123.26414],
      [49.34081, -123.26387],
      [49.34074, -123.2635],
      BEACON_MARINE,
    ],
  },
  {
    routeNames: [ROUTES.marineDr.name],
    description: "lighthouse park to 31st",
    type: "shared",
    videoIds: [VIDEOS.marineDrWb.id],
    positions: [
      BEACON_MARINE,
      [49.34069, -123.26264],
      [49.34064, -123.26185],
      [49.3406, -123.26154],
      [49.34055, -123.26132],
      [49.3405, -123.26117],
      [49.34039, -123.26092],
      [49.34033, -123.26066],
      [49.34031, -123.26043],
      [49.34032, -123.26016],
      [49.34037, -123.25993],
      [49.34043, -123.2597],
      [49.34082, -123.25896],
      [49.3409, -123.25875],
      [49.34092, -123.25852],
      [49.34091, -123.25828],
      [49.34089, -123.25812],
      [49.34083, -123.25789],
      [49.34044, -123.25692],
      [49.34035, -123.25658],
      [49.34031, -123.25625],
      [49.34028, -123.25599],
      [49.34029, -123.25565],
      [49.34033, -123.25538],
      [49.34061, -123.25423],
      [49.34076, -123.25337],
      [49.34109, -123.25175],
      [49.34112, -123.25151],
      [49.34111, -123.25065],
      [49.34116, -123.25026],
      [49.34123, -123.24985],
      [49.34125, -123.24955],
      [49.34123, -123.24934],
      PICCADILLY_MARINE,
      [49.34103, -123.24806],
      [49.34104, -123.24783],
      [49.34106, -123.24738],
      [49.34105, -123.24718],
      [49.34099, -123.24667],
      [49.34099, -123.24637],
      [49.34101, -123.2461],
      [49.34105, -123.24593],
      [49.3411, -123.24577],
      [49.3412, -123.24555],
      [49.34128, -123.24537],
      [49.34132, -123.24514],
      [49.34134, -123.24495],
      [49.34135, -123.24468],
      [49.34133, -123.24425],
      [49.34107, -123.24197],
      [49.34097, -123.24123],
      [49.34072, -123.23912],
      [49.34053, -123.23691],
      [49.34054, -123.2367],
      [49.34057, -123.23641],
      [49.34061, -123.23621],
      [49.34067, -123.23601],
      [49.34078, -123.23569],
      [49.34101, -123.23527],
      [49.34116, -123.235],
      [49.34139, -123.23451],
      [49.34146, -123.2343],
      [49.3415, -123.23414],
      [49.34154, -123.2339],
      [49.34154, -123.23358],
      [49.34149, -123.23289],
      [49.34149, -123.23263],
      [49.34151, -123.23234],
      [49.34154, -123.23205],
      [49.34172, -123.23122],
      [49.34176, -123.23098],
      [49.3418, -123.23057],
      [49.34197, -123.22903],
      [49.342, -123.22864],
      [49.342, -123.22839],
      [49.34197, -123.22813],
      [49.34193, -123.2279],
      [49.3418, -123.22755],
      [49.34121, -123.22625],
      [49.34065, -123.22505],
      [49.34037, -123.22463],
      [49.34029, -123.22445],
      [49.34002, -123.22373],
      [49.33965, -123.22245],
      [49.33949, -123.22195],
      [49.33942, -123.22178],
      [49.33933, -123.22163],
      [49.33924, -123.22153],
      [49.33888, -123.22116],
      [49.3388, -123.22105],
      [49.3387, -123.22088],
      [49.33858, -123.22062],
      [49.3385, -123.2203],
      [49.33845, -123.22005],
      [49.33843, -123.21966],
      [49.33844, -123.21932],
      [49.3385, -123.21885],
      [49.33865, -123.21809],
      [49.33886, -123.21728],
      [49.33913, -123.21648],
      [49.33953, -123.21571],
      [49.33983, -123.21533],
      [49.34002, -123.21501],
      [49.34014, -123.21479],
      [49.34021, -123.21459],
      [49.34043, -123.21425],
      [49.34054, -123.21414],
      [49.34067, -123.21404],
      [49.34117, -123.21383],
      [49.3413, -123.21369],
      [49.34145, -123.21354],
      [49.34166, -123.21324],
      [49.34194, -123.21279],
      [49.34201, -123.21263],
      [49.34204, -123.21249],
      [49.34206, -123.21231],
      [49.34205, -123.21215],
      [49.34178, -123.2108],
      [49.34099, -123.20654],
      [49.34032, -123.20306],
      THIRTY_FIRST_MARINE_E,
    ],
  },
  {
    routeNames: [ROUTES.marineDr.name],
    description: "31st to 26th",
    type: "painted",
    oneWay: "required",
    positions: [
      THIRTY_FIRST_MARINE_E,
      [49.34017, -123.2026],
      [49.3401, -123.20221],
      [49.33988, -123.20095],
      [49.33982, -123.20069],
      [49.33969, -123.20031],
      [49.33946, -123.19973],
      [49.33863, -123.1974],
      [49.3384, -123.19678],
      [49.33829, -123.19638],
      [49.3378, -123.19436],
      [49.33682, -123.19039],
      [49.33645, -123.18885],
      [49.33567, -123.18561],
      TWENTY_SIXTH_MARINE_E,
    ],
  },
  {
    routeNames: [ROUTES.marineDr.name],
    description: "26th to 31st",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.marineDrWb.id],
    positions: [
      TWENTY_SIXTH_MARINE_E,
      [49.33573, -123.18557],
      [49.33652, -123.18886],
      [49.3369, -123.19043],
      [49.33786, -123.19431],
      [49.33837, -123.19648],
      [49.33955, -123.19974],
      [49.3398, -123.20037],
      [49.33987, -123.20061],
      [49.33992, -123.20083],
      THIRTY_FIRST_MARINE_NE,
      THIRTY_FIRST_MARINE_E,
    ],
  },
  {
    routeNames: [ROUTES.marineDr.name],
    description: "26th to beyond 13th",
    type: "shared",
    videoIds: [VIDEOS.marineDrWb.id],
    positions: [
      TWENTY_SIXTH_MARINE_E,
      [49.33494, -123.1824],
      [49.33418, -123.17923],
      [49.33318, -123.17508],
      [49.33313, -123.17495],
      [49.33305, -123.17473],
      [49.33298, -123.17461],
      [49.33137, -123.17249],
      [49.33125, -123.17229],
      [49.33111, -123.172],
      [49.33102, -123.17179],
      [49.33077, -123.17101],
      [49.32987, -123.16811],
      [49.32937, -123.16646],
      [49.32932, -123.16631],
      [49.32889, -123.16495],
      [49.32882, -123.16469],
      [49.32874, -123.16436],
      [49.32868, -123.16397],
      [49.32865, -123.16352],
      [49.32863, -123.16227],
      [49.32863, -123.16026],
      [49.32863, -123.15931],
      [49.32861, -123.15893],
      [49.32855, -123.15829],
      [49.32832, -123.1568],
      [49.32794, -123.1544],
      [49.32781, -123.15366],
      [49.32764, -123.15232],
      [49.32757, -123.15166],
      MARINE_BEYOND_13TH,
    ],
  },
  {
    routeNames: [ROUTES.marineDr.name],
    description: "beyond 13th to taylor",
    type: "shared",
    oneWay: "required",
    positions: [
      MARINE_BEYOND_13TH,
      [49.32729, -123.15017],
      [49.32708, -123.149],
      [49.3269, -123.14795],
      [49.32678, -123.14724],
      [49.32666, -123.1464],
      [49.32662, -123.14609],
      [49.32659, -123.14558],
      [49.32659, -123.14488],
      [49.32664, -123.14347],
      [49.32678, -123.14053],
      [49.32679, -123.14037],
      [49.32692, -123.13778],
      [49.32705, -123.13495],
    ],
  },
  {
    routeNames: [ROUTES.marineDr.name],
    description: "taylor to park royal",
    type: "shared",
    oneWay: "required",
    positions: [
      [49.32725, -123.13495],
      [49.32712, -123.13778],
      [49.327, -123.14036],
      PARK_ROYAL_MARINE_NW,
    ],
  },
  {
    routeNames: [ROUTES.marineDr.name],
    description: "park royal to beyond 13th",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.marineDrWb.id],
    videoIdsStartAtStart: [VIDEOS.marineDrWb.id],
    positions: [
      PARK_ROYAL_MARINE_NW,
      [49.32695, -123.14135],
      [49.32698, -123.14152],
      [49.32688, -123.14319],
      [49.32682, -123.14425],
      [49.32679, -123.14452],
      [49.32677, -123.14546],
      [49.32677, -123.14588],
      [49.32679, -123.1462],
      [49.32683, -123.14663],
      [49.32689, -123.14709],
      [49.32738, -123.15007],
      MARINE_BEYOND_13TH,
    ],
  },
];
