import { CHESTNUT_YORK, STEPHENS_YORK } from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

// !!! video includes chestnut to 1st

export const YORK = [
  {
    routes: [ROUTES.york.name],
    description: "primary",
    videos: [VIDEOS.yorkEb],
    positions: [
      STEPHENS_YORK,
      [49.27189, -123.1645],
      [49.27185, -123.16433],
      [49.27182, -123.16211],
      [49.27178, -123.15976],
      [49.27174, -123.15738],
      [49.2717, -123.15501],
      [49.27166, -123.15265],
      [49.27162, -123.15028],
      [49.2716, -123.15019],
      [49.27156, -123.14787],
      [49.27156, -123.14779],
      CHESTNUT_YORK,
    ],
  },
];