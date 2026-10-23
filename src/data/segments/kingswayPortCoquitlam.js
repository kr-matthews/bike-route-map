import {
  KINGSWAY_MARY_HILL_BYPASS_SE,
  KINGSWAY_MARY_HILL_BYPASS_SE_S,
  KINGSWAY_POCO_TRAIL,
} from "../intersections";
import { ROUTES } from "../routes";

const MARY_HILL_KELLY = [49.25908, -122.77854];
const COMMUNITY_CENTER_W = [49.25908, -122.77773];
const COMMUNITY_CENTER_E = [49.25908, -122.77634];
const KINGSWAY_KELLY_W = [49.2591, -122.77568];
const KINGSWAY_WILSON_SE = [49.26081, -122.77523];
const KINGSWAY_KELLY_N_E = [49.25933, -122.77522];
const KINGSWAY_KELLY_S_E = [49.25892, -122.77521];
const KINGSWAY_MARY_HILL_BYPASS_NE = [49.24669, -122.74788];

export const KINGSWAY_PORT_COQUITLAM = [
  {
    description: "kelly 1",
    type: "quiet",
    positions: [MARY_HILL_KELLY, COMMUNITY_CENTER_W],
  },
  {
    description: "kelly 2",
    type: "mixed",
    positions: [COMMUNITY_CENTER_W, COMMUNITY_CENTER_E],
  },
  {
    description: "kelly 3",
    type: "quiet",
    positions: [COMMUNITY_CENTER_E, KINGSWAY_KELLY_W],
  },
  {
    description: "kelly e eb",
    type: "mixed",
    oneWay: "recommended",
    positions: [
      KINGSWAY_KELLY_W,
      [49.259, -122.77563],
      [49.259, -122.77554],
      [49.25898, -122.77548],
      [49.25892, -122.77546],
      KINGSWAY_KELLY_S_E,
    ],
  },
  {
    description: "kelly e wb",
    type: "mixed",
    oneWay: "recommended",
    positions: [
      KINGSWAY_KELLY_N_E,
      [49.25933, -122.77535],
      [49.25937, -122.77535],
      [49.25937, -122.77548],
      [49.25928, -122.77548],
      [49.25921, -122.77553],
      [49.25919, -122.77564],
      KINGSWAY_KELLY_W,
    ],
  },
  {
    description: "port coquitlam train station",
    type: "quiet",
    undesignated: true,
    positions: [
      [49.26118, -122.7748],
      [49.26089, -122.77481],
      [49.26089, -122.7752],
      KINGSWAY_WILSON_SE,
    ],
  },

  {
    routeNames: [ROUTES.kingswayPortCoquitlam.name],
    description: "n of kelly",
    type: "mixed",
    positions: [KINGSWAY_WILSON_SE, KINGSWAY_KELLY_N_E],
  },
  {
    routeNames: [ROUTES.kingswayPortCoquitlam.name],
    description: "primary",
    type: "mixed",
    positions: [
      KINGSWAY_KELLY_N_E,
      [49.25926, -122.77522],
      [49.2592, -122.77514],
      [49.25917, -122.77504],
      [49.25902, -122.77504],
      [49.25902, -122.77511],
      [49.25899, -122.77518],
      KINGSWAY_KELLY_S_E,
      [49.25867, -122.77521],
      [49.25851, -122.77514],
      [49.2583, -122.77497],
      [49.25814, -122.77475],
      [49.25804, -122.77451],
      [49.25569, -122.76892],
      [49.25446, -122.766],
      [49.25415, -122.76511],
      [49.25408, -122.76482],
      [49.25365, -122.76379],
      [49.25363, -122.76363],
      [49.25356, -122.76353],
      [49.25319, -122.76263],
      [49.25317, -122.76249],
      [49.25305, -122.76243],
      [49.25291, -122.76213],
      [49.25292, -122.76198],
      [49.25287, -122.76192],
      [49.25228, -122.76079],
      [49.25142, -122.75886],
      [49.25017, -122.7559],
      [49.2481, -122.75099],
      [49.24695, -122.7483],
      [49.2469, -122.74826],
      [49.24674, -122.74789],
      KINGSWAY_MARY_HILL_BYPASS_NE,
    ],
  },
  {
    routeNames: [ROUTES.kingswayPortCoquitlam.name],
    description: "crossing mary hill bypass",
    type: "other",
    positions: [
      KINGSWAY_MARY_HILL_BYPASS_NE,
      [49.24662, -122.74794],
      [49.24658, -122.74823],
      [49.24636, -122.74807],
      [49.24638, -122.74764],
      KINGSWAY_MARY_HILL_BYPASS_SE,
    ],
  },
  {
    routeNames: [ROUTES.kingswayPortCoquitlam.name],
    description: "s of marry hill bypass",
    type: "mixed",
    positions: [
      KINGSWAY_MARY_HILL_BYPASS_SE,
      [49.24631, -122.74742],
      KINGSWAY_MARY_HILL_BYPASS_SE_S,
      [49.24608, -122.74657],
      [49.24586, -122.74609],
      [49.2457, -122.74579],
      [49.24541, -122.74509],
      [49.24529, -122.74486],
      [49.24516, -122.74464],
      KINGSWAY_POCO_TRAIL,
    ],
  },
];
