import { FELL_LARSON_NE, FELL_LARSON_SE, JONES_23RD } from "../intersections";
import { ROUTES } from "../routes";

const EB_BARRIER_START = [49.32323, -123.09348];
const EB_BARRIER_END = [49.32371, -123.0921];
const WESTVIEW_LARSON_SW = [49.32511, -123.08956];
const E_OF_WESTVIEW = [49.32573, -123.08853];
const LARSON_LARSON = [49.32925, -123.0844];
const CR_LANE_END_START = [49.33018, -123.08234];

const WB_BEFORE_BEWICKE = [49.3248, -123.09038];
const BEWICKE_LARSON_NE = [49.32445, -123.09101];

export const LARSON = [
  {
    routeNames: [ROUTES.larson.name],
    description: "eb from 16th",
    type: "painted",
    oneWay: "required",
    positions: [
      FELL_LARSON_SE,
      [49.32319, -123.09396],
      [49.32321, -123.0937],
      EB_BARRIER_START,
    ],
  },
  {
    routeNames: [ROUTES.larson.name],
    description: "eb protected",
    type: "dedicated",
    oneWay: "required",
    positions: [
      EB_BARRIER_START,
      [49.32325, -123.09337],
      [49.3233, -123.09313],
      [49.32335, -123.09295],
      [49.32343, -123.09271],
      [49.32354, -123.09242],
      EB_BARRIER_END,
    ],
  },
  {
    routeNames: [ROUTES.larson.name],
    description: "eb to westview",
    type: "painted",
    oneWay: "required",
    positions: [EB_BARRIER_END, [49.32423, -123.09116], WESTVIEW_LARSON_SW],
  },
  {
    routeNames: [ROUTES.larson.name],
    description: "eb e of westview",
    type: "shared",
    oneWay: "required",
    positions: [
      WESTVIEW_LARSON_SW,
      [49.32533, -123.08919],
      [49.32566, -123.08859],
      E_OF_WESTVIEW,
    ],
  },
  {
    routeNames: [ROUTES.larson.name],
    description: "westview to larson",
    type: "shared",
    positions: [
      E_OF_WESTVIEW,
      [49.32624, -123.08758],
      [49.3264, -123.08736],
      [49.32737, -123.08642],
      [49.32837, -123.08545],
      [49.32865, -123.08513],
      [49.32894, -123.08478],
      [49.32911, -123.08457],
      [49.32917, -123.0845],
      LARSON_LARSON,
    ],
  },
  {
    routeNames: [ROUTES.larson.name],
    description: "eb larson cr",
    type: "painted",
    oneWay: "required",
    positions: [
      LARSON_LARSON,
      [49.32931, -123.08425],
      [49.32944, -123.08407],
      [49.32964, -123.08374],
      [49.32976, -123.08348],
      [49.32987, -123.08322],
      [49.32998, -123.08291],
      [49.33011, -123.08247],
      CR_LANE_END_START,
    ],
  },
  {
    routeNames: [ROUTES.larson.name],
    description: "e end of cr",
    type: "shared",
    positions: [CR_LANE_END_START, [49.33026, -123.08205], JONES_23RD],
  },
  {
    routeNames: [ROUTES.larson.name],
    description: "wb larson cr",
    type: "painted",
    oneWay: "required",
    positions: [
      CR_LANE_END_START,
      [49.33019, -123.08252],
      [49.3301, -123.08282],
      [49.33, -123.08312],
      [49.32989, -123.0834],
      [49.32977, -123.08368],
      [49.32965, -123.08391],
      [49.3295, -123.08416],
      [49.32937, -123.08435],
      LARSON_LARSON,
    ],
  },
  {
    routeNames: [ROUTES.larson.name],
    description: "wb at westview",
    type: "painted",
    oneWay: "required",
    positions: [
      E_OF_WESTVIEW,
      [49.32571, -123.08869],
      [49.32523, -123.0896],
      WB_BEFORE_BEWICKE,
    ],
  },
  {
    routeNames: [ROUTES.larson.name],
    description: "wb near bewicke",
    type: "dedicated",
    oneWay: "required",
    positions: [
      WB_BEFORE_BEWICKE,
      [49.32477, -123.09048],
      [49.32473, -123.09055],
      [49.3247, -123.09057],
      BEWICKE_LARSON_NE,
    ],
  },
  {
    routeNames: [ROUTES.larson.name],
    description: "wb bewicke to ",
    type: "painted",
    oneWay: "required",
    positions: [
      BEWICKE_LARSON_NE,
      [49.32435, -123.09121],
      [49.32406, -123.09173],
      [49.32386, -123.0921],
      [49.32369, -123.0924],
      [49.32359, -123.09263],
      [49.32352, -123.09279],
      [49.32344, -123.09304],
      [49.32337, -123.09329],
      [49.32334, -123.09348],
      [49.32331, -123.0937],
      [49.3233, -123.09392],
      FELL_LARSON_NE,
    ],
  },
];
