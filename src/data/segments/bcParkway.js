import {
  BC_PARKWAY_BYRNE_CREEK,
  BC_PARKWAY_CVG_SPLIT,
  BC_PARKWAY_SOUTHRIDGE_TRAIL,
  BOUNDARY_VANNESS,
  BOUNDARY_VANNESS_E,
  CENTRAL_PARK_BC_PARKWAY_WEST_SPLIT,
  CENTRAL_PARK_BC_PARKWAY_NE,
  CENTRAL_PARK_NW,
  EARLES_VANNESS,
  GILLEY_RUMBLE_NW,
  GLADSTONE_BC_PARKWAY,
  LAKEWOOD_GRANDVIEW,
  LAKEWOOD_JOHN_HENDRY_PARK,
  PATTERSON_BC_PARKWAY,
  QUAYSIDE_JOIN,
  QUEENSBOROUGH_POST_RAMP,
  SLOCAN_29TH,
  SLOCAN_BC_PARKWAY,
  TODD_VANNESS,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const BC_PARKWAY_10TH = [49.20226, -122.95859];
const CITY_PARKWAY_108_NW = [49.19907, -122.84896];
const CITY_PARKWAY_107A_SW = [49.19734, -122.84891];

const NANAIMO_BC_PARKWAY_SPLIT_EAST = [49.24877, -123.05681];
const NANAIMO_BC_PARKWAY_SPLIT_WEST = [49.24953, -123.05897];
const PENTICTON_BC_PARKWAY = [49.24655, -123.05204];
const PENTICTON_29TH = [49.24463, -123.05206];
const BC_PARKWAY_29TH_STATION = [49.24432, -123.04668];
const JOYCE_BC_PARKWAY_SPLIT_EAST = [49.23733, -123.02949];
const JOYCE_BC_PARKWAY_SPLIT_WEST = [49.23789, -123.03033];
const CENTRAL_PARK_BC_PARKWAY_EAST_SPLIT = [49.23126, -123.01657];
const SOUTHRIDGE_OVERPASS_N = [49.20483, -122.95879];
const SOUTHRIDGE_OVERPASS_S = [49.20443, -122.95896];
const QUEENSBOROUGH_LOOPS_ELEVATION_START = [49.19922, -122.9508];
const QUEENSBOROUGH_LOOPS_ELEVATION_END = [49.19867, -122.95059];
const QUEENSBOROUGH_ELEVATION_START = [49.19839, -122.94945];
const QUEENSBOROUGH_ELEVATION_END = [49.19762, -122.95014];
const THIRD_STEWARDSON = [49.20227, -122.92662];
const THIRD_ELEVATION_START = [49.2021, -122.92687];
const THIRD_ELEVATION_END = [49.20076, -122.9275];
const QUAYSIDE_SPLIT = [49.19966, -122.92157];
const PATTULLO_PRE_ELEVATION_START = [49.20906, -122.89931];
const PATTULLO_ELEVATION_START = [49.20909, -122.89919];
const PATTULLO_ELEVATION_END = [49.20575, -122.88338];
const PATTULLO_POST_ELEVATION_END = [49.20582, -122.88163];
const ONE_ONE_ONE_AV_START_N = [49.20565, -122.88071];
const ONE_ONE_ONE_AV_START_S = [49.20559, -122.88071];
const ONE_ONE_ZERO_AV_END_N = [49.20267, -122.87232];
const ONE_ONE_ZERO_125TH_N = [49.20267, -122.87596];
const ONE_ONE_ZERO_AV_END_S = [49.20259, -122.87232];
const UNIVERSITY_105A = [49.19458, -122.85067];
const UNIVERSITY_SB_LANE_START = [49.19156, -122.85063];
const UNIVERSITY_SB_LANE_END = [49.18891, -122.85];
const UNIVERSITY_NB_LANE_START = [49.1888, -122.84979];
const UNIVERSITY_NB_LANE_END = [49.19156, -122.85037];
const UNIVERSITY_OLD_YALE = [49.18587, -122.8517];

const NORTH_OF_GLADSTONE = [49.25029, -123.06026];
const SOUTH_OF_NORTH_GRANDVIEW = [49.2599, -123.06208];

export const BC_PARKWAY = [
  // vancouver alternates
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "Nanaimo alt",
    videos: [VIDEOS.bcParkwayVancouverWb.id],
    positions: [
      NANAIMO_BC_PARKWAY_SPLIT_WEST,
      [49.24954, -123.05865],
      [49.24883, -123.05683],
      NANAIMO_BC_PARKWAY_SPLIT_EAST,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name, ROUTES.sunrise.name],
    description: "29th alt road",
    oneWay: "recommended",
    type: "uncomfortable",
    videos: [VIDEOS.sunriseNb.id],
    positions: [[49.24463, -123.04702], SLOCAN_29TH],
  },
  {
    routeNames: [ROUTES.bcParkway.name, ROUTES.sunrise.name],
    description: "29th alt path",
    oneWay: "recommended",
    videos: [VIDEOS.sunriseNb.id],
    positions: [
      BC_PARKWAY_29TH_STATION,
      [49.24437, -123.04673],
      [49.2445, -123.04699],
      [49.24463, -123.04702],
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "Joyce alt",
    positions: [
      JOYCE_BC_PARKWAY_SPLIT_WEST,
      [49.23774, -123.03046],
      JOYCE_BC_PARKWAY_SPLIT_EAST,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "29th alt. wb to penticton",
    type: "uncomfortable",
    oneWay: "recommended",
    positions: [SLOCAN_29TH, PENTICTON_29TH],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "penticton alt. wb",
    oneWay: "recommended",
    positions: [PENTICTON_29TH, PENTICTON_BC_PARKWAY],
  },

  // vancouver
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "little bit after lakewood",
    videos: [
      VIDEOS.bcParkwayVancouverEb.id,
      VIDEOS.bcParkwayVancouverWb.id,
      VIDEOS.lakewoodNb.id,
    ],
    videosStartAtStart: [VIDEOS.bcParkwayVancouverEb.id],
    videosEndAtStart: [VIDEOS.bcParkwayVancouverWb.id],
    videosStartAtEnd: [VIDEOS.lakewoodNb.id],
    positions: [LAKEWOOD_GRANDVIEW, SOUTH_OF_NORTH_GRANDVIEW],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "most of lakewood to gladstone",
    videos: [VIDEOS.bcParkwayVancouverEb.id, VIDEOS.bcParkwayVancouverWb.id],
    positions: [
      SOUTH_OF_NORTH_GRANDVIEW,
      [49.25859, -123.06209],
      LAKEWOOD_JOHN_HENDRY_PARK,
      [49.25791, -123.06212],
      [49.25789, -123.06087],
      [49.25782, -123.06049],
      [49.25762, -123.06018],
      [49.25706, -123.06019],
      [49.25663, -123.06043],
      [49.25636, -123.06048],
      [49.25599, -123.06025],
      [49.25567, -123.06026],
      [49.25524, -123.06017],
      [49.25487, -123.06022],
      [49.25433, -123.06017],
      [49.25409, -123.06031],
      [49.25389, -123.06037],
      [49.25372, -123.06026],
      [49.25363, -123.05994],
      [49.25351, -123.05987],
      [49.25332, -123.0598],
      [49.25307, -123.05982],
      [49.25248, -123.06014],
      [49.25218, -123.05909],
      NORTH_OF_GLADSTONE,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "little bit north of gladstone",
    videos: [
      VIDEOS.bcParkwayVancouverEb.id,
      VIDEOS.bcParkwayVancouverWb.id,
      VIDEOS.gladstoneNb.id,
    ],
    videosEndAtStart: [VIDEOS.gladstoneNb.id],
    positions: [
      NORTH_OF_GLADSTONE,
      [49.24999, -123.05988],
      GLADSTONE_BC_PARKWAY,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "gladstone to nanaimo split",
    videos: [VIDEOS.bcParkwayVancouverEb.id, VIDEOS.bcParkwayVancouverWb.id],
    positions: [
      GLADSTONE_BC_PARKWAY,
      [49.24971, -123.05944],
      NANAIMO_BC_PARKWAY_SPLIT_WEST,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "nanaimo split south",
    videos: [VIDEOS.bcParkwayVancouverEb.id],
    positions: [
      NANAIMO_BC_PARKWAY_SPLIT_WEST,
      [49.24943, -123.05889],
      [49.24866, -123.05709],
      NANAIMO_BC_PARKWAY_SPLIT_EAST,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "nanaimo split to sunrise",
    videos: [VIDEOS.bcParkwayVancouverEb.id, VIDEOS.bcParkwayVancouverWb.id],
    positions: [
      NANAIMO_BC_PARKWAY_SPLIT_EAST,
      [49.24876, -123.0565],
      [49.24837, -123.05649],
      [49.24808, -123.05583],
      [49.24806, -123.05564],
      PENTICTON_BC_PARKWAY,
      SLOCAN_BC_PARKWAY,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name, ROUTES.sunrise.name],
    description: "29th path",
    videos: [VIDEOS.bcParkwayVancouverEb.id, VIDEOS.bcParkwayVancouverWb.id],
    positions: [
      SLOCAN_29TH,
      [49.24452, -123.04957],
      [49.24452, -123.04718],
      BC_PARKWAY_29TH_STATION,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name, ROUTES.sunrise.name],
    description: "sunrise",
    videos: [
      VIDEOS.bcParkwayVancouverEb.id,
      VIDEOS.bcParkwayVancouverWb.id,
      VIDEOS.sunriseNb.id,
    ],
    positions: [
      BC_PARKWAY_29TH_STATION,
      [49.24415, -123.0463],
      [49.24401, -123.04609],
      [49.24364, -123.04521],
      [49.24372, -123.04514],
      TODD_VANNESS,
      EARLES_VANNESS,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "sunrise to boundary",
    videos: [VIDEOS.bcParkwayVancouverEb.id, VIDEOS.bcParkwayVancouverWb.id],
    videosEndAtEnd: [VIDEOS.bcParkwayVancouverEb.id],
    videosStartAtEnd: [VIDEOS.bcParkwayVancouverWb.id],
    positions: [
      EARLES_VANNESS,
      [49.24263, -123.04252],
      [49.24223, -123.04152],
      [49.24187, -123.04068],
      [49.24148, -123.03975],
      [49.24109, -123.03876],
      [49.2407, -123.03779],
      [49.24071, -123.03766],
      [49.23949, -123.03465],
      [49.23937, -123.03436],
      [49.23933, -123.03412],
      [49.23911, -123.03351],
      [49.23912, -123.03333],
      [49.23854, -123.03161],
      [49.23804, -123.03041],
      JOYCE_BC_PARKWAY_SPLIT_WEST,
      [49.23755, -123.02958],
      JOYCE_BC_PARKWAY_SPLIT_EAST,
      [49.23659, -123.02797],
      [49.235, -123.02452],
      [49.23471, -123.02397],
      BOUNDARY_VANNESS,
    ],
  },

  // burnaby alternates
  {
    description: "skytrain from boundary",
    positions: [
      BOUNDARY_VANNESS_E,
      [49.23422, -123.02304],
      [49.2342, -123.02285],
      [49.23409, -123.0225],
      [49.2336, -123.02138],
      [49.2335, -123.02117],
      [49.23336, -123.02074],
      [49.23331, -123.02066],
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "south central park split",
    videos: [VIDEOS.bcParkwayBurnabyEb.id],
    positions: [
      CENTRAL_PARK_BC_PARKWAY_WEST_SPLIT,
      [49.23208, -123.01885],
      [49.23194, -123.01855],
      [49.2318, -123.01835],
      [49.23176, -123.01812],
      [49.2314, -123.01754],
      [49.23129, -123.01722],
      [49.23132, -123.01692],
      [49.23128, -123.01676],
      CENTRAL_PARK_BC_PARKWAY_EAST_SPLIT,
    ],
  },

  // burnaby
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "west of central park perimeter trail",
    videos: [VIDEOS.bcParkwayBurnabyEb.id],
    videosStartAtStart: [VIDEOS.bcParkwayBurnabyEb.id],
    positions: [
      BOUNDARY_VANNESS,
      BOUNDARY_VANNESS_E,
      [49.23415, -123.0233],
      [49.23392, -123.02317],
      [49.23312, -123.02317],
      [49.23301, -123.02325],
      [49.23271, -123.0233],
      [49.23254, -123.0232],
      [49.23248, -123.02328],
      [49.23218, -123.02328],
      [49.232, -123.02293],
      CENTRAL_PARK_NW,
    ],
  },
  {
    description: "skytrain to kingsway",
    positions: [CENTRAL_PARK_BC_PARKWAY_NE, [49.2325, -123.01929]],
  },
  {
    routeNames: [ROUTES.bcParkway.name, ROUTES.centralParkPerimeterTrail.name],
    description: "north central park split",
    videos: [VIDEOS.centralParkPerimeterTrailCw.id],
    positions: [CENTRAL_PARK_BC_PARKWAY_NE, CENTRAL_PARK_BC_PARKWAY_EAST_SPLIT],
  },
  {
    routeNames: [ROUTES.bcParkway.name, ROUTES.centralParkPerimeterTrail.name],
    description: "central park split to patterson",
    videos: [
      VIDEOS.bcParkwayBurnabyEb.id,
      VIDEOS.centralParkPerimeterTrailCw.id,
    ],
    positions: [CENTRAL_PARK_BC_PARKWAY_EAST_SPLIT, PATTERSON_BC_PARKWAY],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "central park to southridge overpass",
    elevation: 0.5,
    videos: [VIDEOS.bcParkwayBurnabyEb.id],
    positions: [
      PATTERSON_BC_PARKWAY,
      [49.22953, -123.01256],
      [49.22913, -123.01167],
      [49.22898, -123.01147],
      [49.22859, -123.01057],
      [49.22776, -123.00876],
      [49.22768, -123.0086],
      [49.22761, -123.00841],
      [49.22759, -123.00829],
      [49.22759, -123.00817],
      [49.22759, -123.00805],
      [49.22762, -123.00798],
      [49.22764, -123.00789],
      [49.22763, -123.00782],
      [49.22752, -123.00756],
      [49.22749, -123.00751],
      [49.22745, -123.0075],
      [49.22723, -123.0075],
      [49.22719, -123.00747],
      [49.22706, -123.0072],
      [49.22701, -123.00696],
      [49.22652, -123.00583],
      [49.22608, -123.00512],
      [49.22501, -123.00271],
      [49.22398, -123.00043],
      [49.22263, -122.99741],
      [49.22237, -122.99728],
      [49.22187, -122.99727],
      [49.22187, -122.99573],
      [49.22159, -122.99524],
      [49.2214, -122.99476],
      [49.22128, -122.99416],
      [49.22117, -122.9939],
      [49.22108, -122.99359],
      [49.2209, -122.99285],
      [49.22089, -122.99279],
      [49.22084, -122.99277],
      [49.22077, -122.99267],
      [49.22071, -122.99255],
      [49.22067, -122.99233],
      [49.22067, -122.99217],
      [49.22071, -122.99202],
      [49.22005, -122.98882],
      [49.22001, -122.98869],
      [49.21989, -122.98867],
      [49.21992, -122.98842],
      [49.21986, -122.98794],
      [49.2199, -122.9876],
      [49.21975, -122.98682],
      [49.21958, -122.9865],
      [49.2193, -122.98505],
      [49.21885, -122.9829],
      [49.21882, -122.9822],
      [49.2187, -122.98158],
      [49.2184, -122.98054],
      [49.21836, -122.98014],
      [49.21807, -122.97904],
      [49.21783, -122.97824],
      [49.21757, -122.97755],
      [49.21747, -122.97755],
      [49.21583, -122.97408],
      [49.21566, -122.97407],
      [49.21566, -122.97369],
      [49.2152, -122.97261],
      [49.21498, -122.97245],
      GILLEY_RUMBLE_NW,
      [49.21483, -122.97176],
      [49.21487, -122.97151],
      [49.21487, -122.97131],
      [49.21484, -122.97092],
      [49.21484, -122.97059],
      [49.21483, -122.97014],
      [49.21482, -122.96947],
      [49.21481, -122.96881],
      [49.2148, -122.96791],
      [49.21481, -122.96742],
      [49.21484, -122.96676],
      [49.21486, -122.96599],
      [49.21486, -122.96565],
      [49.21495, -122.9635],
      [49.21496, -122.96327],
      [49.21492, -122.96288],
      [49.21483, -122.96247],
      [49.21475, -122.96225],
      [49.21475, -122.96174],
      [49.21459, -122.96174],
      [49.21451, -122.9616],
      [49.21445, -122.96155],
      [49.21439, -122.96138],
      [49.21406, -122.96093],
      [49.21402, -122.9608],
      [49.21396, -122.96072],
      [49.21374, -122.96052],
      [49.21368, -122.96053],
      [49.21362, -122.9606],
      [49.21347, -122.96064],
      [49.21334, -122.96072],
      [49.21319, -122.96089],
      [49.21287, -122.96093],
      [49.21269, -122.96088],
      BC_PARKWAY_BYRNE_CREEK,
      [49.21238, -122.96053],
      [49.21226, -122.96027],
      [49.21214, -122.96012],
      [49.21205, -122.9601],
      [49.21195, -122.96],
      [49.2117, -122.95969],
      [49.21159, -122.95942],
      [49.21142, -122.95926],
      [49.21135, -122.95926],
      [49.21108, -122.95902],
      [49.21079, -122.95881],
      [49.21, -122.95825],
      [49.20993, -122.9582],
      [49.20983, -122.95815],
      [49.2098, -122.95815],
      [49.20952, -122.95798],
      [49.20912, -122.95762],
      [49.20902, -122.95755],
      [49.2088, -122.95744],
      [49.20816, -122.95705],
      [49.20811, -122.95706],
      [49.20799, -122.95712],
      [49.20789, -122.95711],
      [49.20769, -122.95699],
      [49.20753, -122.95703],
      [49.20722, -122.95717],
      [49.20697, -122.95734],
      [49.2063, -122.95781],
      [49.20569, -122.95835],
      [49.20547, -122.9585],
      BC_PARKWAY_SOUTHRIDGE_TRAIL,
      SOUTHRIDGE_OVERPASS_N,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "southridge overpass",
    elevation: 1,
    videos: [VIDEOS.bcParkwayBurnabyEb.id],
    positions: [SOUTHRIDGE_OVERPASS_N, SOUTHRIDGE_OVERPASS_S],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "southridge overpass to new westminster",
    elevation: 0.5,
    videos: [VIDEOS.bcParkwayBurnabyEb.id],
    videosEndAtEnd: [VIDEOS.bcParkwayBurnabyEb.id],
    positions: [
      SOUTHRIDGE_OVERPASS_S,
      [49.2044, -122.95897],
      [49.20429, -122.95911],
      [49.20423, -122.95915],
      [49.20415, -122.95918],
      [49.20402, -122.95918],
      [49.20395, -122.95916],
      [49.2039, -122.95911],
      [49.20385, -122.95902],
      [49.20381, -122.95898],
      [49.20343, -122.95896],
      [49.2031, -122.95896],
      [49.20288, -122.95892],
      [49.20255, -122.95881],
      BC_PARKWAY_10TH,
    ],
  },

  // new westminster
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "burnaby to queensborough loops",
    elevation: 0.5,
    positions: [
      BC_PARKWAY_10TH,
      [49.2021, -122.9585],
      [49.20178, -122.95834],
      [49.20163, -122.95821],
      [49.20153, -122.95807],
      [49.2014, -122.95792],
      [49.20118, -122.95787],
      [49.20118, -122.95787],
      [49.20102, -122.95767],
      [49.20084, -122.95744],
      [49.20072, -122.95727],
      [49.20057, -122.95707],
      [49.20046, -122.95688],
      [49.20035, -122.95665],
      [49.20021, -122.95635],
      [49.20005, -122.95598],
      [49.19996, -122.95574],
      [49.19985, -122.9554],
      [49.19975, -122.95505],
      [49.19959, -122.95433],
      [49.19954, -122.95397],
      [49.19953, -122.95378],
      [49.1995, -122.95335],
      [49.19948, -122.95298],
      [49.19947, -122.95263],
      [49.19947, -122.95244],
      [49.19951, -122.95208],
      [49.19956, -122.95171],
      [49.19961, -122.95143],
      [49.19922, -122.95097],
      QUEENSBOROUGH_LOOPS_ELEVATION_START,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "queensborough loops",
    elevation: 1,
    positions: [
      QUEENSBOROUGH_LOOPS_ELEVATION_START,
      QUEENSBOROUGH_LOOPS_ELEVATION_END,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "queensborough dog area",
    elevation: 0.5,
    positions: [
      QUEENSBOROUGH_LOOPS_ELEVATION_END,
      [49.19864, -122.95051],
      [49.19863, -122.95043],
      [49.19864, -122.95037],
      [49.19867, -122.95022],
      [49.19868, -122.95012],
      [49.19868, -122.95007],
      [49.19859, -122.94974],
      [49.19854, -122.94965],
      QUEENSBOROUGH_ELEVATION_START,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "queensborough bridge sidewalk",
    elevation: 1,
    positions: [
      QUEENSBOROUGH_ELEVATION_START,
      [49.19781, -122.94883],
      QUEENSBOROUGH_ELEVATION_END,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "queensborough bridge post-sidewalk",
    elevation: 0.5,
    positions: [QUEENSBOROUGH_ELEVATION_END, QUEENSBOROUGH_POST_RAMP],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "stewardson way",
    positions: [
      QUEENSBOROUGH_POST_RAMP,
      [49.19773, -122.94982],
      [49.19779, -122.9494],
      [49.19785, -122.94901],
      [49.19792, -122.94863],
      [49.19799, -122.94836],
      [49.19807, -122.94815],
      [49.1982, -122.94789],
      [49.19831, -122.94776],
      [49.1985, -122.94759],
      [49.19886, -122.94732],
      [49.19906, -122.94713],
      [49.19918, -122.947],
      [49.1993, -122.94683],
      [49.19937, -122.9467],
      [49.19943, -122.94657],
      [49.19953, -122.94626],
      [49.19959, -122.94598],
      [49.19975, -122.9452],
      [49.19987, -122.94467],
      [49.19993, -122.94447],
      [49.20005, -122.94414],
      [49.20021, -122.94376],
      [49.20044, -122.94333],
      [49.20066, -122.94299],
      [49.20085, -122.94267],
      [49.20103, -122.94236],
      [49.20122, -122.94203],
      [49.20128, -122.94186],
      [49.20137, -122.94171],
      [49.20149, -122.94145],
      [49.20162, -122.9411],
      [49.2019, -122.9403],
      [49.20198, -122.94007],
      [49.20214, -122.93942],
      [49.20238, -122.9388],
      [49.20275, -122.93764],
      [49.20274, -122.93748],
      [49.203, -122.9368],
      [49.20336, -122.93569],
      [49.20351, -122.93518],
      [49.20359, -122.93483],
      [49.20364, -122.93456],
      [49.20368, -122.93429],
      [49.20371, -122.93411],
      [49.20372, -122.93386],
      [49.20377, -122.93379],
      [49.20377, -122.93362],
      [49.20381, -122.93347],
      [49.20381, -122.93327],
      [49.20379, -122.93302],
      [49.20377, -122.93271],
      [49.20363, -122.93138],
      [49.20358, -122.93101],
      [49.20349, -122.93073],
      [49.20346, -122.93038],
      [49.20333, -122.9294],
      [49.20324, -122.9288],
      [49.20316, -122.92837],
      [49.2031, -122.92812],
      [49.20304, -122.9279],
      [49.20293, -122.9276],
      [49.20279, -122.92731],
      THIRD_STEWARDSON,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "third ave pre-overpass",
    type: "uncomfortable",
    elevation: 0.5,
    positions: [THIRD_STEWARDSON, THIRD_ELEVATION_START],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "third ave overpass",
    type: "uncomfortable",
    elevation: 1,
    positions: [
      THIRD_ELEVATION_START,
      [49.2013, -122.92833],
      [49.20092, -122.92784],
      THIRD_ELEVATION_END,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "quayside overpass to split",
    type: "uncomfortable",
    elevation: 0.5,
    positions: [
      THIRD_ELEVATION_END,
      [49.20069, -122.9273],
      [49.20061, -122.92706],
      [49.20055, -122.92678],
      [49.20051, -122.92646],
      [49.20037, -122.92547],
      [49.20025, -122.92456],
      [49.20007, -122.92326],
      [49.19999, -122.92275],
      [49.19993, -122.9223],
      [49.1999, -122.92213],
      [49.19986, -122.92198],
      [49.19982, -122.92187],
      [49.19976, -122.92173],
      QUAYSIDE_SPLIT,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "quayside waterfront path",
    positions: [
      QUAYSIDE_SPLIT,
      [49.19948, -122.92174],
      [49.19918, -122.92193],
      [49.1989, -122.92197],
      [49.19872, -122.92205],
      [49.19824, -122.92206],
      [49.19816, -122.92198],
      [49.19813, -122.92183],
      [49.19812, -122.921],
      [49.19809, -122.92086],
      [49.19806, -122.9188],
      [49.1981, -122.91873],
      [49.1981, -122.91852],
      [49.19805, -122.91838],
      [49.19801, -122.91584],
      [49.19803, -122.91577],
      [49.19803, -122.9155],
      [49.198, -122.91546],
      [49.19799, -122.91513],
      [49.19806, -122.91481],
      [49.19821, -122.9145],
      [49.19822, -122.91439],
      [49.1987, -122.91349],
      [49.19869, -122.91333],
      [49.19889, -122.91296],
      [49.19926, -122.9129],
      [49.19979, -122.91188],
      [49.19974, -122.9118],
      [49.19981, -122.91146],
      [49.20027, -122.91055],
      QUAYSIDE_JOIN,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "quayside road option",
    type: "uncomfortable",
    positions: [
      QUAYSIDE_SPLIT,
      [49.19928, -122.9211],
      [49.19922, -122.92094],
      [49.1992, -122.92075],
      [49.19905, -122.91845],
      [49.19892, -122.91634],
      [49.1989, -122.91592],
      [49.19891, -122.9158],
      [49.19908, -122.91581],
      [49.19918, -122.91576],
      [49.19921, -122.9157],
      [49.19924, -122.9156],
      [49.19925, -122.91546],
      [49.19929, -122.91527],
      [49.19945, -122.91495],
      [49.19984, -122.91418],
      [49.19991, -122.91401],
      [49.20005, -122.91339],
      [49.20011, -122.9131],
      [49.20033, -122.91187],
      [49.20052, -122.91102],
      [49.20055, -122.91086],
      QUAYSIDE_JOIN,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "to pattullo bridge",
    positions: [
      BC_PARKWAY_CVG_SPLIT,
      [49.20749, -122.9009],
      [49.20783, -122.90091],
      [49.20808, -122.90078],
      [49.20818, -122.9007],
      [49.20879, -122.89997],
      [49.20875, -122.89984],
      [49.20894, -122.89961],
      [49.20901, -122.89947],
      PATTULLO_PRE_ELEVATION_START,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "pre pattullo bridge",
    elevation: 0.5,
    positions: [PATTULLO_PRE_ELEVATION_START, PATTULLO_ELEVATION_START],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "pattullo bridge",
    elevation: 1,
    positions: [
      PATTULLO_ELEVATION_START,
      [49.20911, -122.89903],
      [49.20911, -122.8989],
      [49.2091, -122.8987],
      [49.20906, -122.89849],
      [49.20831, -122.89641],
      [49.20719, -122.8933],
      [49.20653, -122.89144],
      [49.2059, -122.8897],
      [49.20564, -122.88896],
      [49.20556, -122.88869],
      [49.20552, -122.88851],
      [49.20547, -122.88823],
      [49.20544, -122.88802],
      [49.20543, -122.88783],
      [49.20542, -122.88758],
      [49.20543, -122.88726],
      [49.20548, -122.88658],
      [49.20565, -122.88446],
      PATTULLO_ELEVATION_END,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "post pattullo bridge",
    elevation: 0.5,
    positions: [PATTULLO_ELEVATION_END, PATTULLO_POST_ELEVATION_END],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "bridge to 111a av",
    positions: [
      PATTULLO_POST_ELEVATION_END,
      [49.20579, -122.88092],
      [49.20574, -122.88081],
      [49.2057, -122.88073],
      ONE_ONE_ONE_AV_START_N,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "eb: 111a ave & 110 ave",
    oneWay: "required",
    positions: [
      ONE_ONE_ONE_AV_START_N,
      ONE_ONE_ONE_AV_START_S,
      [49.20559, -122.87985],
      [49.20559, -122.8797],
      [49.20558, -122.8796],
      [49.20557, -122.87947],
      [49.20553, -122.87929],
      [49.20549, -122.87914],
      [49.20545, -122.87902],
      [49.20543, -122.87897],
      [49.20539, -122.87889],
      [49.20536, -122.87885],
      [49.20532, -122.87879],
      [49.20526, -122.87874],
      [49.2052, -122.87871],
      [49.20511, -122.8787],
      [49.20354, -122.87871],
      [49.20342, -122.8787],
      [49.20332, -122.87867],
      [49.2032, -122.87863],
      [49.20309, -122.87857],
      [49.20304, -122.87852],
      [49.20299, -122.87844],
      [49.2028, -122.87811],
      [49.20277, -122.87803],
      [49.20273, -122.87789],
      [49.20267, -122.87767],
      [49.20265, -122.8775],
      [49.20264, -122.87728],
      [49.2026, -122.87593],
      ONE_ONE_ZERO_AV_END_S,
      ONE_ONE_ZERO_AV_END_N,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "wb: 110 ave no lane",
    type: "uncomfortable",
    oneWay: "required",
    positions: [ONE_ONE_ZERO_AV_END_N, ONE_ONE_ZERO_125TH_N],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "wb: 111a ave & 110 ave",
    oneWay: "required",
    positions: [
      ONE_ONE_ZERO_125TH_N,
      [49.20269, -122.87686],
      [49.20276, -122.87756],
      [49.20279, -122.87769],
      [49.20281, -122.87783],
      [49.20288, -122.87801],
      [49.20306, -122.87837],
      [49.20316, -122.87847],
      [49.20324, -122.87853],
      [49.20338, -122.87858],
      [49.20352, -122.8786],
      [49.2051, -122.87859],
      [49.20523, -122.8786],
      [49.20531, -122.87863],
      [49.20538, -122.8787],
      [49.20544, -122.87879],
      [49.2055, -122.87889],
      [49.20555, -122.87901],
      [49.20559, -122.87918],
      [49.20563, -122.87934],
      [49.20565, -122.87951],
      [49.20566, -122.87975],
      ONE_ONE_ONE_AV_START_N,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "126a st/king george blvd separated path",
    positions: [
      ONE_ONE_ZERO_AV_END_N,
      [49.20351, -122.87231],
      [49.20452, -122.87232],
      [49.20453, -122.87224],
      [49.20576, -122.87223],
      [49.20581, -122.87217],
      [49.20589, -122.87202],
      [49.20596, -122.87171],
      [49.20604, -122.87089],
      [49.206, -122.87052],
      [49.20605, -122.86957],
      [49.20604, -122.86943],
      [49.20609, -122.86902],
      [49.2061, -122.86846],
      [49.20609, -122.86838],
      [49.20612, -122.86776],
      [49.20606, -122.86762],
      [49.20609, -122.86723],
      [49.20615, -122.86713],
      [49.2062, -122.86682],
      [49.20626, -122.86622],
      [49.2063, -122.86589],
      [49.20639, -122.86502],
      [49.2064, -122.86457],
      [49.20638, -122.86428],
      [49.20639, -122.86415],
      [49.20649, -122.86388],
      [49.20679, -122.86265],
      [49.20696, -122.86186],
      [49.20709, -122.86097],
      [49.2071, -122.85957],
      [49.20697, -122.85873],
      [49.20688, -122.85833],
      [49.20678, -122.85801],
      [49.20662, -122.85756],
      [49.20641, -122.85709],
      [49.20611, -122.85653],
      [49.20572, -122.85601],
      [49.20506, -122.85501],
      [49.20502, -122.85499],
      [49.20502, -122.85487],
      [49.20472, -122.85444],
      [49.20465, -122.85446],
      [49.20456, -122.85424],
      [49.20455, -122.85415],
      [49.20413, -122.8535],
      [49.20326, -122.85221],
      [49.20287, -122.85167],
      [49.20264, -122.85137],
      [49.2026, -122.85128],
      [49.20246, -122.85107],
      [49.20237, -122.85102],
      [49.20223, -122.85101],
      [49.20202, -122.8509],
      [49.20188, -122.85083],
      [49.20157, -122.85071],
      [49.2014, -122.85075],
      [49.2013, -122.85083],
      [49.20121, -122.85065],
      [49.20092, -122.85014],
      [49.20021, -122.84909],
      [49.20012, -122.84915],
      [49.20001, -122.84905],
      [49.1999, -122.84898],
      [49.19985, -122.84897],
      [49.1997, -122.84896],
      CITY_PARKWAY_108_NW,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "nb: city parkway",
    oneWay: "required",
    positions: [
      CITY_PARKWAY_107A_SW,
      [49.19735, -122.84879],
      [49.19802, -122.84877],
      [49.19815, -122.84875],
      [49.19882, -122.84874],
      [49.19902, -122.84871],
      [49.19906, -122.84872],
      CITY_PARKWAY_108_NW,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "sb: city parkway",
    oneWay: "required",
    positions: [
      CITY_PARKWAY_108_NW,
      [49.19899, -122.84896],
      [49.19875, -122.84887],
      [49.19815, -122.84886],
      [49.19803, -122.84889],
      [49.19744, -122.84889],
      CITY_PARKWAY_107A_SW,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "tom binnie park",
    positions: [
      CITY_PARKWAY_107A_SW,
      [49.1973, -122.84911],
      [49.19731, -122.84956],
      [49.1973, -122.84963],
      [49.1973, -122.85018],
      [49.19722, -122.8505],
      [49.19717, -122.85054],
      [49.19683, -122.8506],
      [49.19625, -122.85064],
      [49.1958, -122.85065],
      [49.19528, -122.85065],
      [49.19501, -122.85063],
      [49.19486, -122.85054],
      [49.19481, -122.85054],
      [49.19474, -122.85057],
      UNIVERSITY_105A,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "university sb 1",
    oneWay: "required",
    type: "uncomfortable",
    positions: [
      UNIVERSITY_105A,
      [49.1945, -122.85095],
      [49.19367, -122.85095],
      [49.19315, -122.85097],
      [49.19237, -122.85099],
      [49.19215, -122.85096],
      [49.19195, -122.85088],
      [49.19174, -122.85073],
      UNIVERSITY_SB_LANE_START,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "university sb 2",
    oneWay: "required",
    positions: [
      UNIVERSITY_SB_LANE_START,
      [49.19119, -122.85033],
      [49.19097, -122.85015],
      [49.19086, -122.85007],
      [49.19077, -122.85002],
      [49.19064, -122.84998],
      [49.19054, -122.84995],
      [49.19026, -122.84994],
      [49.19007, -122.84999],
      [49.18944, -122.85],
      [49.18902, -122.85001],
      UNIVERSITY_SB_LANE_END,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "university sb 3",
    oneWay: "required",
    type: "uncomfortable",
    positions: [
      UNIVERSITY_SB_LANE_END,
      [49.1888, -122.85001],
      [49.18866, -122.85008],
      [49.18861, -122.85011],
      [49.18849, -122.8502],
      [49.18825, -122.8505],
      [49.18801, -122.85087],
      [49.1879, -122.85103],
      [49.18778, -122.85117],
      [49.18762, -122.85132],
      [49.18744, -122.85146],
      [49.1873, -122.85154],
      [49.1872, -122.8516],
      [49.18683, -122.85171],
      [49.1862, -122.85185],
      [49.18598, -122.8519],
      UNIVERSITY_OLD_YALE,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "university nb 1",
    oneWay: "required",
    type: "uncomfortable",
    positions: [
      UNIVERSITY_OLD_YALE,
      [49.18595, -122.85172],
      [49.18613, -122.8517],
      [49.18678, -122.85157],
      [49.18702, -122.85151],
      [49.18717, -122.85145],
      [49.18735, -122.85135],
      [49.18757, -122.85118],
      [49.18773, -122.85103],
      [49.18789, -122.85085],
      [49.18813, -122.85048],
      [49.1883, -122.85022],
      [49.18844, -122.85007],
      [49.18856, -122.84997],
      [49.18872, -122.84987],
      UNIVERSITY_NB_LANE_START,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "university nb 2",
    oneWay: "required",
    positions: [
      UNIVERSITY_NB_LANE_START,
      [49.18901, -122.84976],
      [49.18942, -122.84974],
      [49.18978, -122.84973],
      [49.19007, -122.84971],
      [49.19025, -122.8497],
      [49.19056, -122.84972],
      [49.19073, -122.84976],
      [49.1909, -122.84984],
      [49.19105, -122.84994],
      [49.19139, -122.85023],
      UNIVERSITY_NB_LANE_END,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "university nb 3",
    oneWay: "required",
    type: "uncomfortable",
    positions: [
      UNIVERSITY_NB_LANE_END,
      [49.19174, -122.85057],
      [49.19195, -122.85071],
      [49.19207, -122.85076],
      [49.19226, -122.85082],
      [49.19235, -122.85083],
      [49.19312, -122.85082],
      [49.19444, -122.85082],
      UNIVERSITY_105A,
    ],
  },
  {
    routeNames: [ROUTES.bcParkway.name],
    description: "holland park",
    positions: [
      UNIVERSITY_OLD_YALE,
      [49.18571, -122.8513],
      [49.18566, -122.85122],
      [49.18557, -122.85109],
      [49.18552, -122.8509],
      [49.1855, -122.85062],
      [49.18547, -122.85055],
      [49.18514, -122.84964],
      [49.18473, -122.84867],
      [49.18467, -122.84858],
      [49.18458, -122.84847],
      [49.18453, -122.8484],
      [49.18451, -122.84835],
      [49.18451, -122.84825],
      [49.18452, -122.84809],
    ],
  },
];
