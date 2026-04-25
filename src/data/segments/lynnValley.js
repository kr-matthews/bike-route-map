import {
  BLVD_CR_19TH_NE,
  BLVD_CR_19TH_NW,
  LYNN_VALLEY_29TH_N,
  LYNN_VALLEY_29TH_W,
  LYNN_VALLEY_CENTER_E,
  LYNN_VALLEY_CENTER_S,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const HWY_1_SIDEWALK_START = [49.32818, -123.05452];
const HWY_1_SIDEWALK_END = [49.32924, -123.05272];
const LYNN_VALLEY_MOLLIE_NYE_S = [49.33196, -123.04764];

const LYNN_VALLEY_MOLLIE_NYE_W = [49.33208, -123.04778];
const LYNN_VALLEY_HWY_1_N = [49.32917, -123.05331];
const S_OF_21ST = [49.32756, -123.05568];
const N_OF_19TH = [49.32644, -123.0563];

export const LYNN_VALLEY = [
  // nb
  {
    routeNames: [ROUTES.lynnValley.name],
    description: "crossing blvd, 19th",
    type: "mixed",
    oneWay: "recommended",
    videoIds: [ROUTE_VIDEOS.grandBlvdNb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.grandBlvdNb.id],
    positions: [BLVD_CR_19TH_NW, BLVD_CR_19TH_NE],
  },
  {
    routeNames: [ROUTES.lynnValley.name],
    description: "blvd cr nb",
    type: "painted",
    oneWay: "required",
    positions: [
      BLVD_CR_19TH_NE,
      [49.32642, -123.05612],
      [49.32662, -123.05609],
      [49.32675, -123.05605],
      [49.32692, -123.05598],
      [49.32708, -123.0559],
      [49.32725, -123.05579],
      [49.3274, -123.05568],
      [49.32755, -123.05554],
      [49.32771, -123.05537],
      [49.32784, -123.05521],
      [49.32792, -123.05509],
      [49.32804, -123.05489],
      [49.32819, -123.05466],
      [49.3282, -123.05462],
      HWY_1_SIDEWALK_START,
    ],
  },
  {
    routeNames: [ROUTES.lynnValley.name],
    description: "sidewalk nb",
    type: "other",
    oneWay: "required",
    positions: [
      HWY_1_SIDEWALK_START,
      [49.32825, -123.05447],
      [49.32834, -123.05439],
      [49.32841, -123.05428],
      [49.3291, -123.05298],
      HWY_1_SIDEWALK_END,
    ],
  },
  {
    routeNames: [ROUTES.lynnValley.name],
    description: "post-sidewalk nb",
    type: "painted",
    oneWay: "required",
    positions: [
      HWY_1_SIDEWALK_END,
      [49.32934, -123.05254],
      [49.33038, -123.0506],
      [49.33124, -123.049],
      LYNN_VALLEY_MOLLIE_NYE_S,
    ],
  },
  {
    routeNames: [ROUTES.lynnValley.name],
    description: "mollie nye to 29th nb",
    type: "shared",
    oneWay: "required",
    positions: [
      LYNN_VALLEY_MOLLIE_NYE_S,
      [49.33402, -123.04377],
      [49.33506, -123.04181],
      LYNN_VALLEY_CENTER_S,
      LYNN_VALLEY_CENTER_E,
    ],
  },

  // sb
  {
    routeNames: [ROUTES.lynnValley.name],
    description: "29th to mollie nye sb",
    type: "shared",
    oneWay: "required",
    positions: [
      LYNN_VALLEY_29TH_N,
      LYNN_VALLEY_29TH_W,
      [49.33518, -123.04194],
      [49.33416, -123.04385],
      [49.33217, -123.04759],
      LYNN_VALLEY_MOLLIE_NYE_W,
    ],
  },
  {
    routeNames: [ROUTES.lynnValley.name],
    description: "mollie nye to hwy 1 sb",
    type: "painted",
    oneWay: "required",
    positions: [
      LYNN_VALLEY_MOLLIE_NYE_W,
      [49.33137, -123.04913],
      [49.33059, -123.05059],
      [49.32935, -123.0529],
      [49.32924, -123.05313],
      LYNN_VALLEY_HWY_1_N,
    ],
  },
  {
    routeNames: [ROUTES.lynnValley.name],
    description: "under hwy 1 sb",
    type: "combined",
    oneWay: "required",
    positions: [
      LYNN_VALLEY_HWY_1_N,
      [49.32908, -123.05353],
      [49.32893, -123.05383],
      [49.32876, -123.05409],
      [49.32868, -123.05428],
      [49.32864, -123.05439],
      [49.3286, -123.05445],
      [49.32855, -123.05449],
      [49.32843, -123.05461],
      [49.32814, -123.05503],
      [49.32801, -123.05522],
      [49.32789, -123.05537],
      [49.32777, -123.0555],
      [49.32767, -123.05558],
      S_OF_21ST,
    ],
  },
  {
    routeNames: [ROUTES.lynnValley.name],
    description: "blvd cr sb 1",
    type: "painted",
    oneWay: "required",
    positions: [
      S_OF_21ST,
      [49.32744, -123.05579],
      [49.32732, -123.05588],
      [49.32719, -123.05597],
      [49.32708, -123.05603],
      [49.32699, -123.05608],
      [49.3269, -123.05613],
      [49.32681, -123.05616],
      [49.3267, -123.05621],
      [49.32655, -123.05627],
      N_OF_19TH,
    ],
  },
  {
    routeNames: [ROUTES.lynnValley.name],
    description: "blvd cr sb 2",
    type: "mixed",
    oneWay: "required",
    positions: [
      N_OF_19TH,
      [49.32639, -123.05633],
      [49.32622, -123.05638],
      [49.32619, -123.05641],
      BLVD_CR_19TH_NW,
    ],
  },
];
