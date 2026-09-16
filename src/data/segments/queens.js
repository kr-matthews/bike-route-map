import { MOSQUITO_CREEK_QUEENS_S } from "../intersections";
import { ROUTES } from "../routes";

const DEL_RIO_QUEENS_N = [49.33663, -123.09317];

export const QUEENS = [
  {
    routeNames: [ROUTES.queens.name],
    description: "eb",
    type: "dedicated",
    oneWay: "required",
    positions: [
      [49.33661, -123.09893],
      MOSQUITO_CREEK_QUEENS_S,
      [49.33652, -123.0932],
    ],
  },

  //
  {
    routeNames: [ROUTES.queens.name],
    description: "wb painted",
    type: "painted",
    oneWay: "required",
    positions: [[49.33662, -123.09109], DEL_RIO_QUEENS_N],
  },
  {
    routeNames: [ROUTES.queens.name],
    description: "wb protected",
    type: "dedicated",
    oneWay: "required",
    positions: [DEL_RIO_QUEENS_N, [49.33668, -123.09919]],
  },
];
