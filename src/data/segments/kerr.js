import {
  KERR_FRASER_TRAIL,
  KERR_KENT_N_SE,
  KERR_KENT_N_SW,
  RUPERT_45TH,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const KERR_MARINE_SE = [49.208, -123.04217];
const KERR_MARINE_SW = [49.20799, -123.04234];

const NORTHBOUND_LANE_ENDS = [49.22386, -123.04102];
const SOUTHBOUND_LANE_ENDS = [49.2207, -123.04134];
const SOUTHBOUND_LANE_STARTS_AGAIN = [49.22013, -123.04137];

const KERR_49TH_N = [49.22484, -123.04105];

export const KERR = [
  {
    routeNames: [ROUTES.kerr.name],
    description: "south tip",
    type: "dedicated",
    videos: [VIDEOS.kerrSb.id],
    videosEndAtStart: [VIDEOS.kerrSb.id],
    positions: [
      KERR_FRASER_TRAIL,
      [49.20611, -123.04221],
      [49.20668, -123.04219],
      KERR_KENT_N_SE,
    ],
  },
  {
    routeNames: [ROUTES.kerr.name],
    description: "nb protected",
    type: "dedicated",
    oneWay: "required",
    positions: [KERR_KENT_N_SE, [49.207, -123.04218], KERR_MARINE_SE],
  },
  {
    routeNames: [ROUTES.kerr.name],
    description: "nb painted",
    type: "painted",
    oneWay: "required",
    positions: [
      KERR_MARINE_SE,
      [49.20823, -123.04217],
      [49.20873, -123.04215],
      [49.20925, -123.04207],
      [49.20965, -123.04197],
      [49.21058, -123.04176],
      [49.21094, -123.04168],
      [49.2114, -123.04166],
      [49.21202, -123.04162],
      [49.21304, -123.04157],
      [49.21553, -123.04146],
      [49.21722, -123.04138],
      [49.21827, -123.04134],
      [49.21942, -123.04129],
      [49.22018, -123.04125],
      [49.22115, -123.04119],
      [49.22205, -123.04113],
      NORTHBOUND_LANE_ENDS,
    ],
  },
  {
    routeNames: [ROUTES.kerr.name],
    description: "nb ending",
    oneWay: "required",
    type: "shared",
    positions: [NORTHBOUND_LANE_ENDS, [49.22465, -123.04099], KERR_49TH_N],
  },
  {
    routeNames: [ROUTES.kerr.name],
    description: "sb 1",
    type: "painted",
    oneWay: "required",
    videos: [VIDEOS.kerrSb.id],
    positions: [
      KERR_49TH_N,
      [49.22466, -123.04115],
      [49.22362, -123.04119],
      [49.22171, -123.04128],
      SOUTHBOUND_LANE_ENDS,
    ],
  },
  {
    routeNames: [ROUTES.kerr.name],
    description: "sb 2",
    oneWay: "required",
    type: "shared",
    videos: [VIDEOS.kerrSb.id],
    positions: [SOUTHBOUND_LANE_ENDS, SOUTHBOUND_LANE_STARTS_AGAIN],
  },
  {
    routeNames: [ROUTES.kerr.name],
    description: "sb 3",
    type: "painted",
    oneWay: "required",
    videos: [VIDEOS.kerrSb.id],
    positions: [
      SOUTHBOUND_LANE_STARTS_AGAIN,
      [49.21915, -123.04143],
      [49.21818, -123.04147],
      [49.21651, -123.04155],
      [49.21551, -123.04159],
      [49.21382, -123.04166],
      [49.21203, -123.04176],
      [49.21102, -123.04181],
      [49.21049, -123.04191],
      [49.20962, -123.04214],
      [49.2093, -123.04221],
      [49.20873, -123.0423],
      [49.20821, -123.04233],
      KERR_MARINE_SW,
    ],
  },
  {
    routeNames: [ROUTES.kerr.name],
    description: "sb 4",
    type: "dedicated",
    oneWay: "required",
    videos: [VIDEOS.kerrSb.id],
    positions: [KERR_MARINE_SW, KERR_KENT_N_SW],
  },
  {
    routeNames: [ROUTES.kerr.name],
    description: "to 45th",
    type: "shared",
    videos: [VIDEOS.kerrSb.id],
    videosStartAtEnd: [VIDEOS.kerrSb.id],
    positions: [
      KERR_49TH_N,
      [49.22623, -123.04099],
      [49.22659, -123.04097],
      [49.22682, -123.04099],
      [49.22696, -123.04101],
      [49.2271, -123.04108],
      [49.22723, -123.04118],
      [49.22738, -123.04131],
      [49.2275, -123.04146],
      [49.22807, -123.04237],
      [49.22824, -123.04263],
      [49.22838, -123.04278],
      [49.22856, -123.04293],
      [49.22875, -123.04305],
      [49.22894, -123.04311],
      [49.2291, -123.04313],
      RUPERT_45TH,
    ],
  },
];
