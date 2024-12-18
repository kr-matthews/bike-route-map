import {
  GILBERT_RUSS_BAKER_SE_E,
  GILBERT_RUSS_BAKER_SW_W,
  NO_2_RUSS_BAKER_E,
  NO_2_RUSS_BAKER_W,
  RUSS_BAKER_INGLIS_SPLIT,
  RUSS_BAKER_INGLIS_SW_S,
  RUSS_BAKER_MILLER_NW,
  RUSS_BAKER_MILLER_SE,
  RUSS_BAKER_MILLER_SW,
  SEA_ISLAND_CONNECTOR_ARTHUR_LAING_N,
  SEA_ISLAND_CONNECTOR_ARTHUR_LAING_S,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const RUSS_BAKER_GRANT_MCCONACHIE_N = [49.19465, -123.14375];
const RUSS_BAKER_GRANT_MCCONACHIE_S = [49.19414, -123.14359];
const SB_PRE_MILLER = [49.19356, -123.14297];

export const RUSS_BAKER = [
  {
    routeNames: [ROUTES.russBaker.name],
    description: "nb: no. 2 bridge to miller",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.russBakerNb.id],
    positions: [
      NO_2_RUSS_BAKER_E,
      [49.17978, -123.15328],
      GILBERT_RUSS_BAKER_SW_W,
      [49.18109, -123.15159],
      [49.18122, -123.15142],
      GILBERT_RUSS_BAKER_SE_E,
      [49.18266, -123.14922],
      [49.18299, -123.14871],
      [49.18395, -123.14744],
      [49.18457, -123.14665],
      [49.18568, -123.14532],
      [49.18619, -123.14489],
      [49.18746, -123.14413],
      [49.18893, -123.14333],
      [49.19017, -123.14264],
      [49.19057, -123.14245],
      [49.1909, -123.14231],
      [49.19119, -123.14223],
      [49.19161, -123.14217],
      RUSS_BAKER_MILLER_SE,
    ],
  },
  {
    description: "nb: russ baker to arthur laing",
    type: "shoulder",
    oneWay: "required",
    videoIds: [VIDEOS.russBakerNb.id],
    positions: [
      RUSS_BAKER_MILLER_SE,
      [49.19285, -123.1421],
      [49.19319, -123.14208],
      [49.19365, -123.14206],
      [49.19385, -123.14203],
      [49.19408, -123.14194],
      [49.19426, -123.1418],
      [49.19444, -123.14159],
      [49.19466, -123.14122],
      [49.1948, -123.1408],
      [49.19498, -123.14015],
      SEA_ISLAND_CONNECTOR_ARTHUR_LAING_S,
    ],
  },

  {
    description: "sb: arthur laing to miller 1",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.russBakerSb.id],
    positions: [
      SEA_ISLAND_CONNECTOR_ARTHUR_LAING_N,
      [49.19517, -123.14015],
      [49.19516, -123.14051],
      [49.19517, -123.14078],
      [49.1952, -123.14103],
      [49.19525, -123.14132],
      [49.19541, -123.14203],
      [49.19544, -123.14224],
      [49.19545, -123.14247],
      [49.19544, -123.1427],
      [49.1954, -123.14287],
      [49.19532, -123.14314],
      [49.19521, -123.14336],
      [49.19507, -123.14354],
      [49.19493, -123.14366],
      [49.19483, -123.14371],
      RUSS_BAKER_GRANT_MCCONACHIE_N,
    ],
  },
  {
    description: "sb: arthur laing to miller 2",
    type: "shoulder",
    oneWay: "required",
    elevation: 1,
    videoIds: [VIDEOS.russBakerSb.id],
    positions: [
      RUSS_BAKER_GRANT_MCCONACHIE_N,
      [49.19452, -123.14376],
      [49.19434, -123.14372],
      [49.19427, -123.14368],
      RUSS_BAKER_GRANT_MCCONACHIE_S,
    ],
  },
  {
    description: "sb: arthur laing to miller 3",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.russBakerSb.id],
    positions: [
      RUSS_BAKER_GRANT_MCCONACHIE_S,
      [49.194, -123.14344],
      [49.19363, -123.14296],
      SB_PRE_MILLER,
    ],
  },
  {
    description: "sb: arthur laing to miller 4",
    type: "shoulder",
    oneWay: "required",
    videoIds: [VIDEOS.russBakerSb.id],
    positions: [
      SB_PRE_MILLER,
      [49.19349, -123.14282],
      [49.19338, -123.1427],
      [49.19321, -123.14259],
      [49.19307, -123.14253],
      [49.1929, -123.14249],
      [49.19253, -123.1425],
      RUSS_BAKER_MILLER_NW,
      RUSS_BAKER_MILLER_SW,
    ],
  },
  {
    routeNames: [ROUTES.russBaker.name],
    description: "sb: miller to no. 2 bridge",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.russBakerSb.id],
    positions: [
      RUSS_BAKER_MILLER_SW,
      [49.19151, -123.14259],
      [49.19126, -123.14263],
      [49.19105, -123.14266],
      [49.19068, -123.14281],
      [49.19006, -123.14313],
      [49.18923, -123.14359],
      [49.18762, -123.14451],
      [49.18653, -123.14509],
      [49.18631, -123.14524],
      [49.18584, -123.14567],
      [49.18416, -123.14773],
      [49.18313, -123.14908],
      [49.18264, -123.14978],
      [49.18251, -123.15008],
      [49.18179, -123.15115],
      [49.18142, -123.15166],
      RUSS_BAKER_INGLIS_SPLIT,
      [49.18088, -123.15238],
      [49.18067, -123.15264],
      [49.17991, -123.15357],
      [49.17978, -123.15373],
      RUSS_BAKER_INGLIS_SW_S,
      NO_2_RUSS_BAKER_W,
    ],
  },
];
