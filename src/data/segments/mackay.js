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
const MACKAY_22ND = [49.32982, -123.10219];

const LLOYD_HWY_1 = [49.3324, -123.10454];
const PEMBERTON_OVERPASS_S_S_S = [49.33237, -123.10753];
const PEMBERTON_OVERPASS_S_S = [49.33242, -123.10743];
const PEMBERTON_OVERPASS_S = [49.33239, -123.10746];
const PEMBERTON_OVERPASS_N = [49.33269, -123.10741];
const PEMBERTON_OVERPASS_N_N = [49.33267, -123.10744];
const PEMBERTON_OVERPASS_N_N_N = [49.33271, -123.10752];
const MOSQUITO_CREEK_OVERPASS_W = [49.33189, -123.09329];
const MOSQUITO_CREEK_OVERPASS_E = [49.33181, -123.09112];

export const MACKAY = [
  // at 15th
  {
    description: "spirit to 15th bridge",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.mackayMupSb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.mackayMupSb.id],
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
    description: "15th bridge to crosswalk",
    type: "mixed",
    videoIds: [
      ROUTE_VIDEOS.mackayMupSb.id,
      ROUTE_VIDEOS.fifteenthEb.id,
      ROUTE_VIDEOS.larsonEb.id,
    ],
    positions: [MACKAY_15TH, CROSSWALK_WW],
  },
  {
    description: "crosswalk to marine",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.mackayMupSb.id, ROUTE_VIDEOS.fifteenthEb.id],
    videoIdsStartAtEnd: [ROUTE_VIDEOS.mackayMupSb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.fifteenthEb.id],
    positions: [
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
    videoIds: [ROUTE_VIDEOS.larsonEb.id],
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
    description: "nb rd lane, pre-crosswalk",
    type: "painted",
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.mackayNb.id],
    positions: [
      S_OF_15TH,
      [49.32158, -123.10218],
      [49.32171, -123.10216],
      CROSSWALK_E,
    ],
  },
  {
    routeNames: [ROUTES.mackay.name],
    description: "nb rd lane",
    type: "painted",
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.mackayNb.id, ROUTE_VIDEOS.larsonEb.id],
    positions: [
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
    videoIds: [ROUTE_VIDEOS.mackayNb.id, ROUTE_VIDEOS.larsonEb.id],
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
    videoIds: [ROUTE_VIDEOS.mackayNb.id],
    videoIdsStartAtStart: [ROUTE_VIDEOS.mackayNb.id],
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
    videoIds: [ROUTE_VIDEOS.mackayNb.id],
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
      MACKAY_22ND,
    ],
  },

  // hwy 1 overpass pemberton
  {
    description: "pemberton overpass 1",
    type: "other",
    elevation: 1,
    videoIds: [ROUTE_VIDEOS.mackayNb.id],
    positions: [
      PEMBERTON_OVERPASS_S_S_S,
      [49.33243, -123.10753],
      [49.33244, -123.10749],
      [49.33244, -123.10745],
      PEMBERTON_OVERPASS_S_S,
    ],
  },
  {
    description: "pemberton overpass 2",
    type: "other",
    elevation: 1.5,
    videoIds: [ROUTE_VIDEOS.mackayNb.id],
    positions: [
      PEMBERTON_OVERPASS_S_S,
      [49.33242, -123.10743],
      PEMBERTON_OVERPASS_S,
    ],
  },
  {
    description: "pemberton overpass 3",
    type: "other",
    elevation: 2,
    videoIds: [ROUTE_VIDEOS.mackayNb.id],
    positions: [
      PEMBERTON_OVERPASS_S,
      [49.3324, -123.10751],
      [49.33241, -123.10753],
      [49.33271, -123.10752],
      [49.33273, -123.10748],
      [49.33272, -123.10743],
      PEMBERTON_OVERPASS_N,
    ],
  },
  {
    description: "pemberton overpass 4",
    type: "other",
    elevation: 1.5,
    videoIds: [ROUTE_VIDEOS.mackayNb.id],
    positions: [PEMBERTON_OVERPASS_N, PEMBERTON_OVERPASS_N_N],
  },
  {
    description: "pemberton overpass 5",
    type: "other",
    elevation: 1,
    videoIds: [ROUTE_VIDEOS.mackayNb.id],
    positions: [
      PEMBERTON_OVERPASS_N_N,
      [49.33267, -123.1075],
      PEMBERTON_OVERPASS_N_N_N,
    ],
  },
  {
    description: "pemberton overpass 6",
    type: "mixed",
    elevation: 0.5,
    videoIds: [ROUTE_VIDEOS.mackayNb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.mackayNb.id],
    positions: [
      PEMBERTON_OVERPASS_N_N_N,
      [49.33274, -123.10753],
      [49.33274, -123.10762],
      [49.33278, -123.10762],
    ],
  },

  // hwy 1 path
  {
    description: "22nd, lloyd",
    type: "quiet",
    undesignated: true,
    videoIds: [ROUTE_VIDEOS.mackayNb.id],
    positions: [
      MACKAY_22ND,
      [49.32981, -123.10305],
      [49.32988, -123.1036],
      [49.32988, -123.10475],
      [49.33235, -123.1047],
      LLOYD_HWY_1,
    ],
  },
  {
    description: "hwy 1 path - pemberton to lloyd",
    type: "mixed",
    elevation: 0.5,
    videoIds: [ROUTE_VIDEOS.mackayNb.id],
    positions: [
      PEMBERTON_OVERPASS_S_S_S,
      [49.33238, -123.10728],
      [49.33243, -123.10684],
      [49.33243, -123.10555],
      LLOYD_HWY_1,
    ],
  },
  {
    description: "hwy 1 path - lloyd to mosquito creek",
    type: "mixed",
    elevation: 0.5,
    positions: [
      LLOYD_HWY_1,
      [49.33222, -123.1],
      [49.33211, -123.09764],
      [49.33207, -123.09614],
      [49.33192, -123.09441],
      MOSQUITO_CREEK_OVERPASS_W,
    ],
  },
  {
    description: "hwy 1 path - mosquito creek overpass",
    type: "mixed",
    elevation: 1,
    positions: [
      MOSQUITO_CREEK_OVERPASS_W,
      [49.33188, -123.09195],
      [49.33184, -123.0912],
      MOSQUITO_CREEK_OVERPASS_E,
    ],
  },
  {
    description: "hwy 1 path - mosquito creek to 24th",
    type: "mixed",
    elevation: 0.5,
    positions: [
      MOSQUITO_CREEK_OVERPASS_E,
      [49.33177, -123.09056],
      [49.33168, -123.08965],
      [49.33165, -123.08894],
      [49.33163, -123.08879],
      [49.33162, -123.08893],
      [49.33162, -123.08926],
      [49.3316, -123.08937],
      [49.3315, -123.08955],
      [49.33146, -123.08957],
      [49.33139, -123.08951],
    ],
  },
];
