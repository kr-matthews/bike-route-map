import {
  GRAND_BLVD_E_KEITH_SW,
  GRAND_BLVD_W_KEITH_E,
  GRAND_BLVD_W_KEITH_NE,
  GRAND_BLVD_W_KEITH_SE,
  QUEENSBURY_3RD_NE,
  QUEENSBURY_3RD_NW,
  QUEENSBURY_3RD_SE,
  QUEENSBURY_3RD_SW,
  QUEENSBURY_4TH_E,
  QUEENSBURY_4TH_W,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const QUEENSBURY_NB_LANE_START = [49.30903, -123.05718];
const QUEENSBURY_SB_LANE_END = [49.30902, -123.05729];
const QUEENSBURY_7TH_W = [49.31249, -123.05721];

const NB_BEFORE_KEITH = [49.31328, -123.05706];
const QUEENSBURY_KEITH_SE = [49.31343, -123.05706];
const QUEENSBURY_KEITH_SW = [49.31343, -123.05721];

export const QUEENSBURY = [
  // keith
  {
    description: "keith s side, w to queensbury and crossing",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.eKeithWb.id, ROUTE_VIDEOS.queensburyNb.id],
    positions: [
      GRAND_BLVD_W_KEITH_SE,
      QUEENSBURY_KEITH_SW,
      QUEENSBURY_KEITH_SE,
    ],
  },
  {
    description: "keith s side, queensbury to e",
    type: "mixed",
    oneWay: "recommended",
    positions: [GRAND_BLVD_E_KEITH_SW, QUEENSBURY_KEITH_SE],
  },

  {
    description: "w crossing keith 1",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.queensburyNb.id, ROUTE_VIDEOS.eKeithWb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.queensburyNb.id],
    positions: [GRAND_BLVD_W_KEITH_SE, GRAND_BLVD_W_KEITH_E],
  },

  {
    description: "w crossing keith 2",
    type: "mixed",
    positions: [GRAND_BLVD_W_KEITH_E, GRAND_BLVD_W_KEITH_NE],
  },

  // nb
  {
    routeNames: [ROUTES.queensbury.name],
    description: "nb crossing 3rd",
    type: "painted",
    oneWay: "required",
    positions: [QUEENSBURY_3RD_SE, QUEENSBURY_3RD_NE],
  },
  {
    routeNames: [ROUTES.queensbury.name],
    description: "nb shared",
    type: "shared",
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.queensburyNb.id],
    videoIdsStartAtStart: [ROUTE_VIDEOS.queensburyNb.id],
    positions: [
      QUEENSBURY_3RD_NE,
      [49.30861, -123.05718],
      [49.30892, -123.05717],
      QUEENSBURY_NB_LANE_START,
    ],
  },
  {
    routeNames: [ROUTES.queensbury.name],
    description: "nb painted",
    type: "painted",
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.queensburyNb.id],
    positions: [QUEENSBURY_NB_LANE_START, QUEENSBURY_4TH_E, NB_BEFORE_KEITH],
  },
  {
    routeNames: [ROUTES.queensbury.name],
    description: "nb ramp to sidewalk",
    type: "combined",
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.queensburyNb.id, ROUTE_VIDEOS.eKeithWb.id],
    videoIdsStartAtStart: [ROUTE_VIDEOS.eKeithWb.id],
    positions: [NB_BEFORE_KEITH, QUEENSBURY_KEITH_SE],
  },

  // sb
  {
    routeNames: [ROUTES.queensbury.name],
    description: "sb shared start",
    type: "shared",
    oneWay: "required",
    positions: [QUEENSBURY_KEITH_SW, [49.31295, -123.0572], QUEENSBURY_7TH_W],
  },
  {
    routeNames: [ROUTES.queensbury.name],
    description: "sb painted",
    type: "painted",
    oneWay: "required",
    positions: [QUEENSBURY_7TH_W, QUEENSBURY_4TH_W, QUEENSBURY_SB_LANE_END],
  },
  {
    routeNames: [ROUTES.queensbury.name],
    description: "sb shared end",
    type: "shared",
    oneWay: "required",
    positions: [
      QUEENSBURY_SB_LANE_END,
      [49.30861, -123.05729],
      QUEENSBURY_3RD_NW,
    ],
  },
  {
    routeNames: [ROUTES.queensbury.name],
    description: "sb crossing 3rd",
    type: "painted",
    oneWay: "required",
    positions: [QUEENSBURY_3RD_NW, QUEENSBURY_3RD_SW],
  },
];
