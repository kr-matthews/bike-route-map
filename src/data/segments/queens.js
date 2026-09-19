import { MOSQUITO_CREEK_QUEENS_S } from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const DEL_RIO_QUEENS_S = [49.33652, -123.0932];
const DEL_RIO_QUEENS_N = [49.33663, -123.09317];

const WOODBINE_QUEENS_NE = [49.33668, -123.09919];
const WOODBINE_QUEENS_SE = [49.33661, -123.09893];
const WOODBINE_QUEENS_W = [49.33665, -123.09938];
const BEWICKE_QUEENS_E = [49.33658, -123.09098];
const BEWICKE_QUEENS_SW = [49.33657, -123.0913];
const BEWICKE_QUEENS_NW = [49.33662, -123.09109];

export const QUEENS = [
  // both
  {
    description: "queens & edgemont",
    type: "shared",
    undesignated: true,
    videoIds: [ROUTE_VIDEOS.wQueensWb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.wQueensWb.id],
    positions: [
      [49.3375, -123.10192],
      [49.33666, -123.10078],
      WOODBINE_QUEENS_W,
    ],
  },
  {
    description: "queens, bewicke to jones",
    type: "shared",
    undesignated: true,
    videoIds: [ROUTE_VIDEOS.wQueensWb.id],
    videoIdsStartAtEnd: [ROUTE_VIDEOS.wQueensWb.id],
    positions: [
      BEWICKE_QUEENS_E,
      [49.33656, -123.0881],
      [49.33655, -123.08135],
    ],
  },

  // eb
  {
    description: "eb start",
    type: "shared",
    oneWay: "recommended",
    undesignated: true,
    positions: [WOODBINE_QUEENS_W, WOODBINE_QUEENS_SE],
  },
  {
    routeNames: [ROUTES.queens.name],
    description: "eb protected",
    type: "dedicated",
    oneWay: "required",
    positions: [WOODBINE_QUEENS_SE, MOSQUITO_CREEK_QUEENS_S, DEL_RIO_QUEENS_S],
  },
  {
    routeNames: [ROUTES.queens.name],
    description: "eb shared",
    type: "shared",
    oneWay: "recommended",
    positions: [
      DEL_RIO_QUEENS_S,
      [49.33654, -123.09276],
      [49.33657, -123.09212],
      BEWICKE_QUEENS_SW,
    ],
  },
  {
    description: "eb end",
    type: "shared",
    oneWay: "recommended",
    undesignated: true,
    positions: [BEWICKE_QUEENS_SW, BEWICKE_QUEENS_E],
  },

  // wb
  {
    description: "wb start",
    type: "shared",
    oneWay: "recommended",
    hideArrows: true,
    undesignated: true,
    videoIds: [ROUTE_VIDEOS.wQueensWb.id],
    positions: [BEWICKE_QUEENS_E, BEWICKE_QUEENS_NW],
  },
  {
    routeNames: [ROUTES.queens.name],
    description: "wb painted",
    type: "painted",
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.wQueensWb.id],
    positions: [BEWICKE_QUEENS_NW, DEL_RIO_QUEENS_N],
  },
  {
    routeNames: [ROUTES.queens.name],
    description: "wb protected",
    type: "dedicated",
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.wQueensWb.id],
    positions: [DEL_RIO_QUEENS_N, WOODBINE_QUEENS_NE],
  },
  {
    description: "wb end",
    type: "shared",
    oneWay: "recommended",
    hideArrows: true,
    undesignated: true,
    videoIds: [ROUTE_VIDEOS.wQueensWb.id],
    positions: [WOODBINE_QUEENS_NE, WOODBINE_QUEENS_W],
  },
];
