import { FIRST_AGNES, MERIVALE_AGNES } from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const AGNES = [
  {
    routeNames: [ROUTES.agnes.name],
    description: "primary",
    type: "dedicated",
    videoIds: [VIDEOS.agnesWb.id, VIDEOS.agnesEb.id],
    videoIdsStartAtStart: [VIDEOS.agnesEb.id],
    videoIdsEndAtStart: [VIDEOS.agnesWb.id],
    positions: [
      [49.20409, -122.91125],
      [49.20483, -122.90985],
      [49.2062, -122.90731],
      MERIVALE_AGNES,
      [49.20814, -122.9037],
      [49.20823, -122.90354],
      [49.20825, -122.90347],
      [49.20831, -122.90336],
      [49.20836, -122.90332],
      FIRST_AGNES,
    ],
  },
  {
    routeNames: [ROUTES.agnes.name],
    description: "east bit",
    type: "dedicated",
    videoIds: [VIDEOS.agnesWb.id],
    videoIdsStartAtEnd: [VIDEOS.agnesWb.id],
    positions: [FIRST_AGNES, [49.20946, -122.90125]],
  },
];
