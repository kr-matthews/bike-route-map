import {
  ELLIOT_CARNARVON,
  ELLIOT_COLUMBIA,
  FIFTH_7TH,
  MERIVALE_AGNES,
  MERIVALE_CARNARVON,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const ELLIOT_CLARKSON_SW = [49.20689, -122.90225];
const MERIVALE_ROYAL_S = [49.20807, -122.90616];
const FOURTH_QUEENS_S = [49.20849, -122.91017];
const FIFTH_THIRD_E = [49.20941, -122.91337];
const FIFTH_THIRD_W = [49.20932, -122.91353];
const FIFTH_SIXTH_N = [49.2141, -122.91937];

export const UPTOWN_DOWNTOWN = [
  {
    routeNames: [ROUTES.uptownDowntown.name],
    description: "elliot path",
    type: "mixed",
    videoIds: [VIDEOS.uptownDowntownSb.id, VIDEOS.carnarvonWb.id],
    videoIdsEndAtStart: [VIDEOS.uptownDowntownSb.id],
    positions: [ELLIOT_COLUMBIA, ELLIOT_CLARKSON_SW],
  },
  {
    routeNames: [ROUTES.uptownDowntown.name],
    description: "elliot road",
    type: "quiet",
    videoIds: [VIDEOS.uptownDowntownSb.id, VIDEOS.carnarvonWb.id],
    positions: [ELLIOT_CLARKSON_SW, [49.20697, -122.90224], ELLIOT_CARNARVON],
  },
  {
    routeNames: [ROUTES.uptownDowntown.name],
    description: "merivale",
    type: "quiet",
    videoIds: [VIDEOS.uptownDowntownSb.id],
    positions: [
      MERIVALE_CARNARVON,
      MERIVALE_AGNES,
      [49.20807, -122.9061],
      MERIVALE_ROYAL_S,
    ],
  },
  {
    routeNames: [ROUTES.uptownDowntown.name],
    description: "park, fourth, third",
    type: "comfortable",
    videoIds: [VIDEOS.uptownDowntownSb.id],
    positions: [
      MERIVALE_ROYAL_S,
      [49.20781, -122.90672],
      [49.20799, -122.90694],
      [49.20802, -122.90704],
      [49.20799, -122.9071],
      [49.20796, -122.90721],
      [49.20795, -122.90727],
      [49.20796, -122.90733],
      [49.20799, -122.90734],
      [49.20806, -122.90733],
      [49.20809, -122.90733],
      [49.20811, -122.90734],
      [49.20834, -122.90766],
      [49.20835, -122.90773],
      [49.20836, -122.90812],
      [49.20836, -122.9086],
      [49.20836, -122.90878],
      [49.20842, -122.90895],
      [49.20842, -122.90902],
      [49.2084, -122.90912],
      [49.20841, -122.90934],
      [49.20846, -122.90964],
      [49.20847, -122.90975],
      [49.20845, -122.90986],
      [49.20841, -122.90995],
      [49.2084, -122.91002],
      FOURTH_QUEENS_S,
    ],
  },
  {
    routeNames: [ROUTES.uptownDowntown.name],
    description: "fourth, third",
    type: "quiet",
    videoIds: [VIDEOS.uptownDowntownSb.id],
    positions: [
      FOURTH_QUEENS_S,
      [49.2093, -122.9112],
      [49.21006, -122.91217],
      FIFTH_THIRD_E,
    ],
  },
  {
    routeNames: [ROUTES.uptownDowntown.name],
    description: "third",
    type: "quiet",
    oneWay: "recommended",
    hideArrows: true,
    videoIds: [VIDEOS.uptownDowntownSb.id],
    positions: [FIFTH_THIRD_E, FIFTH_THIRD_W],
  },
  {
    routeNames: [ROUTES.uptownDowntown.name],
    description: "fifth nb",
    type: "quiet",
    oneWay: "required",
    positions: [
      FIFTH_THIRD_E,
      [49.21019, -122.91434],
      [49.21093, -122.91524],
      [49.21099, -122.91524],
      [49.21102, -122.91534],
      [49.21251, -122.91722],
      [49.21359, -122.91859],
      [49.21366, -122.91878],
      [49.21386, -122.91903],
      FIFTH_SIXTH_N,
    ],
  },
  {
    routeNames: [ROUTES.uptownDowntown.name],
    description: "fifth sb",
    type: "quiet",
    oneWay: "required",
    videoIds: [VIDEOS.uptownDowntownSb.id],
    positions: [
      FIFTH_SIXTH_N,
      [49.21388, -122.91921],
      [49.21248, -122.91749],
      [49.21242, -122.91747],
      [49.21239, -122.91735],
      [49.21239, -122.91729],
      [49.21229, -122.91724],
      [49.21092, -122.91551],
      [49.21085, -122.9155],
      [49.21083, -122.9154],
      [49.2101, -122.91448],
      FIFTH_THIRD_W,
    ],
  },
  {
    routeNames: [ROUTES.uptownDowntown.name],
    description: "fifth",
    type: "quiet",
    videoIds: [VIDEOS.uptownDowntownSb.id],
    positions: [FIFTH_SIXTH_N, FIFTH_7TH],
  },
];
