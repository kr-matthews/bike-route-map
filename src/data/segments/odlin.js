import { NO_3_BROWNGATE } from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const HAZELBRIDGE_BROWNGATE_E = [49.18292, -123.13322];
const BROWN_ODLIN = [49.18219, -123.13085];
const SEXSMITH_LANE_W_ODLIN = [49.18211, -123.12883];
const ODLIN_PARK_W = [49.18177, -123.11284];
const ODLIN_PARK_E = [49.18176, -123.11094];

export const ODLIN = [
  {
    description: "browngate continuation to no. 3",
    type: "shared",
    undesignated: true,
    videoIds: [VIDEOS.odlinWb.id],
    positions: [
      NO_3_BROWNGATE,
      [49.18285, -123.13544],
      [49.18286, -123.13527],
      [49.18291, -123.13499],
      [49.18293, -123.13479],
      [49.18293, -123.13347],
      HAZELBRIDGE_BROWNGATE_E,
    ],
  },
  {
    routeNames: [ROUTES.odlin.name],
    description: "browngate and brown",
    type: "quiet",
    videoIds: [VIDEOS.odlinWb.id],
    positions: [HAZELBRIDGE_BROWNGATE_E, [49.18293, -123.13088], BROWN_ODLIN],
  },
  {
    routeNames: [ROUTES.odlin.name],
    description: "brown path",
    type: "mixed",
    videoIds: [VIDEOS.odlinWb.id],
    positions: [BROWN_ODLIN, [49.18216, -123.12892], SEXSMITH_LANE_W_ODLIN],
  },
  {
    routeNames: [ROUTES.odlin.name],
    description: "brown path to odlin park",
    type: "quiet",
    videoIds: [VIDEOS.odlinWb.id],
    positions: [
      SEXSMITH_LANE_W_ODLIN,
      [49.1821, -123.12702],
      [49.18167, -123.12701],
      [49.18166, -123.12683],
      [49.18175, -123.12605],
      [49.18175, -123.12456], // GARDEN_CITY
      [49.18176, -123.11815],
      [49.18177, -123.11402],
      ODLIN_PARK_W,
    ],
  },
  {
    routeNames: [ROUTES.odlin.name],
    description: "odlin park",
    type: "mixed",
    videoIds: [VIDEOS.odlinWb.id],
    positions: [ODLIN_PARK_W, [49.18176, -123.11187], ODLIN_PARK_E],
  },
  {
    routeNames: [ROUTES.odlin.name],
    description: "odlin park to end",
    type: "quiet",
    videoIds: [VIDEOS.odlinWb.id],
    videoIdsStartAtEnd: [VIDEOS.odlinWb.id],
    positions: [ODLIN_PARK_E, [49.18177, -123.10607], [49.18177, -123.10499]],
  },
];
