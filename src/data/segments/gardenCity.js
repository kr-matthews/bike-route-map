import {
  GARDEN_CITY_GRANVILLE_NE,
  GARDEN_CITY_GRANVILLE_NW,
  GARDEN_CITY_PATTERSON_E,
  GARDEN_CITY_SB_ROAD_START,
  GARDEN_CITY_SB_START,
  GARDEN_CITY_SEA_ISLAND_SE,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const GARDEN_CITY_CITATION = [49.16518, -123.12488];
const GARDEN_CITY_GRANVILLE_N = [49.16311, -123.12566];
const GARDEN_CITY_GRANVILLE_S = [49.16259, -123.12543];
const GARDEN_CITY_GRANVILLE_SE = [49.16288, -123.1253];
const GARDEN_CITY_FRANCIS_SS = [49.14774, -123.12516];

export const GARDEN_CITY = [
  // north of granville
  {
    routeNames: [ROUTES.gardenCity.name],
    description: "sb to citation shortcut",
    oneWay: "required",
    videos: [VIDEOS.gardenCitySb],
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
      [49.17729, -123.12474],
      [49.17381, -123.12477],
      [49.17013, -123.12478],
      [49.16771, -123.1248],
      [49.16645, -123.12483],
      GARDEN_CITY_CITATION,
    ],
  },
  {
    routeNames: [ROUTES.gardenCity.name],
    description: "sb past citation",
    oneWay: "required",
    videos: [VIDEOS.gardenCitySb],
    positions: [
      GARDEN_CITY_CITATION,
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
    videos: [VIDEOS.gardenCitySb],
    positions: [GARDEN_CITY_GRANVILLE_NW, GARDEN_CITY_GRANVILLE_N],
  },
  {
    description: "sb to granville eb",
    positions: [
      GARDEN_CITY_GRANVILLE_N,
      [49.1629, -123.1254],
      GARDEN_CITY_GRANVILLE_SE,
    ],
  },
  {
    routeNames: [ROUTES.gardenCity.name],
    description: "sb through granville",
    oneWay: "required",
    videos: [VIDEOS.gardenCitySb],
    positions: [
      GARDEN_CITY_GRANVILLE_N,
      [49.16302, -123.1257],
      [49.1629, -123.1257],
      [49.16275, -123.1255],
      GARDEN_CITY_GRANVILLE_S,
    ],
  },

  {
    routeNames: [ROUTES.gardenCity.name],
    description: "nb from granville",
    oneWay: "required",
    videos: [VIDEOS.gardenCityNb],
    positions: [
      GARDEN_CITY_GRANVILLE_S,
      [49.16277, -123.12538],
      GARDEN_CITY_GRANVILLE_SE,
      [49.16314, -123.12513],
      GARDEN_CITY_GRANVILLE_NE,
      [49.16349, -123.12484],
      [49.16364, -123.12473],
      [49.16378, -123.12466],
      [49.16401, -123.12457],
      [49.16424, -123.12452],
      [49.1644, -123.12451],
      [49.16644, -123.12448],
      [49.16864, -123.12446],
      [49.17002, -123.12444],
      [49.1702, -123.12444],
      [49.17382, -123.12443],
      [49.17729, -123.1244],
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
      [49.19014, -123.12459],
      [49.19017, -123.12442],
      GARDEN_CITY_PATTERSON_E,
      [49.19076, -123.12388],
      [49.19086, -123.12395],
      GARDEN_CITY_SEA_ISLAND_SE,
    ],
  },

  // south of granville
  {
    routeNames: [ROUTES.gardenCity.name],
    description: "williams to francis",
    videos: [VIDEOS.gardenCityNb, VIDEOS.gardenCitySb],
    positions: [
      [49.14087, -123.12528],
      [49.14145, -123.12527],
      [49.14359, -123.12521],
      [49.14746, -123.12514],
      GARDEN_CITY_FRANCIS_SS,
    ],
  },
  {
    routeNames: [ROUTES.gardenCity.name],
    description: "francis to granville",
    type: "uncomfortable",
    videos: [VIDEOS.gardenCityNb, VIDEOS.gardenCitySb],
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
