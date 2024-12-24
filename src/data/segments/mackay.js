import {
  HAMILTON_MARINE_NE,
  HAMILTON_MARINE_NW,
  HAMILTON_MARINE_SE,
  HAMILTON_MARINE_SE_E,
  HAMILTON_MARINE_SW,
  MACKAY_15TH,
  MACKAY_SPIRIT,
} from "../intersections";
import { ROUTES } from "../routes";

const CROSSWALK_WW = [49.32183, -123.10232];
const CROSSWALK_W = [49.32182, -123.10228];
const CROSSWALK_E = [49.32177, -123.10212];
const NB_LANE_SPLIT = [49.32287, -123.10054];

export const MACKAY = [
  {
    description: "nb lane",
    type: "painted",
    oneWay: "required",
    positions: [
      CROSSWALK_E,
      [49.32182, -123.10209],
      [49.32189, -123.10202],
      NB_LANE_SPLIT,
      [49.32301, -123.10034],
      HAMILTON_MARINE_SE,
      HAMILTON_MARINE_NE,
    ],
  },
  {
    description: "nb slip lane",
    type: "painted",
    oneWay: "required",
    positions: [NB_LANE_SPLIT, [49.32291, -123.10037], HAMILTON_MARINE_SE_E],
  },
  {
    description: "sb lane",
    type: "painted",
    oneWay: "required",
    positions: [
      HAMILTON_MARINE_NW,
      HAMILTON_MARINE_SW,
      [49.32303, -123.10052],
      [49.32292, -123.10069],
      [49.32193, -123.10217],
      [49.32188, -123.10223],
      CROSSWALK_W,
    ],
  },
  {
    description: "crosswalk",
    type: "mixed",
    positions: [CROSSWALK_WW, CROSSWALK_W, CROSSWALK_E],
  },
  {
    routeNames: [ROUTES.mackay.name],
    description: "primary",
    type: "mixed",
    positions: [
      MACKAY_SPIRIT,
      [49.31825, -123.10248],
      [49.31827, -123.10246],
      [49.31855, -123.10246],
      [49.31864, -123.10248],
      [49.3196, -123.10244],
      [49.31968, -123.10249],
      [49.32162, -123.1024],
      MACKAY_15TH,
      CROSSWALK_WW,
      [49.32193, -123.10223],
      [49.32202, -123.10209],
      [49.32294, -123.10073],
      [49.32301, -123.10065],
      [49.32308, -123.10063],
      [49.32315, -123.10064],
      [49.32321, -123.10069],
    ],
  },
];
