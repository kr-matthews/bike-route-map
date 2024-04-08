import {
  BRIDGEWAY_CREEKWAY_PARK_N,
  BRIDGEWAY_CREEKWAY_PARK_W,
  CASSIAR_DUNDAS_S,
  RENFREW_PANDORA,
  WINDERMERE_HASTINGS_N,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const FIELDS_E = [49.28231, -123.03223];
const FIELDS_NW = [49.28368, -123.03408];
const FIELDS_SW = [49.28151, -123.03486];
const BRIDGEWAY_CREEKWAY_PARK_S = [49.28808, -123.03368];
const BRIDGEWAY_MCGILL_OFF_RAMP_NW = [49.28714, -123.03367];
const BRIDGEWAY_MCGILL_OFF_RAMP_SW = [49.28707, -123.03368];
const MILLER_E_END = [49.28377, -123.03395];
const MILLER_MIDDLE = [49.28461, -123.03779];
const TUNNEL_START = [49.28724, -123.03362];
const TUNNEL_END = [49.28791, -123.03367];
const HIGHWAY_BRIDGEWAY_N = [49.28379, -123.03209];
const HIGHWAY_BRIDGEWAY_S = [49.28366, -123.03207];
const HIGHWAY_BRIDGEWAY_SE = [49.28357, -123.03132];

export const HASTINGS_PARK = [
  {
    routeNames: [ROUTES.hastingsPark.name],
    description: "hastings",
    type: "mixed",
    videoIds: [
      VIDEOS.hastingsPortsideWindermere.id,
      VIDEOS.hastingsWindermereCassiar.id,
      VIDEOS.windermereNb.id,
    ],
    videoIdsStartAtStart: [VIDEOS.hastingsWindermereCassiar.id],
    videoIdsEndAtStart: [VIDEOS.hastingsPortsideWindermere.id],
    videoIdsEndAtEnd: [VIDEOS.windermereNb.id],
    positions: [
      WINDERMERE_HASTINGS_N,
      [49.28124, -123.03497],
      [49.28127, -123.03493],
      [49.28141, -123.03492],
      [49.28148, -123.0349],
      FIELDS_SW,
    ],
  },
  {
    routeNames: [ROUTES.hastingsPark.name],
    description: "fields west",
    type: "mixed",
    videoIds: [VIDEOS.hastingsPortsideWindermere.id],
    positions: [
      FIELDS_SW,
      [49.28155, -123.03494],
      [49.2816, -123.03496],
      [49.28311, -123.03495],
      [49.2832, -123.03494],
      [49.28332, -123.03484],
      [49.28342, -123.03474],
      [49.28352, -123.03456],
      [49.28363, -123.03419],
      FIELDS_NW,
    ],
  },
  {
    routeNames: [ROUTES.hastingsPark.name],
    description: "fields south east",
    type: "combined",
    videoIds: [VIDEOS.hastingsWindermereCassiar.id],
    positions: [
      FIELDS_SW,
      [49.28152, -123.03367],
      [49.28157, -123.033],
      [49.28164, -123.03233],
      [49.28168, -123.03225],
      [49.28175, -123.03223],
      FIELDS_E,
    ],
  },
  {
    routeNames: [ROUTES.hastingsPark.name],
    description: "fields north east",
    type: "combined",
    videoIds: [VIDEOS.hastingsCassiarPandora.id],
    positions: [
      FIELDS_E,
      [49.28323, -123.03227],
      [49.28328, -123.03229],
      [49.28335, -123.03234],
      [49.28342, -123.03242],
      [49.28352, -123.03256],
      [49.28357, -123.03266],
      [49.28362, -123.03279],
      [49.28366, -123.03296],
      [49.28367, -123.03311],
      [49.28366, -123.03397],
      FIELDS_NW,
    ],
  },
  {
    routeNames: [ROUTES.hastingsPark.name],
    description: "cassiar connection",
    type: "mixed",
    videoIds: [
      VIDEOS.hastingsCassiarPandora.id,
      VIDEOS.hastingsWindermereCassiar.id,
    ],
    videoIdsStartAtEnd: [VIDEOS.hastingsCassiarPandora.id],
    videoIdsEndAtEnd: [VIDEOS.hastingsWindermereCassiar.id],
    positions: [
      FIELDS_E,
      [49.28234, -123.03218],
      [49.2827, -123.03208],
      [49.2828, -123.03208],
      [49.28319, -123.03215],
      [49.28332, -123.03217],
      [49.28338, -123.03219],
      [49.28356, -123.03227],
      [49.2836, -123.03229],
      [49.28363, -123.03222],
      HIGHWAY_BRIDGEWAY_S,
      [49.28369, -123.03207],
      [49.28369, -123.03203],
      [49.28363, -123.0316],
      [49.2836, -123.03153],
      [49.28357, -123.03153],
      HIGHWAY_BRIDGEWAY_SE,
      [49.2847, -123.03112],
      CASSIAR_DUNDAS_S,
    ],
  },
  {
    routeNames: [ROUTES.hastingsPark.name],
    description: "overlap near bike track",
    type: "comfortable",
    videoIds: [
      VIDEOS.hastingsPortsideWindermere.id,
      VIDEOS.hastingsCassiarPandora.id,
    ],
    positions: [FIELDS_NW, MILLER_E_END],
  },
  {
    routeNames: [ROUTES.hastingsPark.name],
    description: "bridgewater path",
    type: "comfortable",
    elevation: -0.5,
    videoIds: [VIDEOS.hastingsPortsideWindermere.id],
    positions: [
      MILLER_E_END,
      [49.28385, -123.03382],
      [49.28398, -123.03366],
      [49.28404, -123.03362],
      [49.28409, -123.03362],
      [49.28421, -123.03365],
      [49.28434, -123.03368],
      [49.28445, -123.03368],
      [49.28454, -123.03365],
      [49.28489, -123.03349],
      [49.28516, -123.03338],
      [49.28548, -123.03325],
      [49.28588, -123.03312],
      [49.2865, -123.03292],
      [49.28662, -123.03294],
      [49.28673, -123.03303],
      [49.28682, -123.03319],
      [49.28692, -123.03356],
      [49.28697, -123.03365],
      [49.28704, -123.03368],
      BRIDGEWAY_MCGILL_OFF_RAMP_SW,
      BRIDGEWAY_MCGILL_OFF_RAMP_NW,
      TUNNEL_START,
    ],
  },
  {
    routeNames: [ROUTES.hastingsPark.name],
    description: "tunnel",
    type: "mixed",
    elevation: -1,
    videoIds: [VIDEOS.hastingsPortsideWindermere.id],
    positions: [TUNNEL_START, TUNNEL_END],
  },
  {
    routeNames: [ROUTES.hastingsPark.name],
    description: "bridgeway (creekway)",
    type: "mixed",
    elevation: -0.5,
    videoIds: [VIDEOS.hastingsPortsideWindermere.id],
    videoIdsStartAtEnd: [VIDEOS.hastingsPortsideWindermere.id],
    positions: [
      TUNNEL_END,
      BRIDGEWAY_CREEKWAY_PARK_S,
      [49.28837, -123.03356],
      BRIDGEWAY_CREEKWAY_PARK_N,
    ],
  },
  {
    routeNames: [ROUTES.hastingsPark.name],
    description: "creekway portside connection",
    type: "mixed",
    positions: [
      BRIDGEWAY_CREEKWAY_PARK_S,
      [49.28808, -123.03379],
      [49.28812, -123.0339],
      [49.28816, -123.034],
      [49.28836, -123.03433],
      BRIDGEWAY_CREEKWAY_PARK_W,
    ],
  },
  {
    routeNames: [ROUTES.hastingsPark.name],
    description: "miller east",
    type: "comfortable",
    videoIds: [VIDEOS.hastingsCassiarPandora.id],
    positions: [
      MILLER_MIDDLE,
      [49.2846, -123.03773],
      [49.28459, -123.03754],
      [49.28442, -123.03627],
      [49.28423, -123.0348],
      [49.28412, -123.03406],
      [49.28408, -123.03388],
      [49.28404, -123.03382],
      [49.28398, -123.03383],
      [49.28387, -123.03399],
      [49.28383, -123.03399],
      MILLER_E_END,
    ],
  },
  {
    routeNames: [ROUTES.hastingsPark.name],
    description: "miller west",
    type: "comfortable",
    positions: [
      [49.28475, -123.04402],
      [49.28471, -123.0439],
      [49.28463, -123.04351],
      [49.28463, -123.04344],
      [49.28462, -123.04255],
      [49.28463, -123.04248],
      [49.28509, -123.04166],
      [49.2851, -123.04163],
      [49.28511, -123.04157],
      [49.28511, -123.04152],
      [49.28464, -123.03789],
      MILLER_MIDDLE,
    ],
  },
  {
    routeNames: [ROUTES.hastingsPark.name],
    description: "pandora",
    type: "comfortable",
    videoIds: [VIDEOS.hastingsCassiarPandora.id],
    videoIdsEndAtStart: [VIDEOS.hastingsCassiarPandora.id],
    positions: [
      RENFREW_PANDORA,
      [49.28299, -123.0423],
      [49.28297, -123.04225],
      [49.28297, -123.04213],
      [49.28331, -123.0418],
      [49.28355, -123.04106],
      [49.28354, -123.04087],
      [49.28352, -123.04042],
      [49.28342, -123.03889],
      [49.28339, -123.03862],
      [49.28338, -123.03839],
      [49.28339, -123.0383],
      [49.28346, -123.03823],
      [49.2837, -123.03814],
      [49.28372, -123.0381],
      [49.28422, -123.03795],
      [49.28456, -123.03783],
      MILLER_MIDDLE,
    ],
  },
  {
    routeNames: [ROUTES.hastingsPark.name],
    description: "bridgeway: nb",
    type: "painted",
    oneWay: "required",
    positions: [
      [49.28375, -123.03178],
      HIGHWAY_BRIDGEWAY_N,
      [49.28387, -123.03259],
      [49.2839, -123.03275],
      [49.28395, -123.03291],
      [49.28401, -123.03305],
      [49.28408, -123.03313],
      [49.28417, -123.03323],
      [49.28428, -123.03329],
      [49.2844, -123.03332],
      [49.28451, -123.0333],
      [49.28641, -123.03267],
      [49.28647, -123.03265],
      [49.28656, -123.03265],
      [49.28664, -123.03267],
      [49.2867, -123.0327],
      [49.28679, -123.03277],
      [49.28688, -123.03287],
      [49.28695, -123.03302],
      [49.2871, -123.03347],
      BRIDGEWAY_MCGILL_OFF_RAMP_NW,
    ],
  },
  {
    routeNames: [ROUTES.hastingsPark.name],
    description: "to bridgeway nb",
    type: "comfortable",
    oneWay: "recommended",
    hideArrows: true,
    positions: [
      HIGHWAY_BRIDGEWAY_S,
      [49.2837, -123.03211],
      [49.28371, -123.03209],
      HIGHWAY_BRIDGEWAY_N,
    ],
  },
  {
    routeNames: [ROUTES.hastingsPark.name],
    description: "bridgeway: sb lane",
    type: "painted",
    oneWay: "required",
    positions: [
      BRIDGEWAY_MCGILL_OFF_RAMP_SW,
      [49.28702, -123.03348],
      [49.28689, -123.03308],
      [49.28683, -123.03295],
      [49.28676, -123.03287],
      [49.28665, -123.03278],
      [49.28655, -123.03276],
      [49.28646, -123.03277],
      [49.28457, -123.03339],
      [49.28445, -123.03342],
      [49.28434, -123.03342],
      [49.28423, -123.03338],
      [49.28414, -123.03332],
      [49.28401, -123.03319],
      [49.28392, -123.03305],
      [49.28387, -123.03291],
      [49.28383, -123.03276],
      [49.28382, -123.03259],
      [49.28377, -123.03236],
      [49.28373, -123.03212],
      [49.2837, -123.03186],
      [49.28368, -123.03166],
      [49.28367, -123.03155],
      HIGHWAY_BRIDGEWAY_SE,
    ],
  },
];
