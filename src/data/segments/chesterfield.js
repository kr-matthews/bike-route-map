import {
  CHESTERFIELD_3RD_E,
  CHESTERFIELD_3RD_W,
  CHESTERFIELD_4TH_E,
  CHESTERFIELD_4TH_W,
  CHESTERFIELD_CARRIE_CATES_NE,
  CHESTERFIELD_CARRIE_CATES_SW,
  CHESTERFIELD_CARRIE_CATES_W,
  CHESTERFIELD_ESPLANADE_NE,
  CHESTERFIELD_ESPLANADE_NW,
  CHESTERFIELD_ESPLANADE_SE,
  CHESTERFIELD_ESPLANADE_SW,
} from "../intersections";
import { ROUTES } from "../routes";

const NB_PRE_ESPLANADE = [49.31219, -123.08274];
const NB_POST_ESPLANADE = [49.31256, -123.08237];
const NB_PRE_3RD = [49.3144, -123.08044];

const SB_PRE_3RD = [49.31516, -123.07989];
const SB_PRE_ESPLANADE = [49.31261, -123.0825];
const SB_POST_ESPLANADE = [49.31228, -123.08284];

export const CHESTERFIELD = [
  {
    routeNames: [ROUTES.chesterfield.name],
    description: "south of spirit",
    type: "mixed",
    positions: [
      [49.31051, -123.08357],
      [49.31096, -123.08402],
      [49.31101, -123.0841],
      [49.31107, -123.08413],
      [49.31112, -123.08411],
      [49.31115, -123.08407],
      [49.31117, -123.084],
      [49.31118, -123.08395],
      CHESTERFIELD_CARRIE_CATES_SW,
    ],
  },
  {
    routeNames: [ROUTES.chesterfield.name],
    description: "nb spirit to esplanade",
    type: "painted",
    oneWay: "required",
    positions: [
      CHESTERFIELD_CARRIE_CATES_NE,
      [49.3118, -123.08313],
      [49.31189, -123.08306],
      NB_PRE_ESPLANADE,
    ],
  },
  {
    routeNames: [ROUTES.chesterfield.name],
    description: "nb esplanade",
    type: "dedicated",
    oneWay: "required",
    positions: [
      NB_PRE_ESPLANADE,
      [49.31221, -123.08269],
      CHESTERFIELD_ESPLANADE_SE,
      CHESTERFIELD_ESPLANADE_NE,
      [49.31248, -123.08239],
      NB_POST_ESPLANADE,
    ],
  },
  {
    routeNames: [ROUTES.chesterfield.name],
    description: "nb esplanade to before 3rd",
    type: "painted",
    oneWay: "required",
    positions: [
      NB_POST_ESPLANADE,
      [49.31277, -123.08215],
      [49.31286, -123.0821],
      [49.31435, -123.08056],
      NB_PRE_3RD,
    ],
  },
  {
    routeNames: [ROUTES.chesterfield.name],
    description: "nb before 3rd",
    type: "dedicated",
    oneWay: "required",
    positions: [NB_PRE_3RD, CHESTERFIELD_3RD_E],
  },
  {
    routeNames: [ROUTES.chesterfield.name],
    description: "nb 3rd to 4th",
    type: "painted",
    oneWay: "required",
    positions: [CHESTERFIELD_3RD_E, [49.31487, -123.08002], CHESTERFIELD_4TH_E],
  },
  {
    routeNames: [ROUTES.chesterfield.name],
    description: "sb 4th to before 3rd",
    type: "painted",
    oneWay: "required",
    positions: [
      // !!! split
      CHESTERFIELD_4TH_W,
      [49.31551, -123.07954],
      SB_PRE_3RD,
    ],
  },
  {
    routeNames: [ROUTES.chesterfield.name],
    description: "sb before 3rd",
    type: "shared",
    oneWay: "required",
    positions: [SB_PRE_3RD, CHESTERFIELD_3RD_W],
  },
  {
    routeNames: [ROUTES.chesterfield.name],
    description: "sb 3rd to esplanade",
    type: "painted",
    oneWay: "required",
    positions: [
      CHESTERFIELD_3RD_W,
      [49.31405, -123.08103],
      [49.3133, -123.08181],
      [49.31282, -123.08228],
      SB_PRE_ESPLANADE,
    ],
  },
  {
    routeNames: [ROUTES.chesterfield.name],
    description: "sb esplanade",
    type: "dedicated",
    oneWay: "required",
    positions: [
      SB_PRE_ESPLANADE,
      [49.31255, -123.08259],
      CHESTERFIELD_ESPLANADE_NW,
      CHESTERFIELD_ESPLANADE_SW,
      [49.31235, -123.08281],
      SB_POST_ESPLANADE,
    ],
  },
  {
    routeNames: [ROUTES.chesterfield.name],
    description: "sb esplanade to spirit",
    type: "painted",
    oneWay: "required",
    positions: [
      SB_POST_ESPLANADE,
      [49.31193, -123.08319],
      [49.3118, -123.0833],
      CHESTERFIELD_CARRIE_CATES_W,
    ],
  },
];
