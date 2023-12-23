import {
  BARNET_INLET_N,
  INLET_BAYVIEW_E,
  INLET_BAYVIEW_W,
  INLET_RIDGE_E,
  INLET_RIDGE_W,
} from "../intersections";
import { ROUTES } from "../routes";

const BARNET_VIEW_E = [49.27971, -122.86651];
const BARNET_VIEW_W = [49.27966, -122.86701];
const BARNET_UNION = [49.28608, -122.86771];

export const BARNET = [
  {
    description: "connection to spring st",
    type: "shared-pedestrian", // well, 2nd half local-street
    positions: [
      BARNET_VIEW_W,
      [49.27966, -122.86661],
      [49.27971, -122.86661],
      BARNET_VIEW_E,
      [49.27971, -122.86649],
      [49.27966, -122.86647],
      [49.2794, -122.86646],
      [49.27934, -122.86643],
      [49.27932, -122.86641],
      [49.2793, -122.86636],
      [49.27926, -122.8661],
      [49.27927, -122.86609],
      [49.27929, -122.8661],
      [49.27932, -122.86629],
      [49.27933, -122.8663],
      [49.27934, -122.86628],
      [49.27934, -122.8662],
      [49.27935, -122.86617],
      [49.27942, -122.86617],
      [49.27946, -122.86619],
      [49.27955, -122.86617],
      [49.27961, -122.86605],
      [49.27955, -122.86567],
      [49.27947, -122.86556],
      [49.27946, -122.86543],
      [49.2794, -122.86536],
      [49.27921, -122.865],
      [49.27904, -122.86463],
      [49.27897, -122.86449],
      [49.27891, -122.86436],
      [49.27888, -122.86433],
      [49.2788, -122.8643],
      [49.27829, -122.86429],
      [49.27775, -122.86427],
      [49.2772, -122.86426],
      [49.2772, -122.8641],
    ],
  },
  {
    routeNames: [ROUTES.barnet.name],
    description: "eb: ridge-ish to sidewalk",
    type: "shoulder", // well, brief shared-pedestrian
    oneWay: "required",
    positions: [
      [49.28259, -122.95641],
      INLET_RIDGE_E,
      [49.28525, -122.95449],
      [49.28592, -122.95397],
      [49.28637, -122.95355],
      [49.28658, -122.95332],
      INLET_BAYVIEW_E,
      [49.28682, -122.95297],
      [49.28712, -122.95256],
      [49.2874, -122.95211],
      [49.28764, -122.95169],
      [49.2878, -122.95134],
      [49.28805, -122.95072],
      [49.2883, -122.95001],
      BARNET_INLET_N,
      [49.28847, -122.94948],
      [49.28861, -122.9489],
      [49.28868, -122.94848],
      [49.28869, -122.94808],
      [49.28869, -122.94755],
      [49.28855, -122.94578],
      [49.28849, -122.94513],
      [49.28849, -122.9444],
      [49.28855, -122.94379],
      [49.28865, -122.94324],
      [49.28877, -122.94282],
      [49.28898, -122.94229],
      [49.28926, -122.94171],
      [49.28965, -122.94093],
      [49.28988, -122.94041],
      [49.28999, -122.94012],
      [49.29006, -122.93988],
      [49.2901, -122.93967],
      [49.29017, -122.93933],
      [49.29025, -122.93862],
      [49.29041, -122.93682],
      [49.29047, -122.93607],
      [49.2905, -122.93543],
      [49.29049, -122.93489],
      [49.29046, -122.93436],
      [49.2904, -122.93375],
      [49.29034, -122.93329],
      [49.29018, -122.93245],
      [49.28983, -122.93076],
      [49.28954, -122.92935],
      [49.28941, -122.92846],
      [49.28918, -122.92693],
      [49.28904, -122.92611],
      [49.28895, -122.92576],
      [49.28882, -122.92534],
      [49.28837, -122.92397],
      [49.28817, -122.92338],
      [49.28808, -122.92302],
      [49.28801, -122.92262],
      [49.28797, -122.92227],
      [49.28795, -122.92192],
      [49.28794, -122.92158],
      [49.28799, -122.9204],
      [49.288, -122.92007],
      [49.28799, -122.91955],
      [49.28796, -122.91918],
      [49.28775, -122.91716],
      [49.28768, -122.91643],
      [49.28765, -122.91589],
      [49.28768, -122.91553],
      [49.28775, -122.91452],
      [49.28787, -122.91343],
      [49.28789, -122.913],
      [49.2879, -122.91261],
      [49.2879, -122.91179],
      [49.28784, -122.91105],
      [49.28776, -122.91033],
      [49.28766, -122.9096],
      [49.28754, -122.90889],
      [49.28726, -122.90759],
      [49.28686, -122.90563],
      [49.28674, -122.90502],
      [49.28668, -122.90464],
      [49.28663, -122.90414],
      [49.28659, -122.90372],
      [49.28657, -122.90314],
      [49.28657, -122.9026],
      [49.28658, -122.90212],
      [49.28663, -122.90154],
      [49.28668, -122.90113],
      [49.28676, -122.90066],
      [49.28687, -122.9001],
      [49.2871, -122.89927],
      [49.28726, -122.8988],
      [49.2873, -122.8986],
      [49.28775, -122.8976],
      [49.28808, -122.89701],
      [49.2882, -122.89689],
      [49.2884, -122.89652],
      [49.28897, -122.89552],
      [49.28929, -122.89496],
      [49.28953, -122.89444],
      [49.28969, -122.89407],
      [49.2899, -122.89343],
      [49.29002, -122.89295],
      [49.2901, -122.89252],
      [49.29017, -122.892],
      [49.29021, -122.89159],
      [49.29023, -122.89107],
      [49.29023, -122.89065],
      [49.29022, -122.89026],
      [49.29018, -122.88967],
      [49.29001, -122.88838],
      [49.28994, -122.88778],
      [49.28989, -122.8873],
      [49.28984, -122.88683],
      [49.28983, -122.88642],
      [49.28983, -122.88573],
      [49.28993, -122.88347],
      [49.28996, -122.88305],
      [49.29004, -122.88255],
      [49.29015, -122.88199],
      [49.29052, -122.88058],
      [49.29079, -122.8796],
      [49.29089, -122.87915],
      [49.29097, -122.87865],
      [49.29106, -122.8777],
      [49.29109, -122.87729],
      [49.29108, -122.87628],
      [49.29105, -122.87567],
      [49.29095, -122.87484],
      [49.29087, -122.87442],
      [49.29073, -122.8739],
      [49.29053, -122.87331],
      [49.29034, -122.87284],
      [49.28998, -122.87204],
      [49.28964, -122.87129],
      [49.28933, -122.87066],
      [49.28911, -122.87026],
      [49.28887, -122.86988],
      [49.28854, -122.86941],
      [49.28825, -122.86909],
      [49.28792, -122.86878],
      [49.28742, -122.8684],
      [49.28701, -122.86812],
      [49.28647, -122.86783],
      [49.28626, -122.86773],
      [49.28617, -122.86769],
      BARNET_UNION,
    ],
  },
  {
    routeNames: [ROUTES.barnet.name],
    description: "eb: sidewalk",
    type: "shared-pedestrian",
    oneWay: "recommended",
    positions: [
      BARNET_UNION,
      [49.28597, -122.86766],
      [49.28569, -122.86757],
      [49.28528, -122.8675],
      [49.28462, -122.86741],
      [49.28368, -122.8673],
      [49.28337, -122.86727],
      [49.28228, -122.86712],
      [49.28166, -122.86706],
      [49.28094, -122.86701],
      [49.28038, -122.867],
      [49.27985, -122.867],
      BARNET_VIEW_W,
      [49.27929, -122.867],
      [49.27862, -122.86704],
      [49.27814, -122.86709],
      [49.2777, -122.86709],
      [49.27732, -122.86704],
      [49.27716, -122.86701],
      [49.27674, -122.86698],
    ],
  },
  {
    routeNames: [ROUTES.barnet.name],
    description: "wb",
    type: "shoulder",
    oneWay: "required",
    positions: [
      [49.27792, -122.8667],
      [49.278, -122.86672],
      [49.27817, -122.86672],
      [49.27837, -122.8667],
      [49.27864, -122.86663],
      [49.27889, -122.86657],
      [49.2792, -122.86654],
      [49.27948, -122.86651],
      BARNET_VIEW_E,
      [49.2801, -122.86652],
      [49.28055, -122.86655],
      [49.28124, -122.86659],
      [49.28214, -122.86663],
      [49.28317, -122.86679],
      [49.28424, -122.86693],
      [49.28541, -122.8671],
      [49.28576, -122.86717],
      [49.28612, -122.86727],
      [49.28626, -122.86733],
      [49.28663, -122.86749],
      [49.28685, -122.86759],
      [49.28715, -122.86778],
      [49.28742, -122.86796],
      [49.28792, -122.86837],
      [49.28817, -122.86862],
      [49.28853, -122.86902],
      [49.28883, -122.86943],
      [49.28908, -122.86981],
      [49.28922, -122.87005],
      [49.28951, -122.87056],
      [49.28975, -122.87108],
      [49.29024, -122.87212],
      [49.2906, -122.87291],
      [49.29075, -122.87329],
      [49.29086, -122.87361],
      [49.29096, -122.87397],
      [49.29105, -122.87432],
      [49.29113, -122.87468],
      [49.29119, -122.87509],
      [49.29126, -122.87564],
      [49.29129, -122.876],
      [49.29131, -122.87653],
      [49.29131, -122.87711],
      [49.29129, -122.87739],
      [49.29122, -122.87826],
      [49.29116, -122.87865],
      [49.291, -122.87951],
      [49.29082, -122.88026],
      [49.29058, -122.88112],
      [49.29038, -122.88185],
      [49.29029, -122.88221],
      [49.29021, -122.88259],
      [49.29016, -122.88293],
      [49.29013, -122.88326],
      [49.29008, -122.88392],
      [49.29003, -122.88523],
      [49.29002, -122.8856],
      [49.29, -122.88605],
      [49.29001, -122.88658],
      [49.29004, -122.88712],
      [49.29008, -122.88748],
      [49.29017, -122.88828],
      [49.29035, -122.88962],
      [49.29037, -122.88987],
      [49.2904, -122.89026],
      [49.29041, -122.89059],
      [49.2904, -122.89118],
      [49.29038, -122.89167],
      [49.29034, -122.89209],
      [49.29026, -122.89268],
      [49.29018, -122.89307],
      [49.29009, -122.89346],
      [49.28988, -122.89411],
      [49.28972, -122.89454],
      [49.28959, -122.89483],
      [49.28934, -122.89534],
      [49.28911, -122.89578],
      [49.28878, -122.89634],
      [49.28848, -122.89683],
      [49.28835, -122.89708],
      [49.2882, -122.89734],
      [49.28781, -122.89803],
      [49.28766, -122.89833],
      [49.28756, -122.89855],
      [49.2874, -122.89893],
      [49.28727, -122.89929],
      [49.28718, -122.89958],
      [49.28702, -122.90022],
      [49.28693, -122.90062],
      [49.28683, -122.90116],
      [49.28676, -122.9017],
      [49.28672, -122.90235],
      [49.2867, -122.90299],
      [49.28672, -122.90356],
      [49.28676, -122.90411],
      [49.28683, -122.9047],
      [49.28693, -122.90528],
      [49.28715, -122.90633],
      [49.28738, -122.90744],
      [49.28755, -122.90825],
      [49.28774, -122.90918],
      [49.28781, -122.90963],
      [49.28788, -122.91006],
      [49.28792, -122.91037],
      [49.288, -122.91116],
      [49.28803, -122.91156],
      [49.28805, -122.91217],
      [49.28805, -122.91268],
      [49.28803, -122.91334],
      [49.28799, -122.91401],
      [49.28794, -122.91456],
      [49.2879, -122.91507],
      [49.28787, -122.91545],
      [49.28785, -122.91613],
      [49.28788, -122.9166],
      [49.28805, -122.91812],
      [49.28814, -122.91904],
      [49.28818, -122.91981],
      [49.28818, -122.92045],
      [49.28813, -122.92146],
      [49.28812, -122.92187],
      [49.28814, -122.9222],
      [49.28816, -122.92245],
      [49.28821, -122.92276],
      [49.28827, -122.92305],
      [49.28835, -122.92332],
      [49.2885, -122.9238],
      [49.28875, -122.92448],
      [49.28902, -122.92527],
      [49.28914, -122.92566],
      [49.28922, -122.92603],
      [49.28929, -122.92641],
      [49.28939, -122.92711],
      [49.28942, -122.9274],
      [49.28948, -122.92792],
      [49.28958, -122.92856],
      [49.28967, -122.92913],
      [49.28974, -122.92952],
      [49.2899, -122.9303],
      [49.29008, -122.93114],
      [49.29018, -122.9316],
      [49.29028, -122.93212],
      [49.29039, -122.93263],
      [49.29052, -122.93342],
      [49.29062, -122.93419],
      [49.29066, -122.9347],
      [49.29067, -122.935],
      [49.29067, -122.93561],
      [49.29064, -122.93645],
      [49.29056, -122.93734],
      [49.29046, -122.93845],
      [49.2904, -122.93913],
      [49.29034, -122.93961],
      [49.29029, -122.93989],
      [49.29024, -122.94013],
      [49.29016, -122.94038],
      [49.28999, -122.94076],
      [49.28982, -122.94112],
      [49.28966, -122.94147],
      [49.28926, -122.94223],
      [49.28911, -122.94258],
      [49.289, -122.94287],
      [49.28892, -122.94312],
      [49.28883, -122.94348],
      [49.28876, -122.94388],
      [49.28873, -122.94419],
      [49.28871, -122.94444],
      [49.28871, -122.94501],
      [49.28874, -122.9455],
      [49.28877, -122.94587],
      [49.28884, -122.94681],
      [49.28887, -122.94719],
      [49.28889, -122.94752],
      [49.28889, -122.94774],
      [49.28889, -122.94814],
      [49.28887, -122.9485],
      [49.28878, -122.94902],
      [49.28866, -122.94949],
      [49.28845, -122.95014],
      [49.28817, -122.95092],
      [49.28801, -122.95133],
      [49.28782, -122.95174],
      [49.28761, -122.95215],
      [49.28739, -122.95253],
      [49.2872, -122.95282],
      [49.28697, -122.95314],
      INLET_BAYVIEW_W,
      [49.28663, -122.95355],
      [49.28635, -122.95384],
      [49.28593, -122.9542],
      [49.28545, -122.95457],
      [49.28483, -122.95502],
      [49.28431, -122.9554],
      INLET_RIDGE_W,
      [49.2832, -122.95622],
      [49.28254, -122.9567],
    ],
  },
];