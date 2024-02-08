import {
  BLANCA_16TH_NW_SLIP,
  MARINE_16TH_NNE,
  MARINE_16TH_SSE,
  WESBROOK_16TH_EN,
  WESBROOK_16TH_ES,
  WESBROOK_16TH_NE,
  WESBROOK_16TH_NW,
  WESBROOK_16TH_SE,
  WESBROOK_16TH_SW,
  WESBROOK_16TH_WN,
  WESBROOK_16TH_WS,
} from "../intersections";
import { ROUTES } from "../routes";

const SHOULDER_END = [49.25349, -123.24245];
const EB_BEFORE_EAST_MALL = [49.2537, -123.24193];
const EB_AFTER_EAST_MALL = [49.25434, -123.24003];
const EB_BEFORE_WESBROOK = [49.2554, -123.23702];
const EB_AFTER_WESBROOK = [49.25587, -123.23565];

const WB_BEFORE_WESBROOK = [49.25601, -123.23576];
const WB_AFTER_WESBROOK = [49.2555, -123.23736];
const WB_BEFORE_EAST_MALL = [49.25452, -123.24016];
const WB_AFTER_EAST_MALL = [49.25393, -123.24207];
const SHOULDER_START = [49.25373, -123.24262];

export const SIXTEENTH = [
  // {
  //   routeNames: [ROUTES.sixteenth.name],
  //   description: "wb to marine sb",
  //   positions: [
  //     //
  //     [49.25234, -122.24634],
  //     //
  //   ],
  // },

  // eb
  {
    routeNames: [ROUTES.sixteenth.name],
    description: "eb: initial shoulder",
    type: "shoulder",
    oneWay: "required",
    positions: [
      MARINE_16TH_SSE,
      [49.25152, -123.24549],
      [49.25164, -123.24564],
      [49.25173, -123.24572],
      [49.25181, -123.24578],
      [49.25192, -123.24581],
      [49.25204, -123.2458],
      [49.25219, -123.24574],
      [49.25231, -123.24565],
      [49.25239, -123.24552],
      [49.25246, -123.24536],
      SHOULDER_END,
    ],
  },
  {
    routeNames: [ROUTES.sixteenth.name],
    description: "eb: after shoulder",
    type: "painted",
    oneWay: "required",
    positions: [SHOULDER_END, EB_BEFORE_EAST_MALL],
  },
  {
    routeNames: [ROUTES.sixteenth.name],
    description: "eb: crossing east mall",
    type: "comfortable",
    oneWay: "required",
    positions: [
      EB_BEFORE_EAST_MALL,
      [49.25369, -123.24185],
      [49.25383, -123.24165],
      [49.25387, -123.2415],
      [49.25387, -123.24145],
      [49.25388, -123.24125],
      [49.25385, -123.24111],
      [49.25381, -123.24103], // EAST_MALL_16TH_SW
      [49.25389, -123.24086],
      [49.25393, -123.24068], // EAST_MALL_16TH_SE
      [49.25403, -123.24066],
      [49.25411, -123.24055], // EAST_MALL_16TH_ES
      [49.25428, -123.24007],
      EB_AFTER_EAST_MALL,
    ],
  },
  {
    routeNames: [ROUTES.sixteenth.name],
    description: "eb: east mall to wesbrook",
    type: "painted",
    oneWay: "required",
    positions: [EB_AFTER_EAST_MALL, [49.25481, -123.2387], EB_BEFORE_WESBROOK],
  },
  {
    routeNames: [ROUTES.sixteenth.name],
    description: "eb: before wesbrook",
    type: "comfortable",
    oneWay: "required",
    positions: [EB_BEFORE_WESBROOK, [49.25539, -123.23695], WESBROOK_16TH_WS],
  },
  {
    routeNames: [ROUTES.sixteenth.name, ROUTES.wesbrook.name],
    description: "eb: wesbrook SW",
    oneWay: "recommended",
    positions: [WESBROOK_16TH_WS, WESBROOK_16TH_SW],
  },
  {
    routeNames: [ROUTES.sixteenth.name],
    description: "eb: crossing wesbrook",
    oneWay: "recommended",
    positions: [WESBROOK_16TH_SW, WESBROOK_16TH_SE],
  },
  {
    routeNames: [ROUTES.sixteenth.name, ROUTES.wesbrook.name],
    description: "eb: wesbrook SE",
    oneWay: "recommended",
    positions: [
      WESBROOK_16TH_SE,
      [49.25559, -123.23591],
      [49.25568, -123.23586],
      WESBROOK_16TH_ES,
    ],
  },
  {
    routeNames: [ROUTES.sixteenth.name],
    description: "eb: after wesbrook",
    oneWay: "required",
    positions: [WESBROOK_16TH_ES, EB_AFTER_WESBROOK],
  },
  {
    routeNames: [ROUTES.sixteenth.name],
    description: "eb: wesbrook to blanca",
    type: "painted",
    oneWay: "required",
    positions: [
      EB_AFTER_WESBROOK,
      [49.25633, -123.23432],
      [49.25692, -123.23268],
      [49.25731, -123.23161], // BINNING
      [49.25756, -123.23073],
      [49.25774, -123.23005],
      [49.2579, -123.22933],
      [49.25808, -123.22841],
      [49.25822, -123.2275],
      [49.25831, -123.2266],
      [49.25837, -123.22584],
      [49.2584, -123.22494],
      [49.2584, -123.22417],
      [49.25836, -123.222],
      [49.25832, -123.21894],
      [49.25828, -123.21566],
    ],
  },

  // wb
  {
    routeNames: [ROUTES.sixteenth.name],
    description: "wb: 16th to wesbrook",
    type: "painted",
    oneWay: "required",
    positions: [
      BLANCA_16TH_NW_SLIP,
      [49.25898, -123.21551],
      [49.25874, -123.21579],
      [49.25863, -123.216],
      [49.25855, -123.21631],
      [49.25855, -123.21667],
      [49.25858, -123.21898],
      [49.25863, -123.22197],
      [49.25866, -123.22432],
      [49.25865, -123.22484],
      [49.25864, -123.22539],
      [49.25861, -123.22595],
      [49.25857, -123.22653],
      [49.25851, -123.22719],
      [49.25846, -123.22772],
      [49.25833, -123.22848],
      [49.25814, -123.22944],
      [49.25809, -123.22971],
      [49.2579, -123.23053],
      [49.25786, -123.2307],
      [49.25774, -123.23113],
      [49.25735, -123.23228],
      [49.25712, -123.2328],
      [49.25679, -123.23356],
      [49.25663, -123.23396],
      [49.25637, -123.23466],
      [49.25615, -123.23534],
      WB_BEFORE_WESBROOK,
    ],
  },
  {
    routeNames: [ROUTES.sixteenth.name],
    description: "wb: before wesbrook",
    oneWay: "required",
    positions: [WB_BEFORE_WESBROOK, WESBROOK_16TH_EN],
  },
  {
    routeNames: [ROUTES.sixteenth.name, ROUTES.wesbrook.name],
    description: "wb: wesbrook NE",
    oneWay: "recommended",
    positions: [WESBROOK_16TH_EN, [49.25607, -123.23631], WESBROOK_16TH_NE],
  },
  {
    routeNames: [ROUTES.sixteenth.name],
    description: "wb: crossing wesbrook",
    oneWay: "recommended",
    positions: [WESBROOK_16TH_NE, WESBROOK_16TH_NW],
  },
  {
    routeNames: [ROUTES.sixteenth.name, ROUTES.wesbrook.name],
    description: "wb: wesbrook NW",
    oneWay: "recommended",
    positions: [
      WESBROOK_16TH_NW,
      [49.25591, -123.23679],
      [49.25581, -123.23685],
      WESBROOK_16TH_WN,
    ],
  },
  {
    routeNames: [ROUTES.sixteenth.name],
    description: "wb: after wesbrook",
    oneWay: "required",
    positions: [WESBROOK_16TH_WN, [49.25556, -123.23734], WB_AFTER_WESBROOK],
  },
  {
    routeNames: [ROUTES.sixteenth.name],
    description: "wb: wesbrook to east mall",
    type: "painted",
    oneWay: "required",
    positions: [WB_AFTER_WESBROOK, [49.25498, -123.23883], WB_BEFORE_EAST_MALL],
  },
  {
    routeNames: [ROUTES.sixteenth.name],
    description: "wb: crossing east mall",
    oneWay: "required",
    positions: [
      WB_BEFORE_EAST_MALL,
      [49.25452, -123.24031],
      [49.25443, -123.24053],
      [49.25442, -123.24069], // EAST_MALL_16TH_EN
      [49.25446, -123.24096],
      [49.25453, -123.24114], // EAST_MALL_16TH_NE
      [49.25444, -123.24132],
      [49.25443, -123.24154], // EAST_MALL_16TH_NW
      [49.25429, -123.24156],
      [49.2542, -123.24164], // EAST_MALL_16TH_WN
      [49.25409, -123.2418],
      [49.25399, -123.24205],
      WB_AFTER_EAST_MALL,
    ],
  },
  {
    routeNames: [ROUTES.sixteenth.name],
    description: "wb: after east mall",
    type: "painted",
    oneWay: "required",
    positions: [WB_AFTER_EAST_MALL, SHOULDER_START],
  },
  {
    routeNames: [ROUTES.sixteenth.name],
    description: "wb: end shoulder",
    type: "shoulder",
    oneWay: "required",
    positions: [
      SHOULDER_START,
      [49.25313, -123.24436],
      [49.25253, -123.24604],
      [49.25245, -123.24636],
      [49.25242, -123.24663],
      [49.25246, -123.24689],
      [49.25252, -123.2471],
      MARINE_16TH_NNE,
    ],
  },
];