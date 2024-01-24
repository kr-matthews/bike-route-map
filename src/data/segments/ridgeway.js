import {
  BALACLAVA_37TH,
  BALACLAVA_QUESNEL,
  BOUNDARY_45TH,
  CARNARVON_31ST,
  DISCOVERY_8TH,
  DISCOVER_15TH,
  DUNBAR_18TH_E,
  DUNBAR_18TH_W,
  EARLES_45TH,
  KILLARNEY_45TH,
  MACDONALD_29TH,
  NANAIMO_38TH,
  NANAIMO_45TH,
  QUESNEL_20TH,
  QUESNEL_KING_EDWARD_N,
  QUESNEL_KING_EDWARD_S,
  RUPERT_45TH,
  VIVIAN_45TH,
  WALES_45TH,
  YEW_37TH,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const MACKENZIE_QUESNEL = [49.24786, -123.17022];
const PUGET_31ST = [49.2442, -123.1628];
const PUGET_NARVAEZ = [49.24402, -123.16271];
const NARVAEZ_33RD = [49.24223, -123.16015];
const VINE_33RD = [49.24221, -123.15964];

export const RIDGEWAY = [
  {
    routeNames: [ROUTES.ridgeway.name],
    description: "off broadway to balaclava",
    positions: [
      DISCOVERY_8TH,
      [49.26374, -123.20305],
      [49.2619, -123.20309],
      DISCOVER_15TH,
      [49.25915, -123.20015],
      [49.25911, -123.1971],
      [49.25794, -123.19715],
      [49.25793, -123.19658],
      [49.25654, -123.19657],
      [49.25653, -123.19356],
      [49.25651, -123.19076],
      [49.2565, -123.188],
      DUNBAR_18TH_W,
      DUNBAR_18TH_E,
      [49.25647, -123.18181],
      [49.25647, -123.17999],
      [49.25646, -123.1798],
      [49.25642, -123.1797],
      [49.25606, -123.17929],
      [49.25597, -123.17922],
      [49.25556, -123.17923],
      [49.25466, -123.17924],
      QUESNEL_20TH,
    ],
  },
  {
    routeNames: [ROUTES.ridgeway.name, ROUTES.balaclava.name],
    description: "ridgeway main",
    videos: [VIDEOS.balaclavaNb.id],
    positions: [
      QUESNEL_20TH,
      [49.25438, -123.17673],
      [49.25421, -123.17666],
      [49.25377, -123.17633],
      [49.25322, -123.17585],
      BALACLAVA_QUESNEL,
    ],
  },
  {
    routeNames: [ROUTES.ridgeway.name],
    description: "extra bit",
    positions: [
      CARNARVON_31ST,
      [49.24424, -123.17575],
      [49.24233, -123.17577],
      [49.24044, -123.17578],
      BALACLAVA_37TH,
    ],
  },
  {
    routeNames: [ROUTES.ridgeway.name],
    description: "balaclava to king edward",
    positions: [
      BALACLAVA_QUESNEL,
      [49.25264, -123.17506],
      [49.252, -123.17422],
      [49.25148, -123.17356],
      [49.25109, -123.17311],
      [49.25088, -123.17286],
      QUESNEL_KING_EDWARD_N,
    ],
  },
  {
    routeNames: [ROUTES.ridgeway.name],
    description: "quesnel uncomfortable",
    type: "shared",
    positions: [
      QUESNEL_KING_EDWARD_N,
      QUESNEL_KING_EDWARD_S,
      [49.24838, -123.17091],
      [49.24805, -123.17038],
      MACKENZIE_QUESNEL,
    ],
  },
  {
    routeNames: [ROUTES.ridgeway.name],
    description: "mackenzie to puget",
    positions: [
      MACKENZIE_QUESNEL,
      [49.24786, -123.17],
      [49.24746, -123.1693],
      [49.24707, -123.16879],
      [49.24633, -123.16806],
      MACDONALD_29TH,
      [49.24516, -123.16793],
      [49.24515, -123.16671],
      [49.24514, -123.1664],
      [49.24509, -123.16623],
      [49.24459, -123.16492],
      [49.24441, -123.16458],
      [49.24418, -123.16432],
      [49.24416, -123.16322],
      PUGET_31ST,
    ],
  },
  {
    routeNames: [ROUTES.ridgeway.name],
    description: "crossing puget",
    type: "shared",
    positions: [PUGET_31ST, PUGET_NARVAEZ],
  },
  {
    routeNames: [ROUTES.ridgeway.name],
    description: "narvaez",
    positions: [
      PUGET_NARVAEZ,
      [49.24405, -123.16248],
      [49.24237, -123.16015],
      NARVAEZ_33RD,
    ],
  },
  {
    routeNames: [ROUTES.ridgeway.name],
    description: "crossing 33rd",
    type: "shared",
    positions: [NARVAEZ_33RD, VINE_33RD],
  },
  {
    routeNames: [ROUTES.ridgeway.name],
    description: "33rd to midtown",
    positions: [
      VINE_33RD,
      [49.24127, -123.15969],
      [49.24124, -123.15749],
      [49.24075, -123.15751],
      [49.2403, -123.15772],
      [49.23934, -123.15817],
      [49.2388, -123.15836],
      YEW_37TH,
    ],
  },
  {
    routeNames: [ROUTES.ridgeway.name],
    description: "nanaimo",
    positions: [
      NANAIMO_38TH,
      [49.23388, -123.05882],
      [49.23285, -123.05889],
      [49.23232, -123.05888],
      NANAIMO_45TH,
    ],
  },
  {
    routeNames: [ROUTES.ridgeway.name],
    description: "nanaimo to sunrise",
    videos: [VIDEOS.fortyFifthWb.id],
    positions: [NANAIMO_45TH, [49.22939, -123.05492], WALES_45TH, VIVIAN_45TH],
  },
  {
    routeNames: [ROUTES.ridgeway.name, ROUTES.sunrise.name],
    description: "sunrise",
    videos: [VIDEOS.fortyFifthWb.id, VIDEOS.sunriseNb.id],
    positions: [VIVIAN_45TH, EARLES_45TH],
  },
  {
    routeNames: [ROUTES.ridgeway.name],
    description: "sunrise to boundary",
    videos: [VIDEOS.fortyFifthWb.id],
    videosStartAtEnd: [VIDEOS.fortyFifthWb.id],
    positions: [
      EARLES_45TH,
      KILLARNEY_45TH,
      RUPERT_45TH,
      [49.22928, -123.04079],
      [49.22928, -123.03863],
      [49.22927, -123.03642],
      [49.22926, -123.03422],
      [49.22925, -123.03212],
      [49.22925, -123.03049],
      [49.22924, -123.02776],
      [49.22924, -123.02502],
      BOUNDARY_45TH,
    ],
  },
];
