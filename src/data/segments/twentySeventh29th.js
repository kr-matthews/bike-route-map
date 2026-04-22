import {
  JONES_27TH,
  LYNN_VALLEY_29TH_N,
  LYNN_VALLEY_29TH_W,
  LYNN_VALLEY_CENTER_E,
  LYNN_VALLEY_CENTER_S,
} from "../intersections";
import { ROUTES } from "../routes";

const S_OF_TEMPE_29TH = [49.33542, -123.05728];
const TEMPE_29TH_SE = [49.33552, -123.05699];
const TEMPE_29TH_S = [49.33552, -123.05726];
const CONNAUGHT_29TH_SW = [49.33555, -123.05654];
const WB_MUP_START_AT_ROYAL = [49.33561, -123.05386];
const ROYAL_29TH_SW = [49.33554, -123.05481];

export const TWENTY_SEVENTH_29TH = [
  {
    routeNames: [ROUTES.twentySeventh29th.name],
    description: "27th & tempe",
    type: "quiet",
    positions: [
      JONES_27TH,
      [49.33414, -123.07206],
      [49.33407, -123.0639],
      [49.3339, -123.06356],
      [49.3337, -123.06313],
      [49.3336, -123.06276],
      [49.33351, -123.06226],
      [49.3334, -123.06154],
      [49.33337, -123.06114],
      [49.33339, -123.06072],
      [49.33345, -123.06034],
      [49.33357, -123.06007],
      [49.33447, -123.05854],
      S_OF_TEMPE_29TH,
    ],
  },
  {
    routeNames: [ROUTES.twentySeventh29th.name],
    description: "tempe to 29th",
    type: "combined",
    oneWay: "required",
    positions: [S_OF_TEMPE_29TH, TEMPE_29TH_SE],
  },
  {
    routeNames: [ROUTES.twentySeventh29th.name],
    description: "29th to tempe 1",
    type: "mixed",
    oneWay: "recommended",
    positions: [TEMPE_29TH_SE, TEMPE_29TH_S],
  },
  {
    routeNames: [ROUTES.twentySeventh29th.name],
    description: "29th to tempe 2",
    type: "quiet",
    oneWay: "recommended",
    hideArrows: true,
    positions: [TEMPE_29TH_S, S_OF_TEMPE_29TH],
  },
  {
    routeNames: [ROUTES.twentySeventh29th.name],
    description: "29th: tempe to connaught",
    type: "mixed",
    positions: [TEMPE_29TH_SE, [49.33554, -123.05679], CONNAUGHT_29TH_SW],
  },
  {
    routeNames: [ROUTES.twentySeventh29th.name],
    description: "29th: connaught to royal",
    type: "dedicated",
    positions: [CONNAUGHT_29TH_SW, ROYAL_29TH_SW],
  },
  {
    routeNames: [ROUTES.twentySeventh29th.name],
    description: "29th: eb",
    type: "painted",
    oneWay: "required",
    positions: [
      ROYAL_29TH_SW,
      [49.33554, -123.05456],
      [49.3355, -123.05141],
      [49.33549, -123.05112],
      [49.33548, -123.05047],
      [49.33547, -123.05006],
      [49.33548, -123.04973],
      [49.33546, -123.04601],
      [49.33543, -123.04384],
      [49.33543, -123.04384],
      [49.33543, -123.04304],
      [49.33542, -123.04239],
      [49.33541, -123.04218],
      [49.3354, -123.04211],
      [49.33537, -123.04199],
      [49.33533, -123.04191],
      LYNN_VALLEY_29TH_W,
    ],
  },
  {
    routeNames: [ROUTES.twentySeventh29th.name],
    description: "29th: wb near royal",
    type: "mixed",
    oneWay: "recommended",
    positions: [
      WB_MUP_START_AT_ROYAL,
      [49.33563, -123.05414],
      [49.33563, -123.05456],
      [49.33565, -123.05462],
      [49.33565, -123.0548],
      ROYAL_29TH_SW,
    ],
  },
  {
    routeNames: [ROUTES.twentySeventh29th.name],
    description: "29th: wb",
    type: "painted",
    oneWay: "required",
    positions: [
      LYNN_VALLEY_29TH_N,
      [49.33543, -123.04179],
      [49.33548, -123.0419],
      [49.33552, -123.04206],
      [49.33553, -123.0422],
      [49.33555, -123.04352],
      [49.33553, -123.04367],
      [49.33552, -123.04384],
      [49.33554, -123.04602],
      [49.33558, -123.05048],
      WB_MUP_START_AT_ROYAL,
    ],
  },

  // valley center
  {
    description: "valley center crossing lynn eb",
    type: "shared",
    oneWay: "required",
    positions: [LYNN_VALLEY_29TH_W, LYNN_VALLEY_CENTER_S],
  },
  {
    description: "valley center crossing lynn wb",
    type: "shared",
    oneWay: "required",
    positions: [LYNN_VALLEY_CENTER_E, LYNN_VALLEY_29TH_N],
  },
  {
    description: "valley center: eb",
    type: "dedicated",
    oneWay: "required",
    positions: [
      LYNN_VALLEY_CENTER_S,
      [49.33486, -123.04138],
      [49.33483, -123.04132],
    ],
  },
  {
    description: "valley center: wb",
    type: "dedicated",
    oneWay: "required",
    positions: [
      [49.33489, -123.04117],
      [49.33493, -123.0412],
      LYNN_VALLEY_CENTER_E,
    ],
  },
];
