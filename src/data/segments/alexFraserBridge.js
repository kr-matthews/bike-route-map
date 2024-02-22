import {
  ALEX_FRASER_NW_FRASERWOOD,
  BOUNDARY_DYKE,
  QUEENS_CANAL_WESTMINSTER_S,
} from "../intersections";
import { ROUTES } from "../routes";

const QUEENS_CANAL_OVERPASS = [49.17928, -122.96271];
const OVERPASS_W = [49.17936, -122.96268];
const OVERPASS_E = [49.17974, -122.9613];
const BOUNDARY_NE_RAMP = [49.17732, -122.95733];
const THOMPSON_OVERPASS = [49.17974, -122.96001];
const THOMPSON_S = [49.17852, -122.96009];

const SB_ELEVATION_START_1 = [49.17537, -122.96082];
const SB_ELEVATION_END_1 = [49.17371, -122.95675];
const SB_ELEVATION_START_2 = [49.16966, -122.94991];
const SB_ELEVATION_END_2 = [49.14861, -122.93846];
const SB_POST_BRIDGE = [49.14815, -122.93845];

const NB_PRE_BRIDGE = [49.14818, -122.93755];
const NB_ELEVATION_START_1 = [49.14869, -122.93796];
const NB_ELEVATION_END_1 = [49.17002, -122.94887];
const NB_ELEVATION_START_2 = [49.17454, -122.95471];
const NB_PRE_RAMP_START = [49.17722, -122.95724];
const NB_RAMP_START = [49.17726, -122.95745];
const NB_RAMP_START_AFTER = [49.1773, -122.95746];
const RAMP_PRE_MID_SW_CORNER = [49.1773, -122.95749];
const RAMP_MID_SW_CORNER = [49.17728, -122.95749];
const RAMP_ELEVATION_END = [49.17744, -122.95746];
const NE_RAMP_BOTTOM = [49.17734, -122.95746];
const NE_RAMP_BOTTOM_TO_BOUNDARY = [49.17734, -122.95745];

export const ALEX_FRASER_BRIDGE = [
  {
    description: "queen's canal",
    type: "mixed",
    positions: [
      QUEENS_CANAL_WESTMINSTER_S,
      [49.17962, -122.96279],
      [49.17935, -122.96259],
      QUEENS_CANAL_OVERPASS,
      [49.17923, -122.96275],
      [49.17882, -122.96276],
      [49.17702, -122.96278],
    ],
  },
  {
    description: "overpass west",
    type: "mixed",
    elevation: 0.5,
    positions: [QUEENS_CANAL_OVERPASS, [49.17932, -122.96271], OVERPASS_W],
  },
  {
    description: "overpass",
    type: "mixed",
    elevation: 1,
    positions: [OVERPASS_W, [49.17974, -122.9624], OVERPASS_E],
  },
  {
    description: "overpass east",
    type: "mixed",
    elevation: 0.5,
    positions: [OVERPASS_E, THOMPSON_OVERPASS],
  },
  {
    description: "thompson",
    type: "quiet",
    positions: [THOMPSON_OVERPASS, [49.17866, -122.96003], THOMPSON_S],
  },
  {
    description: "thompson to ne ramp",
    type: "mixed",
    positions: [
      THOMPSON_S,
      [49.17844, -122.96004],
      [49.17838, -122.96005],
      [49.17836, -122.96003],
      [49.17835, -122.95996],
      [49.17835, -122.95974],
      [49.17835, -122.95942],
      [49.17829, -122.95895],
      [49.17825, -122.95873],
      [49.1781, -122.95828],
      [49.17792, -122.95792],
      [49.17766, -122.95755],
      [49.17736, -122.95751],
      NE_RAMP_BOTTOM,
    ],
  },
  {
    description: "ne ramp to boundary 1",
    type: "mixed",
    elevation: 0.5,
    positions: [NE_RAMP_BOTTOM, NE_RAMP_BOTTOM_TO_BOUNDARY],
  },
  {
    description: "ne ramp to boundary 2",
    type: "mixed",
    positions: [NE_RAMP_BOTTOM_TO_BOUNDARY, BOUNDARY_NE_RAMP],
  },
  {
    description: "boundary",
    type: "quiet",
    positions: [
      BOUNDARY_NE_RAMP,
      [49.17637, -122.95736],
      [49.17632, -122.95733],
      BOUNDARY_DYKE,
    ],
  },
  {
    description: "underneath south end",
    type: "mixed",
    positions: [
      SB_POST_BRIDGE,
      [49.14829, -122.93852],
      [49.14858, -122.93861],
      [49.14863, -122.9386],
      [49.14865, -122.93857],
      [49.14872, -122.93822],
      [49.14876, -122.93793],
      [49.14877, -122.93786],
      [49.14875, -122.9378],
      [49.14871, -122.93775],
      [49.14864, -122.93771],
      NB_PRE_BRIDGE,
    ],
  },

  // nb
  {
    routeNames: [ROUTES.alexFraserBridge.name],
    description: "nb pre-bridge",
    type: "mixed",
    oneWay: "recommended",
    elevation: 0.5,
    positions: [
      NB_PRE_BRIDGE,
      [49.14823, -122.93762],
      [49.14837, -122.9377],
      [49.14862, -122.9379],
      NB_ELEVATION_START_1,
    ],
  },
  {
    routeNames: [ROUTES.alexFraserBridge.name],
    description: "nb alex fraser",
    type: "mixed",
    oneWay: "recommended",
    elevation: 1,
    positions: [
      NB_ELEVATION_START_1,
      [49.1495, -122.9383],
      [49.15002, -122.93851],
      [49.1507, -122.93884],
      [49.15236, -122.93952],
      [49.1535, -122.94],
      [49.15448, -122.9404],
      [49.15539, -122.94078],
      [49.15665, -122.94128],
      [49.15823, -122.94193],
      [49.15969, -122.94253],
      [49.16121, -122.94316],
      [49.16251, -122.9437],
      [49.16358, -122.94414],
      [49.16359, -122.94416],
      [49.16513, -122.94479],
      [49.16577, -122.94506],
      [49.16618, -122.94525],
      [49.16636, -122.94533],
      [49.1666, -122.94547],
      [49.16678, -122.9456],
      [49.16697, -122.94573],
      [49.16734, -122.94603],
      [49.16756, -122.94622],
      [49.16785, -122.94649],
      [49.16807, -122.94672],
      [49.1681, -122.94673],
      [49.16814, -122.94679],
      [49.16861, -122.94739],
      [49.1693, -122.94831],
      [49.16947, -122.94852],
      [49.16958, -122.94863],
      [49.1697, -122.94873],
      [49.1698, -122.94879],
      [49.16988, -122.94884],
      NB_ELEVATION_END_1,
    ],
  },
  {
    routeNames: [ROUTES.alexFraserBridge.name],
    description: "nb annacis",
    type: "mixed",
    oneWay: "recommended",
    elevation: 0.5,
    positions: [
      NB_ELEVATION_END_1,
      [49.17017, -122.94887],
      [49.1703, -122.94885],
      [49.17051, -122.94874],
      [49.17073, -122.94866],
      [49.17092, -122.94861],
      [49.17105, -122.94859],
      [49.17121, -122.9486],
      [49.1713, -122.94863],
      [49.17146, -122.94873],
      [49.17162, -122.94886],
      [49.17168, -122.94889],
      [49.17173, -122.9489],
      [49.17178, -122.94889],
      [49.17183, -122.94902],
      [49.17178, -122.94931],
      [49.17189, -122.94975],
      [49.17193, -122.9498],
      [49.17198, -122.94982],
      [49.17207, -122.94983],
      [49.17208, -122.95036],
      [49.17208, -122.95065],
      [49.17212, -122.95112],
      [49.17213, -122.95141],
      [49.17214, -122.95176],
      [49.17217, -122.95206],
      [49.1722, -122.95228],
      [49.17228, -122.95258],
      [49.17244, -122.95307],
      [49.17263, -122.95339],
      [49.17274, -122.95352],
      [49.17282, -122.95363],
      [49.17284, -122.95372],
      [49.17306, -122.95398],
      [49.17325, -122.95415],
      [49.17348, -122.95432],
      [49.17387, -122.95452],
      [49.17403, -122.95458],
      NB_ELEVATION_START_2,
    ],
  },
  {
    routeNames: [ROUTES.alexFraserBridge.name],
    description: "nb channel bridge",
    type: "mixed",
    oneWay: "recommended",
    elevation: 1,
    positions: [
      NB_ELEVATION_START_2,
      [49.17476, -122.95475],
      [49.1751, -122.95482],
      [49.17529, -122.95488],
      [49.17545, -122.95493],
      [49.17576, -122.95508],
      [49.17596, -122.95521],
      [49.17609, -122.95531],
      [49.17625, -122.95545],
      [49.17638, -122.95559],
      [49.17655, -122.9558],
      [49.1767, -122.95601],
      [49.17682, -122.95621],
      [49.17693, -122.95643],
      [49.17704, -122.95669],
      [49.17713, -122.95694],
      NB_PRE_RAMP_START,
    ],
  },
  {
    routeNames: [ROUTES.alexFraserBridge.name],
    description: "nb turn off to ramp",
    type: "mixed",
    oneWay: "recommended",
    hideArrows: true,
    elevation: 1.5,
    positions: [NB_PRE_RAMP_START, NB_RAMP_START],
  },
  {
    routeNames: [ROUTES.alexFraserBridge.name],
    description: "ne ramp: east top",
    type: "mixed",
    oneWay: "recommended",
    hideArrows: true,
    elevation: 2,
    positions: [
      NB_RAMP_START,
      NB_RAMP_START_AFTER,
      [49.1773, -122.95743],
      [49.17759, -122.95743],
      [49.17759, -122.95748],
      RAMP_PRE_MID_SW_CORNER,
    ],
  },
  {
    routeNames: [ROUTES.alexFraserBridge.name],
    description: "ne ramp: north top",
    type: "mixed",
    oneWay: "recommended",
    hideArrows: true,
    elevation: 1.5,
    positions: [RAMP_PRE_MID_SW_CORNER, RAMP_MID_SW_CORNER],
  },
  {
    routeNames: [ROUTES.alexFraserBridge.name],
    description: "ne ramp: 3",
    type: "mixed",
    oneWay: "recommended",
    hideArrows: true,
    elevation: 1,
    positions: [
      RAMP_MID_SW_CORNER,
      [49.17728, -122.95742],
      [49.17761, -122.95742],
      [49.17761, -122.95747],
      RAMP_ELEVATION_END,
    ],
  },
  {
    routeNames: [ROUTES.alexFraserBridge.name],
    description: "ne ramp: bottom",
    type: "mixed",
    oneWay: "recommended",
    hideArrows: true,
    elevation: 0.5,
    positions: [RAMP_ELEVATION_END, NE_RAMP_BOTTOM],
  },

  // sb
  {
    routeNames: [ROUTES.alexFraserBridge.name],
    description: "sb to on-ramp",
    type: "mixed",
    oneWay: "recommended",
    elevation: 0.5,
    positions: [
      ALEX_FRASER_NW_FRASERWOOD,
      [49.1751, -122.96033],
      [49.17514, -122.9604],
      [49.17517, -122.96049],
      [49.17519, -122.96062],
      [49.17521, -122.96079],
      [49.1752, -122.96104],
      [49.17517, -122.96121],
      [49.17505, -122.96166],
      [49.17496, -122.96198],
      [49.17471, -122.96243],
      [49.17469, -122.96248],
      [49.17468, -122.96255],
      [49.17469, -122.96257],
      [49.1749, -122.96227],
      [49.17512, -122.96188],
      [49.17526, -122.96151],
      [49.17531, -122.96135],
      [49.17536, -122.96102],
      SB_ELEVATION_START_1,
    ],
  },
  {
    routeNames: [ROUTES.alexFraserBridge.name],
    description: "sb connector bridge",
    type: "mixed",
    oneWay: "recommended",
    elevation: 1,
    positions: [
      SB_ELEVATION_START_1,
      [49.17537, -122.96057],
      [49.17535, -122.96036],
      [49.17531, -122.96013],
      [49.17525, -122.9599],
      [49.17516, -122.95966],
      [49.17494, -122.95919],
      [49.17441, -122.95809],
      [49.17382, -122.95694],
      SB_ELEVATION_END_1,
    ],
  },
  {
    routeNames: [ROUTES.alexFraserBridge.name],
    description: "sb annacis",
    type: "mixed",
    oneWay: "recommended",
    elevation: 0.5,
    positions: [
      SB_ELEVATION_END_1,
      [49.17342, -122.95622],
      [49.17298, -122.95547],
      [49.17283, -122.95523],
      [49.17258, -122.95484],
      [49.17242, -122.95464],
      [49.17224, -122.95447],
      [49.17203, -122.95432],
      [49.17187, -122.95426],
      [49.1717, -122.95421],
      [49.17087, -122.95423],
      [49.17076, -122.95422],
      [49.17065, -122.95421],
      [49.17052, -122.95416],
      [49.17027, -122.95402],
      [49.17021, -122.954],
      [49.17014, -122.954],
      [49.17007, -122.95402],
      [49.17001, -122.95405],
      [49.16996, -122.95394],
      [49.17001, -122.95349],
      [49.16987, -122.9532],
      [49.16984, -122.95311],
      [49.16983, -122.95304],
      [49.16975, -122.95302],
      [49.16976, -122.95268],
      [49.16978, -122.95243],
      [49.16989, -122.95181],
      [49.16996, -122.95115],
      [49.16996, -122.95098],
      [49.16994, -122.95076],
      [49.16988, -122.95048],
      [49.1698, -122.95025],
      SB_ELEVATION_START_2,
    ],
  },
  {
    routeNames: [ROUTES.alexFraserBridge.name],
    description: "sb alex fraser",
    type: "mixed",
    oneWay: "recommended",
    elevation: 1,
    positions: [
      SB_ELEVATION_START_2,
      [49.16917, -122.9491],
      [49.16914, -122.94906],
      [49.16912, -122.94902],
      [49.16886, -122.94858],
      [49.16849, -122.94798],
      [49.1683, -122.94769],
      [49.16814, -122.94746],
      [49.16793, -122.94719],
      [49.16791, -122.94718],
      [49.16787, -122.94711],
      [49.1675, -122.9467],
      [49.16716, -122.94637],
      [49.16673, -122.94602],
      [49.16642, -122.94581],
      [49.16594, -122.94554],
      [49.16546, -122.94532],
      [49.16433, -122.94486],
      [49.16353, -122.94452],
      [49.16351, -122.94453],
      [49.16248, -122.94411],
      [49.16083, -122.94343],
      [49.15932, -122.94281],
      [49.15684, -122.94179],
      [49.15602, -122.94145],
      [49.15601, -122.94143],
      [49.15496, -122.941],
      [49.15377, -122.94051],
      [49.15272, -122.94008],
      [49.15121, -122.93946],
      [49.14958, -122.93879],
      [49.14894, -122.93857],
      SB_ELEVATION_END_2,
    ],
  },
  {
    routeNames: [ROUTES.alexFraserBridge.name],
    description: "sb post-bridge",
    type: "mixed",
    oneWay: "recommended",
    elevation: 0.5,
    positions: [SB_ELEVATION_END_2, [49.14852, -122.93845], SB_POST_BRIDGE],
  },
];
