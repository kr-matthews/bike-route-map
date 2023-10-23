import { GLADSTONE_38TH, GLADSTONE_BC_PARKWAY } from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const GLADSTONE = [
  {
    routeNames: [ROUTES.gladstone.name],
    description: "primary",
    videos: [VIDEOS.gladstoneNb],
    positions: [
      GLADSTONE_38TH,
      [49.23747, -123.06208],
      [49.23893, -123.06207],
      [49.23893, -123.0629],
      [49.23979, -123.06288],
      [49.24149, -123.06283],
      [49.24272, -123.06278],
      [49.24282, -123.06265],
      [49.24356, -123.06182],
      [49.24473, -123.0605],
      [49.2449, -123.06044],
      [49.24669, -123.06042],
      [49.24679, -123.06055],
      [49.24812, -123.0605],
      [49.24886, -123.06048],
      [49.24995, -123.06044],
      [49.25002, -123.06035],
      [49.24996, -123.06022],
      [49.24995, -123.06008],
      [49.24989, -123.05994],
      GLADSTONE_BC_PARKWAY,
    ],
  },
];
