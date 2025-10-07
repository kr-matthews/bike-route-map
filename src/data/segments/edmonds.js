import {
  BC_PARKWAY_14TH,
  BC_PARKWAY_EDMONDS_BAD,
  BC_PARKWAY_EDMONDS_GOOD,
  BURGESS_12TH,
  EDMONDS_KINGSWAY_SW,
  EIGHTEENTH_STRIDE_W,
  FIFTEENTH_14TH_N,
  FIFTEENTH_STRIDE,
  MARY_16TH,
  MARY_19TH,
  PRENTER_RUMBLE_ISH,
  SALISBURY_BERESFORD_S_E,
  SAMPLES_HIGHLAND_PARK_LINE,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const EDMONDS_BAD_PATH_E = [49.21302, -122.95976];
const EDMONDS_STATION_18TH = [49.21257, -122.95893];
const EDMONDS_PARKING_N = [49.2129, -122.95955];
const EIGHTEENTH_EDMONDS_SW = [49.21507, -122.95706];
const EIGHTEENTH_EDMONDS_SE = [49.21517, -122.95687];
const EIGHTEENTH_EDMONDS_NE = [49.21537, -122.95703];
const EIGHTEENTH_14TH_NE = [49.2116, -122.95242];
const EIGHTEENTH_18TH_NW = [49.21425, -122.95605];
const LEESIDE_18TH_NW = [49.2149, -122.95505];
const SIXTEENTH_18TH_NW = [49.21618, -122.95275];
const BRITTON_18TH = [49.21782, -122.94956];
const BRITTON_16TH = [49.2164, -122.94777];
const BURGESS_14TH_W = [49.21952, -122.937];
const BURGESS_14TH_E = [49.21961, -122.93678];
const BRITTON_STRIDE = [49.21584, -122.94711];

const OVERPASS_14TH_W = [49.20913, -122.95711];
const OVERPASS_14TH_E = [49.20896, -122.95666];
const OVERPASS_GRIFFITHS_W = [49.20858, -122.95376];
const OVERPASS_GRIFFITHS_E = [49.20912, -122.95276];

const SALISBURY_BERESFORD_E = [49.21704, -122.95743];
const ACORN_KINGSWAY_S = [49.21828, -122.95572];
const HALL_KINGSWAY_SW = [49.21828, -122.95506];
const BRITTON_KINGSWAY_S = [49.21815, -122.94983];
const KINGSWAY_PRE_19TH = [49.21809, -122.94912];
const KINGSWAY_19TH_SW = [49.21802, -122.94852];

export const EDMONDS = [
  {
    routeNames: [ROUTES.edmonds.name],
    description: "vista",
    type: "mixed",
    positions: [
      [49.21972, -122.95067],
      [49.2201, -122.95017],
      [49.22038, -122.94966],
      [49.22038, -122.94962],
      [49.22048, -122.94945],
      [49.2208, -122.94912],
      [49.22086, -122.94901],
      [49.22095, -122.94898],
      [49.221, -122.94901],
      [49.22109, -122.94901],
      [49.22125, -122.94896],
    ],
  },

  {
    routeNames: [ROUTES.edmonds.name],
    description: "sample's path",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.edmondsSamplesSb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.edmondsSamplesSb.id],
    positions: [
      PRENTER_RUMBLE_ISH,
      [49.21476, -122.96154],
      [49.21481, -122.96127],
      [49.21491, -122.96161],
      [49.21502, -122.96189],
      [49.21505, -122.96201],
      [49.2152, -122.96202],
      [49.21532, -122.96203],
      [49.21539, -122.96199],
      [49.21543, -122.96191],
      [49.21548, -122.9619],
      [49.21567, -122.96209],
      [49.21574, -122.9621],
      [49.21588, -122.96207],
      [49.21595, -122.96209],
      [49.21602, -122.96214],
      [49.21605, -122.96214],
      [49.2161, -122.96214],
      [49.21623, -122.9621],
      [49.21647, -122.96209],
      [49.21654, -122.96212],
      [49.21657, -122.9622],
      [49.21661, -122.96228],
      [49.21674, -122.96235],
      [49.21689, -122.96234],
      SAMPLES_HIGHLAND_PARK_LINE,
    ],
  },

  // edmonds station
  {
    routeNames: [ROUTES.edmonds.name],
    description: "bc parkway to edmonds station - bad",
    type: "other",
    positions: [
      BC_PARKWAY_EDMONDS_BAD,
      [49.21236, -122.9603],
      [49.21245, -122.96027],
      [49.21256, -122.96016],
      [49.21275, -122.96008],
      [49.21294, -122.96001],
      [49.21297, -122.95991],
      EDMONDS_BAD_PATH_E,
    ],
  },
  {
    routeNames: [ROUTES.edmonds.name],
    description: "bc parkway to edmonds station - good",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.edmonds18thEb.id],
    videoIdsStartAtStart: [ROUTE_VIDEOS.edmonds18thEb.id],
    positions: [
      BC_PARKWAY_EDMONDS_GOOD,
      [49.21358, -122.96036],
      [49.21348, -122.96036],
      [49.21319, -122.96013],
      [49.21314, -122.96003],
      [49.21311, -122.96],
      [49.21308, -122.95992],
      [49.21304, -122.95986],
      EDMONDS_BAD_PATH_E,
      [49.21302, -122.9597],
      EDMONDS_PARKING_N,
    ],
  },
  {
    routeNames: [ROUTES.edmonds.name],
    description: "edmonds station parking lot",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.edmonds18thEb.id],
    positions: [
      EDMONDS_PARKING_N,
      [49.21285, -122.95946],
      [49.21252, -122.9592],
      [49.21246, -122.95898],
      EDMONDS_STATION_18TH,
    ],
  },

  // 18th ave/19th ave
  {
    routeNames: [ROUTES.edmonds.name],
    description: "18th ave, edmonds station to 18th street",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.edmonds18thEb.id],
    positions: [
      EDMONDS_STATION_18TH,
      [49.21259, -122.95887],
      [49.21297, -122.95818],
      [49.21299, -122.95812],
      [49.21302, -122.95808],
      [49.21306, -122.95802],
      [49.21324, -122.95773],
      [49.2136, -122.95718],
      [49.2139, -122.95667],
      [49.21395, -122.95654],
      [49.21405, -122.95643],
      [49.21424, -122.95609],
      EIGHTEENTH_18TH_NW,
    ],
  },
  {
    routeNames: [ROUTES.edmonds.name],
    description: "18th ave, 18th to leeside",
    type: "dedicated",
    videoIds: [ROUTE_VIDEOS.edmonds18thEb.id, ROUTE_VIDEOS.edmonds18thNb.id],
    positions: [
      EIGHTEENTH_18TH_NW,
      [49.21434, -122.95584],
      [49.21454, -122.95548],
      [49.2147, -122.95526],
      LEESIDE_18TH_NW,
    ],
  },
  {
    routeNames: [ROUTES.edmonds.name],
    description: "18th ave, leeside to 16th",
    type: "dedicated",
    videoIds: [ROUTE_VIDEOS.edmonds18thEb.id],
    positions: [
      LEESIDE_18TH_NW,
      [49.21499, -122.95494],
      [49.21515, -122.95467],
      SIXTEENTH_18TH_NW,
    ],
  },
  {
    routeNames: [ROUTES.edmonds.name],
    description: "18th ave, 16th to britton",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.edmonds18thEb.id],
    positions: [SIXTEENTH_18TH_NW, [49.21624, -122.95253], BRITTON_18TH],
  },
  {
    routeNames: [ROUTES.edmonds.name],
    description: "kingsway: britton to 19th part 1",
    type: "dedicated",
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.edmonds18thEb.id],
    positions: [BRITTON_KINGSWAY_S, [49.21812, -122.94939], KINGSWAY_PRE_19TH],
  },
  {
    routeNames: [ROUTES.edmonds.name],
    description: "kingsway: britton to 19th part 2",
    type: "other",
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.edmonds18thEb.id],
    positions: [KINGSWAY_PRE_19TH, [49.2181, -122.94899], KINGSWAY_19TH_SW],
  },
  {
    routeNames: [ROUTES.edmonds.name],
    description: "19th ave, kingsway to mary",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.edmonds18thEb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.edmonds18thEb.id],
    positions: [
      KINGSWAY_19TH_SW,
      [49.21914, -122.94798],
      [49.21938, -122.94786],
      [49.21947, -122.94773],
      [49.22029, -122.94618],
      MARY_19TH,
    ],
  },

  // 16th ave/burgess
  {
    routeNames: [ROUTES.edmonds.name],
    description: "16t st: britton to mary",
    type: "quiet",
    positions: [BRITTON_16TH, [49.21744, -122.94589], MARY_16TH],
  },
  {
    routeNames: [ROUTES.edmonds.name],
    description: "16t st & burgess: mary to 14th",
    type: "quiet",
    positions: [MARY_16TH, [49.22107, -122.93904], BURGESS_14TH_W],
  },
  {
    routeNames: [ROUTES.edmonds.name],
    description: "burgess crossing 14th",
    type: "shared",
    positions: [BURGESS_14TH_W, BURGESS_14TH_E],
  },
  {
    routeNames: [ROUTES.edmonds.name],
    description: "burgess: 14th to 12th",
    type: "quiet",
    positions: [BURGESS_14TH_E, BURGESS_12TH],
  },

  // 18th st+
  {
    routeNames: [ROUTES.edmonds.name],
    description: "byrne creek secondary: from bc parkway",
    type: "mixed",
    elevation: 0.5,
    videoIds: [ROUTE_VIDEOS.edmonds18thNb.id],
    positions: [
      BC_PARKWAY_14TH,
      [49.20913, -122.9575],
      [49.20914, -122.95739],
      [49.20914, -122.95718],
      OVERPASS_14TH_W,
    ],
  },
  {
    routeNames: [ROUTES.edmonds.name],
    description: "overpass near 14th",
    type: "mixed",
    elevation: 1,
    videoIds: [ROUTE_VIDEOS.edmonds18thNb.id],
    positions: [OVERPASS_14TH_W, OVERPASS_14TH_E],
  },
  {
    routeNames: [ROUTES.edmonds.name],
    description: "14th to griffiths",
    type: "mixed",
    elevation: 0.5,
    videoIds: [ROUTE_VIDEOS.edmonds18thNb.id],
    positions: [
      OVERPASS_14TH_E,
      [49.20888, -122.95646],
      [49.20881, -122.95624],
      [49.20873, -122.95592],
      [49.20868, -122.95574],
      [49.20839, -122.95518],
      [49.20835, -122.95498],
      [49.20832, -122.95477],
      [49.20832, -122.95454],
      [49.20834, -122.95433],
      [49.20839, -122.95412],
      [49.20845, -122.95394],
      OVERPASS_GRIFFITHS_W,
    ],
  },
  {
    routeNames: [ROUTES.edmonds.name],
    description: "griffiths overpass",
    type: "mixed",
    elevation: 1,
    videoIds: [ROUTE_VIDEOS.edmonds18thNb.id],
    positions: [
      OVERPASS_GRIFFITHS_W,
      [49.20871, -122.95358],
      [49.20887, -122.95341],
      [49.20891, -122.95336],
      [49.20893, -122.9533],
      [49.20899, -122.95298],
      [49.20901, -122.9529],
      [49.20904, -122.95285],
      OVERPASS_GRIFFITHS_E,
    ],
  },
  {
    routeNames: [ROUTES.edmonds.name],
    description: "18th st: griffiths to stride",
    type: "mixed",
    elevation: 0.5,
    videoIds: [ROUTE_VIDEOS.edmonds18thNb.id],
    positions: [
      OVERPASS_GRIFFITHS_E,
      [49.20915, -122.95269],
      [49.20937, -122.95257],
      [49.20944, -122.95255],
      [49.20972, -122.9525],
      [49.20992, -122.95232],
      [49.21016, -122.95206],
      [49.21032, -122.95188],
      [49.21059, -122.95167],
      [49.21065, -122.95164],
      [49.21077, -122.95168],
      [49.21083, -122.95174],
      [49.21135, -122.95239],
      [49.21148, -122.95256],
      EIGHTEENTH_14TH_NE,
      [49.21193, -122.95285],
      [49.212, -122.95312],
      [49.21226, -122.95348],
      EIGHTEENTH_STRIDE_W,
    ],
  },
  {
    routeNames: [ROUTES.edmonds.name],
    description: "18th st: stride to 18th ave",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.edmonds18thNb.id],
    positions: [
      EIGHTEENTH_STRIDE_W,
      [49.21352, -122.95498],
      [49.2141, -122.95394],
      [49.21489, -122.95494],
      LEESIDE_18TH_NW,
    ],
  },
  {
    routeNames: [ROUTES.edmonds.name],
    description: "18th st: 18th to edmonds",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.edmonds18thNb.id],
    positions: [
      EIGHTEENTH_18TH_NW,
      [49.21463, -122.95652],
      [49.21505, -122.95705],
      EIGHTEENTH_EDMONDS_SW,
    ],
  },
  {
    routeNames: [ROUTES.edmonds.name],
    description: "18th/stride: crossing edmonds SE",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.edmonds18thNb.id],
    positions: [
      EIGHTEENTH_EDMONDS_SW,
      EIGHTEENTH_EDMONDS_SE,
      EIGHTEENTH_EDMONDS_NE,
    ],
  },
  {
    routeNames: [ROUTES.edmonds.name],
    description: "18th/stride: crossing edmonds NW",
    type: "mixed",
    positions: [
      EIGHTEENTH_EDMONDS_SW,
      [49.21527, -122.95719],
      EIGHTEENTH_EDMONDS_NE,
    ],
  },
  {
    routeNames: [ROUTES.edmonds.name],
    description: "salisbury: edmonds to highland park line",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.edmonds18thNb.id],
    positions: [
      EIGHTEENTH_EDMONDS_NE,
      [49.21608, -122.95738],
      [49.21673, -122.9574],
      [49.21679, -122.95743],
      SALISBURY_BERESFORD_S_E,
    ],
  },
  {
    routeNames: [ROUTES.edmonds.name],
    description: "salisbury: highland park line to beresford",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.edmonds18thNb.id],
    positions: [SALISBURY_BERESFORD_S_E, SALISBURY_BERESFORD_E],
  },
  {
    routeNames: [ROUTES.edmonds.name],
    description: "beresford & acorn",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.edmonds18thNb.id],
    positions: [
      SALISBURY_BERESFORD_E,
      [49.21702, -122.95657],
      [49.21701, -122.95586],
      [49.21704, -122.95576],
      [49.21711, -122.95572],
      ACORN_KINGSWAY_S,
    ],
  },
  {
    routeNames: [ROUTES.edmonds.name],
    description: "kingsway acorn to hall",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.edmonds18thNb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.edmonds18thNb.id],
    positions: [ACORN_KINGSWAY_S, HALL_KINGSWAY_SW, [49.21855, -122.95507]],
  },

  // britton/kingsway
  {
    routeNames: [ROUTES.edmonds.name],
    description: "stride: 15th to britton",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.highlandParkLineWb.id],
    positions: [FIFTEENTH_STRIDE, BRITTON_STRIDE],
  },
  {
    routeNames: [ROUTES.edmonds.name],
    description: "britton: stride to 18th",
    type: "quiet",
    videoIds: [
      ROUTE_VIDEOS.highlandParkLineWb.id,
      ROUTE_VIDEOS.highlandParkLineEb.id,
    ],
    videoIdsEndAtStart: [ROUTE_VIDEOS.highlandParkLineEb.id],
    positions: [
      BRITTON_STRIDE,
      BRITTON_16TH,
      [49.21778, -122.94951],
      BRITTON_18TH,
    ],
  },
  {
    routeNames: [ROUTES.edmonds.name],
    description: "kingsway protected",
    type: "dedicated",
    videoIds: [
      ROUTE_VIDEOS.highlandParkLineWb.id,
      ROUTE_VIDEOS.highlandParkLineEb.id,
    ],
    positions: [
      BRITTON_KINGSWAY_S,
      [49.21817, -122.95004],
      [49.2182, -122.95142],
      [49.21819, -122.95146],
      [49.2182, -122.95185],
      [49.2182, -122.95216],
      [49.21817, -122.95221],
      EDMONDS_KINGSWAY_SW,
    ],
  },
  {
    routeNames: [ROUTES.edmonds.name],
    description: "britton nb at kingsway",
    type: "quiet",
    oneWay: "recommended",
    videoIds: [
      ROUTE_VIDEOS.edmonds18thEb.id,
      ROUTE_VIDEOS.highlandParkLineWb.id,
    ],
    positions: [
      BRITTON_18TH,
      [49.21785, -122.94957],
      [49.21806, -122.94981],
      BRITTON_KINGSWAY_S,
    ],
  },
  {
    routeNames: [ROUTES.edmonds.name],
    description: "britton sb at kingsway",
    type: "dedicated",
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.highlandParkLineEb.id],
    positions: [
      BRITTON_KINGSWAY_S,
      [49.21805, -122.94989],
      [49.21785, -122.94964],
      BRITTON_18TH,
    ],
  },

  {
    description: "14th ave path",
    type: "combined",
    oneWay: "required",
    positions: [
      FIFTEENTH_14TH_N,
      [49.2143, -122.94701],
      [49.2142, -122.94723],
      [49.21415, -122.94741],
      [49.2141, -122.94766],
      [49.21403, -122.94789],
      [49.21396, -122.94807],
      [49.21346, -122.949],
      [49.21345, -122.94905],
      [49.21338, -122.94918],
      [49.21336, -122.94919],
      [49.2125, -122.95081],
      EIGHTEENTH_14TH_NE,
    ],
  },
];
