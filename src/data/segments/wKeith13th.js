import {
  BEWICKE_KEITH_SE_N,
  BEWICKE_MARINE_NW,
  CHESTERFIELD_13TH_N,
  CHESTERFIELD_13TH_S,
  GRAND_BLVD_E_13TH,
  GRAND_BLVD_W_13TH,
  JONES_KEITH_S,
  ST_ANDREWS_13TH,
} from "../intersections";
import { ROUTES } from "../routes";

const EB_LANE_START = [49.31996, -123.08997];
const EB_LANE_END = [49.31987, -123.08033];
const LONSDALE_ALLEY_13TH_S = [49.31996, -123.07336];
const LONSDALE_13TH_S = [49.31994, -123.07241];

const WB_BEFORE_LONSDALE = [49.32007, -123.07173];
const WB_BEFORE_8TH = [49.32009, -123.07688];

export const W_KEITH_13TH = [
  // eb
  {
    routeNames: [ROUTES.wKeith13th.name],
    description: "eb start",
    type: "shared",
    oneWay: "required",
    positions: [
      BEWICKE_KEITH_SE_N,
      [49.32, -123.091],
      [49.31997, -123.09056],
      EB_LANE_START,
    ],
  },
  {
    routeNames: [ROUTES.wKeith13th.name],
    description: "eb, to mahon",
    type: "dedicated",
    oneWay: "required",
    positions: [
      EB_LANE_START,
      [49.31995, -123.08902],
      [49.31992, -123.08881],
      JONES_KEITH_S,
      [49.31984, -123.08066],
      EB_LANE_END,
    ],
  },
  {
    routeNames: [ROUTES.wKeith13th.name],
    description: "eb mahon to almost lonsdale",
    type: "painted",
    oneWay: "required",
    positions: [
      EB_LANE_END,
      [49.3199, -123.08005],
      [49.31996, -123.0797],
      [49.32, -123.07943],
      [49.32001, -123.07915],
      [49.32, -123.07864],
      [49.31999, -123.07645],
      [49.31997, -123.07616],
      CHESTERFIELD_13TH_S,
      [49.31996, -123.07495],
      [49.31997, -123.07465],
      LONSDALE_ALLEY_13TH_S,
    ],
  },
  {
    routeNames: [ROUTES.wKeith13th.name],
    description: "eb at lonsdale",
    type: "shared",
    oneWay: "required",
    positions: [LONSDALE_ALLEY_13TH_S, LONSDALE_13TH_S],
  },
  {
    routeNames: [ROUTES.wKeith13th.name],
    description: "eb lonsdale to st andrews",
    type: "painted",
    oneWay: "required",
    positions: [
      LONSDALE_13TH_S,
      [49.31993, -123.07152],
      [49.31991, -123.06971],
      [49.31989, -123.0696],
      [49.31989, -123.06939],
      [49.3199, -123.06908],
      [49.31986, -123.06661],
      [49.31989, -123.06644],
      ST_ANDREWS_13TH,
    ],
  },

  // wb
  {
    routeNames: [ROUTES.wKeith13th.name],
    description: "wb st andrews to almost lonsdale",
    type: "painted",
    oneWay: "required",
    positions: [
      ST_ANDREWS_13TH,
      [49.31996, -123.06635],
      [49.31999, -123.06822],
      [49.32, -123.06848],
      [49.32002, -123.06912],
      [49.32004, -123.06942],
      [49.32004, -123.07012],
      [49.32007, -123.0704],
      WB_BEFORE_LONSDALE,
    ],
  },
  {
    routeNames: [ROUTES.wKeith13th.name],
    description: "wb lonsdale to chesterfield",
    type: "shared",
    oneWay: "required",
    positions: [WB_BEFORE_LONSDALE, [49.32007, -123.0724], CHESTERFIELD_13TH_N],
  },
  {
    routeNames: [ROUTES.wKeith13th.name],
    description: "wb chesterfield to 8th",
    type: "shared",
    oneWay: "required",
    positions: [
      CHESTERFIELD_13TH_N,
      [49.32011, -123.07555],
      [49.3201, -123.07605],
      [49.32009, -123.07639],
      WB_BEFORE_8TH,
    ],
  },
  {
    routeNames: [ROUTES.wKeith13th.name],
    description: "wb 8th to bewicke/marine",
    type: "shared",
    oneWay: "required",
    positions: [
      WB_BEFORE_8TH,
      [49.32007, -123.07704],
      [49.32009, -123.07868],
      [49.32009, -123.07997],
      [49.32009, -123.08051],
      [49.32013, -123.08482],
      [49.32016, -123.08795],
      [49.32018, -123.09116],
      BEWICKE_MARINE_NW,
    ],
  },

  // both
  {
    routeNames: [ROUTES.wKeith13th.name],
    description: "st andrews to grand blvd",
    type: "shared",
    positions: [ST_ANDREWS_13TH, GRAND_BLVD_W_13TH, GRAND_BLVD_E_13TH],
  },
];
