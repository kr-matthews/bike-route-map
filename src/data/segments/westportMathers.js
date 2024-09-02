import {
  THIRTY_FIRST_MARINE_E,
  THIRTY_FIRST_MARINE_NE,
  TWENTY_NINTH_MARINE_N,
  WESTPORT_MARINE,
} from "../intersections";
import { ROUTES } from "../routes";

const WESTPORT_WESTPORT_W = [49.36045, -123.25795];
const WESTPORT_WESTWOOD_SE = [49.35577, -123.25323];
const HEADLAND_WESTPORT_WS = [49.35221, -123.25133];
const HEADLAND_WESTPORT = [49.35217, -123.2511];
const WOODCREST_WOODGREEN = [49.35144, -123.24449];
const CYPRESS_CREEK_W = [49.3497, -123.23821];
const CYPRESS_CREEK_E = [49.34949, -123.23705];
const CYPRESS_CREEK_E_POST = [49.34942, -123.2369];
const SOUTHRIDGE_WESTRIDGE_W = [49.34694, -123.22648];
const SOUTHRIDGE_WESTRIDGE_E = [49.34564, -123.2188];
const WESTMOUNT_WESTRIDGE = [49.34558, -123.2184];
const ROCKVIEW_WESTMOUNT = [49.3457, -123.2133];
const BENBOW_WESTMOUNT = [49.34518, -123.20673];
const THIRTY_FIRST_MATHERS_W = [49.34215, -123.20322];
const THIRTY_FIRST_MATHERS_E = [49.34215, -123.20309];

export const WESTPORT_MATHERS = [
  {
    routeNames: [ROUTES.westportMathers.name],
    description: "westport",
    type: "shared",
    positions: [
      WESTPORT_MARINE,
      [49.35301, -123.25933],
      [49.35304, -123.25923],
      [49.35308, -123.25917],
      [49.35321, -123.25907],
      [49.35336, -123.25898],
      [49.35348, -123.25894],
      [49.35359, -123.25893],
      [49.35369, -123.25893],
      [49.3538, -123.25898],
      [49.3539, -123.25906],
      [49.35405, -123.25923],
      [49.3544, -123.25986],
      [49.35494, -123.26114],
      [49.35506, -123.26128],
      [49.35515, -123.26136],
      [49.3553, -123.2614],
      [49.35544, -123.26139],
      [49.35559, -123.26135],
      [49.35583, -123.26118],
      [49.35671, -123.26021],
      [49.35733, -123.25989],
      [49.35741, -123.25983],
      [49.35747, -123.25974],
      [49.35752, -123.25962],
      [49.35767, -123.25923],
      [49.35774, -123.25916],
      [49.35786, -123.25905],
      [49.35919, -123.25898],
      [49.35959, -123.25902],
      [49.35972, -123.25907],
      [49.35982, -123.25913],
      [49.35989, -123.25922],
      [49.35996, -123.2594],
      [49.36007, -123.2598],
      [49.36014, -123.26],
      [49.36021, -123.26008],
      [49.3603, -123.26013],
      [49.36046, -123.26015],
      [49.36056, -123.26014],
      [49.36065, -123.2601],
      [49.36074, -123.26002],
      [49.36079, -123.25995],
      [49.36082, -123.25986],
      [49.36083, -123.25977],
      [49.36081, -123.25969],
      [49.36064, -123.25932],
      [49.3606, -123.25918],
      [49.36057, -123.25897],
      [49.3605, -123.25822],
      WESTPORT_WESTPORT_W,
    ],
  },
  {
    routeNames: [ROUTES.westportMathers.name],
    description: "westport wb painted",
    type: "painted",
    oneWay: "required",
    positions: [
      HEADLAND_WESTPORT,
      [49.35225, -123.25123],
      [49.35239, -123.25171],
      [49.35254, -123.25216],
      [49.3527, -123.2525],
      [49.35286, -123.25278],
      [49.35302, -123.25293],
      [49.35323, -123.25306],
      [49.35398, -123.25328],
      [49.35443, -123.25339],
      [49.35479, -123.25345],
      [49.35499, -123.25344],
      [49.35519, -123.25341],
      [49.35544, -123.25334],
      WESTPORT_WESTWOOD_SE,
    ],
  },
  {
    routeNames: [ROUTES.westportMathers.name],
    description: "westport wb shared",
    type: "shared",
    oneWay: "required",
    positions: [
      WESTPORT_WESTWOOD_SE,
      [49.35591, -123.25321],
      [49.35663, -123.25299],
      [49.35677, -123.25293],
      [49.35698, -123.2528],
      [49.35742, -123.25229],
      [49.35819, -123.25143],
      [49.35844, -123.25129],
      [49.35874, -123.25116],
      [49.35903, -123.2511],
      [49.35919, -123.25108],
      [49.35955, -123.25111],
      [49.3597, -123.25115],
      [49.35996, -123.25127],
      [49.36014, -123.25141],
      [49.36032, -123.25165],
      [49.36044, -123.2519],
      [49.36052, -123.25216],
      [49.36056, -123.25242],
      [49.36055, -123.25263],
      [49.36053, -123.25296],
      [49.36033, -123.25406],
      [49.36031, -123.25439],
      [49.36032, -123.2546],
      [49.36036, -123.25531],
      [49.36036, -123.25563],
      [49.36034, -123.2558],
      [49.36027, -123.25612],
      [49.36023, -123.25635],
      [49.36021, -123.25675],
      [49.36024, -123.25708],
      [49.36031, -123.25742],
      [49.36043, -123.2578],
      WESTPORT_WESTPORT_W,
    ],
  },
  {
    routeNames: [ROUTES.westportMathers.name],
    description: "westport eb painted",
    type: "painted",
    oneWay: "required",
    positions: [
      WESTPORT_WESTPORT_W,
      [49.36039, -123.25785],
      [49.36029, -123.25751],
      [49.36023, -123.25727],
      [49.36018, -123.25696],
      [49.36017, -123.25674],
      [49.36018, -123.25647],
      [49.36019, -123.25625],
      [49.36026, -123.25587],
      [49.3603, -123.25565],
      [49.3603, -123.25533],
      [49.36029, -123.25499],
      [49.36026, -123.25448],
      [49.36027, -123.25408],
      [49.36048, -123.25297],
      [49.3605, -123.25267],
      [49.3605, -123.25236],
      [49.36046, -123.25212],
      [49.36038, -123.25189],
      [49.36028, -123.2517],
      [49.36012, -123.2515],
      [49.35992, -123.25133],
      [49.35961, -123.25121],
      [49.35914, -123.25115],
      [49.35879, -123.25121],
      [49.35849, -123.25135],
      [49.35822, -123.25149],
      [49.35702, -123.25285],
      [49.35678, -123.25298],
      [49.35655, -123.25308],
      [49.35589, -123.25329],
      [49.35518, -123.25347],
      [49.35496, -123.25351],
      [49.35474, -123.25353],
      [49.35435, -123.25347],
      [49.35395, -123.25338],
      [49.3533, -123.25319],
      [49.35312, -123.25312],
      [49.35296, -123.253],
      [49.35283, -123.25287],
      [49.35264, -123.25254],
      [49.35248, -123.25218],
      HEADLAND_WESTPORT_WS,
      HEADLAND_WESTPORT,
    ],
  },
  {
    routeNames: [ROUTES.westportMathers.name],
    description: "westport/woodgreen",
    type: "shared",
    positions: [
      HEADLAND_WESTPORT,
      [49.35201, -123.25044],
      [49.35184, -123.24949],
      [49.35178, -123.24901],
      [49.3517, -123.24785],
      [49.35166, -123.24716],
      [49.35161, -123.24683],
      [49.35151, -123.24647],
      [49.35135, -123.24606],
      [49.35123, -123.24579],
      [49.35115, -123.24562],
      [49.35113, -123.24554],
      [49.35113, -123.24547],
      [49.35118, -123.24536],
      [49.35129, -123.24513],
      [49.35139, -123.24477],
      WOODCREST_WOODGREEN,
    ],
  },
  {
    routeNames: [ROUTES.westportMathers.name],
    description: "woodgreen/woodcrest/almondel",
    type: "quiet",
    elevation: 0.5,
    positions: [
      WOODCREST_WOODGREEN,
      [49.35132, -123.24432],
      [49.35115, -123.24407],
      [49.351, -123.24392],
      [49.35094, -123.24387],
      [49.35083, -123.24387],
      [49.35051, -123.24382],
      [49.35043, -123.24375],
      [49.35033, -123.24363],
      [49.35002, -123.24306],
      [49.34997, -123.24287],
      [49.34975, -123.24117],
      [49.34957, -123.24113],
      [49.34943, -123.24105],
      [49.34932, -123.24089],
      [49.34925, -123.24066],
      [49.34924, -123.24046],
      [49.34924, -123.24015],
      [49.34929, -123.23991],
      [49.34935, -123.23966],
      [49.34958, -123.23899],
      [49.34969, -123.23862],
      [49.34971, -123.23838],
      CYPRESS_CREEK_W,
    ],
  },
  {
    routeNames: [ROUTES.westportMathers.name],
    description: "almondel over cypress creek",
    type: "quiet",
    elevation: 1,
    positions: [
      CYPRESS_CREEK_W,
      [49.34968, -123.23802],
      [49.34957, -123.23735],
      [49.34953, -123.2372],
      CYPRESS_CREEK_E,
    ],
  },
  {
    routeNames: [ROUTES.westportMathers.name],
    description: "almondel post-bridge",
    type: "quiet",
    elevation: 0.5,
    positions: [CYPRESS_CREEK_E, CYPRESS_CREEK_E_POST],
  },
  {
    routeNames: [ROUTES.westportMathers.name],
    description: "almondel/ripple/westridge",
    type: "quiet",
    positions: [
      CYPRESS_CREEK_E_POST,
      [49.34932, -123.23673],
      [49.34921, -123.23659],
      [49.34908, -123.23643],
      [49.34886, -123.23623],
      [49.3486, -123.23605],
      [49.34826, -123.23584],
      [49.34795, -123.23565],
      [49.34763, -123.23551],
      [49.34735, -123.23544],
      [49.34715, -123.23538],
      [49.34705, -123.23533],
      [49.34698, -123.23525],
      [49.34696, -123.23518],
      [49.34693, -123.23491],
      [49.34693, -123.23425],
      [49.34692, -123.23327],
      [49.34691, -123.23251],
      [49.34689, -123.2323],
      [49.34686, -123.2322],
      [49.3468, -123.23209],
      [49.3467, -123.23203],
      [49.34658, -123.23197],
      [49.34665, -123.23158],
      [49.34678, -123.23097],
      [49.3468, -123.23074],
      [49.34678, -123.23027],
      [49.34673, -123.22951],
      [49.3467, -123.2286],
      [49.34669, -123.22794],
      [49.34671, -123.22738],
      [49.34676, -123.227],
      [49.34685, -123.22672],
      SOUTHRIDGE_WESTRIDGE_W,
    ],
  },
  {
    routeNames: [ROUTES.westportMathers.name],
    description: "southridge",
    type: "quiet",
    positions: [
      SOUTHRIDGE_WESTRIDGE_W,
      [49.34659, -123.22612],
      [49.34639, -123.22569],
      [49.34625, -123.22521],
      [49.34619, -123.22463],
      [49.34613, -123.22428],
      [49.34601, -123.22393],
      [49.34587, -123.22371],
      [49.34564, -123.22353],
      [49.34532, -123.22325],
      [49.34519, -123.22303],
      [49.34513, -123.22272],
      [49.34509, -123.22229],
      [49.34513, -123.22184],
      [49.34527, -123.2213],
      [49.34538, -123.22085],
      [49.3454, -123.22031],
      [49.34541, -123.2195],
      [49.34543, -123.21918],
      [49.34551, -123.21893],
      SOUTHRIDGE_WESTRIDGE_E,
    ],
  },
  {
    routeNames: [ROUTES.westportMathers.name],
    description: "westridge little bit",
    type: "shared",
    positions: [
      SOUTHRIDGE_WESTRIDGE_E,
      [49.3456, -123.2186],
      WESTMOUNT_WESTRIDGE,
    ],
  },
  {
    routeNames: [ROUTES.westportMathers.name],
    description: "westmount eb westridge to rockview",
    type: "shared",
    oneWay: "required",
    positions: [
      WESTMOUNT_WESTRIDGE,
      [49.34549, -123.21843],
      [49.34539, -123.2184],
      [49.34528, -123.21833],
      [49.3452, -123.21817],
      [49.3452, -123.21803],
      [49.34525, -123.21778],
      [49.34533, -123.21751],
      [49.34544, -123.21732],
      [49.34554, -123.21709],
      [49.3456, -123.2169],
      [49.34562, -123.21669],
      [49.3456, -123.21628],
      [49.34556, -123.21564],
      [49.34554, -123.21475],
      [49.34554, -123.21451],
      [49.34557, -123.21416],
      [49.34564, -123.2135],
      ROCKVIEW_WESTMOUNT,
    ],
  },
  {
    routeNames: [ROUTES.westportMathers.name],
    description: "westmount wb rockview to westridge",
    type: "painted",
    oneWay: "required",
    positions: [
      ROCKVIEW_WESTMOUNT,
      [49.3457, -123.21351],
      [49.34564, -123.21399],
      [49.34561, -123.21447],
      [49.34561, -123.21487],
      [49.34563, -123.21548],
      [49.34565, -123.21618],
      [49.34566, -123.21656],
      [49.34565, -123.21684],
      [49.34561, -123.21708],
      [49.34553, -123.21733],
      [49.34543, -123.2175],
      [49.34537, -123.21765],
      [49.34531, -123.21784],
      [49.34529, -123.21801],
      [49.34533, -123.21818],
      [49.34539, -123.21825],
      [49.34541, -123.21828],
      [49.34547, -123.21829],
      WESTMOUNT_WESTRIDGE,
    ],
  },
  {
    routeNames: [ROUTES.westportMathers.name],
    description: "westmount: rockview to benbow",
    type: "shared",
    positions: [
      ROCKVIEW_WESTMOUNT,
      [49.34576, -123.21308],
      [49.34579, -123.21287],
      [49.3458, -123.21267],
      [49.34577, -123.21226],
      [49.34553, -123.20961],
      [49.34538, -123.20789],
      [49.34522, -123.20688],
      BENBOW_WESTMOUNT,
    ],
  },
  {
    routeNames: [ROUTES.westportMathers.name],
    description: "westmount/benbow to 31st/mathers",
    type: "shared",
    oneWay: "required",
    positions: [
      BENBOW_WESTMOUNT,
      [49.34509, -123.20676],
      [49.34502, -123.20676],
      [49.34427, -123.20687],
      [49.3442, -123.20686],
      [49.34416, -123.20673],
      [49.34401, -123.20632],
      [49.34392, -123.20616],
      [49.34383, -123.20607],
      [49.34317, -123.20556],
      [49.3431, -123.20555],
      [49.34303, -123.20555],
      [49.34298, -123.20549],
      [49.34291, -123.20533],
      [49.34267, -123.20452],
      [49.34232, -123.20359],
      [49.34221, -123.20332],
      THIRTY_FIRST_MATHERS_W,
    ],
  },
  {
    routeNames: [ROUTES.westportMathers.name],
    description: "31st: mathers to marine",
    type: "shared",
    oneWay: "required",
    positions: [
      THIRTY_FIRST_MATHERS_W,
      [49.34207, -123.20314],
      [49.3419, -123.20304],
      [49.34168, -123.20294],
      [49.34149, -123.20288],
      [49.34132, -123.20282],
      [49.34111, -123.20278],
      [49.34092, -123.20279],
      [49.34079, -123.20282],
      [49.34051, -123.20284],
      [49.34041, -123.20281],
      [49.34033, -123.20279],
      THIRTY_FIRST_MARINE_E,
    ],
  },
  {
    routeNames: [ROUTES.westportMathers.name],
    description: "31st: marine to mathers",
    type: "painted",
    oneWay: "required",
    positions: [
      THIRTY_FIRST_MARINE_NE,
      [49.34032, -123.20267],
      [49.34041, -123.20273],
      [49.34051, -123.20276],
      [49.34066, -123.20274],
      [49.34081, -123.2027],
      [49.34099, -123.20267],
      [49.34117, -123.20267],
      [49.34142, -123.20273],
      [49.34175, -123.20287],
      [49.34204, -123.20302],
      THIRTY_FIRST_MATHERS_E,
    ],
  },
  {
    routeNames: [ROUTES.westportMathers.name],
    description: "31st/mathers to westmount/benbow",
    type: "painted",
    oneWay: "required",
    positions: [
      THIRTY_FIRST_MATHERS_E,
      [49.34226, -123.20327],
      [49.34268, -123.20439],
      [49.34276, -123.20462],
      [49.34293, -123.20521],
      [49.34296, -123.20528],
      [49.34303, -123.20536],
      [49.34381, -123.20595],
      [49.34394, -123.20604],
      [49.34401, -123.20614],
      [49.34406, -123.20627],
      [49.34419, -123.20663],
      [49.34423, -123.20675],
      [49.34426, -123.20678],
      [49.3443, -123.20679],
      [49.34509, -123.20664],
      BENBOW_WESTMOUNT,
    ],
  },
  {
    routeNames: [ROUTES.westportMathers.name],
    description: "crossing 31st at mathers",
    type: "shared",
    positions: [THIRTY_FIRST_MATHERS_W, THIRTY_FIRST_MATHERS_E],
  },
  {
    routeNames: [ROUTES.westportMathers.name],
    description: "mathers/29th",
    type: "quiet",
    positions: [
      THIRTY_FIRST_MATHERS_E,
      [49.34215, -123.20292],
      [49.34195, -123.20177],
      [49.34151, -123.19956],
      [49.34144, -123.19914],
      [49.34144, -123.19903],
      [49.34147, -123.1988],
      [49.3414, -123.19864],
      [49.34131, -123.19843],
      [49.34109, -123.1976],
      [49.3401, -123.19565],
      [49.33953, -123.19338],
      TWENTY_NINTH_MARINE_N,
    ],
  },
];
