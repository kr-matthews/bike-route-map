import {
  ARBUTUS_GREENWAY_BEFORE_N_END,
  FIR_5TH,
  GRANVILLE_DRAKE_W,
  HOWE_DRAKE_W,
  PINE_ARBUTUS_GREENWAY,
  ROLSTON_DRAKE_SW,
  ROLSTON_PACIFIC_E,
  ROLSTON_PACIFIC_S,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const W_OF_FIR_5TH = [49.26706, -123.14151];
const FIR_5TH_NE = [49.26714, -123.14083];
const ELEVATION_S = [49.26764, -123.13858];
const ELEVATION_N = [49.27522, -123.12927];
const HOWE_ELEVATION_START = [49.2764, -123.12939];
const HOWE_PROTECTED_START = [49.27525, -123.13036];
const GRANVILLE_HOWE = [49.27418, -123.13095];
const GRANVILLE_NEON_N = [49.27571, -123.12854];
const ROLSTON_NEON_NE = [49.27534, -123.12794];
const GRANVILLE_PAINT_START = [49.27623, -123.1277];

export const GRANVILLE_CONNECTOR = [
  // s end
  {
    description: "new path parallel to fir",
    type: "dedicated",
    videoIds: [
      ROUTE_VIDEOS.granvilleConnectorFirPathNb.id,
      ROUTE_VIDEOS.granvilleConnectorFirPathSb.id,
    ],
    positions: [ARBUTUS_GREENWAY_BEFORE_N_END, W_OF_FIR_5TH],
  },
  {
    description: "pine & 5th",
    type: "quiet",
    videoIds: [
      ROUTE_VIDEOS.granvilleConnectorNb.id,
      ROUTE_VIDEOS.granvilleConnectorSb.id,
    ],
    videoIdsEndAtStart: [ROUTE_VIDEOS.granvilleConnectorSb.id],
    positions: [
      PINE_ARBUTUS_GREENWAY,
      [49.26712, -123.14327],
      [49.2671, -123.14158],
      W_OF_FIR_5TH,
    ],
  },
  {
    description: "crossing fir west",
    type: "dedicated",
    videoIds: [
      ROUTE_VIDEOS.granvilleConnectorNb.id,
      ROUTE_VIDEOS.granvilleConnectorFirPathNb.id,
      ROUTE_VIDEOS.granvilleConnectorSb.id,
      ROUTE_VIDEOS.granvilleConnectorFirPathSb.id,
    ],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.granvilleConnectorFirPathNb.id],
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
      ROUTE_VIDEOS.granvilleConnectorNb.id,
      ROUTE_VIDEOS.granvilleConnectorFirPathSb.id,
      ROUTE_VIDEOS.granvilleConnectorSb.id,
      ROUTE_VIDEOS.granvilleConnectorFirSb.id,
    ],
    videoIdsStartAtEnd: [
      ROUTE_VIDEOS.granvilleConnectorFirSb.id,
      ROUTE_VIDEOS.granvilleConnectorFirPathSb.id,
    ],
    positions: [FIR_5TH, FIR_5TH_NE],
  },

  // n end
  {
    description: "neon",
    type: "dedicated",
    videoIds: [ROUTE_VIDEOS.granvilleConnectorNb.id],
    positions: [GRANVILLE_NEON_N, ROLSTON_NEON_NE],
  },
  {
    description: "rolston",
    type: "combined",
    videoIds: [ROUTE_VIDEOS.granvilleConnectorNb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.granvilleConnectorNb.id],
    positions: [
      ROLSTON_NEON_NE,
      [49.27532, -123.12793],
      [49.27527, -123.12797],
      [49.27481, -123.12864],
      ROLSTON_PACIFIC_E,
    ],
  },
  {
    description: "rolston crossing pacific",
    type: "dedicated",
    positions: [ROLSTON_PACIFIC_E, ROLSTON_PACIFIC_S],
  },
  {
    description: "drake connection via rolston",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.drakeEb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.drakeEb.id],
    positions: [ROLSTON_NEON_NE, ROLSTON_DRAKE_SW],
  },
  {
    description: "granville approaching drake",
    type: "shared",
    oneWay: "recommended",
    undesignated: true,
    videoIds: [ROUTE_VIDEOS.granvilleConnectorGranvilleSb.id],
    videoIdsStartAtStart: [ROUTE_VIDEOS.granvilleConnectorGranvilleSb.id],
    positions: [[49.27716, -123.12631], GRANVILLE_PAINT_START],
  },
  {
    description: "granville crossing drake",
    type: "painted",
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.granvilleConnectorGranvilleSb.id],
    positions: [GRANVILLE_PAINT_START, GRANVILLE_DRAKE_W],
  },
  {
    description: "howe onramp 1",
    type: "shared",
    oneWay: "required",
    undesignated: true,
    elevation: 0.5,
    videoIds: [ROUTE_VIDEOS.granvilleConnectorHoweSb.id],
    positions: [HOWE_DRAKE_W, HOWE_ELEVATION_START],
  },
  {
    description: "howe onramp 2",
    type: "shoulder",
    oneWay: "required",
    undesignated: true,
    elevation: 1,
    videoIds: [ROUTE_VIDEOS.granvilleConnectorHoweSb.id],
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
    videoIds: [ROUTE_VIDEOS.granvilleConnectorHoweSb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.granvilleConnectorHoweSb.id],
    positions: [
      HOWE_PROTECTED_START,
      [49.27459, -123.13064],
      [49.27443, -123.13072],
      [49.27427, -123.13085],
      GRANVILLE_HOWE,
    ],
  },

  // connector
  {
    routeNames: [ROUTES.granvilleConnector.name],
    description: "pre-elevation",
    type: "combined",
    elevation: 0.5,
    videoIds: [
      ROUTE_VIDEOS.granvilleConnectorNb.id,
      ROUTE_VIDEOS.granvilleConnectorSb.id,
    ],
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
    videoIds: [
      ROUTE_VIDEOS.granvilleConnectorSb.id,
      ROUTE_VIDEOS.granvilleConnectorNb.id,
    ],
    positions: [
      ELEVATION_S,
      [49.26804, -123.13857],
      [49.26832, -123.13855],
      [49.26861, -123.13846],
      [49.26889, -123.13833],
      [49.2691, -123.13819],
      [49.26928, -123.13803],
      [49.26948, -123.13781],
      [49.26963, -123.13778],
      [49.26999, -123.13726],
      [49.27042, -123.13661],
      [49.27396, -123.13126],
      GRANVILLE_HOWE,
      [49.27422, -123.13074],
      [49.2745, -123.13037],
      ELEVATION_N,
    ],
  },
  {
    routeNames: [ROUTES.granvilleConnector.name],
    description: "post-elevated, to neon",
    type: "dedicated",
    elevation: 0.5,
    videoIds: [
      ROUTE_VIDEOS.granvilleConnectorSb.id,
      ROUTE_VIDEOS.granvilleConnectorNb.id,
    ],
    positions: [ELEVATION_N, GRANVILLE_NEON_N],
  },
  {
    routeNames: [ROUTES.granvilleConnector.name],
    description: "neon to drake",
    type: "dedicated",
    videoIds: [
      ROUTE_VIDEOS.granvilleConnectorSb.id,
      ROUTE_VIDEOS.granvilleConnectorGranvilleSb.id,
    ],
    videoIdsEndAtStart: [ROUTE_VIDEOS.granvilleConnectorGranvilleSb.id],
    positions: [GRANVILLE_NEON_N, GRANVILLE_DRAKE_W],
  },
];
