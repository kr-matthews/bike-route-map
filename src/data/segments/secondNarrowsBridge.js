import {
  CASSIAR_SKEENA_PATH,
  SECOND_NARROWS_BRIDGE_FELLOWS,
  SKEENA_SECOND_NARROWS_BRIDGE,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const NORTHBOUND_ELEVATION_START = [49.29164, -123.02605];
const NORTHBOUND_ELEVATION_END = [49.30367, -123.02652];

const SOUTHBOUND_ELEVATION_START = [49.30352, -123.02681];
const SOUTHBOUND_ELEVATION_END = [49.29163, -123.02637];

const TUNNEL_SOUTH_END = [49.28839, -123.02824];
const TUNNEL_NORTH_END = [49.28969, -123.02826];

export const SECOND_NARROWS_BRIDGE = [
  // connections
  {
    description: "connection with fellowes",
    positions: [
      SECOND_NARROWS_BRIDGE_FELLOWS,
      [49.29158, -123.02591],
      [49.2917, -123.02518],
      [49.29169, -123.02505],
    ],
  },
  {
    description: "skeena pre-tunnel",
    type: "other",
    elevation: -0.5,
    videos: [VIDEOS.portsideEb.id, VIDEOS.cassiarSb.id],
    videosEndAtStart: [VIDEOS.portsideEb.id],
    positions: [
      CASSIAR_SKEENA_PATH,
      [49.28795, -123.02849],
      [49.28793, -123.02824],
      TUNNEL_SOUTH_END,
    ],
  },
  {
    description: "skeena tunnel",
    type: "other",
    elevation: -1,
    videos: [VIDEOS.portsideEb.id, VIDEOS.cassiarSb.id],
    positions: [TUNNEL_SOUTH_END, [49.28889, -123.02824], TUNNEL_NORTH_END],
  },
  {
    description: "skeena post-tunnel",
    type: "other",
    elevation: -0.5,
    videos: [VIDEOS.portsideEb.id, VIDEOS.cassiarSb.id],
    positions: [TUNNEL_NORTH_END, SKEENA_SECOND_NARROWS_BRIDGE],
  },

  // northbound
  {
    routeNames: [ROUTES.secondNarrowsBridge.name],
    description: "cassiar to bridge",
    oneWay: "recommended",
    elevation: 0.5,
    positions: [
      CASSIAR_SKEENA_PATH,
      [49.28839, -123.02849],
      [49.28904, -123.0279],
      [49.28944, -123.02754],
      [49.28998, -123.027],
      [49.29065, -123.02634],
      [49.29093, -123.02615],
      [49.29121, -123.02604],
      [49.29144, -123.02599],
      SECOND_NARROWS_BRIDGE_FELLOWS,
      NORTHBOUND_ELEVATION_START,
    ],
  },
  {
    routeNames: [ROUTES.secondNarrowsBridge.name],
    description: "bridge nb",
    oneWay: "required",
    elevation: 1,
    positions: [
      NORTHBOUND_ELEVATION_START,
      [49.29196, -123.02604],
      [49.29285, -123.02605],
      [49.29409, -123.02608],
      [49.29532, -123.02611],
      [49.29651, -123.02614],
      [49.29762, -123.02617],
      [49.29875, -123.0262],
      [49.29991, -123.02622],
      [49.30094, -123.02625],
      [49.30192, -123.02628],
      [49.3028, -123.02632],
      [49.30309, -123.02634],
      NORTHBOUND_ELEVATION_END,
    ],
  },
  {
    routeNames: [ROUTES.secondNarrowsBridge.name],
    description: "nb off ramp",
    oneWay: "required",
    elevation: 0.5,
    positions: [
      NORTHBOUND_ELEVATION_END,
      [49.3039, -123.02656],
      [49.30412, -123.02653],
      [49.30434, -123.02642],
      [49.30452, -123.02624],
      [49.30466, -123.02601],
      [49.30478, -123.0257],
      [49.30487, -123.02521],
      [49.3049, -123.02496],
    ],
  },

  // southbound
  {
    routeNames: [ROUTES.secondNarrowsBridge.name],
    description: "sb on-ramp",
    oneWay: "required",
    elevation: 0.5,
    positions: [
      [49.30454, -123.02984],
      [49.30452, -123.02967],
      [49.3045, -123.0294],
      [49.3045, -123.02911],
      [49.30454, -123.02812],
      [49.30453, -123.02786],
      [49.3045, -123.02765],
      [49.30444, -123.02751],
      [49.30436, -123.02737],
      [49.30426, -123.02726],
      [49.3039, -123.02702],
      SOUTHBOUND_ELEVATION_START,
    ],
  },
  {
    routeNames: [ROUTES.secondNarrowsBridge.name],
    description: "sb bridge",
    oneWay: "required",
    elevation: 1,
    positions: [
      SOUTHBOUND_ELEVATION_START,
      [49.30312, -123.0267],
      [49.30329, -123.02672],
      [49.30281, -123.02662],
      [49.30099, -123.02656],
      [49.29758, -123.0265],
      [49.29446, -123.02644],
      [49.29197, -123.02636],
      SOUTHBOUND_ELEVATION_END,
    ],
  },
  {
    routeNames: [ROUTES.secondNarrowsBridge.name],
    description: "sb post-bridge",
    oneWay: "required",
    elevation: 0.5,
    positions: [
      SOUTHBOUND_ELEVATION_END,
      [49.2915, -123.02639],
      [49.29131, -123.0265],
      [49.29038, -123.02748],
      [49.29, -123.02786],
      [49.28997, -123.0279],
      [49.28998, -123.02792],
      [49.29, -123.02793],
      [49.29036, -123.02787],
      [49.29038, -123.0279],
      [49.29037, -123.02793],
      [49.29021, -123.02806],
      [49.28996, -123.0282],
      SKEENA_SECOND_NARROWS_BRIDGE,
    ],
  },
];
