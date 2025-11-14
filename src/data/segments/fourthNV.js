import {
  CHESTERFIELD_4TH_E,
  CHESTERFIELD_4TH_W,
  FORBES_3RD_N,
  FORBES_3RD_SE,
  FORBES_3RD_SW,
  HEYWOOD_SPIRIT_NE,
  QUEENSBURY_4TH_E,
  QUEENSBURY_4TH_W,
  SAINT_DAVIDS_4TH,
  ST_ANDREWS_4TH,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const HEYWOOD_4TH_E = [49.30928, -123.04866];
const FORBES_4TH = [49.31832, -123.08568];

export const FOURTH_NV = [
  {
    description: "cross 3rd nb",
    type: "shared",
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.fourthNVEb.id],
    positions: [FORBES_3RD_SE, FORBES_3RD_N],
  },
  {
    description: "cross 3rd sb",
    type: "shared",
    oneWay: "required",
    positions: [FORBES_3RD_N, FORBES_3RD_SW],
  },
  {
    routeNames: [ROUTES.fourthNV.name],
    description: "forbes",
    type: "quiet",
    videoIds: [
      ROUTE_VIDEOS.fourthNVEb.id,
      ROUTE_VIDEOS.marineNvWb.id,
      ROUTE_VIDEOS.first2ndWb.id,
      ROUTE_VIDEOS.fourthNVWb.id,
    ],
    videoIdsStartAtEnd: [
      ROUTE_VIDEOS.marineNvWb.id,
      ROUTE_VIDEOS.first2ndWb.id,
    ],
    videoIdsEndAtStart: [ROUTE_VIDEOS.fourthNVWb.id],
    positions: [
      FORBES_3RD_N,
      [49.31829, -123.0858],
      [49.31832, -123.08575],
      FORBES_4TH,
    ],
  },
  {
    routeNames: [ROUTES.fourthNV.name],
    description: "4th",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.fourthNVEb.id, ROUTE_VIDEOS.fourthNVWb.id],
    positions: [
      FORBES_4TH,
      [49.31691, -123.08244],
      CHESTERFIELD_4TH_W,
      CHESTERFIELD_4TH_E,
      [49.31422, -123.07628],
      [49.31289, -123.07319],
      ST_ANDREWS_4TH,
      [49.31028, -123.06721],
      SAINT_DAVIDS_4TH,
      [49.3096, -123.06566],
      [49.30957, -123.06556],
      [49.30956, -123.06545],
      [49.30954, -123.06324],
      [49.30951, -123.06024],
      QUEENSBURY_4TH_W,
      QUEENSBURY_4TH_E,
      [49.30946, -123.05444],
      [49.30943, -123.05209],
      [49.30939, -123.04887],
      [49.30935, -123.04875],
      HEYWOOD_4TH_E,
    ],
  },
  {
    routeNames: [ROUTES.fourthNV.name],
    description: "e end, to spirit trail",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.fourthNVWb.id, ROUTE_VIDEOS.fourthNVEb.id],
    videoIdsStartAtEnd: [ROUTE_VIDEOS.fourthNVWb.id],
    positions: [HEYWOOD_4TH_E, HEYWOOD_SPIRIT_NE],
  },
];
