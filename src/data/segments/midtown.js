import {
  ANGUS_37TH,
  ARBUTUS_GREENWAY_37TH,
  BALACLAVA_37TH,
  BOUNDARY_MOSCROP,
  CAMBIE_37TH_E,
  CAMOSUN_MARINE_N,
  CARIBOO_29TH,
  CARLETON_MOSCROP,
  CARNARVON_37TH,
  DEER_LAKE_GILPIN_SW,
  DEER_LAKE_GILPIN_W,
  DUMFRIES_37TH,
  DUNBAR_39TH,
  EARLES_38TH,
  EARLES_VANNESS,
  GARDEN_GROVE_DEER_LAKE,
  GLADSTONE_38TH,
  HEATHER_37TH,
  INVERNESS_37TH,
  KINGSWAY_EARLES,
  MARINE_41ST_NW,
  CAMOSUN_MARINE_S,
  NANAIMO_38TH,
  ONTARIO_37TH,
  PATTERSON_MOSCROP,
  PRINCE_EDWARD_37TH,
  WILLINGDON_DEER_LAKE,
  WILLOW_37TH,
  WINDSOR_37TH,
  YEW_37TH,
  MARINE_41ST_SW,
  WALES_38TH,
  RUPERT_29TH_E,
  RUPERT_29TH_W,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const MIDTOWN = [
  {
    description: "crossing marine sb",
    oneWay: "required",
    positions: [CAMOSUN_MARINE_N, CAMOSUN_MARINE_S],
  },
  {
    description: "crossing marine nb",
    oneWay: "recommended",
    videos: [VIDEOS.midtownVancouverEb],
    positions: [MARINE_41ST_SW, MARINE_41ST_NW],
  },
  {
    routeNames: [ROUTES.midtown.name],
    legs: ["Vancouver"],
    description: "west of ridgeway",
    videos: [VIDEOS.midtownVancouverEb],
    positions: [
      CAMOSUN_MARINE_N,
      [49.2354, -123.19688],
      [49.23555, -123.19683],
      [49.23647, -123.19685],
      [49.23647, -123.19372],
      [49.23646, -123.19231],
      [49.23646, -123.19095],
      [49.23646, -123.18961],
      [49.23645, -123.18825],
      DUNBAR_39TH,
      [49.23642, -123.18201],
      [49.23692, -123.18202],
      [49.23778, -123.18202],
      [49.23857, -123.18201],
      [49.23856, -123.17869],
      BALACLAVA_37TH,
    ],
  },
  {
    routeNames: [ROUTES.midtown.name, ROUTES.ridgeway.name],
    legs: ["Vancouver"],
    description: "west ridgeway overlap",
    videos: [VIDEOS.midtownVancouverEb],
    positions: [
      BALACLAVA_37TH,
      CARNARVON_37TH,
      [49.23851, -123.16806],
      [49.23851, -123.16605],
      [49.23847, -123.16575],
      [49.23844, -123.16398],
      [49.23841, -123.16261],
      [49.23837, -123.15977],
      YEW_37TH,
    ],
  },
  {
    routeNames: [ROUTES.midtown.name, ROUTES.ridgeway.name],
    legs: ["Vancouver"],
    description: "yew to willow",
    videos: [VIDEOS.midtownVancouverEb],
    positions: [
      YEW_37TH,
      ARBUTUS_GREENWAY_37TH,
      [49.23824, -123.15191],
      [49.23822, -123.15045],
      [49.2382, -123.14902],
      ANGUS_37TH,
      [49.2381, -123.14205],
      [49.23806, -123.13947],
      [49.23789, -123.13469],
      [49.23774, -123.1302],
      [49.23769, -123.12869],
      [49.23766, -123.12795],
      WILLOW_37TH,
    ],
  },
  {
    routeNames: [
      ROUTES.midtown.name,
      ROUTES.ridgeway.name,
      ROUTES.heather.name,
    ],
    legs: ["Vancouver"],
    description: "heather overlap",
    videos: [VIDEOS.midtownVancouverEb, VIDEOS.heatherSb],
    positions: [WILLOW_37TH, HEATHER_37TH],
  },
  {
    routeNames: [ROUTES.midtown.name, ROUTES.ridgeway.name],
    legs: ["Vancouver"],
    description: "heather to nanaimo",
    videos: [VIDEOS.midtownVancouverEb],
    positions: [
      HEATHER_37TH,
      [49.23736, -123.11925],
      [49.23731, -123.11775],
      CAMBIE_37TH_E,
      [49.23699, -123.11275],
      [49.23711, -123.11124],
      [49.23723, -123.10998],
      [49.23728, -123.10921],
      [49.23738, -123.10812],
      ONTARIO_37TH,
      [49.23724, -123.10166],
      PRINCE_EDWARD_37TH,
      [49.23709, -123.09403],
      [49.2371, -123.09384],
      [49.23711, -123.0937],
      [49.23708, -123.0936],
      [49.23704, -123.09055],
      [49.23655, -123.09057],
      [49.23654, -123.08922],
      [49.23652, -123.08822],
      [49.23654, -123.08795],
      [49.23652, -123.08531],
      WINDSOR_37TH,
      [49.23647, -123.08303],
      [49.23646, -123.08249],
      [49.23645, -123.08233],
      [49.2365, -123.08218],
      [49.23649, -123.08195],
      [49.23646, -123.08186],
      [49.23644, -123.08038],
      [49.23644, -123.08023],
      INVERNESS_37TH,
      [49.23645, -123.07956],
      [49.2365, -123.07929],
      [49.23649, -123.07912],
      [49.23689, -123.07911],
      [49.23686, -123.07693],
      DUMFRIES_37TH,
      [49.2368, -123.07277],
      [49.23674, -123.07],
      [49.23671, -123.06862],
      [49.23632, -123.06864],
      [49.23632, -123.06823],
      [49.23627, -123.0682],
      [49.23625, -123.06811],
      [49.23622, -123.0659],
      [49.23618, -123.06584],
      [49.23596, -123.06569],
      [49.23595, -123.06564],
      [49.23594, -123.06551],
      GLADSTONE_38TH,
      NANAIMO_38TH,
    ],
  },
  {
    routeNames: [ROUTES.midtown.name],
    legs: ["Vancouver"],
    description: "ridgeway to earles",
    videos: [VIDEOS.midtownVancouverEb],
    positions: [
      NANAIMO_38TH,
      [49.23588, -123.05546],
      [49.23587, -123.05422],
      [49.23587, -123.053],
      WALES_38TH,
      EARLES_38TH,
    ],
  },
  {
    routeNames: [ROUTES.midtown.name, ROUTES.sunrise.name],
    legs: [undefined, "Vancouver"],
    description: "earles",
    type: "uncomfortable",
    videos: [VIDEOS.midtownVancouverEb, VIDEOS.sunriseNb],
    positions: [
      KINGSWAY_EARLES,
      [49.23977, -123.04681],
      [49.2412, -123.04542],
      EARLES_VANNESS,
    ],
  },
  {
    routeNames: [ROUTES.midtown.name],
    legs: ["Vancouver"],
    description: "29th",
    type: "uncomfortable",
    videos: [VIDEOS.midtownVancouverEb],
    positions: [
      EARLES_VANNESS,
      [49.24456, -123.0422],
      [49.24454, -123.03663],
      RUPERT_29TH_W,
      RUPERT_29TH_E,
      CARIBOO_29TH,
    ],
  },
  {
    routeNames: [ROUTES.midtown.name],
    legs: ["Vancouver"],
    description: "east portion",
    videos: [VIDEOS.midtownVancouverEb],
    positions: [
      CARIBOO_29TH,
      [49.24433, -123.02751],
      [49.24375, -123.02804],
      [49.24342, -123.02725],
      [49.24332, -123.02693],
      [49.24261, -123.0251],
      [49.24257, -123.02484],
      [49.24257, -123.02383],
      [49.24312, -123.02383],
      BOUNDARY_MOSCROP,
    ],
  },
  {
    routeNames: [ROUTES.midtown.name],
    legs: ["Burnaby"],
    description: "primary",
    positions: [
      BOUNDARY_MOSCROP,
      [49.24311, -123.01983],
      PATTERSON_MOSCROP,
      CARLETON_MOSCROP,
      [49.24305, -123.01113],
      [49.24303, -123.01063],
      [49.24303, -123.00975],
      [49.24303, -123.00836],
      [49.24303, -123.00706],
      [49.24307, -123.00678],
      WILLINGDON_DEER_LAKE,
      [49.24301, -123.00232],
      [49.24279, -123.00155],
      [49.24203, -122.99974],
      [49.24186, -122.9991],
      [49.24177, -122.99822],
      [49.24172, -122.99797],
      GARDEN_GROVE_DEER_LAKE,
      [49.2417, -122.99482],
      [49.24173, -122.99197],
      [49.24171, -122.99187],
      [49.24171, -122.99128],
      [49.24172, -122.9904],
      [49.24186, -122.98899],
      [49.24185, -122.98537],
      [49.24183, -122.9817],
      [49.24181, -122.97729],
      DEER_LAKE_GILPIN_W,
      DEER_LAKE_GILPIN_SW,
      [49.24174, -122.97551],
      [49.24173, -122.97305],
      [49.24173, -122.97149],
      [49.24173, -122.97116],
      [49.24173, -122.97006],
      [49.24173, -122.96954],
      [49.24172, -122.9693],
      [49.24169, -122.96911],
      [49.2418, -122.96904],
      [49.24185, -122.96911],
      [49.24194, -122.96943],
      [49.24201, -122.96947],
      [49.24206, -122.96939],
      [49.24198, -122.96927],
      [49.24192, -122.96908],
      [49.24179, -122.96878],
      [49.24197, -122.96854],
      [49.24178, -122.96819],
      [49.24185, -122.96778],
      [49.24166, -122.96755],
      [49.24151, -122.96675],
      [49.2415, -122.96468],
      [49.24076, -122.96467],
      [49.24075, -122.96382],
      [49.24071, -122.96347],
      [49.2407, -122.96038],
      [49.24054, -122.95917],
      [49.24038, -122.95862],
      [49.23888, -122.95671],
      [49.23945, -122.95566],
      [49.23871, -122.95469],
      [49.2388, -122.95391],
      [49.23879, -122.95356],
      [49.23831, -122.9526],
      [49.23815, -122.95176],
      [49.23803, -122.95076],
      [49.23789, -122.95066],
      [49.23775, -122.95072],
      [49.23763, -122.95108],
      [49.23753, -122.95108],
      [49.23752, -122.95095],
      [49.23672, -122.94999],
      [49.23723, -122.94903],
      [49.23654, -122.94507],
      [49.2363, -122.94194],
      [49.23614, -122.94147],
      [49.23589, -122.94124],
      [49.23533, -122.94119],
      [49.2348, -122.94102],
      [49.23434, -122.94064],
      [49.23346, -122.93946],
      [49.23309, -122.93902],
      [49.23258, -122.93876],
      [49.23256, -122.93815],
      [49.23234, -122.93763],
      [49.23216, -122.93744],
      [49.23165, -122.93709],
      [49.23135, -122.93679],
      [49.22976, -122.93483],
      [49.2292, -122.93412],
      [49.22905, -122.93406],
      [49.22893, -122.9341],
      [49.22848, -122.93446],
      [49.22833, -122.93448],
      [49.22818, -122.93443],
      [49.22783, -122.934],
      [49.22662, -122.93247],
      [49.22585, -122.93148],
      [49.22508, -122.93052],
      [49.22406, -122.92921],
      [49.22343, -122.92842],
      [49.22281, -122.92762],
    ],
  },
];
