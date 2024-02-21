import { GLADSTONE_38TH, GLADSTONE_BC_PARKWAY } from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const GLADSTONE_30TH_S = [49.2428, -123.06268];
const GLADSTONE_KINGSWAY_N = [49.24359, -123.06178];
const GLADSTONE_STAINSBURY_N = [49.25002, -123.06033];

export const GLADSTONE = [
  {
    routeNames: [ROUTES.gladstone.name],
    description: "38th to 30th lanes",
    type: "quiet",
    videoIds: [VIDEOS.gladstoneNb.id],
    videoIdsStartAtStart: [VIDEOS.gladstoneNb.id],
    positions: [
      GLADSTONE_38TH,
      [49.23747, -123.06208],
      [49.23893, -123.06207],
      [49.23893, -123.0629],
      [49.23979, -123.06288],
      [49.24149, -123.06283],
      [49.24272, -123.06278],
      GLADSTONE_30TH_S,
    ],
  },
  {
    routeNames: [ROUTES.gladstone.name],
    description: "lanes nb",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.gladstoneNb.id],
    positions: [
      GLADSTONE_30TH_S,
      [49.24287, -123.0625],
      [49.24343, -123.06188],
      GLADSTONE_KINGSWAY_N,
    ],
  },
  {
    routeNames: [ROUTES.gladstone.name],
    description: "lanes sb",
    type: "dedicated",
    oneWay: "required",
    positions: [
      GLADSTONE_KINGSWAY_N,
      [49.24348, -123.062],
      [49.24293, -123.06264],
      GLADSTONE_30TH_S,
    ],
  },
  {
    routeNames: [ROUTES.gladstone.name],
    description: "kingsway to bc parkway",
    type: "quiet",
    videoIds: [VIDEOS.gladstoneNb.id],
    positions: [
      GLADSTONE_KINGSWAY_N,
      [49.24473, -123.0605],
      [49.2449, -123.06044],
      [49.24669, -123.06042],
      [49.24679, -123.06055],
      [49.24812, -123.0605],
      [49.24886, -123.06048],
      [49.24995, -123.06044],
      GLADSTONE_STAINSBURY_N,
    ],
  },
  {
    routeNames: [ROUTES.gladstone.name],
    description: "path near bc parkway",
    type: "mixed",
    videoIds: [VIDEOS.gladstoneNb.id],
    positions: [
      GLADSTONE_STAINSBURY_N,
      [49.24998, -123.06024],
      [49.24995, -123.06011],
      [49.24988, -123.05989],
      GLADSTONE_BC_PARKWAY,
    ],
  },
];
