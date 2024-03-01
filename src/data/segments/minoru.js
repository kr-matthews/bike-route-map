import {
  MINORU_GRANVILLE_NE,
  MINORU_GRANVILLE_NW,
  NO_3_ACKROYD_W,
} from "../intersections";
import { ROUTES } from "../routes";

const MINORU_ACKROYD_SE = [49.1719, -123.14008];
const MINORU_ACKROYD_E = [49.17202, -123.1401];
const NB_POST_ACKROYD = [49.17269, -123.14012];
const MINORU_LANSDOWNE_NW = [49.17398, -123.14028];
const SB_PRE_ELMBRIDGE = [49.17286, -123.1403];
const MINORU_ELMBRIDGE_SW = [49.17192, -123.14035];

export const MINORU = [
  {
    description: "ackroyd",
    type: "shared",
    positions: [
      // [49.17209, -123.13647], left turn
      MINORU_ACKROYD_E,
      NO_3_ACKROYD_W,
      // [49.17197, -123.14035], // left turn
    ],
  },
  {
    description: "lansdowne path",
    type: "mixed",
    positions: [
      [49.17396, -123.14525],
      [49.17396, -123.14509],
      [49.17394, -123.145],
      [49.17395, -123.14488],
      [49.17396, -123.14426],
      [49.17397, -123.14396],
      [49.17396, -123.14383],
      [49.17396, -123.14373],
      [49.17396, -123.14258],
      [49.17396, -123.14248],
      [49.17397, -123.14236],
      [49.17393, -123.14211],
      [49.17394, -123.14041],
      MINORU_LANSDOWNE_NW,
    ],
  },
  {
    description: "lansdowne lane",
    type: "dedicated",
    oneWay: "required",
    positions: [
      [49.17392, -123.1424],
      [49.17391, -123.14392],
    ],
  },

  {
    routeNames: [ROUTES.minoru.name],
    description: "nb: granville to ackroyd",
    type: "painted",
    oneWay: "required",
    positions: [
      MINORU_GRANVILLE_NE,
      [49.16397, -123.14008],
      [49.16422, -123.1401],
      [49.16433, -123.14014],
      [49.16449, -123.14023],
      [49.16469, -123.14039],
      [49.165, -123.14069],
      [49.16528, -123.14089],
      [49.16549, -123.14097],
      [49.1657, -123.14103],
      [49.16584, -123.14103],
      [49.16606, -123.14101],
      [49.16623, -123.14096],
      [49.16652, -123.14082],
      [49.16675, -123.14063],
      [49.16705, -123.14034],
      [49.16728, -123.14016],
      [49.16748, -123.14008],
      [49.16772, -123.14005],
      [49.16875, -123.14009],
      [49.17013, -123.14008],
      [49.17029, -123.14008],
      [49.1716, -123.14007],
      MINORU_ACKROYD_SE,
    ],
  },
  {
    routeNames: [ROUTES.minoru.name],
    description: "nb: no lane",
    type: "shared",
    oneWay: "required",
    positions: [
      MINORU_ACKROYD_SE,
      MINORU_ACKROYD_E,
      [49.17212, -123.14012],
      NB_POST_ACKROYD,
    ],
  },
  {
    routeNames: [ROUTES.minoru.name],
    description: "nb: beyond ackroyd to alderbridge",
    type: "painted",
    oneWay: "required",
    positions: [
      NB_POST_ACKROYD,
      [49.17397, -123.1401],
      [49.17566, -123.14008],
      [49.17585, -123.14011],
      [49.17599, -123.14016],
      [49.17611, -123.14023],
      [49.17623, -123.14034],
    ],
  },

  {
    routeNames: [ROUTES.minoru.name],
    description: "sb: alderbridge to before elmbridge",
    type: "painted",
    oneWay: "required",
    positions: [
      [49.17618, -123.14052],
      [49.17609, -123.14044],
      [49.17597, -123.14036],
      [49.17591, -123.14032],
      [49.17577, -123.14028],
      [49.17564, -123.14027],
      MINORU_LANSDOWNE_NW,
      SB_PRE_ELMBRIDGE,
    ],
  },
  {
    routeNames: [ROUTES.minoru.name],
    description: "sb: lane",
    type: "shared",
    oneWay: "required",
    positions: [SB_PRE_ELMBRIDGE, [49.17213, -123.14033], MINORU_ELMBRIDGE_SW],
  },
  {
    routeNames: [ROUTES.minoru.name],
    description: "sb: elmbridge to granville",
    type: "painted",
    oneWay: "required",
    positions: [
      MINORU_ELMBRIDGE_SW,
      [49.17021, -123.14036],
      [49.16875, -123.14036],
      [49.16767, -123.14038],
      [49.16756, -123.1404],
      [49.16741, -123.14044],
      [49.16729, -123.14049],
      [49.16712, -123.14065],
      [49.16684, -123.14088],
      [49.16661, -123.14106],
      [49.16636, -123.14119],
      [49.16615, -123.14126],
      [49.16588, -123.1413],
      [49.16571, -123.14128],
      [49.16551, -123.14124],
      [49.16538, -123.14119],
      [49.16523, -123.14112],
      [49.165, -123.141],
      [49.16483, -123.14084],
      [49.16457, -123.14057],
      [49.16441, -123.14043],
      [49.16427, -123.14037],
      [49.16414, -123.14036],
      [49.16363, -123.14037],
      [49.16344, -123.14037],
      [49.16331, -123.14034],
      MINORU_GRANVILLE_NW,
    ],
  },
];
