import {
  FIR_5TH,
  GRANVILLE_DRAKE_W,
  HOWE_DRAKE_W,
  PINE_ARBUTUS_GREENWAY,
  ROLSTON_DRAKE_SW,
  ROLSTON_PACIFIC_E,
  ROLSTON_PACIFIC_S,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const W_OF_FIR_5TH = [49.2671, -123.14128];
const FIR_5TH_NE = [49.26714, -123.14083];
const ELEVATION_S = [49.26764, -123.13858];
const ELEVATION_N = [49.27522, -123.12927];
const HOWE_ELEVATION_START = [49.2764, -123.12939];
const HOWE_PROTECTED_START = [49.27525, -123.13036];
const GRANVILLE_HOWE = [49.27427, -123.13085];
const GRANVILLE_NEON_N = [49.27572, -123.12852];
const ROLSTON_NEON_NE = [49.27535, -123.12788];
const GRANVILLE_PAINT_START = [49.27623, -123.1277];

export const GRANVILLE_CONNECTOR = [
  // s end
  {
    description: "pine & 5th",
    type: "quiet",
    videoIds: [VIDEOS.granvilleConnectorNb.id, VIDEOS.granvilleConnectorSb.id],
    videoIdsEndAtStart: [VIDEOS.granvilleConnectorSb.id],
    positions: [PINE_ARBUTUS_GREENWAY, [49.26712, -123.14327], W_OF_FIR_5TH],
  },
  {
    description: "crossing fir west",
    type: "dedicated",
    videoIds: [VIDEOS.granvilleConnectorNb.id, VIDEOS.granvilleConnectorSb.id],
    positions: [
      W_OF_FIR_5TH,
      [49.26706, -123.14122],
      [49.26706, -123.14102],
      FIR_5TH,
    ],
  },
  {
    description: "crossing fir east",
    type: "dedicated",
    videoIds: [
      VIDEOS.granvilleConnectorNb.id,
      VIDEOS.granvilleConnectorSb.id,
      VIDEOS.granvilleConnectorFirSb.id,
    ],
    videoIdsStartAtEnd: [VIDEOS.granvilleConnectorFirSb.id],
    positions: [FIR_5TH, FIR_5TH_NE],
  },

  // n end
  {
    description: "neon & rolston",
    type: "comfortable",
    videoIds: [VIDEOS.granvilleConnectorNb.id],
    videoIdsEndAtEnd: [VIDEOS.granvilleConnectorNb.id],
    positions: [
      GRANVILLE_NEON_N,
      [49.27538, -123.12795],
      ROLSTON_NEON_NE,
      [49.27531, -123.12785],
      [49.27526, -123.1279],
      [49.2748, -123.1286],
      ROLSTON_PACIFIC_E,
    ],
  },
  {
    description: "rolston crossing pacific",
    type: "comfortable",
    positions: [ROLSTON_PACIFIC_E, ROLSTON_PACIFIC_S],
  },
  {
    description: "drake connection via rolston",
    type: "quiet",
    videoIds: [VIDEOS.drakeEb.id],
    videoIdsEndAtStart: [VIDEOS.drakeEb.id],
    positions: [ROLSTON_NEON_NE, ROLSTON_DRAKE_SW],
  },
  {
    description: "granville approaching drake",
    type: "shared",
    oneWay: "recommended",
    undesignated: true,
    videoIds: [VIDEOS.granvilleConnectorGranvilleSb.id],
    videoIdsStartAtStart: [VIDEOS.granvilleConnectorGranvilleSb.id],
    positions: [[49.27716, -123.12631], GRANVILLE_PAINT_START],
  },
  {
    description: "granville crossing drake",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.granvilleConnectorGranvilleSb.id],
    positions: [GRANVILLE_PAINT_START, GRANVILLE_DRAKE_W],
  },
  {
    description: "howe onramp 1",
    type: "shared",
    oneWay: "required",
    undesignated: true,
    elevation: 0.5,
    videoIds: [VIDEOS.granvilleConnectorHoweSb.id],
    positions: [HOWE_DRAKE_W, HOWE_ELEVATION_START],
  },
  {
    description: "howe onramp 2",
    type: "shoulder",
    oneWay: "required",
    undesignated: true,
    elevation: 1,
    videoIds: [VIDEOS.granvilleConnectorHoweSb.id],
    positions: [
      HOWE_ELEVATION_START,
      [49.27625, -123.12956],
      [49.27611, -123.12978],
      [49.276, -123.12995],
      [49.27592, -123.13003],
      [49.27583, -123.13011],
      [49.27574, -123.13016],
      HOWE_PROTECTED_START,
    ],
  },
  {
    description: "howe onramp 3",
    type: "dedicated",
    oneWay: "required",
    elevation: 1,
    videoIds: [VIDEOS.granvilleConnectorHoweSb.id],
    videoIdsEndAtEnd: [VIDEOS.granvilleConnectorHoweSb.id],
    positions: [
      HOWE_PROTECTED_START,
      [49.27459, -123.13064],
      [49.27443, -123.13072],
      GRANVILLE_HOWE,
    ],
  },

  // connector
  {
    routeNames: [ROUTES.granvilleConnector.name],
    description: "pre-elevation",
    type: "combined",
    elevation: 0.5,
    videoIds: [VIDEOS.granvilleConnectorNb.id, VIDEOS.granvilleConnectorSb.id],
    positions: [
      FIR_5TH_NE,
      [49.26714, -123.14058],
      [49.26715, -123.14038],
      [49.26714, -123.14018],
      [49.2671, -123.14001],
      [49.26704, -123.13986],
      [49.26695, -123.13966],
      [49.26691, -123.13948],
      [49.26689, -123.13931],
      [49.2669, -123.13912],
      [49.26695, -123.13894],
      [49.26704, -123.13877],
      [49.26714, -123.13867],
      [49.26729, -123.13861],
      [49.26753, -123.13858],
      ELEVATION_S,
    ],
  },
  {
    routeNames: [ROUTES.granvilleConnector.name],
    description: "elevated",
    type: "combined",
    elevation: 1,
    videoIds: [VIDEOS.granvilleConnectorSb.id, VIDEOS.granvilleConnectorNb.id],
    positions: [
      ELEVATION_S,
      [49.26817, -123.13854],
      [49.26844, -123.13849],
      [49.26864, -123.13842],
      [49.26887, -123.13831],
      [49.26925, -123.13803],
      [49.26958, -123.13772],
      [49.26968, -123.13769],
      [49.26994, -123.13734],
      [49.27042, -123.13661],
      [49.27396, -123.13126],
      [49.27418, -123.13095],
      GRANVILLE_HOWE,
      [49.27428, -123.1307],
      ELEVATION_N,
    ],
  },
  {
    routeNames: [ROUTES.granvilleConnector.name],
    description: "post-elevated, to neon",
    type: "dedicated",
    elevation: 0.5,
    videoIds: [VIDEOS.granvilleConnectorSb.id, VIDEOS.granvilleConnectorNb.id],
    positions: [ELEVATION_N, GRANVILLE_NEON_N],
  },
  {
    routeNames: [ROUTES.granvilleConnector.name],
    description: "neon to drake",
    type: "dedicated",
    videoIds: [
      VIDEOS.granvilleConnectorSb.id,
      VIDEOS.granvilleConnectorGranvilleSb.id,
    ],
    videoIdsEndAtStart: [VIDEOS.granvilleConnectorGranvilleSb.id],
    positions: [GRANVILLE_NEON_N, GRANVILLE_DRAKE_W],
  },
];
