import {
  GLEN_10TH,
  GLEN_6TH_N,
  GLEN_6TH_S,
  GLEN_7TH,
  INVERNESS_43RD,
  WINDSOR_10TH,
  WINDSOR_29TH,
  WINDSOR_31ST,
  WINDSOR_37TH,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const LOOP_NE = [49.23123, -123.08501];
const LOOP_NW = [49.23123, -123.08521];
const LOOP_S = [49.23099, -123.08505];
const WINDSOR_41ST_N = [49.23284, -123.08482];

export const WINDSOR = [
  {
    description: "missing circle bit",
    oneWay: "required",
    hideArrows: true,
    positions: [LOOP_NE, [49.23125, -123.0851], LOOP_NW],
  },
  {
    routes: [ROUTES.windsor.name],
    description: "43rd",
    positions: [
      INVERNESS_43RD,
      [49.23087, -123.08124],
      [49.23089, -123.08263],
      [49.23091, -123.08322],
      [49.23092, -123.08408],
      [49.23093, -123.0849],
      LOOP_S,
    ],
  },
  {
    routes: [ROUTES.windsor.name],
    description: "park nb",
    oneWay: "required",
    positions: [
      LOOP_S,
      [49.23104, -123.08494],
      [49.23112, -123.08491],
      [49.23119, -123.08494],
      LOOP_NE,
      [49.23132, -123.085],
      [49.23275, -123.08497],
      WINDSOR_41ST_N,
    ],
  },
  {
    routes: [ROUTES.windsor.name],
    description: "park sb",
    oneWay: "required",
    positions: [
      WINDSOR_41ST_N,
      [49.23275, -123.08515],
      [49.23131, -123.08519],
      LOOP_NW,
      [49.23118, -123.08528],
      [49.23112, -123.08532],
      [49.23106, -123.08529],
      [49.23101, -123.08522],
      [49.231, -123.08514],
      LOOP_S,
    ],
  },
  {
    routes: [ROUTES.windsor.name],
    description: "park to hillcrest",
    positions: [
      WINDSOR_41ST_N,
      [49.23375, -123.08478],
      [49.23471, -123.08476],
      [49.23562, -123.08475],
      WINDSOR_37TH,
      [49.23823, -123.08465],
      [49.24031, -123.08459],
      [49.24031, -123.08417],
      [49.24052, -123.08417],
      [49.24056, -123.0841],
      [49.24141, -123.08406],
      WINDSOR_31ST,
    ],
  },
  {
    routes: [ROUTES.windsor.name, ROUTES.hillcrest.name],
    description: "hillcrest overlap",
    videos: [VIDEOS.hillcrestEb, VIDEOS.hillcrestWb],
    positions: [WINDSOR_31ST, WINDSOR_29TH],
  },
  {
    routes: [ROUTES.windsor.name],
    description: "hillcrest to 10th",
    positions: [
      WINDSOR_29TH,
      [49.24545, -123.08395],
      [49.24652, -123.08394],
      [49.24749, -123.08391],
      [49.24856, -123.08389],
      [49.25003, -123.08386],
      [49.25182, -123.08379],
      [49.25362, -123.08372],
      [49.25541, -123.08365],
      [49.25689, -123.0836],
      [49.25693, -123.08343],
      [49.25786, -123.08341],
      [49.25966, -123.08337],
      WINDSOR_10TH,
    ],
  },
  {
    routes: [ROUTES.windsor.name],
    description: "10th to cvg",
    positions: [
      GLEN_10TH,
      [49.26243, -123.08137],
      [49.26337, -123.08135],
      GLEN_7TH,
      GLEN_6TH_S,
      GLEN_6TH_N,
    ],
  },
];
