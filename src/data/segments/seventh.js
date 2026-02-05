import { SEVENTH_AGNES } from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const SEVENTH_BELMONT = [49.21162, -122.921];
const BELMONT_E = [49.2123, -122.91972];

export const SEVENTH = [
  {
    routeNames: [ROUTES.seventh.name],
    description: "primary",
    type: "dedicated",
    videoIds: [ROUTE_VIDEOS.seventhNwNb.id],
    videoIdsStartAtStart: [ROUTE_VIDEOS.seventhNwNb.id],
    positions: [SEVENTH_AGNES, [49.20412, -122.91155], SEVENTH_BELMONT],
  },
  {
    routeNames: [ROUTES.seventh.name],
    description: "belmont",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.seventhNwNb.id],
    positions: [SEVENTH_BELMONT, BELMONT_E],
  },
  {
    description: "belmont plaza",
    type: "mixed",
    undesignated: true,
    videoIds: [ROUTE_VIDEOS.seventhNwNb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.seventhNwNb.id],
    positions: [BELMONT_E, [49.21246, -122.91942]],
  },
];
