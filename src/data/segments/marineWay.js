import {
  BOUNDARY_FRASER_RIVER,
  BYRNE_CREEK_MARINE_S,
  KINROSS_KENT,
  NORTH_FRASER_MARINE_SE,
  QUEENSBOROUGH_STEWARDSON_W,
  TWENTY_THIRD_7TH,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const KINROSS_MARINE_SW = [49.20678, -123.03674];
const KINROSS_MARINE_SE = [49.20678, -123.0366];
const BOUNDARY_MARINE_SW = [49.20523, -123.02377];
const BOUNDARY_MARINE_SE = [49.20532, -123.02303];

const NORTH_FRASER_MARINE_NE = [49.19671, -122.96848];

const TWENTY_THIRD_MARINE = [49.19811, -122.95209];
const STEWARDSON_MARINE = [49.19753, -122.95079];

export const MARINE_WAY = [
  // vancouver
  {
    description: "boundary parking lot",
    type: "quiet",
    positions: [
      BOUNDARY_FRASER_RIVER,
      [49.20165, -123.02342],
      [49.20216, -123.02339],
      [49.2024, -123.02327],
      [49.20246, -123.0232],
      [49.20258, -123.02301],
      // [49.20263, -123.0229],
    ],
  },
  {
    description: "near kinross",
    type: "dedicated",
    positions: [
      [49.20802, -123.04044],
      [49.20794, -123.03999],
      [49.20785, -123.03961],
      [49.20776, -123.03933],
      [49.20762, -123.03893],
      [49.20745, -123.03861],
      [49.20729, -123.03832],
      [49.20715, -123.03802],
      [49.20704, -123.03773],
      [49.20694, -123.03743],
      [49.20685, -123.03711],
      [49.20678, -123.03681],
      KINROSS_MARINE_SW,
    ],
  },
  {
    description: "kinross nb",
    type: "painted",
    oneWay: "required",
    positions: [
      KINROSS_MARINE_SW,
      KINROSS_MARINE_SE,
      [49.2062, -123.03662],
      KINROSS_KENT,
    ],
  },
  {
    description: "kinross sb",
    type: "painted",
    oneWay: "required",
    positions: [KINROSS_KENT, [49.2062, -123.03674], KINROSS_MARINE_SW],
  },
  {
    routeNames: [ROUTES.marineWay.name],
    description: "wb: vancouver",
    type: "combined",
    oneWay: "required",
    positions: [
      [49.20571, -123.02386],
      [49.20565, -123.024],
      [49.20562, -123.02416],
      [49.20562, -123.02433],
      [49.20564, -123.0245],
      [49.20568, -123.02467],
      [49.20572, -123.02489],
      [49.20578, -123.02511],
      [49.20585, -123.02538],
      [49.20596, -123.0257],
      [49.20645, -123.02691],
    ],
  },
  {
    routeNames: [ROUTES.marineWay.name],
    description: "eb: vancouver",
    type: "combined",
    oneWay: "required",
    videoIds: [VIDEOS.marineWayEb.id],
    videoIdsStartAtStart: [VIDEOS.marineWayEb.id],
    positions: [
      [49.20687, -123.03341],
      [49.20688, -123.0332],
      [49.20688, -123.03295],
      [49.20686, -123.03258],
      [49.20682, -123.03208],
      [49.20677, -123.03142],
      [49.20673, -123.0309],
      [49.20668, -123.03034],
      [49.20665, -123.02994],
      [49.2066, -123.0294],
      [49.20655, -123.02876],
      [49.20652, -123.02838],
      [49.20649, -123.02819],
      [49.20646, -123.02806],
      [49.2064, -123.02776],
      [49.20627, -123.02731],
      [49.20616, -123.02702],
      [49.20584, -123.02624],
      [49.20568, -123.02589],
      [49.20559, -123.02562],
      [49.20553, -123.02544],
      [49.20547, -123.02521],
      [49.20537, -123.0248],
      [49.20533, -123.02453],
      [49.20531, -123.02432],
      [49.20529, -123.02409],
      [49.20526, -123.02385],
      BOUNDARY_MARINE_SW,
    ],
  },
  {
    description: "vancouver to burnaby",
    oneWay: "required",
    type: "shared",
    hideArrows: true,
    hideUnlessVideo: true,
    videoIds: [VIDEOS.marineWayEb.id],
    positions: [
      BOUNDARY_MARINE_SW,
      [49.20526, -123.02372],
      [49.2053, -123.02372],
      [49.20533, -123.02377],
      BOUNDARY_MARINE_SE,
    ],
  },
  {
    description: "boundary sb from marine",
    type: "combined",
    oneWay: "required",
    positions: [
      BOUNDARY_MARINE_SW,
      [49.20521, -123.02374],
      [49.20514, -123.02368],
      [49.20508, -123.02367],
      [49.20495, -123.02366],
      [49.20483, -123.0236],
      [49.20462, -123.02356],
    ],
  },

  // burnaby (and new westminster technically)
  {
    description: "connection to meadow/10th",
    type: "mixed",
    positions: [
      NORTH_FRASER_MARINE_SE,
      NORTH_FRASER_MARINE_NE,
      [49.19686, -122.96834],
    ],
  },
  {
    description: "wb: getting onto marine way",
    type: "dedicated",
    oneWay: "required",
    positions: [
      TWENTY_THIRD_7TH,
      [49.19821, -122.95212],
      [49.19817, -122.95209],
      TWENTY_THIRD_MARINE,
    ],
  },
  {
    routeNames: [ROUTES.marineWay.name],
    description: "wb: burnaby",
    type: "shoulder",
    oneWay: "required",
    positions: [
      TWENTY_THIRD_MARINE,
      [49.19781, -122.95252],
      [49.19742, -122.9531],
      [49.19721, -122.95348],
      [49.19713, -122.95368],
      [49.19708, -122.95383],
      [49.19704, -122.95399],
      [49.19697, -122.95432],
      [49.1969, -122.95466],
      [49.19682, -122.95498],
      [49.19674, -122.95527],
      [49.19666, -122.95553],
      [49.19652, -122.95586],
      [49.19618, -122.95658],
      [49.19595, -122.9571],
      [49.19582, -122.95743],
      [49.19568, -122.95784],
      [49.19557, -122.95831],
      [49.19553, -122.9586],
      [49.19551, -122.95889],
      [49.1955, -122.95917],
      [49.1955, -122.95944],
      [49.19554, -122.95986],
      [49.1956, -122.96036],
      [49.1958, -122.96207],
      [49.19599, -122.96362],
      [49.19613, -122.96474],
      [49.19627, -122.96558],
      [49.19647, -122.96684],
      NORTH_FRASER_MARINE_NE,
      [49.19706, -122.971],
      [49.19739, -122.97345],
      [49.19744, -122.9738],
      [49.19753, -122.97446],
      [49.19759, -122.97489],
      [49.19773, -122.97542],
      [49.19773, -122.97553],
      [49.19783, -122.9759],
      [49.19796, -122.97626],
      [49.198, -122.97628],
      [49.19814, -122.9766],
      [49.19829, -122.97691],
      [49.19851, -122.97725],
      [49.1995, -122.97853],
      [49.19978, -122.9789],
      [49.20057, -122.97994],
      [49.20156, -122.98117],
      [49.20206, -122.9818],
      [49.2028, -122.98276],
      [49.20311, -122.98321],
      [49.20333, -122.98358],
      [49.20347, -122.98387],
      [49.20357, -122.98413],
      [49.20366, -122.98439],
      [49.20377, -122.98482],
      [49.20384, -122.9852],
      [49.20388, -122.98553],
      [49.20392, -122.98588],
      [49.20393, -122.98623],
      [49.20393, -122.98816],
      [49.20393, -122.99119],
      [49.20393, -122.99432],
      [49.20393, -122.99747],
      [49.20393, -122.99912],
      [49.20393, -122.99996],
      [49.20396, -123.00067],
      [49.204, -123.00121],
      [49.20412, -123.00225],
      [49.20431, -123.00361],
      [49.20469, -123.00628],
      [49.205, -123.00846],
      [49.2052, -123.00992],
      [49.2054, -123.0114],
      [49.20549, -123.0124],
      [49.20552, -123.01307],
      [49.20552, -123.01513],
      [49.20553, -123.01786],
      [49.20553, -123.02065],
      [49.20553, -123.02291],
    ],
  },
  {
    routeNames: [ROUTES.marineWay.name],
    description: "eb: burnaby",
    type: "shoulder",
    oneWay: "required",
    videoIds: [VIDEOS.marineWayEb.id],
    positions: [
      BOUNDARY_MARINE_SE,
      [49.20533, -123.02066],
      [49.20535, -123.01786],
      [49.20535, -123.01408],
      [49.20534, -123.01311],
      [49.2053, -123.0125],
      [49.20522, -123.01163],
      [49.20511, -123.01075],
      [49.20506, -123.01049],
      [49.20508, -123.01034],
      [49.20497, -123.00965],
      [49.2049, -123.00946],
      [49.20485, -123.0089],
      [49.20465, -123.00752],
      [49.20433, -123.00509],
      [49.20401, -123.00284],
      [49.20389, -123.00193],
      [49.20385, -123.00161],
      [49.20381, -123.00122],
      [49.20377, -123.00074],
      [49.20374, -123.00029],
      [49.20374, -122.99958],
      [49.20376, -122.99728],
      [49.20377, -122.99467],
      [49.20376, -122.99286],
      [49.20377, -122.99055],
      [49.20377, -122.98813],
      [49.20377, -122.9869],
      [49.20377, -122.98646],
      [49.20376, -122.98604],
      [49.20372, -122.98553],
      [49.20367, -122.98512],
      [49.20358, -122.98471],
      [49.20343, -122.98424],
      [49.20336, -122.98407],
      [49.20323, -122.98379],
      [49.20314, -122.98363],
      BYRNE_CREEK_MARINE_S,
      [49.20194, -122.98202],
      [49.20081, -122.98059],
      [49.20019, -122.97983],
      [49.20013, -122.97979],
      [49.19986, -122.97945],
      [49.19984, -122.97936],
      [49.19948, -122.9789],
      [49.1994, -122.97885],
      [49.19862, -122.97783],
      [49.19842, -122.97757],
      [49.19827, -122.97735],
      [49.19815, -122.97712],
      [49.19804, -122.97692],
      [49.19796, -122.97674],
      [49.19786, -122.97651],
      [49.1978, -122.97634],
      [49.19769, -122.97604],
      [49.19764, -122.97588],
      [49.19757, -122.9756],
      [49.1975, -122.97527],
      [49.19742, -122.97485],
      [49.19731, -122.9742],
      [49.19704, -122.97224],
      [49.19671, -122.96988],
      NORTH_FRASER_MARINE_SE,
      [49.19648, -122.96824],
      [49.19643, -122.96818],
      [49.19636, -122.96754],
      [49.19619, -122.96634],
      [49.19598, -122.96486],
      [49.19584, -122.96385],
      [49.19562, -122.96198],
      [49.19547, -122.9607],
      [49.19539, -122.95999],
      [49.19536, -122.95964],
      [49.19535, -122.95944],
      [49.19533, -122.9592],
      [49.19533, -122.95886],
      [49.19535, -122.95859],
      [49.19538, -122.95837],
      [49.19541, -122.95817],
      [49.19547, -122.9579],
      [49.19552, -122.95769],
      [49.1956, -122.9574],
      [49.19572, -122.95706],
      [49.19603, -122.95628],
      [49.19625, -122.9557],
      [49.19637, -122.9554],
      [49.19644, -122.95519],
      [49.1965, -122.95498],
      [49.19655, -122.95481],
      [49.1966, -122.95448],
      [49.19664, -122.95388],
      [49.19667, -122.95346],
      [49.19669, -122.95328],
      [49.19673, -122.95308],
      [49.19684, -122.95263],
      [49.19709, -122.952],
      [49.19731, -122.9515],
      [49.19743, -122.95116],
      STEWARDSON_MARINE,
    ],
  },
  {
    description: "eb: transition to bc parkway",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.marineWayEb.id],
    positions: [
      STEWARDSON_MARINE,
      [49.19752, -122.95068],
      [49.19762, -122.95031],
      QUEENSBOROUGH_STEWARDSON_W,
    ],
  },
];
