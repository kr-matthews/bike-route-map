import {
  GARDEN_SPIRIT_TRAIL,
  MACKAY_1ST_NW,
  MACKAY_1ST_SW,
  THIRD_2ND_N,
  THIRD_2ND_NW,
  THIRD_2ND_S,
  WHONOAK_WELCH_NW,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const WHONOAK_WELCH_SW = [49.31766, -123.12133];
const GARDEN_WELCH_SW = [49.31759, -123.11844];
const GARDEN_WELCH_NE = [49.31767, -123.11833];
const BEWICKE_2ND_NE = [49.31911, -123.09145];

export const FIRST_2ND = [
  {
    description: "spirit <-> 1st/2nd @ garden",
    type: "mixed",
    positions: [
      GARDEN_WELCH_SW,
      GARDEN_WELCH_NE,
      [49.31776, -123.11831],
      [49.31786, -123.11826],
      GARDEN_SPIRIT_TRAIL,
    ],
  },

  // eb
  {
    routeNames: [ROUTES.first2nd.name],
    description: "crossing welch at west end",
    type: "mixed",
    oneWay: "recommended",
    hideArrows: true,
    positions: [WHONOAK_WELCH_NW, WHONOAK_WELCH_SW],
  },
  {
    routeNames: [ROUTES.first2nd.name],
    description: "eb painted",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.first2ndEb.id],
    videoIdsStartAtStart: [VIDEOS.first2ndEb.id],
    positions: [
      WHONOAK_WELCH_SW,
      [49.31766, -123.12111],
      [49.31765, -123.12056],
      [49.31767, -123.12031],
      [49.31766, -123.11933],
      [49.31764, -123.11905],
      [49.31763, -123.11854],
      [49.31761, -123.11848],
      GARDEN_WELCH_SW,
      [49.31755, -123.11842],
      [49.3168, -123.11844],
      [49.31671, -123.11844],
      [49.31666, -123.11842],
      [49.31664, -123.11836],
      [49.31663, -123.11817],
      [49.31663, -123.11762],
      [49.31665, -123.11732],
      [49.31664, -123.11648],
      [49.31661, -123.11601],
      [49.31659, -123.11404],
      [49.31658, -123.11339],
      [49.31655, -123.112],
      [49.31655, -123.11049],
      [49.31658, -123.11008],
      [49.31662, -123.10975],
      [49.31691, -123.10823],
      [49.31702, -123.10765],
      [49.31738, -123.10591],
      [49.31755, -123.10518],
      [49.31775, -123.10423],
      [49.31782, -123.10382],
      [49.31792, -123.10335],
      [49.318, -123.10288],
      [49.31804, -123.10257],
      MACKAY_1ST_SW,
    ],
  },
  {
    routeNames: [ROUTES.first2nd.name],
    description: "eb protected",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.first2ndEb.id],
    positions: [
      MACKAY_1ST_SW,
      [49.31805, -123.1022],
      [49.31801, -123.09882],
      [49.31797, -123.09487],
      [49.31796, -123.09415],
      [49.31798, -123.09394],
      [49.31803, -123.09375],
      [49.3181, -123.0936],
      [49.3182, -123.09346],
      [49.31875, -123.09286],
      [49.31883, -123.09274],
      [49.3189, -123.09262],
      [49.31895, -123.09248],
      [49.31898, -123.09232],
      [49.31899, -123.0922],
      [49.31899, -123.09171],
      [49.31899, -123.09148],
      [49.31899, -123.09034],
      [49.31895, -123.09026],
      [49.31895, -123.09012],
      THIRD_2ND_S,
    ],
  },

  // wb
  {
    description: "2nd crossing 3rd",
    type: "mixed",
    oneWay: "recommended",
    videoIds: [VIDEOS.first2ndWb.id],
    positions: [THIRD_2ND_N, THIRD_2ND_NW],
  },
  {
    routeNames: [ROUTES.first2nd.name],
    description: "wb: 3rd to bewicke",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.first2ndWb.id],
    positions: [THIRD_2ND_NW, [49.3191, -123.09018], BEWICKE_2ND_NE],
  },
  {
    routeNames: [ROUTES.first2nd.name],
    description: "wb protected",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.first2ndWb.id],
    positions: [
      BEWICKE_2ND_NE,
      [49.31912, -123.09216],
      [49.31912, -123.09234],
      [49.31911, -123.09245],
      [49.31908, -123.09259],
      [49.31903, -123.09275],
      [49.31897, -123.09286],
      [49.31891, -123.09295],
      [49.31837, -123.09352],
      [49.3183, -123.09361],
      [49.31824, -123.0937],
      [49.31819, -123.0938],
      [49.31815, -123.09392],
      [49.31812, -123.09406],
      [49.31812, -123.09489],
      [49.31815, -123.09881],
      [49.31819, -123.10221],
      MACKAY_1ST_NW,
    ],
  },
  {
    routeNames: [ROUTES.first2nd.name],
    description: "wb painted",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.first2ndWb.id],
    videoIdsEndAtEnd: [VIDEOS.first2ndWb.id],
    positions: [
      MACKAY_1ST_NW,
      [49.31817, -123.10262],
      [49.31811, -123.1029],
      [49.31807, -123.1031],
      [49.31801, -123.1033],
      [49.31794, -123.1036],
      [49.31789, -123.10398],
      [49.31785, -123.10422],
      [49.31751, -123.10592],
      [49.31744, -123.10624],
      [49.31715, -123.10768],
      [49.31687, -123.10904],
      [49.31674, -123.10965],
      [49.3167, -123.10992],
      [49.31667, -123.11019],
      [49.31665, -123.11053],
      [49.31665, -123.11192],
      [49.31668, -123.11428],
      [49.31674, -123.11808],
      [49.31675, -123.11819],
      [49.31678, -123.11826],
      [49.31683, -123.1183],
      [49.3169, -123.11832],
      [49.3176, -123.1183],
      [49.31764, -123.11831],
      GARDEN_WELCH_NE,
      [49.31771, -123.11839],
      [49.31773, -123.11848],
      [49.31773, -123.11872],
      [49.31775, -123.12106],
      WHONOAK_WELCH_NW,
    ],
  },
];
