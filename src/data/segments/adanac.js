import {
  BOUNDARY_ADANAC,
  CASSIAR_ADANAC,
  DUNLEVY_UNION,
  EXPO_UNION,
  HEATLEY_UNION,
  KASLO_ADANAC,
  LAKEWOOD_ADANAC,
  MAIN_DUNSMUIR,
  MAIN_UNION_N,
  MAIN_UNION_NE,
  MAIN_UNION_NW,
  MAIN_UNION_SE,
  MAIN_UNION_SW,
  MCLEAN_ADANAC,
  NANAIMO_ADANAC_E,
  NANAIMO_ADANAC_W,
  QUEBEC_UNION_NE,
  QUEBEC_UNION_NW,
  QUEBEC_UNION_SE,
  QUEBEC_UNION_SW,
  SLOCAN_ADANAC,
  VERNON_ADANAC,
  VERNON_UNION,
  WINDERMERE_ADANAC,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const UNION_SPLIT = [49.27761, -123.10316];

export const ADANAC = [
  {
    description: "dunsmuir off-ramp eb",
    oneWay: "required",
    elevation: 0.5,
    positions: [MAIN_DUNSMUIR, MAIN_UNION_SE],
  },
  {
    description: "dunsmuir on-ramp wb",
    oneWay: "required",
    elevation: 0.5,
    positions: [MAIN_UNION_N, MAIN_DUNSMUIR],
  },
  {
    description: "dunsmuir 'nb'",
    elevation: 0.5,
    positions: [MAIN_DUNSMUIR, MAIN_UNION_SW, MAIN_UNION_NW],
  },
  {
    routeNames: [ROUTES.adanac.name],
    description: "east end merged",
    videos: [VIDEOS.adanacWb],
    positions: [EXPO_UNION, UNION_SPLIT],
  },
  {
    routeNames: [ROUTES.adanac.name],
    description: "downtown eastbound",
    oneWay: "required",
    positions: [
      UNION_SPLIT,
      [49.27756, -123.10282],
      QUEBEC_UNION_SW,
      QUEBEC_UNION_SE,
      [49.27767, -123.10143],
      MAIN_UNION_SW,
      MAIN_UNION_SE,
      [49.2776, -123.09697],
      [49.27758, -123.0956],
      DUNLEVY_UNION,
    ],
  },
  {
    routeNames: [ROUTES.adanac.name],
    description: "downtown westbound",
    oneWay: "required",
    videos: [VIDEOS.adanacWb],
    positions: [
      DUNLEVY_UNION,
      [49.27763, -123.09563],
      [49.27766, -123.09698],
      MAIN_UNION_NE,
      MAIN_UNION_N,
      MAIN_UNION_NW,
      [49.27773, -123.10054],
      [49.27773, -123.10144],
      QUEBEC_UNION_NE,
      QUEBEC_UNION_NW,
      [49.27763, -123.10298],
      UNION_SPLIT,
    ],
  },
  {
    routeNames: [ROUTES.adanac.name],
    description: "dunlevy to sunrise",
    videos: [VIDEOS.adanacWb],
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
    videos: [VIDEOS.adanacWb, VIDEOS.sunriseNb],
    positions: [SLOCAN_ADANAC, KASLO_ADANAC],
  },
  {
    routeNames: [ROUTES.adanac.name],
    description: "sunrise to boundary",
    videos: [VIDEOS.adanacWb],
    positions: [
      KASLO_ADANAC,
      [49.27745, -123.0441],
      [49.27745, -123.04132],
      [49.27745, -123.03884],
      WINDERMERE_ADANAC,
      [49.27745, -123.03359],
      CASSIAR_ADANAC,
      [49.27745, -123.02832],
      [49.27744, -123.02571],
      [49.27744, -123.02375],
      BOUNDARY_ADANAC,
    ],
  },
];
