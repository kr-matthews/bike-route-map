import {
  CASSIAR_SKEENA_PATH,
  SECOND_NARROWS_BRIDGE_FELLOWS,
  SKEENA_SECOND_NARROWS_BRIDGE,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const NORTHBOUND_ELEVATION_START = [49.29164, -123.02604];
const NORTHBOUND_ELEVATION_END = [49.30367, -123.02652];

const SOUTHBOUND_ELEVATION_START = [49.30356, -123.02684];
const SOUTHBOUND_ELEVATION_END = [49.29158, -123.02642];

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
    elevation: -0.5,
    videos: [VIDEOS.portsideEb, VIDEOS.cassiarSb],
    videosEndAtStart: [VIDEOS.portsideEb],
    positions: [
      CASSIAR_SKEENA_PATH,
      [49.28795, -123.02851],
      [49.28793, -123.02824],
      TUNNEL_SOUTH_END,
    ],
  },
  {
    description: "skeena tunnel",
    elevation: -1,
    videos: [VIDEOS.portsideEb, VIDEOS.cassiarSb],
    positions: [TUNNEL_SOUTH_END, [49.28889, -123.02824], TUNNEL_NORTH_END],
  },
  {
    description: "skeena post-tunnel",
    elevation: -0.5,
    videos: [VIDEOS.portsideEb, VIDEOS.cassiarSb],
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
      [49.28839, -123.0285],
      [49.28924, -123.02774],
      [49.29041, -123.02658],
      [49.29091, -123.02617],
      [49.29122, -123.02604],
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
      [49.30453, -123.02987],
      [49.30449, -123.02926],
      [49.30454, -123.02817],
      [49.30454, -123.02786],
      [49.30448, -123.02761],
      [49.30434, -123.02735],
      [49.30395, -123.02708],
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
      [49.30287, -123.02668],
      [49.30189, -123.02663],
      [49.30077, -123.02661],
      [49.29967, -123.02659],
      [49.29848, -123.02657],
      [49.29691, -123.02652],
      [49.29537, -123.02648],
      [49.29383, -123.02643],
      [49.29263, -123.02641],
      [49.29191, -123.02639],
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
      [49.29138, -123.02649],
      [49.2912, -123.02663],
      [49.29001, -123.02787],
      [49.28998, -123.02793],
      [49.29, -123.02796],
      [49.29038, -123.02787],
      [49.29041, -123.0279],
      [49.2904, -123.02794],
      [49.29035, -123.02798],
      SKEENA_SECOND_NARROWS_BRIDGE,
    ],
  },
];
