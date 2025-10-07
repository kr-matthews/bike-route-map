import { MACKAY_15TH, TATLOW_15TH } from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const FIFTEENTH_E = [49.322, -123.10339];

export const FIFTEENTH = [
  {
    routeNames: [ROUTES.fifteenth.name],
    description: "road",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.fifteenthEb.id],
    positions: [
      TATLOW_15TH,
      [49.32214, -123.11481],
      [49.32212, -123.11346],
      [49.32206, -123.10902],
      [49.32206, -123.1082],
      [49.32206, -123.1078],
      [49.32204, -123.10711],
      [49.32202, -123.10498],
      FIFTEENTH_E,
    ],
  },
  {
    routeNames: [ROUTES.fifteenth.name],
    description: "path",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.fifteenthEb.id],
    positions: [
      FIFTEENTH_E,
      [49.32192, -123.10339],
      [49.32192, -123.10317],
      [49.3219, -123.10306],
      [49.32184, -123.10294],
      [49.32185, -123.10277], // should be a bridge
      [49.32176, -123.10249],
      MACKAY_15TH,
    ],
  },
];
