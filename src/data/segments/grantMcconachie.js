import {
  AVIATION_N_SERVICE_NW,
  AVIATION_N_SERVICE_SW_W,
  AVIATION_NB_JOIN,
  GRANT_MCCONACHIE_EB_END,
  GRANT_MCCONACHIE_WB_START,
  MILLER_GRANT_MCCONACHIE,
  TEMPLETON_GRANT_MCCONACHIE_NE,
  TEMPLETON_GRANT_MCCONACHIE_NE_E,
  TEMPLETON_GRANT_MCCONACHIE_NW,
  TEMPLETON_GRANT_MCCONACHIE_NW_N,
  TEMPLETON_GRANT_MCCONACHIE_NW_W,
  TEMPLETON_GRANT_MCCONACHIE_SE,
  TEMPLETON_GRANT_MCCONACHIE_SW,
  TEMPLETON_GRANT_MCCONACHIE_SW_S,
  TEMPLETON_GRANT_MCCONACHIE_SW_W,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const AVIATION_GRANT_MCCONACHIE_SW = [49.19268, -123.16701];
const AVIATION_SB_SHOULDER_START = [49.19343, -123.16695];
const AVIATION_NB_SHARE_START = [49.19319, -123.16665];

export const GRANT_MCCONACHIE = [
  // connections at n service
  {
    description: "eb join from n service 1",
    type: "shared",
    oneWay: "required",
    positions: [
      AVIATION_N_SERVICE_SW_W,
      [49.19367, -123.16704],
      [49.19364, -123.16696],
      [49.19359, -123.16691],
      [49.19354, -123.1669],
      AVIATION_SB_SHOULDER_START,
    ],
  },
  {
    description: "eb join from n service 2",
    type: "shoulder",
    oneWay: "required",
    positions: [
      AVIATION_SB_SHOULDER_START,
      [49.19327, -123.16699],
      [49.19313, -123.16701],
      [49.19303, -123.16697],
      [49.19295, -123.16697],
      AVIATION_GRANT_MCCONACHIE_SW,
    ],
  },
  // {
  //   description: "wb continue back along n service",
  //   type: "shoulder",
  //   oneWay: "required",
  //   positions: [
  //     AVIATION_NB_SHARE_START,
  //     [49.1934, -123.16663],
  //     [49.19349, -123.1666],
  //     [49.19354, -123.16657],
  //     [49.19357, -123.16653],
  //     [49.19359, -123.16649],
  //     AVIATION_N_SERVICE_SE_E,
  //   ],
  // },

  // some templeton slips
  {
    description: "wb join from templeton sb",
    type: "shoulder",
    oneWay: "required",
    positions: [
      TEMPLETON_GRANT_MCCONACHIE_NW_N,
      [49.1934, -123.151],
      [49.19334, -123.15108],
      TEMPLETON_GRANT_MCCONACHIE_NW_W,
    ],
  },
  {
    description: "eb split to templeton sb",
    type: "shoulder",
    oneWay: "required",
    positions: [
      TEMPLETON_GRANT_MCCONACHIE_SW_W,
      [49.1929, -123.15096],
      [49.19286, -123.1509],
      [49.19282, -123.15087],
      TEMPLETON_GRANT_MCCONACHIE_SW_S,
    ],
  },

  // eb
  {
    routeNames: [ROUTES.grantMcconachie.name],
    description: "eb",
    type: "shoulder",
    oneWay: "required",
    videoIds: [VIDEOS.grantMcConachieEb.id],
    videoIdsStartAtStart: [VIDEOS.grantMcConachieEb.id],
    positions: [
      MILLER_GRANT_MCCONACHIE,
      [49.19174, -123.17493],
      [49.19173, -123.17464],
      [49.19173, -123.17442],
      [49.19177, -123.174],
      [49.19243, -123.16984],
      [49.19251, -123.16927],
      [49.19258, -123.16871],
      [49.19262, -123.16833],
      [49.19264, -123.16798],
      [49.19265, -123.16732],
      [49.19268, -123.16718],
      AVIATION_GRANT_MCCONACHIE_SW,
      [49.19268, -123.16681],
      [49.19267, -123.16641],
      [49.19265, -123.16106],
      [49.19264, -123.15782],
      [49.19263, -123.15658],
      [49.19263, -123.15562],
      [49.19264, -123.15513],
      [49.19265, -123.15474],
      [49.19267, -123.15422],
      [49.19271, -123.15344],
      [49.19276, -123.15279],
      [49.19281, -123.15207],
      [49.19285, -123.15171],
      [49.19291, -123.15113],
      TEMPLETON_GRANT_MCCONACHIE_SW_W,
      [49.19297, -123.15097],
      TEMPLETON_GRANT_MCCONACHIE_SW,
    ],
  },
  {
    routeNames: [ROUTES.grantMcconachie.name],
    description: "eb: to sea island way",
    type: "shoulder",
    oneWay: "required",
    videoIds: [VIDEOS.seaIslandWayEb25.id, VIDEOS.grantMcConachieEb.id],
    videoIdsStartAtStart: [VIDEOS.seaIslandWayEb25.id],
    videoIdsEndAtEnd: [VIDEOS.grantMcConachieEb.id],
    positions: [
      TEMPLETON_GRANT_MCCONACHIE_SW,
      TEMPLETON_GRANT_MCCONACHIE_SE,
      [49.19317, -123.14979],
      [49.19327, -123.14899],
      [49.19341, -123.1479],
      [49.19343, -123.14756],
      [49.19344, -123.1473],
      [49.19342, -123.14706],
      [49.19337, -123.14667],
      [49.19327, -123.14629],
      [49.19309, -123.14574],
      GRANT_MCCONACHIE_EB_END,
    ],
  },

  // wb
  {
    routeNames: [ROUTES.grantMcconachie.name],
    description: "wb",
    type: "shoulder",
    oneWay: "required",
    videoIds: [VIDEOS.grantMcConachieWb.id],
    positions: [
      GRANT_MCCONACHIE_WB_START,
      [49.19604, -123.14272],
      [49.19594, -123.14305],
      [49.19585, -123.14326],
      [49.19574, -123.14347],
      [49.19563, -123.14362],
      [49.19531, -123.14402],
      [49.19493, -123.14442],
      [49.19469, -123.14468],
      [49.19455, -123.14488],
      [49.19442, -123.1451],
      [49.19434, -123.1453],
      [49.19422, -123.14567],
      [49.19404, -123.14665],
      [49.19358, -123.14928],
      TEMPLETON_GRANT_MCCONACHIE_NE_E,
      [49.19339, -123.15026],
      TEMPLETON_GRANT_MCCONACHIE_NE,
      TEMPLETON_GRANT_MCCONACHIE_NW,
      [49.19327, -123.15105],
      TEMPLETON_GRANT_MCCONACHIE_NW_W,
      [49.19324, -123.1513],
      [49.1932, -123.15151],
      [49.19314, -123.15204],
      [49.19308, -123.15263],
      [49.19302, -123.15339],
      [49.19297, -123.15416],
      [49.19294, -123.15473],
      [49.19293, -123.1552],
      [49.19292, -123.15571],
      [49.19291, -123.15684],
      [49.19291, -123.15813],
      [49.19293, -123.16157],
      [49.19294, -123.16418],
      [49.19294, -123.16475],
      [49.19297, -123.16556],
      [49.19297, -123.16634],
      [49.19298, -123.16646],
      [49.193, -123.16653],
      [49.19302, -123.16658],
      [49.19305, -123.16661],
      [49.19308, -123.16663],
      AVIATION_NB_SHARE_START,
    ],
  },
  {
    routeNames: [ROUTES.grantMcconachie.name],
    description: "wb continue to terminal via n service",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.grantMcConachieWb.id],
    positions: [
      AVIATION_NB_SHARE_START,
      [49.19328, -123.16669],
      AVIATION_NB_JOIN,
      [49.1936, -123.16669],
      AVIATION_N_SERVICE_NW,
    ],
  },
];
