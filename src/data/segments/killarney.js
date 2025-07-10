import {
  KILLARNEY_45TH,
  NANAIMO_46TH,
  VIVIAN_46TH,
  WALES_46TH,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const KILLARNEY = [
  {
    routeNames: [ROUTES.killarney.name],
    description: "nanaimo to wales",
    type: "quiet",
    videoIds: [VIDEOS.killarneyWb.id, VIDEOS.killarneyEb.id],
    positions: [NANAIMO_46TH, [49.22848, -123.05464], WALES_46TH],
  },
  {
    routeNames: [ROUTES.killarney.name],
    description: "wales to vivian",
    type: "quiet",
    videoIds: [
      VIDEOS.killarneyWb.id,
      VIDEOS.killarneyEb.id,
      VIDEOS.walesDuchessNb.id,
    ],
    videoIdsStartAtEnd: [VIDEOS.walesDuchessNb.id],
    positions: [WALES_46TH, VIVIAN_46TH],
  },
  {
    routeNames: [ROUTES.killarney.name],
    description: "vivian to 45th",
    type: "quiet",
    videoIds: [VIDEOS.killarneyWb.id, VIDEOS.killarneyEb.id],
    videoIdsEndAtEnd: [VIDEOS.killarneyEb.id],
    positions: [
      VIVIAN_46TH,
      [49.22842, -123.04754],
      [49.22841, -123.04562],
      [49.2285, -123.0455],
      KILLARNEY_45TH,
    ],
  },
];
