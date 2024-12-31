import { LIONS_GATE_KLAHANIE } from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const KLAHANIE_W = [49.3265, -123.12579];
const PATH_S = [49.32604, -123.12316];
const PATH_N = [49.32741, -123.12144];

export const LIONS_GATE_VILLAGE = [
  {
    routeNames: [ROUTES.lionsGateVillage.name],
    description: "lions gate loops to klahanie",
    type: "mixed",
    videoIds: [VIDEOS.lionsGateVillageSb.id],
    positions: [
      LIONS_GATE_KLAHANIE,
      [49.32669, -123.12661],
      [49.32651, -123.12594],
      KLAHANIE_W,
    ],
  },
  {
    routeNames: [ROUTES.lionsGateVillage.name],
    description: "klahanie & curling",
    type: "quiet",
    videoIds: [VIDEOS.lionsGateVillageSb.id],
    positions: [
      KLAHANIE_W,
      [49.32645, -123.12564],
      [49.32612, -123.12459],
      [49.32608, -123.1244],
      [49.32607, -123.1242],
      [49.32607, -123.12337],
      [49.32606, -123.12322],
      PATH_S,
    ],
  },
  {
    routeNames: [ROUTES.lionsGateVillage.name],
    description: "curling east",
    type: "quiet",
    positions: [
      PATH_S,
      [49.326, -123.12306],
      [49.32527, -123.12159],
      [49.32519, -123.12144],
    ],
  },
  {
    routeNames: [ROUTES.lionsGateVillage.name],
    description: "path",
    type: "mixed",
    videoIds: [VIDEOS.lionsGateVillageSb.id],
    positions: [PATH_S, [49.32611, -123.12306], [49.32735, -123.12152], PATH_N],
  },
  {
    routeNames: [ROUTES.lionsGateVillage.name],
    description: "fullerton east",
    type: "quiet",
    videoIds: [VIDEOS.lionsGateVillageSb.id],
    videoIdsStartAtEnd: [VIDEOS.lionsGateVillageSb.id],
    positions: [
      PATH_N,
      [49.32703, -123.12065],
      [49.32691, -123.12041],
      [49.3267, -123.11994],
      [49.3266, -123.11973],
    ],
  },
];
