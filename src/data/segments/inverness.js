import {
  CROMPTON_KENT_N,
  INVERNESS_37TH,
  INVERNESS_43RD,
  INVERNESS_45TH,
  INVERNESS_47TH,
  INVERNESS_59TH,
  INVERNESS_64TH_ALLEY,
  INVERNESS_MARINE,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const INVERNESS = [
  {
    routes: [ROUTES.inverness.name],
    videos: [VIDEOS.invernessSb],
    description: "kent to 45th",
    positions: [
      CROMPTON_KENT_N,
      [49.21102, -123.08071],
      INVERNESS_MARINE,
      INVERNESS_64TH_ALLEY,
      [49.21197, -123.0799],
      [49.21286, -123.07987],
      [49.21328, -123.07988],
      [49.2137, -123.08015],
      [49.21466, -123.08013],
      [49.21551, -123.08011],
      INVERNESS_59TH,
      [49.21813, -123.08006],
      [49.21925, -123.08006],
      [49.21992, -123.08026],
      [49.22047, -123.08025],
      [49.22183, -123.0802],
      [49.22343, -123.08013],
      [49.22533, -123.08006],
      [49.22699, -123.08001],
      INVERNESS_47TH,
    ],
  },
  {
    routes: [ROUTES.inverness.name, ROUTES.fortyFifth.name],
    description: "45th",
    videos: [VIDEOS.invernessSb, VIDEOS.fortyFifthWb],
    positions: [INVERNESS_45TH, INVERNESS_47TH],
  },
  {
    routes: [ROUTES.inverness.name],
    videos: [VIDEOS.invernessSb],
    description: "45th to midtown",
    positions: [
      INVERNESS_45TH,
      INVERNESS_43RD,
      [49.23274, -123.07981],
      [49.23482, -123.07975],
      INVERNESS_37TH,
    ],
  },
];
