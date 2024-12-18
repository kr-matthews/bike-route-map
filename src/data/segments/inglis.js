import {
  RUSS_BAKER_INGLIS_NW,
  RUSS_BAKER_INGLIS_SPLIT,
  RUSS_BAKER_INGLIS_SW,
} from "../intersections";
import { ROUTES } from "../routes";

const COWLEY_INGLIS_N = [49.17767, -123.1669];
const SHOULDER_RESTART = [49.17763, -123.16921];
const AGAR_INGLIS_SE = [49.17883, -123.17376];

export const INGLIS = [
  {
    description: "nb bit",
    type: "shoulder",
    oneWay: "required",
    positions: [AGAR_INGLIS_SE, [49.17901, -123.17375], [49.17925, -123.17373]],
  },

  {
    routeNames: [ROUTES.inglis.name],
    description: "eb",
    type: "shoulder",
    oneWay: "required",
    positions: [
      [49.17961, -123.18196],
      [49.17946, -123.1815],
      [49.17938, -123.18121],
      [49.17932, -123.1809],
      [49.17928, -123.18054],
      [49.17925, -123.18016],
      [49.17923, -123.17992],
      [49.17921, -123.17973],
      [49.17917, -123.17955],
      [49.17909, -123.17931],
      [49.17896, -123.17895],
      [49.17887, -123.17866],
      [49.17883, -123.17846],
      [49.17881, -123.17824],
      [49.17882, -123.17802],
      [49.17884, -123.17776],
      [49.17891, -123.17699],
      [49.17894, -123.17651],
      [49.17895, -123.17625],
      [49.17901, -123.17547],
      [49.17902, -123.17523],
      [49.17902, -123.17505],
      [49.179, -123.17485],
      [49.17893, -123.17443],
      [49.17892, -123.17422],
      [49.1789, -123.17401],
      [49.17888, -123.17395],
      [49.17884, -123.1739],
      [49.17873, -123.17389],
      [49.1786, -123.17386],
      [49.17847, -123.17379],
      [49.17832, -123.17364],
      [49.17822, -123.17352],
      [49.17814, -123.17337],
      [49.17807, -123.17319],
      [49.178, -123.1729],
      [49.17777, -123.17142],
      [49.17767, -123.1707],
      [49.17761, -123.17023],
      [49.17758, -123.16985],
      [49.17755, -123.16941],
      [49.17754, -123.16873],
      [49.17755, -123.16772],
      [49.17759, -123.16665],
      [49.17765, -123.16551],
      [49.17774, -123.16318],
      [49.17782, -123.16115],
      [49.17789, -123.15933],
      [49.17797, -123.15747],
      [49.17799, -123.15701],
      [49.17801, -123.1568],
      [49.17805, -123.15658],
      [49.17811, -123.15637],
      [49.1782, -123.15614],
      [49.17832, -123.1559],
      [49.17845, -123.15573],
      [49.17863, -123.15553],
      [49.17889, -123.15534],
      [49.17941, -123.15499],
      [49.17967, -123.15481],
      [49.17978, -123.15471],
      [49.17987, -123.15457],
      [49.17993, -123.15446],
      [49.17995, -123.15435],
      [49.17994, -123.15423],
      [49.17991, -123.15411],
      [49.17986, -123.15401],
      [49.17982, -123.15396],
      RUSS_BAKER_INGLIS_SW,
      [49.1797, -123.15392],
      [49.17964, -123.15395],
    ],
  },

  {
    description: "wb join from russ baker",
    type: "shoulder",
    oneWay: "required",
    positions: [
      RUSS_BAKER_INGLIS_SPLIT,
      [49.1809, -123.15242],
      [49.18077, -123.1526],
      [49.1802, -123.15333],
      [49.18014, -123.15341],
      [49.18011, -123.15347],
      [49.18009, -123.15354],
      RUSS_BAKER_INGLIS_NW,
    ],
  },
  {
    routeNames: [ROUTES.inglis.name],
    description: "wb 1",
    type: "shoulder",
    oneWay: "required",
    positions: [
      RUSS_BAKER_INGLIS_NW,
      [49.18009, -123.15371],
      [49.18011, -123.15384],
      [49.18019, -123.15412],
      [49.18021, -123.15431],
      [49.18021, -123.15443],
      [49.18018, -123.15458],
      [49.18013, -123.15472],
      [49.18005, -123.15484],
      [49.17991, -123.15497],
      [49.17966, -123.15512],
      [49.17936, -123.15531],
      [49.17903, -123.15551],
      [49.17862, -123.15576],
      [49.1785, -123.15587],
      [49.17839, -123.15602],
      [49.17829, -123.15621],
      [49.1782, -123.15646],
      [49.17813, -123.15671],
      [49.17809, -123.15701],
      [49.17803, -123.15829],
      [49.17791, -123.16132],
      [49.17773, -123.16543],
      [49.17771, -123.16599],
      [49.17771, -123.16616],
      [49.17769, -123.16652],
      COWLEY_INGLIS_N,
    ],
  },
  {
    routeNames: [ROUTES.inglis.name],
    description: "wb 2 shared",
    type: "shared",
    oneWay: "required",
    positions: [
      COWLEY_INGLIS_N,
      [49.17763, -123.1671],
      [49.17761, -123.16781],
      [49.1776, -123.16819],
      [49.1776, -123.16885],
      SHOULDER_RESTART,
    ],
  },
  {
    routeNames: [ROUTES.inglis.name],
    description: "wb 3",
    type: "shoulder",
    oneWay: "required",
    positions: [
      SHOULDER_RESTART,
      [49.17764, -123.1695],
      [49.17768, -123.17001],
      [49.17771, -123.17029],
      [49.17775, -123.1707],
      [49.17796, -123.17213],
      [49.17805, -123.17269],
      [49.17809, -123.17292],
      [49.17814, -123.17308],
      [49.17819, -123.17322],
      [49.17826, -123.17337],
      [49.17834, -123.17349],
      [49.17843, -123.17359],
      [49.17853, -123.17367],
      [49.17864, -123.17373],
      [49.17875, -123.17376],
      AGAR_INGLIS_SE,
      [49.17894, -123.17381],
      [49.17898, -123.17401],
      [49.17899, -123.1742],
      [49.179, -123.17437],
      [49.17907, -123.17485],
      [49.17909, -123.17503],
      [49.1791, -123.17526],
      [49.17909, -123.17544],
      [49.17902, -123.17635],
      [49.17897, -123.17713],
      [49.1789, -123.17791],
      [49.17889, -123.17807],
      [49.17889, -123.17824],
      [49.17892, -123.17844],
      [49.17896, -123.17866],
      [49.17911, -123.17912],
      [49.17921, -123.17941],
      [49.17926, -123.17963],
      [49.17929, -123.17983],
      [49.17932, -123.18006],
      [49.17934, -123.18028],
      [49.17938, -123.1808],
      [49.17947, -123.18129],
      [49.17954, -123.18147],
    ],
  },
];
