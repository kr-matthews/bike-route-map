import {
  DUMFRIES_28TH,
  ONTARIO_30TH,
  PRINCE_EDWARD_31ST,
  WINDSOR_29TH,
  WINDSOR_31ST,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const HILLCREST = [
  {
    routeNames: [ROUTES.hillcrest.name],
    description: "west of windsor",
    videos: [VIDEOS.hillcrestEb, VIDEOS.hillcrestWb],
    videosStartAtStart: [VIDEOS.hillcrestEb],
    videosEndAtStart: [VIDEOS.hillcrestWb],
    positions: [
      ONTARIO_30TH,
      [49.24333, -123.10392],
      [49.24331, -123.10265],
      [49.24329, -123.10135],
      [49.24327, -123.09994],
      [49.24324, -123.09872],
      [49.24323, -123.09749],
      [49.24281, -123.09751],
      [49.24274, -123.0974],
      PRINCE_EDWARD_31ST,
      [49.24266, -123.09422],
      [49.24256, -123.09031],
      [49.24254, -123.0879],
      [49.24253, -123.08596],
      WINDSOR_31ST,
    ],
  },
  {
    routeNames: [ROUTES.hillcrest.name],
    description: "east of windsor",
    videos: [VIDEOS.hillcrestEb, VIDEOS.hillcrestWb],
    videosEndAtEnd: [VIDEOS.hillcrestEb],
    videosStartAtEnd: [VIDEOS.hillcrestWb],
    positions: [
      WINDSOR_29TH,
      [49.2446, -123.08134],
      [49.2446, -123.08015],
      [49.24458, -123.07823],
      [49.24457, -123.07627],
      [49.24455, -123.07451],
      [49.2454, -123.07447],
      DUMFRIES_28TH,
    ],
  },
];
