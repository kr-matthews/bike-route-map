import {
  NELSON_HAZEL_SW,
  NELSON_SANDERS_E,
  ROYAL_OAK_DEER_LAKE_NW,
  ROYAL_OAK_DOVER_NW,
  ROYAL_OAK_DOVER_SW,
  SUSSEX_GRANGE_SE,
} from "../intersections";
import { ROUTES } from "../routes";
import { ROUTE_VIDEOS } from "../videos/routes";

const NELSON_DOVER_SE = [49.2298, -122.99409];
const MCMURRAY_GRANGE_SW = [49.22983, -122.99661];
const ROYAL_OAK_SANDERS_NW = [49.22801, -122.9891];
const MARLBOROUGH_SANDERS_NE = [49.228, -122.99144];
const ROYAL_OAK_MAITLAND = [49.23102, -122.98895];
const ROYAL_OAK_SIDE_STREET_N = [49.23519, -122.98894];

export const ROYAL_OAK = [
  // ! move to oakland/burris file
  {
    description: "grange lane from sussex",
    type: "dedicated",
    oneWay: "required",
    videoIds: [ROUTE_VIDEOS.oaklandBurrisEb.id],
    positions: [SUSSEX_GRANGE_SE, [49.22984, -122.99729], MCMURRAY_GRANGE_SW],
  },
  {
    description: "grange shared",
    type: "shared",
    oneWay: "required",
    undesignated: true,
    videoIds: [ROUTE_VIDEOS.oaklandBurrisEb.id],
    positions: [
      MCMURRAY_GRANGE_SW,
      [49.2299, -122.9963],
      [49.2299, -122.99552],
      [49.22988, -122.99505],
      [49.22987, -122.99439],
      NELSON_DOVER_SE,
    ],
  },
  {
    description: "dover",
    type: "mixed",
    videoIds: [
      ROUTE_VIDEOS.oaklandBurrisEb.id,
      ROUTE_VIDEOS.oaklandBurrisWb.id,
    ],
    videoIdsEndAtStart: [ROUTE_VIDEOS.oaklandBurrisWb.id],
    positions: [
      NELSON_DOVER_SE,
      [49.22981, -122.99401],
      [49.22981, -122.99178],
      [49.2298, -122.99095],
      [49.2298, -122.98923],
      ROYAL_OAK_DOVER_SW,
    ],
  },
  {
    description: "sanders",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.royalOakSb.id],
    positions: [
      MARLBOROUGH_SANDERS_NE,
      [49.228, -122.99053],
      ROYAL_OAK_SANDERS_NW,
    ],
  },
  {
    description: "sanders to metrotown",
    type: "shared",
    undesignated: true,
    videoIds: [ROUTE_VIDEOS.royalOakSb.id],
    videoIdsEndAtStart: [ROUTE_VIDEOS.royalOakSb.id],
    positions: [
      NELSON_HAZEL_SW,
      NELSON_SANDERS_E,
      [49.22792, -122.99409],
      [49.22792, -122.99147],
      MARLBOROUGH_SANDERS_NE,
    ],
  },
  {
    routeNames: [ROUTES.royalOak.name],
    description: "sanders to oakland/dover",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.royalOakSb.id],
    positions: [
      ROYAL_OAK_SANDERS_NW,
      [49.22806, -122.9891],
      [49.22913, -122.98915],
      [49.22975, -122.98915],
      ROYAL_OAK_DOVER_SW,
    ],
  },
  {
    routeNames: [ROUTES.royalOak.name],
    description: "crossing oakland/dover",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.royalOakSb.id, ROUTE_VIDEOS.oaklandBurrisWb.id],
    positions: [ROYAL_OAK_DOVER_SW, ROYAL_OAK_DOVER_NW],
  },
  {
    routeNames: [ROUTES.royalOak.name],
    description: "oakland/dover to maitland",
    type: "mixed",
    videoIds: [ROUTE_VIDEOS.royalOakSb.id],
    positions: [
      ROYAL_OAK_DOVER_NW,
      [49.23006, -122.98913],
      [49.23026, -122.98909],
      [49.23039, -122.98903],
      [49.2305, -122.98901],
      [49.23079, -122.98897],
      ROYAL_OAK_MAITLAND,
    ],
  },
  {
    routeNames: [ROUTES.royalOak.name],
    description: "maitland to trail",
    type: "quiet",
    videoIds: [ROUTE_VIDEOS.royalOakSb.id],
    positions: [
      ROYAL_OAK_MAITLAND,
      [49.23145, -122.98892],
      [49.23296, -122.98892],
      [49.23442, -122.98893],
      ROYAL_OAK_SIDE_STREET_N,
    ],
  },
  {
    routeNames: [ROUTES.royalOak.name],
    description: "trail north end",
    type: "comfortable",
    videoIds: [ROUTE_VIDEOS.royalOakSb.id],
    videoIdsStartAtEnd: [ROUTE_VIDEOS.royalOakSb.id],
    positions: [
      ROYAL_OAK_SIDE_STREET_N,
      [49.23556, -122.98894],
      [49.23626, -122.98891],
      [49.23654, -122.98894],
      [49.23798, -122.98901],
      [49.23847, -122.98916],
      [49.23882, -122.98922],
      [49.23961, -122.98928],
      [49.23968, -122.98933],
      [49.23969, -122.98929],
      [49.23977, -122.98919],
      ROYAL_OAK_DEER_LAKE_NW,
    ],
  },
];
