import {
  JONES_17TH,
  JONES_23RD,
  JONES_24TH,
  JONES_27TH,
  JONES_KEITH_S,
  MAHON_4TH,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const MAHON_6TH_S = [49.31862, -123.0807];
const MAHON_6TH_N = [49.31867, -123.08065];
const JONES_6TH_N = [49.31915, -123.08176];
const JOIN_6TH = [49.31893, -123.08143];
const JONES_HWY_S_S = [49.3318, -123.08145];
const JONES_HWY_S = [49.33188, -123.08153];
const JONES_HWY_N = [49.33229, -123.0817];
const JONES_25TH = [49.33239, -123.08154];
const JONES_29TH = [49.33563, -123.08139];

export const JONES = [
  {
    routeNames: [ROUTES.jonesMahon.name],
    description: "mahon",
    type: "quiet",
    positions: [MAHON_4TH, MAHON_6TH_S],
  },
  {
    routeNames: [ROUTES.jonesMahon.name],
    description: "mahon little bit",
    type: "quiet",
    oneWay: "recommended",
    hideArrows: true,
    positions: [MAHON_6TH_S, MAHON_6TH_N],
  },
  {
    routeNames: [ROUTES.jonesMahon.name],
    description: "6th wb",
    type: "quiet",
    oneWay: "required",
    positions: [MAHON_6TH_N, JONES_6TH_N],
  },
  {
    routeNames: [ROUTES.jonesMahon.name],
    description: "6th eb 1",
    type: "quiet",
    oneWay: "recommended",
    positions: [
      JONES_6TH_N,
      [49.31915, -123.08176],
      [49.31894, -123.08177],
      JOIN_6TH,
    ],
  },
  {
    routeNames: [ROUTES.jonesMahon.name],
    description: "6th eb 2",
    type: "quiet",
    oneWay: "required",
    positions: [JOIN_6TH, MAHON_6TH_S],
  },
  {
    routeNames: [ROUTES.jonesMahon.name],
    description: "jones, s of keith",
    type: "quiet",
    positions: [JONES_6TH_N, [49.31982, -123.08174], JONES_KEITH_S],
  },
  {
    routeNames: [ROUTES.jonesMahon.name],
    description: "keith to 23rd",
    type: "shared",
    positions: [
      JONES_KEITH_S,
      [49.32331, -123.08165],
      JONES_17TH,
      [49.32831, -123.08153],
      JONES_23RD,
    ],
  },
  {
    routeNames: [ROUTES.jonesMahon.name],
    description: "23rd to 24th",
    type: "quiet",
    positions: [JONES_23RD, JONES_24TH],
  },
  {
    routeNames: [ROUTES.jonesMahon.name],
    description: "24th to overpass",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.jonesOverpassNb.id],
    videoIdsStartAtStart: [ROUTE_VIDEOS.jonesOverpassNb.id],
    positions: [JONES_24TH, JONES_HWY_S_S],
  },
  {
    routeNames: [ROUTES.jonesMahon.name],
    description: "pre-overpass",
    type: "other",
    elevation: 0.5,
    videoIds: [ROUTE_VIDEOS.jonesOverpassNb.id],
    positions: [JONES_HWY_S_S, [49.33183, -123.08117], JONES_HWY_S],
  },
  {
    routeNames: [ROUTES.jonesMahon.name],
    description: "overpass",
    type: "other",
    elevation: 1,
    videoIds: [ROUTE_VIDEOS.jonesOverpassNb.id],
    positions: [
      JONES_HWY_S,
      [49.33187, -123.08221],
      [49.33229, -123.08223],
      JONES_HWY_N,
    ],
  },
  {
    routeNames: [ROUTES.jonesMahon.name],
    description: "overpass to 25th",
    type: "other",
    elevation: 0.5,
    videoIds: [ROUTE_VIDEOS.jonesOverpassNb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.jonesOverpassNb.id],
    positions: [
      JONES_HWY_N,
      [49.3323, -123.08158],
      [49.33233, -123.08154],
      JONES_25TH,
    ],
  },
  {
    routeNames: [ROUTES.jonesMahon.name],
    description: "25th to 29th",
    type: "quiet",
    positions: [JONES_25TH, [49.33243, -123.08144], JONES_27TH, JONES_29TH],
  },
  {
    routeNames: [ROUTES.jonesMahon.name],
    description: "29th & mahon",
    type: "quiet",
    positions: [JONES_29TH, [49.33563, -123.07966], [49.33656, -123.07965]],
  },
];
