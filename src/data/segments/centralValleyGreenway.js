import {
  BOUNDARY_CVG,
  CLARK_6TH_NE,
  CLARK_6TH_NW,
  CLARK_6TH_SE,
  CLARK_6TH_SW,
  COMMERCIAL_GRANDVIEW,
  GILMORE_CVG,
  GILMORE_STILL_CREEK,
  GLEN_6TH_N,
  GLEN_6TH_NE,
  GLEN_6TH_S,
  GLEN_6TH_SE,
  GRANDVIEW_8TH_N,
  GRANDVIEW_8TH_S,
  KEITH_6TH_NE,
  KEITH_6TH_NW,
  KEITH_6TH_SE,
  KEITH_6TH_SW,
  LAKEWOOD_GRANDVIEW,
  MAIN_1ST_E,
  MAIN_1ST_NW,
  MAIN_1ST_SW,
  NORTH_CVG,
  ONTARIO_1ST_NE,
  ONTARIO_1ST_N_N,
  ONTARIO_1ST_SE,
  ONTARIO_PATH_ATHLETES,
  ONTARIO_PATH_SEASIDE,
  QUEBEC_1ST_NW,
  QUEBEC_1ST_NE,
  QUEBEC_1ST_SE,
  RUPERT_CVG_E,
  RUPERT_CVG_W,
  SLOCAN_N_GRANDVIEW,
  VICTORIA_BROADWAY,
  WOODLAND_GRANDVIEW,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const SCOTIA_1ST = [49.26837, -123.09735];
const THORNTON_1ST = [49.26766, -123.09488];
const WESTBOUND_CLOSURE = [49.26725, -123.0933];
const THORNTON_GREAT_NORTHERN = [49.26694, -123.09508];
const GREAT_NORTHERN_SPLIT = [49.26691, -123.09309];

const EAST_PARK_S = [49.27036, -123.10443];

const BEFORE_OVERPASS = [49.25771, -122.9647];
const OVERPASS_START = [49.25731, -122.96468];
const OVERPASS_END = [49.25834, -122.96427];
const AFTER_OVERPASS = [49.25823, -122.96428];

export const CENTRAL_VALLEY_GREENWAY = [
  // connections
  {
    description: "connection with cvg",
    videos: [],
    positions: [ONTARIO_1ST_N_N, EAST_PARK_S],
  },
  {
    description: "connection with windsor",
    videos: [],
    positions: [GLEN_6TH_S, GLEN_6TH_SE],
  },
  // alternates
  {
    routes: [ROUTES.centralValleyGreenway.name],
    legs: ["Vancouver"],
    description: "vcc alt. west",
    positions: [GLEN_6TH_NE, GLEN_6TH_SE, KEITH_6TH_SW, KEITH_6TH_SE],
  },
  {
    routes: [ROUTES.centralValleyGreenway.name],
    legs: ["Vancouver"],
    description: "vcc alt. mid",
    positions: [KEITH_6TH_SW, KEITH_6TH_NW],
  },
  {
    routes: [ROUTES.centralValleyGreenway.name],
    legs: ["Vancouver"],
    description: "vcc alt. east",
    positions: [KEITH_6TH_NE, CLARK_6TH_NW, CLARK_6TH_SW],
  },
  // vancouver
  {
    routes: [ROUTES.centralValleyGreenway.name],
    legs: ["Vancouver"],
    description: "east park path",
    videos: [],
    positions: [
      ONTARIO_PATH_SEASIDE,
      ONTARIO_PATH_ATHLETES,
      EAST_PARK_S,
      ONTARIO_1ST_NE,
    ],
  },
  {
    routes: [ROUTES.centralValleyGreenway.name],
    legs: ["Vancouver"],
    description: "crossing 1st path",
    videos: [],
    positions: [ONTARIO_1ST_NE, ONTARIO_1ST_SE],
  },
  {
    routes: [ROUTES.centralValleyGreenway.name],
    legs: ["Vancouver"],
    description: "1st quebec to main",
    oneWay: "required",
    positions: [QUEBEC_1ST_SE, MAIN_1ST_SW, MAIN_1ST_E],
  },
  {
    routes: [ROUTES.centralValleyGreenway.name],
    legs: ["Vancouver"],
    description: "1st main to quebec",
    oneWay: "required",
    positions: [MAIN_1ST_E, MAIN_1ST_NW, QUEBEC_1ST_NE, QUEBEC_1ST_NW],
  },
  {
    routes: [ROUTES.centralValleyGreenway.name],
    legs: ["Vancouver"],
    description: "thornton construction, gone",
    isClosed: true,
    positions: [THORNTON_GREAT_NORTHERN, [49.2671, -123.09508], THORNTON_1ST],
  },
  {
    description: "thornton north",
    positions: [THORNTON_1ST, [49.26845, -123.09456]],
  },
  {
    routes: [ROUTES.centralValleyGreenway.name],
    legs: ["Vancouver"],
    description: "1st scotia to thornton",
    positions: [
      SCOTIA_1ST,
      [49.26782, -123.0964],
      [49.26779, -123.09622],
      [49.26773, -123.09603],
      [49.26771, -123.09595],
      [49.26769, -123.0958],
      THORNTON_1ST,
    ],
  },
  {
    routes: [ROUTES.centralValleyGreenway.name],
    legs: ["Vancouver"],
    description: "subway construction, gone",
    isClosed: true,
    positions: [
      THORNTON_1ST,
      [49.26764, -123.0946],
      [49.26762, -123.09446],
      [49.26739, -123.09411],
      [49.26735, -123.09398],
      WESTBOUND_CLOSURE,
    ],
  },
  {
    routes: [ROUTES.centralValleyGreenway.name],
    legs: ["Vancouver"],
    description: "east portion of subway construction",
    positions: [
      WESTBOUND_CLOSURE,
      [49.26721, -123.09324],
      GREAT_NORTHERN_SPLIT,
    ],
  },
  {
    routes: [ROUTES.centralValleyGreenway.name],
    legs: ["Vancouver"],
    description: "1st to commercial",
    positions: [
      MAIN_1ST_E,
      [49.26921, -123.09887],
      SCOTIA_1ST,
      [49.2678, -123.09808],
      [49.2673, -123.09724],
      [49.26718, -123.09697],
      [49.26703, -123.09656],
      [49.26692, -123.09588],
      [49.2669, -123.09561],
      [49.26691, -123.09531],
      [49.26694, -123.09524],
      THORNTON_GREAT_NORTHERN,
      GREAT_NORTHERN_SPLIT,
      [49.26689, -123.09084],
      [49.26688, -123.08983],
      [49.26684, -123.08933],
      [49.2668, -123.08908],
      [49.26633, -123.08662],
      [49.2654, -123.08175],
      GLEN_6TH_N,
      GLEN_6TH_NE,
      KEITH_6TH_NW,
      KEITH_6TH_NE,
      KEITH_6TH_SE,
      CLARK_6TH_SW,
      CLARK_6TH_SE,
      CLARK_6TH_NE,
      [49.26601, -123.07728],
      [49.26606, -123.07721],
      [49.26609, -123.07698],
      [49.26563, -123.07557],
      WOODLAND_GRANDVIEW,
    ],
  },
  {
    routes: [ROUTES.centralValleyGreenway.name, ROUTES.offBroadway.name],
    legs: ["Vancouver"],
    description: "cvg/off-broadway west",
    videos: [VIDEOS.offBroadwayWb],
    positions: [WOODLAND_GRANDVIEW, COMMERCIAL_GRANDVIEW],
  },
  {
    routes: [ROUTES.centralValleyGreenway.name, ROUTES.offBroadway.name],
    legs: ["Vancouver"],
    description: "cvg/off-broadway east",
    videos: [VIDEOS.offBroadwayWb],
    positions: [COMMERCIAL_GRANDVIEW, [49.26372, -123.06966], GRANDVIEW_8TH_N],
  },
  {
    routes: [ROUTES.centralValleyGreenway.name],
    legs: ["Vancouver"],
    description: "broadway eastbound",
    oneWay: "required",
    positions: [
      COMMERCIAL_GRANDVIEW,
      [49.26345, -123.0691],
      GRANDVIEW_8TH_S,
      [49.26257, -123.06697],
      [49.26251, -123.06688],
      [49.26241, -123.06681],
      [49.26219, -123.06681],
      [49.26218, -123.06599],
      VICTORIA_BROADWAY,
    ],
  },
  {
    routes: [ROUTES.centralValleyGreenway.name],
    legs: ["Vancouver"],
    description: "broadway westbound",
    oneWay: "required",
    positions: [
      VICTORIA_BROADWAY,
      [49.26236, -123.06579],
      [49.26237, -123.0662],
      [49.26239, -123.06631],
      [49.26245, -123.06639],
      [49.26259, -123.06674],
      [49.26262, -123.06687],
      [49.26277, -123.06724],
      GRANDVIEW_8TH_N,
    ],
  },
  {
    description: "median at 8th",
    positions: [GRANDVIEW_8TH_S, GRANDVIEW_8TH_N],
  },
  {
    routes: [ROUTES.centralValleyGreenway.name],
    legs: ["Vancouver"],
    description: "east of victoria",
    videos: [],
    positions: [
      VICTORIA_BROADWAY,
      [49.26188, -123.06507],
      [49.26173, -123.06476],
      [49.26161, -123.06448],
      [49.26155, -123.06424],
      [49.26146, -123.06399],
      LAKEWOOD_GRANDVIEW,
      [49.26036, -123.06117],
      [49.25995, -123.0602],
      [49.25984, -123.05998],
      [49.25946, -123.05902],
      [49.25935, -123.05879],
      [49.25923, -123.05863],
      [49.25916, -123.05844],
      [49.25914, -123.05825],
      [49.25848, -123.05658],
      [49.25831, -123.05602],
      [49.25822, -123.05554],
      [49.2582, -123.05475],
      [49.25819, -123.05304],
      [49.25821, -123.05062],
      [49.25835, -123.04974],
      SLOCAN_N_GRANDVIEW,
      [49.25829, -123.0495],
      [49.25863, -123.04704],
      [49.25876, -123.04612],
      [49.25881, -123.04602],
      [49.25892, -123.04588],
      [49.25902, -123.04555],
      [49.25911, -123.04504],
      [49.25914, -123.04481],
      [49.25914, -123.04431],
      [49.25917, -123.04361],
      [49.25927, -123.0425],
      [49.25955, -123.04013],
      [49.25988, -123.03791],
      [49.25991, -123.0377],
      [49.26022, -123.03522],
      [49.26035, -123.03432],
      RUPERT_CVG_W,
      [49.26067, -123.03395],
      RUPERT_CVG_E,
      [49.26067, -123.03347],
      [49.26076, -123.03339],
      [49.26085, -123.03307],
      [49.26089, -123.03267],
      [49.26133, -123.03109],
      [49.26204, -123.02896],
      [49.26229, -123.02809],
      [49.26243, -123.02734],
      [49.26249, -123.02672],
      [49.2625, -123.02565],
      BOUNDARY_CVG,
    ],
  },
  // burnaby
  {
    routes: [ROUTES.centralValleyGreenway.name],
    legs: ["Burnaby"],
    description: "burnaby west of overpass",
    videos: [],
    positions: [
      BOUNDARY_CVG,
      [49.26235, -123.01782],
      GILMORE_CVG,
      GILMORE_STILL_CREEK,
      [49.2609, -123.01268],
      [49.26072, -123.01178],
      [49.26079, -123.01139],
      [49.26078, -123.00703],
      [49.26073, -123.00643],
      [49.26163, -123.00547],
      [49.26184, -123.005],
      [49.26193, -123.00442],
      [49.26188, -123.00062],
      [49.26182, -122.99934],
      [49.26177, -122.99753],
      [49.26161, -122.99671],
      [49.26115, -122.99592],
      [49.26096, -122.99528],
      [49.26093, -122.99454],
      [49.26084, -122.99432],
      [49.26084, -122.9909],
      [49.26084, -122.98762],
      [49.26082, -122.98492],
      [49.26094, -122.98461],
      [49.26018, -122.98392],
      [49.26034, -122.98306],
      [49.2609, -122.98234],
      [49.26089, -122.9782],
      [49.26087, -122.9741],
      [49.26089, -122.97104],
      [49.26075, -122.97023],
      [49.26027, -122.96916],
      [49.25995, -122.9683],
      [49.25969, -122.96758],
      [49.25893, -122.96618],
      [49.25833, -122.96541],
      [49.25785, -122.96498],
      BEFORE_OVERPASS,
    ],
  },
  {
    routes: [ROUTES.centralValleyGreenway.name],
    legs: ["Burnaby"],
    description: "pre-overpass",
    elevation: 0.5,
    videos: [],
    positions: [BEFORE_OVERPASS, OVERPASS_START],
  },
  {
    routes: [ROUTES.centralValleyGreenway.name],
    legs: ["Burnaby"],
    description: "train overpass",
    elevation: 1,
    videos: [],
    positions: [
      OVERPASS_START,
      [49.25733, -122.96489],
      [49.2574, -122.96503],
      [49.25775, -122.96532],
      [49.25788, -122.96529],
      [49.25792, -122.9652],
      [49.25814, -122.964],
      [49.25823, -122.96387],
      [49.25835, -122.96391],
      [49.25839, -122.96403],
      [49.25839, -122.96415],
      OVERPASS_END,
    ],
  },
  {
    routes: [ROUTES.centralValleyGreenway.name],
    legs: ["Burnaby"],
    description: "post-overpass",
    elevation: 0.5,
    videos: [],
    positions: [OVERPASS_END, AFTER_OVERPASS],
  },
  {
    routes: [ROUTES.centralValleyGreenway.name],
    legs: ["Burnaby"],
    description: "east of overpass",
    videos: [],
    positions: [
      AFTER_OVERPASS,
      [49.25805, -122.96423],
      [49.25715, -122.96314],
      [49.2563, -122.9621],
      [49.25623, -122.96214],
      [49.25341, -122.95872],
      [49.25118, -122.95609],
      [49.25035, -122.9551],
      [49.25011, -122.95469],
      [49.24998, -122.9541],
      [49.24999, -122.95154],
      [49.24997, -122.94949],
      [49.24984, -122.94905],
      [49.24884, -122.94703],
      [49.2486, -122.94629],
      [49.24852, -122.94554],
      [49.2485, -122.94215],
      [49.24823, -122.9405],
      [49.24821, -122.93759],
      [49.24822, -122.93535],
      [49.24823, -122.93086],
      [49.24821, -122.92589],
      [49.24824, -122.92524],
      [49.24988, -122.91914],
      [49.24985, -122.91886],
      [49.25042, -122.91668],
      [49.25059, -122.91573],
      [49.25066, -122.91506],
      [49.25066, -122.91409],
      [49.24962, -122.9141],
      [49.24936, -122.91418],
      [49.24921, -122.91393],
      [49.24872, -122.91375],
      [49.24829, -122.91326],
      [49.2481, -122.91295],
      [49.24803, -122.91264],
      [49.24802, -122.91237],
      [49.2477, -122.9112],
      [49.24775, -122.9108],
      [49.24785, -122.91041],
      [49.24786, -122.90995],
      [49.24773, -122.90958],
      [49.24758, -122.90938],
      [49.24741, -122.90923],
      [49.24698, -122.9086],
      [49.24668, -122.90835],
      [49.24647, -122.90831],
      [49.24609, -122.90846],
      [49.24583, -122.90841],
      [49.24554, -122.908],
      [49.24532, -122.90747],
      [49.2448, -122.9068],
      [49.24471, -122.9065],
      [49.24415, -122.90401],
      [49.2439, -122.90281],
      [49.24374, -122.90072],
      [49.24363, -122.89999],
      [49.24326, -122.89861],
      [49.24302, -122.89815],
      [49.24261, -122.89712],
      [49.24239, -122.89689],
      [49.2421, -122.89678],
      [49.24187, -122.89652],
      [49.24156, -122.89548],
      [49.24146, -122.89502],
      [49.24115, -122.89448],
      [49.24064, -122.89407],
      [49.23957, -122.89346],
      [49.23901, -122.89308],
      NORTH_CVG,
    ],
  },
];
