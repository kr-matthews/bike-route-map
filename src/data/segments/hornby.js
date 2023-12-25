import {
  BURRARD_CANADA_PLACE,
  BURRARD_HASTINGS,
  HORNBY_BEACH,
  HORNBY_DRAKE,
  HORNBY_DUNSMUIR,
  HORNBY_HELMCKEN_E,
  HORNBY_HELMCKEN_SE,
  HORNBY_NELSON_E,
  HORNBY_PACIFIC_NE,
  HORNBY_PACIFIC_SE,
  HORNBY_SEABREEZE,
  HORNBY_SMITHE,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const HORNBY = [
  {
    routeNames: [ROUTES.hornby.name],
    description: "primary",
    videos: [VIDEOS.hornbyNb.id],
    videosStartAtStart: [VIDEOS.hornbyNb.id],
    positions: [
      HORNBY_SEABREEZE,
      [49.27521, -123.13304],
      [49.27523, -123.13292],
      HORNBY_BEACH,
      [49.27564, -123.1323],
      HORNBY_PACIFIC_SE,
      HORNBY_PACIFIC_NE,
      [49.27663, -123.1308],
      HORNBY_DRAKE,
      [49.27842, -123.12811],
      HORNBY_HELMCKEN_SE,
      HORNBY_HELMCKEN_E,
      HORNBY_NELSON_E,
      HORNBY_SMITHE,
      [49.28261, -123.12176],
      [49.28289, -123.12134],
      [49.28291, -123.12123],
      [49.28314, -123.12088],
      [49.28323, -123.12083],
      [49.28375, -123.12003],
      HORNBY_DUNSMUIR,
      [49.28591, -123.11678],
      [49.28659, -123.11574],
      [49.28704, -123.11643],
      BURRARD_HASTINGS,
    ],
  },
  {
    routeNames: [ROUTES.hornby.name],
    description: "north end along burrard",
    type: "dedicated",
    videos: [VIDEOS.hornbyNb.id, VIDEOS.burrardSb.id],
    positions: [
      BURRARD_HASTINGS,
      [49.2876, -123.11649],
      [49.28761, -123.11642],
      [49.2877, -123.11627],
      [49.28798, -123.11583],
      [49.28799, -123.11578],
      [49.28808, -123.1157],
      [49.28821, -123.11555],
      BURRARD_CANADA_PLACE,
    ],
  },
];
