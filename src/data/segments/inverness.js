import {
  CROMPTON_KENT_N_N,
  CROMPTON_KENT_N_S,
  INVERNESS_37TH,
  INVERNESS_43RD,
  INVERNESS_45TH,
  INVERNESS_47TH,
  INVERNESS_59TH,
  INVERNESS_64TH_ALLEY,
  INVERNESS_MARINE_S,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const INVERNESS_63RD = [49.21286, -123.07987];
const CROMPTON_MARINE_S = [49.211, -123.08071];
const INVERNESS_MARINE_SS = [49.21097, -123.08];

export const INVERNESS = [
  {
    routeNames: [ROUTES.inverness.name],
    description: "crompton",
    type: "quiet",
    videos: [VIDEOS.invernessSb.id],
    positions: [CROMPTON_KENT_N_S, CROMPTON_KENT_N_N, CROMPTON_MARINE_S],
  },
  {
    routeNames: [ROUTES.inverness.name],
    description: "marine eb",
    type: "painted",
    oneWay: "required",
    positions: [CROMPTON_MARINE_S, [49.21103, -123.08067], INVERNESS_MARINE_S],
  },
  {
    routeNames: [ROUTES.inverness.name],
    description: "marine wb",
    type: "dedicated",
    oneWay: "required",
    videos: [VIDEOS.invernessSb.id],
    positions: [INVERNESS_MARINE_S, INVERNESS_MARINE_SS, CROMPTON_MARINE_S],
  },
  {
    routeNames: [ROUTES.inverness.name],
    description: "marine to 63rd",
    type: "quiet",
    videos: [VIDEOS.invernessSb.id, VIDEOS.knightStBridgeSb.id],
    videosStartAtEnd: [VIDEOS.knightStBridgeSb.id],
    positions: [
      INVERNESS_MARINE_S,
      INVERNESS_64TH_ALLEY,
      [49.21197, -123.0799],
      INVERNESS_63RD,
    ],
  },
  {
    routeNames: [ROUTES.inverness.name],
    description: "63rd to 45th",
    type: "quiet",
    videos: [VIDEOS.invernessSb.id],
    positions: [
      INVERNESS_63RD,
      [49.21328, -123.07988],
      [49.2137, -123.08015],
      [49.21466, -123.08013],
      [49.21551, -123.08011],
      INVERNESS_59TH,
      [49.21813, -123.08006],
      [49.21925, -123.08006],
      [49.21992, -123.08026],
      [49.22047, -123.08025],
      [49.22183, -123.0802],
      [49.22343, -123.08013],
      [49.22533, -123.08006],
      [49.22699, -123.08001],
      INVERNESS_47TH,
    ],
  },
  {
    routeNames: [ROUTES.inverness.name, ROUTES.fortyFifth.name],
    description: "45th",
    type: "quiet",
    videos: [VIDEOS.invernessSb.id, VIDEOS.fortyFifthWb.id],
    positions: [INVERNESS_45TH, INVERNESS_47TH],
  },
  {
    routeNames: [ROUTES.inverness.name],
    videos: [VIDEOS.invernessSb.id],
    type: "quiet",
    description: "45th to midtown",
    positions: [
      INVERNESS_45TH,
      INVERNESS_43RD,
      [49.23274, -123.07981],
      [49.23482, -123.07975],
      INVERNESS_37TH,
    ],
  },
];
