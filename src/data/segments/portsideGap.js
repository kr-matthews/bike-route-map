import { MCLEAN_POWELL, WALL_OXFORD_PARK } from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const SEMLIN_POWELL_W = [49.28484, -123.06378];

export const PORTSIDE_GAP = [
  {
    routeNames: [ROUTES.portsideGap.name],
    description: "powell",
    type: "shared",
    undesignated: true,
    videoIds: [ROUTE_VIDEOS.portsideGapWb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.portsideGapWb.id],
    positions: [
      MCLEAN_POWELL,
      [49.28326, -123.07397],
      [49.28349, -123.07258],
      [49.28424, -123.06821],
      [49.28479, -123.0658],
      [49.28483, -123.06552],
      [49.28485, -123.06523],
      SEMLIN_POWELL_W,
    ],
  },
  {
    routeNames: [ROUTES.portsideGap.name],
    description: "wall",
    type: "quiet",
    undesignated: true,
    videoIds: [ROUTE_VIDEOS.portsideGapWb.id],
    videoIdsStartAtEnd: [ROUTE_VIDEOS.portsideGapWb.id],
    positions: [SEMLIN_POWELL_W, [49.285, -123.06352], WALL_OXFORD_PARK],
  },
];
