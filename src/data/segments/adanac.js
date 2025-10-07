import {
  BOUNDARY_ADANAC,
  CASSIAR_ADANAC,
  EXPO_UNION,
  HEATLEY_UNION,
  KASLO_ADANAC,
  LAKEWOOD_ADANAC,
  MAIN_DUNSMUIR,
  MCLEAN_ADANAC,
  NANAIMO_ADANAC_E,
  NANAIMO_ADANAC_W,
  QUEBEC_UNION_NE,
  QUEBEC_UNION_NW,
  QUEBEC_UNION_SE,
  QUEBEC_UNION_SW,
  SLOCAN_ADANAC,
  WINDERMERE_ADANAC,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const MAIN_UNION_N = [49.27773, -123.09981];
const MAIN_UNION_NE = [49.27771, -123.09963];
const MAIN_UNION_NW = [49.27773, -123.1];
const MAIN_UNION_SE = [49.27765, -123.09963];
const MAIN_UNION_SW = [49.27768, -123.09999];
const EB_ALLEY_BEFORE_MAIN = [49.27768, -123.10057];
const GORE_UNION_N = [49.27766, -123.09698];
const WB_PRE_MAIN = [49.27769, -123.0983];

const VERNON_ADANAC = [49.27769, -123.07917];
const VERNON_UNION = [49.27732, -123.0794];

const DUNLEVY_UNION = [49.27759, -123.09552];
const UNION_SPLIT = [49.27761, -123.10316];
const OVERPASS_W = [49.27744, -123.03193];
const OVERPASS_E = [49.27745, -123.03111];
const PRE_BOUNDARY = [49.27744, -123.02519];

export const ADANAC = [
  {
    description: "dunsmuir off-ramp eb",
    type: "quiet",
    oneWay: "required",
    elevation: 0.5,
    positions: [MAIN_DUNSMUIR, MAIN_UNION_SE],
  },
  {
    description: "dunsmuir on-ramp wb",
    type: "quiet",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [ROUTE_VIDEOS.dunsmuirWb.id],
    positions: [MAIN_UNION_N, MAIN_DUNSMUIR],
  },
  {
    description: "dunsmuir 'nb'",
    type: "mixed",
    elevation: 0.5,
    videoIds: [ROUTE_VIDEOS.dunsmuirEb.id],
    positions: [MAIN_DUNSMUIR, MAIN_UNION_SW, MAIN_UNION_NW],
  },
  {
    routeNames: [ROUTES.adanac.name],
    type: "dedicated",
    description: "west end merged",
    videoIds: [ROUTE_VIDEOS.adanacWb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.adanacWb.id],
    positions: [EXPO_UNION, UNION_SPLIT],
  },
  {
    routeNames: [ROUTES.adanac.name],
    description: "eb: expo to quebec",
    type: "dedicated",
    oneWay: "required",
    positions: [
      UNION_SPLIT,
      [49.27756, -123.10282],
      QUEBEC_UNION_SW,
      QUEBEC_UNION_SE,
    ],
  },
  {
    routeNames: [ROUTES.adanac.name],
    description: "eb: quebec to main alley",
    type: "painted",
    oneWay: "required",
    positions: [QUEBEC_UNION_SE, [49.27765, -123.10143], EB_ALLEY_BEFORE_MAIN],
  },
  {
    routeNames: [ROUTES.adanac.name],
    description: "eb: main alley to dunlevy",
    type: "quiet",
    oneWay: "required",
    positions: [
      EB_ALLEY_BEFORE_MAIN,
      MAIN_UNION_SW,
      MAIN_UNION_SE,
      [49.2776, -123.09697],
      [49.27758, -123.0956],
      DUNLEVY_UNION,
    ],
  },
  {
    routeNames: [ROUTES.adanac.name],
    description: "wb: dunlevy to gore",
    type: "painted",
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.adanacWb.id],
    positions: [DUNLEVY_UNION, [49.27763, -123.09563], GORE_UNION_N],
  },
  {
    routeNames: [ROUTES.adanac.name],
    description: "wb: gore to pre-main",
    type: "dedicated",
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.adanacWb.id],
    positions: [GORE_UNION_N, WB_PRE_MAIN],
  },
  {
    routeNames: [ROUTES.adanac.name],
    description: "wb: just before main",
    type: "dedicated",
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.adanacWb.id, ROUTE_VIDEOS.dunsmuirWb.id],
    videoIdsStartAtStart: [ROUTE_VIDEOS.dunsmuirWb.id],
    positions: [WB_PRE_MAIN, MAIN_UNION_NE, MAIN_UNION_N],
  },
  {
    routeNames: [ROUTES.adanac.name],
    description: "wb: half crossing main",
    type: "dedicated",
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.adanacWb.id],
    positions: [MAIN_UNION_N, MAIN_UNION_NW],
  },
  {
    routeNames: [ROUTES.adanac.name],
    description: "wb: main to quebec",
    type: "dedicated",
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.adanacWb.id, ROUTE_VIDEOS.dunsmuirEb.id],
    positions: [
      MAIN_UNION_NW,
      [49.27773, -123.10054],
      [49.27773, -123.10144],
      QUEBEC_UNION_NE,
      QUEBEC_UNION_NW,
    ],
  },
  {
    routeNames: [ROUTES.adanac.name],
    description: "wb: quebec to expo",
    type: "dedicated",
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.adanacWb.id],
    positions: [QUEBEC_UNION_NW, [49.27763, -123.10298], UNION_SPLIT],
  },
  {
    routeNames: [ROUTES.adanac.name],
    description: "dunlevy to sunrise",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.adanacWb.id],
    positions: [
      DUNLEVY_UNION,
      [49.27756, -123.09357],
      [49.27753, -123.09161],
      HEATLEY_UNION,
      [49.27745, -123.08728],
      [49.2774, -123.08494],
      [49.27738, -123.08325],
      [49.27734, -123.08135],
      VERNON_UNION,
      VERNON_ADANAC,
      [49.27766, -123.0772],
      MCLEAN_ADANAC,
      [49.2776, -123.07273],
      [49.27758, -123.07047],
      [49.27755, -123.06835],
      [49.27753, -123.06561],
      [49.27752, -123.06367],
      LAKEWOOD_ADANAC,
      [49.27748, -123.0598],
      [49.27747, -123.05786],
      NANAIMO_ADANAC_W,
      NANAIMO_ADANAC_E,
      [49.27747, -123.05459],
      [49.27746, -123.05198],
      SLOCAN_ADANAC,
    ],
  },
  {
    routeNames: [ROUTES.adanac.name, ROUTES.sunrise.name],
    description: "sunrise",
    type: "quiet",
    videoIds: [
      ROUTE_VIDEOS.adanacWb.id,
      ROUTE_VIDEOS.sunriseSb.id,
      ROUTE_VIDEOS.sunriseNb.id,
    ],
    positions: [SLOCAN_ADANAC, KASLO_ADANAC],
  },
  {
    routeNames: [ROUTES.adanac.name],
    description: "sunrise to highway",
    type: "quiet",
    elevation: 0.5,
    videoIds: [ROUTE_VIDEOS.adanacWb.id],
    positions: [
      KASLO_ADANAC,
      [49.27745, -123.0441],
      [49.27745, -123.04132],
      [49.27745, -123.03884],
      WINDERMERE_ADANAC,
      [49.27745, -123.03359],
      OVERPASS_W,
    ],
  },
  {
    routeNames: [ROUTES.adanac.name],
    description: "highway overpass",
    type: "quiet",
    elevation: 1,
    videoIds: [ROUTE_VIDEOS.adanacWb.id],
    positions: [OVERPASS_W, OVERPASS_E],
  },
  {
    routeNames: [ROUTES.adanac.name],
    description: "highway to almost boundary",
    type: "quiet",
    elevation: 0.5,
    videoIds: [ROUTE_VIDEOS.adanacWb.id],
    positions: [
      OVERPASS_E,
      CASSIAR_ADANAC,
      [49.27745, -123.02832],
      [49.27744, -123.02571],
      PRE_BOUNDARY,
    ],
  },
  {
    routeNames: [ROUTES.adanac.name],
    description: "pre-boundary",
    type: "quiet",
    videoIds: [
      ROUTE_VIDEOS.adanacWb.id,
      ROUTE_VIDEOS.francesUnionEb.id,
      ROUTE_VIDEOS.francesUnionWb.id,
    ],
    videoIdsStartAtStart: [ROUTE_VIDEOS.francesUnionEb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.francesUnionWb.id],
    positions: [PRE_BOUNDARY, [49.27744, -123.02375], BOUNDARY_ADANAC],
  },
];
