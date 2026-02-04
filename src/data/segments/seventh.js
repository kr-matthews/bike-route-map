import { SEVENTH_AGNES } from "../intersections";
import { ROUTES } from "../routes";

const SEVENTH_BELMONT = [49.21162, -122.921];
const BELMONT_E = [49.2123, -122.91972];

export const SEVENTH = [
  {
    routeNames: [ROUTES.seventh.name],
    description: "primary",
    type: "dedicated",
    positions: [SEVENTH_AGNES, [49.20412, -122.91155], SEVENTH_BELMONT],
  },
  {
    routeNames: [ROUTES.seventh.name],
    description: "belmont",
    type: "quiet",
    positions: [SEVENTH_BELMONT, BELMONT_E],
  },
  {
    description: "belmont plaza",
    type: "mixed",
    undesignated: true,
    positions: [BELMONT_E, [49.21246, -122.91942]],
  },
];
