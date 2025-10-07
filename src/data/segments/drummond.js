import { BAYVIEW_DRUMMOND, VELODROME_BARNET_S } from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const GRAVEL_PAVED = [49.28958, -122.94594];
const E_END = [49.28991, -122.94195];

export const DRUMMOND = [
  {
    routeNames: [ROUTES.drummond.name],
    description: "gravel part",
    type: "other",
    videoIds: [ROUTE_VIDEOS.drummondEb.id, ROUTE_VIDEOS.drummondWb.id],
    videoIdsStartAtStart: [ROUTE_VIDEOS.drummondEb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.drummondWb.id],
    positions: [
      BAYVIEW_DRUMMOND,
      [49.28702, -122.95375],
      [49.28707, -122.95345],
      [49.28718, -122.95324],
      [49.28735, -122.95306],
      [49.28748, -122.95275],
      [49.28765, -122.95255],
      [49.28775, -122.9522],
      [49.28826, -122.95146],
      [49.28845, -122.95093],
      [49.28882, -122.94989],
      [49.28894, -122.94923],
      [49.28909, -122.94886],
      [49.28912, -122.94862],
      [49.28904, -122.9473],
      [49.28908, -122.94728],
      [49.28924, -122.94745],
      [49.28928, -122.94744],
      [49.28934, -122.94739],
      [49.28938, -122.94728],
      [49.2894, -122.94696],
      GRAVEL_PAVED,
    ],
  },
  {
    routeNames: [ROUTES.drummond.name],
    description: "paved part",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.drummondWb.id, ROUTE_VIDEOS.drummondEb.id],
    videoIdsEndAtEnd: [ROUTE_VIDEOS.drummondEb.id],
    positions: [
      GRAVEL_PAVED,
      [49.28959, -122.9457],
      [49.28956, -122.94526],
      [49.28964, -122.94436],
      [49.28974, -122.94403],
      [49.28976, -122.94381],
      [49.28978, -122.94301],
      [49.28986, -122.94233],
      [49.28993, -122.9421],
      E_END,
    ],
  },
  {
    routeNames: [ROUTES.drummond.name],
    description: "car part",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.drummondWb.id],
    videoIdsStartAtEnd: [ROUTE_VIDEOS.drummondWb.id],
    positions: [
      E_END,
      [49.28995, -122.94184],
      [49.28995, -122.94177],
      [49.28994, -122.94165],
      [49.28999, -122.94154],
      [49.28999, -122.94143],
      [49.28996, -122.9413],
      [49.2899, -122.94118],
      // missing the _N intersection
      VELODROME_BARNET_S,
    ],
  },
];
