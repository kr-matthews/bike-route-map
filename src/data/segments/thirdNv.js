import {
  LOW_LEVEL_COTTON_N,
  LOW_LEVEL_COTTON_S,
  QUEENSBURY_3RD_NE,
  QUEENSBURY_3RD_NW,
  QUEENSBURY_3RD_SE,
  QUEENSBURY_3RD_SW,
  QUEENSBURY_4TH_E,
  QUEENSBURY_4TH_W,
  SAINT_DAVIDS_1ST_E,
  SAINT_DAVIDS_4TH,
} from "../intersections";
import { ROUTES } from "../routes";

const SAINT_DAVIDS_3RD_ALLEY = [49.30807, -123.06599];
const SAINT_DAVIDS_3RD_SW = [49.30863, -123.06617];
const SAINT_DAVIDS_3RD_NW = [49.30878, -123.06615];

const QUEENSBURY_NB_LANE_START = [49.30903, -123.05718];
const QUEENSBURY_SB_LANE_END = [49.30902, -123.05729];

const EB_LANE_END = [49.30837, -123.05247];
const EB_BUS_LANE_END = [49.30833, -123.04747];
const WB_SIDEWALK_END = [49.30847, -123.05249];

export const THIRD_NV = [
  // saint davids
  {
    description: "st davids, 1st to almost 3rd",
    type: "dedicated",
    positions: [SAINT_DAVIDS_1ST_E, SAINT_DAVIDS_3RD_ALLEY],
  },
  {
    description: "st davids, gap at 3rd",
    type: "quiet",
    undesignated: true,
    positions: [
      SAINT_DAVIDS_3RD_ALLEY,
      [49.30813, -123.06606],
      [49.30857, -123.06604],
      SAINT_DAVIDS_3RD_SW,
    ],
  },
  {
    description: "st davids, 3rd to 4th",
    type: "dedicated",
    positions: [
      SAINT_DAVIDS_3RD_SW,
      SAINT_DAVIDS_3RD_NW,
      [49.30883, -123.06612],
      [49.3097, -123.0661],
      SAINT_DAVIDS_4TH,
    ],
  },

  // queensbury nb
  {
    description: "crossing 3rd at queensbury nb",
    type: "painted",
    oneWay: "required",
    positions: [QUEENSBURY_3RD_SE, QUEENSBURY_3RD_NE],
  },
  {
    description: "queensbury nb shared",
    type: "shared",
    oneWay: "required",
    positions: [
      QUEENSBURY_3RD_NE,
      [49.30861, -123.05718],
      [49.30892, -123.05717],
      QUEENSBURY_NB_LANE_START,
    ],
  },
  {
    description: "queensbury nb painted",
    type: "painted",
    oneWay: "required",
    positions: [QUEENSBURY_NB_LANE_START, QUEENSBURY_4TH_E],
  },

  // queensbury sb
  {
    description: "queensbury sb painted",
    type: "painted",
    oneWay: "required",
    positions: [QUEENSBURY_4TH_W, QUEENSBURY_SB_LANE_END],
  },
  {
    description: "queensbury sb shared",
    type: "shared",
    oneWay: "required",
    positions: [
      QUEENSBURY_SB_LANE_END,
      [49.30861, -123.05729],
      QUEENSBURY_3RD_NW,
    ],
  },
  {
    description: "crossing 3rd at queensbury sb",
    type: "painted",
    oneWay: "required",
    positions: [QUEENSBURY_3RD_NW, QUEENSBURY_3RD_SW],
  },

  // eb
  {
    routeNames: [ROUTES.thirdNv.name],
    description: "st davids to queensbury",
    type: "dedicated",
    oneWay: "required",
    positions: [
      SAINT_DAVIDS_3RD_SW,
      [49.30851, -123.06584],
      [49.30849, -123.06565],
      [49.30848, -123.06524],
      [49.30846, -123.06511],
      [49.30846, -123.06436],
      [49.30847, -123.06428],
      [49.30847, -123.06401],
      [49.30845, -123.06396],
      [49.30843, -123.06372],
      [49.30842, -123.06326],
      [49.30841, -123.06221],
      [49.30842, -123.06217],
      [49.30841, -123.06102],
      [49.3084, -123.06083],
      [49.30839, -123.06027],
      [49.30838, -123.059],
      [49.30837, -123.05795],
      QUEENSBURY_3RD_SW,
    ],
  },
  {
    routeNames: [ROUTES.thirdNv.name],
    description: "eb from queensbury",
    type: "painted",
    oneWay: "required",
    positions: [
      QUEENSBURY_3RD_SW,
      QUEENSBURY_3RD_SE,
      [49.30837, -123.05689],
      [49.30839, -123.05662],
      [49.3084, -123.05635],
      [49.30839, -123.05552],
      [49.30837, -123.05345],
      EB_LANE_END,
    ],
  },
  {
    routeNames: [ROUTES.thirdNv.name],
    description: "eb bus lane",
    type: "shared",
    oneWay: "required",
    positions: [
      EB_LANE_END,
      [49.30839, -123.0518],
      [49.3084, -123.0511],
      [49.3084, -123.05033],
      [49.30839, -123.0491],
      [49.30837, -123.04825],
      [49.30836, -123.04781],
      EB_BUS_LANE_END,
    ],
  },
  {
    routeNames: [ROUTES.thirdNv.name],
    description: "eb end, to cotton",
    type: "painted",
    oneWay: "required",
    positions: [EB_BUS_LANE_END, LOW_LEVEL_COTTON_S],
  },

  // wb
  {
    routeNames: [ROUTES.thirdNv.name],
    description: "wb sidewalk from cotton",
    type: "comfortable",
    oneWay: "required",
    positions: [
      LOW_LEVEL_COTTON_N,
      [49.30844, -123.04681],
      [49.30844, -123.04706],
      [49.30846, -123.04711],
      [49.30848, -123.04841],
      [49.30852, -123.04855],
      [49.30853, -123.04906],
      [49.30857, -123.04932],
      [49.30849, -123.04936],
      [49.3085, -123.05013],
      [49.3085, -123.05116],
      [49.30848, -123.05176],
      WB_SIDEWALK_END,
    ],
  },
  {
    routeNames: [ROUTES.thirdNv.name],
    description: "wb uphill painted",
    type: "painted",
    oneWay: "required",
    positions: [
      WB_SIDEWALK_END,
      [49.3085, -123.05635],
      [49.30851, -123.05667],
      [49.30853, -123.05686],
      QUEENSBURY_3RD_NE,
      QUEENSBURY_3RD_NW,
    ],
  },
];
