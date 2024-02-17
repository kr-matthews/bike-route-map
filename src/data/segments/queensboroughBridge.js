import {
  BC_PARKWAY_7TH,
  QUEENSBOROUGH_BOYD_SW,
  QUEENSBOROUGH_STEWARDSON_E,
  QUEENSBOROUGH_STEWARDSON_W,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const QUEENSBOROUGH_BOYD_S_SE = [49.19238, -122.94258];
const QUEENSBOROUGH_BOYD_S_SW = [49.19214, -122.94316];
const QUEENSBOROUGH_LOOPS_ELEVATION_START = [49.19922, -122.9508];
const QUEENSBOROUGH_LOOPS_ELEVATION_END = [49.19867, -122.95059];
const QUEENSBOROUGH_BC_PARKWAY_SPLIT = [49.19781, -122.94883];
const QUEENSBOROUGH_ELEVATION_START = [49.19839, -122.94945];
const QUEENSBOROUGH_ELEVATION_END = [49.19762, -122.95014];
const NB_ELEVATION_START = [49.19221, -122.94265];
const NB_ELEVATION_END = [49.19834, -122.94764];
const SB_ELEVATION_END = [49.19211, -122.94291];

export const QUEENSBOROUGH_BRIDGE = [
  {
    description: "under south end",
    type: "mixed",
    positions: [
      QUEENSBOROUGH_BOYD_SW,
      QUEENSBOROUGH_BOYD_S_SW,
      [49.19237, -122.94263],
      QUEENSBOROUGH_BOYD_S_SE,
      [49.19245, -122.9425],
      [49.1925, -122.94242],
    ],
  },

  {
    routeNames: [ROUTES.queensboroughBridge.name, ROUTES.bcParkway.name],
    description: "from 7th",
    type: "mixed",
    elevation: 0.5,
    videos: [VIDEOS.bcParkwayNewWestminsterWb.id],
    positions: [
      BC_PARKWAY_7TH,
      [49.19922, -122.95097],
      QUEENSBOROUGH_LOOPS_ELEVATION_START,
    ],
  },
  {
    routeNames: [ROUTES.queensboroughBridge.name, ROUTES.bcParkway.name],
    description: "loops overpass",
    type: "mixed",
    elevation: 1,
    videos: [VIDEOS.bcParkwayNewWestminsterWb.id],
    positions: [
      QUEENSBOROUGH_LOOPS_ELEVATION_START,
      QUEENSBOROUGH_LOOPS_ELEVATION_END,
    ],
  },
  {
    routeNames: [ROUTES.queensboroughBridge.name, ROUTES.bcParkway.name],
    description: "queensborough dog area",
    type: "mixed",
    elevation: 0.5,
    videos: [VIDEOS.bcParkwayNewWestminsterWb.id],
    positions: [
      QUEENSBOROUGH_LOOPS_ELEVATION_END,
      [49.19864, -122.95051],
      [49.19863, -122.95043],
      [49.19864, -122.95037],
      [49.19867, -122.95022],
      [49.19868, -122.95012],
      [49.19868, -122.95007],
      [49.19859, -122.94974],
      [49.19854, -122.94965],
      QUEENSBOROUGH_ELEVATION_START,
    ],
  },
  {
    routeNames: [ROUTES.queensboroughBridge.name, ROUTES.bcParkway.name],
    description: "queensborough bridge sidewalk",
    type: "mixed",
    elevation: 1,
    videos: [VIDEOS.bcParkwayNewWestminsterWb.id],
    positions: [
      QUEENSBOROUGH_ELEVATION_START,
      QUEENSBOROUGH_BC_PARKWAY_SPLIT,
      QUEENSBOROUGH_ELEVATION_END,
    ],
  },
  {
    routeNames: [ROUTES.queensboroughBridge.name, ROUTES.bcParkway.name],
    description: "queensborough bridge post-sidewalk",
    type: "mixed",
    elevation: 0.5,
    videos: [VIDEOS.bcParkwayNewWestminsterWb.id],
    positions: [QUEENSBOROUGH_ELEVATION_END, QUEENSBOROUGH_STEWARDSON_W],
  },
  {
    routeNames: [ROUTES.queensboroughBridge.name],
    description: "sb: bridge",
    type: "mixed",
    elevation: 1,
    oneWay: "recommended",
    positions: [
      QUEENSBOROUGH_BC_PARKWAY_SPLIT,
      [49.19762, -122.94864],
      [49.19617, -122.94708],
      [49.19446, -122.94524],
      [49.19323, -122.94393],
      [49.19278, -122.94346],
      [49.1926, -122.94329],
      [49.19247, -122.94316],
      [49.19234, -122.94306],
      [49.19223, -122.94299],
      SB_ELEVATION_END,
    ],
  },
  {
    routeNames: [ROUTES.queensboroughBridge.name],
    description: "sb: off-ramp",
    type: "mixed",
    elevation: 0.5,
    oneWay: "recommended",
    positions: [
      SB_ELEVATION_END,
      [49.19181, -122.94283],
      [49.19179, -122.94284],
      [49.19179, -122.94287],
      [49.19181, -122.9429],
      [49.19185, -122.94292],
      [49.19194, -122.94297],
      QUEENSBOROUGH_BOYD_S_SW,
    ],
  },
  {
    routeNames: [ROUTES.queensboroughBridge.name],
    description: "nb on-ramp",
    type: "mixed",
    elevation: 0.5,
    oneWay: "recommended",
    positions: [
      QUEENSBOROUGH_BOYD_S_SE,
      [49.19236, -122.94251],
      [49.19232, -122.94244],
      [49.19228, -122.9424],
      [49.19192, -122.94225],
      [49.19181, -122.94222],
      [49.19179, -122.94222],
      [49.19178, -122.94225],
      [49.19179, -122.94228],
      [49.19181, -122.9423],
      [49.19204, -122.94246],
      NB_ELEVATION_START,
    ],
  },
  {
    routeNames: [ROUTES.queensboroughBridge.name],
    description: "nb bridge",
    type: "mixed",
    elevation: 1,
    oneWay: "recommended",
    positions: [
      NB_ELEVATION_START,
      [49.19229, -122.9427],
      [49.19245, -122.94284],
      [49.1925, -122.94288],
      [49.19258, -122.94296],
      [49.19281, -122.94319],
      [49.19338, -122.94381],
      [49.19485, -122.94538],
      [49.19605, -122.94667],
      [49.1969, -122.94757],
      [49.19731, -122.948],
      [49.19742, -122.94811],
      [49.1975, -122.94818],
      [49.19756, -122.94822],
      [49.19764, -122.94826],
      [49.19771, -122.94828],
      [49.19781, -122.9483],
      [49.19796, -122.94829],
      [49.19806, -122.94801],
      [49.19819, -122.9478],
      NB_ELEVATION_END,
    ],
  },
  {
    routeNames: [ROUTES.queensboroughBridge.name],
    description: "east off-ramp",
    type: "mixed",
    elevation: 0.5,
    oneWay: "recommended",
    positions: [
      NB_ELEVATION_END,
      [49.19844, -122.94754],
      [49.19848, -122.94754],
      QUEENSBOROUGH_STEWARDSON_E,
    ],
  },
];
