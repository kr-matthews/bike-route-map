import {
  BALACLAVA_3RD,
  HIGHBURY_3RD,
  STEPHENS_3RD,
  STEPHENS_POINT_GREY,
  STEPHENS_YORK,
  THIRD_SEASIDE,
  TRAFALGAR_3RD,
  WALLACE_3RD,
  WALLACE_4TH_S,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const THIRD = [
  {
    description: "connection with 4th",
    positions: [WALLACE_3RD, WALLACE_4TH_S],
  },
  {
    description: "connection with valley",
    positions: [STEPHENS_3RD, TRAFALGAR_3RD],
  },
  {
    description: "connection with seaside",
    videos: [VIDEOS.yorkEb],
    positions: [STEPHENS_YORK, STEPHENS_POINT_GREY],
  },
  {
    routes: [ROUTES.third.name],
    description: "primary",
    videos: [VIDEOS.thirdEb],
    positions: [
      THIRD_SEASIDE,
      [49.27161, -123.19324],
      [49.27152, -123.19314],
      [49.27148, -123.19303],
      [49.27113, -123.19255],
      [49.27082, -123.19215],
      [49.27071, -123.19208],
      [49.27012, -123.19205],
      [49.27011, -123.19061],
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
