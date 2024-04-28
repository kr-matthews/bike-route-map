import {
  HOMER_BEACH,
  HOMER_DUNSMUIR,
  HOMER_HELMCKEN,
  HOMER_NELSON,
  HOMER_PACIFIC_N,
  HOMER_PACIFIC_S,
  HOMER_SMITHE,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const HOMER_ROBSON = [49.27944, -123.11691];

export const HOMER = [
  {
    routeNames: [ROUTES.homer.name],
    description: "south of pacific",
    type: "quiet",
    videoIds: [VIDEOS.homerNb.id],
    positions: [
      HOMER_BEACH,
      [49.27197, -123.1263],
      [49.27214, -123.12611],
      [49.2723, -123.12601],
      [49.27242, -123.12596],
      [49.27252, -123.12593],
      [49.27262, -123.12592],
      [49.27293, -123.12593],
      HOMER_PACIFIC_S,
      HOMER_PACIFIC_N,
    ],
  },
  {
    routeNames: [ROUTES.homer.name],
    description: "pacific to robson",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.homerNb.id],
    positions: [
      HOMER_PACIFIC_N,
      [49.27326, -123.12586],
      [49.27337, -123.12581],
      [49.27349, -123.12575],
      [49.2736, -123.12565],
      [49.2737, -123.12555],
      [49.27378, -123.12546],
      [49.27395, -123.12521],
      [49.27419, -123.12484],
      [49.27525, -123.12324],
      HOMER_HELMCKEN,
      HOMER_NELSON,
      HOMER_SMITHE,
      HOMER_ROBSON,
    ],
  },
  {
    routeNames: [ROUTES.homer.name],
    description: "north of robson",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.homerNb.id],
    videoIdsEndAtEnd: [VIDEOS.homerNb.id],
    positions: [HOMER_ROBSON, HOMER_DUNSMUIR],
  },
];
