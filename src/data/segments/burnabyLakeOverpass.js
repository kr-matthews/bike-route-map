import { BURNABY_LAKE_OVERPASS_S, SPERLING_SPROTT } from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const SPERLING_ROBERTS_E = [49.24561, -122.96447];
const W_OF_OVERPASS = [49.24151, -122.959];
const PARKING_LOT_W = [49.24041, -122.95483];
const PARKING_LOT_E = [49.24026, -122.95426];

const OVERPASS_N = [49.24108, -122.95759];
const OVERPASS_GLENCARIN_PATH = [49.24095, -122.95616];
const GLENCARIN_GLENCARIN_PATH = [49.24122, -122.95688];

export const BURNABY_LAKE_OVERPASS = [
  // north side
  {
    description: "sprott to roberts",
    type: "mixed",
    positions: [
      SPERLING_SPROTT,
      [49.24992, -122.96447],
      [49.24989, -122.96439],
      [49.24984, -122.96434],
      [49.24962, -122.96434],
      [49.24952, -122.96435],
      [49.24835, -122.96436],
      [49.24818, -122.96425],
      [49.24797, -122.96424],
      [49.24771, -122.96438],
      [49.24719, -122.96438],
      [49.24671, -122.96447],
      SPERLING_ROBERTS_E,
    ],
  },
  {
    description: "sperling, glencarin",
    type: "quiet",
    undesignated: true,
    positions: [
      SPERLING_ROBERTS_E,
      [49.24561, -122.96468],
      [49.24455, -122.96465],
      [49.24366, -122.96464],
      [49.24298, -122.96464],
      [49.24291, -122.96462],
      [49.24286, -122.9646],
      [49.2428, -122.96454],
      [49.24273, -122.96443],
      [49.24262, -122.96419],
      [49.24247, -122.96382],
      [49.24233, -122.96341],
      [49.24225, -122.96308],
      [49.24215, -122.96257],
      [49.242, -122.96183],
      [49.24178, -122.96067],
      [49.24159, -122.9595],
      W_OF_OVERPASS,
    ],
  },
  {
    description: "glencarin path, nw of glencarin",
    type: "dedicated",
    videoIds: [ROUTE_VIDEOS.burnabyLakeOverpassSb.id],
    videoIdsStartAtStart: [ROUTE_VIDEOS.burnabyLakeOverpassSb.id],
    positions: [
      W_OF_OVERPASS,
      [49.24153, -122.95881],
      [49.24154, -122.95869],
      [49.24153, -122.95851],
      [49.24151, -122.95835],
      [49.24148, -122.95817],
      [49.2414, -122.95786],
      [49.24128, -122.9575],
      [49.24124, -122.95738],
      [49.24124, -122.95733],
      [49.24126, -122.95725],
      [49.24128, -122.95712],
      [49.24127, -122.95701],
      GLENCARIN_GLENCARIN_PATH,
    ],
  },
  {
    description: "glencarin path, glencarin to overpass",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.burnabyLakeOverpassSb.id],
    positions: [
      GLENCARIN_GLENCARIN_PATH,
      [49.24109, -122.95655],
      OVERPASS_GLENCARIN_PATH,
    ],
  },
  {
    description: "glencarin path, e of overpass",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.burnabyLakeOverpassNb.id],
    positions: [
      OVERPASS_GLENCARIN_PATH,
      [49.24081, -122.95572],
      [49.2407, -122.95544],
      [49.24059, -122.95524],
      [49.24047, -122.95503],
      [49.24043, -122.95493],
      PARKING_LOT_W,
    ],
  },
  {
    description: "freeway trail parking lot",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.burnabyLakeOverpassNb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.burnabyLakeOverpassNb.id],
    positions: [PARKING_LOT_W, [49.24029, -122.95434], PARKING_LOT_E],
  },

  // overpass
  {
    routeNames: [ROUTES.burnabyLakeOverpass.name],
    description: "overpass",
    type: "mixed",
    elevation: 1,
    videoIds: [
      ROUTE_VIDEOS.burnabyLakeOverpassNb.id,
      ROUTE_VIDEOS.burnabyLakeOverpassSb.id,
    ],
    positions: [BURNABY_LAKE_OVERPASS_S, OVERPASS_N],
  },
  {
    routeNames: [ROUTES.burnabyLakeOverpass.name],
    description: "overpass - ne",
    type: "mixed",
    elevation: 0.5,
    videoIds: [
      ROUTE_VIDEOS.burnabyLakeOverpassSb.id,
      ROUTE_VIDEOS.burnabyLakeOverpassNb.id,
    ],
    positions: [
      OVERPASS_N,
      [49.24081, -122.95658],
      [49.2408, -122.9564],
      [49.24085, -122.95629],
      [49.2409, -122.95622],
      OVERPASS_GLENCARIN_PATH,
    ],
  },
];
