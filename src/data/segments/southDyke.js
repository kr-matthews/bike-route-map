import {
  BOUNDARY_DYKE,
  DOCKSIDE_SOUTH_DYKE,
  HOWES_DYKE,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const SOUTH_DYKE = [
  {
    routeNames: [ROUTES.southDyke.name],
    description: "all",
    type: "quiet",
    videoIds: [VIDEOS.southDykeEb.id],
    videoIdsStartAtStart: [VIDEOS.southDykeEb.id],
    videoIdsEndAtEnd: [VIDEOS.southDykeEb.id],
    positions: [
      BOUNDARY_DYKE,
      [49.17632, -122.95708],
      [49.17678, -122.95607],
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
      [49.18701, -122.93369],
      [49.18734, -122.93343],
      [49.18745, -122.93322],
    ],
  },
];
