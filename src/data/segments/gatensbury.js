import { MOODY_ST_JOHNS_S } from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const GATENSBURY_FOSTER = [49.25615, -122.8578];
const GATENSBURY_REGAN_SW = [49.26153, -122.85746];
const GATENSBURY_BARTLETT_SW = [49.26927, -122.85759];
const GATENSBURY_HENRY = [49.27465, -122.85357];
const GATENSBURY_POST_HENRY = [49.27463, -122.85404];

export const GATENSBURY = [
  {
    routeNames: [ROUTES.gatensbury.name],
    description: "king albert to foster",
    type: "shared",
    positions: [
      [49.25149, -122.85793],
      [49.25385, -122.85787],
      GATENSBURY_FOSTER,
    ],
  },
  {
    routeNames: [ROUTES.gatensbury.name],
    description: "foster to/along lake",
    type: "shared",
    videoIds: [VIDEOS.gatensburySb.id],
    videoIdsEndAtStart: [VIDEOS.gatensburySb.id],
    positions: [
      GATENSBURY_FOSTER,
      [49.25628, -122.85759],
      [49.2569, -122.8567],
      [49.25703, -122.85656],
      [49.25714, -122.85647],
      [49.25728, -122.85644],
      [49.25749, -122.85644],
      [49.2587, -122.85658],
      [49.25886, -122.85658],
      [49.25899, -122.85656],
      [49.25973, -122.85632],
      [49.25982, -122.8563],
      [49.25989, -122.85631],
      [49.25997, -122.85636],
      GATENSBURY_REGAN_SW,
    ],
  },
  {
    routeNames: [ROUTES.gatensbury.name],
    description: "path, flat part",
    type: "mixed",
    videoIds: [VIDEOS.gatensburySb.id],
    positions: [
      GATENSBURY_REGAN_SW,
      [49.26153, -122.85755],
      [49.26177, -122.85774],
      [49.26187, -122.85776],
      [49.26338, -122.85774],
      [49.26359, -122.85773],
      [49.26666, -122.85765],
      GATENSBURY_BARTLETT_SW,
    ],
  },
  {
    routeNames: [ROUTES.gatensbury.name],
    description: "road, downhill",
    type: "shared",
    oneWay: "required",
    positions: [
      GATENSBURY_BARTLETT_SW,
      [49.26927, -122.85743],
      [49.26984, -122.85741],
      [49.27, -122.85737],
      [49.27018, -122.85728],
      [49.27037, -122.85712],
      [49.27051, -122.85695],
      [49.27064, -122.85673],
      [49.27076, -122.85656],
      [49.27089, -122.85642],
      [49.27102, -122.85638],
      [49.27159, -122.85635],
      [49.27172, -122.8563],
      [49.27181, -122.85625],
      [49.27191, -122.85617],
      [49.27198, -122.85608],
      [49.27251, -122.85519],
      [49.27262, -122.85508],
      [49.27275, -122.85503],
      [49.27286, -122.85503],
      [49.27294, -122.85507],
      [49.27302, -122.85515],
      [49.27312, -122.85531],
      [49.27321, -122.85559],
      [49.27341, -122.85631],
      [49.2735, -122.85657],
      [49.27362, -122.85682],
      [49.27368, -122.85692],
      [49.27376, -122.85699],
      [49.27384, -122.857],
      [49.27391, -122.85696],
      [49.27397, -122.85688],
      [49.27442, -122.85571],
      [49.27449, -122.85546],
      [49.27454, -122.85515],
      [49.27456, -122.8549],
      [49.27457, -122.85427],
      [49.27462, -122.85381],
      GATENSBURY_HENRY,
    ],
  },
  {
    routeNames: [ROUTES.gatensbury.name],
    description: "brief road, uphill",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.gatensburySb.id],
    positions: [
      GATENSBURY_HENRY,
      [49.27465, -122.85384],
      GATENSBURY_POST_HENRY,
    ],
  },
  {
    routeNames: [ROUTES.gatensbury.name],
    description: "path, uphill",
    type: "mixed",
    oneWay: "recommended",
    videoIds: [VIDEOS.gatensburySb.id],
    positions: [
      GATENSBURY_POST_HENRY,
      [49.27464, -122.85414],
      [49.27463, -122.85426],
      [49.27462, -122.85439],
      [49.27462, -122.85489],
      [49.27461, -122.85509],
      [49.27458, -122.85531],
      [49.27455, -122.85549],
      [49.27448, -122.85578],
      [49.27433, -122.85621],
      [49.27406, -122.85692],
      [49.274, -122.85704],
      [49.27394, -122.85711],
      [49.27386, -122.85714],
      [49.27379, -122.85714],
      [49.27373, -122.85712],
      [49.27365, -122.85703],
      [49.27346, -122.8567],
      [49.27309, -122.85551],
      [49.27303, -122.85535],
      [49.27297, -122.85525],
      [49.2729, -122.8552],
      [49.2728, -122.85516],
      [49.27272, -122.85516],
      [49.27266, -122.85518],
      [49.27257, -122.85527],
      [49.27211, -122.85598],
      [49.27194, -122.85625],
      [49.27185, -122.85632],
      [49.27175, -122.85638],
      [49.27161, -122.85644],
      [49.27149, -122.85646],
      [49.2711, -122.85647],
      [49.27093, -122.85652],
      [49.2708, -122.85662],
      [49.2707, -122.85678],
      [49.27049, -122.85714],
      [49.27035, -122.85732],
      [49.27018, -122.85744],
      [49.27006, -122.85749],
      [49.26997, -122.85751],
      [49.26942, -122.85755],
      GATENSBURY_BARTLETT_SW,
    ],
  },
  {
    routeNames: [ROUTES.gatensbury.name],
    description: "henry & moody",
    type: "shared",
    videoIds: [VIDEOS.gatensburySb.id],
    positions: [
      GATENSBURY_HENRY,
      [49.27466, -122.85338],
      [49.27465, -122.85248],
      [49.27464, -122.85018],
      [49.27563, -122.85017],
      MOODY_ST_JOHNS_S,
    ],
  },
];
