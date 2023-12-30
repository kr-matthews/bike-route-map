import {
  CAMBIE_63RD_E,
  CAMBIE_64TH_E,
  CAMBIE_64TH_W,
  CAMBIE_KENT_N_S,
  CAMBIE_MARINE_NE,
  GARDEN_CITY_SB_START,
  GARDEN_CITY_SEA_ISLAND_SE,
  GREAT_CANADIAN_SEA_ISLAND_NW,
  GREAT_CANADIAN_SEA_ISLAND_NE,
  HEATHER_64TH,
  ONTARIO_63RD,
  VAN_HORNE_RIVER_N,
  VAN_HORNE_RIVER_SE,
  GARDEN_CITY_SEA_ISLAND_SW,
  BRIDGEPORT_TRAIL_VAN_HORNE,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const ELEVATED_START = [49.19896, -123.11896];
const ELEVATED_END = [49.20561, -123.11767];
const SPIRAL_MIDPOINT_1 = [49.20442, -123.11761];
const SPIRAL_MIDPOINT_2 = [49.20488, -123.11766];
const SPIRAL_MIDPOINT_3 = [49.20552, -123.11775];
const SPIRAL_MIDPOINT_4 = [49.20495, -123.11778];
const GREAT_CANADIAN_VAN_HORNE_SE = [49.19481, -123.1248];
const GREAT_CANADIAN_VAN_HORNE_NE = [49.1949, -123.12486];
const GREAT_CANADIAN_VAN_HORNE_NW = [49.19484, -123.125];
const GREAT_CANADIAN_BRIDGEPORT_NW = [49.19211, -123.12452];
const CANADA_LINE_PATH_BRIDGEPORT_S = [49.19198, -123.12457];

const MCLENNAN_RIVER_NE = [49.19776, -123.1075];
const MCLENNAN_RIVER_NW = [49.19789, -123.10812];

const ASH_KENT_NE = [49.20578, -123.11908];
const CAMBIE_KENT_N_NE = [49.20612, -123.11721];

const CAMBIE_PATH_63RD = [49.2132, -123.11675];
const CAMBIE_PATH_64TH = [49.2123, -123.11679];

export const CANADA_LINE = [
  // richmond alternates
  {
    description: "river dr path",
    type: "mixed",
    positions: [
      VAN_HORNE_RIVER_SE,
      [49.19879, -123.11882],
      [49.19904, -123.11731],
      [49.19905, -123.11719],
      [49.19906, -123.11402],
      [49.19904, -123.11379],
      [49.19904, -123.11367],
      [49.19849, -123.11122],
      [49.19776, -123.10803],
      [49.19774, -123.10798],
      [49.19771, -123.10794],
      [49.19762, -123.10793],
      [49.19762, -123.10775],
      [49.19764, -123.1077],
      [49.19767, -123.10766],
      [49.19767, -123.1076],
      [49.1966, -123.10284],
      [49.19675, -123.10283],
    ],
  },
  {
    description: "river dr lane 1",
    type: "painted",
    oneWay: "required",
    positions: [[49.19674, -123.10297], MCLENNAN_RIVER_NE],
  },
  {
    description: "river dr roundabout",
    type: "shared",
    oneWay: "required",
    positions: [
      MCLENNAN_RIVER_NE,
      [49.1978, -123.10761],
      [49.19783, -123.10768],
      [49.19786, -123.10775],
      [49.19787, -123.10781],
      [49.19786, -123.10788],
      [49.19786, -123.10799],
      MCLENNAN_RIVER_NW,
    ],
  },
  {
    description: "river dr lane 2",
    type: "painted",
    oneWay: "required",
    positions: [MCLENNAN_RIVER_NW, [49.19916, -123.11368]],
  },
  {
    description: "road: van horne",
    type: "painted",
    oneWay: "required",
    videos: [VIDEOS.northArmBridgeSb.id],
    positions: [
      VAN_HORNE_RIVER_N,
      [49.19875, -123.11912],
      [49.19721, -123.11912],
      [49.19697, -123.11922],
      [49.19678, -123.11946],
      [49.19605, -123.12195],
      GREAT_CANADIAN_VAN_HORNE_NE,
    ],
  },
  {
    description: "road: van horne crossing great canadian way",
    type: "painted",
    oneWay: "required",
    hideArrows: true,
    videos: [VIDEOS.gardenCitySb.id, VIDEOS.northArmBridgeSb.id],
    videosStartAtStart: [VIDEOS.gardenCitySb.id],
    positions: [GREAT_CANADIAN_VAN_HORNE_NE, GREAT_CANADIAN_VAN_HORNE_NW],
  },
  {
    description: "cross sea island way south",
    type: "other",
    positions: [GARDEN_CITY_SEA_ISLAND_SW, GARDEN_CITY_SEA_ISLAND_SE],
  },
  {
    description: "cross sea island way north",
    type: "other",
    positions: [GREAT_CANADIAN_SEA_ISLAND_NE, GREAT_CANADIAN_SEA_ISLAND_NW],
  },
  {
    description: "road: great canadian way nb to van horne",
    type: "painted",
    oneWay: "required",
    videos: [VIDEOS.gardenCityNb.id],
    videosEndAtEnd: [VIDEOS.gardenCityNb.id],
    positions: [
      GARDEN_CITY_SEA_ISLAND_SE,
      GREAT_CANADIAN_SEA_ISLAND_NE,
      [49.19136, -123.12433],
      [49.19203, -123.12428],
      [49.19264, -123.12427],
      [49.19309, -123.12429],
      [49.19375, -123.12436],
      [49.19415, -123.12449],
      GREAT_CANADIAN_VAN_HORNE_SE,
    ],
  },
  {
    description: "road: great canadian way nb from van horne",
    type: "painted",
    oneWay: "required",
    positions: [
      GREAT_CANADIAN_VAN_HORNE_SE,
      GREAT_CANADIAN_VAN_HORNE_NE,
      [49.19528, -123.12505],
      [49.19569, -123.12523],
      [49.19597, -123.12536],
      [49.19632, -123.12564],
      [49.19664, -123.12605],
    ],
  },
  {
    description: "road: great canadian way sb lane to van horne",
    type: "painted",
    oneWay: "required",
    positions: [
      [49.19658, -123.12614],
      [49.19634, -123.12585],
      [49.19616, -123.12567],
      [49.19599, -123.12557],
      [49.19576, -123.12546],
      [49.19526, -123.12521],
      GREAT_CANADIAN_VAN_HORNE_NW,
    ],
  },
  {
    description: "road: great canadian way sb lane from van horne",
    type: "painted",
    oneWay: "required",
    videos: [VIDEOS.gardenCitySb.id],
    positions: [
      GREAT_CANADIAN_VAN_HORNE_NW,
      [49.1948, -123.12497],
      [49.19418, -123.12466],
      [49.19381, -123.12452],
      [49.19325, -123.12451],
      GREAT_CANADIAN_BRIDGEPORT_NW,
    ],
  },
  {
    description: "road: great canadian way sb to path",
    type: "mixed",
    oneWay: "required",
    hideArrows: true,
    videos: [VIDEOS.gardenCitySb.id],
    positions: [GREAT_CANADIAN_BRIDGEPORT_NW, CANADA_LINE_PATH_BRIDGEPORT_S],
  },
  {
    description: "road: great canadian way sb no lane",
    type: "shared",
    oneWay: "required",
    hideUnlessVideo: true,
    positions: [
      GREAT_CANADIAN_BRIDGEPORT_NW,
      [49.19198, -123.1245],
      [49.19161, -123.12451],
      [49.19113, -123.12455],
      GARDEN_CITY_SEA_ISLAND_SW,
      // if want to continue on road
      // [49.1908, -123.12462],
      // [49.19058, -123.12466],
      // [49.19039, -123.12475],
      // [49.19024, -123.12482],
      // GARDEN_CITY_SB_ROAD_START,
    ],
  },

  // richmond
  {
    description: "patterson west of garden city",
    type: "mixed",
    positions: [
      [49.1902, -123.12582],
      [49.19025, -123.12555],
      [49.19024, -123.12499],
      GARDEN_CITY_SB_START,
    ],
  },
  {
    routeNames: [ROUTES.canadaLine.name],
    type: "mixed",
    description: "path: great canadian to bridgeport",
    videos: [VIDEOS.gardenCitySb.id],
    positions: [
      GARDEN_CITY_SB_START,
      [49.19027, -123.12494],
      [49.19077, -123.12483],
      GARDEN_CITY_SEA_ISLAND_SW,
      GREAT_CANADIAN_SEA_ISLAND_NW,
      [49.19124, -123.12472],
      [49.19143, -123.12466],
      [49.19152, -123.12458],
      CANADA_LINE_PATH_BRIDGEPORT_S,
    ],
  },
  {
    routeNames: [ROUTES.canadaLine.name],
    type: "mixed",
    description: "path: great canadian from bridgeport",
    positions: [
      CANADA_LINE_PATH_BRIDGEPORT_S,
      [49.19212, -123.12459],
      [49.19223, -123.12467],
      [49.19362, -123.12466],
      [49.19374, -123.12464],
      [49.19411, -123.12473],
      [49.19469, -123.12503],
      GREAT_CANADIAN_VAN_HORNE_SE,
    ],
  },
  {
    routeNames: [ROUTES.canadaLine.name],
    description: "path: van horne",
    type: "mixed",
    videos: [VIDEOS.northArmBridgeNb.id],
    positions: [
      GREAT_CANADIAN_VAN_HORNE_SE,
      BRIDGEPORT_TRAIL_VAN_HORNE,
      [49.19597, -123.12184],
      [49.19667, -123.11944],
      [49.19681, -123.11915],
      [49.19698, -123.11899],
      [49.19711, -123.11897],
      VAN_HORNE_RIVER_SE,
      [49.19888, -123.11894],
      VAN_HORNE_RIVER_N,
    ],
  },

  // bridge
  {
    routeNames: [ROUTES.canadaLine.name],
    description: "pre-bridge",
    type: "mixed",
    elevation: 0.5,
    videos: [VIDEOS.northArmBridgeNb.id, VIDEOS.northArmBridgeSb.id],
    positions: [VAN_HORNE_RIVER_N, ELEVATED_START],
  },
  {
    routeNames: [ROUTES.canadaLine.name],
    description: "bridge",
    type: "mixed",
    elevation: 1,
    videos: [VIDEOS.northArmBridgeNb.id, VIDEOS.northArmBridgeSb.id],
    positions: [
      ELEVATED_START,
      [49.19903, -123.11854],
      [49.19911, -123.11858],
      [49.19907, -123.11886],
      [49.1991, -123.11895],
      [49.19917, -123.11893],
      [49.19987, -123.11825],
      [49.2001, -123.11809],
      [49.20047, -123.11799],
      [49.20072, -123.11796],
      [49.20182, -123.11783],
      [49.20321, -123.1177],
      [49.20406, -123.11763],
      SPIRAL_MIDPOINT_1,
    ],
  },
  {
    routeNames: [ROUTES.canadaLine.name],
    description: "ramp down 1",
    type: "mixed",
    elevation: 1.5,
    videos: [VIDEOS.northArmBridgeNb.id, VIDEOS.northArmBridgeSb.id],
    positions: [SPIRAL_MIDPOINT_1, SPIRAL_MIDPOINT_2],
  },
  {
    routeNames: [ROUTES.canadaLine.name],
    description: "ramp down 2",
    type: "mixed",
    elevation: 2,
    videos: [VIDEOS.northArmBridgeNb.id, VIDEOS.northArmBridgeSb.id],
    positions: [SPIRAL_MIDPOINT_2, [49.20552, -123.11761], SPIRAL_MIDPOINT_3],
  },
  {
    routeNames: [ROUTES.canadaLine.name],
    description: "ramp down 3",
    type: "mixed",
    elevation: 1.5,
    videos: [VIDEOS.northArmBridgeNb.id, VIDEOS.northArmBridgeSb.id],
    positions: [SPIRAL_MIDPOINT_3, SPIRAL_MIDPOINT_4],
  },
  {
    routeNames: [ROUTES.canadaLine.name],
    description: "ramp down 4",
    type: "mixed",
    elevation: 1,
    videos: [VIDEOS.northArmBridgeNb.id, VIDEOS.northArmBridgeSb.id],
    positions: [
      SPIRAL_MIDPOINT_4,
      [49.20495, -123.11759],
      [49.20502, -123.11759],
      [49.20521, -123.11769],
      ELEVATED_END,
    ],
  },
  {
    routeNames: [ROUTES.canadaLine.name],
    description: "post-bridge",
    type: "comfortable",
    elevation: 0.5,
    videos: [VIDEOS.northArmBridgeNb.id, VIDEOS.northArmBridgeSb.id],
    positions: [
      ELEVATED_END,
      [49.2057, -123.11769],
      [49.20554, -123.11888],
      [49.20557, -123.11901],
      ASH_KENT_NE,
      // ASH_KENT_NE,
      CAMBIE_KENT_N_NE,
    ],
  },

  // vancouver
  {
    description: "trivial kent connection",
    type: "shared",
    positions: [CAMBIE_KENT_N_S, CAMBIE_KENT_N_NE],
  },
  {
    routeNames: [ROUTES.canadaLine.name],
    description: "kent to 63rd",
    type: "dedicated",
    videos: [VIDEOS.cambieSeparatedNb.id],
    positions: [
      CAMBIE_KENT_N_NE,
      [49.20634, -123.11728],
      [49.20684, -123.11726],
      [49.20789, -123.11719],
      [49.20814, -123.11717],
      [49.20854, -123.11719],
      [49.20872, -123.11722],
      [49.20904, -123.11721],
      [49.20966, -123.11717],
      [49.21002, -123.1171],
      CAMBIE_MARINE_NE,
      [49.21059, -123.11695],
      [49.21069, -123.11686],
      CAMBIE_PATH_64TH,
    ],
  },
  {
    routeNames: [ROUTES.canadaLine.name],
    description: "63rd to 64th",
    videos: [VIDEOS.cambieSeparatedNb.id, VIDEOS.sixtySeventhPlusWb.id],
    positions: [CAMBIE_PATH_64TH, CAMBIE_PATH_63RD],
  },
  {
    description: "63rd connection to ontario",
    videos: [VIDEOS.sixtySeventhPlusWb.id],
    videosStartAtEnd: [VIDEOS.sixtySeventhPlusWb.id],
    positions: [
      CAMBIE_PATH_63RD,
      [49.21317, -123.11462],
      [49.21317, -123.11374],
      [49.21342, -123.11234],
      [49.21338, -123.10993],
      ONTARIO_63RD,
    ],
  },
  {
    description: "64th connection to heather",
    videos: [VIDEOS.sixtySeventhPlusWb.id],
    positions: [
      HEATHER_64TH,
      [49.21232, -123.12173],
      [49.21239, -123.12019],
      CAMBIE_64TH_W,
      CAMBIE_64TH_E,
      CAMBIE_PATH_64TH,
    ],
  },
  {
    description: "trivial connection to cambie at 63rd",
    positions: [CAMBIE_63RD_E, CAMBIE_PATH_63RD],
  },
];
