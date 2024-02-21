import {
  BALACLAVA_3RD,
  HIGHBURY_3RD,
  STEPHENS_3RD,
  STEPHENS_POINT_GREY,
  STEPHENS_YORK,
  THIRD_SEASIDE,
  TRAFALGAR_3RD,
  WALLACE_3RD,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const BEACH_2ND = [49.27012, -123.19206];

export const THIRD = [
  {
    description: "connection with valley",
    type: "quiet",
    positions: [STEPHENS_3RD, TRAFALGAR_3RD],
  },
  {
    description: "connection with seaside",
    type: "dedicated",
    videoIds: [VIDEOS.yorkEb.id],
    videoIdsStartAtEnd: [VIDEOS.yorkEb.id],
    positions: [STEPHENS_YORK, STEPHENS_POINT_GREY],
  },
  {
    routeNames: [ROUTES.third.name],
    description: "beach to 2nd",
    type: "mixed",
    videoIds: [VIDEOS.thirdEb.id],
    videoIdsStartAtStart: [VIDEOS.thirdEb.id],
    positions: [
      THIRD_SEASIDE,
      [49.2716, -123.19324],
      [49.2715, -123.19314],
      [49.27145, -123.19303],
      [49.27113, -123.19255],
      [49.27082, -123.19215],
      [49.27071, -123.19209],
      [49.27019, -123.19208],
      BEACH_2ND,
    ],
  },
  {
    routeNames: [ROUTES.third.name],
    description: "2nd to bypass",
    type: "quiet",
    videoIds: [VIDEOS.thirdEb.id],
    positions: [BEACH_2ND, [49.27011, -123.19061], WALLACE_3RD],
  },
  {
    routeNames: [ROUTES.third.name, ROUTES.seasideBypass.name],
    description: "primary",
    type: "quiet",
    videoIds: [VIDEOS.thirdEb.id],
    videoIdsEndAtEnd: [VIDEOS.thirdEb.id],
    positions: [
      WALLACE_3RD,
      HIGHBURY_3RD,
      [49.26952, -123.18569],
      [49.26949, -123.1836],
      [49.26946, -123.18168],
      [49.26943, -123.17967],
      [49.2694, -123.17767],
      [49.26936, -123.17575],
      BALACLAVA_3RD,
      [49.2693, -123.17106],
      [49.26926, -123.1683],
      STEPHENS_3RD,
      [49.27013, -123.16631],
      [49.27101, -123.16626],
      [49.27186, -123.16623],
      STEPHENS_YORK,
    ],
  },
];
