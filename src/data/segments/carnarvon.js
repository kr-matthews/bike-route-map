import {
  BEGBIE_COLUMBIA_N,
  ELLIOT_CARNARVON,
  MERIVALE_CARNARVON,
} from "../intersections";
import { ROUTES } from "../routes";

const BEGBIE_CARNARVON = [49.2027, -122.91147];
const SIXTH_CARNARVON = [49.20414, -122.90883];
const FOURTH_CARNARVON = [49.20546, -122.90638];

export const CARNARVON = [
  {
    description: "begbie connection to cvg",
    type: "shared",
    positions: [BEGBIE_COLUMBIA_N, BEGBIE_CARNARVON],
  },
  {
    description: "connection to columbia station",
    type: "shared",
    positions: [
      [49.20498, -122.90588],
      [49.20502, -122.90582],
      FOURTH_CARNARVON,
    ],
  },
  {
    routeNames: [ROUTES.carnarvon.name],
    description: "west portion",
    type: "shared",
    positions: [
      [49.20175, -122.91311],
      [49.20179, -122.91315],
      [49.2021, -122.91258],
      BEGBIE_CARNARVON,
      SIXTH_CARNARVON,
    ],
  },
  {
    routeNames: [ROUTES.carnarvon.name],
    description: "sixth to merivale",
    type: "quiet",
    positions: [
      SIXTH_CARNARVON,
      FOURTH_CARNARVON,
      [49.20578, -122.90577],
      [49.2058, -122.90567],
      MERIVALE_CARNARVON,
    ],
  },
  {
    routeNames: [ROUTES.carnarvon.name, ROUTES.uptownDowntown.name],
    description: "merivale to elliot",
    type: "quiet",
    positions: [MERIVALE_CARNARVON, ELLIOT_CARNARVON],
  },
];
