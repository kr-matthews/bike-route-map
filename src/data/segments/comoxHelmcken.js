import {
  BURRARD_COMOX,
  BURRARD_HELMCKEN_SE,
  BUTE_COMOX,
  CARDERO_COMOX,
  CHILCO_COMOX,
  HOMER_HELMCKEN,
  HORNBY_HELMCKEN,
  MAINLAND_HELMCKEN,
  PARK_COMOX,
  RICHARDS_HELMCKEN,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const COMOX_HELMCKEN = [
  {
    routes: [ROUTES.comoxHelmcken.name],
    description: "official portion",
    videos: [VIDEOS.comoxHelmckenEb, VIDEOS.comoxHelmckenWb],
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
      HORNBY_HELMCKEN,
    ],
  },
  {
    routes: [ROUTES.comoxHelmcken.name],
    description: "unofficial part",
    type: "unofficial",
    videos: [VIDEOS.comoxHelmckenEb, VIDEOS.comoxHelmckenWb],
    positions: [
      HORNBY_HELMCKEN,
      [49.27884, -123.1256],
      [49.27819, -123.12458],
      [49.27757, -123.12364],
      RICHARDS_HELMCKEN,
    ],
  },
  {
    routes: [ROUTES.comoxHelmcken.name],
    description: "richards to homer",
    type: "unofficial",
    videos: [VIDEOS.comoxHelmckenEb],
    positions: [RICHARDS_HELMCKEN, HOMER_HELMCKEN],
  },
  {
    routes: [ROUTES.comoxHelmcken.name],
    description: "tail end",
    type: "unofficial",
    positions: [HOMER_HELMCKEN, [49.27592, -123.12107], MAINLAND_HELMCKEN],
  },
];
