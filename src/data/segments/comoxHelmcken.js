import {
  BURRARD_COMOX,
  BURRARD_HELMCKEN_SE,
  BUTE_COMOX,
  CARDERO_COMOX,
  CHILCO_COMOX,
  HOMER_HELMCKEN,
  HORNBY_HELMCKEN_SE,
  RICHARDS_HELMCKEN,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const PARK_COMOX = [49.29186, -123.14468];
const COMOX_W = [49.29141, -123.14393];
const DENMAN_COMOX_W = [49.28878, -123.13985];
const BIDWELL_COMOX_SW = [49.28767, -123.13816];
const THURLOW_COMOX_W = [49.28191, -123.12927];
const MAINLAND_HELMCKEN = [49.27558, -123.12055];

export const COMOX_HELMCKEN = [
  {
    routeNames: [ROUTES.comoxHelmcken.name],
    description: "through park",
    type: "mixed",
    videos: [VIDEOS.comoxHelmckenEb.id, VIDEOS.comoxHelmckenWb.id],
    videosStartAtStart: [VIDEOS.comoxHelmckenEb.id],
    videosEndAtStart: [VIDEOS.comoxHelmckenWb.id],
    positions: [
      PARK_COMOX,
      [49.29182, -123.14449],
      [49.29162, -123.14417],
      [49.29147, -123.14403],
      COMOX_W,
    ],
  },
  {
    routeNames: [ROUTES.comoxHelmcken.name],
    description: "comox w end to denman",
    type: "quiet",
    videos: [VIDEOS.comoxHelmckenEb.id, VIDEOS.comoxHelmckenWb.id],
    positions: [COMOX_W, CHILCO_COMOX, [49.28968, -123.14126], DENMAN_COMOX_W],
  },
  {
    routeNames: [ROUTES.comoxHelmcken.name],
    description: "denman to bidwell",
    type: "dedicated",
    videos: [VIDEOS.comoxHelmckenEb.id, VIDEOS.comoxHelmckenWb.id],
    positions: [
      DENMAN_COMOX_W,
      [49.28873, -123.1397],
      [49.28864, -123.13966],
      BIDWELL_COMOX_SW,
    ],
  },
  {
    routeNames: [ROUTES.comoxHelmcken.name],
    description: "bidwell to thurlow",
    type: "quiet",
    videos: [VIDEOS.comoxHelmckenEb.id, VIDEOS.comoxHelmckenWb.id],
    positions: [
      BIDWELL_COMOX_SW,
      [49.28764, -123.13809],
      CARDERO_COMOX,
      [49.28586, -123.13539],
      [49.28509, -123.13418],
      [49.28422, -123.13283],
      BUTE_COMOX,
      THURLOW_COMOX_W,
    ],
  },
  {
    routeNames: [ROUTES.comoxHelmcken.name],
    description: "thurlow to hornby",
    type: "dedicated",
    videos: [VIDEOS.comoxHelmckenEb.id, VIDEOS.comoxHelmckenWb.id],
    positions: [
      THURLOW_COMOX_W,
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
      HORNBY_HELMCKEN_SE,
      [49.27944, -123.12649],
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
