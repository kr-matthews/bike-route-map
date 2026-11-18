import {
  FIRST_AGNES,
  MCBRIDE_ROYAL_SW,
  MERIVALE_AGNES,
  SEVENTH_AGNES,
  STALEWASEM_W_START,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const HASTINGS_AGNES_W = [49.20946, -122.90125];
const AGNES_E = [49.20977, -122.90057];
const ON_RAMP_OVERPASS_START = [49.20963, -122.90041];
const ON_RAMP_OVERPASS_END = [49.2098, -122.89994];

const BRIDGE_CONNECTOR_OVERPASS_START = [49.20986, -122.90029];
const BRIDGE_CONNECTOR_OVERPASS_END = [49.2109, -122.89961];
const BUSHBY_ROYAL_SW = [49.21137, -122.90007];

export const AGNES = [
  {
    routeNames: [ROUTES.agnes.name],
    description: "primary",
    type: "dedicated",
    videoIds: [ROUTE_VIDEOS.agnesWb.id, ROUTE_VIDEOS.agnesEb.id],
    videoIdsStartAtStart: [ROUTE_VIDEOS.agnesEb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.agnesWb.id],
    positions: [
      SEVENTH_AGNES,
      [49.20409, -122.91125],
      [49.20483, -122.90985],
      [49.2062, -122.90731],
      MERIVALE_AGNES,
      [49.20814, -122.9037],
      [49.20823, -122.90354],
      [49.20825, -122.90347],
      [49.20831, -122.90336],
      [49.20836, -122.90332],
      FIRST_AGNES,
    ],
  },
  {
    routeNames: [ROUTES.agnes.name],
    description: "east bit",
    type: "dedicated",
    videoIds: [ROUTE_VIDEOS.agnesWb.id, ROUTE_VIDEOS.millenniumNb.id],
    videoIdsStartAtEnd: [ROUTE_VIDEOS.agnesWb.id, ROUTE_VIDEOS.millenniumNb.id],
    positions: [FIRST_AGNES, HASTINGS_AGNES_W],
  },
  {
    routeNames: [ROUTES.agnes.name],
    description: "first to hastings",
    type: "mixed",
    positions: [
      HASTINGS_AGNES_W,
      [49.20954, -122.90106],
      [49.20971, -122.90073],
      AGNES_E,
    ],
  },

  {
    description: "agnes to bridge - 1",
    type: "mixed",
    oneWay: "recommended",
    elevation: 0.5,
    positions: [AGNES_E, [49.20969, -122.90051], ON_RAMP_OVERPASS_START],
  },
  {
    description: "agnes to bridge - 2",
    type: "mixed",
    oneWay: "recommended",
    elevation: 1,
    positions: [
      ON_RAMP_OVERPASS_START,
      [49.20959, -122.90024],
      [49.20962, -122.90007],
      [49.20969, -122.89997],
      ON_RAMP_OVERPASS_END,
    ],
  },
  {
    description: "agnes to bridge - 3",
    type: "mixed",
    oneWay: "recommended",
    elevation: 0.5,
    positions: [
      ON_RAMP_OVERPASS_END,
      [49.20994, -122.89994],
      [49.21003, -122.8999],
      [49.21009, -122.89981],
      [49.21014, -122.89969],
      STALEWASEM_W_START,
    ],
  },

  {
    description: "agnes to mcbride - 1",
    type: "mixed",
    elevation: 0.5,
    positions: [
      AGNES_E,
      [49.20983, -122.90036],
      BRIDGE_CONNECTOR_OVERPASS_START,
    ],
  },
  {
    description: "agnes to mcbride - 2",
    type: "mixed",
    elevation: 1,
    positions: [
      BRIDGE_CONNECTOR_OVERPASS_START,
      [49.21025, -122.89977],
      [49.2106, -122.89947],
      [49.21072, -122.89947],
      [49.21083, -122.89953],
      BRIDGE_CONNECTOR_OVERPASS_END,
    ],
  },
  {
    description: "agnes to mcbride - 3",
    type: "mixed",
    elevation: 0.5,
    positions: [
      BRIDGE_CONNECTOR_OVERPASS_END,
      [49.21128, -122.90001],
      BUSHBY_ROYAL_SW,
    ],
  },
  {
    description: "agnes to mcbride - 4",
    videoIds: [ROUTE_VIDEOS.stalewasemEastNb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.stalewasemEastNb.id],
    type: "mixed",
    positions: [
      BUSHBY_ROYAL_SW,
      [49.21166, -122.89952],
      [49.21174, -122.89942],
      MCBRIDE_ROYAL_SW,
    ],
  },
];
