import {
  ARBUTUS_GREENWAY_MARINE_N,
  ARBUTUS_GREENWAY_MARINE_S,
  BALACLAVA_MARINE_N,
  BALACLAVA_MARINE_S,
  CAMOSUN_MARINE_N,
  DUNBAR_MARINE_N,
  DUNBAR_MARINE_S,
  EAST_BLVD_MARINE_S,
  GRANVILLE_MARINE,
  MARINE_41ST_NW,
  CAMOSUN_MARINE_S,
  MARINE_70TH_N,
  MARINE_70TH_S,
  MARINE_ARTHUR_LAING_N,
  MARINE_ARTHUR_LAING_S,
  MARINE_MARINE,
  MILTON_ARBUTUS_GREENWAY,
  MARINE_41ST_SW,
  MARINE_CHANCELLOR_N,
  MARINE_CHANCELLOR_SE,
  MARINE_4TH_N,
  MARINE_4TH_S,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const SEASIDE_END = [49.27864, -123.23624];

const GRANVILLE_GAS_STATION = [49.20539, -123.14034];
const MARINE_WEST_MALL_ISH = [49.268, -123.25956];
const MARINE_WEST_MALL = [49.26862, -123.25881];
const SPANISH_BANKS_BUS_LOOP = [49.27607, -123.21541];
const BEYOND_CECIL_GREEN_PARK = [49.27056, -123.25527];

export const MARINE = [
  // sw marine
  {
    description: "connection with arbutus greenway",
    type: "uncomfortable",
    positions: [
      MILTON_ARBUTUS_GREENWAY,
      [49.20497, -123.14113],
      GRANVILLE_MARINE,
    ],
  },
  {
    routes: [ROUTES.marine.name],
    description: "from arthur laing",
    type: "uncomfortable",
    oneWay: "required",
    positions: [
      MARINE_ARTHUR_LAING_N,
      [49.2049, -123.13956],
      [49.20504, -123.13993],
      [49.20515, -123.14013],
      [49.20522, -123.14015],
      [49.2053, -123.14026],
      [49.20536, -123.14031],
      GRANVILLE_GAS_STATION,
    ],
  },
  {
    routes: [ROUTES.marine.name],
    description: "crossing granville",
    type: "uncomfortable",
    oneWay: "recommended",
    positions: [GRANVILLE_GAS_STATION, [49.20525, -123.1406], GRANVILLE_MARINE],
  },
  {
    routes: [ROUTES.marine.name],
    description: "parallel to granville",
    type: "uncomfortable",
    videos: [VIDEOS.swMarineEb, VIDEOS.arthurLaingSb],
    positions: [
      GRANVILLE_MARINE,
      [49.20532, -123.14134],
      [49.20545, -123.1417],
      [49.20555, -123.14189],
      [49.20566, -123.14205],
      [49.20579, -123.14219],
      [49.20597, -123.14228],
      [49.20627, -123.14228],
      [49.20709, -123.14226],
      [49.20801, -123.14222],
      [49.20844, -123.14219],
      MARINE_70TH_S,
    ],
  },
  {
    routes: [ROUTES.marine.name],
    description: "crossing granville at cornish",
    type: "uncomfortable",
    positions: [MARINE_70TH_S, MARINE_70TH_N],
  },
  {
    routes: [ROUTES.marine.name],
    description: "to arthur laing",
    type: "uncomfortable",
    oneWay: "required",
    videos: [VIDEOS.swMarineEb, VIDEOS.arthurLaingSb],
    positions: [
      GRANVILLE_MARINE,
      [49.20507, -123.14074],
      [49.20494, -123.14037],
      [49.20486, -123.14015],
      [49.20483, -123.1399],
      [49.20468, -123.13946],
      MARINE_ARTHUR_LAING_S,
    ],
  },
  {
    routes: [ROUTES.marine.name],
    description: "sw marine wb primary to camosun",
    oneWay: "required",
    positions: [
      MARINE_70TH_N,
      [49.20863, -123.14372],
      ARBUTUS_GREENWAY_MARINE_N,
      [49.20862, -123.14514],
      [49.20861, -123.14641],
      [49.20863, -123.14706],
      [49.20868, -123.14743],
      [49.20875, -123.1477],
      [49.20886, -123.14797],
      [49.20903, -123.1482],
      [49.2096, -123.14876],
      [49.21264, -123.15183],
      [49.21392, -123.15309],
      [49.2156, -123.15479],
      [49.21772, -123.15692],
      [49.21888, -123.15808],
      [49.2192, -123.15831],
      [49.21954, -123.15846],
      [49.2199, -123.1585],
      [49.22144, -123.15845],
      [49.22174, -123.15855],
      [49.22196, -123.15877],
      [49.22216, -123.15915],
      [49.22244, -123.1599],
      [49.22249, -123.16025],
      [49.22247, -123.16095],
      [49.22249, -123.16124],
      [49.22258, -123.16159],
      [49.22292, -123.16244],
      [49.22299, -123.16256],
      [49.22411, -123.16378],
      [49.22429, -123.16405],
      [49.2251, -123.16556],
      [49.22526, -123.16592],
      [49.22538, -123.1664],
      [49.22553, -123.16747],
      [49.2256, -123.16782],
      [49.2258, -123.16838],
      [49.22726, -123.17103],
      [49.22752, -123.17169],
      [49.22827, -123.17363],
      BALACLAVA_MARINE_N,
      [49.23014, -123.17852],
      [49.23019, -123.1789],
      [49.2302, -123.18211],
      [49.23021, -123.18364],
      [49.23027, -123.18418],
      [49.2303, -123.18436],
      DUNBAR_MARINE_N,
      [49.23123, -123.18688],
      [49.23231, -123.18974],
      [49.23326, -123.19235],
      [49.23377, -123.19374],
      [49.23443, -123.1955],
      [49.23467, -123.19603],
      MARINE_41ST_NW,
    ],
  },
  {
    routes: [ROUTES.marine.name],
    description: "sw marine wb at camosun",
    oneWay: "required",
    videos: [VIDEOS.midtownVancouverEb],
    positions: [MARINE_41ST_NW, CAMOSUN_MARINE_N],
  },
  {
    routes: [ROUTES.marine.name],
    description: "sw marine wb primary from camosun",
    oneWay: "required",
    positions: [
      CAMOSUN_MARINE_N,
      [49.23585, -123.19966],
      [49.23691, -123.20355],
      [49.23736, -123.2053],
      [49.23824, -123.20855],
      [49.23856, -123.20993],
      [49.23872, -123.21074],
      [49.23888, -123.21162],
      [49.23946, -123.2163],
      [49.23982, -123.21939],
      [49.24004, -123.22085],
      [49.24038, -123.22259],
      [49.24076, -123.22413],
      [49.24119, -123.2255],
      [49.24167, -123.22685],
      [49.24224, -123.22824],
      [49.2431, -123.22998],
      [49.24389, -123.23139],
      [49.24493, -123.23334],
      [49.24507, -123.23357],
      [49.2462, -123.23576],
      [49.24694, -123.23731],
      [49.24754, -123.23849],
      [49.24858, -123.24036],
      [49.2496, -123.2422],
      [49.25057, -123.24392],
      [49.25121, -123.24507],
      [49.25166, -123.24589],
      [49.25197, -123.2464],
      [49.2521, -123.24664],
      [49.25239, -123.24712],
      [49.25274, -123.24756],
      [49.25329, -123.24823],
      [49.25412, -123.24918],
      [49.25446, -123.24957],
      [49.25455, -123.24967],
      [49.25578, -123.25105],
      [49.25623, -123.25159],
      [49.25633, -123.25175],
      [49.25643, -123.25193],
      [49.25658, -123.25228],
      [49.25671, -123.25273],
      MARINE_MARINE,
    ],
  },
  {
    routes: [ROUTES.marine.name],
    description: "sw marine eb primary",
    oneWay: "required",
    videos: [VIDEOS.swMarineEb],
    positions: [
      MARINE_MARINE,
      [49.25654, -123.25256],
      [49.2564, -123.25231],
      [49.25625, -123.25209],
      [49.25544, -123.2512],
      [49.25439, -123.25],
      [49.2543, -123.24992],
      [49.25332, -123.24882],
      [49.25263, -123.24801],
      [49.25248, -123.24781],
      [49.25198, -123.24707],
      [49.25171, -123.24661],
      [49.25085, -123.2451],
      [49.24993, -123.24342],
      [49.24896, -123.24166],
      [49.24796, -123.23987],
      [49.24734, -123.23874],
      [49.2467, -123.23753],
      [49.24557, -123.23511],
      [49.24523, -123.23452],
      [49.24486, -123.23386],
      [49.24379, -123.23194],
      [49.24288, -123.2303],
      [49.24232, -123.22921],
      [49.242, -123.22851],
      [49.24147, -123.22726],
      [49.24123, -123.22658],
      [49.24096, -123.22579],
      [49.24058, -123.22459],
      [49.24029, -123.22348],
      [49.24008, -123.22262],
      [49.23978, -123.22106],
      [49.23965, -123.22028],
      [49.23953, -123.2194],
      [49.23924, -123.21699],
      [49.23896, -123.21464],
      [49.23872, -123.21259],
      [49.23849, -123.2111],
      [49.23834, -123.21018],
      [49.23804, -123.20877],
      [49.23751, -123.20676],
      [49.23716, -123.20546],
      [49.23607, -123.20145],
      [49.23563, -123.19981],
      [49.23506, -123.1977],
      CAMOSUN_MARINE_S,
      MARINE_41ST_SW,
      [49.23457, -123.1962],
      [49.23436, -123.19563],
      [49.23366, -123.19375],
      [49.23266, -123.19105],
      [49.23166, -123.18835],
      DUNBAR_MARINE_S,
      [49.23024, -123.18447],
      [49.23017, -123.18418],
      [49.23012, -123.18374],
      [49.2301, -123.18042],
      [49.23009, -123.17896],
      [49.23003, -123.17855],
      BALACLAVA_MARINE_S,
      [49.22858, -123.17477],
      [49.22745, -123.17182],
      [49.22718, -123.17114],
      [49.22575, -123.16849],
      [49.22556, -123.16804],
      [49.22545, -123.16759],
      [49.22532, -123.16671],
      [49.22522, -123.16619],
      [49.22504, -123.1657],
      [49.22411, -123.16398],
      [49.22386, -123.16373],
      [49.22292, -123.16268],
      [49.22281, -123.16247],
      [49.2225, -123.16167],
      [49.2224, -123.16129],
      [49.22237, -123.16092],
      [49.22239, -123.16028],
      [49.22235, -123.15995],
      [49.22208, -123.15926],
      [49.22195, -123.15906],
      [49.22179, -123.15881],
      [49.22158, -123.15868],
      [49.22131, -123.15863],
      [49.21984, -123.15869],
      [49.2195, -123.15863],
      [49.21923, -123.15851],
      [49.21892, -123.15832],
      [49.21764, -123.15707],
      [49.2155, -123.1549],
      [49.21382, -123.15321],
      [49.21257, -123.15193],
      [49.20951, -123.14884],
      [49.20895, -123.14829],
      [49.20881, -123.14807],
      [49.20869, -123.14781],
      [49.2086, -123.14749],
      [49.20854, -123.14701],
      [49.20853, -123.1464],
      ARBUTUS_GREENWAY_MARINE_S,
    ],
  },
  {
    routes: [ROUTES.marine.name],
    description: "just beyond arbutus greenway eb",
    oneWay: "required",
    videos: [VIDEOS.swMarineEb, VIDEOS.arthurLaingSb],
    positions: [ARBUTUS_GREENWAY_MARINE_S, EAST_BLVD_MARINE_S],
  },
  {
    routes: [ROUTES.marine.name],
    description: "arbutus greenway-ish to 70th",
    type: "uncomfortable",
    oneWay: "required",
    videos: [VIDEOS.swMarineEb, VIDEOS.arthurLaingSb],
    positions: [EAST_BLVD_MARINE_S, [49.20852, -123.14366], MARINE_70TH_S],
  },
  // nw marine
  {
    routes: [ROUTES.marine.name],
    description: "ubc to west mall-ish",
    type: "uncomfortable",
    positions: [
      MARINE_MARINE,
      [49.25694, -123.25349],
      [49.25707, -123.25369],
      [49.25727, -123.25394],
      [49.25751, -123.25411],
      [49.25775, -123.25422],
      [49.25793, -123.25428],
      [49.2587, -123.25456],
      [49.25904, -123.25468],
      [49.25928, -123.25485],
      [49.25942, -123.25495],
      [49.25969, -123.25523],
      [49.25977, -123.25535],
      [49.25991, -123.25564],
      [49.26006, -123.25603],
      [49.26026, -123.25668],
      [49.26037, -123.25697],
      [49.26047, -123.25718],
      [49.26058, -123.25732],
      [49.26072, -123.25746],
      [49.26097, -123.25761],
      [49.26118, -123.25769],
      [49.2613, -123.25775],
      [49.2614, -123.25785],
      [49.26147, -123.25794],
      [49.26175, -123.25841],
      [49.26185, -123.25854],
      [49.26196, -123.25862],
      [49.26209, -123.25866],
      [49.2622, -123.25866],
      [49.26261, -123.25852],
      [49.26271, -123.2585],
      [49.26283, -123.25852],
      [49.26302, -123.25862],
      [49.26313, -123.25873],
      [49.26328, -123.25893],
      [49.26343, -123.25924],
      [49.26368, -123.25978],
      [49.26396, -123.26037],
      [49.26404, -123.26048],
      [49.26418, -123.26063],
      [49.2643, -123.26069],
      [49.26443, -123.26071],
      [49.26456, -123.2607],
      [49.26488, -123.2606],
      [49.26528, -123.26047],
      [49.26551, -123.26039],
      [49.26613, -123.26033],
      [49.2664, -123.26031],
      [49.26665, -123.26028],
      [49.26684, -123.26025],
      [49.26726, -123.26006],
      [49.26747, -123.25994],
      [49.26763, -123.25984],
      MARINE_WEST_MALL_ISH,
    ],
  },
  {
    routes: [ROUTES.marine.name],
    description: "west mall-ish eb",
    type: "uncomfortable",
    oneWay: "required",
    positions: [
      MARINE_WEST_MALL_ISH,
      [49.26805, -123.25946],
      [49.26847, -123.25902],
      MARINE_WEST_MALL,
    ],
  },
  {
    routes: [ROUTES.marine.name],
    description: "west mall to chancellor",
    oneWay: "required",
    positions: [
      MARINE_WEST_MALL,
      [49.2689, -123.25834],
      [49.26956, -123.25701],
      [49.26985, -123.25645],
      [49.27061, -123.2549],
      [49.27093, -123.25425],
      MARINE_CHANCELLOR_SE,
    ],
  },
  {
    routes: [ROUTES.marine.name],
    description: "chancellor to cecil-ish",
    oneWay: "required",
    positions: [
      MARINE_CHANCELLOR_N,
      [49.27111, -123.25427],
      [49.271, -123.2544],
      [49.27067, -123.25504],
      BEYOND_CECIL_GREEN_PARK,
    ],
  },
  {
    routes: [ROUTES.marine.name],
    description: "cecil-ish to west mall",
    type: "uncomfortable",
    oneWay: "required",
    positions: [
      BEYOND_CECIL_GREEN_PARK,
      [49.26994, -123.25651],
      [49.26952, -123.25733],
      [49.26894, -123.25851],
      [49.26869, -123.25892],
      [49.26846, -123.2592],
      [49.26809, -123.25952],
      MARINE_WEST_MALL_ISH,
    ],
  },
  {
    routes: [ROUTES.marine.name],
    description: "crossing chancellor",
    type: "uncomfortable",
    positions: [MARINE_CHANCELLOR_SE, MARINE_CHANCELLOR_N],
  },
  {
    routes: [ROUTES.marine.name],
    description: "the hill",
    type: "uncomfortable",
    positions: [
      MARINE_CHANCELLOR_N,
      [49.27167, -123.25408],
      [49.27265, -123.25422],
      [49.27279, -123.25424],
      [49.27295, -123.25423],
      [49.27308, -123.25421],
      [49.27321, -123.25417],
      [49.2735, -123.25397],
      [49.27373, -123.25368],
      [49.27384, -123.25349],
      [49.27391, -123.25332],
      [49.27401, -123.25302],
      [49.27415, -123.2526],
      [49.27427, -123.25238],
      [49.27442, -123.25223],
      [49.27456, -123.25214],
      [49.27485, -123.25201],
      [49.27505, -123.2519],
      [49.27512, -123.25182],
      [49.27523, -123.25163],
      [49.2753, -123.25137],
      [49.27534, -123.25105],
      [49.27541, -123.25076],
      [49.27552, -123.25054],
      [49.27563, -123.25042],
      [49.27603, -123.25015],
      [49.27627, -123.24997],
      [49.2765, -123.24976],
      [49.27667, -123.24953],
      [49.27681, -123.24933],
      [49.27692, -123.24913],
      [49.27713, -123.2486],
      [49.27747, -123.24767],
      [49.27766, -123.24719],
      [49.27806, -123.24627],
      [49.27883, -123.2446],
      [49.27912, -123.24395],
      [49.27916, -123.24382],
      [49.27926, -123.24335],
      [49.27927, -123.24307],
      [49.27924, -123.24171],
      [49.27922, -123.2397],
      [49.27919, -123.23923],
      [49.27914, -123.2387],
      [49.27903, -123.2379],
      [49.27886, -123.2371],
      SEASIDE_END,
    ],
  },
  {
    routes: [ROUTES.marine.name, ROUTES.seasideBypass.name],
    description: "shared lane portion",
    type: "uncomfortable",
    positions: [
      SEASIDE_END,
      [49.27826, -123.23481],
      [49.27822, -123.23462],
      [49.27816, -123.23429],
      [49.27813, -123.23399],
      [49.27812, -123.23377],
      [49.27812, -123.23323],
      [49.27822, -123.23157],
      [49.27823, -123.231],
      [49.27822, -123.23054],
      [49.2782, -123.23006],
      [49.27813, -123.22935],
      [49.27809, -123.22903],
      [49.27794, -123.22815],
      [49.27786, -123.22777],
      [49.27781, -123.22757],
      [49.27757, -123.22638],
      [49.27751, -123.22593],
      [49.27744, -123.22461],
      [49.27742, -123.22417],
      [49.27738, -123.22364],
      [49.27734, -123.22327],
      [49.27726, -123.22288],
      [49.27714, -123.22235],
      [49.27677, -123.2208],
      [49.27659, -123.22007],
      [49.27652, -123.21975],
      [49.27645, -123.21937],
      [49.27641, -123.21913],
      [49.27637, -123.21876],
      [49.27633, -123.21791],
      [49.27632, -123.21756],
      [49.27629, -123.21715],
      [49.27618, -123.21603],
      [49.27615, -123.21576],
      SPANISH_BANKS_BUS_LOOP,
    ],
  },
  {
    routes: [ROUTES.marine.name, ROUTES.seasideBypass.name],
    description: "spanish banks to 4th",
    positions: [
      SPANISH_BANKS_BUS_LOOP,
      [49.27596, -123.2151],
      [49.27581, -123.21473],
      [49.27572, -123.21444],
      [49.27544, -123.2135],
      [49.27518, -123.2126],
      [49.27508, -123.21225],
      [49.27493, -123.21174],
      [49.27454, -123.21044],
      [49.27448, -123.21021],
      [49.27446, -123.20999],
      [49.27445, -123.20979],
      [49.27444, -123.20884],
      [49.27444, -123.20872],
      [49.27448, -123.20835],
      [49.27478, -123.20646],
      [49.27486, -123.20594],
      [49.27485, -123.20582],
      [49.27483, -123.20574],
      [49.27478, -123.20568],
      [49.27473, -123.20565],
      [49.27362, -123.20569],
      [49.27295, -123.20571],
      [49.27286, -123.20566],
      [49.27248, -123.20468],
      [49.2721, -123.20362],
      [49.27199, -123.20335],
      [49.27171, -123.20283],
      [49.27166, -123.20275],
      [49.27147, -123.20253],
      [49.27134, -123.20241],
      [49.27115, -123.20229],
      [49.271, -123.20224],
      [49.27086, -123.20221],
      [49.2707, -123.2022],
      [49.27048, -123.20223],
      [49.27031, -123.20227],
      [49.27012, -123.20232],
      [49.26992, -123.20233],
      [49.26969, -123.20231],
      [49.26955, -123.20227],
      [49.26942, -123.20221],
      [49.26934, -123.20215],
      [49.26924, -123.20206],
      [49.26914, -123.20195],
      [49.26901, -123.2017],
      [49.26893, -123.20147],
      [49.26889, -123.20125],
      [49.26887, -123.20109],
      [49.26888, -123.20074],
      [49.26889, -123.20049],
      [49.26886, -123.20025],
      [49.26884, -123.20016],
      [49.26881, -123.20009],
      MARINE_4TH_N,
      MARINE_4TH_S,
    ],
  },
];
