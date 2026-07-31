import {} from "../intersections";
import { ROUTES } from "../routes";

const S_END = [49.32548, -123.04702];
const N_END = [49.32604, -123.04652];

export const CROSSCUT_BRIDGE = [
  {
    routeNames: [ROUTES.crosscutBridge.name],
    description: "pre-bridge",
    type: "mixed",
    elevation: 0.5,
    positions: [
      [49.32533, -123.04706],
      [49.32537, -123.04713],
      [49.32543, -123.04714],
      [49.32545, -123.04711],
      S_END,
    ],
  },
  {
    routeNames: [ROUTES.crosscutBridge.name],
    description: "bridge",
    type: "mixed",
    elevation: 1,
    positions: [
      S_END,
      [49.32552, -123.04682],
      [49.32556, -123.0467],
      [49.3256, -123.04659],
      [49.32568, -123.04651],
      [49.32579, -123.04647],
      [49.3259, -123.04647],
      N_END,
    ],
  },
  {
    routeNames: [ROUTES.crosscutBridge.name],
    description: "post-bridge",
    type: "mixed",
    elevation: 0.5,
    positions: [
      N_END,
      [49.3261, -123.04657],
      [49.32613, -123.04663],
      [49.32613, -123.04669],
      [49.3261, -123.04685],
      [49.32612, -123.04696],
      [49.32616, -123.04703],
      [49.32624, -123.04706],
      [49.3263, -123.04701],
      [49.32635, -123.04692],
      [49.32636, -123.04682],
      [49.32633, -123.04673],
      [49.32627, -123.0466],
      [49.32625, -123.04649],
      [49.32626, -123.04638],
      [49.32633, -123.04627],
      [49.3264, -123.04622],
      [49.32649, -123.04624],
    ],
  },
];
