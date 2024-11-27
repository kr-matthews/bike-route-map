import {
  ALDER_14TH,
  ARBUTUS_GREENWAY_14TH,
  CYPRESS_14TH,
  HEATHER_14TH_N,
  HEATHER_14TH_S,
  ONTARIO_14TH,
  PRINCE_EDWARD_14TH,
  YUKON_14TH,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const GRANVILLE_14TH_E = [49.25892, -123.1387];
const GRANVILLE_14TH_E_ALLEY = [49.25891, -123.13805];

export const FOURTEENTH = [
  {
    routeNames: [ROUTES.fourteenth.name],
    description: "arbutus greenway to granville",
    type: "quiet",
    videoIds: [VIDEOS.fourteenthExtWb.id],
    videoIdsEndAtStart: [VIDEOS.fourteenthExtWb.id],
    positions: [
      ARBUTUS_GREENWAY_14TH,
      CYPRESS_14TH,
      [49.25899, -123.14358],
      GRANVILLE_14TH_E,
    ],
  },
  {
    routeNames: [ROUTES.fourteenth.name],
    description: "granville plaza",
    type: "dedicated",
    videoIds: [VIDEOS.fourteenthExtWb.id],
    positions: [GRANVILLE_14TH_E, GRANVILLE_14TH_E_ALLEY],
  },
  {
    routeNames: [ROUTES.fourteenth.name],
    description: "granville to alder",
    type: "quiet",
    videoIds: [VIDEOS.fourteenthExtWb.id],
    videoIdsStartAtEnd: [VIDEOS.fourteenthExtWb.id],
    positions: [GRANVILLE_14TH_E_ALLEY, [49.25884, -123.13391], ALDER_14TH],
  },
  {
    routeNames: [ROUTES.fourteenth.name],
    description: "alder to heather",
    type: "quiet",
    videoIds: [VIDEOS.fourteenthEb.id, VIDEOS.fourteenthWb.id],
    videoIdsStartAtStart: [VIDEOS.fourteenthEb.id],
    videoIdsEndAtStart: [VIDEOS.fourteenthWb.id],
    positions: [
      ALDER_14TH,
      [49.25876, -123.12917],
      [49.25873, -123.1268],
      [49.25869, -123.12434],
      [49.25865, -123.12197],
      HEATHER_14TH_S,
    ],
  },
  {
    routeNames: [ROUTES.fourteenth.name],
    description: "heather to prince edward",
    type: "quiet",
    videoIds: [VIDEOS.fourteenthWb.id, VIDEOS.fourteenthEb.id],
    videoIdsStartAtEnd: [VIDEOS.fourteenthWb.id],
    videoIdsEndAtEnd: [VIDEOS.fourteenthEb.id],
    positions: [
      HEATHER_14TH_N,
      [49.25878, -123.1177],
      [49.25874, -123.11506],
      YUKON_14TH,
      [49.25867, -123.11112],
      [49.25865, -123.10972],
      [49.25855, -123.10953],
      [49.2585, -123.10703],
      ONTARIO_14TH,
      [49.25844, -123.10316],
      [49.2584, -123.10116],
      [49.25841, -123.10054],
      [49.25837, -123.09838],
      PRINCE_EDWARD_14TH,
    ],
  },
];
