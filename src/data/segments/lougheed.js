import {
  LEEDER_UNITED,
  SPERLING_WINSTON,
  UNITED_MARY_HILL_NW,
} from "../intersections";
import { ROUTES } from "../routes";

const BETA_LOUGHEED = [49.26613, -122.99753];
const DELTA_LOUGHEED = [49.26505, -122.99205];
const SPERLING_LOUGHEED_SE = [49.2595, -122.96446];
const EASTBOUND_ELEVATION_1_PRE = [49.23167, -122.8489];
const EASTBOUND_ELEVATION_1_START = [49.23143, -122.84848];
const EASTBOUND_ELEVATION_1_END = [49.2301, -122.84571];
const EASTBOUND_ELEVATION_1_POST = [49.22998, -122.84524];
const EASTBOUND_ELEVATION_2_PRE = [49.22931, -122.84005];
const EASTBOUND_ELEVATION_2_START = [49.2293, -122.83982];
const EASTBOUND_ELEVATION_2_END = [49.22856, -122.8329];

const WESTBOUND_ELEVATION_1_PRE = [49.22982, -122.83067];
const WESTBOUND_ELEVATION_1_START = [49.22984, -122.8322];
const WESTBOUND_ELEVATION_1_END = [49.23005, -122.83592];
const WESTBOUND_ELEVATION_1_POST = [49.23017, -122.83782];
const SPERLING_LOUGHEED_NE = [49.2597, -122.96443];

export const LOUGHEED = [
  // connections
  {
    // !! move to Lakes (if/when it's added)
    description: "sperling",
    positions: [
      SPERLING_WINSTON,
      [49.25827, -122.96436],
      [49.2584, -122.96439],
      [49.25879, -122.96447],
      [49.25889, -122.96444],
      [49.25922, -122.96445],
      [49.25932, -122.96435],
      [49.25941, -122.96446],
      SPERLING_LOUGHEED_SE,
      SPERLING_LOUGHEED_NE,
    ],
  },

  // eastbound
  {
    routeNames: [ROUTES.lougheed.name],
    description: "eb: boundary to beta",
    oneWay: "required",
    positions: [
      [49.26564, -123.02192],
      [49.26569, -123.02022],
      [49.26576, -123.01881],
      [49.26588, -123.01658],
      [49.26602, -123.0145], // Gilmore
      [49.26604, -123.01414],
      [49.26617, -123.01182],
      [49.26623, -123.0106],
      [49.26633, -123.00877],
      [49.26638, -123.00743],
      [49.26636, -123.00736],
      [49.26636, -123.00602],
      [49.26628, -123.00341], // Willingdon
      [49.2663, -123.00301],
      [49.26624, -123.00041],
      [49.2662, -122.99855],
      [49.26616, -122.99764],
      BETA_LOUGHEED,
    ],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "eb: beta to delta",
    oneWay: "recommended",
    positions: [
      BETA_LOUGHEED,
      [49.26604, -122.99693],
      [49.26597, -122.99639],
      [49.26585, -122.99567],
      [49.26563, -122.99496],
      [49.26524, -122.9935],
      [49.26518, -122.99302],
      [49.26509, -122.9925],
      DELTA_LOUGHEED,
    ],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "eb: delta to elevation",
    oneWay: "required",
    positions: [
      DELTA_LOUGHEED,
      [49.26499, -122.99148],
      [49.26498, -122.99083],
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
      [49.25243, -122.91352],
      [49.2523, -122.91275],
      [49.25226, -122.91246], // Gaglardi
      [49.25217, -122.91204],
      [49.25199, -122.91085],
      [49.25194, -122.91008],
      [49.25178, -122.90889],
      [49.25138, -122.90613],
      [49.25112, -122.90438],
      [49.25099, -122.90377],
      [49.25085, -122.90316],
      [49.2507, -122.9025],
      [49.25054, -122.90198],
      [49.25035, -122.90141],
      [49.25008, -122.90075],
      [49.24971, -122.90001],
      [49.24931, -122.89924],
      [49.24856, -122.8978],
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
      [49.23635, -122.87087],
      [49.23587, -122.86868],
      [49.23551, -122.86702],
      [49.23502, -122.86483],
      [49.23446, -122.8622],
      [49.23435, -122.8617],
      [49.23432, -122.86156], // King Edward
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
    oneWay: "required",
    elevation: 0.5,
    positions: [EASTBOUND_ELEVATION_1_PRE, EASTBOUND_ELEVATION_1_START],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "eb: elevation 1b",
    oneWay: "required",
    elevation: 1,
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
    oneWay: "required",
    elevation: 0.5,
    positions: [EASTBOUND_ELEVATION_1_END, EASTBOUND_ELEVATION_1_POST],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "eb: between elevations",
    oneWay: "required",
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
    oneWay: "required",
    elevation: 0.5,
    positions: [EASTBOUND_ELEVATION_2_PRE, EASTBOUND_ELEVATION_2_START],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "eb: elevation 2b",
    oneWay: "required",
    elevation: 1,
    positions: [
      EASTBOUND_ELEVATION_2_START,
      [49.22915, -122.83823],
      [49.22915, -122.83816],
      [49.22917, -122.83813],
      [49.22939, -122.83789],
      [49.22916, -122.83583],
      [49.22904, -122.8349],
      [49.22888, -122.83417],
      EASTBOUND_ELEVATION_2_END,
    ],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "eb: to leeder exit",
    oneWay: "required",
    elevation: 0.5,
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
    description: "wb: mary hill to elevation",
    oneWay: "required",
    positions: [
      [49.22829, -122.81952],
      [49.22833, -122.81971],
      [49.22843, -122.81994],
      [49.22849, -122.82044],
      [49.22847, -122.82188],
      [49.22845, -122.82287],
      [49.22844, -122.82389],
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
    oneWay: "required",
    elevation: 0.5,
    positions: [WESTBOUND_ELEVATION_1_PRE, WESTBOUND_ELEVATION_1_START],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "wb: elevation",
    oneWay: "required",
    elevation: 1,
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
    oneWay: "required",
    elevation: 0.5,
    positions: [WESTBOUND_ELEVATION_1_END, WESTBOUND_ELEVATION_1_POST],
  },
  {
    routeNames: [ROUTES.lougheed.name],
    description: "wb: elevation to boundary",
    oneWay: "required",
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
      [49.23458, -122.86165], // King Edward
      [49.23518, -122.8646],
      [49.23594, -122.86795],
      [49.23621, -122.86918],
      [49.23674, -122.87171],
      [49.23702, -122.87312],
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
      [49.2487, -122.89753],
      [49.24877, -122.89759], // Austin
      [49.24942, -122.89887],
      [49.24987, -122.89974],
      [49.25027, -122.90056],
      [49.25057, -122.90128],
      [49.25078, -122.90191],
      [49.25099, -122.9026],
      [49.25113, -122.90312],
      [49.25136, -122.90431],
      [49.2515, -122.90498],
      [49.25169, -122.90674],
      [49.25175, -122.90724],
      [49.25181, -122.90764],
      [49.25199, -122.90903],
      [49.2522, -122.91042],
      [49.25251, -122.91237],
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
      [49.26645, -122.99871],
      [49.26649, -122.99889],
      [49.26651, -123.0004],
      [49.26651, -123.0006],
      [49.26657, -123.00095],
      [49.26659, -123.0015],
      [49.26655, -123.0016],
      [49.26657, -123.00302],
      [49.26655, -123.00335],
      [49.26658, -123.00463],
      [49.26663, -123.00602],
      [49.26664, -123.00707],
      [49.26661, -123.00784],
      [49.26656, -123.0088],
      [49.26645, -123.01061],
      [49.26637, -123.01189],
      [49.26625, -123.01423],
      [49.26624, -123.01439],
      [49.26613, -123.01651],
      [49.26594, -123.0194],
      [49.26597, -123.0195],
      [49.26594, -123.02059],
      [49.26587, -123.02213],
      [49.26585, -123.02244],
      [49.26582, -123.02279],
      UNITED_MARY_HILL_NW,
    ],
  },
];
