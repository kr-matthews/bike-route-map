import {
  GARDEN_CITY_ALDERBRIDGE_NE,
  GARDEN_CITY_ALDERBRIDGE_NW,
  GARDEN_CITY_CITATION_W,
  GARDEN_CITY_GRANVILLE_NE,
  GARDEN_CITY_GRANVILLE_NW,
  GARDEN_CITY_GRANVILLE_S,
  GARDEN_CITY_GRANVILLE_W,
  GARDEN_CITY_PATTERSON_E,
  GARDEN_CITY_SB_ROAD_START,
  GARDEN_CITY_SB_START,
  GARDEN_CITY_SEA_ISLAND_SE,
  GARDEN_CITY_WESTMINSTER_NE,
  GARDEN_CITY_WESTMINSTER_SE,
  GARDEN_CITY_WILLIAMS_NE,
  GARDEN_CITY_WILLIAMS_NW,
  GARDEN_CITY_WILLIAMS_S,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const GARDEN_CITY_GRANVILLE_N = [49.16311, -123.12566];
const GARDEN_CITY_GRANVILLE_SE = [49.16288, -123.1253];
const GARDEN_CITY_FRANCIS_SS = [49.14784, -123.12516];
const GARDEN_CITY_GRANVILLE_E = [49.16301, -123.1252];
const NB_LANE_END = [49.19014, -123.12459];
const AFTER_SEA_ISLAND_RAMP = [49.19086, -123.12395];
const NB_AFTER_WILLIAMS = [49.14139, -123.1252];
const SB_BEFORE_WILLIAMS = [49.14139, -123.12538];

export const GARDEN_CITY = [
  // north of granville
  {
    routeNames: [ROUTES.gardenCity.name],
    description: "sb to citation shortcut",
    type: "painted",
    oneWay: "required",
    videos: [VIDEOS.gardenCitySb.id],
    positions: [
      GARDEN_CITY_SB_START,
      GARDEN_CITY_SB_ROAD_START,
      [49.19004, -123.12493],
      [49.18989, -123.12495],
      [49.18971, -123.12496],
      [49.18846, -123.12496],
      [49.18779, -123.12495],
      [49.1874, -123.12494],
      [49.18716, -123.12491],
      [49.18672, -123.1248],
      [49.18657, -123.12474],
      [49.18634, -123.1247],
      [49.18467, -123.12471],
      [49.18174, -123.12474],
      GARDEN_CITY_ALDERBRIDGE_NW,
      [49.17729, -123.12474],
      [49.17381, -123.12477],
      [49.17013, -123.12478],
      [49.16771, -123.1248],
      [49.16645, -123.12483],
      GARDEN_CITY_CITATION_W,
    ],
  },
  {
    routeNames: [ROUTES.gardenCity.name],
    description: "sb past citation",
    type: "painted",
    oneWay: "required",
    videos: [VIDEOS.gardenCitySb.id],
    positions: [
      GARDEN_CITY_CITATION_W,
      [49.1643, -123.12488],
      [49.1641, -123.1249],
      [49.16393, -123.12496],
      [49.16378, -123.12505],
      [49.16363, -123.12516],
      [49.16349, -123.12529],
      [49.16332, -123.12549],
      GARDEN_CITY_GRANVILLE_NW,
    ],
  },
  {
    routeNames: [ROUTES.gardenCity.name],
    description: "sb to granville split",
    type: "mixed",
    videos: [VIDEOS.gardenCitySb.id],
    positions: [GARDEN_CITY_GRANVILLE_NW, GARDEN_CITY_GRANVILLE_N],
  },
  {
    description: "sb to granville eb",
    type: "mixed",
    positions: [
      GARDEN_CITY_GRANVILLE_N,
      [49.1629, -123.1254],
      GARDEN_CITY_GRANVILLE_SE,
    ],
  },
  {
    routeNames: [ROUTES.gardenCity.name],
    description: "sb through granville",
    type: "shared",
    oneWay: "required",
    videos: [VIDEOS.gardenCitySb.id],
    positions: [
      GARDEN_CITY_GRANVILLE_N,
      [49.16302, -123.1257],
      GARDEN_CITY_GRANVILLE_W,
      [49.16275, -123.1255],
      GARDEN_CITY_GRANVILLE_S,
    ],
  },
  {
    description: "from granville to nb",
    oneWay: "required",
    type: "painted",
    positions: [
      GARDEN_CITY_GRANVILLE_W,
      [49.16308, -123.12534],
      GARDEN_CITY_GRANVILLE_NE,
    ],
  },

  {
    routeNames: [ROUTES.gardenCity.name],
    description: "nb through granville",
    type: "shared",
    oneWay: "required",
    videos: [VIDEOS.gardenCityNb.id],
    positions: [
      GARDEN_CITY_GRANVILLE_S,
      [49.16277, -123.12538],
      GARDEN_CITY_GRANVILLE_SE,
      GARDEN_CITY_GRANVILLE_E,
    ],
  },
  {
    routeNames: [ROUTES.gardenCity.name],
    description: "nb from granville",
    type: "painted",
    oneWay: "required",
    videos: [VIDEOS.gardenCityNb.id],
    positions: [
      GARDEN_CITY_GRANVILLE_E,
      GARDEN_CITY_GRANVILLE_NE,
      [49.16349, -123.12484],
      [49.16364, -123.12473],
      [49.16378, -123.12466],
      [49.16401, -123.12457],
      [49.16424, -123.12452],
      [49.1644, -123.12451],
      [49.16644, -123.12448],
      [49.16864, -123.12446],
      GARDEN_CITY_WESTMINSTER_SE,
      GARDEN_CITY_WESTMINSTER_NE,
      [49.17382, -123.12443],
      [49.17729, -123.1244],
      GARDEN_CITY_ALDERBRIDGE_NE,
      [49.18174, -123.12438],
      [49.18467, -123.12435],
      [49.18569, -123.12435],
      [49.18613, -123.12436],
      [49.18632, -123.12441],
      [49.18691, -123.12458],
      [49.18706, -123.12461],
      [49.18719, -123.12461],
      [49.1878, -123.12462],
      [49.18993, -123.12462],
      NB_LANE_END,
    ],
  },
  {
    description: "patterson",
    type: "comfortable",
    oneWay: "recommended",
    videos: [VIDEOS.gardenCityNb.id],
    positions: [NB_LANE_END, [49.19017, -123.12442], GARDEN_CITY_PATTERSON_E],
  },
  {
    description: "patterson to sea island",
    type: "mixed",
    videos: [VIDEOS.gardenCityNb.id],
    positions: [
      GARDEN_CITY_PATTERSON_E,
      [49.19076, -123.12388],
      AFTER_SEA_ISLAND_RAMP,
    ],
  },
  {
    description: "nb: sea island sidewalk",
    type: "other",
    videos: [VIDEOS.gardenCityNb.id],
    positions: [AFTER_SEA_ISLAND_RAMP, GARDEN_CITY_SEA_ISLAND_SE],
  },

  // south of granville
  {
    routeNames: [ROUTES.gardenCity.name],
    description: "nb: around williams",
    type: "shared",
    oneWay: "required",
    videos: [VIDEOS.gardenCityNb.id],
    videosStartAtStart: [VIDEOS.gardenCityNb.id],
    positions: [
      GARDEN_CITY_WILLIAMS_S,
      GARDEN_CITY_WILLIAMS_NE,
      NB_AFTER_WILLIAMS,
    ],
  },
  {
    routeNames: [ROUTES.gardenCity.name],
    description: "nb: williams to francis",
    type: "painted",
    oneWay: "required",
    videos: [VIDEOS.gardenCityNb.id],
    positions: [
      NB_AFTER_WILLIAMS,
      [49.14358, -123.12513],
      [49.14774, -123.12505],
      GARDEN_CITY_FRANCIS_SS,
    ],
  },
  {
    routeNames: [ROUTES.gardenCity.name],
    description: "sb: francis to williams",
    type: "combined",
    oneWay: "required",
    videos: [VIDEOS.gardenCitySb.id],
    positions: [
      GARDEN_CITY_FRANCIS_SS,
      [49.14776, -123.12522],
      [49.14555, -123.12531],
      [49.14358, -123.12535],
      SB_BEFORE_WILLIAMS,
    ],
  },
  {
    routeNames: [ROUTES.gardenCity.name],
    description: "sb: around williams",
    type: "shared",
    oneWay: "required",
    videos: [VIDEOS.gardenCitySb.id],
    videosEndAtEnd: [VIDEOS.gardenCitySb.id],
    positions: [SB_BEFORE_WILLIAMS, GARDEN_CITY_WILLIAMS_NW],
  },
  {
    routeNames: [ROUTES.gardenCity.name],
    description: "sb: crossing williams",
    type: "shared",
    oneWay: "required",
    positions: [GARDEN_CITY_WILLIAMS_NW, GARDEN_CITY_WILLIAMS_S],
  },
  {
    routeNames: [ROUTES.gardenCity.name],
    description: "francis to granville",
    type: "shared",
    videos: [VIDEOS.gardenCityNb.id, VIDEOS.gardenCitySb.id],
    positions: [
      GARDEN_CITY_FRANCIS_SS,
      [49.14821, -123.12517],
      [49.15181, -123.12526],
      [49.15546, -123.12535],
      [49.15729, -123.12536],
      [49.16084, -123.12541],
      GARDEN_CITY_GRANVILLE_S,
    ],
  },
];
