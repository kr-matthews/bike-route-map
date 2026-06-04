import {
  BC_PARKWAY_LONDON,
  EIGHTH_8TH_NE,
  FIFTEENTH_LONDON,
  TENTH_7TH,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const TENTH_DUBLIN = [49.21395, -122.93233];
const EIGHTH_DUBLIN_E = [49.21552, -122.92942];
const EIGHTH_N_OF_8TH = [49.21435, -122.92791];
const TWENTIETH_LONDON_S_E = [49.20478, -122.95072];
const TWENTIETH_LONDON_N_E = [49.20508, -122.95107];

export const LONDON_DUBLIN_GREENWAY = [
  {
    description: "10th: connection to crosstown",
    type: "quiet",
    positions: [
      TENTH_DUBLIN,
      [49.21322, -122.9314],
      [49.21248, -122.93047],
      [49.21172, -122.92951],
      TENTH_7TH,
    ],
  },

  {
    routeNames: [ROUTES.londonDublin.name],
    description: "bc parkway to twentieth",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.londonDublinEb.id, ROUTE_VIDEOS.londonDublinWb.id],
    videoIdsStartAtStart: [ROUTE_VIDEOS.londonDublinEb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.londonDublinWb.id],
    positions: [
      BC_PARKWAY_LONDON,
      [49.20168, -122.95648],
      [49.20273, -122.95453],
      [49.20378, -122.95258],
      TWENTIETH_LONDON_S_E,
    ],
  },
  {
    routeNames: [ROUTES.londonDublin.name],
    description: "along twentieth",
    type: "combined",
    videoIds: [ROUTE_VIDEOS.londonDublinEb.id, ROUTE_VIDEOS.londonDublinWb.id],
    positions: [TWENTIETH_LONDON_S_E, TWENTIETH_LONDON_N_E],
  },
  {
    routeNames: [ROUTES.londonDublin.name],
    description: "twentieth to eighth",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.londonDublinWb.id, ROUTE_VIDEOS.londonDublinEb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.londonDublinEb.id],
    positions: [
      TWENTIETH_LONDON_N_E,
      [49.20625, -122.94889],
      [49.20735, -122.94685],
      [49.20832, -122.94505],
      [49.20918, -122.94344],
      FIFTEENTH_LONDON,
      [49.21103, -122.94001],
      [49.21187, -122.93846],
      [49.21269, -122.93692],
      [49.21369, -122.93508],
      [49.21468, -122.93326],
      TENTH_DUBLIN,
      EIGHTH_DUBLIN_E,
    ],
  },
  {
    description: "eighth sidewalk",
    type: "other",
    undesignated: true,
    videoIds: [ROUTE_VIDEOS.londonDublinWb.id],
    positions: [EIGHTH_DUBLIN_E, EIGHTH_N_OF_8TH],
  },
  {
    description: "eighth st MUP",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.londonDublinWb.id],
    positions: [EIGHTH_N_OF_8TH, EIGHTH_8TH_NE],
  },
  {
    description: "8th ave MUP",
    type: "mixed",
    positions: [EIGHTH_8TH_NE, [49.21439, -122.92714]],
  },
];
