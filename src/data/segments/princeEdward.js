import {
  PRINCE_EDWARD_14TH,
  PRINCE_EDWARD_37TH,
  PRINCE_EDWARD_45TH,
  PRINCE_EDWARD_59TH,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const PRINCE_EDWARD = [
  {
    routeNames: [ROUTES.princeEdward.name],
    description: "primary",
    videos: [VIDEOS.princeEdwardNb.id],
    videosStartAtStart: [VIDEOS.princeEdwardNb.id],
    videosEndAtEnd: [VIDEOS.princeEdwardNb.id],
    positions: [
      PRINCE_EDWARD_59TH,
      [49.21751, -123.09778],
      [49.21837, -123.09775],
      [49.22007, -123.09768],
      [49.22185, -123.09761],
      [49.22266, -123.09759],
      [49.22367, -123.09757],
      [49.22558, -123.09753],
      [49.22748, -123.09747],
      PRINCE_EDWARD_45TH,
      [49.23108, -123.0973],
      [49.23299, -123.09721],
      [49.23443, -123.09716],
      [49.23625, -123.09708],
      PRINCE_EDWARD_37TH,
      [49.23887, -123.09699],
      [49.24043, -123.09692],
      [49.24217, -123.09685],
      [49.24264, -123.09683],
      [49.24279, -123.09693],
      [49.24351, -123.09692],
      [49.24479, -123.09689],
      [49.24566, -123.09687],
      [49.24737, -123.0968],
      [49.24872, -123.09678],
      [49.25021, -123.09673],
      [49.25203, -123.09666],
      [49.25383, -123.09661],
      [49.25563, -123.09653],
      [49.25655, -123.0965],
      [49.25746, -123.09647],
      PRINCE_EDWARD_14TH,
    ],
  },
];
