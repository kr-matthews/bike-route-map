import {
  BALACLAVA_37TH,
  CARIBOO_29TH,
  EARLES_38TH,
  EARLES_VANNESS,
  INVERNESS_37TH,
  KINGSWAY_EARLES,
  NANAIMO_38TH,
  YEW_37TH,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

// !!! revisit and adjust

export const MIDTOWN = [
  {
    routes: [ROUTES.midtown.name],
    legs: ["Vancouver"],
    description: "west of ridgeway",
    videos: [VIDEOS.midtownVancouverEb],
    positions: [
      [49.2351, -123.19704],
      [49.2354, -123.19686],
      [49.23555, -123.19682],
      [49.23649, -123.19685],
      [49.23648, -123.19372],
      [49.23645, -123.19231],
      [49.23646, -123.19095],
      [49.23645, -123.18961],
      [49.23644, -123.18825],
      [49.23644, -123.1853],
      [49.23644, -123.18202],
      [49.23692, -123.18203],
      [49.23778, -123.18203],
      [49.23855, -123.182],
      [49.23856, -123.17869],
      BALACLAVA_37TH,
    ],
  },
  {
    routes: [ROUTES.midtown.name, ROUTES.ridgeway.name],
    legs: ["Vancouver"],
    description: "west ridgeway overlap",
    videos: [VIDEOS.midtownVancouverEb],
    positions: [
      BALACLAVA_37TH,
      [49.23853, -123.17302],
      [49.2385, -123.16806],
      [49.23847, -123.16575],
      [49.23843, -123.16398],
      [49.23841, -123.16261],
      [49.23837, -123.15977],
      YEW_37TH,
    ],
  },
  {
    routes: [ROUTES.midtown.name, ROUTES.ridgeway.name],
    legs: ["Vancouver"],
    description: "east ridgeway overlap",
    videos: [VIDEOS.midtownVancouverEb],
    positions: [
      YEW_37TH,
      [49.2383, -123.15526],
      [49.23826, -123.15191],
      [49.23824, -123.15045],
      [49.23818, -123.14902],
      [49.23817, -123.14665],
      [49.2381, -123.14205],
      [49.23806, -123.13947],
      [49.23789, -123.13469],
      [49.23774, -123.1302],
      [49.23768, -123.12869],
      [49.23767, -123.12795],
      [49.23752, -123.12372],
      [49.23742, -123.12074],
      [49.23738, -123.11925],
      [49.23731, -123.11775],
      [49.23723, -123.11589],
      [49.23698, -123.11266],
      [49.23711, -123.11124],
      [49.23724, -123.10988],
      [49.23727, -123.10921],
      [49.23738, -123.10828],
      [49.23733, -123.10547],
      [49.23724, -123.10166],
      [49.23716, -123.09704],
      [49.23709, -123.09403],
      [49.2371, -123.09384],
      [49.23711, -123.0937],
      [49.23708, -123.0936],
      [49.23704, -123.09055],
      [49.23655, -123.09057],
      [49.23654, -123.08922],
      [49.23651, -123.08805],
      [49.2365, -123.08581],
      [49.23647, -123.08472],
      [49.23644, -123.08303],
      [49.23646, -123.08249],
      [49.23644, -123.08233],
      [49.2365, -123.08218],
      [49.23649, -123.08195],
      [49.23645, -123.08186],
      [49.23643, -123.08038],
      [49.23643, -123.08023],
      INVERNESS_37TH,
      [49.23645, -123.07956],
      [49.2365, -123.07929],
      [49.23649, -123.07909],
      [49.23685, -123.07909],
      [49.23683, -123.07693],
      [49.2368, -123.07414],
      [49.23681, -123.07277],
      [49.23673, -123.07],
      [49.23668, -123.0686],
      [49.23634, -123.06862],
      [49.23632, -123.06823],
      [49.23627, -123.0682],
      [49.23625, -123.06811],
      [49.23622, -123.0659],
      [49.23618, -123.06584],
      [49.23596, -123.06569],
      [49.23595, -123.06564],
      [49.23594, -123.06551],
      [49.23592, -123.06209],
      NANAIMO_38TH,
    ],
  },
  {
    routes: [ROUTES.midtown.name],
    legs: ["Vancouver"],
    description: "ridgeway to earles",
    videos: [VIDEOS.midtownVancouverEb],
    positions: [
      NANAIMO_38TH,
      [49.23588, -123.05546],
      [49.23587, -123.05422],
      [49.23587, -123.053],
      [49.23586, -123.05169],
      EARLES_38TH,
    ],
  },
  {
    routes: [ROUTES.sunrise.name, ROUTES.midtown.name],
    legs: [undefined, "Vancouver"],
    description: "earles to kingsway",
    videos: [VIDEOS.midtownVancouverEb],
    positions: [EARLES_38TH, KINGSWAY_EARLES],
  },
  {
    routes: [ROUTES.midtown.name, ROUTES.sunrise.name],
    legs: [undefined, "Vancouver"],
    description: "earles & 29th",
    type: "uncomfortable",
    videos: [VIDEOS.midtownVancouverEb],
    positions: [
      KINGSWAY_EARLES,
      [49.23977, -123.04681],
      [49.2412, -123.04542],
      EARLES_VANNESS,
    ],
  },
  {
    routes: [ROUTES.midtown.name],
    legs: ["Vancouver"],
    description: "earles & 29th",
    type: "uncomfortable",
    videos: [VIDEOS.midtownVancouverEb],
    positions: [
      EARLES_VANNESS,
      [49.24456, -123.0422],
      [49.24453, -123.03663],
      [49.24451, -123.03404],
      CARIBOO_29TH,
    ],
  },
  {
    routes: [ROUTES.midtown.name],
    legs: ["Vancouver"],
    description: "east portion",
    videos: [VIDEOS.midtownVancouverEb],
    positions: [
      CARIBOO_29TH,
      [49.24433, -123.02748],
      [49.24375, -123.02802],
      [49.24342, -123.02725],
      [49.24332, -123.02693],
      [49.24261, -123.0251],
      [49.24259, -123.02493],
      [49.24257, -123.02383],
      [49.24311, -123.02383],
      [49.24312, -123.02366],
    ],
  },
  {
    routes: [ROUTES.midtown.name],
    legs: ["Burnaby"],
    description: "primary",
    videos: [],
    positions: [
      // !! burnaby segments
      [49.24312, -123.02366],
      [49.24312, -123.02349],
    ],
  },
];
