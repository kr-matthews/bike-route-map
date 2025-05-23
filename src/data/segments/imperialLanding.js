import {
  RAILWAY_GREENWAY_WESTWATER,
  RAILWAY_WESTWATER,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const WESTWATER_IMPERIAL = [49.12182, -123.17157];
const WESTWATER_W = [49.12262, -123.17279];
const IMPERIAL_WESTWATER = [49.12293, -123.174];

export const IMPERIAL_LANDING = [
  {
    routeNames: [ROUTES.imperialLandingTrail.name],
    description: "imperial landing",
    type: "mixed",
    positions: [
      [49.12381, -123.18111],
      [49.12378, -123.18103],
      [49.1237, -123.18095],
      [49.12354, -123.18081],
      [49.12339, -123.18058],
      [49.1233, -123.18031],
      [49.12324, -123.18013],
      [49.12276, -123.17764],
      [49.12248, -123.17614],
      [49.1225, -123.17606],
      [49.12256, -123.17598],
      [49.123, -123.17588],
      [49.12324, -123.17581],
      [49.12339, -123.17552],
      [49.12319, -123.17478],
      [49.123, -123.17408],
      IMPERIAL_WESTWATER,
      [49.12293, -123.174],
      [49.12279, -123.17402],
      [49.12257, -123.17414],
      [49.12192, -123.17388],
      [49.12185, -123.17379],
      [49.12157, -123.17265],
      [49.12156, -123.17252],
      [49.12158, -123.17242],
      [49.12181, -123.17189],
      [49.12183, -123.17182],
      [49.12184, -123.17174],
      WESTWATER_IMPERIAL,
    ],
  },
  {
    description: "path to westwater",
    type: "mixed",
    positions: [IMPERIAL_WESTWATER, WESTWATER_W],
  },
  {
    description: "westwater w of railway",
    type: "quiet",
    positions: [WESTWATER_W, RAILWAY_WESTWATER],
  },
  {
    description: "westwater s of railway",
    type: "quiet",
    videoIds: [VIDEOS.railwaySb.id],
    videoIdsEndAtStart: [VIDEOS.railwaySb.id],
    positions: [WESTWATER_IMPERIAL, RAILWAY_WESTWATER],
  },
  {
    description: "westwater e of railway",
    type: "quiet",
    positions: [
      WESTWATER_IMPERIAL,
      [49.12171, -123.1716],
      [49.12166, -123.17159],
      [49.1216, -123.17153],
      [49.12156, -123.17147],
      [49.1214, -123.17096],
      [49.12134, -123.17073],
      [49.1213, -123.17051],
      [49.12129, -123.17027],
      [49.1213, -123.17012],
      [49.12131, -123.17004],
      [49.12135, -123.16995],
      [49.12142, -123.1698],
      [49.12168, -123.16952],
      [49.12172, -123.16943],
      [49.12172, -123.16934],
      RAILWAY_GREENWAY_WESTWATER,
    ],
  },
];
