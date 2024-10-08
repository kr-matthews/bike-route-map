import {
  GAGLARDI_LOUGHEED_NE,
  GAGLARDI_LOUGHEED_NW,
  GAGLARDI_LOUGHEED_SE,
  GAGLARDI_LOUGHEED_SW,
  GILMORE_LOUGHEED_NE,
  GILMORE_LOUGHEED_NW,
  GILMORE_LOUGHEED_SE,
  GILMORE_LOUGHEED_SW,
  KING_EDWARD_LOUGHEED_NW,
  KING_EDWARD_LOUGHEED_SW,
  LEEDER_UNITED,
  SKEENA_CVG,
  SPERLING_LOUGHEED_NE,
  SPERLING_LOUGHEED_SE,
  UNITED_MARY_HILL_NW,
  WILLINGDON_LOUGHEED_NE,
  WILLINGDON_LOUGHEED_SE,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const EB_LANE_START = [49.26564, -123.02192];
const SKEENA_LOUGHEED = [49.26281, -123.02932];
const BETA_LOUGHEED = [49.26613, -122.99753];
const DELTA_LOUGHEED_SE = [49.26505, -122.99205];
const EASTBOUND_ELEVATION_1_PRE = [49.23167, -122.8489];
const EASTBOUND_ELEVATION_1_START = [49.23143, -122.84848];
const EASTBOUND_ELEVATION_1_END = [49.2301, -122.84571];
const EASTBOUND_ELEVATION_1_POST = [49.22998, -122.84524];
const EASTBOUND_ELEVATION_2_PRE = [49.22931, -122.84005];
const EASTBOUND_ELEVATION_2_START = [49.2293, -122.83982];
const EASTBOUND_ELEVATION_2_END = [49.22856, -122.8329];

const WB_INITIAL_PATH_END = [49.22844, -122.82389];

const WESTBOUND_ELEVATION_1_PRE = [49.22982, -122.83067];
const WESTBOUND_ELEVATION_1_START = [49.22984, -122.8322];
const WESTBOUND_ELEVATION_1_END = [49.23005, -122.83592];
const WESTBOUND_ELEVATION_1_POST = [49.23017, -122.83782];

const EASTBOUND_BRUNETTE_FRASER_PRE = [49.25215, -122.91204];
const EASTBOUND_BRUNETTE_FRASER_START = [49.25194, -122.91008];
const EASTBOUND_BRUNETTE_FRASER_END = [49.2518, -122.90909];
const EASTBOUND_BRUNETTE_FRASER_POST = [49.25137, -122.90615];
const WESTBOUND_BRUNETTE_FRASER_PRE = [49.25179, -122.90763];
const WESTBOUND_BRUNETTE_FRASER_START = [49.25198, -122.90903];
const WESTBOUND_BRUNETTE_FRASER_END = [49.2521, -122.90992];
const WESTBOUND_BRUNETTE_FRASER_POST = [49.25218, -122.91042];

const EB_AFTER_MADISON = [49.26636, -123.00736];
const WILLINGDON_LOUGHEED_SW = [49.26628, -123.00341];
const WB_BEFORE_BOUNDARY = [49.26597, -123.0195];

const POST_DELTA_SHOULDER_START = [49.26498, -122.99093];
const AUSTIN_LOUGHEED_SW = [49.24856, -122.89783];
const BRUNETTE_LOUGHEED_SE = [49.23651, -122.87167];
const WOOLRIDGE_LOUGHEED_S = [49.23587, -122.86868];
const MARY_HILL_JOIN = [49.22939, -122.83789];

const WOOLRIDGE_LOUGHEED_NW = [49.23621, -122.86918];
const BRUNETTE_LOUGHEED_N = [49.23674, -122.87171];
const BLUE_MOUNTAIN_LOUGHEED_N = [49.23702, -122.87312];
const AUSTIN_LOUGHEED_NW = [49.24872, -122.89757];
const BEYOND_BETA_SHOULDER_END = [49.26645, -122.99871];

export const LOUGHEED = [
  // eastbound
  {
    description: "from cvg",
    type: "quiet",
    oneWay: "recommended",
    videoIds: [VIDEOS.lougheedEb.id],
    videoIdsStartAtStart: [VIDEOS.lougheedEb.id],
    undesignated: true,
    positions: [
      SKEENA_CVG,
      [49.26225, -123.0284],
      [49.26246, -123.02878],
      SKEENA_LOUGHEED,
    ],
  },
  {
    description: "eb: cvg connection to lane start",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.lougheedEb.id],
    undesignated: true,
    positions: [
      SKEENA_LOUGHEED,
      [49.26395, -123.02761],
      [49.26446, -123.02673],
      [49.26469, -123.02627],
      [49.26493, -123.0257],
      [49.26506, -123.02533],
      [49.26518, -123.02496],
      [49.26528, -123.02456],
      [49.26541, -123.024],
      [49.26551, -123.02339],
      [49.26557, -123.02293],
      [49.26561, -123.02259],
      [49.26563, -123.02219],
      EB_LANE_START,
    ],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "eb: boundary to gilmore",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.lougheedEb.id],
    positions: [
      EB_LANE_START,
      [49.26569, -123.02022],
      [49.26576, -123.01881],
      [49.26588, -123.01658],
      GILMORE_LOUGHEED_SW,
    ],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "eb: crossing gilmore",
    type: "painted",
    oneWay: "required",
    hideArrows: true,
    videoIds: [VIDEOS.lougheedEb.id, VIDEOS.seaToRiverNb.id],
    positions: [GILMORE_LOUGHEED_SW, GILMORE_LOUGHEED_SE],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "eb: gilmore to after madison",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.lougheedEb.id],
    positions: [
      GILMORE_LOUGHEED_SE,
      [49.26617, -123.01182],
      [49.26623, -123.0106],
      [49.26633, -123.00877],
      [49.26638, -123.00743],
      EB_AFTER_MADISON,
    ],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "eb: protected to willingdon",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.lougheedEb.id],
    positions: [
      EB_AFTER_MADISON,
      [49.26636, -123.00602],
      WILLINGDON_LOUGHEED_SW,
    ],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "eb: gilmore to beta",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.lougheedEb.id],
    positions: [
      WILLINGDON_LOUGHEED_SW,
      WILLINGDON_LOUGHEED_SE,
      [49.26624, -123.00041],
      [49.2662, -122.99855],
      [49.26616, -122.99764],
      BETA_LOUGHEED,
    ],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "eb: beta to delta",
    type: "dedicated",
    oneWay: "recommended",
    videoIds: [VIDEOS.lougheedEb.id],
    positions: [
      BETA_LOUGHEED,
      [49.26604, -122.99693],
      [49.26597, -122.99639],
      [49.26585, -122.99567],
      [49.26563, -122.99496],
      [49.26524, -122.9935],
      [49.26518, -122.99302],
      [49.26509, -122.9925],
      DELTA_LOUGHEED_SE,
    ],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "eb: just beyond delta",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.lougheedEb.id],
    positions: [
      DELTA_LOUGHEED_SE,
      [49.26499, -122.99148],
      POST_DELTA_SHOULDER_START,
    ],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "eb: delta to brunette fraser overpass",
    type: "shoulder",
    oneWay: "required",
    videoIds: [VIDEOS.lougheedEb.id],
    positions: [
      POST_DELTA_SHOULDER_START,
      [49.26496, -122.98816],
      [49.26497, -122.98706],
      [49.26498, -122.9835],
      [49.26492, -122.98235],
      [49.2648, -122.98122],
      [49.26472, -122.98063],
      [49.26457, -122.97976],
      [49.26441, -122.97906],
      [49.26421, -122.97837],
      [49.26336, -122.97601],
      [49.26246, -122.97348],
      [49.26202, -122.97221],
      [49.26075, -122.96868],
      [49.2604, -122.96765],
      [49.26016, -122.96689],
      [49.25983, -122.96571],
      [49.25957, -122.96478],
      SPERLING_LOUGHEED_SE,
      [49.25924, -122.96301],
      [49.25913, -122.96242],
      [49.25899, -122.96139],
      [49.25891, -122.96079],
      [49.25883, -122.95998],
      [49.2587, -122.9587],
      [49.25864, -122.95728],
      [49.25861, -122.95603],
      [49.25859, -122.95542],
      [49.25852, -122.95462],
      [49.25834, -122.95342],
      [49.25815, -122.95251],
      [49.25792, -122.95167],
      [49.25697, -122.94872],
      [49.2565, -122.9473],
      [49.25602, -122.9458],
      [49.25509, -122.94298],
      [49.2548, -122.94205],
      [49.25461, -122.94134],
      [49.25444, -122.94052],
      [49.2543, -122.93969],
      [49.25423, -122.93898],
      [49.25417, -122.93814],
      [49.25416, -122.93786],
      [49.25414, -122.93531],
      [49.25408, -122.92854],
      [49.25409, -122.92677],
      [49.25408, -122.92607],
      [49.25401, -122.92483],
      [49.25397, -122.92428],
      [49.25322, -122.91913],
      [49.25307, -122.91808],
      [49.25271, -122.9156],
      [49.25253, -122.91448],
      [49.25235, -122.91348],
      GAGLARDI_LOUGHEED_SW,
      GAGLARDI_LOUGHEED_SE,
      EASTBOUND_BRUNETTE_FRASER_PRE,
    ],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "eb: pre brunette fraser overpass",
    type: "dedicated",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.lougheedEb.id],
    positions: [
      EASTBOUND_BRUNETTE_FRASER_PRE,
      [49.25213, -122.9119],
      [49.25208, -122.9118],
      [49.25204, -122.91153],
      [49.25205, -122.91144],
      [49.25198, -122.91083],
      EASTBOUND_BRUNETTE_FRASER_START,
    ],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "eb: brunette fraser overpass",
    type: "mixed",
    oneWay: "required",
    elevation: 1,
    videoIds: [VIDEOS.lougheedEb.id],
    positions: [EASTBOUND_BRUNETTE_FRASER_START, EASTBOUND_BRUNETTE_FRASER_END],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "eb: post brunette fraser overpass",
    type: "dedicated",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.lougheedEb.id],
    positions: [EASTBOUND_BRUNETTE_FRASER_END, EASTBOUND_BRUNETTE_FRASER_POST],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "eb: brunette fraser overpass to austin",
    type: "comfortable",
    oneWay: "required",
    videoIds: [VIDEOS.lougheedEb.id],
    positions: [
      EASTBOUND_BRUNETTE_FRASER_POST,
      [49.25109, -122.90424],
      [49.25097, -122.90369],
      [49.25094, -122.90348],
      [49.25092, -122.90331],
      [49.25082, -122.90291],
      [49.25081, -122.90282],
      [49.25078, -122.90277],
      [49.25073, -122.90256],
      [49.2505, -122.90184],
      [49.25031, -122.90129],
      [49.25011, -122.90081],
      [49.24996, -122.90048],
      [49.24988, -122.90035],
      [49.24933, -122.89927],
      [49.24917, -122.89895],
      [49.24891, -122.89846],
      AUSTIN_LOUGHEED_SW,
    ],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "eb: austin to brunette",
    type: "shoulder",
    oneWay: "required",
    videoIds: [VIDEOS.lougheedEb.id],
    positions: [
      AUSTIN_LOUGHEED_SW,
      [49.24842, -122.89755],
      [49.24682, -122.89461],
      [49.24645, -122.89396],
      [49.24576, -122.8927],
      [49.24477, -122.8908],
      [49.24367, -122.8888],
      [49.24242, -122.88653],
      [49.24161, -122.88503],
      [49.24079, -122.88357],
      [49.24, -122.88215],
      [49.23969, -122.88158],
      [49.23871, -122.87975],
      [49.23839, -122.87906],
      [49.23814, -122.87847],
      [49.23793, -122.87792],
      [49.23767, -122.87712],
      [49.23746, -122.87632],
      [49.23706, -122.8743],
      [49.23682, -122.87313],
      BRUNETTE_LOUGHEED_SE,
    ],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "eb: brunette to woolridge",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.lougheedEb.id],
    positions: [
      BRUNETTE_LOUGHEED_SE,
      [49.23635, -122.87087],
      WOOLRIDGE_LOUGHEED_S,
    ],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "eb: woolridge to elevation",
    type: "shoulder",
    oneWay: "required",
    videoIds: [VIDEOS.lougheedEb.id],
    positions: [
      WOOLRIDGE_LOUGHEED_S,
      [49.23551, -122.86702],
      [49.23502, -122.86483],
      [49.23446, -122.8622],
      KING_EDWARD_LOUGHEED_SW,
      [49.23432, -122.86156],
      [49.23347, -122.85737],
      [49.23299, -122.85501],
      [49.23252, -122.85276],
      [49.23199, -122.85014],
      [49.23183, -122.8495],
      EASTBOUND_ELEVATION_1_PRE,
    ],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "eb: elevation 1a",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.lougheedEb.id],
    positions: [EASTBOUND_ELEVATION_1_PRE, EASTBOUND_ELEVATION_1_START],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "eb: elevation 1b",
    type: "shoulder",
    oneWay: "required",
    elevation: 1,
    videoIds: [VIDEOS.lougheedEb.id],
    positions: [
      EASTBOUND_ELEVATION_1_START,
      [49.23068, -122.84714],
      [49.23048, -122.84675],
      [49.23028, -122.84627],
      EASTBOUND_ELEVATION_1_END,
    ],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "eb: elevation 1c",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.lougheedEb.id],
    positions: [EASTBOUND_ELEVATION_1_END, EASTBOUND_ELEVATION_1_POST],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "eb: between elevations",
    type: "shoulder",
    oneWay: "required",
    videoIds: [VIDEOS.lougheedEb.id],
    positions: [
      EASTBOUND_ELEVATION_1_POST,
      [49.22985, -122.84442],
      [49.22947, -122.84141],
      [49.22934, -122.84009],
      EASTBOUND_ELEVATION_2_PRE,
    ],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "eb: elevation 2a",
    type: "dedicated",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.lougheedEb.id],
    positions: [EASTBOUND_ELEVATION_2_PRE, EASTBOUND_ELEVATION_2_START],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "eb: elevation 2b part1",
    type: "dedicated",
    oneWay: "required",
    elevation: 1,
    videoIds: [VIDEOS.lougheedEb.id],
    positions: [
      EASTBOUND_ELEVATION_2_START,
      [49.22915, -122.83823],
      [49.22915, -122.83816],
      [49.22917, -122.83813],
      MARY_HILL_JOIN,
    ],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "eb: elevation 2b part 2",
    type: "shoulder",
    oneWay: "required",
    elevation: 1,
    videoIds: [VIDEOS.lougheedEb.id],
    positions: [
      MARY_HILL_JOIN,
      [49.22916, -122.83583],
      [49.22904, -122.8349],
      [49.22888, -122.83417],
      EASTBOUND_ELEVATION_2_END,
    ],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "eb: to leeder exit",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.lougheedEb.id],
    positions: [
      EASTBOUND_ELEVATION_2_END,
      [49.22826, -122.8317],
      [49.228, -122.83057],
      [49.22794, -122.83046],
      [49.22783, -122.83036],
      [49.22772, -122.83032],
      LEEDER_UNITED,
    ],
  },

  // westbound
  {
    routeNames: [ROUTES.lougheed.name],
    description: "wb: path from mary hill",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.lougheedWb.id],
    positions: [
      UNITED_MARY_HILL_NW,
      [49.22833, -122.81971],
      [49.22843, -122.81994],
      [49.22849, -122.82044],
      [49.22847, -122.82188],
      [49.22845, -122.82287],
      WB_INITIAL_PATH_END,
    ],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "wb: after initial path",
    type: "shoulder",
    oneWay: "required",
    videoIds: [VIDEOS.lougheedWb.id],
    positions: [
      WB_INITIAL_PATH_END,
      [49.22846, -122.82433],
      [49.22864, -122.82546],
      [49.22882, -122.82631],
      [49.22911, -122.82758],
      [49.22944, -122.82871],
      [49.22965, -122.82943],
      [49.22973, -122.82977],
      [49.22977, -122.83005],
      [49.2298, -122.83033],
      WESTBOUND_ELEVATION_1_PRE,
    ],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "wb: pre-elevation",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.lougheedWb.id],
    positions: [WESTBOUND_ELEVATION_1_PRE, WESTBOUND_ELEVATION_1_START],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "wb: elevation",
    type: "shoulder",
    oneWay: "required",
    elevation: 1,
    videoIds: [VIDEOS.lougheedWb.id],
    positions: [
      WESTBOUND_ELEVATION_1_START,
      [49.22989, -122.83335],
      [49.22994, -122.83436],
      [49.23, -122.83522], // join from other lougheed
      WESTBOUND_ELEVATION_1_END,
    ],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "wb: post-elevation",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.lougheedWb.id],
    positions: [WESTBOUND_ELEVATION_1_END, WESTBOUND_ELEVATION_1_POST],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "wb: elevation to woolridge",
    type: "shoulder",
    oneWay: "required",
    videoIds: [VIDEOS.lougheedWb.id],
    positions: [
      WESTBOUND_ELEVATION_1_POST,
      [49.23025, -122.8389],
      [49.2304, -122.84031],
      [49.23054, -122.84135],
      [49.23063, -122.84197],
      [49.23074, -122.84256],
      [49.23101, -122.84424],
      [49.23114, -122.84498],
      [49.23143, -122.84639],
      [49.23197, -122.84884],
      [49.23241, -122.85089],
      [49.23276, -122.85263],
      [49.2332, -122.85486],
      [49.23358, -122.85667],
      [49.23392, -122.85845],
      KING_EDWARD_LOUGHEED_NW,
      [49.23518, -122.8646],
      [49.23594, -122.86795],
      WOOLRIDGE_LOUGHEED_NW,
    ],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "wb: woolridge to blue mountain",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.lougheedWb.id],
    positions: [
      WOOLRIDGE_LOUGHEED_NW,
      BRUNETTE_LOUGHEED_N,
      BLUE_MOUNTAIN_LOUGHEED_N,
    ],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "wb: blue mountain to austin",
    type: "shoulder",
    oneWay: "required",
    videoIds: [VIDEOS.lougheedWb.id],
    positions: [
      BLUE_MOUNTAIN_LOUGHEED_N,
      [49.23758, -122.8759],
      [49.23782, -122.87686],
      [49.23807, -122.87773],
      [49.23847, -122.87876],
      [49.23887, -122.87963],
      [49.23974, -122.88122],
      [49.24056, -122.88269],
      [49.24217, -122.88564],
      [49.24361, -122.88828],
      [49.24526, -122.8913], // Rochester
      [49.24545, -122.89165],
      [49.24635, -122.89327],
      [49.24711, -122.89466],
      AUSTIN_LOUGHEED_NW,
    ],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "wb: austin to brunette fraser overpass",
    type: "comfortable",
    oneWay: "required",
    videoIds: [VIDEOS.lougheedWb.id],
    positions: [
      AUSTIN_LOUGHEED_NW,
      [49.24879, -122.89764],
      [49.24901, -122.89804],
      [49.24931, -122.89866],
      [49.24937, -122.8988],
      [49.24987, -122.89972],
      [49.24993, -122.89988],
      [49.25017, -122.90037],
      [49.25039, -122.90088],
      [49.25054, -122.90128],
      [49.25064, -122.90155],
      [49.25083, -122.90215],
      [49.25106, -122.90294],
      [49.25128, -122.90398],
      [49.25132, -122.90422],
      [49.25137, -122.90452],
      [49.2514, -122.90465],
      [49.25147, -122.90487],
      [49.25151, -122.90513],
      [49.25151, -122.9055],
      [49.25163, -122.90634],
      WESTBOUND_BRUNETTE_FRASER_PRE,
    ],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "wb: pre brunette fraser overpass",
    type: "dedicated",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.lougheedWb.id],
    positions: [
      WESTBOUND_BRUNETTE_FRASER_PRE,
      [49.25191, -122.90857],
      WESTBOUND_BRUNETTE_FRASER_START,
    ],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "wb: brunette fraser overpass",
    type: "mixed",
    oneWay: "required",
    elevation: 1,
    videoIds: [VIDEOS.lougheedWb.id],
    positions: [WESTBOUND_BRUNETTE_FRASER_START, WESTBOUND_BRUNETTE_FRASER_END],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "wb: post brunette fraser overpass",
    type: "dedicated",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.lougheedWb.id],
    positions: [WESTBOUND_BRUNETTE_FRASER_END, WESTBOUND_BRUNETTE_FRASER_POST],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "wb: brunette fraser overpass to gaglardi",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.lougheedWb.id],
    positions: [WESTBOUND_BRUNETTE_FRASER_POST, GAGLARDI_LOUGHEED_NE],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "wb: gaglardi to beta-ish",
    type: "shoulder",
    oneWay: "required",
    videoIds: [VIDEOS.lougheedWb.id],
    positions: [
      GAGLARDI_LOUGHEED_NE,
      GAGLARDI_LOUGHEED_NW,
      [49.25258, -122.91311],
      [49.25339, -122.91882],
      [49.25347, -122.91928],
      [49.25349, -122.91955],
      [49.25352, -122.91996],
      [49.25415, -122.92447],
      [49.2542, -122.92504],
      [49.25424, -122.92556],
      [49.25428, -122.92694],
      [49.25429, -122.92853],
      [49.25429, -122.93153],
      [49.2543, -122.93467],
      [49.25435, -122.93787],
      [49.25436, -122.93815],
      [49.25442, -122.93901],
      [49.25451, -122.9398],
      [49.2546, -122.94032],
      [49.25476, -122.94108],
      [49.25494, -122.9417],
      [49.25527, -122.94283],
      [49.25621, -122.94569],
      [49.25719, -122.9487],
      [49.25806, -122.95137],
      [49.2583, -122.95221],
      [49.25845, -122.95287],
      [49.25858, -122.95361],
      [49.25867, -122.95426],
      [49.25873, -122.95483],
      [49.25877, -122.95537],
      [49.25881, -122.9561],
      [49.25887, -122.9581],
      [49.25892, -122.9589],
      [49.25898, -122.95966],
      [49.25904, -122.96041],
      [49.25913, -122.9612],
      [49.25927, -122.96223],
      [49.25944, -122.96318],
      SPERLING_LOUGHEED_NE,
      [49.25989, -122.96525],
      [49.26011, -122.96608],
      [49.2603, -122.96679],
      [49.26059, -122.9677],
      [49.26078, -122.96822],
      [49.26199, -122.97161],
      [49.26292, -122.97424],
      [49.26428, -122.97807],
      [49.2645, -122.97881],
      [49.26466, -122.97938],
      [49.26477, -122.97986],
      [49.2649, -122.98053],
      [49.265, -122.98122],
      [49.26509, -122.98227],
      [49.26511, -122.98277],
      [49.26513, -122.98697],
      [49.26513, -122.98964],
      [49.26513, -122.99066],
      [49.26515, -122.99126],
      [49.26521, -122.99181],
      [49.26529, -122.99232],
      [49.26541, -122.99283],
      [49.26557, -122.9935],
      [49.26596, -122.99503],
      [49.2661, -122.99567],
      [49.26618, -122.99603],
      [49.26634, -122.99688],
      [49.26638, -122.99718],
      [49.26641, -122.99762],
      [49.26643, -122.99801],
      BEYOND_BETA_SHOULDER_END,
    ],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "wb: beta-ish to willingdon",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.lougheedWb.id],
    positions: [
      BEYOND_BETA_SHOULDER_END,
      [49.26649, -122.99889],
      [49.26651, -123.0004],
      [49.26651, -123.0006],
      [49.26657, -123.00095],
      [49.26659, -123.0015],
      [49.26655, -123.0016],
      WILLINGDON_LOUGHEED_NE,
    ],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "wb: willingdon to near-boundary",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.lougheedWb.id],
    positions: [
      WILLINGDON_LOUGHEED_NE,
      [49.26655, -123.00335],
      [49.26658, -123.00463],
      [49.26663, -123.00602],
      [49.26664, -123.00707],
      [49.26661, -123.00784],
      [49.26656, -123.0088],
      [49.26645, -123.01061],
      [49.26637, -123.01189],
      GILMORE_LOUGHEED_NE,
      GILMORE_LOUGHEED_NW,
      [49.26613, -123.01651],
      [49.26594, -123.0194],
      WB_BEFORE_BOUNDARY,
    ],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "wb: just before boundary",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.lougheedWb.id],
    videoIdsEndAtEnd: [VIDEOS.lougheedWb.id],
    positions: [
      WB_BEFORE_BOUNDARY,
      [49.26594, -123.02059],
      [49.26587, -123.02213],
      [49.26585, -123.02244],
      [49.26582, -123.02279],
      [49.26574, -123.02338],
    ],
  },
];
