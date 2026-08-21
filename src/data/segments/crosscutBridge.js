import { RUFUS_17TH } from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const RUFUS_CROSSCUT_BRIDGE = [49.32417, -123.04623];
const S_END = [49.32548, -123.04702];
const N_END = [49.32604, -123.04652];

export const CROSSCUT_BRIDGE = [
  {
    routeNames: [ROUTES.crosscutBridge.name],
    description: "rufus",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.crosscutBridgeSb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.crosscutBridgeSb.id],
    positions: [RUFUS_17TH, RUFUS_CROSSCUT_BRIDGE],
  },
  {
    routeNames: [ROUTES.crosscutBridge.name],
    description: "pre-bridge",
    type: "mixed",
    elevation: 0.5,
    videoIds: [ROUTE_VIDEOS.crosscutBridgeSb.id],
    positions: [
      RUFUS_CROSSCUT_BRIDGE,
      [49.32441, -123.04563],
      [49.32448, -123.04559],
      [49.32459, -123.04558],
      [49.3249, -123.04591],
      [49.32519, -123.04632],
      [49.32527, -123.04652],
      [49.32529, -123.04703],
      [49.32532, -123.0471],
      [49.32538, -123.04714],
      [49.32544, -123.04712],
      S_END,
    ],
  },
  {
    routeNames: [ROUTES.crosscutBridge.name],
    description: "bridge",
    type: "mixed",
    elevation: 1,
    videoIds: [ROUTE_VIDEOS.crosscutBridgeSb.id],
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
    videoIds: [ROUTE_VIDEOS.crosscutBridgeSb.id],
    videoIdsStartAtEnd: [ROUTE_VIDEOS.crosscutBridgeSb.id],
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
      [49.32644, -123.04617],
      [49.32646, -123.04611],
      [49.32653, -123.04605],
    ],
  },
];
