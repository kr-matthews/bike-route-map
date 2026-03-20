import {
  BOUNDARY_DYKE,
  DERWENT_S_DYKE,
  DOCKSIDE_SOUTH_DYKE,
  HOWES_DYKE,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const PEMBINA_S_DYKE = [49.18701, -122.93369];

export const SOUTH_DYKE = [
  {
    routeNames: [ROUTES.southDyke.name],
    description: "west of dockside",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.southDykeEb.id, ROUTE_VIDEOS.alexFraserSb.id],
    videoIdsStartAtStart: [ROUTE_VIDEOS.southDykeEb.id],
    videoIdsStartAtEnd: [ROUTE_VIDEOS.alexFraserSb.id],
    positions: [
      BOUNDARY_DYKE,
      [49.17632, -122.95708],
      [49.17678, -122.95607],
      DOCKSIDE_SOUTH_DYKE,
    ],
  },
  {
    routeNames: [ROUTES.southDyke.name],
    description: "dockside to pembina",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.southDykeEb.id],
    positions: [
      DOCKSIDE_SOUTH_DYKE,
      [49.17769, -122.95409],
      [49.17805, -122.95309],
      [49.17839, -122.95206],
      [49.17948, -122.94939],
      [49.18018, -122.94778],
      [49.18113, -122.94529],
      [49.18193, -122.94306],
      HOWES_DYKE,
      [49.18254, -122.94147],
      [49.18309, -122.94024],
      [49.18396, -122.93844],
      [49.18481, -122.93671],
      [49.18553, -122.93557],
      [49.18632, -122.93444],
      [49.18688, -122.9338],
      PEMBINA_S_DYKE,
    ],
  },
  {
    routeNames: [ROUTES.southDyke.name],
    description: "pembina to derwent",
    type: "quiet",
    videoIds: [
      ROUTE_VIDEOS.boydWb26.id,
      ROUTE_VIDEOS.southDykeEb.id,
      ROUTE_VIDEOS.boydEb26.id,
    ],
    videoIdsStartAtStart: [ROUTE_VIDEOS.boydWb26.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.boydEb26.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.southDykeEb.id],
    positions: [PEMBINA_S_DYKE, [49.18734, -122.93343], DERWENT_S_DYKE],
  },
];
