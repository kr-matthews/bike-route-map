import { RAILWAY_COLBECK_E, RAILWAY_GREENWAY_COLBECK } from "../intersections";
import { ROUTES } from "../routes";

const RAILWAY_COLBECK_EE = [49.15249, -123.16971];
const NO_2_COLVILLE_E = [49.15156, -123.15884];
const NO_2_DANUBE_E = [49.15111, -123.15883];
const BLUNDELL_PARK_W = [49.15217, -123.15494];
const BLUNDELL_PARK_E = [49.15186, -123.15046];
const NO_3_LUCAS_N_W = [49.15191, -123.1368];
const NO_3_LUCAS_S_E = [49.15158, -123.13656];
const SAINT_ALBANS_LUNEN = [49.15226, -123.13096];
const SAINT_ALBANS_BOWCOCK = [49.15135, -123.13096];

export const CROSSTOWN_RICHMOND = [
  {
    description: "connection railway to crosstown",
    type: "other",
    positions: [
      RAILWAY_GREENWAY_COLBECK,
      [49.15257, -123.16974],
      RAILWAY_COLBECK_EE,
    ],
  },
  {
    routeNames: [ROUTES.crosstownRichmond.name],
    description: "railway to no. 2",
    type: "quiet",
    positions: [
      RAILWAY_COLBECK_E,
      RAILWAY_COLBECK_EE,
      [49.15249, -123.16799],
      [49.15246, -123.16232],
      [49.15167, -123.16231],
      [49.15163, -123.1623],
      [49.1516, -123.16226],
      [49.15158, -123.16219],
      [49.15157, -123.16208],
      [49.15156, -123.16039],
      NO_2_COLVILLE_E,
    ],
  },
  {
    routeNames: [ROUTES.crosstownRichmond.name],
    description: "no. 2",
    type: "mixed",
    positions: [NO_2_COLVILLE_E, NO_2_DANUBE_E],
  },
  {
    routeNames: [ROUTES.crosstownRichmond.name],
    description: "no. 2 to blundell park",
    type: "quiet",
    positions: [
      NO_2_DANUBE_E,
      [49.15112, -123.15845],
      [49.15113, -123.15833],
      [49.15118, -123.15821],
      [49.15123, -123.15808],
      [49.15126, -123.15798],
      [49.15129, -123.15781],
      [49.1513, -123.1577],
      [49.1513, -123.15754],
      [49.1513, -123.15528],
      [49.15131, -123.15502],
      [49.15134, -123.15482],
      [49.15138, -123.15462],
      [49.15155, -123.15415],
      [49.15169, -123.15431],
      BLUNDELL_PARK_W,
    ],
  },
  {
    routeNames: [ROUTES.crosstownRichmond.name],
    description: "blundell park",
    type: "comfortable",
    positions: [
      BLUNDELL_PARK_W,
      [49.15225, -123.15475],
      [49.15232, -123.15423],
      [49.15243, -123.15402],
      [49.15253, -123.15397],
      [49.15256, -123.15384],
      [49.15251, -123.15335],
      [49.15254, -123.15311],
      [49.15248, -123.15285],
      [49.15237, -123.15258],
      [49.15233, -123.15244],
      [49.15225, -123.15123],
      [49.15207, -123.15093],
      BLUNDELL_PARK_E,
    ],
  },
  {
    routeNames: [ROUTES.crosstownRichmond.name],
    description: "blundell park to no. 3",
    type: "quiet",
    positions: [
      BLUNDELL_PARK_E,
      [49.15186, -123.14994],
      [49.15186, -123.14925],
      [49.15188, -123.14884],
      [49.15191, -123.14785],
      NO_3_LUCAS_N_W,
    ],
  },
  {
    routeNames: [ROUTES.crosstownRichmond.name],
    description: "no. 3",
    type: "mixed",
    positions: [
      NO_3_LUCAS_N_W,
      [49.15166, -123.13679],
      [49.15166, -123.13658],
      NO_3_LUCAS_S_E,
    ],
  },
  {
    routeNames: [ROUTES.crosstownRichmond.name],
    description: "no. 3 to saint albans",
    type: "quiet",
    positions: [
      NO_3_LUCAS_S_E,
      [49.15157, -123.13489],
      [49.15162, -123.13464],
      [49.15171, -123.1345],
      [49.15177, -123.13447],
      [49.1524, -123.13446],
      [49.15239, -123.13379],
      [49.15225, -123.13163],
      SAINT_ALBANS_LUNEN,
    ],
  },
  {
    routeNames: [ROUTES.crosstownRichmond.name],
    description: "saint albans",
    type: "shared",
    positions: [SAINT_ALBANS_LUNEN, SAINT_ALBANS_BOWCOCK],
  },
  {
    routeNames: [ROUTES.crosstownRichmond.name],
    description: "bowcock",
    type: "quiet",
    positions: [
      SAINT_ALBANS_BOWCOCK,
      [49.15131, -123.12841],
      [49.15131, -123.12526],
    ],
  },
];
