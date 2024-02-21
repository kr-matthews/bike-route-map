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
const ROSS_PARKING_LOT_W = [49.23091, -123.08322];
const WINDSOR_41ST_N = [49.23284, -123.08482];
const WINDSOR_33RD_W_N = [49.24031, -123.08459];
const WINDSOR_33RD_E_NN = [49.24056, -123.0841];

export const WINDSOR = [
  {
    description: "missing circle bit",
    type: "quiet",
    oneWay: "required",
    hideArrows: true,
    positions: [LOOP_NE, [49.23125, -123.0851], LOOP_NW],
  },
  {
    routeNames: [ROUTES.windsor.name],
    type: "mixed",
    description: "through park to 43rd",
    videoIds: [VIDEOS.windsorNb.id],
    positions: [
      LOOP_S,
      [49.23093, -123.0849],
      [49.23092, -123.08408],
      ROSS_PARKING_LOT_W,
    ],
  },
  {
    routeNames: [ROUTES.windsor.name],
    type: "quiet",
    description: "43rd",
    videoIds: [VIDEOS.windsorNb.id],
    videoIdsStartAtEnd: [VIDEOS.windsorNb.id],
    positions: [
      ROSS_PARKING_LOT_W,
      [49.23089, -123.08263],
      [49.23087, -123.08124],
      INVERNESS_43RD,
    ],
  },
  {
    routeNames: [ROUTES.windsor.name],
    description: "park nb",
    type: "quiet",
    oneWay: "required",
    videoIds: [VIDEOS.windsorNb.id],
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
    routeNames: [ROUTES.windsor.name],
    description: "park sb",
    type: "quiet",
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
    routeNames: [ROUTES.windsor.name],
    description: "park to 33rd",
    type: "quiet",
    videoIds: [VIDEOS.windsorNb.id],
    positions: [
      WINDSOR_41ST_N,
      [49.23375, -123.08478],
      [49.23471, -123.08476],
      [49.23562, -123.08475],
      WINDSOR_37TH,
      [49.23823, -123.08465],
      WINDSOR_33RD_W_N,
    ],
  },
  {
    routeNames: [ROUTES.windsor.name],
    description: "33rd",
    type: "dedicated",
    videoIds: [VIDEOS.windsorNb.id],
    positions: [
      WINDSOR_33RD_W_N,
      [49.24031, -123.08421],
      [49.24053, -123.08417],
      WINDSOR_33RD_E_NN,
    ],
  },
  {
    routeNames: [ROUTES.windsor.name],
    description: "33rd to hillcrest",
    type: "quiet",
    videoIds: [VIDEOS.windsorNb.id],
    positions: [WINDSOR_33RD_E_NN, [49.24141, -123.08406], WINDSOR_31ST],
  },
  {
    routeNames: [ROUTES.windsor.name, ROUTES.hillcrest.name],
    description: "hillcrest overlap",
    type: "quiet",
    videoIds: [
      VIDEOS.windsorNb.id,
      VIDEOS.hillcrestEb.id,
      VIDEOS.hillcrestWb.id,
    ],
    positions: [WINDSOR_31ST, WINDSOR_29TH],
  },
  {
    routeNames: [ROUTES.windsor.name],
    description: "hillcrest to 10th",
    type: "quiet",
    videoIds: [VIDEOS.windsorNb.id],
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
    routeNames: [ROUTES.windsor.name],
    description: "10th to cvg",
    type: "quiet",
    videoIds: [VIDEOS.windsorNb.id],
    videoIdsEndAtEnd: [VIDEOS.windsorNb.id],
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
