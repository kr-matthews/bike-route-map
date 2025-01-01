import {
  CAPILANO_CURLING_W,
  CAPILANO_FULLERTON_E,
  CAPILANO_FULLERTON_W,
  CAPILANO_HWY_1_N_SE,
  CAPILANO_HWY_1_S_NE,
  CAPILANO_MARINE_NW,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const NB_LANE_END = [49.33257, -123.11711];

export const CAPILANO = [
  // nb
  {
    routeNames: [ROUTES.capilano.name],
    description: "nb, fullerton to s hwy 1/keith",
    type: "painted",
    oneWay: "required",
    positions: [
      CAPILANO_FULLERTON_E,
      [49.32669, -123.1196],
      [49.32692, -123.11931],
      [49.32719, -123.11906],
      [49.32818, -123.11845],
      [49.32906, -123.1179],
      [49.32973, -123.11743],
      [49.32994, -123.11729],
      [49.3301, -123.11722],
      [49.33026, -123.11719],
      [49.33074, -123.11716],
      [49.33115, -123.11712],
      CAPILANO_HWY_1_S_NE,
    ],
  },
  {
    routeNames: [ROUTES.capilano.name],
    description: "nb under hwy 1 part 1",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.transCanadaHwyWb.id],
    videoIdsStartAtStart: [VIDEOS.transCanadaHwyWb.id],
    positions: [
      CAPILANO_HWY_1_S_NE,
      [49.33165, -123.11712],
      [49.33227, -123.11712],
      NB_LANE_END,
    ],
  },
  {
    routeNames: [ROUTES.capilano.name],
    description: "nb under hwy 1 part 2",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.transCanadaHwyWb.id],
    positions: [
      NB_LANE_END,
      [49.33278, -123.11708],
      [49.33307, -123.11696],
      [49.33332, -123.11679],
      [49.33365, -123.11652],
      [49.3338, -123.11639],
      [49.33383, -123.11626],
      CAPILANO_HWY_1_N_SE,
    ],
  },

  // sb
  {
    routeNames: [ROUTES.capilano.name],
    description: "sb, s hwy 1/keith to fullerton",
    type: "painted",
    oneWay: "required",
    positions: [
      CAPILANO_HWY_1_S_NE,
      [49.33139, -123.11737],
      [49.33076, -123.11739],
      [49.33025, -123.1174],
      [49.33011, -123.11743],
      [49.32997, -123.1175],
      [49.32955, -123.1178],
      [49.32933, -123.118],
      [49.32915, -123.11817],
      [49.32897, -123.11831],
      [49.32872, -123.11844],
      [49.3283, -123.11866],
      [49.32815, -123.11874],
      [49.32732, -123.11931],
      [49.32718, -123.1194],
      [49.32708, -123.11948],
      [49.32679, -123.11981],
      CAPILANO_FULLERTON_W,
    ],
  },
  {
    description: "sb curling to marine",
    type: "dedicated",
    oneWay: "required",
    positions: [
      CAPILANO_CURLING_W,
      [49.32515, -123.12168],
      [49.32485, -123.12215],
      [49.32454, -123.12246],
      CAPILANO_MARINE_NW,
    ],
  },
];
