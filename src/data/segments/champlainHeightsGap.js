import { BOUNDARY_RUMBLE_NE, VIVIAN_57TH } from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const CHAMPLAIN_MAQUINNA = [49.21569, -123.03031];
const MATHESON_BIRCH = [49.21641, -123.02513];
const BOUNDARY_RUMBLE_W = [49.21482, -123.02387];

export const CHAMPLAIN_HEIGHTS_GAP = [
  {
    routeNames: [ROUTES.champlainHeightsGap.name],
    description: "quiet part",
    type: "quiet",
    undesignated: true,
    videoIds: [VIDEOS.champlainHeightsGapWb.id],
    videoIdsEndAtStart: [VIDEOS.champlainHeightsGapWb.id],
    positions: [
      VIVIAN_57TH,
      [49.21809, -123.04943],
      [49.21811, -123.04923],
      [49.21822, -123.04891],
      [49.21797, -123.04848],
      [49.21742, -123.04714],
      [49.21712, -123.04646],
      [49.21691, -123.04604],
      [49.21641, -123.04507],
      [49.21624, -123.04472],
      [49.21604, -123.04421],
      [49.21568, -123.04315],
      [49.21558, -123.04273],
      [49.21554, -123.04245],
      [49.21549, -123.03996],
      [49.2155, -123.03878],
      [49.21554, -123.03759],
      [49.21558, -123.03711],
      [49.21568, -123.03657],
      [49.21586, -123.03596],
      [49.21604, -123.03553],
      [49.21617, -123.03528],
      [49.21642, -123.03487],
      [49.216, -123.03415],
      [49.21588, -123.034],
      [49.21574, -123.03387],
      [49.21562, -123.03376],
      [49.21567, -123.03358],
      [49.21569, -123.03335],
      [49.21567, -123.03305],
      [49.21551, -123.03173],
      [49.21548, -123.03142],
      [49.21548, -123.03124],
      [49.2155, -123.03108],
      CHAMPLAIN_MAQUINNA,
    ],
  },
  {
    routeNames: [ROUTES.champlainHeightsGap.name],
    description: "shared part extra",
    type: "shared",
    undesignated: true,
    videoIds: [VIDEOS.champlainHeightsGapWb.id],
    positions: [
      CHAMPLAIN_MAQUINNA,
      [49.216, -123.0305],
      [49.21634, -123.03078],
      [49.21671, -123.03118],
      [49.21729, -123.02988],
      [49.2175, -123.02956],
      [49.21777, -123.02927],
      [49.21815, -123.02898],
      [49.21847, -123.02875],
      [49.21859, -123.02864],
      [49.2187, -123.02846],
      [49.21878, -123.02826],
      [49.21885, -123.02803],
      [49.2189, -123.02777],
      [49.21893, -123.02746],
      [49.21894, -123.02717],
      [49.21892, -123.02685],
      [49.21887, -123.02655],
      [49.21878, -123.02623],
      [49.21868, -123.02598],
      [49.21855, -123.02574],
      [49.21838, -123.02549],
      [49.21815, -123.02528],
      [49.21795, -123.02516],
      [49.21772, -123.02511],
      [49.21748, -123.02511],
      [49.21675, -123.02511],
      MATHESON_BIRCH,
    ],
  },
  {
    routeNames: [ROUTES.champlainHeightsGap.name],
    description: "path",
    type: "mixed",
    undesignated: true,
    positions: [
      CHAMPLAIN_MAQUINNA,
      [49.21577, -123.03023],
      [49.21582, -123.03004],
      [49.21588, -123.0299],
      [49.21594, -123.02981],
      [49.21598, -123.02971],
      [49.216, -123.02944],
      [49.21595, -123.02913],
      [49.21595, -123.02862],
      [49.21598, -123.02832],
      [49.21605, -123.02801],
      [49.21602, -123.02786],
      [49.21599, -123.0277],
      [49.21607, -123.02726],
      [49.21616, -123.02712],
      [49.21636, -123.02696],
      [49.2165, -123.02662],
      [49.21649, -123.02611],
      [49.21639, -123.02543],
      [49.2164, -123.02523],
      MATHESON_BIRCH,
    ],
  },
  {
    routeNames: [ROUTES.champlainHeightsGap.name],
    description: "from path to boundary",
    type: "shared",
    undesignated: true,
    videoIds: [VIDEOS.champlainHeightsGapWb.id],
    positions: [
      MATHESON_BIRCH,
      [49.21615, -123.02518],
      [49.21583, -123.02529],
      [49.21549, -123.02545],
      [49.21517, -123.02555],
      [49.21493, -123.02559],
      [49.21482, -123.02559],
      BOUNDARY_RUMBLE_W,
    ],
  },
  {
    routeNames: [ROUTES.champlainHeightsGap.name],
    description: "at boundary",
    type: "other",
    undesignated: true,
    videoIds: [VIDEOS.champlainHeightsGapWb.id],
    videoIdsStartAtEnd: [VIDEOS.champlainHeightsGapWb.id],
    positions: [BOUNDARY_RUMBLE_W, [49.21489, -123.02386], BOUNDARY_RUMBLE_NE],
  },
];
