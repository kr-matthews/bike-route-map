import {
  CAMBIE_29TH_SE,
  CAMBIE_37TH_E,
  CAMBIE_45TH_E,
  CAMBIE_49TH_SE,
  CAMBIE_49TH_SW,
  CAMBIE_58TH_E,
  CAMBIE_59TH_NE,
  CAMBIE_59TH_NW,
  CAMBIE_63RD_E,
  CAMBIE_64TH_E,
  CAMBIE_64TH_W,
  CAMBIE_DUNSMUIR,
  CAMBIE_MARINE_NE,
  CAMBIE_PENDER_NE,
  CAMBIE_PENDER_SE,
  HEATHER_33RD_N,
  ONTARIO_42ND,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const CAMBIE_30TH_SW = [49.24377, -123.11754];
const CAMBIE_33RD_E = [49.24112, -123.11824];
const CAMBIE_42ND_E = [49.23252, -123.11606];
const CAMBIE_58TH_W = [49.21776, -123.11706];

const NB_LANE_START_35TH = [49.23955, -123.11705];
const NB_LANE_END_35TH = [49.24018, -123.11775];

const SOUTHBOUND_END = [49.21019, -123.11731];

export const CAMBIE = [
  // canada line station (and other) connections
  {
    description: "42nd",
    // videoIds: [VIDEOS.fortySecondEb.id], // !!
    type: "quiet",
    positions: [
      CAMBIE_42ND_E,
      [49.23244, -123.1135],
      [49.23234, -123.1108],
      [49.23228, -123.10814],
      ONTARIO_42ND,
    ],
  },
  {
    description: "33rd",
    type: "painted",
    oneWay: "required",
    positions: [CAMBIE_33RD_E, HEATHER_33RD_N],
  },

  // gastown
  {
    routeNames: [ROUTES.cambieGastown.name],
    description: "gastown",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.cambieGastownNb.id],
    videoIdsEndAtEnd: [VIDEOS.cambieGastownNb.id],
    positions: [
      CAMBIE_DUNSMUIR,
      CAMBIE_PENDER_SE,
      CAMBIE_PENDER_NE,
      [49.28251, -123.10949],
      [49.28347, -123.10908],
      [49.2842, -123.10878],
      [49.28427, -123.10877],
    ],
  },

  // south vancouver
  {
    description: "left turn at 29th",
    type: "painted",
    oneWay: "required",
    positions: [
      [49.24535, -123.11573],
      [49.24526, -123.11558],
    ],
  },
  {
    description: "crossing cambie at 30th",
    type: "dedicated",
    oneWay: "required",
    positions: [CAMBIE_30TH_SW, [49.2437, -123.11743]],
  },
  {
    routeNames: [ROUTES.cambie.name],
    description: "sb brief lane 30th to 31st",
    type: "dedicated",
    oneWay: "required",
    positions: [
      [49.24379, -123.11751],
      CAMBIE_30TH_SW,
      [49.24359, -123.11784],
      [49.24349, -123.11796],
      [49.24338, -123.11808],
      [49.24327, -123.11818],
    ],
  },
  {
    routeNames: [ROUTES.cambie.name],
    description: "sb brief lane to 34th",
    type: "dedicated",
    oneWay: "required",
    positions: [
      [49.24032, -123.11839],
      [49.23902, -123.11693],
    ],
  },
  {
    routeNames: [ROUTES.cambie.name],
    description: "sb: 49th to 58th",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.cambieSb.id],
    positions: [
      CAMBIE_49TH_SW,
      [49.22522, -123.11674],
      [49.22177, -123.11686],
      [49.21907, -123.11697],
      [49.21787, -123.11701],
      CAMBIE_58TH_W,
    ],
  },
  {
    routeNames: [ROUTES.cambie.name],
    description: "sb: 58th to 59th",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.cambieSb.id],
    positions: [CAMBIE_58TH_W, CAMBIE_59TH_NW],
  },
  {
    routeNames: [ROUTES.cambie.name],
    description: "sb: 59th to marine",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.cambieSb.id],
    positions: [
      CAMBIE_59TH_NW,
      [49.21689, -123.11705],
      [49.21502, -123.11713],
      [49.2132, -123.1172],
      CAMBIE_64TH_W,
      [49.21143, -123.1173],
      SOUTHBOUND_END,
    ],
  },
  {
    description: "post-sb",
    type: "shared",
    oneWay: "recommended",
    hideUnlessVideo: true,
    videoIds: [VIDEOS.cambieSb.id],
    videoIdsEndAtEnd: [VIDEOS.cambieSb.id],
    positions: [SOUTHBOUND_END, [49.20995, -123.11725], [49.20903, -123.11729]],
  },
  {
    routeNames: [ROUTES.cambie.name],
    description: "nb: to 35th-ish",
    type: "painted",
    oneWay: "required",
    positions: [
      CAMBIE_MARINE_NE,
      [49.21041, -123.11707],
      CAMBIE_64TH_E,
      [49.2128, -123.11686],
      [49.21301, -123.11683],
      CAMBIE_63RD_E,
      [49.21411, -123.11679],
      CAMBIE_59TH_NE,
      CAMBIE_58TH_E,
      [49.21906, -123.11659],
      [49.22177, -123.1165],
      CAMBIE_49TH_SE,
      [49.2262, -123.11631],
      [49.22881, -123.11622],
      CAMBIE_45TH_E,
      [49.23075, -123.11614],
      CAMBIE_42ND_E,
      [49.23343, -123.11602],
      [49.23538, -123.1159],
      CAMBIE_37TH_E,
      [49.23815, -123.11582],
      [49.23834, -123.11586],
      [49.23852, -123.11595],
      [49.23868, -123.11608],
      [49.23913, -123.11659],
      [49.23947, -123.11699],
      NB_LANE_START_35TH,
    ],
  },
  {
    routeNames: [ROUTES.cambie.name],
    description: "nb: lane between 35th, 33rd",
    type: "dedicated",
    oneWay: "required",
    positions: [NB_LANE_START_35TH, NB_LANE_END_35TH],
  },
  {
    routeNames: [ROUTES.cambie.name],
    description: "nb: from 33rd-ish",
    type: "painted",
    oneWay: "required",
    positions: [
      NB_LANE_END_35TH,
      [49.24021, -123.11782],
      [49.24041, -123.11802],
      [49.24053, -123.11812],
      [49.24065, -123.11818],
      [49.24085, -123.11824],
      CAMBIE_33RD_E,
      [49.24201, -123.11818],
      [49.24245, -123.11812],
      [49.24265, -123.11807],
      [49.24288, -123.11796],
      [49.2431, -123.11778],
      [49.2433, -123.11757],
      [49.24346, -123.11735],
      [49.2436, -123.11711],
      [49.24414, -123.11615],
      [49.24429, -123.11593],
      [49.24442, -123.11578],
      [49.24461, -123.11561],
      [49.24487, -123.11543],
      [49.24506, -123.11533],
      CAMBIE_29TH_SE,
    ],
  },
];
