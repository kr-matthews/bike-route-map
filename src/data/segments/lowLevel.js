import {
  LOW_LEVEL_COTTON_N,
  LOW_LEVEL_COTTON_S,
  NEPTUNE_LOW_LEVEL,
  ST_ANDREWS_ESPLANADE_NE,
  ST_ANDREWS_ESPLANADE_SE,
} from "../intersections";
import { ROUTES } from "../routes";

export const LOW_LEVEL = [
  // eb
  {
    routeNames: [ROUTES.lowLevel.name],
    description: "eb",
    type: "shoulder",
    oneWay: "required",
    positions: [
      ST_ANDREWS_ESPLANADE_SE,
      [49.30794, -123.07283],
      [49.30766, -123.0723],
      [49.30737, -123.07174],
      [49.30707, -123.07113],
      [49.30685, -123.07061],
      [49.30642, -123.0696],
      [49.3062, -123.06904],
      [49.30601, -123.06854],
      [49.30591, -123.06826],
      [49.30582, -123.06794],
      [49.30575, -123.06759],
      [49.3057, -123.06722],
      [49.30568, -123.06684],
      [49.30569, -123.06645],
      [49.30572, -123.06607],
      [49.30616, -123.06292],
      [49.30671, -123.05916],
      [49.3069, -123.05811],
      [49.30733, -123.05589],
      [49.30742, -123.05542],
      [49.3075, -123.05499],
      [49.30789, -123.05296],
      [49.30802, -123.0523],
      [49.30802, -123.0521],
      [49.30802, -123.05199],
      [49.30805, -123.05185],
      [49.30809, -123.05158],
      [49.30811, -123.05133],
      [49.30816, -123.05076],
      [49.3082, -123.05016],
      [49.30822, -123.04974],
      [49.30823, -123.04931],
      [49.30822, -123.0489],
      [49.30821, -123.04855],
      [49.30819, -123.0479],
      [49.30818, -123.04756],
      [49.30818, -123.04731],
      [49.30819, -123.04706],
      LOW_LEVEL_COTTON_S,
    ],
  },

  // wb
  {
    routeNames: [ROUTES.lowLevel.name],
    description: "wb",
    type: "shoulder",
    oneWay: "required",
    positions: [
      LOW_LEVEL_COTTON_N,
      [49.30838, -123.04677],
      [49.30834, -123.04707],
      [49.30832, -123.04738],
      [49.30831, -123.0476],
      [49.30833, -123.04861],
      [49.30835, -123.04941],
      [49.30835, -123.04995],
      [49.30833, -123.05035],
      [49.30829, -123.05089],
      [49.30822, -123.05164],
      [49.30817, -123.05205],
      [49.30807, -123.05263],
      NEPTUNE_LOW_LEVEL,
      [49.30793, -123.05335],
      [49.30769, -123.0545],
      [49.30737, -123.05613],
      [49.30709, -123.05754],
      [49.30687, -123.05879],
      [49.30671, -123.05972],
      [49.30652, -123.06102],
      [49.30622, -123.06308],
      [49.30586, -123.06568],
      [49.30579, -123.06634],
      [49.30578, -123.06668],
      [49.30579, -123.06706],
      [49.30583, -123.06748],
      [49.30591, -123.06789],
      [49.30601, -123.06826],
      [49.30672, -123.07008],
      [49.307, -123.07068],
      [49.30723, -123.07108],
      [49.30739, -123.0714],
      [49.30765, -123.07185],
      [49.30773, -123.07201],
      [49.30778, -123.07207],
      [49.30782, -123.07216],
      [49.30784, -123.07228],
      [49.30811, -123.0728],
      ST_ANDREWS_ESPLANADE_NE,
    ],
  },
];
