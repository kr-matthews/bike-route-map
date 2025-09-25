import {
  CANFOR_BRAID,
  KING_EDWARD_LOUGHEED_NW,
  KING_EDWARD_LOUGHEED_SW,
  LEEDER_UNITED,
  UNITED_MARY_HILL_NW,
  UNITED_PORT_MANN,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const BRUNETTE_RIVER_BRAID_NW = [49.22931, -122.87744];
const BRUNETTE_RIVER_BRAID_NE = [49.22914, -122.87706];

const BRIGANTINE_UNITED = [49.22895, -122.84855];
const BRIGANTINE_HARTLEY = [49.22706, -122.84898];
const FAWCETT_UNITED_S = [49.22855, -122.83421];
const FAWCETT_UNITED_NE = [49.22873, -122.83385];
const UNITED_S_OF_PORT_MANN = [49.22681, -122.82055];

const KING_EDWARD_UNITED_NW = [49.23061, -122.86184];
const KING_EDWARD_ELEVATION_START = [49.23141, -122.86171];
const KING_EDWARD_ELEVATION_END = [49.23318, -122.86179];

export const UNITED = [
  // king edward
  {
    description: "king edward south end",
    elevation: 0.5,
    type: "mixed",
    positions: [
      KING_EDWARD_UNITED_NW,
      [49.23068, -122.86176],
      KING_EDWARD_ELEVATION_START,
    ],
  },
  {
    description: "king edward bridge",
    type: "mixed",
    elevation: 1,
    positions: [KING_EDWARD_ELEVATION_START, KING_EDWARD_ELEVATION_END],
  },
  {
    description: "king edward bridge north end",
    type: "mixed",
    elevation: 0.5,
    positions: [
      KING_EDWARD_ELEVATION_END,
      [49.23416, -122.86184],
      [49.23428, -122.86192],
      KING_EDWARD_LOUGHEED_SW,
      KING_EDWARD_LOUGHEED_NW,
    ],
  },

  // brigantine bit
  {
    description: "brigantine s",
    type: "quiet",
    positions: [
      BRIGANTINE_HARTLEY,
      [49.2256, -122.84935],
      [49.22554, -122.84943],
    ],
  },

  // united
  {
    routeNames: [ROUTES.united.name],
    description: "braid: west of old bridge",
    elevation: 0.5,
    type: "mixed",
    videoIds: [VIDEOS.unitedEB.id, VIDEOS.unitedWB.id],
    positions: [
      CANFOR_BRAID,
      [49.22978, -122.87835],
      [49.22974, -122.87827],
      [49.22963, -122.87819],
      BRUNETTE_RIVER_BRAID_NW,
    ],
  },
  {
    routeNames: [ROUTES.united.name],
    description: "braid bridge",
    type: "other",
    elevation: 1,
    videoIds: [VIDEOS.unitedEB.id, VIDEOS.unitedWB.id],
    positions: [BRUNETTE_RIVER_BRAID_NW, BRUNETTE_RIVER_BRAID_NE],
  },
  {
    routeNames: [ROUTES.united.name],
    description: "braid/united: bridge to king edward",
    type: "mixed",
    videoIds: [VIDEOS.unitedEB.id, VIDEOS.unitedWB.id],
    positions: [
      BRUNETTE_RIVER_BRAID_NE,
      [49.22903, -122.8768],
      [49.22901, -122.87665],
      [49.22904, -122.87654],
      [49.22905, -122.8762],
      [49.2291, -122.87575],
      [49.22917, -122.8756],
      [49.22919, -122.87411],
      [49.22919, -122.87199],
      [49.22922, -122.87129],
      [49.22947, -122.86864],
      [49.22977, -122.8657],
      [49.22988, -122.8652],
      [49.23002, -122.8647],
      [49.23043, -122.86361],
      [49.23052, -122.86325],
      [49.23057, -122.86286],
      KING_EDWARD_UNITED_NW,
    ],
  },
  {
    routeNames: [ROUTES.united.name],
    description: "on road, king edward to brigantine",
    type: "shared",
    videoIds: [VIDEOS.unitedWB.id, VIDEOS.unitedEB.id],
    positions: [
      KING_EDWARD_UNITED_NW,
      [49.2305, -122.86142],
      [49.2305, -122.85931],
      [49.23048, -122.85895],
      [49.23042, -122.85848],
      [49.23034, -122.85812],
      [49.2299, -122.85646],
      [49.22982, -122.85612],
      [49.22974, -122.85565],
      [49.22961, -122.85494],
      [49.22954, -122.85442],
      [49.22935, -122.85259],
      BRIGANTINE_UNITED,
    ],
  },
  {
    routeNames: [ROUTES.united.name],
    description: "brigantine, hartley, fawcett",
    type: "quiet",
    videoIds: [VIDEOS.unitedWB.id, VIDEOS.unitedEB.id],
    positions: [
      BRIGANTINE_UNITED,
      BRIGANTINE_HARTLEY,
      [49.22616, -122.84017],
      [49.22596, -122.83816],
      [49.22591, -122.83729],
      [49.22591, -122.83418],
      [49.22823, -122.83424],
      FAWCETT_UNITED_S,
    ],
  },
  {
    routeNames: [ROUTES.united.name],
    description: "fawcett to leeder",
    type: "mixed",
    videoIds: [VIDEOS.unitedWB.id, VIDEOS.unitedEB.id],
    positions: [
      FAWCETT_UNITED_S,
      [49.22854, -122.8341],
      FAWCETT_UNITED_NE,
      [49.22862, -122.83329],
      [49.22848, -122.83285],
      [49.22835, -122.83257],
      [49.22821, -122.83232],
      [49.22792, -122.8319],
      [49.22778, -122.83164],
      [49.22771, -122.83144],
      [49.22766, -122.83129],
      [49.22759, -122.83091],
      [49.22759, -122.83054],
      [49.22762, -122.8304],
      LEEDER_UNITED,
    ],
  },
  {
    routeNames: [ROUTES.united.name],
    description: "leeder to port mann",
    type: "mixed",
    videoIds: [VIDEOS.unitedWB.id, VIDEOS.lougheedEb.id, VIDEOS.unitedEB.id],
    positions: [
      LEEDER_UNITED,
      [49.2276, -122.83012],
      [49.2276, -122.82905],
      [49.22759, -122.82879],
      [49.22755, -122.82852],
      [49.22746, -122.82817],
      [49.22737, -122.82787],
      [49.22733, -122.82767],
      [49.22739, -122.82707],
      [49.22737, -122.82692],
      [49.22713, -122.8264],
      [49.22704, -122.826],
      [49.22687, -122.82553],
      [49.22686, -122.82546],
      [49.22684, -122.82532],
      [49.22685, -122.82518],
      [49.22688, -122.82503],
      [49.22696, -122.82483],
      [49.22708, -122.82469],
      [49.22745, -122.82456],
      [49.22753, -122.82451],
      [49.2276, -122.82422],
      [49.22747, -122.82339],
      [49.22725, -122.82235],
      [49.22691, -122.82104],
      UNITED_S_OF_PORT_MANN,
    ],
  },
  {
    routeNames: [ROUTES.united.name],
    description: "under port mann",
    type: "mixed",
    videoIds: [
      VIDEOS.portMannEB.id,
      VIDEOS.unitedWB.id,
      VIDEOS.lougheedEb.id,
      VIDEOS.portMannWB.id,
      VIDEOS.unitedEB.id,
    ],
    videoIdsStartAtStart: [VIDEOS.portMannEB.id],
    videoIdsStartAtEnd: [VIDEOS.unitedWB.id],
    videoIdsEndAtStart: [VIDEOS.portMannWB.id],
    videoIdsEndAtEnd: [VIDEOS.unitedEB.id],
    positions: [
      UNITED_S_OF_PORT_MANN,
      [49.22729, -122.82021],
      [49.22736, -122.82007],
      [49.22744, -122.82],
      UNITED_PORT_MANN,
    ],
  },
  {
    routeNames: [ROUTES.united.name],
    description: "port mann to mary hill bypass",
    type: "mixed",
    positions: [UNITED_PORT_MANN, UNITED_MARY_HILL_NW],
  },
];
