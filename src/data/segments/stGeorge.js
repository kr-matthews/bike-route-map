import { ST_GEORGE_10TH, ST_GEORGE_6TH } from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const ST_GEORGE_BROADWAY = [49.26253, -123.09299];
const ST_GEORGE_8TH = [49.26353, -123.09301];
const ST_GEORGE_8TH_ALLEY = [49.26302, -123.09302];
const ST_GEORGE_7TH_N = [49.26439, -123.093];

export const ST_GEORGE = [
  {
    routeNames: [ROUTES.stGeorge.name],
    description: "10th to broadway",
    type: "quiet",
    positions: [ST_GEORGE_10TH, ST_GEORGE_BROADWAY],
  },
  {
    routeNames: [ROUTES.stGeorge.name],
    description: "broadway to alley",
    type: "dedicated",
    positions: [
      ST_GEORGE_BROADWAY,
      [49.26262, -123.09303],
      [49.26267, -123.09303],
      [49.26275, -123.09301],
      [49.26286, -123.09301],
      [49.26295, -123.09302],
      ST_GEORGE_8TH_ALLEY,
    ],
  },
  {
    routeNames: [ROUTES.stGeorge.name],
    description: "broadway+ to 8th",
    type: "quiet",
    positions: [ST_GEORGE_8TH_ALLEY, ST_GEORGE_8TH],
  },
  {
    routeNames: [ROUTES.stGeorge.name],
    description: "8th to 7th",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.stGeorgeNb.id],
    videoIdsStartAtStart: [ROUTE_VIDEOS.stGeorgeNb.id],
    positions: [[49.26353, -123.09301], ST_GEORGE_7TH_N],
  },
  {
    routeNames: [ROUTES.stGeorge.name],
    description: "7th to 6th",
    type: "dedicated",
    videoIds: [ROUTE_VIDEOS.stGeorgeNb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.stGeorgeNb.id],
    positions: [
      ST_GEORGE_7TH_N,
      [49.26449, -123.093],
      [49.26467, -123.093],
      [49.26481, -123.09299],
      [49.26496, -123.093],
      [49.26506, -123.093],
      [49.26519, -123.09297],
      ST_GEORGE_6TH,
    ],
  },
];
