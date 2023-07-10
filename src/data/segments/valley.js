import {
  TRAFALGAR_10TH,
  TRAFALGAR_3RD,
  VALLEY_33RD,
  VALLEY_EDDINGTON,
  YEW_EDDINGTON,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

// TODO: add connection to ag & cypress

export const VALLEY = [
  {
    routes: [ROUTES.valley.name],
    description: "north of 29th",
    videos: [VIDEOS.valleySb],
    positions: [
      VALLEY_33RD,
      [49.24246, -123.1498],
      [49.24314, -123.15034],
      [49.24367, -123.15082],
      [49.24392, -123.15115],
      [49.24476, -123.15237],
      [49.24498, -123.15272],
      [49.2452, -123.15333],
      [49.24571, -123.15479],
      YEW_EDDINGTON,
    ],
  },
  // TODO: move to 29th file
  {
    routes: [ROUTES.twentyNinth.name, ROUTES.valley.name],
    description: "all",
    videos: [VIDEOS.valleySb],
    positions: [
      YEW_EDDINGTON,
      [49.24698, -123.15558],
      [49.24697, -123.15606],
      [49.24692, -123.15645],
      VALLEY_EDDINGTON,
    ],
  },
  {
    routes: [ROUTES.valley.name],
    description: "all",
    videos: [VIDEOS.valleySb],
    positions: [
      VALLEY_EDDINGTON,
      [49.24718, -123.15741],
      [49.24805, -123.15805],
      [49.24887, -123.15864],
      [49.24979, -123.15929],
      [49.25069, -123.15993],
      [49.25182, -123.16073],
      [49.25274, -123.16141],
      [49.25364, -123.16206],
      [49.25454, -123.16272],
      [49.25549, -123.16346],
      [49.2564, -123.16415],
      [49.25708, -123.16463],
      [49.25717, -123.16477],
      [49.25725, -123.165],
      [49.25754, -123.16492],
      [49.25769, -123.16491],
      [49.25861, -123.16487],
      [49.25934, -123.16485],
      [49.25952, -123.16485],
      [49.26042, -123.1648],
      [49.2612, -123.16477],
      [49.26221, -123.16473],
      TRAFALGAR_10TH,
      [49.26403, -123.16468],
      [49.26492, -123.16464],
      [49.26576, -123.16461],
      [49.2666, -123.16457],
      [49.26746, -123.16455],
      [49.26833, -123.16454],
      TRAFALGAR_3RD,
      [49.2701, -123.16447],
      [49.27098, -123.16443],
      [49.27188, -123.1644],
      [49.27274, -123.16437],
      [49.27298, -123.16437],
    ],
  },
];