import {
  BUSWELL_GRANVILLE_N,
  NO_3_ACKROYD_W,
  NO_3_BRIDGEPORT,
  NO_3_BROWNGATE,
  NO_3_CAMBIE_SE,
  NO_3_SEA_ISLAND_SW_S_PRE,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const PRE_NO_3_COOK = [49.16655, -123.1349];
const NO_3_COOK_NE = [49.16656, -123.13644];
const NO_3_BUS_MALL_SE = [49.16743, -123.13643];
const NO_3_SEA_ISLAND_SW_S = [49.19069, -123.13087];
const SEXSMITH_BECKWITH_W = [49.19381, -123.12821];
const SMITH_BECKWITH = [49.19381, -123.1254];

export const NO_3 = [
  // south end
  {
    description: "connection via buswell from granville",
    type: "shared",
    hideUnlessVideo: true,
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
    positions: [
      NO_3_SEA_ISLAND_SW_S,
      [49.1904, -123.13114],
      [49.19038, -123.13118],
      [49.19022, -123.13134],
      [49.19017, -123.13135],
      [49.18985, -123.13166],
      [49.18906, -123.13242],
    ],
  },
  {
    routeNames: [ROUTES.no3.name],
    description: "sb: alderbridge to cook",
    type: "painted",
    oneWay: "required",
    positions: [
      [49.17722, -123.13679],
      [49.17541, -123.13688],
      [49.17493, -123.13691],
      [49.17384, -123.13689],
      NO_3_ACKROYD_W,
      [49.17122, -123.1367],
      [49.17021, -123.1367],
      [49.16881, -123.13672],
      [49.1677, -123.13671],
      [49.16664, -123.13673],
    ],
  },
];
