import {
  BOUNDARY_FRASER_RIVER,
  GLENLYON_BYRNE_CREEK,
  GLENLYON_FRASER_FORESHORE,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const FRASER_FORESHORE = [
  {
    routeNames: [ROUTES.fraserForeshoreTrail.name],
    description: "boundary to glenlyon",
    type: "mixed",
    videoIds: [VIDEOS.fraserForeshoreEb.id],
    videoIdsStartAtStart: [VIDEOS.fraserForeshoreEb.id],
    positions: [
      BOUNDARY_FRASER_RIVER,
      [49.20144, -123.0234],
      [49.20136, -123.02333],
      [49.201, -123.0223],
      [49.20094, -123.02196],
      [49.20028, -123.02009],
      [49.20009, -123.01974],
      [49.19909, -123.01752],
      [49.19875, -123.01663],
      [49.19871, -123.01643],
      [49.19864, -123.01614],
      [49.19846, -123.01577],
      [49.19824, -123.01513],
      [49.19801, -123.01428],
      [49.19784, -123.01376],
      [49.19768, -123.01304],
      [49.19764, -123.01276],
      [49.1976, -123.01253],
      [49.19762, -123.01225],
      [49.19767, -123.0121],
      [49.19794, -123.01178],
      [49.19803, -123.01162],
      [49.19809, -123.01135],
      [49.19804, -123.01007],
      [49.19796, -123.00968],
      [49.19772, -123.00906],
      GLENLYON_FRASER_FORESHORE,
    ],
  },
  {
    routeNames: [ROUTES.fraserForeshoreTrail.name],
    description: "glenlyon to east end",
    type: "mixed",
    videoIds: [VIDEOS.fraserForeshoreEb.id],
    videoIdsEndAtEnd: [VIDEOS.fraserForeshoreEb.id],
    positions: [
      GLENLYON_BYRNE_CREEK,
      [49.19518, -123.00181],
      [49.19502, -123.00214],
      [49.19469, -123.00265],
      [49.19465, -123.00268],
      [49.19461, -123.00259],
      [49.19444, -123.00233],
      [49.19437, -123.00218],
      [49.19425, -123.00175],
      [49.19418, -123.00135],
      [49.19416, -123.00081],
      [49.19414, -123.00074],
      [49.19368, -123.0002],
      [49.19335, -123.00017],
      [49.19296, -122.99995],
      [49.1926, -122.99993],
      [49.19229, -122.99954],
      [49.19226, -122.99921],
      [49.1922, -122.99904],
      [49.19168, -122.99843],
      [49.19155, -122.99818],
      [49.18983, -122.99613],
      [49.18961, -122.99598],
      [49.18851, -122.9947],
      [49.18828, -122.99399],
      [49.18762, -122.99309],
      [49.18727, -122.99284],
      [49.18703, -122.99242],
      [49.18683, -122.99228],
      [49.18664, -122.99173],
      [49.18576, -122.99018],
      [49.18484, -122.98842],
    ],
  },
];
