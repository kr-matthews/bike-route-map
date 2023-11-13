import {
  DEER_LAKE_GILPIN_SW,
  DEER_LAKE_GILPIN_W,
  GARDEN_GROVE_DEER_LAKE,
  WILLINGDON_DEER_LAKE,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const DEER_LAKE_PARKWAY = [
  {
    routeNames: [ROUTES.deerLakeParkway.name, ROUTES.midtown.name],
    description: "midtown overlap",
    videos: [VIDEOS.deerLakePkwyEb, VIDEOS.midtownBurnabyWb],
    videosStartAtStart: [VIDEOS.deerLakePkwyEb],
    positions: [
      WILLINGDON_DEER_LAKE,
      [49.24301, -123.00232],
      [49.24279, -123.00155],
      [49.24203, -122.99974],
      [49.24186, -122.9991],
      [49.24177, -122.99822],
      [49.24172, -122.99797],
      GARDEN_GROVE_DEER_LAKE,
    ],
  },
  {
    routeNames: [ROUTES.deerLakeParkway.name],
    description: "east of garden grove",
    videos: [VIDEOS.deerLakePkwyEb],
    positions: [
      GARDEN_GROVE_DEER_LAKE,
      [49.2414, -122.99418],
      [49.24132, -122.9936],
      [49.24122, -122.99318],
      [49.24104, -122.99269],
      [49.2408, -122.99217],
      [49.24049, -122.99152],
      [49.24018, -122.99081],
      [49.2401, -122.99047],
      [49.24002, -122.98995],
      [49.24003, -122.9895],
      [49.24006, -122.98932],
      [49.23998, -122.9892],
      [49.23998, -122.98888],
      [49.24008, -122.9887],
      [49.24003, -122.98846],
      [49.24003, -122.9868],
      [49.23999, -122.98605],
      [49.24006, -122.98532],
      [49.24005, -122.98348],
      [49.24, -122.98298],
      [49.23988, -122.98217],
      [49.23985, -122.98174],
      [49.23985, -122.98114],
      [49.2399, -122.98062],
      [49.23991, -122.98005],
      [49.23991, -122.97896],
      [49.23996, -122.97856],
      [49.24005, -122.97793],
      [49.24012, -122.97765],
      [49.24023, -122.97729],
      [49.24045, -122.97685],
      [49.2406, -122.97665],
      [49.24083, -122.9764],
      [49.24113, -122.9762],
      [49.2414, -122.97606],
      DEER_LAKE_GILPIN_SW,
    ],
  },
  {
    routeNames: [ROUTES.deerLakeParkway.name, ROUTES.midtown.name],
    description: "crossing gilpin",
    videos: [VIDEOS.deerLakePkwyEb, VIDEOS.midtownBurnabyWb],
    positions: [DEER_LAKE_GILPIN_W, DEER_LAKE_GILPIN_SW],
  },
  {
    routeNames: [ROUTES.deerLakeParkway.name],
    description: "north of gilpin",
    videos: [VIDEOS.deerLakePkwyEb],
    videosEndAtEnd: [VIDEOS.deerLakePkwyEb],
    positions: [
      DEER_LAKE_GILPIN_W,
      [49.242, -122.97571],
      [49.24232, -122.97544],
      [49.24253, -122.97517],
      [49.24276, -122.97483],
      [49.24295, -122.97454],
      [49.2431, -122.97443],
      [49.24332, -122.97434],
      [49.24368, -122.97435],
    ],
  },
];
