import {
  ALEXANDER_POWELL,
  CARRALL_EXPO_NE,
  CARRALL_EXPO_NW,
  CARRALL_KEEFER_NE,
  CARRALL_KEEFER_SE,
  CARRALL_KEEFER_W,
  CARRALL_PACIFIC_SE,
  CARRALL_PACIFIC_SW,
  CARRALL_PENDER_NE,
  CARRALL_PENDER_NW,
  CARRALL_PENDER_SE,
  CARRALL_PENDER_SW,
  CARRALL_SEAWALL,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const SEAWALL_SPLIT = [49.27653, -123.1065];
const NORTH_SPLIT = [49.28302, -123.10426];

export const CARRALL = [
  {
    routeNames: [ROUTES.carrall.name],
    description: "seawall end",
    videoIds: [VIDEOS.carrallNb.id, VIDEOS.carrallSb.id],
    videoIdsStartAtStart: [VIDEOS.carrallNb.id],
    videoIdsEndAtStart: [VIDEOS.carrallSb.id],
    positions: [CARRALL_SEAWALL, [49.27596, -123.10653], SEAWALL_SPLIT],
  },
  {
    routeNames: [ROUTES.carrall.name],
    description: "nb",
    oneWay: "required",
    videoIds: [VIDEOS.carrallNb.id],
    positions: [
      SEAWALL_SPLIT,
      [49.27664, -123.10639],
      CARRALL_PACIFIC_SE,
      [49.27718, -123.10632],
      [49.27764, -123.1063],
      [49.27772, -123.10629],
      [49.27786, -123.10623],
      [49.27798, -123.10614],
      CARRALL_EXPO_NE,
      [49.27811, -123.10602],
      [49.27825, -123.1058],
      [49.27848, -123.10524],
      [49.27857, -123.10502],
      [49.27871, -123.10478],
      [49.27888, -123.10459],
      [49.27901, -123.1045],
      CARRALL_KEEFER_SE,
      CARRALL_KEEFER_NE,
      [49.2794, -123.10437],
      CARRALL_PENDER_SE,
      CARRALL_PENDER_NE,
      [49.28053, -123.10432],
      [49.28132, -123.1043],
      [49.28147, -123.10429],
      [49.282, -123.10427],
      [49.28246, -123.10425],
      [49.28297, -123.10422],
      NORTH_SPLIT,
    ],
  },
  {
    routeNames: [ROUTES.carrall.name],
    description: "sb",
    oneWay: "required",
    videoIds: [VIDEOS.carrallSb.id],
    positions: [
      NORTH_SPLIT,
      [49.28296, -123.10434],
      [49.28253, -123.10437],
      [49.28244, -123.10437],
      [49.28192, -123.1044],
      [49.28151, -123.10441],
      [49.28134, -123.10442],
      CARRALL_PENDER_NW,
      CARRALL_PENDER_SW,
      [49.27945, -123.10449],
      [49.27932, -123.10451],
      CARRALL_KEEFER_W,
      [49.279, -123.10466],
      [49.27888, -123.10478],
      [49.27878, -123.10489],
      [49.27867, -123.10507],
      [49.27839, -123.10577],
      [49.27833, -123.10589],
      [49.27824, -123.10603],
      [49.27814, -123.10614],
      CARRALL_EXPO_NW,
      [49.27801, -123.10626],
      [49.27795, -123.10632],
      [49.27784, -123.10638],
      [49.27773, -123.10643],
      [49.27764, -123.10645],
      [49.27716, -123.10646],
      CARRALL_PACIFIC_SW,
      [49.27663, -123.10651],
      SEAWALL_SPLIT,
    ],
  },
  {
    routeNames: [ROUTES.carrall.name],
    description: "north end",
    videoIds: [
      VIDEOS.carrallSb.id,
      VIDEOS.carrallNb.id,
      VIDEOS.alexanderEb.id,
      VIDEOS.alexanderWb.id,
    ],
    videoIdsStartAtStart: [VIDEOS.alexanderEb.id],
    videoIdsEndAtStart: [VIDEOS.alexanderWb.id],
    videoIdsEndAtEnd: [VIDEOS.carrallNb.id],
    positions: [NORTH_SPLIT, [49.28323, -123.10422], ALEXANDER_POWELL],
  },
];
