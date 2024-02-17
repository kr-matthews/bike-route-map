import {
  BORDEN_59TH,
  DUMFRIES_28TH,
  DUMFRIES_37TH,
  DUMFRIES_47TH,
  WOODLAND_14TH,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const FLEMING_57TH_S = [49.21806, -123.07403];
const WOODLAND_15TH_E = [49.25653, -123.07395];
const WOODLAND_CLARK_PARK = [49.2574, -123.07379];

export const DUMFRIES = [
  {
    routeNames: [ROUTES.dumfries.name],
    description: "alleys: 59th to 57th",
    type: "mixed",
    videos: [VIDEOS.dumfriesNb.id],
    positions: [BORDEN_59TH, [49.21725, -123.07405], FLEMING_57TH_S],
  },
  {
    routeNames: [ROUTES.dumfries.name],
    description: "57th to clark park",
    type: "quiet",
    videos: [VIDEOS.dumfriesNb.id],
    positions: [
      FLEMING_57TH_S,
      [49.21829, -123.07398],
      [49.21955, -123.07398],
      [49.21957, -123.07475],
      [49.22039, -123.07473],
      [49.22176, -123.07468],
      [49.22336, -123.07461],
      [49.22526, -123.07454],
      DUMFRIES_47TH,
      [49.22897, -123.07439],
      [49.2306, -123.07434],
      [49.2327, -123.07427],
      [49.23476, -123.07421],
      DUMFRIES_37TH,
      [49.23849, -123.07408],
      [49.24022, -123.07403],
      [49.24022, -123.07376],
      [49.24033, -123.07364],
      [49.24164, -123.07361],
      [49.24299, -123.07356],
      [49.24362, -123.07354],
      DUMFRIES_28TH,
      [49.2464, -123.07345],
      [49.24785, -123.07339],
      [49.24847, -123.07336],
      [49.24911, -123.07335],
      [49.25039, -123.07331],
      [49.25165, -123.07328],
      [49.25163, -123.07199],
      [49.25253, -123.07197],
      [49.25255, -123.07298],
      [49.25345, -123.07294],
      [49.25434, -123.07292],
      [49.25648, -123.07282],
      WOODLAND_15TH_E,
    ],
  },
  {
    routeNames: [ROUTES.dumfries.name],
    description: "clark park",
    type: "dedicated",
    videos: [VIDEOS.dumfriesNb.id],
    positions: [
      WOODLAND_15TH_E,
      [49.25735, -123.07392],
      [49.25738, -123.07389],
      WOODLAND_CLARK_PARK,
    ],
  },
  {
    routeNames: [ROUTES.dumfries.name],
    description: "woodland in clark park",
    type: "quiet",
    videos: [VIDEOS.dumfriesNb.id],
    videosEndAtEnd: [VIDEOS.dumfriesNb.id],
    positions: [
      WOODLAND_CLARK_PARK,
      [49.25743, -123.07378],
      [49.25748, -123.07374],
      WOODLAND_14TH,
    ],
  },
];
