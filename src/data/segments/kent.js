import {
  ARGYLE_KENT_N_E,
  BORDEN_KENT_N_S,
  CAMBIE_KENT_N_S,
  CROMPTON_KENT_N_N,
  CROMPTON_KENT_N_S,
  CROMPTON_KENT_S,
  ELLIOTT_KENT,
  ELLIOTT_KENT_PATH,
  GLADSTONE_KENT,
  HEATHER_KENT_N,
  KERR_KENT_N_SE,
  KERR_KENT_N_SW,
  KINROSS_KENT,
  ONTARIO_KENT_N,
  ONTARIO_KENT_S,
  RIVER_DISTRICT_CROSSING_DETOUR_SPLIT,
  VICTORIA_KENT_N,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const ELLIOTT_KENT_W = [49.20582, -123.05698];
const MORNINGSTAR_PARK_W = [49.20587, -123.0544];
const MORNINGSTAR_PARK_E = [49.20593, -123.05372];
const KINROSS_KENT_S = [49.2061, -123.0367];
const KINROSS_KENT_S_S = [49.20575, -123.03672];
const KENT_CONSTRUCTION_SPLIT = [49.20567, -123.03369];
const JACK_UPPAL_KENT_S = [49.20531, -123.03383];
const RIVER_DISTRICT_CROSSING_KENT_S = [49.20504, -123.03116];
const RIVER_DISTRICT_CROSSING_KENT_N = [49.2053, -123.03107];

const EB_BEFORE_BORDEN = [49.20952, -123.07505];
const EAST_OF_ONTARIO = [49.20667, -123.10586];
const QUEBEC_KENT_S = [49.2068, -123.10446];
const CHESTER_KENT_S = [49.20808, -123.08935];
const SHERBROOKE_KENT_S = [49.20876, -123.08156];
const DUFF_LANE_KENT_N = [49.20725, -123.06525];

export const KENT = [
  {
    routeNames: [ROUTES.kent.name],
    description: "kent n: heather to ontario",
    type: "shared",
    positions: [
      HEATHER_KENT_N,
      [49.20533, -123.12124],
      [49.20558, -123.12003],
      [49.20573, -123.1191],
      CAMBIE_KENT_N_S,
      [49.20643, -123.11529],
      [49.20661, -123.11433],
      [49.2067, -123.1138],
      [49.20671, -123.11375],
      [49.20678, -123.11299],
      [49.20687, -123.11188],
      [49.20688, -123.11172],
      [49.20687, -123.11027],
      [49.20686, -123.10838],
      ONTARIO_KENT_N,
    ],
  },
  {
    routeNames: [ROUTES.kent.name],
    description: "ontario",
    type: "quiet",
    videos: [VIDEOS.ontarioNb.id],
    positions: [ONTARIO_KENT_S, ONTARIO_KENT_N],
  },
  {
    routeNames: [ROUTES.kent.name],
    description: "kent s: near ontario",
    type: "dedicated",
    videos: [VIDEOS.ontarioNb.id],
    videosStartAtEnd: [VIDEOS.ontarioNb.id],
    positions: [ONTARIO_KENT_S, EAST_OF_ONTARIO],
  },
  {
    routeNames: [ROUTES.kent.name],
    description: "kent s: still near ontario",
    type: "dedicated",
    positions: [EAST_OF_ONTARIO, QUEBEC_KENT_S],
  },
  {
    routeNames: [ROUTES.kent.name],
    description: "kent s: quebec to chester",
    type: "quiet",
    positions: [
      QUEBEC_KENT_S,
      [49.20697, -123.10246],
      [49.20768, -123.09401],
      [49.20784, -123.09211],
      [49.20792, -123.09119],
      CHESTER_KENT_S,
    ],
  },
  {
    routeNames: [ROUTES.kent.name],
    description: "kent s: chester to crompton",
    type: "dedicated",
    positions: [
      CHESTER_KENT_S,
      [49.2083, -123.08692],
      [49.20841, -123.08573],
      SHERBROOKE_KENT_S,
    ],
  },
  {
    routeNames: [ROUTES.kent.name],
    description: "kent s: pre-crompton",
    type: "quiet",
    positions: [SHERBROOKE_KENT_S, CROMPTON_KENT_S],
  },
  {
    routeNames: [ROUTES.kent.name],
    description: "crompton",
    type: "quiet",
    videos: [VIDEOS.invernessSb.id],
    videosEndAtStart: [VIDEOS.invernessSb.id],
    positions: [CROMPTON_KENT_S, CROMPTON_KENT_N_S],
  },
  {
    routeNames: [ROUTES.kent.name],
    description: "kent n: eb: crompton to borden-ish",
    type: "painted",
    oneWay: "required",
    positions: [
      CROMPTON_KENT_N_S,
      [49.20932, -123.07752],
      [49.2095, -123.07536],
      EB_BEFORE_BORDEN,
    ],
  },
  {
    routeNames: [ROUTES.kent.name],
    description: "kent n: eb: before borden",
    type: "painted",
    oneWay: "required",
    videos: [VIDEOS.dumfriesNb.id],
    videosStartAtStart: [VIDEOS.dumfriesNb.id],
    positions: [
      EB_BEFORE_BORDEN,
      [49.20953, -123.07462],
      [49.20952, -123.07414],
      BORDEN_KENT_N_S,
    ],
  },
  {
    routeNames: [ROUTES.kent.name],
    description: "kent n: eb: borden to argyle",
    type: "painted",
    oneWay: "required",
    videos: [VIDEOS.fraserRiverFraserviewEb.id],
    videosStartAtStart: [VIDEOS.fraserRiverFraserviewEb.id],
    positions: [
      BORDEN_KENT_N_S,
      [49.20947, -123.07356],
      [49.20937, -123.07288],
      [49.20921, -123.07224],
      [49.20897, -123.07135],
      ARGYLE_KENT_N_E,
    ],
  },
  {
    routeNames: [ROUTES.kent.name],
    description: "kent n: wb: argyle to crompton",
    type: "painted",
    oneWay: "required",
    positions: [
      ARGYLE_KENT_N_E,
      [49.20901, -123.07135],
      [49.20926, -123.07225],
      [49.20936, -123.07266],
      [49.2094, -123.07282],
      [49.2095, -123.07349],
      [49.20953, -123.07376],
      [49.20956, -123.074],
      [49.20957, -123.07458],
      [49.20956, -123.07505],
      [49.20939, -123.07724],
      CROMPTON_KENT_N_N,
    ],
  },
  {
    routeNames: [ROUTES.kent.name],
    description: "kent n: borden to lane after victoria",
    type: "quiet",
    positions: [
      ARGYLE_KENT_N_E,
      [49.20799, -123.06787],
      VICTORIA_KENT_N,
      DUFF_LANE_KENT_N,
    ],
  },
  {
    routeNames: [ROUTES.kent.name],
    description: "kent n: trail after victoria",
    type: "mixed",
    positions: [
      DUFF_LANE_KENT_N,
      [49.20722, -123.0652],
      [49.20654, -123.0628],
      GLADSTONE_KENT,
    ],
  },
  {
    routeNames: [ROUTES.kent.name],
    description: "kent n: portside-ish to path at elliott",
    type: "quiet",
    videos: [VIDEOS.fraserRiverFraserviewEb.id],
    positions: [
      GLADSTONE_KENT,
      [49.20638, -123.06219],
      [49.20639, -123.06215],
      [49.20639, -123.06208],
      [49.20637, -123.06198],
      [49.20626, -123.06146],
      [49.20607, -123.06039],
      [49.206, -123.05991],
      [49.20591, -123.0591],
      [49.20586, -123.05839],
      [49.20584, -123.05799],
      ELLIOTT_KENT_W,
    ],
  },
  {
    routeNames: [ROUTES.kent.name],
    description: "kent n: elliott bit",
    type: "quiet",
    videos: [VIDEOS.sunriseNb.id],
    positions: [ELLIOTT_KENT_W, ELLIOTT_KENT],
  },
  {
    routeNames: [ROUTES.kent.name],
    description: "kent n: elliott to morningstar park",
    type: "quiet",
    positions: [
      ELLIOTT_KENT,
      [49.20582, -123.05638],
      [49.20583, -123.05606],
      [49.20586, -123.05532],
      [49.20591, -123.05474],
      [49.20593, -123.05451],
      MORNINGSTAR_PARK_W,
    ],
  },
  {
    routeNames: [ROUTES.kent.name],
    description: "kent n: morningstar park to kinross",
    type: "quiet",
    positions: [
      MORNINGSTAR_PARK_E,
      [49.206, -123.05363],
      [49.2061, -123.05238],
      [49.20615, -123.05181],
      [49.20626, -123.05046],
      [49.20637, -123.04912],
      [49.20649, -123.04772],
      [49.20668, -123.04538],
      [49.20676, -123.04436],
      [49.20679, -123.0438],
      [49.20681, -123.0434],
      [49.20682, -123.04284],
      [49.20684, -123.04257],
      [49.20685, -123.04234], // KERR_KENT_W
      [49.20685, -123.04225], // KERR_KENT_E
      [49.20682, -123.04178],
      [49.20678, -123.04102],
      [49.20641, -123.03838],
      [49.20627, -123.03733],
      KINROSS_KENT,
    ],
  },
  {
    routeNames: [ROUTES.kent.name],
    description: "kent n path: elliott little bit",
    type: "mixed",
    videos: [VIDEOS.fraserRiverFraserviewEb.id, VIDEOS.sunriseNb.id],
    positions: [ELLIOTT_KENT_W, [49.20575, -123.05698], ELLIOTT_KENT_PATH],
  },
  {
    routeNames: [ROUTES.kent.name],
    description: "kent n path: elliott to morningstar park",
    type: "mixed",
    positions: [
      ELLIOTT_KENT_PATH,
      [49.20575, -123.05648],
      [49.20576, -123.05598],
      [49.2058, -123.05528],
      [49.20584, -123.05479],
      MORNINGSTAR_PARK_W,
    ],
  },
  {
    routeNames: [ROUTES.kent.name],
    description: "kent n path: morningstar park",
    type: "mixed",
    positions: [MORNINGSTAR_PARK_W, MORNINGSTAR_PARK_E],
  },
  {
    routeNames: [ROUTES.kent.name],
    description: "kent n path: morningstar park to kerr",
    type: "mixed",
    positions: [
      MORNINGSTAR_PARK_E,
      [49.206, -123.05283],
      [49.20608, -123.05182],
      [49.20619, -123.05044],
      [49.20638, -123.04817],
      [49.20642, -123.0477],
      [49.20652, -123.04647],
      [49.20661, -123.04539],
      [49.2067, -123.0443],
      [49.20674, -123.04343],
      [49.20674, -123.04273],
      [49.20674, -123.0424],
      KERR_KENT_N_SW,
    ],
  },
  {
    routeNames: [ROUTES.kent.name, ROUTES.kerr.name],
    description: "crossing kerr",
    type: "mixed",
    videos: [VIDEOS.kerrSb.id],
    positions: [KERR_KENT_N_SW, KERR_KENT_N_SE],
  },
  {
    routeNames: [ROUTES.kent.name],
    description: "kent n path: kerr to kinross",
    type: "mixed",
    positions: [
      KERR_KENT_N_SE,
      [49.20676, -123.0419],
      [49.20671, -123.04126],
      [49.20662, -123.04044],
      [49.20611, -123.03681],
      KINROSS_KENT_S,
    ],
  },
  {
    routeNames: [ROUTES.kent.name],
    description: "kinross",
    type: "quiet",
    positions: [KINROSS_KENT, KINROSS_KENT_S, KINROSS_KENT_S_S],
  },
  {
    routeNames: [ROUTES.kent.name],
    description: "kent s bit",
    type: "mixed",
    positions: [
      KINROSS_KENT_S_S,
      [49.20569, -123.03662],
      [49.20562, -123.03644],
      [49.20557, -123.03606],
      [49.20553, -123.03576],
      [49.20537, -123.03454],
      [49.20531, -123.03404],
      JACK_UPPAL_KENT_S,
    ],
  },
  {
    description: "river district detour",
    type: "mixed",
    positions: [
      JACK_UPPAL_KENT_S,
      [49.20526, -123.03383],
      [49.20518, -123.03387],
      [49.20508, -123.03395],
      [49.20451, -123.03468],
      [49.20449, -123.03479],
      [49.20442, -123.03488],
      [49.20438, -123.03487],
      [49.20395, -123.03453],
      [49.20372, -123.03425],
      [49.20361, -123.03384],
      [49.20375, -123.03219],
      RIVER_DISTRICT_CROSSING_DETOUR_SPLIT,
      [49.20417, -123.03165],
      [49.20441, -123.03148],
      [49.20467, -123.03132],
      [49.20486, -123.03122],
      RIVER_DISTRICT_CROSSING_KENT_S,
    ],
  },
  {
    routeNames: [ROUTES.kent.name],
    description: "river district crossing switch",
    type: "mixed",
    positions: [RIVER_DISTRICT_CROSSING_KENT_S, RIVER_DISTRICT_CROSSING_KENT_N],
  },
  {
    routeNames: [ROUTES.kent.name],
    description: "kent n: river district",
    type: "dedicated",
    positions: [RIVER_DISTRICT_CROSSING_KENT_N, [49.20422, -123.02343]],
  },
  {
    routeNames: [ROUTES.kent.name],
    description: "kent s: river district",
    type: "mixed",
    positions: [
      RIVER_DISTRICT_CROSSING_KENT_S,
      [49.20404, -123.02411],
      [49.20398, -123.02376],
      [49.20395, -123.02343],
    ],
  },
  {
    routeNames: [ROUTES.kent.name],
    description: "uppal kent s to n",
    type: "mixed",
    positions: [KENT_CONSTRUCTION_SPLIT, JACK_UPPAL_KENT_S],
  },
  {
    routeNames: [ROUTES.kent.name],
    description: "kent n: uppal to river district crossing",
    type: "dedicated",
    positions: [
      KENT_CONSTRUCTION_SPLIT,
      [49.20546, -123.03223],
      RIVER_DISTRICT_CROSSING_KENT_N,
    ],
  },
  // {
  //   routeNames: [ROUTES.kent.name],
  //   description: "kent n: closed",
  //   type: "quiet",
  //   isClosed: true,
  //   positions: [
  //     KINROSS_KENT,
  //     [49.2061, -123.03655],
  //     [49.20577, -123.03421],
  //     KENT_CONSTRUCTION_SPLIT, // actually [49.20577, -123.03359]
  //   ],
  // },
];
