import {
  BUSWELL_GRANVILLE_N,
  NO_3_ACKROYD_W,
  NO_3_BRIDGEPORT,
  NO_3_BROWNGATE,
  NO_3_CAMBIE_SE,
  NO_3_CAMBIE_SW,
  NO_3_GRANVILLE_NW,
  NO_3_SEA_ISLAND_SW_S_PRE,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const PRE_NO_3_COOK = [49.16655, -123.1349];
const NO_3_COOK_NE = [49.16656, -123.13644];
const NO_3_BUS_MALL_SE = [49.16743, -123.13643];
const NO_3_SEA_ISLAND_SW_S = [49.19069, -123.13087];
const NO_3_CAPSTAN_NW = [49.189, -123.13254];
const NO_3_ALDERBRIDGE_SW = [49.17722, -123.13679];
const NO_3_COOK_NW = [49.16667, -123.13668];
const SEXSMITH_BECKWITH_W = [49.19381, -123.12821];
const SMITH_BECKWITH = [49.19381, -123.1254];

export const NO_3 = [
  // south end
  {
    description: "connection via buswell from granville",
    type: "shared",
    oneWay: "recommended",
    undesignated: true,
    videoIds: [VIDEOS.no3Nb.id],
    videoIdsStartAtStart: [VIDEOS.no3Nb.id],
    positions: [
      BUSWELL_GRANVILLE_N,
      [49.16349, -123.13375],
      [49.1647, -123.1337],
      [49.16645, -123.13368],
      [49.16651, -123.13373],
      [49.16652, -123.13477],
      PRE_NO_3_COOK,
    ],
  },
  {
    description: "cook wb",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.no3Nb.id],
    positions: [
      PRE_NO_3_COOK,
      [49.16657, -123.13504],
      [49.16657, -123.13621],
      [49.16656, -123.13628],
      NO_3_COOK_NE,
    ],
  },
  // north end
  {
    description: "no. 3 north tip, & beckwith",
    type: "shared",
    videoIds: [VIDEOS.no3Sb.id],
    positions: [
      NO_3_BRIDGEPORT,
      [49.19381, -123.12949],
      SEXSMITH_BECKWITH_W,
      SMITH_BECKWITH,
    ],
  },
  {
    description: "smith & van horne tip",
    type: "quiet",
    videoIds: [VIDEOS.no3Sb.id],
    videoIdsStartAtEnd: [VIDEOS.no3Sb.id],
    positions: [
      SMITH_BECKWITH,
      [49.19463, -123.1254],
      [49.1947, -123.12531],
      [49.1948, -123.12497], // lazy
    ],
  },
  {
    description: "to bridgeport station",
    type: "comfortable",
    positions: [
      SEXSMITH_BECKWITH_W,
      [49.19424, -123.12821],
      [49.19428, -123.12803],
      [49.19464, -123.12803],
      [49.19478, -123.12787],
      [49.19478, -123.12723],
      [49.19483, -123.1271],
      [49.1948, -123.12701],
      [49.19475, -123.12697],
    ],
  },

  {
    routeNames: [ROUTES.no3.name],
    description: "nb: block after cook",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.no3Nb.id],
    positions: [
      NO_3_COOK_NE,
      [49.16665, -123.13644],
      [49.16669, -123.13641],
      [49.16737, -123.1364],
      NO_3_BUS_MALL_SE,
    ],
  },
  {
    routeNames: [ROUTES.no3.name],
    description: "nb: bus mall to browngate",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.no3Nb.id],
    positions: [
      NO_3_BUS_MALL_SE,
      [49.16881, -123.13642],
      [49.1702, -123.1364],
      [49.17104, -123.1364],
      [49.17202, -123.13647],
      [49.17384, -123.13657],
      [49.17449, -123.13663],
      [49.17493, -123.13663],
      [49.17541, -123.13659],
      [49.1763, -123.13653],
      [49.17737, -123.13651],
      [49.17737, -123.13651],
      [49.17838, -123.13651],
      [49.17975, -123.13649],
      [49.18123, -123.13649],
      NO_3_BROWNGATE,
    ],
  },
  {
    routeNames: [ROUTES.no3.name],
    description: "nb: browngate to cambie",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.no3Nb.id, VIDEOS.odlinWb.id],
    videoIdsEndAtEnd: [VIDEOS.odlinWb.id],
    positions: [
      NO_3_BROWNGATE,
      [49.1836, -123.1365],
      [49.18436, -123.13647],
      NO_3_CAMBIE_SE,
    ],
  },
  {
    routeNames: [ROUTES.no3.name],
    description: "nb: cambie to bridgeport",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.no3Nb.id],
    videoIdsEndAtEnd: [VIDEOS.no3Nb.id],
    positions: [
      NO_3_CAMBIE_SE,
      [49.18466, -123.13634],
      [49.18496, -123.13616],
      [49.18736, -123.1338],
      [49.18881, -123.13236],
      [49.19064, -123.13057],
      [49.1909, -123.13031],
      [49.19119, -123.12996],
      [49.19129, -123.1298],
      [49.1916, -123.12961],
      [49.19183, -123.12947],
      NO_3_BRIDGEPORT,
    ],
  },
  {
    routeNames: [ROUTES.no3.name],
    description: "sb: bridgeport to sea island",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.no3Sb.id],
    positions: [
      NO_3_BRIDGEPORT,
      [49.19183, -123.12978],
      [49.19161, -123.12995],
      [49.19114, -123.13045],
      [49.1909, -123.13067],
      NO_3_SEA_ISLAND_SW_S_PRE,
      NO_3_SEA_ISLAND_SW_S,
    ],
  },
  {
    routeNames: [ROUTES.no3.name],
    description: "sb: sea island to capstan",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.no3Sb.id],
    positions: [
      NO_3_SEA_ISLAND_SW_S,
      [49.19048, -123.1311],
      [49.19041, -123.13121],
      [49.19029, -123.13132],
      [49.19021, -123.13138],
      [49.18998, -123.13163],
      [49.18977, -123.13185],
      [49.18959, -123.13204],
      [49.18942, -123.1322],
      [49.18924, -123.13236],
      NO_3_CAPSTAN_NW,
    ],
  },
  {
    routeNames: [ROUTES.no3.name],
    description: "sb: capstan to alderbridge",
    type: "shared",
    oneWay: "required",
    undesignated: true,
    videoIds: [VIDEOS.no3Sb.id],
    positions: [
      NO_3_CAPSTAN_NW,
      [49.18888, -123.13261],
      [49.18752, -123.13391],
      [49.1853, -123.1361],
      [49.1851, -123.13629],
      [49.18501, -123.13637],
      [49.18493, -123.13643],
      [49.18486, -123.13648],
      [49.18481, -123.13651],
      NO_3_CAMBIE_SW,
      [49.18437, -123.13669],
      [49.18411, -123.13671],
      [49.18341, -123.13676],
      [49.18301, -123.13677],
      [49.18275, -123.13677],
      [49.18251, -123.13677],
      [49.18221, -123.13675],
      [49.18182, -123.13671],
      [49.18143, -123.13669],
      [49.18113, -123.13668],
      [49.18072, -123.1367],
      [49.18025, -123.13673],
      [49.17991, -123.13675],
      [49.1796, -123.13676],
      [49.17914, -123.13675],
      [49.17896, -123.13673],
      [49.17882, -123.1367],
      [49.17869, -123.13669],
      [49.17754, -123.13669],
      NO_3_ALDERBRIDGE_SW,
    ],
  },
  {
    routeNames: [ROUTES.no3.name],
    description: "sb: alderbridge to cook",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.no3Sb.id],
    positions: [
      NO_3_ALDERBRIDGE_SW,
      [49.17687, -123.13677],
      [49.17657, -123.13677],
      [49.17615, -123.13681],
      [49.17562, -123.13685],
      [49.1753, -123.13689],
      [49.17504, -123.1369],
      [49.17429, -123.1369],
      [49.17403, -123.13688],
      [49.17362, -123.13686],
      [49.17295, -123.13681],
      [49.17228, -123.13678],
      NO_3_ACKROYD_W,
      [49.17184, -123.13673],
      [49.17137, -123.1367],
      [49.17102, -123.13668],
      [49.17049, -123.13667],
      [49.17004, -123.13668],
      [49.16943, -123.13669],
      [49.16897, -123.13668],
      [49.16871, -123.13667],
      [49.1683, -123.13668],
      [49.16787, -123.13668],
      [49.16752, -123.13668],
      NO_3_COOK_NW,
    ],
  },
  {
    routeNames: [ROUTES.no3.name],
    description: "sb: cook to granville",
    type: "shared",
    oneWay: "required",
    undesignated: true,
    videoIds: [VIDEOS.no3Sb.id],
    videoIdsEndAtEnd: [VIDEOS.no3Sb.id],
    positions: [
      NO_3_COOK_NW,
      [49.16638, -123.13667],
      [49.16487, -123.13666],
      [49.16456, -123.13667],
      [49.16356, -123.13668],
      [49.16293, -123.13668],
      NO_3_GRANVILLE_NW,
    ],
  },
];
