import {
  SUSSEX_HAZEL_NE,
  SUSSEX_HAZEL_NW,
  SUSSEX_HAZEL_S,
  WAYBURNE_DEER_LAKE_NE,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const SUSSEX_GRANGE_N = [49.23005, -122.99778];
const WAYBURNE_DEER_LAKE_SE = [49.24157, -122.99795];
const WAYBURNE_NB_LANE_START = [49.24767, -122.99801];
const WAYBURNE_NB_LANE_END = [49.25169, -122.99529];

export const NORTH_SOUTH = [
  {
    description: "crossing deer lake",
    type: "mixed",
    positions: [WAYBURNE_DEER_LAKE_SE, WAYBURNE_DEER_LAKE_NE],
  },
  {
    routeNames: [ROUTES.northSouth.name],
    description: "sussex south end nb",
    type: "dedicated",
    oneWay: "required",
    positions: [
      SUSSEX_HAZEL_S,
      SUSSEX_HAZEL_NE,
      [49.22985, -122.99777],
      SUSSEX_GRANGE_N,
    ],
  },
  {
    routeNames: [ROUTES.northSouth.name],
    description: "sussex south end sb",
    type: "shared",
    oneWay: "required",
    videos: [VIDEOS.northSouthSb.id],
    videosEndAtEnd: [VIDEOS.northSouthSb.id],
    positions: [SUSSEX_GRANGE_N, [49.22994, -122.99787], SUSSEX_HAZEL_NW],
  },
  {
    routeNames: [ROUTES.northSouth.name],
    description: "crossing hazel sb",
    type: "shared",
    positions: [SUSSEX_HAZEL_NW, SUSSEX_HAZEL_S],
  },
  {
    routeNames: [ROUTES.northSouth.name],
    description: "sussex",
    type: "quiet",
    videos: [VIDEOS.northSouthSb.id],
    positions: [
      SUSSEX_GRANGE_N,
      [49.23011, -122.99777],
      [49.23216, -122.9978],
      [49.23378, -122.99781],
      [49.23443, -122.99782],
      [49.23449, -122.99775],
      [49.23485, -122.99775],
      [49.23494, -122.99786],
      [49.23506, -122.9978],
      [49.23534, -122.99779],
      [49.23547, -122.99783],
      [49.23703, -122.99785],
      [49.23863, -122.99787],
      [49.23942, -122.99786],
      [49.23968, -122.99789],
      [49.23992, -122.99789],
      [49.24016, -122.9979],
      [49.24107, -122.99795],
      [49.2414, -122.99794],
      [49.24154, -122.99796],
      WAYBURNE_DEER_LAKE_SE,
    ],
  },
  {
    routeNames: [ROUTES.northSouth.name],
    description: "wayburne nb 1",
    type: "shared",
    oneWay: "required",
    positions: [
      WAYBURNE_DEER_LAKE_SE,
      [49.24173, -122.99799],
      [49.24299, -122.99799],
      [49.24568, -122.99801],
      WAYBURNE_NB_LANE_START,
    ],
  },
  {
    routeNames: [ROUTES.northSouth.name],
    description: "wayburne nb 2",
    type: "painted",
    oneWay: "required",
    positions: [
      WAYBURNE_NB_LANE_START,
      [49.24866, -122.998],
      [49.2494, -122.998],
      [49.24956, -122.99798],
      [49.24978, -122.99792],
      [49.24997, -122.99784],
      [49.25014, -122.99773],
      [49.25032, -122.99758],
      [49.25052, -122.99739],
      [49.25068, -122.99722],
      [49.25087, -122.9969],
      [49.25134, -122.99601],
      WAYBURNE_NB_LANE_END,
    ],
  },
  {
    routeNames: [ROUTES.northSouth.name],
    description: "wayburne nb 3",
    type: "shared",
    oneWay: "required",
    positions: [
      WAYBURNE_NB_LANE_END,
      [49.25194, -122.99485],
      [49.25214, -122.99457],
      [49.25239, -122.9943],
      [49.25255, -122.99416],
      [49.25274, -122.99401],
      [49.25297, -122.99387],
      [49.25337, -122.99368],
      [49.2537, -122.99357],
      [49.25391, -122.9935],
      [49.25415, -122.99345],
      [49.25437, -122.99341],
    ],
  },
  {
    routeNames: [ROUTES.northSouth.name],
    description: "wayburne sb",
    type: "shared",
    oneWay: "required",
    videos: [VIDEOS.northSouthSb.id],
    videosStartAtStart: [VIDEOS.northSouthSb.id],
    positions: [
      [49.25442, -122.99357],
      [49.25428, -122.99358],
      [49.25387, -122.99369],
      [49.25332, -122.9939],
      [49.2529, -122.9941],
      [49.25263, -122.99429],
      [49.25241, -122.99449],
      [49.25216, -122.99479],
      [49.25201, -122.995],
      [49.25184, -122.99531],
      [49.25127, -122.99645],
      [49.25099, -122.99699],
      [49.25079, -122.99732],
      [49.25064, -122.99752],
      [49.25049, -122.99767],
      [49.25031, -122.99783],
      [49.25011, -122.99798],
      [49.24994, -122.99807],
      [49.24971, -122.99816],
      [49.2495, -122.99821],
      [49.24937, -122.99822],
      [49.24865, -122.99821],
      [49.24658, -122.99821],
      [49.24519, -122.9982],
      [49.24366, -122.99819],
      [49.24215, -122.99818],
      [49.24175, -122.99816],
      WAYBURNE_DEER_LAKE_SE,
    ],
  },
];
