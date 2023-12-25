import {
  ARBUTUS_GREENWAY_MARINE_N,
  ARBUTUS_GREENWAY_MARINE_S,
  BALACLAVA_MARINE_N,
  BALACLAVA_MARINE_S,
  CAMOSUN_MARINE_N,
  CAMOSUN_MARINE_S,
  DUNBAR_MARINE_NE,
  DUNBAR_MARINE_NW,
  DUNBAR_MARINE_S,
  EAST_BLVD_MARINE_S,
  GRANVILLE_MARINE,
  MARINE_16TH_NNE,
  MARINE_16TH_SSE,
  MARINE_41ST_SW,
  MARINE_41ST_NW,
  MARINE_4TH_NE,
  MARINE_4TH_NW,
  MARINE_4TH_S,
  MARINE_70TH_N,
  MARINE_70TH_S,
  MARINE_ARTHUR_LAING_N,
  MARINE_ARTHUR_LAING_S,
  MARINE_CHANCELLOR_N,
  MARINE_CHANCELLOR_SE,
  MARINE_MARINE,
  MARINE_SEAWALL,
  MARINE_SEAWALL_CONNECTION_1,
  MARINE_SEAWALL_CONNECTION_2,
  MILTON_ARBUTUS_GREENWAY,
  SEASIDE_W_END,
  WESBROOK_MARINE_N,
  WESBROOK_MARINE_PRE_SLIP,
  WESBROOK_MARINE_S,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const GRANVILLE_GAS_STATION = [49.20539, -123.14034];
const GRANVILLE_SIDEWALK_START = [49.20515, -123.14013];
const MARINE_WEST_MALL_ISH = [49.268, -123.25956];
const MARINE_WEST_MALL = [49.26862, -123.25881];
const BEYOND_CECIL_GREEN_PARK = [49.27056, -123.25527];

const SPANISH_BANKS_CONNECTION_1 = [49.27726, -123.22283];
const SPANISH_BANKS_CONNECTION_2 = [49.27596, -123.2151];
const SPANISH_BANKS_CONNECTION_3_N = [49.27487, -123.20573];
const SPANISH_BANKS_CONNECTION_3_S = [49.2748, -123.20577];

const POST_TO_16TH_SLIP = [49.25165, -123.24589];
const PRE_FROM_16TH_SLIP = [49.25239, -123.24712];

const WEST_OF_MARINE_MARINE = [49.25727, -123.25394];
const WEST_OF_CAMOSUN = [49.23506, -123.1977];

const MARINE_AVERY = [49.20801, -123.14222];

export const MARINE = [
  // sw marine
  {
    description: "connection with arbutus greenway",
    type: "shared",
    videos: [VIDEOS.arbutusGreenwayNb.id],
    positions: [
      MILTON_ARBUTUS_GREENWAY,
      [49.20497, -123.14113],
      GRANVILLE_MARINE,
    ],
  },
  {
    routeNames: [ROUTES.marine.name],
    description: "from arthur laing",
    type: "shared",
    oneWay: "required",
    videos: [VIDEOS.arbutusGreenwayNb.id],
    videosStartAtStart: [VIDEOS.arbutusGreenwayNb.id],
    positions: [
      MARINE_ARTHUR_LAING_N,
      [49.2049, -123.13956],
      [49.20504, -123.13993],
      GRANVILLE_SIDEWALK_START,
    ],
  },
  {
    routeNames: [ROUTES.marine.name],
    description: "gas station sidewalk",
    type: "other",
    oneWay: "required",
    videos: [VIDEOS.arbutusGreenwayNb.id],
    positions: [
      GRANVILLE_SIDEWALK_START,
      [49.20522, -123.14015],
      [49.2053, -123.14026],
      [49.20536, -123.14031],
      GRANVILLE_GAS_STATION,
    ],
  },
  {
    routeNames: [ROUTES.marine.name],
    description: "crossing granville",
    type: "shared",
    oneWay: "recommended",
    videos: [VIDEOS.arbutusGreenwayNb.id],
    positions: [GRANVILLE_GAS_STATION, [49.20525, -123.1406], GRANVILLE_MARINE],
  },
  {
    routeNames: [ROUTES.marine.name],
    description: "parallel to granville",
    type: "shared",
    videos: [VIDEOS.swMarineEb.id, VIDEOS.arthurLaingSb.id],
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
      MARINE_AVERY,
    ],
  },
  {
    routeNames: [ROUTES.marine.name],
    description: "parallel to granville - last bit",
    type: "shared",
    videos: [
      VIDEOS.swMarineEb.id,
      VIDEOS.arthurLaingSb.id,
      VIDEOS.cypressNb.id,
    ],
    videosStartAtStart: [VIDEOS.cypressNb.id],
    positions: [MARINE_AVERY, [49.20844, -123.14219], MARINE_70TH_S],
  },
  {
    routeNames: [ROUTES.marine.name],
    description: "crossing granville at cornish",
    type: "shared",
    videos: [VIDEOS.cypressNb.id],
    positions: [MARINE_70TH_S, MARINE_70TH_N],
  },
  {
    routeNames: [ROUTES.marine.name],
    description: "to arthur laing",
    type: "shared",
    oneWay: "required",
    videos: [VIDEOS.swMarineEb.id, VIDEOS.arthurLaingSb.id],
    videosEndAtEnd: [VIDEOS.swMarineEb.id],
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
    routeNames: [ROUTES.marine.name],
    description: "sw marine wb primary to camosun",
    type: "painted",
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
      DUNBAR_MARINE_NE,
      DUNBAR_MARINE_NW,
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
    routeNames: [ROUTES.marine.name],
    description: "sw marine wb at camosun",
    type: "painted",
    oneWay: "required",
    videos: [VIDEOS.midtownVancouverEb.id],
    positions: [MARINE_41ST_NW, CAMOSUN_MARINE_N],
  },
  {
    routeNames: [ROUTES.marine.name],
    description: "sw marine wb camosun to 16th",
    type: "shoulder",
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
      WESBROOK_MARINE_PRE_SLIP,
      WESBROOK_MARINE_N,
      [49.2462, -123.23576],
      [49.24694, -123.23731],
      [49.24754, -123.23849],
      [49.24858, -123.24036],
      [49.2496, -123.2422],
      [49.25057, -123.24392],
      MARINE_16TH_SSE,
    ],
  },
  {
    routeNames: [ROUTES.marine.name],
    description: "sw marine wb 16th off ramp",
    type: "shared",
    oneWay: "required",
    hideArrows: true,
    positions: [MARINE_16TH_SSE, POST_TO_16TH_SLIP],
  },
  {
    routeNames: [ROUTES.marine.name],
    description: "sw marine wb crossing 16th",
    type: "shoulder",
    oneWay: "required",
    positions: [
      POST_TO_16TH_SLIP,
      [49.25194, -123.2464],
      [49.25209, -123.24664],
      PRE_FROM_16TH_SLIP,
    ],
  },
  {
    routeNames: [ROUTES.marine.name],
    description: "sw marine wb 16th on ramp",
    type: "shared",
    oneWay: "required",
    hideArrows: true,
    positions: [PRE_FROM_16TH_SLIP, MARINE_16TH_NNE],
  },
  {
    routeNames: [ROUTES.marine.name],
    description: "sw marine wb 16th to nw marine",
    type: "shoulder",
    oneWay: "required",
    positions: [
      MARINE_16TH_NNE,
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
    routeNames: [ROUTES.marine.name],
    description: "sw marine eb to camosun-ish",
    type: "shoulder",
    oneWay: "required",
    videos: [VIDEOS.swMarineEb.id],
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
      WESBROOK_MARINE_S,
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
      WEST_OF_CAMOSUN,
    ],
  },
  {
    routeNames: [ROUTES.marine.name],
    description: "sw marine eb near camosun",
    type: "painted",
    oneWay: "required",
    videos: [VIDEOS.swMarineEb.id, VIDEOS.midtownVancouverEb.id],
    videosStartAtStart: [VIDEOS.midtownVancouverEb.id],
    positions: [WEST_OF_CAMOSUN, CAMOSUN_MARINE_S, MARINE_41ST_SW],
  },
  {
    routeNames: [ROUTES.marine.name],
    description: "sw marine eb from camosun",
    type: "painted",
    oneWay: "required",
    videos: [VIDEOS.swMarineEb.id],
    positions: [
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
    routeNames: [ROUTES.marine.name],
    description: "just beyond arbutus greenway eb",
    type: "dedicated",
    oneWay: "required",
    videos: [VIDEOS.swMarineEb.id, VIDEOS.arthurLaingSb.id],
    videosStartAtStart: [VIDEOS.arthurLaingSb.id],
    positions: [ARBUTUS_GREENWAY_MARINE_S, EAST_BLVD_MARINE_S],
  },
  {
    routeNames: [ROUTES.marine.name],
    description: "arbutus greenway-ish to 70th",
    type: "shared",
    oneWay: "required",
    videos: [VIDEOS.swMarineEb.id, VIDEOS.arthurLaingSb.id],
    positions: [EAST_BLVD_MARINE_S, [49.20852, -123.14366], MARINE_70TH_S],
  },

  // nw marine
  {
    description: "spanish banks connection 1",
    positions: [SPANISH_BANKS_CONNECTION_1, MARINE_SEAWALL_CONNECTION_1],
  },
  {
    description: "spanish banks connection 2",
    positions: [SPANISH_BANKS_CONNECTION_2, MARINE_SEAWALL_CONNECTION_2],
  },
  {
    description: "spanish banks connection 3",
    positions: [
      SPANISH_BANKS_CONNECTION_3_S,
      SPANISH_BANKS_CONNECTION_3_N,
      MARINE_SEAWALL,
    ],
  },
  {
    routeNames: [ROUTES.marine.name],
    description: "just west of marine-marine",
    type: "shared",
    videos: [VIDEOS.swMarineEb.id],
    videosStartAtEnd: [VIDEOS.swMarineEb.id],
    positions: [
      MARINE_MARINE,
      [49.25694, -123.25349],
      [49.25707, -123.25369],
      WEST_OF_MARINE_MARINE,
    ],
  },
  {
    routeNames: [ROUTES.marine.name],
    description: "ubc-ish to west mall-ish",
    type: "shared",
    positions: [
      WEST_OF_MARINE_MARINE,
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
    routeNames: [ROUTES.marine.name],
    description: "west mall-ish eb",
    type: "shared",
    oneWay: "required",
    positions: [
      MARINE_WEST_MALL_ISH,
      [49.26805, -123.25946],
      [49.26847, -123.25902],
      MARINE_WEST_MALL,
    ],
  },
  {
    routeNames: [ROUTES.marine.name],
    description: "west mall to chancellor",
    type: "painted",
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
    routeNames: [ROUTES.marine.name],
    description: "chancellor to cecil-ish",
    type: "painted",
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
    routeNames: [ROUTES.marine.name],
    description: "cecil-ish to west mall",
    type: "shared",
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
    routeNames: [ROUTES.marine.name],
    description: "crossing chancellor",
    type: "shared",
    positions: [MARINE_CHANCELLOR_SE, MARINE_CHANCELLOR_N],
  },
  {
    routeNames: [ROUTES.marine.name],
    description: "the hill",
    type: "shared",
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
      SEASIDE_W_END,
    ],
  },
  {
    routeNames: [ROUTES.marine.name, ROUTES.seasideBypass.name],
    description: "shared lane portion",
    type: "shared",
    positions: [
      SEASIDE_W_END,
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
      SPANISH_BANKS_CONNECTION_1,
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
      [49.27607, -123.21541],
      SPANISH_BANKS_CONNECTION_2,
    ],
  },
  {
    routeNames: [ROUTES.marine.name, ROUTES.seasideBypass.name],
    description: "eb: spanish banks to 4th",
    type: "painted",
    oneWay: "required",
    positions: [
      SPANISH_BANKS_CONNECTION_2,
      [49.2759, -123.21504],
      [49.27576, -123.21468],
      [49.27565, -123.21435],
      [49.27489, -123.21173],
      [49.27453, -123.21052],
      [49.27448, -123.21034],
      [49.27445, -123.21022],
      [49.27443, -123.21009],
      [49.27442, -123.20991],
      [49.27441, -123.20874],
      [49.27442, -123.20857],
      [49.27443, -123.2084],
      [49.27481, -123.20595],
      [49.27481, -123.20585],
      SPANISH_BANKS_CONNECTION_3_S,
      [49.27477, -123.20573],
      [49.27472, -123.20571],
      [49.27361, -123.20575],
      [49.27294, -123.20579],
      [49.27289, -123.20576],
      [49.27285, -123.20573],
      [49.2728, -123.20566],
      [49.27207, -123.20363],
      [49.27194, -123.20333],
      [49.27173, -123.20295],
      [49.27163, -123.2028],
      [49.27153, -123.20267],
      [49.27135, -123.20251],
      [49.2712, -123.20242],
      [49.271, -123.20233],
      [49.27087, -123.2023],
      [49.2707, -123.2023],
      [49.27053, -123.20231],
      [49.27037, -123.20233],
      [49.27019, -123.20238],
      [49.27005, -123.20241],
      [49.26987, -123.20241],
      [49.26974, -123.2024],
      [49.2696, -123.20237],
      [49.26943, -123.20229],
      [49.2693, -123.20219],
      [49.26917, -123.20206],
      [49.26904, -123.20186],
      [49.26896, -123.20169],
      [49.26889, -123.20146],
      [49.26884, -123.2012],
      [49.26883, -123.20098],
      [49.26884, -123.20057],
      [49.26883, -123.20048],
      [49.26881, -123.20038],
      [49.26876, -123.20024],
      MARINE_4TH_NW,
    ],
  },
  {
    routeNames: [ROUTES.seasideBypass.name],
    description: "eb: crossing 4th",
    type: "shared",
    oneWay: "required",
    positions: [
      MARINE_4TH_NW,
      [49.26869, -123.20007],
      [49.26867, -123.19998],
      MARINE_4TH_S,
    ],
  },
  {
    routeNames: [ROUTES.marine.name, ROUTES.seasideBypass.name],
    description: "wb: 4th to spanish banks",
    type: "painted",
    oneWay: "required",
    positions: [
      MARINE_4TH_NE,
      [49.26887, -123.20002],
      [49.26891, -123.20015],
      [49.26893, -123.20027],
      [49.26893, -123.20045],
      [49.26891, -123.20091],
      [49.26892, -123.20112],
      [49.26894, -123.20128],
      [49.26898, -123.20145],
      [49.26905, -123.20164],
      [49.26912, -123.20179],
      [49.26918, -123.20189],
      [49.26928, -123.20202],
      [49.26935, -123.20209],
      [49.26942, -123.20214],
      [49.26951, -123.2022],
      [49.26959, -123.20224],
      [49.26967, -123.20227],
      [49.26983, -123.2023],
      [49.26998, -123.20229],
      [49.27033, -123.20223],
      [49.27058, -123.20219],
      [49.27078, -123.20217],
      [49.27096, -123.20218],
      [49.27109, -123.20223],
      [49.2712, -123.20227],
      [49.27132, -123.20234],
      [49.27146, -123.20244],
      [49.27158, -123.20256],
      [49.27166, -123.20265],
      [49.27175, -123.20276],
      [49.27191, -123.20306],
      [49.272, -123.20324],
      [49.27207, -123.20341],
      [49.27231, -123.20405],
      [49.27282, -123.2055],
      [49.27286, -123.2056],
      [49.27289, -123.20563],
      [49.27293, -123.20566],
      [49.27298, -123.20567],
      [49.27362, -123.20565],
      [49.27473, -123.2056],
      [49.27478, -123.20561],
      [49.27482, -123.20564],
      [49.27485, -123.20569],
      SPANISH_BANKS_CONNECTION_3_N,
      [49.27488, -123.2058],
      [49.27489, -123.20589],
      [49.27489, -123.206],
      [49.27452, -123.20838],
      [49.2745, -123.20856],
      [49.27449, -123.20872],
      [49.27448, -123.20883],
      [49.27449, -123.20993],
      [49.27451, -123.21011],
      [49.27453, -123.21023],
      [49.27463, -123.21058],
      [49.27497, -123.21173],
      [49.27569, -123.21422],
      [49.27579, -123.21455],
      [49.27588, -123.21478],
      [49.27594, -123.21496],
      SPANISH_BANKS_CONNECTION_2,
    ],
  },
];
