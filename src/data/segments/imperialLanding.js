import {
  RAILWAY_GREENWAY_WESTWATER,
  RAILWAY_WESTWATER,
  WEST_DYKE_S,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const SEVENTH_CHATHAM = [49.12642, -123.19189];
const SEVENTH_MONCTON_N = [49.12527, -123.19189];
const SIXTH_MONCTON_NW = [49.12527, -123.19035];
const W_OF_FOURTH_MONCTON = [49.12527, -123.18782];
const W_OF_THIRD_MONCTON = [49.12519, -123.18642];
const THIRD_BAYVIEW = [49.12449, -123.18577];
const NO_1_BAYVIEW_SE = [49.12381, -123.18111];

const WESTWATER_IMPERIAL = [49.12182, -123.17157];
const WESTWATER_W = [49.12262, -123.17279];
const IMPERIAL_WESTWATER = [49.12293, -123.174];

export const IMPERIAL_LANDING = [
  {
    description: "steveston - parking lot",
    type: "quiet",
    undesignated: true,
    positions: [
      WEST_DYKE_S,
      [49.12633, -123.19315],
      [49.12638, -123.193],
      [49.12642, -123.19278],
      [49.12643, -123.1926],
      SEVENTH_CHATHAM,
    ],
  },
  {
    description: "steveston - seventh",
    type: "quiet",
    undesignated: true,
    positions: [SEVENTH_CHATHAM, SEVENTH_MONCTON_N],
  },
  {
    description: "steveston - moncton path w end",
    type: "mixed",
    positions: [SEVENTH_MONCTON_N, SIXTH_MONCTON_NW],
  },
  {
    description: "steveston - moncton industrial",
    type: "quiet",
    undesignated: true,
    positions: [SIXTH_MONCTON_NW, [49.12524, -123.19017], W_OF_FOURTH_MONCTON],
  },
  {
    description: "steveston - moncton 2nd path",
    type: "mixed",
    undesignated: true,
    positions: [
      W_OF_FOURTH_MONCTON,
      [49.12528, -123.18729],
      [49.12528, -123.18683],
      [49.12527, -123.18667],
      [49.12524, -123.18656],
      [49.12522, -123.18648],
      W_OF_THIRD_MONCTON,
    ],
  },
  {
    description: "steveston - moncton & third",
    type: "quiet",
    undesignated: true,
    positions: [
      W_OF_THIRD_MONCTON,
      [49.12519, -123.18578],
      [49.12453, -123.18578],
      THIRD_BAYVIEW,
    ],
  },
  {
    description: "steveston - bayview",
    type: "quiet",
    positions: [
      THIRD_BAYVIEW,
      [49.12446, -123.18575],
      [49.12442, -123.18568],
      [49.12439, -123.18558],
      [49.12389, -123.18227],
      [49.12387, -123.1821],
      [49.12386, -123.18197],
      [49.12386, -123.18187],
      [49.12389, -123.18121],
      NO_1_BAYVIEW_SE,
    ],
  },
  {
    routeNames: [ROUTES.imperialLandingTrail.name],
    description: "imperial landing",
    type: "mixed",
    positions: [
      NO_1_BAYVIEW_SE,
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
