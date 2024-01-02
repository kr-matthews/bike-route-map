import {
  BURRARD_COMOX,
  BURRARD_HELMCKEN_SE,
  BUTE_COMOX,
  CARDERO_COMOX,
  CHILCO_COMOX,
  HOMER_HELMCKEN,
  HORNBY_HELMCKEN_E,
  HORNBY_HELMCKEN_SE,
  RICHARDS_HELMCKEN,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const MAINLAND_HELMCKEN = [49.27558, -123.12055];
const PARK_COMOX = [49.29186, -123.14468];

export const COMOX_HELMCKEN = [
  {
    routeNames: [ROUTES.comoxHelmcken.name],
    description: "official portion",
    videos: [VIDEOS.comoxHelmckenEb.id, VIDEOS.comoxHelmckenWb.id],
    videosStartAtStart: [VIDEOS.comoxHelmckenEb.id],
    videosEndAtStart: [VIDEOS.comoxHelmckenWb.id],
    positions: [
      PARK_COMOX,
      [49.29182, -123.14449],
      [49.29162, -123.14417],
      [49.29147, -123.14403],
      [49.29141, -123.14393],
      CHILCO_COMOX,
      [49.28968, -123.14126],
      [49.28878, -123.13985],
      [49.28873, -123.1397],
      [49.28864, -123.13966],
      [49.28767, -123.13816],
      [49.28764, -123.13809],
      CARDERO_COMOX,
      [49.28586, -123.13539],
      [49.28509, -123.13418],
      [49.28422, -123.13283],
      BUTE_COMOX,
      [49.28191, -123.12927],
      [49.28184, -123.12911],
      BURRARD_COMOX,
      [49.28032, -123.1271],
      BURRARD_HELMCKEN_SE,
      [49.27949, -123.12668],
      HORNBY_HELMCKEN_SE,
    ],
  },
  {
    description: "helmcken unofficial part",
    type: "shared",
    videos: [VIDEOS.comoxHelmckenEb.id, VIDEOS.comoxHelmckenWb.id],
    positions: [
      HORNBY_HELMCKEN_E,
      [49.27884, -123.1256],
      [49.27819, -123.12458],
      [49.27757, -123.12364],
      RICHARDS_HELMCKEN,
    ],
  },
  {
    description: "richards to homer",
    type: "shared",
    videos: [VIDEOS.comoxHelmckenEb.id],
    videosEndAtEnd: [VIDEOS.comoxHelmckenEb.id],
    positions: [RICHARDS_HELMCKEN, HOMER_HELMCKEN],
  },
  {
    description: "tail end",
    type: "shared",
    positions: [HOMER_HELMCKEN, [49.27592, -123.12107], MAINLAND_HELMCKEN],
  },
];
