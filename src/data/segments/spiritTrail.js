import {
  ARGYLE_14TH_E,
  ARGYLE_14TH_W,
  BEWICKE_SPIRIT_N,
  BEWICKE_SPIRIT_S,
  EIGHTEENTH_BELLEVUE,
  GARDEN_SPIRIT_TRAIL,
  HEYWOOD_SPIRIT_NE,
  LIONS_GATE_SPIRIT_TRAIL_E,
  LIONS_GATE_SPIRIT_TRAIL_W,
  MACKAY_1ST_NW,
  MACKAY_1ST_SW,
  ST_ANDREWS_ESPLANADE_NE,
  ST_ANDREWS_ESPLANADE_SE,
  TATLOW_SPIRIT,
  THIRTEENTH_ARGYLE_W,
  WHONOAK_WELCH_NW,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const EIGHTEENTH_SPIRIT_TRAIL = [49.3273, -123.16223];
const ARGYLE_16TH = [49.32727, -123.15891];
const EAST_OF_13TH = [49.3266, -123.15144];
const CAPILANO_BRIDGE_WEST = [49.32468, -123.13366];
const CAPILANO_BRIDGE_EAST = [49.32425, -123.13265];
const AFTER_LIONS_GATE = [49.32322, -123.13118];
const MACKAY_OVERPASS_START = [49.31798, -123.10242];
const MACKAY_OVERPASS_END = [49.31676, -123.10163];
const HARBOURSIDE_PL_SPIRIT = [49.31341, -123.09699];
const HARBOURSIDE_PL_SIDEWALK = [49.31399, -123.09702];
const GOSTICK_HARBOURSIDE = [49.31449, -123.09279];
const SPIRIT_MAHON_S = [49.31282, -123.08662];
const SPIRIT_MAHON_N = [49.31321, -123.08622];
const CARRIE_CATES_LANE_W = [49.31215, -123.08435];
const CHESTERFIELD_CARRIE_CATES_SW = [49.31173, -123.0834];
const QUAY_UNDERGROUND_WEST = [49.31148, -123.08236];
const QUAY_UNDERGROUND_EAST = [49.31113, -123.08152];
const SAINT_DAVIDS_ALDER_W = [49.30596, -123.06662];
const SAINT_DAVIDS_1ST_E = [49.30675, -123.066];
const SPIRIT_ALDER_E = [49.30648, -123.06235];
const RIDGEWAY_1ST = [49.30688, -123.06265];
const FIRST_2ND = [49.30753, -123.06148];
const E_3RD_OVERPASS_WEST = [49.30834, -123.05099];
const E_3RD_OVERPASS_EAST = [49.30862, -123.05059];
const MOODY_2ND = [49.30756, -123.06031];
const NEPTUNE_SPIRIT = [49.30834, -123.05118];

export const SPIRIT_TRAIL = [
  {
    description: "18th, connect with bellevue",
    type: "quiet",
    positions: [EIGHTEENTH_SPIRIT_TRAIL, EIGHTEENTH_BELLEVUE],
  },
  {
    description: "connection to queensbury/3rd",
    type: "mixed",
    positions: [
      MOODY_2ND,
      [49.30758, -123.06018],
      [49.30762, -123.06008],
      [49.30773, -123.06006],
      [49.30782, -123.05995],
      [49.30782, -123.05983],
      [49.30784, -123.05973],
      [49.30794, -123.05949],
      [49.30796, -123.05939],
      [49.30798, -123.05921],
      [49.30797, -123.05893],
      [49.30796, -123.05864],
      [49.30795, -123.05817],
      [49.30792, -123.05744],
      [49.30794, -123.05724],
      [49.30798, -123.05708],
      [49.30807, -123.05701],
      [49.30815, -123.05697],
      [49.30822, -123.05699],
      [49.30833, -123.0571],
      [49.30836, -123.05711],
    ],
  },
  {
    description: "connection low level at neptune",
    type: "mixed",
    positions: [
      [49.30784, -123.0528],
      [49.30805, -123.0529],
      [49.30816, -123.05229],
      [49.30824, -123.05177],
      [49.30828, -123.05133],
      [49.3083, -123.05123],
      NEPTUNE_SPIRIT,
    ],
  },

  {
    routeNames: [ROUTES.spiritTrail.name],
    description: "18th to 16th",
    type: "comfortable",
    videoIds: [VIDEOS.spiritTrailEb.id],
    videoIdsStartAtStart: [VIDEOS.spiritTrailEb.id],
    positions: [
      EIGHTEENTH_SPIRIT_TRAIL,
      [49.32728, -123.16083],
      [49.32728, -123.16038],
      [49.32729, -123.16012],
      [49.32728, -123.15899],
      ARGYLE_16TH,
    ],
  },
  {
    routeNames: [ROUTES.spiritTrail.name],
    description: "argyle: 16th to 14th",
    type: "quiet",
    videoIds: [VIDEOS.spiritTrailEb.id],
    positions: [
      ARGYLE_16TH,
      [49.32725, -123.15886],
      [49.32724, -123.15876],
      [49.32719, -123.15679],
      [49.32715, -123.15458],
      ARGYLE_14TH_W,
    ],
  },
  {
    routeNames: [ROUTES.spiritTrail.name],
    description: "across 14th",
    type: "comfortable",
    videoIds: [VIDEOS.spiritTrailEb.id],
    positions: [ARGYLE_14TH_W, [49.3271, -123.15451], ARGYLE_14TH_E],
  },
  {
    routeNames: [ROUTES.spiritTrail.name],
    description: "14th to east of 13th",
    type: "comfortable",
    videoIds: [VIDEOS.spiritTrailEb.id, VIDEOS.bellevueWb.id],
    videoIdsStartAtEnd: [VIDEOS.bellevueWb.id],
    positions: [
      ARGYLE_14TH_E,
      [49.32695, -123.15331],
      [49.32689, -123.15292],
      THIRTEENTH_ARGYLE_W,
      [49.32675, -123.15234],
      [49.32669, -123.15228],
      [49.32656, -123.15207],
      [49.3266, -123.15201],
      [49.32666, -123.15193],
      [49.32668, -123.15181],
      [49.32667, -123.15171],
      EAST_OF_13TH,
    ],
  },
  {
    routeNames: [ROUTES.spiritTrail.name],
    description: "east of 13th to bridge st",
    type: "comfortable",
    elevation: 0.5,
    videoIds: [VIDEOS.spiritTrailEb.id],
    positions: [
      EAST_OF_13TH,
      [49.32649, -123.15108],
      [49.32639, -123.1508],
      [49.32587, -123.14957],
      [49.32549, -123.14869],
      [49.32492, -123.14741],
      [49.32476, -123.14709],
      [49.32452, -123.14662],
      [49.3241, -123.14586],
      [49.32404, -123.14574],
      [49.32399, -123.1456],
      [49.32395, -123.14545],
      [49.32383, -123.14511],
      [49.32367, -123.1447],
      [49.32324, -123.14377],
      [49.32288, -123.14289],
      [49.3226, -123.14215],
      [49.32244, -123.14185],
      [49.32233, -123.14155],
      [49.32228, -123.14133],
      [49.32216, -123.14099],
      [49.32193, -123.14048],
      [49.32192, -123.14032],
      [49.32192, -123.14015],
      [49.32194, -123.14009],
      [49.32201, -123.13997],
      [49.32207, -123.13994],
      [49.32219, -123.13994],
      [49.32229, -123.13988],
      [49.32244, -123.1399],
      [49.32265, -123.13984],
      [49.32304, -123.13961],
      [49.32322, -123.13953],
      [49.32347, -123.13954],
      [49.32358, -123.1395],
      [49.32377, -123.13935],
      [49.32377, -123.13916],
      [49.32376, -123.13903],
      [49.32376, -123.13897],
      [49.32379, -123.13877],
      [49.32379, -123.13859],
      [49.32373, -123.13818],
      [49.32372, -123.13801],
      [49.32373, -123.13776],
      [49.32372, -123.13765],
      [49.32371, -123.13698],
      [49.32375, -123.13674],
      [49.32379, -123.13654],
      [49.32386, -123.13633],
      [49.32393, -123.13619],
      [49.32416, -123.13563],
      [49.32426, -123.13537],
      [49.32448, -123.13471],
      [49.32458, -123.13448],
      [49.32461, -123.13448],
      [49.32471, -123.13454],
      [49.32477, -123.13454],
      [49.32476, -123.13423],
      [49.32475, -123.13397],
      [49.32473, -123.13384],
      CAPILANO_BRIDGE_WEST,
    ],
  },
  {
    routeNames: [ROUTES.spiritTrail.name],
    description: "capilano river bridge",
    type: "comfortable",
    elevation: 1,
    videoIds: [VIDEOS.spiritTrailEb.id],
    positions: [CAPILANO_BRIDGE_WEST, CAPILANO_BRIDGE_EAST],
  },
  {
    routeNames: [ROUTES.spiritTrail.name],
    description: "capilano river to lions gate",
    type: "comfortable",
    elevation: 0.5,
    videoIds: [VIDEOS.spiritTrailEb.id],
    positions: [
      CAPILANO_BRIDGE_EAST,
      [49.32393, -123.13184],
      [49.3238, -123.13161],
      [49.32369, -123.1315],
      LIONS_GATE_SPIRIT_TRAIL_W,
    ],
  },
  {
    routeNames: [ROUTES.spiritTrail.name],
    description: "under lions gate",
    type: "comfortable",
    videoIds: [VIDEOS.spiritTrailEb.id, VIDEOS.lionsGateBridgeSb.id],
    positions: [
      LIONS_GATE_SPIRIT_TRAIL_W,
      [49.32369, -123.13123],
      LIONS_GATE_SPIRIT_TRAIL_E,
    ],
  },
  {
    routeNames: [ROUTES.spiritTrail.name],
    description: "south of lions gate",
    type: "comfortable",
    videoIds: [VIDEOS.spiritTrailEb.id, VIDEOS.lionsGateBridgeSb.id],
    videoIdsStartAtEnd: [VIDEOS.lionsGateBridgeSb.id],
    positions: [LIONS_GATE_SPIRIT_TRAIL_E, AFTER_LIONS_GATE],
  },
  {
    routeNames: [ROUTES.spiritTrail.name],
    description: "lions gate to mackay",
    type: "comfortable",
    elevation: 0.5,
    videoIds: [VIDEOS.spiritTrailEb.id],
    positions: [
      AFTER_LIONS_GATE,
      [49.32289, -123.13143],
      [49.32283, -123.1316],
      [49.32182, -123.13253],
      [49.32173, -123.1326],
      [49.32169, -123.13261],
      [49.32165, -123.13259],
      [49.32159, -123.1325],
      [49.32144, -123.13199],
      [49.32119, -123.13123],
      [49.32108, -123.13086],
      [49.32101, -123.1306],
      [49.32057, -123.12919],
      [49.32041, -123.12867],
      [49.32028, -123.12829],
      [49.32013, -123.12788],
      [49.31992, -123.12753],
      [49.31967, -123.12719],
      [49.3195, -123.12697],
      [49.3194, -123.12681],
      [49.31931, -123.12663],
      [49.31914, -123.12619],
      [49.31871, -123.12503],
      [49.31862, -123.12479],
      [49.31855, -123.12459],
      [49.3184, -123.12408],
      [49.31821, -123.12337],
      [49.31797, -123.12265],
      [49.3179, -123.12237],
      [49.31786, -123.12216],
      WHONOAK_WELCH_NW,
      [49.3178, -123.12111],
      [49.31782, -123.12065],
      [49.31789, -123.12031],
      [49.318, -123.11997],
      [49.31802, -123.11973],
      [49.31804, -123.11881],
      [49.31804, -123.11865],
      [49.31803, -123.11851],
      [49.31795, -123.1183],
      [49.31793, -123.11821],
      GARDEN_SPIRIT_TRAIL,
      TATLOW_SPIRIT,
      [49.31797, -123.1173],
      [49.31787, -123.11661],
      [49.31786, -123.11642],
      [49.31795, -123.11532],
      [49.31799, -123.11477],
      [49.31795, -123.1143],
      [49.31794, -123.11391],
      [49.31788, -123.11345],
      [49.31788, -123.1132],
      [49.31789, -123.11289],
      [49.31788, -123.11271],
      [49.31779, -123.11224],
      [49.3178, -123.11197],
      [49.31783, -123.11178],
      [49.31797, -123.11117],
      [49.31802, -123.11101],
      [49.31801, -123.11042],
      [49.31797, -123.11001],
      [49.31794, -123.10943],
      [49.3179, -123.10926],
      [49.31786, -123.10916],
      [49.31777, -123.10901],
      [49.31766, -123.10886],
      [49.31764, -123.1088],
      [49.31762, -123.10872],
      [49.31762, -123.10791],
      [49.3176, -123.10643],
      [49.31756, -123.10599],
      [49.31755, -123.10591],
      [49.31756, -123.10582],
      [49.31771, -123.10501],
      [49.31793, -123.10397],
      [49.31794, -123.10382],
      [49.31799, -123.10361],
      [49.31801, -123.10349],
      [49.31822, -123.10254],
      MACKAY_1ST_NW,
      MACKAY_1ST_SW,
      [49.31801, -123.10245],
      MACKAY_OVERPASS_START,
    ],
  },
  {
    routeNames: [ROUTES.spiritTrail.name],
    description: "mackay overpass",
    type: "comfortable",
    elevation: 1,
    videoIds: [VIDEOS.spiritTrailEb.id],
    positions: [
      MACKAY_OVERPASS_START,
      [49.31794, -123.10239],
      [49.31792, -123.10239],
      [49.31791, -123.10241],
      [49.3179, -123.10243],
      [49.31791, -123.10246],
      [49.31793, -123.10248],
      [49.31796, -123.10249],
      [49.31797, -123.10251],
      [49.31798, -123.10252],
      [49.31799, -123.10256],
      [49.31797, -123.10261],
      [49.31795, -123.10263],
      [49.31792, -123.10262],
      [49.31789, -123.10258],
      [49.31787, -123.10251],
      [49.31786, -123.10246],
      [49.31783, -123.10241],
      [49.31779, -123.1024],
      [49.31773, -123.10242],
      [49.31769, -123.10247],
      [49.31767, -123.10249],
      [49.31762, -123.10253],
      [49.31756, -123.10253],
      [49.31749, -123.10249],
      [49.31716, -123.10195],
      [49.31704, -123.10177],
      [49.31698, -123.1017],
      [49.3169, -123.10165],
      [49.31686, -123.10164],
      MACKAY_OVERPASS_END,
    ],
  },
  {
    routeNames: [ROUTES.spiritTrail.name],
    description: "mackay to harbourside construction",
    type: "comfortable",
    elevation: 0.5,
    videoIds: [VIDEOS.spiritTrailEb.id],
    positions: [
      MACKAY_OVERPASS_END,
      [49.3167, -123.10163],
      [49.3166, -123.10166],
      [49.31645, -123.10166],
      [49.31629, -123.10163],
      [49.31593, -123.10165],
      [49.31568, -123.10161],
      [49.31518, -123.10162],
      [49.31489, -123.10166],
      [49.31466, -123.10162],
      [49.3146, -123.1017],
      [49.31436, -123.10165],
      [49.31402, -123.10166],
      [49.31377, -123.10164],
      [49.31376, -123.10085],
      [49.31374, -123.10034],
      [49.31366, -123.10011],
      [49.31361, -123.09995],
      [49.3136, -123.0998],
      [49.31359, -123.09954],
      [49.31357, -123.0979],
      [49.31355, -123.09757],
      [49.31352, -123.09739],
      [49.31344, -123.09715],
      HARBOURSIDE_PL_SPIRIT,
    ],
  },
  {
    routeNames: [ROUTES.spiritTrail.name],
    description: "harbourside construction",
    type: "comfortable",
    isClosed: true,
    positions: [
      HARBOURSIDE_PL_SPIRIT,
      [49.31341, -123.09701],
      [49.31339, -123.09687],
      [49.31337, -123.09493],
      [49.31327, -123.09487],
      [49.31326, -123.09483],
      [49.31333, -123.0929],
      [49.3144, -123.09292],
      [49.31443, -123.09291],
      GOSTICK_HARBOURSIDE,
    ],
  },
  {
    description: "harbourside construction detour 1",
    type: "other",
    undesignated: true,
    videoIds: [VIDEOS.spiritTrailEb.id],
    positions: [
      HARBOURSIDE_PL_SPIRIT,
      [49.31349, -123.09695],
      [49.31351, -123.09695],
      [49.31354, -123.09698],
      [49.3136, -123.09701],
      [49.31365, -123.09702],
      HARBOURSIDE_PL_SIDEWALK,
    ],
  },
  {
    description: "harbourside construction detour 2",
    type: "shared",
    undesignated: true,
    videoIds: [VIDEOS.spiritTrailEb.id],
    positions: [
      HARBOURSIDE_PL_SIDEWALK,
      [49.31404, -123.0969],
      [49.31455, -123.09689],
      [49.31452, -123.09304],
      GOSTICK_HARBOURSIDE,
    ],
  },
  {
    routeNames: [ROUTES.spiritTrail.name],
    description: "harbourside construction to bewicke",
    type: "comfortable",
    videoIds: [VIDEOS.spiritTrailEb.id],
    positions: [
      GOSTICK_HARBOURSIDE,
      [49.31453, -123.09267],
      [49.31454, -123.09261],
      BEWICKE_SPIRIT_S,
    ],
  },
  {
    routeNames: [ROUTES.spiritTrail.name, ROUTES.bewickeGreenway.name],
    description: "bewicke overlap",
    type: "mixed",
    videoIds: [VIDEOS.spiritTrailEb.id],
    positions: [BEWICKE_SPIRIT_S, [49.31455, -123.09178], BEWICKE_SPIRIT_N],
  },
  {
    routeNames: [ROUTES.spiritTrail.name],
    description: "bewicke to mahon",
    type: "comfortable",
    videoIds: [VIDEOS.spiritTrailEb.id],
    positions: [
      BEWICKE_SPIRIT_N,
      [49.31465, -123.09152],
      [49.31454, -123.09109],
      [49.31449, -123.09072],
      [49.31448, -123.09066],
      [49.31487, -123.09027],
      [49.31487, -123.09022],
      [49.31482, -123.09005],
      [49.31468, -123.08967],
      [49.31465, -123.08945],
      [49.31462, -123.08936],
      [49.31458, -123.08931],
      [49.31452, -123.0891],
      [49.31445, -123.08892],
      [49.31441, -123.08884],
      [49.31432, -123.08874],
      [49.31424, -123.08855],
      [49.31422, -123.08844],
      [49.31409, -123.08826],
      [49.31403, -123.08814],
      [49.31399, -123.08798],
      [49.31389, -123.08782],
      [49.31386, -123.08774],
      [49.31383, -123.08761],
      [49.31375, -123.08744],
      [49.31368, -123.08736],
      [49.31347, -123.0873],
      [49.31343, -123.08727],
      [49.31332, -123.08718],
      [49.31322, -123.08713],
      [49.31308, -123.08711],
      [49.31297, -123.08704],
      [49.3128, -123.0869],
      SPIRIT_MAHON_S,
    ],
  },
  {
    routeNames: [ROUTES.spiritTrail.name],
    description: "mahon",
    type: "quiet",
    videoIds: [VIDEOS.spiritTrailEb.id],
    positions: [SPIRIT_MAHON_S, [49.31314, -123.0863], SPIRIT_MAHON_N],
  },
  {
    routeNames: [ROUTES.spiritTrail.name],
    description: "mahon to lane",
    type: "comfortable",
    videoIds: [VIDEOS.spiritTrailEb.id],
    positions: [
      SPIRIT_MAHON_N,
      [49.31298, -123.0859],
      [49.31263, -123.08534],
      [49.31242, -123.08496],
      CARRIE_CATES_LANE_W,
    ],
  },
  {
    routeNames: [ROUTES.spiritTrail.name],
    description: "lane to chesterfield",
    type: "quiet",
    videoIds: [VIDEOS.spiritTrailEb.id],
    positions: [CARRIE_CATES_LANE_W, CHESTERFIELD_CARRIE_CATES_SW],
  },
  {
    routeNames: [ROUTES.spiritTrail.name],
    description: "chesterfield to quay",
    type: "comfortable",
    elevation: -0.5,
    videoIds: [VIDEOS.spiritTrailEb.id],
    positions: [
      CHESTERFIELD_CARRIE_CATES_SW,
      [49.31169, -123.08343],
      [49.31163, -123.0833],
      [49.31164, -123.08321],
      [49.31175, -123.0831],
      [49.31161, -123.08278],
      [49.31161, -123.08266],
      QUAY_UNDERGROUND_WEST,
    ],
  },
  {
    routeNames: [ROUTES.spiritTrail.name],
    description: "quay",
    type: "comfortable",
    elevation: -1,
    videoIds: [VIDEOS.spiritTrailEb.id],
    positions: [QUAY_UNDERGROUND_WEST, QUAY_UNDERGROUND_EAST],
  },
  {
    routeNames: [ROUTES.spiritTrail.name],
    description: "quay to alder",
    type: "comfortable",
    elevation: -0.5,
    videoIds: [VIDEOS.spiritTrailEb.id],
    positions: [
      QUAY_UNDERGROUND_EAST,
      [49.31091, -123.08105],
      [49.31074, -123.0812],
      [49.3106, -123.08089],
      [49.31026, -123.08121],
      [49.30991, -123.08043],
      [49.30984, -123.08027],
      [49.30972, -123.08005],
      [49.30963, -123.08005],
      [49.30928, -123.07923],
      [49.30918, -123.07894],
      [49.30915, -123.07886],
      [49.30903, -123.07858],
      [49.30882, -123.0781],
      [49.30868, -123.07778],
      [49.30873, -123.07766],
      [49.30929, -123.0771],
      [49.30923, -123.07694],
      [49.3093, -123.0767],
      [49.3095, -123.07648],
      [49.30954, -123.07637],
      [49.30953, -123.07629],
      [49.30941, -123.07598],
      [49.3094, -123.07584],
      [49.30937, -123.07576],
      [49.30925, -123.07548],
      [49.30917, -123.07534],
      [49.30812, -123.07329],
      ST_ANDREWS_ESPLANADE_SE,
      ST_ANDREWS_ESPLANADE_NE,
      [49.3083, -123.07306],
      [49.30803, -123.0725],
      [49.30782, -123.07202],
      [49.30775, -123.07192],
      [49.30743, -123.07123],
      [49.30723, -123.07075],
      [49.3071, -123.07063],
      [49.30703, -123.07049],
      [49.30662, -123.06959],
      [49.30642, -123.06899],
      [49.30632, -123.06882],
      [49.30609, -123.06823],
      [49.30594, -123.06767],
      [49.30587, -123.06724],
      [49.30586, -123.06696],
      [49.3059, -123.06671],
      SAINT_DAVIDS_ALDER_W,
    ],
  },
  {
    routeNames: [ROUTES.spiritTrail.name],
    description: "alder",
    type: "quiet",
    videoIds: [VIDEOS.spiritTrailEb.id],
    positions: [
      SAINT_DAVIDS_ALDER_W,
      [49.3059, -123.0665],
      [49.30587, -123.06635],
      [49.30588, -123.06622],
      [49.3059, -123.06612],
      [49.306, -123.06541],
      [49.30613, -123.06437],
      SPIRIT_ALDER_E,
    ],
  },
  {
    routeNames: [ROUTES.spiritTrail.name],
    description: "alder to 1st squiggle",
    type: "comfortable",
    videoIds: [VIDEOS.spiritTrailEb.id],
    positions: [
      SPIRIT_ALDER_E,
      [49.30661, -123.06243],
      [49.30662, -123.06246],
      [49.30661, -123.06252],
      [49.30662, -123.06255],
      [49.30665, -123.06256],
      [49.30667, -123.06252],
      [49.30671, -123.06249],
      [49.30673, -123.06252],
      [49.30672, -123.06258],
      [49.30674, -123.06265],
      [49.30677, -123.06264],
      [49.30679, -123.06259],
      [49.30682, -123.06259],
      RIDGEWAY_1ST,
    ],
  },
  {
    routeNames: [ROUTES.spiritTrail.name],
    description: "saint davids",
    type: "comfortable",
    positions: [
      SAINT_DAVIDS_ALDER_W,
      [49.30602, -123.06656],
      [49.30604, -123.06651],
      [49.30603, -123.06644],
      [49.30601, -123.0664],
      [49.30601, -123.06635],
      [49.30603, -123.06628],
      [49.30607, -123.06626],
      [49.30611, -123.06626],
      [49.30615, -123.06631],
      [49.30621, -123.06632],
      [49.30629, -123.06623],
      [49.3064, -123.06624],
      [49.30644, -123.06627],
      [49.30648, -123.06628],
      [49.3065, -123.06624],
      [49.30651, -123.06618],
      [49.30651, -123.06603],
      [49.30657, -123.066],
      SAINT_DAVIDS_1ST_E,
    ],
  },
  {
    routeNames: [ROUTES.spiritTrail.name],
    description: "1st: saint davids to squiggle",
    type: "quiet",
    positions: [
      SAINT_DAVIDS_1ST_E,
      [49.30672, -123.0633],
      [49.30673, -123.06319],
      [49.30676, -123.06309],
      RIDGEWAY_1ST,
    ],
  },
  {
    routeNames: [ROUTES.spiritTrail.name],
    description: "1st: squiggle to 2nd",
    type: "quiet",
    videoIds: [VIDEOS.spiritTrailEb.id],
    positions: [
      RIDGEWAY_1ST,
      [49.30716, -123.06166],
      [49.3072, -123.06157],
      [49.30725, -123.0615],
      [49.3073, -123.06147],
      FIRST_2ND,
    ],
  },
  {
    routeNames: [ROUTES.spiritTrail.name],
    description: "1st to 3rd overpass",
    type: "comfortable",
    elevation: 0.5,
    videoIds: [VIDEOS.spiritTrailEb.id],
    positions: [
      FIRST_2ND,
      [49.30753, -123.0604],
      [49.30754, -123.06034],
      MOODY_2ND,
      [49.30754, -123.06025],
      [49.30749, -123.06014],
      [49.30748, -123.06007],
      [49.30749, -123.06],
      [49.30753, -123.05987],
      [49.30753, -123.05981],
      [49.30751, -123.05974],
      [49.30748, -123.05972],
      [49.30743, -123.0597],
      [49.30735, -123.05969],
      [49.30729, -123.05965],
      [49.30724, -123.05955],
      [49.30719, -123.05936],
      [49.30716, -123.05912],
      [49.30715, -123.05884],
      [49.30717, -123.05866],
      [49.30796, -123.05519],
      [49.30799, -123.05498],
      [49.30801, -123.05484],
      [49.30801, -123.0545],
      [49.30802, -123.05423],
      [49.30826, -123.05308],
      [49.3083, -123.05244],
      [49.30832, -123.05179],
      NEPTUNE_SPIRIT,
      E_3RD_OVERPASS_WEST,
    ],
  },
  {
    routeNames: [ROUTES.spiritTrail.name],
    description: "3rd overpass",
    type: "comfortable",
    elevation: 1,
    videoIds: [VIDEOS.spiritTrailEb.id],
    positions: [E_3RD_OVERPASS_WEST, E_3RD_OVERPASS_EAST],
  },
  {
    routeNames: [ROUTES.spiritTrail.name],
    description: "3rd overpass to east end",
    type: "comfortable",
    elevation: 0.5,
    videoIds: [VIDEOS.spiritTrailEb.id],
    videoIdsEndAtEnd: [VIDEOS.spiritTrailEb.id],
    positions: [
      E_3RD_OVERPASS_EAST,
      [49.30865, -123.05054],
      [49.30871, -123.05021],
      [49.30872, -123.05001],
      [49.30875, -123.04986],
      [49.30884, -123.04964],
      [49.30884, -123.04958],
      [49.30883, -123.04954],
      [49.30877, -123.04944],
      HEYWOOD_SPIRIT_NE,
      [49.30905, -123.0489],
      [49.30912, -123.04863],
      [49.30913, -123.04844],
      [49.30916, -123.04831],
      [49.30925, -123.04814],
      [49.30932, -123.04795],
      [49.30935, -123.04781],
      [49.30935, -123.04765],
      [49.30931, -123.04744],
      [49.30931, -123.04727],
      [49.30932, -123.04718],
      [49.30933, -123.04708],
      [49.30942, -123.04681],
      [49.30944, -123.04652],
      [49.30945, -123.04606],
      [49.30942, -123.04394],
      [49.30934, -123.04386],
    ],
  },
];
