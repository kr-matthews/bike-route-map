import {
  CHESTERFIELD_17TH,
  GRAND_BLVD_E_17TH_W,
  GRAND_BLVD_W_17TH_E,
  JONES_17TH,
  RUFUS_17TH,
  ST_ANDREWS_17TH,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

export const SEVENTEENTH_NV = [
  {
    routeNames: [ROUTES.seventeenthNv.name],
    description: "w of grand blvd",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.seventeenthEb.id, ROUTE_VIDEOS.seventeenthWb.id],
    videoIdsStartAtStart: [ROUTE_VIDEOS.seventeenthEb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.seventeenthWb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.seventeenthEb.id],
    positions: [
      JONES_17TH,
      CHESTERFIELD_17TH,
      ST_ANDREWS_17TH,
      GRAND_BLVD_W_17TH_E,
      GRAND_BLVD_E_17TH_W,
    ],
  },
  {
    routeNames: [ROUTES.seventeenthNv.name],
    description: "e of grand blvd",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.seventeenthWb.id],
    positions: [GRAND_BLVD_E_17TH_W, RUFUS_17TH],
  },
];
