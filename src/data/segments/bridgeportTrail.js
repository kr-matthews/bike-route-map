import { BRIDGEPORT_TRAIL_VAN_HORNE } from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

export const BRIDGEPORT_TRAIL = [
  {
    routeNames: [ROUTES.bridgeportTrail.name],
    description: "primary",
    type: "mixed",
    videoIds: [
      ROUTE_VIDEOS.bridgeportTrailWb.id,
      ROUTE_VIDEOS.bridgeportTrailEb.id,
    ],
    videoIdsStartAtStart: [ROUTE_VIDEOS.bridgeportTrailEb.id],
    videoIdsStartAtEnd: [ROUTE_VIDEOS.bridgeportTrailWb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.bridgeportTrailWb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.bridgeportTrailEb.id],
    positions: [
      BRIDGEPORT_TRAIL_VAN_HORNE,
      [49.19489, -123.12364],
      [49.19462, -123.12306],
      [49.19452, -123.12265],
      [49.1945, -123.12245],
      [49.19449, -123.12208],
      [49.19455, -123.12166],
      [49.19454, -123.12077],
      [49.19443, -123.11897],
      [49.19442, -123.11387],
      [49.19442, -123.10928],
      [49.19439, -123.10272],
    ],
  },
];
