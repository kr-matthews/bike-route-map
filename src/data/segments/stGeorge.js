import { ST_GEORGE_6TH } from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const ST_GEORGE_7TH_N = [49.26439, -123.093];

export const ST_GEORGE = [
  {
    routeNames: [ROUTES.stGeorge.name],
    description: "8th to 7th",
    type: "quiet",
    videoIds: [VIDEOS.stGeorgeNb.id],
    videoIdsStartAtStart: [VIDEOS.stGeorgeNb.id],
    positions: [[49.26353, -123.09301], ST_GEORGE_7TH_N],
  },
  {
    routeNames: [ROUTES.stGeorge.name],
    description: "7th to 6th",
    type: "dedicated",
    videoIds: [VIDEOS.stGeorgeNb.id],
    videoIdsEndAtEnd: [VIDEOS.stGeorgeNb.id],
    positions: [
      ST_GEORGE_7TH_N,
      [49.26518, -123.09299],
      [49.26521, -123.09297],
      ST_GEORGE_6TH,
    ],
  },
];
