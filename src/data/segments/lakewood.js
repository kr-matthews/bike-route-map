import {
  LAKEWOOD_8TH,
  LAKEWOOD_ADANAC,
  LAKEWOOD_GRANDVIEW,
  LAKEWOOD_PANDORA,
  WALL_OXFORD_PARK,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const LAKEWOOD_DUNDAS = [49.28481, -123.06164];
const LAKEWOOD_OXFORD_W = [49.2857, -123.06168];

export const LAKEWOOD = [
  {
    routeNames: [ROUTES.lakewood.name],
    description: "grandview to 8th",
    type: "quiet",
    videoIds: [
      VIDEOS.centralValleyVancouverEbAlt.id,
      VIDEOS.lakewoodNb.id,
      VIDEOS.lakewoodSb.id,
    ],
    videoIdsEndAtStart: [VIDEOS.centralValleyVancouverEbAlt.id],
    positions: [LAKEWOOD_GRANDVIEW, [49.26228, -123.06203], LAKEWOOD_8TH],
  },
  {
    routeNames: [ROUTES.lakewood.name],
    description: "8th to dundas",
    type: "quiet",
    videoIds: [VIDEOS.lakewoodSb.id, VIDEOS.lakewoodNb.id],
    positions: [
      LAKEWOOD_8TH,
      [49.265, -123.06197],
      [49.26679, -123.06195],
      [49.26863, -123.0619],
      [49.27045, -123.06186],
      [49.27207, -123.06185],
      [49.2739, -123.0618],
      [49.27572, -123.06177],
      LAKEWOOD_ADANAC,
      [49.27757, -123.06173],
      [49.27824, -123.06173],
      [49.27833, -123.06176],
      [49.27914, -123.06174],
      [49.28025, -123.06173],
      [49.28209, -123.06168],
      LAKEWOOD_PANDORA,
      LAKEWOOD_DUNDAS,
    ],
  },
  {
    routeNames: [ROUTES.lakewood.name],
    description: "dundas to oxford",
    type: "quiet",
    videoIds: [
      VIDEOS.lakewoodSb.id,
      VIDEOS.lakewoodNb.id,
      VIDEOS.portsideEb.id,
      VIDEOS.portsideWb.id,
    ],
    videoIdsStartAtStart: [VIDEOS.portsideEb.id],
    videoIdsEndAtStart: [VIDEOS.portsideWb.id],
    positions: [LAKEWOOD_DUNDAS, [49.28567, -123.06164], LAKEWOOD_OXFORD_W],
  },
  {
    routeNames: [ROUTES.lakewood.name],
    description: "oxford park",
    type: "mixed",
    videoIds: [
      VIDEOS.lakewoodSb.id,
      VIDEOS.lakewoodNb.id,
      VIDEOS.portsideEb.id,
      VIDEOS.portsideWb.id,
    ],
    positions: [
      LAKEWOOD_OXFORD_W,
      [49.28571, -123.06198],
      [49.28581, -123.06209],
      WALL_OXFORD_PARK,
    ],
  },
];
