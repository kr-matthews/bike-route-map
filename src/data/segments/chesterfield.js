import {
  CHESTERFIELD_13TH_S,
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
  JONES_24TH,
} from "../intersections";
import { ROUTES } from "../routes";

const NB_PRE_ESPLANADE = [49.31219, -123.08274];
const NB_POST_ESPLANADE = [49.31256, -123.08237];
const NB_PRE_3RD = [49.3144, -123.08044];

const SB_PRE_3RD = [49.31516, -123.07989];
const SB_PRE_ESPLANADE = [49.31261, -123.0825];
const SB_POST_ESPLANADE = [49.31228, -123.08284];

const CHESTERFIELD_KEITH_S_E = [49.31795, -123.0769];
const CHESTERFIELD_KEITH_N_E = [49.31846, -123.0764];
const CHESTERFIELD_23RD = [49.33028, -123.07529];

export const CHESTERFIELD = [
  // informal connection to jones
  {
    description: "24th to jones",
    type: "quiet",
    undesignated: true,
    positions: [CHESTERFIELD_23RD, [49.33124, -123.07525], JONES_24TH],
  },

  // south end
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

  // nb
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
    description: "nb 4th to keith",
    type: "painted",
    oneWay: "required",
    positions: [
      CHESTERFIELD_4TH_E,
      [49.31681, -123.07809],
      [49.31689, -123.07791],
      [49.31714, -123.07766],
      [49.31723, -123.07763], // some of this is technically separated
      [49.31743, -123.07748],
      [49.31783, -123.07707],
      CHESTERFIELD_KEITH_S_E,
    ],
  },
  {
    routeNames: [ROUTES.chesterfield.name],
    description: "nb crossing keith",
    type: "mixed",
    oneWay: "required",
    positions: [
      CHESTERFIELD_KEITH_S_E,
      [49.31801, -123.07677],
      [49.31803, -123.07671],
      [49.31803, -123.07666],
      [49.31801, -123.07657],
      [49.31814, -123.07643],
      [49.31831, -123.07645],
      CHESTERFIELD_KEITH_N_E,
    ],
  },
  {
    routeNames: [ROUTES.chesterfield.name],
    description: "nb keith to 13th",
    type: "painted",
    oneWay: "required",
    positions: [
      CHESTERFIELD_KEITH_N_E,
      [49.31879, -123.07605],
      [49.31911, -123.07572],
      [49.31928, -123.07556],
      [49.31937, -123.07551],
      [49.31947, -123.07548],
      [49.31986, -123.07546],
      CHESTERFIELD_13TH_S,
    ],
  },

  {
    routeNames: [ROUTES.chesterfield.name],
    description: "13th to 23rd",
    type: "shared",
    positions: [
      CHESTERFIELD_13TH_S,
      [49.32419, -123.07545], // 17th
      [49.32842, -123.07534], // 21st (necklace)
      CHESTERFIELD_23RD,
    ],
  },

  // sb
  {
    routeNames: [ROUTES.chesterfield.name],
    description: "sb 13th to 4th",
    type: "shared",
    oneWay: "recommended",
    positions: [
      CHESTERFIELD_13TH_S,
      [49.31989, -123.0756],
      [49.31949, -123.0756],
      [49.31936, -123.07565],
      [49.31922, -123.07573],
      [49.31842, -123.07657],
      [49.31835, -123.07666],
      [49.31832, -123.07675],
      [49.3183, -123.07683],
      [49.31826, -123.07688],
      [49.31821, -123.0769],
      [49.31816, -123.07689],
      [49.31811, -123.07688],
      [49.31806, -123.07692],
      CHESTERFIELD_4TH_W,
    ],
  },
  {
    routeNames: [ROUTES.chesterfield.name],
    description: "sb 4th to before 3rd",
    type: "painted",
    oneWay: "required",
    positions: [CHESTERFIELD_4TH_W, [49.31551, -123.07954], SB_PRE_3RD],
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
