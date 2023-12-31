import {
  BLANCA_10TH_E,
  BLANCA_10TH_NW,
  BLANCA_10TH_SW,
  WESBROOK_UNIVERSITY_NE,
  WESBROOK_UNIVERSITY_NW,
  WESBROOK_UNIVERSITY_SE,
  WESBROOK_UNIVERSITY_SW,
} from "../intersections";
import { ROUTES } from "../routes";

export const UNIVERSITY = [
  {
    routeNames: [ROUTES.university.name],
    description: "wb",
    type: "painted",
    oneWay: "required",
    positions: [
      BLANCA_10TH_E,
      BLANCA_10TH_NW,
      [49.26398, -123.21661],
      [49.26388, -123.22121],
      [49.26381, -123.22416],
      [49.26374, -123.22698],
      [49.26366, -123.23002],
      [49.26368, -123.23074],
      [49.26373, -123.23125],
      [49.26386, -123.23195],
      [49.26402, -123.2325],
      [49.26428, -123.23312],
      [49.26532, -123.23478],
      [49.26577, -123.23546],
      [49.26593, -123.23574],
      [49.26606, -123.23599],
      [49.26639, -123.23673],
      [49.26658, -123.2373],
      [49.26679, -123.23805],
      [49.26693, -123.23875],
      [49.26701, -123.23935],
      [49.26708, -123.24009],
      [49.26709, -123.24083],
      [49.26706, -123.24172],
      [49.26696, -123.24248],
      [49.26671, -123.24416],
      WESBROOK_UNIVERSITY_NE,
      WESBROOK_UNIVERSITY_NW,
    ],
  },
  {
    routeNames: [ROUTES.university.name],
    description: "loop",
    type: "quiet",
    oneWay: "required",
    positions: [
      WESBROOK_UNIVERSITY_NW,
      [49.2662, -123.24678],
      [49.26611, -123.24734],
      [49.26592, -123.24866],
      [49.26587, -123.24937],
      [49.26582, -123.24945],
      [49.26576, -123.24944],
      [49.26571, -123.24939],
      [49.26569, -123.2493],
      [49.2658, -123.24863],
      [49.26602, -123.24721],
      [49.26622, -123.24582],
      WESBROOK_UNIVERSITY_SW,
    ],
  },
  {
    routeNames: [ROUTES.university.name],
    description: "eb",
    type: "painted",
    oneWay: "required",
    positions: [
      WESBROOK_UNIVERSITY_SW,
      WESBROOK_UNIVERSITY_SE,
      [49.26644, -123.24464],
      [49.26653, -123.244],
      [49.26679, -123.24235],
      [49.26686, -123.24172],
      [49.2669, -123.24111],
      [49.2669, -123.24051],
      [49.26688, -123.23997],
      [49.26684, -123.23961],
      [49.26678, -123.23905],
      [49.26668, -123.23848],
      [49.2665, -123.23776],
      [49.26626, -123.23702],
      [49.26601, -123.23646],
      [49.26569, -123.2358],
      [49.26548, -123.23545],
      [49.26415, -123.23337],
      [49.26391, -123.2328],
      [49.26373, -123.23227],
      [49.26362, -123.23184],
      [49.26353, -123.23131],
      [49.26348, -123.23073],
      [49.26347, -123.23001],
      [49.26353, -123.22698],
      [49.2636, -123.22414],
      [49.26367, -123.22124],
      BLANCA_10TH_SW,
      BLANCA_10TH_E,
    ],
  },
];
