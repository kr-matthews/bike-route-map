import {
  BC_PARKWAY_LONDON,
  FIFTEENTH_LONDON,
  TENTH_7TH,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const TENTH_DUBLIN = [49.21395, -122.93233];
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
    videoIds: [VIDEOS.londonDublinEb.id],
    videoIdsStartAtStart: [VIDEOS.londonDublinEb.id],
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
    videoIds: [VIDEOS.londonDublinEb.id],
    positions: [TWENTIETH_LONDON_S_E, TWENTIETH_LONDON_N_E],
  },
  {
    routeNames: [ROUTES.londonDublin.name],
    description: "twentieth to eighth",
    type: "quiet",
    videoIds: [VIDEOS.londonDublinEb.id],
    videoIdsEndAtEnd: [VIDEOS.londonDublinEb.id],
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
      [49.21546, -122.92954],
    ],
  },
];
