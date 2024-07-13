import {
  RAILWAY_GREENWAY_WOODWARDS,
  RAILWAY_WOODWARDS_E,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const RAILWAY_WOODWARDS_EE = [49.14392, -123.16969];
const NO_3_ALLEY_SAUNDERS = [49.14369, -123.1375];
const NO_3_SAUNDERS_E = [49.14361, -123.13655];

export const WOODWARDS_SAUNDERS = [
  {
    description: "connection railway to woodwards",
    type: "other",
    videoIds: [VIDEOS.woodwardsSaundersEb.id],
    videoIdsStartAtStart: [VIDEOS.woodwardsSaundersEb.id],
    positions: [
      RAILWAY_GREENWAY_WOODWARDS,
      [49.14399, -123.16971],
      RAILWAY_WOODWARDS_EE,
    ],
  },
  {
    routeNames: [ROUTES.woodwardsSaunders.name],
    description: "connecting with railway nb",
    type: "quiet",
    positions: [RAILWAY_WOODWARDS_E, RAILWAY_WOODWARDS_EE],
  },
  {
    routeNames: [ROUTES.woodwardsSaunders.name],
    description: "railway to no. 3-ish",
    type: "quiet",
    videoIds: [VIDEOS.woodwardsSaundersEb.id],
    positions: [
      RAILWAY_WOODWARDS_EE,
      [49.14391, -123.16758],
      [49.14391, -123.16241],
      [49.14389, -123.15917],
      [49.14392, -123.15875],
      [49.14389, -123.15405],
      [49.14385, -123.14803],
      [49.14382, -123.14766],
      [49.14423, -123.14766],
      [49.14464, -123.14767],
      [49.14462, -123.13804],
      [49.14464, -123.13796],
      [49.14485, -123.13764],
      [49.14464, -123.13746],
      NO_3_ALLEY_SAUNDERS,
    ],
  },
  {
    routeNames: [ROUTES.woodwardsSaunders.name],
    description: "no. 3 sidewalk connection",
    type: "other",
    videoIds: [VIDEOS.woodwardsSaundersEb.id],
    positions: [
      NO_3_ALLEY_SAUNDERS,
      [49.14367, -123.13682],
      [49.1437, -123.1368],
      [49.1437, -123.13659],
      NO_3_SAUNDERS_E,
    ],
  },
  {
    routeNames: [ROUTES.woodwardsSaunders.name],
    description: "saunders",
    type: "quiet",
    videoIds: [VIDEOS.woodwardsSaundersEb.id],
    videoIdsEndAtEnd: [VIDEOS.woodwardsSaundersEb.id],
    positions: [
      NO_3_SAUNDERS_E,
      [49.14358, -123.12908],
      [49.14358, -123.12536],
      [49.14358, -123.12513],
      [49.14356, -123.12476],
      [49.14351, -123.12454],
      [49.14342, -123.12428],
      [49.14326, -123.12391],
      [49.14324, -123.1238],
      [49.14321, -123.12358],
      [49.14319, -123.12252],
      [49.14317, -123.11978],
      [49.1431, -123.11427],
    ],
  },
];
