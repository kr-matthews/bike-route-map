import {
  BALACLAVA_37TH,
  BALACLAVA_QUESNEL,
  BOUNDARY_45TH,
  CARNARVON_31ST,
  DISCOVERY_8TH,
  DISCOVER_14TH,
  DUNBAR_18TH,
  EARLES_45TH,
  KILLARNEY_45TH,
  MACDONALD_29TH,
  MACKENZIE_QUESNEL,
  NANAIMO_38TH,
  NANAIMO_45TH,
  QUESNEL_20TH,
  QUESNEL_KING_EDWARD_N,
  QUESNEL_KING_EDWARD_S,
  VIVIAN_45TH,
  WALES_45TH,
  YEW_37TH,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const RIDGEWAY = [
  {
    routes: [ROUTES.ridgeway.name],
    description: "off-broadway to balaclava",
    positions: [
      DISCOVERY_8TH,
      [49.26374, -123.20305],
      [49.2619, -123.20309],
      DISCOVER_14TH,
      [49.26005, -123.2001],
      [49.26001, -123.19708],
      [49.25794, -123.19715],
      [49.25793, -123.19655],
      [49.25651, -123.19657],
      [49.25653, -123.19356],
      [49.2565, -123.19076],
      [49.25648, -123.188],
      DUNBAR_18TH,
      [49.25649, -123.18181],
      [49.25647, -123.1798],
      [49.25603, -123.17924],
      [49.25556, -123.17921],
      [49.25468, -123.17922],
      QUESNEL_20TH,
    ],
  },
  {
    routes: [ROUTES.ridgeway.name],
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
    routes: [ROUTES.ridgeway.name],
    description: "balaclava to king edward",
    positions: [
      BALACLAVA_QUESNEL,
      [49.25195, -123.17419],
      [49.25106, -123.17305],
      [49.2509, -123.17284],
      QUESNEL_KING_EDWARD_N,
      QUESNEL_KING_EDWARD_S,
    ],
  },
  {
    routes: [ROUTES.ridgeway.name],
    description: "quesnel uncomfortable",
    type: "uncomfortable",
    positions: [
      QUESNEL_KING_EDWARD_S,
      [49.24838, -123.17091],
      [49.24805, -123.17038],
      MACKENZIE_QUESNEL,
    ],
  },
  {
    routes: [ROUTES.ridgeway.name],
    description: "mackenzie to midtown",
    positions: [
      MACKENZIE_QUESNEL,
      [49.24786, -123.17],
      [49.24746, -123.1693],
      [49.24707, -123.16879],
      [49.24633, -123.16806],
      MACDONALD_29TH,
      [49.24516, -123.16793],
      [49.24515, -123.16671],
      [49.24509, -123.16624],
      [49.24453, -123.16475],
      [49.24418, -123.16432],
      [49.24416, -123.16322],
      [49.2442, -123.1628],
      [49.24402, -123.16271],
      [49.24405, -123.16248],
      [49.24237, -123.16015],
      [49.24223, -123.16015],
      [49.24221, -123.15964],
      [49.24128, -123.15967],
      [49.24125, -123.15746],
      [49.24075, -123.15752],
      [49.24029, -123.15771],
      [49.23981, -123.15796],
      [49.23929, -123.15815],
      [49.23885, -123.15835],
      YEW_37TH,
    ],
  },
  {
    routes: [ROUTES.ridgeway.name],
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
    routes: [ROUTES.ridgeway.name],
    description: "nanaimo to sunrise",
    videos: [VIDEOS.fortyFifthWb],
    positions: [NANAIMO_45TH, [49.22939, -123.05492], WALES_45TH, VIVIAN_45TH],
  },
  {
    routes: [ROUTES.ridgeway.name, ROUTES.sunrise.name],
    description: "sunrise",
    videos: [VIDEOS.fortyFifthWb],
    positions: [VIVIAN_45TH, EARLES_45TH],
  },
  {
    routes: [ROUTES.ridgeway.name],
    description: "sunrise to boundary",
    videos: [VIDEOS.fortyFifthWb],
    positions: [
      EARLES_45TH,
      KILLARNEY_45TH,
      [49.22929, -123.04313],
      [49.22928, -123.04079],
      [49.22928, -123.03863],
      [49.22927, -123.03642],
      [49.22926, -123.03422],
      [49.22925, -123.03212],
      [49.22925, -123.03049],
      [49.22924, -123.02776],
      [49.22923, -123.02502],
      BOUNDARY_45TH,
    ],
  },
];
