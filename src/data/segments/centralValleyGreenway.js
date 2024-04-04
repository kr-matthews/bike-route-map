import {
  BC_PARKWAY_CVG_SPLIT,
  BEGBIE_COLUMBIA_N,
  BRUNETTE_FRASER_CVG_NE,
  BRUNETTE_FRASER_CVG_SE,
  BRUNETTE_FRASER_CVG_SW,
  CARIBOO_CARIBOO_PL_E,
  CARIBOO_GOVERNMENT,
  COLUMBIA_CUMBERLAND_SE,
  COLUMBIA_SHERBROOKE_W,
  EASTBROOK_STILL_CREEK,
  ELLIOT_COLUMBIA,
  GILMORE_CVG,
  GILMORE_STILL_CREEK,
  GLEN_6TH_N,
  GLEN_6TH_NE,
  GLEN_6TH_S,
  GLEN_6TH_SE,
  GRANDVIEW_8TH_N,
  GRANDVIEW_8TH_S,
  KENSINGTON_CVG,
  LAKES_CVG_S,
  LAKEWOOD_GRANDVIEW,
  MAIN_1ST_E,
  ONTARIO_1ST_NE,
  ONTARIO_1ST_N_N,
  ONTARIO_1ST_SE,
  ONTARIO_PATH_ATHLETES,
  ONTARIO_PATH_SEASIDE,
  QUAYSIDE_JOIN,
  QUEBEC_1ST_NW,
  QUEBEC_1ST_NE,
  QUEBEC_1ST_SE,
  RUPERT_CVG_E,
  RUPERT_CVG_W,
  SLOCAN_N_GRANDVIEW,
  SPERLING_WINSTON,
  VICTORIA_BROADWAY_SE,
  WOODLAND_GRANDVIEW,
  EIGHTH_CARNARVON_E,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const KEITH_6TH_NE = [49.26531, -123.07928];
const KEITH_6TH_NW = [49.26531, -123.07949];
const KEITH_6TH_SE = [49.26509, -123.07928];
const KEITH_6TH_SW = [49.26509, -123.0795];

const CLARK_6TH_NE = [49.26536, -123.07728];
const CLARK_6TH_SE = [49.26507, -123.07729];
const CLARK_6TH_SW = [49.26508, -123.07769];
const CLARK_6TH_NW = [49.26531, -123.07768];

const CLARK_GRANDVIEW_SE = [49.26601, -123.07728];

const MAIN_1ST_NW = [49.27022, -123.10085];
const MAIN_1ST_SW = [49.27009, -123.10085];

const NORTH_CVG = [49.23865, -122.89262];
const HUME_PARK_DR_N = [49.23711, -122.89228];
const HUME_PARK_DR_S = [49.23521, -122.89123];
const GARRETT_CVG = [49.23314, -122.88876];

const SCOTIA_1ST = [49.26837, -123.09735];
const THORNTON_1ST = [49.26766, -123.09488];
const WESTBOUND_CLOSURE = [49.26725, -123.0933];
const THORNTON_GREAT_NORTHERN = [49.26694, -123.09508];
const GREAT_NORTHERN_SPLIT = [49.26691, -123.09309];

const COMMERCIAL_GRANDVIEW = [49.26373, -123.0698];
const GRANDVIEW_BROADWAY_NE = [49.26241, -123.06631];
const GRANDVIEW_BROADWAY_NW = [49.26241, -123.06681];
const GRANDVIEW_BROADWAY_S = [49.2622, -123.06681];
const GRANDVIEW_CUT_BROADWAY_SE = [49.26219, -123.06629];
const VICTORIA_BROADWAY_NE = [49.2624, -123.06573];
const GRANDVIEW_7_HALF_N = [49.2635, -123.06909];
const GRANDVIEW_8_HALF_N = [49.26277, -123.06724];
const SEMLIN_GRANDVIEW = [49.26146, -123.06399];

const EAST_PARK_S = [49.27036, -123.10443];

const OVERPASS_START = [49.2573, -122.9647];
const OVERPASS_END = [49.25833, -122.96425];

const WINSTON_GREENWOOD_NE = [49.2564, -122.96221];
const BRIGHTON_WINSTON_NW = [49.24991, -122.91918];
const BRIGHTON_WINSTON_SW = [49.24983, -122.91915];
const CARIBOO_PL_E = [49.24804, -122.91232];

const COLUMBIA_SHERBROOKE_E = [49.22789, -122.89275];
const COLUMBIA_BRUNETTE = [49.22223, -122.89306];
const COLUMBIA_DEBECK_W = [49.22197, -122.89311];
const COLUMBIA_CUMBERLAND_W = [49.22047, -122.89322];
const BEGBIE_COLUMBIA_S = [49.2018, -122.91035];

const BOUNDARY_CVG = [49.26245, -123.02363];
const EAST_OF_BOUNDARY = [49.26242, -123.02222];

const PHILLIPS_WINSTON_S = [49.24967, -122.94875];

export const CENTRAL_VALLEY_GREENWAY = [
  // connections
  {
    description: "connection with cvg",
    type: "mixed",
    positions: [ONTARIO_1ST_N_N, EAST_PARK_S],
  },
  {
    description: "connection with windsor",
    type: "mixed",
    positions: [GLEN_6TH_S, GLEN_6TH_SE],
  },
  {
    description: "commercial left turn",
    type: "painted",
    oneWay: "required",
    positions: [
      [49.26395, -123.06974],
      [49.2638, -123.06974],
    ],
  },

  // alternates
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "vcc alt. west",
    type: "mixed",
    positions: [GLEN_6TH_NE, GLEN_6TH_SE, KEITH_6TH_SW, KEITH_6TH_SE],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "vcc alt. mid",
    type: "mixed",
    positions: [KEITH_6TH_SW, KEITH_6TH_NW],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "vcc alt. east",
    type: "mixed",
    positions: [KEITH_6TH_NE, CLARK_6TH_NW, CLARK_6TH_SW],
  },

  // vancouver
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "east park path - north",
    type: "mixed",
    videoIds: [
      VIDEOS.centralValleyVancouverEb.id,
      VIDEOS.centralValleyVancouverWb.id,
      VIDEOS.ontarioNb.id,
    ],
    videoIdsStartAtStart: [VIDEOS.centralValleyVancouverEb.id],
    videoIdsEndAtStart: [
      VIDEOS.centralValleyVancouverWb.id,
      VIDEOS.ontarioNb.id,
    ],
    positions: [ONTARIO_PATH_SEASIDE, ONTARIO_PATH_ATHLETES],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "east park path - south",
    type: "mixed",
    videoIds: [
      VIDEOS.centralValleyVancouverEb.id,
      VIDEOS.centralValleyVancouverWb.id,
    ],
    positions: [ONTARIO_PATH_ATHLETES, EAST_PARK_S, ONTARIO_1ST_NE],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "crossing 1st path",
    type: "mixed",
    videoIds: [VIDEOS.centralValleyVancouverEb.id],
    positions: [ONTARIO_1ST_NE, ONTARIO_1ST_SE],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "1st quebec to main",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.centralValleyVancouverEb.id],
    positions: [QUEBEC_1ST_SE, MAIN_1ST_SW, MAIN_1ST_E],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "1st main to quebec",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.centralValleyVancouverWb.id],
    positions: [MAIN_1ST_E, MAIN_1ST_NW, QUEBEC_1ST_NE, QUEBEC_1ST_NW],
  },
  {
    description: "detour: scotia to emily carr",
    type: "dedicated",
    videoIds: [
      VIDEOS.centralValleyVancouverEb.id,
      VIDEOS.centralValleyVancouverWb.id,
    ],
    positions: [
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
    ],
  },
  {
    description: "thornton construction, gone",
    type: "dedicated",
    isClosed: true,
    positions: [THORNTON_GREAT_NORTHERN, [49.2671, -123.09508], THORNTON_1ST],
  },
  {
    description: "thornton north",
    type: "dedicated",
    positions: [THORNTON_1ST, [49.26845, -123.09456]],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "1st: scotia to thornton",
    type: "quiet",
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
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "subway construction, gone",
    type: "dedicated",
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
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "east portion of subway construction",
    type: "dedicated",
    positions: [
      WESTBOUND_CLOSURE,
      [49.26721, -123.09324],
      GREAT_NORTHERN_SPLIT,
    ],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "1st to scotia",
    type: "quiet",
    videoIds: [
      VIDEOS.centralValleyVancouverEb.id,
      VIDEOS.centralValleyVancouverWb.id,
    ],
    positions: [MAIN_1ST_E, [49.26921, -123.09887], SCOTIA_1ST],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "emily carr to clark",
    type: "comfortable",
    elevation: 0.5,
    videoIds: [
      VIDEOS.centralValleyVancouverEb.id,
      VIDEOS.centralValleyVancouverWb.id,
    ],
    positions: [
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
    ],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "clark bridge",
    type: "mixed",
    elevation: 1,
    videoIds: [
      VIDEOS.centralValleyVancouverEb.id,
      VIDEOS.centralValleyVancouverWb.id,
    ],
    positions: [CLARK_6TH_NE, CLARK_GRANDVIEW_SE],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "clark to woodland",
    type: "dedicated",
    elevation: 0.5,
    videoIds: [
      VIDEOS.centralValleyVancouverEb.id,
      VIDEOS.centralValleyVancouverWb.id,
    ],
    positions: [
      CLARK_GRANDVIEW_SE,
      [49.26606, -123.07721],
      [49.26609, -123.07698],
      [49.26563, -123.07557],
      WOODLAND_GRANDVIEW,
    ],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name, ROUTES.offBroadway.name],
    description: "woodland to commercial",
    type: "dedicated",
    elevation: 0.5,
    videoIds: [
      VIDEOS.centralValleyVancouverEb.id,
      VIDEOS.centralValleyVancouverWb.id,
      VIDEOS.offBroadwayWb.id,
    ],
    positions: [WOODLAND_GRANDVIEW, COMMERCIAL_GRANDVIEW],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name, ROUTES.offBroadway.name],
    description: "commercial to/from lane",
    type: "dedicated",
    videoIds: [VIDEOS.centralValleyVancouverWb.id, VIDEOS.offBroadwayWb.id],
    positions: [
      COMMERCIAL_GRANDVIEW,
      [49.26372, -123.06966],
      GRANDVIEW_7_HALF_N,
    ],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name, ROUTES.offBroadway.name],
    description: "lane to/from 8th",
    type: "quiet",
    videoIds: [VIDEOS.centralValleyVancouverWb.id, VIDEOS.offBroadwayWb.id],
    positions: [GRANDVIEW_7_HALF_N, GRANDVIEW_8TH_N],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "eb: commercial to broadway",
    type: "quiet",
    oneWay: "required",
    videoIds: [VIDEOS.centralValleyVancouverEb.id],
    positions: [
      COMMERCIAL_GRANDVIEW,
      [49.26345, -123.0691],
      GRANDVIEW_8TH_S,
      [49.26257, -123.06697],
      [49.26251, -123.06688],
      GRANDVIEW_BROADWAY_NW,
    ],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "eb: crossing broadway",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.centralValleyVancouverEb.id],
    positions: [GRANDVIEW_BROADWAY_NW, GRANDVIEW_BROADWAY_S],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "eb: broadway",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.centralValleyVancouverEb.id],
    positions: [
      GRANDVIEW_BROADWAY_S,
      GRANDVIEW_CUT_BROADWAY_SE,
      [49.26219, -123.06599],
      VICTORIA_BROADWAY_SE,
    ],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "wb: crossing broadway",
    type: "combined",
    oneWay: "required",
    videoIds: [VIDEOS.centralValleyVancouverWb.id],
    positions: [VICTORIA_BROADWAY_SE, VICTORIA_BROADWAY_NE],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "wb: crossing victoria",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.centralValleyVancouverWb.id],
    positions: [
      VICTORIA_BROADWAY_NE,
      [49.2624, -123.0662],
      GRANDVIEW_BROADWAY_NE,
    ],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "wb: after victoria",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.centralValleyVancouverWb.id],
    positions: [
      GRANDVIEW_BROADWAY_NE,
      [49.26245, -123.06639],
      [49.26259, -123.06674],
      [49.26262, -123.06687],
      GRANDVIEW_8_HALF_N,
    ],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "wb: after victoria, after lane",
    type: "quiet",
    oneWay: "required",
    videoIds: [VIDEOS.centralValleyVancouverWb.id],
    positions: [GRANDVIEW_8_HALF_N, GRANDVIEW_8TH_N],
  },
  {
    description: "median at 8th",
    positions: [GRANDVIEW_8TH_S, GRANDVIEW_8TH_N],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "victoria to semlin",
    type: "dedicated",
    videoIds: [
      VIDEOS.centralValleyVancouverEb.id,
      VIDEOS.centralValleyVancouverWb.id,
    ],
    positions: [
      VICTORIA_BROADWAY_SE,
      [49.26188, -123.06507],
      [49.26173, -123.06476],
      [49.26161, -123.06448],
      [49.26155, -123.06424],
      SEMLIN_GRANDVIEW,
    ],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "semlin to slocan",
    type: "quiet",
    videoIds: [
      VIDEOS.centralValleyVancouverEb.id,
      VIDEOS.centralValleyVancouverWb.id,
    ],
    positions: [
      SEMLIN_GRANDVIEW,
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
    ],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "slocan to rupert",
    type: "mixed",
    videoIds: [
      VIDEOS.centralValleyVancouverEb.id,
      VIDEOS.centralValleyVancouverWb.id,
    ],
    positions: [
      SLOCAN_N_GRANDVIEW,
      [49.25829, -123.0495],
      [49.25863, -123.04704],
      [49.25874, -123.04614],
      [49.25881, -123.04603],
      [49.25899, -123.04583],
      [49.25902, -123.04555],
      [49.25911, -123.04504],
      [49.25914, -123.04481],
      [49.25914, -123.04431],
      [49.25914, -123.04381],
      [49.25916, -123.04361],
      [49.25927, -123.0425],
      [49.25954, -123.04013],
      [49.25984, -123.03791],
      [49.25987, -123.0377],
      [49.26021, -123.03522],
      [49.26035, -123.03432],
      RUPERT_CVG_W,
    ],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "crossing rupert",
    type: "mixed",
    videoIds: [
      VIDEOS.centralValleyVancouverEb.id,
      VIDEOS.centralValleyVancouverWb.id,
      VIDEOS.rupertSb.id,
      VIDEOS.rupertNb.id,
    ],
    videoIdsStartAtEnd: [VIDEOS.rupertSb.id],
    videoIdsEndAtStart: [VIDEOS.rupertNb.id],
    positions: [RUPERT_CVG_W, [49.26067, -123.03395], RUPERT_CVG_E],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "rupert to boundary",
    type: "mixed",
    videoIds: [
      VIDEOS.centralValleyVancouverEb.id,
      VIDEOS.centralValleyVancouverWb.id,
    ],
    positions: [
      RUPERT_CVG_E,
      [49.26067, -123.03347],
      [49.26076, -123.03339],
      [49.26084, -123.03313],
      [49.26095, -123.03219],
      [49.26102, -123.03182],
      [49.26155, -123.03027],
      [49.26205, -123.02879],
      [49.26217, -123.02839],
      [49.26229, -123.02788],
      [49.26238, -123.02736],
      [49.26242, -123.02704],
      [49.26247, -123.02642],
      [49.26247, -123.02609],
      BOUNDARY_CVG,
    ],
  },

  // burnaby
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "just east of boundary",
    type: "mixed",
    videoIds: [
      VIDEOS.centralValleyVancouverEb.id,
      VIDEOS.centralValleyVancouverWb.id,
    ],
    videoIdsEndAtEnd: [VIDEOS.centralValleyVancouverEb.id],
    videoIdsStartAtEnd: [VIDEOS.centralValleyVancouverWb.id],
    positions: [BOUNDARY_CVG, EAST_OF_BOUNDARY],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    type: "mixed",
    description: "boundary to gilmore",
    positions: [EAST_OF_BOUNDARY, [49.26235, -123.01782], GILMORE_CVG],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "gilmore to overpass",
    type: "comfortable",
    positions: [
      GILMORE_STILL_CREEK,
      [49.26094, -123.01409],
      [49.26092, -123.01398],
      [49.2609, -123.01283],
      [49.26089, -123.01261],
      [49.26083, -123.01223],
      [49.26072, -123.0118],
      [49.26077, -123.01152],
      [49.2608, -123.0112],
      [49.26082, -123.01057],
      [49.2608, -123.0103],
      [49.26081, -123.0102],
      [49.26083, -123.00986],
      [49.26083, -123.00949],
      [49.26079, -123.00931],
      [49.26076, -123.00692],
      [49.26072, -123.00666],
      [49.26073, -123.00645],
      [49.2615, -123.00568],
      [49.26163, -123.00548],
      [49.26176, -123.00521],
      [49.26188, -123.00489],
      [49.26192, -123.00459],
      [49.26192, -123.00413],
      [49.26189, -123.00352],
      [49.26188, -123.00302],
      [49.2619, -123.00274],
      EASTBROOK_STILL_CREEK,
      [49.26186, -123.00013],
      [49.26185, -122.99994],
      [49.26184, -122.99982],
      [49.26179, -122.99956],
      [49.26182, -122.99944],
      [49.26183, -122.99862],
      [49.26182, -122.99823],
      [49.26179, -122.99781],
      [49.26179, -122.99763],
      [49.26177, -122.99739],
      [49.26171, -122.99706],
      [49.26163, -122.99679],
      [49.26152, -122.99654],
      [49.26126, -122.99604],
      [49.2612, -122.99598],
      [49.26108, -122.99568],
      [49.261, -122.9954],
      [49.26095, -122.99515],
      [49.26093, -122.99497],
      [49.26092, -122.99446],
      [49.26086, -122.99423],
      [49.26085, -122.99121],
      [49.26084, -122.9874],
      [49.26084, -122.98525],
      [49.26084, -122.98498],
      [49.26086, -122.98492],
      [49.26089, -122.98487],
      [49.26094, -122.98462],
      [49.26019, -122.98391],
      [49.26033, -122.98306],
      [49.26054, -122.98276],
      [49.2609, -122.98236],
      [49.2609, -122.98028],
      [49.2609, -122.98014],
      [49.26088, -122.97567],
      [49.26087, -122.97448],
      [49.26087, -122.97429],
      [49.26087, -122.97324],
      [49.26089, -122.97116],
      [49.26086, -122.97081],
      [49.26078, -122.97033],
      [49.26035, -122.96933],
      [49.26023, -122.9691],
      KENSINGTON_CVG,
      [49.25986, -122.96805],
      [49.25974, -122.96778],
      [49.25969, -122.9676],
      [49.25937, -122.96703],
      [49.25901, -122.96632],
      [49.25857, -122.96571],
      [49.2582, -122.96531],
      [49.2579, -122.96506],
      [49.25772, -122.96473],
      [49.25768, -122.96469],
      [49.2576, -122.96467],
      LAKES_CVG_S,
    ],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name, ROUTES.lakes.name],
    description: "pre-overpass",
    type: "mixed",
    elevation: 0.5,
    videoIds: [VIDEOS.lakesNb.id],
    positions: [LAKES_CVG_S, OVERPASS_START],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name, ROUTES.lakes.name],
    description: "train overpass",
    type: "mixed",
    elevation: 1,
    videoIds: [VIDEOS.lakesNb.id],
    positions: [
      OVERPASS_START,
      [49.2573, -122.96477],
      [49.25733, -122.96491],
      [49.25737, -122.96499],
      [49.25773, -122.96529],
      [49.25778, -122.9653],
      [49.25786, -122.96528],
      [49.25789, -122.96525],
      [49.25791, -122.96519],
      [49.25814, -122.96399],
      [49.25817, -122.96393],
      [49.25821, -122.9639],
      [49.25824, -122.96388],
      [49.25828, -122.96388],
      [49.25833, -122.9639],
      [49.25836, -122.96394],
      [49.25838, -122.96399],
      [49.25839, -122.96404],
      [49.2584, -122.96409],
      [49.25838, -122.96417],
      [49.25836, -122.96422],
      OVERPASS_END,
    ],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name, ROUTES.lakes.name],
    description: "post-overpass",
    type: "mixed",
    elevation: 0.5,
    videoIds: [VIDEOS.lakesNb.id],
    positions: [OVERPASS_END, [49.25827, -122.96429], SPERLING_WINSTON],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "overpass to winston lanes",
    type: "mixed",
    positions: [
      SPERLING_WINSTON,
      [49.25802, -122.96414],
      [49.25779, -122.96386],
      [49.25712, -122.96307],
      [49.25663, -122.96249],
      WINSTON_GREENWOOD_NE,
    ],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "winston eb closed",
    type: "painted",
    oneWay: "required",
    isClosed: true,
    positions: [
      WINSTON_GREENWOOD_NE,
      [49.25633, -122.96232],
      [49.25587, -122.96176],
      [49.25411, -122.95963],
      [49.25132, -122.95633],
      [49.25024, -122.95502],
      [49.25018, -122.95491],
      [49.25012, -122.95479],
      [49.25007, -122.95465],
      [49.25002, -122.95449],
      [49.24998, -122.95433],
      [49.24995, -122.95412],
      [49.24993, -122.95335],
      [49.24994, -122.95279],
      [49.24995, -122.94985],
      [49.24995, -122.94969],
      [49.24993, -122.94951],
      [49.24989, -122.94931],
      [49.24982, -122.94907],
      PHILLIPS_WINSTON_S,
    ],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "winston eb open",
    type: "painted",
    oneWay: "required",
    positions: [
      PHILLIPS_WINSTON_S,
      [49.24944, -122.94835],
      [49.2488, -122.94701],
      [49.24872, -122.94682],
      [49.24867, -122.94666],
      [49.24862, -122.94644],
      [49.24856, -122.94617],
      [49.24852, -122.94591],
      [49.2485, -122.94564],
      [49.24846, -122.94227],
      [49.24845, -122.94211],
      [49.24821, -122.9406],
      [49.24818, -122.9403],
      [49.24816, -122.93659],
      [49.24818, -122.9359],
      [49.24818, -122.93532],
      [49.24819, -122.93089],
      [49.24817, -122.92574],
      [49.24819, -122.92549],
      [49.24822, -122.92519],
      [49.24828, -122.92495],
      BRIGHTON_WINSTON_SW,
    ],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "winston wb",
    type: "painted",
    oneWay: "required",
    positions: [
      BRIGHTON_WINSTON_SW,
      BRIGHTON_WINSTON_NW,
      [49.24844, -122.92466],
      [49.2483, -122.92516],
      [49.24828, -122.92529],
      [49.24824, -122.92571],
      [49.24827, -122.93101],
      [49.24826, -122.9353],
      [49.24826, -122.93591],
      [49.24824, -122.93661],
      [49.24825, -122.9401],
      [49.24826, -122.94033],
      [49.24828, -122.94058],
      [49.24852, -122.94208],
      [49.24854, -122.94224],
      [49.24857, -122.94543],
      [49.24859, -122.94581],
      [49.24862, -122.94606],
      [49.24867, -122.9463],
      [49.24872, -122.9465],
      [49.24877, -122.94666],
      [49.24888, -122.94698],
      [49.2495, -122.94827],
      [49.24976, -122.94874],
      [49.24983, -122.94889],
      [49.2499, -122.94904],
      [49.24993, -122.94914],
      [49.24997, -122.94926],
      [49.25, -122.94942],
      [49.25002, -122.94955],
      [49.25003, -122.94968],
      [49.25002, -122.95375],
      [49.25003, -122.95405],
      [49.25006, -122.95432],
      [49.25011, -122.95451],
      [49.25018, -122.95473],
      [49.25029, -122.95494],
      [49.25137, -122.95624],
      [49.2536, -122.95887],
      [49.25623, -122.96206],
      WINSTON_GREENWOOD_NE,
    ],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "government",
    type: "mixed",
    positions: [
      BRIGHTON_WINSTON_SW,
      [49.24979, -122.91914],
      [49.25035, -122.91706],
      [49.25043, -122.91673],
      [49.25053, -122.91626],
      [49.25063, -122.91554],
      [49.25066, -122.91518],
      [49.25068, -122.91481],
      [49.25068, -122.91452],
      [49.25067, -122.91436],
      CARIBOO_GOVERNMENT,
    ],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name, ROUTES.brunetteFraser.name],
    type: "mixed",
    description: "government to cariboo plc",
    positions: [
      CARIBOO_GOVERNMENT,
      [49.2506, -122.91411],
      [49.24962, -122.91414],
      [49.24947, -122.91421],
      CARIBOO_CARIBOO_PL_E,
    ],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name, ROUTES.brunetteFraser.name],
    type: "quiet",
    description: "cariboo pl",
    positions: [
      CARIBOO_CARIBOO_PL_E,
      [49.24938, -122.91418],
      [49.24932, -122.91405],
      [49.24922, -122.91393],
      [49.24919, -122.91392],
      [49.24907, -122.91387],
      [49.24887, -122.91382],
      [49.2488, -122.91379],
      [49.24876, -122.91378],
      [49.24868, -122.91371],
      [49.2484, -122.91341],
      [49.24822, -122.9132],
      [49.24816, -122.91311],
      [49.24813, -122.91305],
      [49.24809, -122.91293],
      [49.24805, -122.91275],
      [49.24804, -122.91259],
      [49.24804, -122.91246],
      [49.24804, -122.91238],
      CARIBOO_PL_E,
    ],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name, ROUTES.brunetteFraser.name],
    type: "mixed",
    description: "cariboo pl to north rd",
    positions: [
      CARIBOO_PL_E,
      [49.248, -122.91226],
      [49.24791, -122.91195],
      [49.24777, -122.91137],
      [49.24774, -122.91127],
      [49.24772, -122.91113],
      [49.24777, -122.91082],
      [49.24784, -122.91051],
      [49.24788, -122.91018],
      [49.24787, -122.91001],
      [49.24781, -122.9098],
      [49.24774, -122.90962],
      [49.24764, -122.90947],
      [49.24733, -122.90906],
      [49.24714, -122.90885],
      [49.24702, -122.9087],
      [49.24677, -122.90842],
      [49.24664, -122.90834],
      [49.24643, -122.90835],
      [49.2462, -122.90845],
      [49.24603, -122.90847],
      [49.24588, -122.90842],
      [49.24576, -122.90834],
      [49.24564, -122.90818],
      [49.24556, -122.90801],
      [49.24539, -122.90763],
      [49.24527, -122.90741],
      [49.24488, -122.90694],
      [49.24478, -122.90675],
      [49.24473, -122.90664],
      [49.24467, -122.90642],
      [49.24446, -122.90536],
      [49.24434, -122.90491],
      [49.24397, -122.90322],
      [49.24395, -122.90304],
      [49.24386, -122.90234],
      [49.2438, -122.90144],
      [49.24376, -122.90098],
      [49.2437, -122.90045],
      [49.24363, -122.90002],
      [49.24358, -122.89977],
      [49.24328, -122.89871],
      [49.24325, -122.89861],
      [49.24292, -122.89791],
      [49.24272, -122.89736],
      [49.24254, -122.89702],
      [49.24244, -122.89693],
      [49.24223, -122.89685],
      [49.24207, -122.89675],
      [49.24199, -122.89668],
      [49.2419, -122.89655],
      [49.24185, -122.89644],
      [49.24173, -122.8961],
      [49.24147, -122.8951],
      [49.24143, -122.89497],
      [49.24138, -122.89486],
      [49.24129, -122.8947],
      [49.2412, -122.89456],
      [49.24098, -122.89432],
      [49.24043, -122.89396],
      [49.23986, -122.89359],
      [49.23934, -122.89332],
      [49.23909, -122.89315],
      [49.23902, -122.89308],
      [49.23885, -122.89288],
      [49.23876, -122.89275],
      NORTH_CVG,
    ],
  },

  // new westminster
  {
    routeNames: [ROUTES.centralValleyGreenway.name, ROUTES.brunetteFraser.name],
    type: "mixed",
    description: "north to hume park",
    videoIds: [VIDEOS.centralValleyNWNb.id],
    videoIdsEndAtStart: [VIDEOS.centralValleyNWNb.id],
    positions: [
      NORTH_CVG,
      [49.23729, -122.89264],
      [49.23728, -122.89239],
      HUME_PARK_DR_N,
    ],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name, ROUTES.brunetteFraser.name],
    type: "quiet",
    description: "hume park dr",
    videoIds: [VIDEOS.centralValleyNWNb.id],
    positions: [
      HUME_PARK_DR_N,
      [49.237, -122.89233],
      [49.2369, -122.89233],
      [49.23682, -122.89231],
      [49.23656, -122.89212],
      [49.23644, -122.89204],
      [49.23613, -122.89195],
      [49.23603, -122.89193],
      [49.23571, -122.89201],
      [49.2356, -122.89201],
      [49.23555, -122.89198],
      [49.2355, -122.89191],
      HUME_PARK_DR_S,
    ],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name, ROUTES.brunetteFraser.name],
    type: "mixed",
    description: "hume park path to fraser split",
    videoIds: [VIDEOS.centralValleyNWNb.id],
    positions: [
      HUME_PARK_DR_S,
      [49.23518, -122.89106],
      [49.23516, -122.89092],
      [49.23516, -122.89078],
      [49.23517, -122.89068],
      [49.23518, -122.89052],
      [49.23514, -122.89037],
      [49.23508, -122.8903],
      [49.2349, -122.88977],
      [49.23487, -122.88962],
      [49.23488, -122.88946],
      [49.23489, -122.88936],
      BRUNETTE_FRASER_CVG_SW,
    ],
  },
  {
    description: "brunette fraser alt connection",
    type: "mixed",
    positions: [BRUNETTE_FRASER_CVG_SE, BRUNETTE_FRASER_CVG_NE],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    type: "mixed",
    description: "brunette fraser split south triangle leg",
    videoIds: [VIDEOS.centralValleyNWNb.id],
    positions: [
      BRUNETTE_FRASER_CVG_SW,
      [49.235, -122.889],
      [49.235, -122.88883],
      [49.23496, -122.88873],
      BRUNETTE_FRASER_CVG_SE,
    ],
  },
  {
    routeNames: [
      ROUTES.centralValleyGreenway.name,
      ROUTES.crosstownNewWestminster.name,
    ],
    description: "brunette fraser split to garrett",
    type: "mixed",
    videoIds: [VIDEOS.centralValleyNWNb.id],
    positions: [
      BRUNETTE_FRASER_CVG_SE,
      [49.23325, -122.88862],
      [49.23317, -122.88865],
      GARRETT_CVG,
    ],
  },
  {
    routeNames: [
      ROUTES.centralValleyGreenway.name,
      ROUTES.crosstownNewWestminster.name,
    ],
    description: "garrett to columbia",
    type: "quiet",
    videoIds: [VIDEOS.centralValleyNWNb.id],
    positions: [
      GARRETT_CVG,
      [49.23318, -122.88888],
      [49.23322, -122.89009],
      [49.23158, -122.89015],
      [49.22967, -122.8902],
      [49.22788, -122.89024],
      COLUMBIA_SHERBROOKE_E,
    ],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "columbia: north part, nb",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.centralValleyNWNb.id],
    positions: [
      COLUMBIA_BRUNETTE,
      [49.22223, -122.8929],
      [49.22278, -122.89288],
      [49.22366, -122.89284],
      [49.2246, -122.89283],
      [49.22556, -122.89281],
      [49.22645, -122.89279],
      [49.22787, -122.89275],
      COLUMBIA_SHERBROOKE_E,
    ],
  },
  {
    routeNames: [
      ROUTES.centralValleyGreenway.name,
      ROUTES.crosstownNewWestminster.name,
    ],
    description: "crossing columbia",
    type: "quiet",
    positions: [COLUMBIA_SHERBROOKE_W, COLUMBIA_SHERBROOKE_E],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "columbia: north part, sb",
    type: "painted",
    oneWay: "required",
    positions: [
      COLUMBIA_SHERBROOKE_W,
      [49.22646, -122.89294],
      [49.22556, -122.89296],
      [49.22461, -122.89299],
      [49.22366, -122.893],
      [49.22278, -122.89304],
      COLUMBIA_BRUNETTE,
    ],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "columbia: bit to debeck",
    type: "dedicated",
    videoIds: [VIDEOS.centralValleyNWNb.id],
    positions: [COLUMBIA_BRUNETTE, [49.22202, -122.89307], COLUMBIA_DEBECK_W],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "columbia 'detour' to sapper",
    type: "quiet",
    videoIds: [VIDEOS.centralValleyNWNb.id],
    positions: [
      COLUMBIA_DEBECK_W,
      [49.22198, -122.89451],
      [49.22049, -122.89455],
      COLUMBIA_CUMBERLAND_W,
    ],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name],
    description: "columbia: separated part from cumberland",
    type: "mixed",
    videoIds: [VIDEOS.centralValleyNWNb.id],
    positions: [
      COLUMBIA_CUMBERLAND_W,
      [49.22039, -122.89323],
      [49.22035, -122.89322],
      COLUMBIA_CUMBERLAND_SE,
      [49.21997, -122.89319],
      [49.21965, -122.89325],
      [49.21938, -122.89323],
      [49.2187, -122.89337],
      [49.21834, -122.89349],
      [49.21812, -122.89359],
      [49.21744, -122.8938],
      [49.21698, -122.89393],
      [49.21671, -122.89405],
      [49.21647, -122.89405],
      [49.21641, -122.89413],
      [49.21581, -122.89429],
      [49.21509, -122.89452],
      [49.21497, -122.8946],
      [49.21485, -122.89466],
      [49.21468, -122.89469],
      [49.21454, -122.8948],
      [49.21424, -122.89521],
      [49.2137, -122.89564],
      [49.21348, -122.89566],
      [49.21304, -122.89606],
      [49.21299, -122.89621],
      [49.2129, -122.89626],
      [49.2128, -122.89638],
      [49.21266, -122.89649],
      [49.2124, -122.89663],
      [49.21211, -122.89687],
      [49.21191, -122.89711],
      [49.21178, -122.89726],
      [49.21167, -122.89744],
      [49.21164, -122.89757],
      [49.21141, -122.89774],
      [49.2113, -122.8977],
      [49.21101, -122.89795],
      [49.21082, -122.89816],
      [49.21063, -122.8983],
      [49.21043, -122.89836],
      [49.21022, -122.89836],
      [49.21006, -122.89836],
      [49.20988, -122.89842],
      [49.20965, -122.89856],
      [49.20936, -122.89877],
      [49.209, -122.89902],
      [49.20882, -122.89921],
      [49.20794, -122.90018],
      [49.20791, -122.90026],
      [49.20775, -122.90036],
      BC_PARKWAY_CVG_SPLIT,
    ],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name, ROUTES.bcParkway.name],
    description: "columbia: separated part - overlap",
    type: "mixed",
    videoIds: [VIDEOS.centralValleyNWNb.id, VIDEOS.bcParkwayNWWb.id],
    positions: [BC_PARKWAY_CVG_SPLIT, [49.20694, -122.90122], ELLIOT_COLUMBIA],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name, ROUTES.bcParkway.name],
    description: "columbia: south part, wb",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.bcParkwayNWWb.id],
    positions: [
      ELLIOT_COLUMBIA,
      [49.20648, -122.90195],
      [49.20611, -122.90266],
      [49.20575, -122.90333],
      [49.20499, -122.90475],
      [49.20466, -122.90535],
      [49.20396, -122.90663],
      [49.20327, -122.90787],
      [49.20271, -122.90891],
      BEGBIE_COLUMBIA_N,
    ],
  },
  {
    description: "columbia: wb beyond begbie & up 8th",
    type: "painted",
    oneWay: "required",
    positions: [BEGBIE_COLUMBIA_N, [49.20132, -122.9115], EIGHTH_CARNARVON_E],
  },
  {
    description: "columbia: eb before begbie",
    type: "painted",
    oneWay: "required",
    positions: [[49.20129, -122.91132], BEGBIE_COLUMBIA_S],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name, ROUTES.bcParkway.name],
    description: "columbia: south part, eb",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.centralValleyNWNb.id],
    positions: [
      BEGBIE_COLUMBIA_S,
      [49.20262, -122.90879],
      [49.20318, -122.90777],
      [49.20385, -122.9065],
      [49.20456, -122.9052],
      [49.20489, -122.9046],
      [49.20551, -122.90342],
      [49.20618, -122.90211],
      [49.2064, -122.90166],
      ELLIOT_COLUMBIA,
    ],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name, ROUTES.bcParkway.name],
    description: "quayside/begbie",
    type: "shared",
    videoIds: [VIDEOS.centralValleyNWNb.id, VIDEOS.bcParkwayNWWb.id],
    videoIdsStartAtStart: [VIDEOS.centralValleyNWNb.id],
    positions: [
      QUAYSIDE_JOIN,
      [49.20064, -122.91055],
      [49.20065, -122.91039],
      [49.20061, -122.9103],
      [49.20059, -122.91018],
      [49.20062, -122.91006],
      [49.20068, -122.90995],
      [49.20073, -122.90982],
      [49.20072, -122.90963],
      [49.20073, -122.90947],
      [49.20079, -122.90933],
      [49.20087, -122.90926],
      [49.20094, -122.90927],
      [49.20109, -122.90947],
      BEGBIE_COLUMBIA_S,
    ],
  },
  {
    routeNames: [ROUTES.centralValleyGreenway.name, ROUTES.bcParkway.name],
    description: "begbie crossing columbia",
    type: "shared",
    videoIds: [VIDEOS.bcParkwayNWWb.id],
    positions: [BEGBIE_COLUMBIA_S, BEGBIE_COLUMBIA_N],
  },
];
