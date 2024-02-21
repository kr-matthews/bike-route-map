import { NELSON_BC_PARKWAY_W, NELSON_BENNETT_SW } from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const NELSON_AVE = [
  {
    routeNames: [ROUTES.nelsonAve.name],
    description: "all",
    type: "mixed",
    videoIds: [VIDEOS.nelsonPathSb.id],
    videoIdsEndAtStart: [VIDEOS.nelsonPathSb.id],
    positions: [
      NELSON_BC_PARKWAY_W,
      [49.2218, -122.99428],
      [49.22187, -122.99431],
      [49.22203, -122.99431],
      [49.22206, -122.99434],
      [49.22218, -122.99434],
      [49.22223, -122.99439],
      [49.22229, -122.99439],
      [49.22232, -122.99444],
      [49.22254, -122.99444],
      [49.22285, -122.99452],
      [49.22305, -122.99437],
      [49.22307, -122.99438],
      [49.22313, -122.9945],
      [49.22315, -122.99451],
      [49.22319, -122.99449],
      [49.22325, -122.99442],
      [49.22396, -122.99442],
      [49.22454, -122.99442],
      [49.2251, -122.99441],
      NELSON_BENNETT_SW,
    ],
  },
];
