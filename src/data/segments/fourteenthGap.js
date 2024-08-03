import { PRINCE_EDWARD_14TH, WOODLAND_15TH_E } from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const KINGSWAY_W = [49.25853, -123.09448];
const KINGSWAY_E = [49.25784, -123.09321];
const CAROLINA_14TH = [49.25793, -123.09108];

export const FOURTEENTH_GAP = [
  {
    routeNames: [ROUTES.fourteenthGap.name],
    description: "prince edward to kingsway",
    type: "quiet",
    undesignated: true,
    videoIds: [VIDEOS.fourteenthGapWb.id],
    videoIdsEndAtStart: [VIDEOS.fourteenthGapWb.id],
    positions: [
      PRINCE_EDWARD_14TH,
      [49.25844, -123.09639],
      [49.25837, -123.09524],
      [49.25833, -123.09476],
      KINGSWAY_W,
    ],
  },
  {
    routeNames: [ROUTES.fourteenthGap.name],
    description: "kingsway",
    type: "shared",
    undesignated: true,
    videoIds: [VIDEOS.fourteenthGapWb.id],
    positions: [KINGSWAY_W, KINGSWAY_E],
  },
  {
    routeNames: [ROUTES.fourteenthGap.name],
    description: "the park",
    type: "mixed",
    undesignated: true,
    videoIds: [VIDEOS.fourteenthGapWb.id],
    positions: [
      KINGSWAY_E,
      [49.25788, -123.09297],
      [49.25787, -123.09117],
      CAROLINA_14TH,
    ],
  },
  {
    routeNames: [ROUTES.fourteenthGap.name],
    description: "the park to mosaic",
    type: "quiet",
    videoIds: [VIDEOS.fourteenthGapWb.id],
    undesignated: true,
    positions: [
      CAROLINA_14TH,
      [49.25792, -123.08933],
      [49.25795, -123.08908],
      [49.25795, -123.08737],
      [49.25797, -123.08727],
      [49.25794, -123.08719],
      [49.2579, -123.08704],
      [49.25788, -123.08535],
      [49.25785, -123.08149],
      [49.25782, -123.07761],
      [49.25668, -123.07762],
      WOODLAND_15TH_E,
    ],
  },
];
