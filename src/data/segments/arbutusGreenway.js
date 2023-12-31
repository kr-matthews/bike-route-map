import {
  ARBUTUS_GREENWAY_10TH,
  ARBUTUS_GREENWAY_33RD_N,
  ARBUTUS_GREENWAY_33RD_S,
  ARBUTUS_GREENWAY_37TH,
  ARBUTUS_GREENWAY_64TH,
  ARBUTUS_GREENWAY_68TH,
  ARBUTUS_GREENWAY_7TH,
  ARBUTUS_GREENWAY_MARINE_N,
  ARBUTUS_GREENWAY_MARINE_S,
  ARBUTUS_GREENWAY_NANTON,
  ARBUTUS_KING_EDWARD_NE,
  ARBUTUS_KING_EDWARD_SE,
  BURRARD_ARBUTUS_GREENWAY_E,
  BURRARD_ARBUTUS_GREENWAY_W,
  CYPRESS_ARBUTUS_GREENWAY,
  EAST_BLVD_45TH,
  MILTON_ARBUTUS_GREENWAY,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const ARBUTUS_GREENWAY_8TH = [49.26473, -123.15236];

export const ARBUTUS_GREENWAY = [
  {
    routeNames: [ROUTES.arbutusGreenway.name],
    description: "south of 10th",
    type: "combined",
    videos: [VIDEOS.arbutusGreenwayNb.id],
    positions: [
      MILTON_ARBUTUS_GREENWAY,
      [49.20604, -123.14283],
      [49.20649, -123.14333],
      [49.20716, -123.14376],
      [49.20802, -123.14418],
      ARBUTUS_GREENWAY_MARINE_S,
      ARBUTUS_GREENWAY_MARINE_N,
      [49.20872, -123.14441],
      [49.20881, -123.14448],
      [49.20885, -123.14461],
      [49.21014, -123.14526],
      ARBUTUS_GREENWAY_68TH,
      [49.21144, -123.14592],
      ARBUTUS_GREENWAY_64TH,
      [49.21594, -123.14818],
      [49.21705, -123.1488],
      [49.21922, -123.15006],
      [49.21939, -123.15033],
      [49.21956, -123.15043],
      [49.21972, -123.15037],
      [49.21983, -123.15038],
      [49.22184, -123.15165],
      [49.224, -123.15292],
      [49.22689, -123.15463],
      [49.22707, -123.15456],
      [49.22724, -123.15463],
      [49.22725, -123.15487],
      [49.22813, -123.15537],
      [49.22864, -123.1555],
      [49.23069, -123.15542],
      [49.2308, -123.15522],
      EAST_BLVD_45TH,
      [49.23089, -123.15521],
      [49.23106, -123.15542],
      [49.23278, -123.15535],
      [49.23448, -123.1553],
      [49.23448, -123.15515],
      [49.23468, -123.15515],
      [49.23468, -123.15529],
      [49.2364, -123.15521],
      [49.23814, -123.15517],
      [49.23823, -123.15533],
      ARBUTUS_GREENWAY_37TH,
      [49.23834, -123.15532],
      [49.2385, -123.15514],
      [49.23929, -123.15511],
      [49.23976, -123.155],
      [49.24017, -123.15469],
      [49.24048, -123.15423],
      [49.24069, -123.15373],
      [49.24081, -123.15317],
      [49.24083, -123.15261],
      [49.24077, -123.15208],
      [49.24039, -123.14974],
      [49.24037, -123.1493],
      [49.24042, -123.14884],
      [49.24053, -123.14836],
      [49.24077, -123.14783],
      [49.24107, -123.14742],
      [49.24141, -123.14715],
      [49.24175, -123.14703],
      ARBUTUS_GREENWAY_33RD_S,
      ARBUTUS_GREENWAY_33RD_N,
      [49.24277, -123.14698],
      [49.24326, -123.14705],
      [49.24374, -123.14726],
      [49.24421, -123.1476],
      [49.24565, -123.14868],
      ARBUTUS_GREENWAY_NANTON,
      [49.24953, -123.15157],
      [49.25081, -123.15251],
      [49.2511, -123.15266],
      [49.25129, -123.15275],
      [49.25133, -123.15289],
      ARBUTUS_KING_EDWARD_SE,
      ARBUTUS_KING_EDWARD_NE,
      [49.25184, -123.15282],
      [49.25203, -123.15282],
      [49.25447, -123.15273],
      [49.25706, -123.15263],
      [49.25716, -123.15268],
      [49.2572, -123.15275],
      [49.25739, -123.15279],
      [49.2575, -123.15262],
      [49.25821, -123.15258],
      [49.25913, -123.15255],
      [49.26099, -123.15248],
      ARBUTUS_GREENWAY_10TH,
    ],
  },
  {
    routeNames: [ROUTES.arbutusGreenway.name],
    description: "10th to 8th",
    type: "combined",
    isClosed: true,
    positions: [
      ARBUTUS_GREENWAY_10TH,
      [49.26384, -123.15239],
      ARBUTUS_GREENWAY_8TH,
    ],
  },
  {
    routeNames: [ROUTES.arbutusGreenway.name],
    description: "8th to 7th",
    type: "combined",
    positions: [
      ARBUTUS_GREENWAY_8TH,
      [49.26511, -123.15236],
      [49.26534, -123.1523],
      ARBUTUS_GREENWAY_7TH,
    ],
  },
  {
    routeNames: [ROUTES.arbutusGreenway.name],
    description: "7th to burrard",
    videos: [VIDEOS.arbutusGreenwayNb.id],
    type: "combined",
    positions: [
      ARBUTUS_GREENWAY_7TH,
      [49.26584, -123.15196],
      [49.26603, -123.15173],
      [49.26623, -123.1514],
      [49.2664, -123.151],
      [49.26648, -123.15066],
      [49.26652, -123.15039],
      [49.26655, -123.15009],
      CYPRESS_ARBUTUS_GREENWAY,
      [49.26649, -123.14599],
      BURRARD_ARBUTUS_GREENWAY_W,
    ],
  },
  {
    routeNames: [ROUTES.arbutusGreenway.name],
    description: "crossing burrard",
    type: "combined",
    videos: [VIDEOS.arbutusGreenwayNb.id, VIDEOS.burrardNb.id],
    videosStartAtStart: [VIDEOS.burrardNb.id],
    positions: [BURRARD_ARBUTUS_GREENWAY_W, BURRARD_ARBUTUS_GREENWAY_E],
  },
  {
    routeNames: [ROUTES.arbutusGreenway.name],
    description: "burrard to fir",
    type: "combined",
    videos: [VIDEOS.arbutusGreenwayNb.id],
    videosEndAtEnd: [VIDEOS.arbutusGreenwayNb.id],
    positions: [
      BURRARD_ARBUTUS_GREENWAY_E,
      [49.26649, -123.14532],
      [49.26644, -123.14328],
      [49.26643, -123.14245],
      [49.26647, -123.14192],
      [49.26663, -123.14139],
      [49.26682, -123.14097],
    ],
  },
];
