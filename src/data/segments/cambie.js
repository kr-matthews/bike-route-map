import {
  CAMBIE_29TH_E,
  CAMBIE_49TH_SW,
  CAMBIE_59TH_NE,
  CAMBIE_59TH_NW,
  CAMBIE_63RD_E,
  CAMBIE_64TH_E,
  CAMBIE_64TH_W,
  CAMBIE_DUNSMUIR,
  CAMBIE_MARINE_NE,
  CAMBIE_49TH_SE,
  CAMBIE_45TH_E,
  CAMBIE_37TH_E,
  CAMBIE_PENDER_SE,
  CAMBIE_PENDER_NE,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const CAMBIE_42ND_E = [49.23254, -123.11606];

// !!! add connections: 42nd, 33rd, king edward, 24th
// !!! add bit of sb cambie near 35th

export const CAMBIE = [
  // gastown
  {
    routes: [ROUTES.cambie.name],
    description: "gastown",
    oneWay: "required",
    videos: [VIDEOS.cambieGastownNb],
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
    routes: [ROUTES.cambie.name],
    description: "sb",
    oneWay: "required",
    videos: [VIDEOS.cambieSb],
    positions: [
      CAMBIE_49TH_SW,
      [49.22522, -123.11674],
      [49.22177, -123.11686],
      [49.21907, -123.11697],
      [49.21787, -123.11701],
      [49.21776, -123.11707],
      CAMBIE_59TH_NW,
      [49.21689, -123.11705],
      [49.21502, -123.11713],
      [49.2132, -123.1172],
      CAMBIE_64TH_W,
      [49.21143, -123.1173],
      [49.21019, -123.11731],
    ],
  },
  {
    routes: [ROUTES.cambie.name],
    description: "nb",
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
      [49.21785, -123.11666],
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
      [49.23955, -123.11702], // start good
      [49.24018, -123.11774], // end good
      [49.24021, -123.11782],
      [49.24041, -123.11802],
      [49.24053, -123.11812],
      [49.24065, -123.11818],
      [49.24085, -123.11824],
      [49.24106, -123.11824],
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
      CAMBIE_29TH_E,
    ],
  },
];
