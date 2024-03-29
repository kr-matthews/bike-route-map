import {
  KENSINGTON_CANADA_NW,
  KENSINGTON_CVG,
  KENSINGTON_SPROTT_E,
  KENSINGTON_SPROTT_W,
  SPERLING_JOE_SAKIC_N,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const KENSINGTON_JOE_SAKIC_NE = [49.25357, -122.96635];
const KENSINGTON_JOE_SAKIC_NW = [49.25354, -122.96672];
const KENSINGTON_JOE_SAKIC_SW = [49.25337, -122.96674];
const KENSINGTON_UNDERPASS_W = [49.25901, -122.96923];
const KENSINGTON_STILL_CREEK_N = [49.25951, -122.96914];
const LOUGHEED_OVERPASS_N = [49.26076, -122.96791];
const LOUGHEED_OVERPASS_S = [49.25985, -122.96896];

const OVERPASS_START = [49.24353, -122.96785];
const OVERPASS_END = [49.24417, -122.96764];

const LANE_OVERPASS_START = [49.24335, -122.96756];
const LANE_OVERPASS_END = [49.24401, -122.96733];

export const KENSINGTON = [
  {
    description: "nb shoulder",
    type: "shoulder",
    oneWay: "required",
    positions: [
      [49.24202, -122.968],
      [49.24258, -122.96777],
    ],
  },
  {
    description: "nb lane 1",
    type: "painted",
    oneWay: "required",
    elevation: 0.5,
    positions: [
      [49.24275, -122.96774],
      [49.24314, -122.96763],
      LANE_OVERPASS_START,
    ],
  },
  {
    description: "nb lane 2",
    type: "painted",
    oneWay: "required",
    elevation: 1,
    positions: [LANE_OVERPASS_START, LANE_OVERPASS_END],
  },
  {
    description: "nb lane 3",
    type: "painted",
    oneWay: "required",
    elevation: 0.5,
    positions: [
      LANE_OVERPASS_END,
      [49.24467, -122.9671],
      [49.24485, -122.96707],
      [49.24533, -122.96694],
      [49.24579, -122.96685],
      [49.24643, -122.96673],
      [49.24702, -122.96658],
      [49.24736, -122.96651],
      [49.24775, -122.96645],
      [49.24831, -122.96637],
      [49.24881, -122.96636],
      [49.24939, -122.96638],
      [49.2498, -122.96641],
      KENSINGTON_SPROTT_E,
    ],
  },
  {
    description: "connection to lakes",
    positions: [
      KENSINGTON_JOE_SAKIC_NE,
      [49.25355, -122.96625],
      [49.25353, -122.96612],
      [49.25351, -122.96597],
      [49.25353, -122.96574],
      [49.25352, -122.96561],
      [49.25352, -122.96543],
      [49.25354, -122.96526],
      [49.25358, -122.9651],
      [49.25366, -122.96494],
      [49.25372, -122.96484],
      [49.25378, -122.96479],
      [49.25382, -122.96472],
      SPERLING_JOE_SAKIC_N,
    ],
  },
  {
    description: "connection to cvg",
    positions: [
      KENSINGTON_STILL_CREEK_N,
      [49.2595, -122.96898],
      [49.25952, -122.96866],
      [49.25964, -122.96852],
      KENSINGTON_CVG,
    ],
  },
  {
    description: "joe sakic",
    type: "mixed",
    positions: [
      [49.25181, -122.97232],
      [49.25194, -122.97194],
      [49.2521, -122.97164],
      [49.2521, -122.97135],
      [49.25212, -122.9713],
      [49.25221, -122.97123],
      [49.25223, -122.97103],
      [49.25223, -122.97027],
      [49.25222, -122.97018],
      [49.25232, -122.97003],
      [49.2526, -122.96985],
      [49.25277, -122.96983],
      [49.25277, -122.96959],
      [49.25325, -122.96958],
      [49.25324, -122.96919],
      [49.25324, -122.96899],
      [49.25327, -122.96898],
      [49.25334, -122.9688],
      [49.25337, -122.96802],
      [49.25335, -122.96776],
      [49.25336, -122.96743],
      [49.25336, -122.96711],
      [49.25334, -122.96681],
      KENSINGTON_JOE_SAKIC_SW,
    ],
  },

  {
    routeNames: [ROUTES.kensington.name, ROUTES.lakes.name],
    description: "west side: canada way to highway",
    elevation: 0.5,
    videoIds: [VIDEOS.lakesNb.id],
    positions: [
      KENSINGTON_CANADA_NW,
      [49.24209, -122.96855],
      [49.24213, -122.96845],
      [49.24222, -122.96837],
      [49.24227, -122.96835],
      [49.24249, -122.96829],
      [49.24301, -122.9681],
      [49.24311, -122.96811],
      [49.24313, -122.96806],
      [49.24322, -122.96798],
      [49.24328, -122.96793],
      OVERPASS_START,
    ],
  },

  {
    routeNames: [ROUTES.kensington.name, ROUTES.lakes.name],
    description: "west side: overpass",
    elevation: 1,
    videoIds: [VIDEOS.lakesNb.id],
    positions: [OVERPASS_START, OVERPASS_END],
  },

  {
    routeNames: [ROUTES.kensington.name, ROUTES.lakes.name],
    description: "west side: highway to sprott",
    elevation: 0.5,
    videoIds: [VIDEOS.lakesNb.id],
    positions: [
      OVERPASS_END,
      [49.24514, -122.96734],
      [49.24531, -122.96732],
      [49.24539, -122.96734],
      [49.2455, -122.96741],
      [49.24556, -122.96743],
      [49.24563, -122.96743],
      [49.24643, -122.96721],
      [49.24745, -122.96692],
      [49.24757, -122.96682],
      [49.24787, -122.96676],
      [49.24813, -122.96673],
      [49.24976, -122.96673],
      [49.24982, -122.96676],
      KENSINGTON_SPROTT_W,
    ],
  },
  {
    routeNames: [ROUTES.kensington.name],
    description: "west side: sprott to overpass",
    elevation: 0.5,
    positions: [
      KENSINGTON_SPROTT_W,
      [49.25004, -122.96677],
      [49.25012, -122.96678],
      [49.25124, -122.9668],
      [49.25149, -122.96674],
      [49.25314, -122.96675],
      [49.25323, -122.96671],
      [49.2533, -122.96674],
      KENSINGTON_JOE_SAKIC_SW,
      KENSINGTON_JOE_SAKIC_NW,
      [49.25387, -122.96674],
      [49.25449, -122.96683],
      [49.25502, -122.96697],
      [49.25567, -122.96721],
      [49.25663, -122.96773],
      [49.25699, -122.96793],
      [49.25781, -122.96835],
      [49.25857, -122.96884],
      [49.25874, -122.96903],
      KENSINGTON_UNDERPASS_W,
      [49.25906, -122.96923],
      [49.25938, -122.96919],
      KENSINGTON_STILL_CREEK_N,
      [49.25959, -122.96912], // technically, elevation starts here
      LOUGHEED_OVERPASS_S,
    ],
  },
  {
    routeNames: [ROUTES.kensington.name],
    description: "lougheed overpass",
    elevation: 1,
    positions: [
      LOUGHEED_OVERPASS_S,
      [49.2601, -122.96881],
      [49.26027, -122.96868],
      [49.26042, -122.96852],
      LOUGHEED_OVERPASS_N,
    ],
  },
  {
    routeNames: [ROUTES.kensington.name],
    description: "west side: overpass to broadway",
    elevation: 0.5,
    positions: [
      LOUGHEED_OVERPASS_N,
      [49.2608, -122.96785],
      [49.26086, -122.96781],
      [49.26106, -122.96789],
      [49.26122, -122.96799],
      [49.26144, -122.96818],
      [49.26162, -122.96836],
      [49.26173, -122.96848],
    ],
  },
  {
    routeNames: [ROUTES.kensington.name],
    description: "east side",
    positions: [
      KENSINGTON_JOE_SAKIC_NW,
      [49.25356, -122.96638],
      KENSINGTON_JOE_SAKIC_NE,
      [49.25378, -122.96635],
      [49.2542, -122.96639],
      [49.25458, -122.96646],
      [49.25476, -122.9665],
      [49.25518, -122.96661],
      [49.2557, -122.96684],
      [49.25599, -122.96696],
      [49.25674, -122.96737],
      [49.2576, -122.96787],
      [49.2581, -122.96817],
      [49.25871, -122.96846],
      [49.25906, -122.96869],
      KENSINGTON_UNDERPASS_W,
    ],
  },
];
