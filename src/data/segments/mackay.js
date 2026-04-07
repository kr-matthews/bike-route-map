import {
  HAMILTON_MARINE_NE,
  HAMILTON_MARINE_NW,
  HAMILTON_MARINE_SE,
  HAMILTON_MARINE_SE_E,
  HAMILTON_MARINE_SW,
  MACKAY_15TH,
  MACKAY_1ST_N,
  MACKAY_1ST_S,
  MACKAY_AVE_MARINE_N,
  MACKAY_SPIRIT,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const S_OF_15TH = [49.32152, -123.10225];
const CROSSWALK_WW = [49.32183, -123.10232];
const CROSSWALK_W = [49.32182, -123.10228];
const CROSSWALK_E = [49.32177, -123.10213];
const NB_LANE_SPLIT = [49.32287, -123.10054];

export const MACKAY = [
  // at 15th
  {
    description: "spirit to 15th bridge",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.mackaySb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.mackaySb.id],
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
    ],
  },
  {
    description: "15th bridge to marine",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.mackaySb.id, ROUTE_VIDEOS.fifteenthEb.id],
    videoIdsStartAtEnd: [ROUTE_VIDEOS.mackaySb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.fifteenthEb.id],
    positions: [
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

  // mackay rd
  {
    description: "crosswalk",
    type: "mixed",
    positions: [CROSSWALK_WW, CROSSWALK_W, CROSSWALK_E],
  },
  {
    description: "nb slip lane",
    type: "painted",
    oneWay: "required",
    positions: [NB_LANE_SPLIT, [49.32291, -123.10037], HAMILTON_MARINE_SE_E],
  },
  {
    routeNames: [ROUTES.mackay.name],
    description: "nb rd lane",
    type: "painted",
    oneWay: "required",
    positions: [
      S_OF_15TH,
      [49.32158, -123.10218],
      [49.32171, -123.10216],
      CROSSWALK_E,
      [49.32182, -123.10209],
      [49.32189, -123.10202],
      NB_LANE_SPLIT,
      [49.32301, -123.10034],
      HAMILTON_MARINE_SE,
    ],
  },
  {
    description: "nb hamilton crossing marine",
    type: "shared",
    oneWay: "required",
    positions: [HAMILTON_MARINE_SE, HAMILTON_MARINE_NE],
  },
  {
    description: "sb hamilton crossing marine",
    type: "shared",
    oneWay: "required",
    positions: [HAMILTON_MARINE_NW, HAMILTON_MARINE_SW],
  },
  {
    routeNames: [ROUTES.mackay.name],
    description: "sb rd lane",
    type: "painted",
    oneWay: "required",
    positions: [
      HAMILTON_MARINE_SW,
      [49.32303, -123.10052],
      [49.32292, -123.10069],
      [49.32193, -123.10217],
      [49.32188, -123.10223],
      CROSSWALK_W,
    ],
  },
  {
    routeNames: [ROUTES.mackay.name],
    description: "sb rd shared",
    type: "shared",
    oneWay: "required",
    positions: [
      CROSSWALK_W,
      [49.32176, -123.1023],
      [49.32159, -123.1023],
      S_OF_15TH,
    ],
  },
  {
    routeNames: [ROUTES.mackay.name],
    description: "rd shared",
    type: "shared",
    positions: [
      MACKAY_1ST_S,
      MACKAY_1ST_N,
      [49.31826, -123.10235],
      [49.31854, -123.10234],
      [49.31868, -123.10237],
      [49.31958, -123.10233],
      [49.31973, -123.10234],
      S_OF_15TH,
    ],
  },

  // mackay ave
  {
    routeNames: [ROUTES.mackay.name],
    description: "ave",
    type: "quiet",
    positions: [
      MACKAY_AVE_MARINE_N,
      [49.32452, -123.101],
      [49.32471, -123.10092],
      [49.32492, -123.10073],
      [49.32515, -123.10054],
      [49.32524, -123.10051],
      [49.32534, -123.10051],
      [49.32554, -123.10057],
      [49.32569, -123.10061],
      [49.32611, -123.10061],
      [49.32655, -123.10061],
      [49.32733, -123.10061],
      [49.3275, -123.10064],
      [49.32763, -123.10071],
      [49.32772, -123.1008],
      [49.32849, -123.10162],
      [49.3286, -123.1017],
      [49.32868, -123.10174],
      [49.32879, -123.10179],
      [49.3289, -123.10181],
      [49.32904, -123.10182],
      [49.32955, -123.10178],
      [49.32962, -123.10179],
      [49.32969, -123.10182],
      [49.32976, -123.1019],
      [49.32981, -123.10202],
      [49.32982, -123.10219],
    ],
  },
];
