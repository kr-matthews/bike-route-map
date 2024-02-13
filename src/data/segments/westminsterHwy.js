import {
  BOUNDARY_WESTMINSTER_EN,
  BOUNDARY_WESTMINSTER_ES,
  FRASERWOOD_WESTMINSTER_CONNECTION_S,
} from "../intersections";
import { ROUTES } from "../routes";

const HIGHWAY_99_WESTMINSTER_SW = [49.17017, -123.08737];
const HIGHWAY_99_WESTMINSTER_SE = [49.17017, -123.08644];
const HIGHWAY_99_WESTMINSTER_NE = [49.17038, -123.08656];
const HIGHWAY_99_WESTMINSTER_NW = [49.17038, -123.0875];
const KATSURA_WESTMINSTER_N = [49.17027, -123.12251];
const NO_6_WESTMINSTER_NW = [49.1703, -123.06936];
const WESTMINSTER_PATH_START_NEAR_NO_6 = [49.16989, -123.06686];
const NO_6_WESTMINSTER_S_W = [49.16994, -123.06932];
const NO_6_WESTMINSTER_SW = [49.1701, -123.06936];
const MCMILLAN_WESTMINSTER_SW = [49.16913, -122.99412];
const WESTMINSTER_WB_BEFORE_EAST_WEST = [49.17094, -122.97238];
const WESTMINSTER_EAST_WEST_SE = [49.16908, -122.9724];
const WESTMINSTER_EAST_WEST_NE = [49.16989, -122.97235];
const WESTMINSTER_EAST_WEST_NW = [49.16985, -122.97264];
const WESTMINSTER_EAST_WEST_SW = [49.16904, -122.9727];
const WESTMINSTER_EAST_WEST_AFTER_OVERPASS = [49.17089, -122.97221];
const WESTMINSTER_EB_BEFORE_GILLEY = [49.17656, -122.96879];
const NB_PATH_AFTER_GILLEY = [49.17883, -122.96743];
const SMITH_WESTMINSTER_SW = [49.18163, -122.96432];
const SMITH_WESTMINSTER_NW = [49.18174, -122.96437];
const RIVER_WESTMINSTER_NE = [49.18134, -122.96545];
const WESTMINSTER_FRASERSIDE_NW = [49.17799, -122.96811];
const WESTMINSTER_GILLEY_SW = [49.177, -122.96871];

const FRASERWOOD_WESTMINSTER_CONNECTION_N_S = [49.16813, -122.97589];
const FRASERWOOD_WESTMINSTER_CONNECTION_N_N = [49.16831, -122.9758];

export const WESTMINSTER_HWY = [
  {
    description: "fraserwood trail connection",
    type: "mixed",
    positions: [
      FRASERWOOD_WESTMINSTER_CONNECTION_S,
      [49.16715, -122.97578],
      [49.16811, -122.97587],
      FRASERWOOD_WESTMINSTER_CONNECTION_N_S,
      FRASERWOOD_WESTMINSTER_CONNECTION_N_N,
    ],
  },

  {
    routeNames: [ROUTES.westminsterHwy.name],
    description: "eb: garden city to highway 99",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    positions: [
      // GARDEN_CITY_WESTMINSTER_SE,
      [49.17003, -123.12419],
      [49.17005, -123.12223],
      [49.17006, -123.11931],
      // BIRCH_WESTMINSTER_S,
      [49.17005, -123.11414],
      [49.17005, -123.10838],
      // SHELL_WESTMINSTER_SE,
      [49.17, -123.09512],
      [49.17011, -123.09393],
      [49.17017, -123.09312],
      [49.1702, -123.09228],
      [49.1702, -123.09196],
      [49.1702, -123.09059],
      [49.17018, -123.08833],
      [49.17017, -123.08815],
      [49.17015, -123.08806],
      [49.17018, -123.08791],
      HIGHWAY_99_WESTMINSTER_SW,
    ],
  },
  {
    routeNames: [ROUTES.westminsterHwy.name],
    description: "eb: highway 99 overpass",
    type: "other",
    oneWay: "required",
    elevation: 1,
    positions: [HIGHWAY_99_WESTMINSTER_SW, HIGHWAY_99_WESTMINSTER_SE],
  },
  {
    routeNames: [ROUTES.westminsterHwy.name],
    description: "eb: highway 99 to beyond no. 6",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    positions: [
      HIGHWAY_99_WESTMINSTER_SE,
      [49.17017, -123.08476],
      [49.17017, -123.08457],
      [49.17011, -123.08448],
      [49.17017, -123.08385],
      [49.17017, -123.08039],
      [49.17014, -123.07443],
      NO_6_WESTMINSTER_SW,
      [49.17008, -123.06857],
      [49.17005, -123.06795],
      [49.16995, -123.06705],
      WESTMINSTER_PATH_START_NEAR_NO_6,
    ],
  },
  {
    routeNames: [ROUTES.westminsterHwy.name],
    description: "wb: no.6 to highway 99",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    positions: [
      NO_6_WESTMINSTER_NW,
      [49.17034, -123.07446],
      [49.17036, -123.08038],
      HIGHWAY_99_WESTMINSTER_NE,
    ],
  },
  {
    routeNames: [ROUTES.westminsterHwy.name],
    description: "wb: highway 99 overpass",
    type: "other",
    oneWay: "required",
    elevation: 1,
    positions: [HIGHWAY_99_WESTMINSTER_NE, HIGHWAY_99_WESTMINSTER_NW],
  },
  {
    routeNames: [ROUTES.westminsterHwy.name],
    description: "wb: highway 99 to garden city",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    positions: [
      HIGHWAY_99_WESTMINSTER_NW,
      [49.17038, -123.08937],
      [49.17039, -123.09081],
      [49.17042, -123.09094],
      [49.17039, -123.0911],
      [49.17039, -123.09227],
      [49.17036, -123.09302],
      [49.17032, -123.09389],
      [49.17028, -123.09403],
      [49.17027, -123.0942],
      [49.17022, -123.09488],
      [49.17025, -123.10257],
      // SHELL_WESTMINSTER_NE,
      [49.17027, -123.11415],
      [49.17028, -123.1193],
      KATSURA_WESTMINSTER_N,
      // GARDEN_CITY_WESTMINSTER_NE,
    ],
  },
  {
    routeNames: [ROUTES.westminsterHwy.name],
    description: "wb: continue straight at garden city",
    type: "shoulder",
    oneWay: "required",
    positions: [KATSURA_WESTMINSTER_N, [49.17021, -123.12431]],
  },
  {
    routeNames: [ROUTES.westminsterHwy.name],
    description: "path from no. 6 to mcmillan",
    type: "mixed",
    positions: [
      WESTMINSTER_PATH_START_NEAR_NO_6,
      [49.16985, -123.06649],
      [49.16984, -123.06525],
      [49.16984, -123.05926],
      [49.16983, -123.04669],
      [49.16984, -123.0355],
      [49.16984, -123.02442],
      [49.16982, -123.02414],
      [49.16982, -123.02359],
      [49.16983, -123.02334],
      [49.16983, -123.01927],
      [49.16982, -123.01647],
      [49.1698, -123.01621],
      [49.1698, -123.01598],
      [49.16982, -123.01579],
      [49.16981, -123.01531],
      [49.16977, -123.01439],
      [49.16977, -123.01348],
      [49.16974, -123.0133],
      [49.16971, -123.01321],
      [49.16977, -123.01309],
      [49.16977, -123.01275],
      [49.16976, -123.0127],
      [49.16969, -123.01259],
      [49.16972, -123.0125],
      [49.16974, -123.01234],
      [49.16975, -123.01215],
      [49.16974, -123.01072],
      [49.16973, -123.01047],
      [49.16971, -123.01028],
      [49.16967, -123.0099],
      [49.1696, -123.00955],
      [49.16927, -123.00802],
      [49.16916, -123.00745],
      [49.16912, -123.00709],
      [49.16908, -123.00658],
      [49.16906, -123.0062],
      [49.16901, -123.00332],
      [49.16896, -123.00196],
      [49.16896, -123.00047],
      [49.16897, -122.99877],
      [49.16898, -122.99839],
      [49.1691, -122.9958],
      MCMILLAN_WESTMINSTER_SW,
    ],
  },
  {
    routeNames: [ROUTES.westminsterHwy.name],
    description: "dead-end westminster east of no.6",
    type: "comfortable",
    positions: [
      NO_6_WESTMINSTER_S_W,
      [49.16992, -123.06916],
      [49.16991, -123.06792],
      WESTMINSTER_PATH_START_NEAR_NO_6,
    ],
  },
  // !! move to no. 6
  {
    routeNames: [ROUTES.westminsterHwy.name],
    description: "no. 6 crossing westminster",
    type: "mixed",
    positions: [
      NO_6_WESTMINSTER_S_W,
      [49.17005, -123.06931],
      NO_6_WESTMINSTER_SW,
      NO_6_WESTMINSTER_NW,
    ],
  },
  {
    routeNames: [ROUTES.westminsterHwy.name],
    description: "eb: path to east-west overpass",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    positions: [
      MCMILLAN_WESTMINSTER_SW,
      [49.1692, -122.99378],
      [49.16924, -122.99185],
      [49.16925, -122.98973],
      [49.16926, -122.98615],
      [49.16923, -122.98373],
      [49.16919, -122.98169],
      [49.16912, -122.98048],
      [49.16903, -122.97961],
      [49.16888, -122.9788],
      [49.16871, -122.97814],
      [49.16838, -122.97693],
      [49.16824, -122.97632],
      FRASERWOOD_WESTMINSTER_CONNECTION_N_S,
      [49.16803, -122.97539],
      [49.16797, -122.97499],
      [49.16795, -122.97466],
      [49.16796, -122.97437],
      [49.16797, -122.97412],
      [49.168, -122.97388],
      [49.16805, -122.97368],
      [49.16809, -122.97348],
      [49.16813, -122.97336],
      [49.16818, -122.97337],
      [49.16826, -122.97316],
      [49.16841, -122.97291],
      [49.1686, -122.97269],
      [49.1687, -122.97259],
      [49.16886, -122.97249],
      [49.16901, -122.97242],
      WESTMINSTER_EAST_WEST_SE,
    ],
  },
  {
    routeNames: [ROUTES.westminsterHwy.name],
    description: "eb: east-west overpass",
    type: "shoulder",
    oneWay: "required",
    elevation: 1,
    positions: [
      WESTMINSTER_EAST_WEST_SE,
      [49.16931, -122.97236],
      WESTMINSTER_EAST_WEST_NE,
    ],
  },
  {
    routeNames: [ROUTES.westminsterHwy.name],
    description: "eb: after east-west overpass",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    positions: [
      WESTMINSTER_EAST_WEST_NE,
      [49.17024, -122.97234],
      [49.17044, -122.97231],
      [49.17067, -122.97228],
      WESTMINSTER_EAST_WEST_AFTER_OVERPASS,
    ],
  },
  {
    routeNames: [ROUTES.westminsterHwy.name],
    description: "eb: east-west to gilley",
    type: "painted",
    oneWay: "required",
    positions: [
      WESTMINSTER_EAST_WEST_AFTER_OVERPASS,
      [49.17126, -122.97197],
      [49.17227, -122.97132],
      [49.1735, -122.97063],
      [49.17398, -122.97034],
      [49.17562, -122.96936],
      WESTMINSTER_EB_BEFORE_GILLEY,
    ],
  },
  {
    routeNames: [ROUTES.westminsterHwy.name],
    description: "eb: around gilley",
    type: "shared",
    oneWay: "required",
    positions: [
      WESTMINSTER_EB_BEFORE_GILLEY,
      [49.17704, -122.96852],
      [49.17826, -122.96778],
      [49.1788, -122.96747],
      NB_PATH_AFTER_GILLEY,
    ],
  },
  {
    routeNames: [ROUTES.westminsterHwy.name],
    description: "eb: gilley to smith",
    type: "mixed",
    oneWay: "required",
    positions: [
      NB_PATH_AFTER_GILLEY,
      [49.1797, -122.96691],
      [49.18031, -122.96655],
      [49.18068, -122.96625],
      [49.18103, -122.96581],
      [49.18125, -122.96543],
      [49.18151, -122.96483],
      SMITH_WESTMINSTER_SW,
    ],
  },
  {
    routeNames: [ROUTES.westminsterHwy.name],
    description: "eb: smith to boundary",
    type: "painted",
    oneWay: "required",
    positions: [
      SMITH_WESTMINSTER_SW,
      [49.18174, -122.96383],
      [49.18178, -122.96341],
      [49.18178, -122.96276],
      [49.18178, -122.96229],
      [49.18183, -122.96193],
      [49.18193, -122.96159],
      [49.18212, -122.9612],
      [49.18268, -122.96035],
      [49.18303, -122.9597],
      [49.18325, -122.95918],
      [49.18337, -122.9588],
      [49.18363, -122.95779],
      BOUNDARY_WESTMINSTER_ES,
    ],
  },
  {
    routeNames: [ROUTES.westminsterHwy.name],
    description: "wb: boundary to smith",
    type: "painted",
    oneWay: "required",
    positions: [
      BOUNDARY_WESTMINSTER_EN,
      [49.18382, -122.95742],
      [49.18376, -122.95779],
      [49.18366, -122.95821],
      [49.18339, -122.95909],
      [49.18319, -122.9596],
      [49.18295, -122.96009],
      [49.18266, -122.96058],
      [49.18243, -122.96095],
      [49.18221, -122.96129],
      [49.18212, -122.96144],
      [49.18205, -122.96158],
      [49.182, -122.9617],
      [49.18193, -122.96196],
      [49.1819, -122.96213],
      [49.18189, -122.96237],
      [49.18189, -122.96304],
      [49.18186, -122.96367],
      [49.18182, -122.96401],
      SMITH_WESTMINSTER_NW,
    ],
  },
  {
    routeNames: [ROUTES.westminsterHwy.name],
    description: "wb: smith to river",
    type: "shared",
    oneWay: "required",
    positions: [
      SMITH_WESTMINSTER_NW,
      [49.18171, -122.96441],
      [49.18159, -122.96487],
      RIVER_WESTMINSTER_NE,
    ],
  },
  {
    routeNames: [ROUTES.westminsterHwy.name],
    description: "wb: river to fraserside",
    type: "mixed",
    oneWay: "required",
    positions: [
      RIVER_WESTMINSTER_NE,
      [49.1813, -122.96558],
      [49.1811, -122.96594],
      [49.18075, -122.96637],
      [49.1804, -122.9667],
      [49.17971, -122.96709],
      WESTMINSTER_FRASERSIDE_NW,
    ],
  },
  {
    routeNames: [ROUTES.westminsterHwy.name],
    description: "wb: fraserside to gilley",
    type: "shared",
    oneWay: "required",
    positions: [
      WESTMINSTER_FRASERSIDE_NW,
      [49.17789, -122.96814],
      [49.17709, -122.96864],
      WESTMINSTER_GILLEY_SW,
    ],
  },
  {
    routeNames: [ROUTES.westminsterHwy.name],
    description: "wb: gilley to east-west",
    type: "painted",
    oneWay: "required",
    positions: [
      WESTMINSTER_GILLEY_SW,
      [49.17545, -122.96966],
      [49.17464, -122.97012],
      [49.17404, -122.97047],
      [49.17269, -122.97123],
      [49.17165, -122.97191],
      [49.17138, -122.97211],
      WESTMINSTER_WB_BEFORE_EAST_WEST,
    ],
  },
  {
    routeNames: [ROUTES.westminsterHwy.name],
    description: "wb: before east-west overpass",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    positions: [
      WESTMINSTER_WB_BEFORE_EAST_WEST,
      [49.17058, -122.97256],
      [49.17046, -122.97263],
      [49.1704, -122.97259],
      [49.17021, -122.97263],
      WESTMINSTER_EAST_WEST_NW,
    ],
  },
  {
    routeNames: [ROUTES.westminsterHwy.name],
    description: "wb: east-west overpass",
    type: "shoulder",
    oneWay: "required",
    elevation: 1,
    positions: [
      WESTMINSTER_EAST_WEST_NW,
      [49.16932, -122.97265],
      WESTMINSTER_EAST_WEST_SW,
    ],
  },
  {
    routeNames: [ROUTES.westminsterHwy.name],
    description: "wb: east-west overpass to path",
    type: "shoulder",
    oneWay: "required",
    elevation: 0.5,
    positions: [
      WESTMINSTER_EAST_WEST_SW,
      [49.16891, -122.97275],
      [49.16882, -122.97282],
      [49.16872, -122.97289],
      [49.1686, -122.97302],
      [49.16852, -122.97314],
      [49.16842, -122.9733],
      [49.16832, -122.97354],
      [49.16824, -122.9738],
      [49.16818, -122.97408],
      [49.16814, -122.97434],
      [49.16814, -122.97461],
      [49.16815, -122.97484],
      [49.16818, -122.9751],
      [49.16824, -122.97546],
      FRASERWOOD_WESTMINSTER_CONNECTION_N_N,
      [49.16861, -122.9771],
      [49.16894, -122.97839],
      [49.16908, -122.97898],
      [49.16914, -122.97934],
      [49.1692, -122.97984],
      [49.16927, -122.98065],
      [49.1693, -122.98134],
      [49.16935, -122.98373],
      [49.16938, -122.98618],
      [49.16937, -122.98974],
      [49.16938, -122.99182],
      [49.1693, -122.99413],
      MCMILLAN_WESTMINSTER_SW,
    ],
  },
];
