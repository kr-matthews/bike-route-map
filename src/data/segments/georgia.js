import {
  CARDERO_GEORGIA_N,
  CARDERO_GEORGIA_S,
  CHILCO_GEORGIA_S,
  DENMAN_GEORGIA_N,
  NICOLA_GEORGIA,
  STANLEY_PARK_CAUSEWAY_GEORGIA_N,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const GEORGIA = [
  {
    routeNames: [ROUTES.georgia.name],
    description: "eb",
    oneWay: "required",
    type: "painted",
    videoIds: [VIDEOS.lionsGateBridgeSb.id],
    videoIdsEndAtEnd: [VIDEOS.lionsGateBridgeSb.id],
    positions: [
      CHILCO_GEORGIA_S,
      [49.29352, -123.13537],
      [49.29255, -123.13383],
      [49.29152, -123.13225],
      CARDERO_GEORGIA_S,
      NICOLA_GEORGIA,
    ],
  },
  {
    routeNames: [ROUTES.georgia.name],
    description: "wb",
    type: "painted",
    oneWay: "required",
    elevation: 0.5,
    videoIds: [VIDEOS.lionsGateBridgeNb.id],
    positions: [
      CARDERO_GEORGIA_N,
      [49.29166, -123.13203],
      DENMAN_GEORGIA_N,
      [49.29374, -123.13532],
      [49.29444, -123.13629],
      [49.2946, -123.13649],
      STANLEY_PARK_CAUSEWAY_GEORGIA_N,
    ],
  },
];
