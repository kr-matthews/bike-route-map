import {
  BUTE_BURNABY,
  BUTE_COMOX,
  BUTE_HARO,
  BUTE_NELSON,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const BUTE_ROBSON = [49.286, -123.12698];

export const BUTE = [
  {
    routeNames: [ROUTES.bute.name],
    description: "primary",
    type: "quiet",
    videos: [VIDEOS.buteSb.id],
    videosStartAtEnd: [VIDEOS.buteSb.id],
    videosEndAtStart: [VIDEOS.buteSb.id],
    positions: [
      BUTE_BURNABY,
      [49.28179, -123.13337],
      [49.2825, -123.13232],
      BUTE_COMOX,
      [49.28391, -123.13018],
      BUTE_NELSON,
      [49.28461, -123.12911],
      BUTE_HARO,
      BUTE_ROBSON,
    ],
  },
];
