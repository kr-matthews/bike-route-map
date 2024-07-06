import {
  ACADIA_CHANCELLOR,
  BLANCA_8TH_E,
  BLANCA_8TH_NW,
  BLANCA_8TH_SW,
  CHANCELLOR_4TH,
  MARINE_CHANCELLOR_NE,
  MARINE_CHANCELLOR_SE,
  WESBROOK_CHANCELLOR_SE,
  WESBROOK_CHANCELLOR_SW,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const WESBROOK_CHANCELLOR_ES = [49.27315, -123.24832];
const WESBROOK_CHANCELLOR_WS = [49.27301, -123.24909];
const WESBROOK_CHANCELLOR_EN = [49.27335, -123.24838];
const WESBROOK_CHANCELLOR_WN = [49.2732, -123.24919];

const TASMANIA_CHANCELLOR = [49.26804, -123.22379];

export const CHANCELLOR = [
  {
    description: "crossing at wesbrook nb",
    oneWay: "recommended",
    positions: [WESBROOK_CHANCELLOR_ES, WESBROOK_CHANCELLOR_EN],
  },
  {
    description: "crossing at wesbrook sb",
    oneWay: "recommended",
    videoIds: [VIDEOS.wesbrookSb.id],
    positions: [WESBROOK_CHANCELLOR_WN, WESBROOK_CHANCELLOR_WS],
  },

  {
    routeNames: [ROUTES.chancellor.name],
    description: "middle shared path",
    type: "mixed",
    videoIds: [VIDEOS.chancellorWb.id],
    positions: [
      ACADIA_CHANCELLOR,
      [49.27333, -123.24171],
      [49.27329, -123.2411],
      [49.27322, -123.24033],
      [49.27315, -123.23956],
      [49.27307, -123.23887],
      [49.27301, -123.23836],
      [49.27288, -123.23766],
      [49.27279, -123.23706],
      [49.27266, -123.2363],
      [49.2725, -123.23556],
      [49.27233, -123.2348],
      [49.27207, -123.23374],
      [49.27179, -123.23274],
      [49.2715, -123.23182],
      [49.27119, -123.23091],
      [49.27084, -123.22996],
      [49.27041, -123.2289],
      [49.26989, -123.22777],
      [49.2693, -123.22656],
      [49.26899, -123.2259],
      CHANCELLOR_4TH,
      [49.26806, -123.22398],
      [49.26804, -123.22386],
      TASMANIA_CHANCELLOR,
    ],
  },
  {
    routeNames: [ROUTES.chancellor.name],
    description: "east portion, eb",
    type: "quiet",
    oneWay: "required",
    positions: [
      TASMANIA_CHANCELLOR,
      [49.26726, -123.22215],
      [49.26662, -123.22084],
      [49.26631, -123.22018],
      [49.26618, -123.21991],
      [49.26606, -123.21964],
      [49.26591, -123.21917],
      [49.26583, -123.21883],
      [49.26575, -123.21845],
      [49.26569, -123.21802],
      [49.26565, -123.21765],
      [49.26563, -123.21731],
      [49.26561, -123.21575],
      BLANCA_8TH_SW,
      BLANCA_8TH_E,
    ],
  },
  {
    routeNames: [ROUTES.chancellor.name],
    description: "east portion, wb",
    type: "quiet",
    oneWay: "required",
    videoIds: [VIDEOS.chancellorWb.id],
    videoIdsStartAtStart: [VIDEOS.chancellorWb.id],
    positions: [
      BLANCA_8TH_E,
      BLANCA_8TH_NW,
      [49.26576, -123.21579],
      [49.26578, -123.21689],
      [49.26579, -123.21735],
      [49.26583, -123.21788],
      [49.26591, -123.21844],
      [49.26599, -123.21883],
      [49.26608, -123.21916],
      [49.26623, -123.21962],
      [49.26644, -123.22012],
      [49.26693, -123.22112],
      [49.26764, -123.22259],
      [49.26813, -123.22362],
      [49.26813, -123.22367],
      TASMANIA_CHANCELLOR,
    ],
  },
  {
    routeNames: [ROUTES.chancellor.name],
    description: "eb: to wesbrook",
    type: "painted",
    oneWay: "required",
    positions: [
      MARINE_CHANCELLOR_SE,
      [49.2712, -123.25383],
      [49.27166, -123.25304],
      [49.272, -123.25233],
      [49.27235, -123.25147],
      [49.27267, -123.2505],
      [49.27282, -123.24993],
      [49.27294, -123.24944],
      WESBROOK_CHANCELLOR_WS,
    ],
  },
  {
    routeNames: [ROUTES.chancellor.name],
    description: "eb: wesbrook 1",
    type: "comfortable",
    oneWay: "required",
    videoIds: [VIDEOS.wesbrookSb.id],
    positions: [
      WESBROOK_CHANCELLOR_WS,
      [49.27301, -123.24893],
      WESBROOK_CHANCELLOR_SW,
    ],
  },
  {
    routeNames: [ROUTES.chancellor.name],
    description: "eb: wesbrook 2",
    type: "comfortable",
    oneWay: "required",
    positions: [
      WESBROOK_CHANCELLOR_SW,
      WESBROOK_CHANCELLOR_SE,
      [49.27303, -123.24865],
      [49.27309, -123.24862],
      WESBROOK_CHANCELLOR_ES,
    ],
  },
  {
    routeNames: [ROUTES.chancellor.name],
    description: "eb: from wesbrook",
    type: "painted",
    oneWay: "required",
    positions: [
      WESBROOK_CHANCELLOR_ES,
      [49.27321, -123.24788],
      [49.27329, -123.24715],
      [49.27334, -123.24638],
      [49.27338, -123.24548],
      [49.27341, -123.24423],
      [49.27341, -123.24362],
      [49.2734, -123.24282],
      [49.27338, -123.24215],
      ACADIA_CHANCELLOR,
    ],
  },
  {
    routeNames: [ROUTES.chancellor.name],
    description: "wb: to wesbrook",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.chancellorWb.id],
    positions: [
      ACADIA_CHANCELLOR,
      [49.27357, -123.24219],
      [49.27359, -123.24277],
      [49.27361, -123.24363],
      [49.2736, -123.24515],
      [49.27352, -123.24688],
      [49.27349, -123.24728],
      [49.27339, -123.2481],
      WESBROOK_CHANCELLOR_EN,
    ],
  },
  {
    routeNames: [ROUTES.chancellor.name],
    description: "wb: wesbrook",
    type: "comfortable",
    oneWay: "required",
    videoIds: [VIDEOS.wesbrookSb.id, VIDEOS.chancellorWb.id],
    videoIdsStartAtStart: [VIDEOS.wesbrookSb.id],
    positions: [
      WESBROOK_CHANCELLOR_EN,
      [49.27332, -123.24852],
      [49.27329, -123.24871],
      [49.2733, -123.24884],
      [49.27328, -123.24896],
      [49.27323, -123.24905],
      WESBROOK_CHANCELLOR_WN,
    ],
  },
  {
    routeNames: [ROUTES.chancellor.name],
    description: "wb: from wesbrook",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.chancellorWb.id],
    positions: [
      WESBROOK_CHANCELLOR_WN,
      [49.27316, -123.2494],
      [49.2731, -123.2497],
      [49.27286, -123.25062],
      [49.27254, -123.25161],
      [49.27223, -123.25238],
      [49.27191, -123.25304],
      [49.27164, -123.25356],
      [49.27145, -123.25391],
      MARINE_CHANCELLOR_NE,
    ],
  },
];
