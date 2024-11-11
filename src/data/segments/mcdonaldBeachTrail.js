import {
  MCDONALD_BEACH_PATH_GRAUER_N,
  MCDONALD_BEACH_PATH_GRAUER_S,
  MCDONALD_FERGUSON_NW,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const MCDONALD_BEACH_TRAIL_W = [49.21249, -123.1695];

export const MCDONALD_BEACH_TRAIL = [
  {
    description: "mcdonald rd",
    type: "quiet",
    videoIds: [VIDEOS.mcdonaldBeachTrailWb.id],
    videoIdsEndAtStart: [VIDEOS.mcdonaldBeachTrailWb.id],
    positions: [
      MCDONALD_FERGUSON_NW,
      [49.20659, -123.16982],
      [49.21214, -123.16983],
      [49.21253, -123.16985],
      [49.21262, -123.16982],
      [49.21266, -123.16976],
      [49.21266, -123.16968],
      [49.21264, -123.16962],
      [49.21253, -123.16949],
      MCDONALD_BEACH_TRAIL_W,
    ],
  },
  {
    description: "crossing grauer",
    type: "shared",
    positions: [MCDONALD_BEACH_PATH_GRAUER_N, MCDONALD_BEACH_PATH_GRAUER_S],
  },
  {
    routeNames: [ROUTES.mcdonaldBeachTrail.name],
    description: "trail",
    type: "mixed",
    videoIds: [VIDEOS.mcdonaldBeachTrailWb.id],
    positions: [
      MCDONALD_BEACH_TRAIL_W,
      [49.2124, -123.16956],
      [49.21235, -123.16957],
      [49.21228, -123.16953],
      [49.2121, -123.16941],
      [49.21196, -123.16926],
      [49.21183, -123.16905],
      [49.21162, -123.16863],
      [49.2114, -123.16819],
      [49.21131, -123.16797],
      [49.21108, -123.16726],
      [49.21078, -123.16615],
      [49.20995, -123.16305],
      [49.20926, -123.16099],
      [49.20886, -123.15977],
      [49.20836, -123.15848],
      [49.20825, -123.15821],
      [49.2078, -123.15714],
      [49.20741, -123.15632],
      [49.2067, -123.15505],
      [49.20632, -123.15443],
      [49.20598, -123.15399],
      [49.2055, -123.15345],
      [49.20503, -123.15299],
      [49.20439, -123.15228],
      [49.20397, -123.15178],
      [49.20368, -123.15141],
      [49.20345, -123.15103],
      [49.20311, -123.15034],
      [49.20168, -123.14772],
      [49.20039, -123.14465],
      [49.20013, -123.14419],
      [49.19999, -123.14391],
      [49.19984, -123.14341],
      [49.19972, -123.14293],
      [49.19951, -123.14232],
      [49.19941, -123.14184],
      [49.19888, -123.13993],
      [49.19862, -123.1389],
      MCDONALD_BEACH_PATH_GRAUER_N,
    ],
  },
];