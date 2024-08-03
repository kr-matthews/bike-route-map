import {
  EAST_MALL_STADIUM_E,
  EAST_MALL_STADIUM_W,
  MARINE_STADIUM_NE,
  MARINE_STADIUM_SE,
  WEST_MALL_AGRONOMY_N,
  WEST_MALL_AGRONOMY_S,
  WEST_MALL_MARINE_N,
  WEST_MALL_MARINE_S,
  WEST_MALL_THUNDERBIRD,
  WEST_MALL_UNIVERSITY_S,
} from "../intersections";
import { ROUTES } from "../routes";

const WEST_MALL_STADIUM_S = [49.2553, -123.24795];
const WEST_MALL_STADIUM_N = [49.25546, -123.24812];
const WEST_MALL_STADIUM_WS = [49.25528, -123.24812];
const WEST_MALL_STADIUM_WN = [49.25534, -123.24822];

export const WEST_MALL = [
  {
    description: "roundabout: E",
    type: "quiet",
    oneWay: "required",
    positions: [
      WEST_MALL_STADIUM_S,
      [49.25534, -123.24792],
      [49.2554, -123.24792],
      [49.25545, -123.24796],
      [49.25547, -123.24803],
      WEST_MALL_STADIUM_N,
    ],
  },
  {
    description: "roundabout: NW",
    type: "quiet",
    oneWay: "required",
    positions: [
      WEST_MALL_STADIUM_N,
      [49.25543, -123.24819],
      WEST_MALL_STADIUM_WN,
    ],
  },
  {
    description: "roundabout: W",
    type: "quiet",
    oneWay: "required",
    hideArrows: true,
    positions: [WEST_MALL_STADIUM_WN, WEST_MALL_STADIUM_WS],
  },
  {
    description: "roundabout: SW",
    type: "quiet",
    oneWay: "required",
    positions: [
      WEST_MALL_STADIUM_WS,
      [49.25527, -123.24803],
      WEST_MALL_STADIUM_S,
    ],
  },
  {
    description: "stadium eb",
    type: "quiet",
    oneWay: "required",
    positions: [MARINE_STADIUM_SE, WEST_MALL_STADIUM_WS],
  },
  {
    description: "stadium wb",
    type: "quiet",
    oneWay: "required",
    positions: [WEST_MALL_STADIUM_WN, MARINE_STADIUM_NE],
  },
  {
    description: "stadium: to east mall",
    type: "quiet",
    positions: [
      WEST_MALL_STADIUM_S,
      [49.25523, -123.24782],
      [49.25518, -123.24763],
      [49.25515, -123.24747],
      [49.25515, -123.24735],
      [49.25516, -123.24719],
      [49.25519, -123.24701],
      [49.25525, -123.2468],
      [49.25585, -123.2451],
      [49.25587, -123.24498],
      [49.25589, -123.24476],
      [49.2559, -123.24459],
      [49.256, -123.24427],
      [49.2561, -123.244],
      [49.25617, -123.24387],
      [49.25625, -123.24377],
      [49.25633, -123.24367],
      [49.25638, -123.24358],
      [49.25643, -123.24348],
      EAST_MALL_STADIUM_W,
      EAST_MALL_STADIUM_E,
    ],
  },

  {
    routeNames: [ROUTES.westMall.name],
    description: "stadium to agronomy",
    type: "quiet",
    positions: [
      WEST_MALL_STADIUM_N,
      [49.2558, -123.24841],
      [49.25673, -123.24916],
      [49.25787, -123.25007],
      WEST_MALL_THUNDERBIRD,
      WEST_MALL_AGRONOMY_S,
    ],
  },

  {
    routeNames: [ROUTES.westMall.name, ROUTES.agronomy.name],
    description: "agronomy overlap",
    type: "quiet",
    positions: [
      WEST_MALL_AGRONOMY_S,
      [49.25995, -123.2518],
      [49.26011, -123.25195],
      [49.26023, -123.25211],
      [49.26038, -123.25233],
      [49.26048, -123.25247],
      WEST_MALL_AGRONOMY_N,
    ],
  },

  {
    routeNames: [ROUTES.westMall.name],
    description: "agronomy to marine",
    type: "quiet",
    positions: [
      WEST_MALL_AGRONOMY_N,
      [49.2615, -123.25335],
      [49.26162, -123.25341],
      [49.26173, -123.25344],
      [49.26195, -123.25347],
      [49.26206, -123.25349],
      [49.26215, -123.25353],
      [49.26255, -123.25385],
      WEST_MALL_UNIVERSITY_S,
      [49.26409, -123.25511],
      [49.26466, -123.25559],
      [49.26545, -123.25622],
      [49.2668, -123.25735],
      [49.26792, -123.25827],
      WEST_MALL_MARINE_S,
      WEST_MALL_MARINE_N,
    ],
  },
];
