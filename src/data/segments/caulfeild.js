import {
  KEITH_MARINE,
  NORTHWOOD_WESTPORT,
  THE_DALE_MARINE,
} from "../intersections";
import { ROUTES } from "../routes";

const HEADLAND_DECOURCY = [49.34266, -123.25676];
const DECOURCY_E = [49.34272, -123.25568];
const CAULFEILD_LANE_W = [49.34294, -123.25496];
const CAULFEILD_KEITH = [49.34359, -123.25247];
const WILLOW_CREEK_CAULFEILD = [49.3489, -123.24592];
const NORTHWOOD_OVERPASS_S = [49.35127, -123.25177];
const NORTHWOOD_OVERPASS_N = [49.35197, -123.25126];

export const CAULFEILD = [
  {
    routeNames: [ROUTES.caulfeild.name],
    description: "keith, willow creek",
    type: "shared",
    positions: [
      KEITH_MARINE,
      [49.3412, -123.24175],
      [49.34162, -123.24123],
      [49.34183, -123.24104],
      [49.34199, -123.24098],
      [49.34211, -123.24097],
      [49.34224, -123.24101],
      [49.34296, -123.24134],
      [49.34391, -123.24179],
      [49.34461, -123.24211],
      [49.34477, -123.24223],
      [49.34496, -123.2424],
      [49.34507, -123.24254],
      [49.34515, -123.24268],
      [49.34529, -123.24299],
      [49.34538, -123.24321],
      [49.34542, -123.24333],
      [49.3455, -123.24333],
      [49.34559, -123.24335],
      [49.34629, -123.24377],
      [49.34646, -123.24389],
      [49.34658, -123.244],
      [49.34671, -123.24414],
      [49.34685, -123.24437],
      [49.34708, -123.24482],
      [49.34718, -123.24497],
      [49.34726, -123.24506],
      [49.34734, -123.2451],
      [49.34746, -123.24513],
      [49.348, -123.2451],
      [49.3481, -123.24514],
      [49.34823, -123.24523],
      WILLOW_CREEK_CAULFEILD,
    ],
  },
  {
    routeNames: [ROUTES.caulfeild.name],
    description: "dale, headland",
    type: "shared",
    positions: [
      THE_DALE_MARINE,
      [49.34109, -123.25877],
      [49.34124, -123.25878],
      [49.34135, -123.25884],
      [49.34142, -123.25892],
      [49.34148, -123.25908],
      [49.34165, -123.25981],
      [49.34168, -123.25996],
      [49.34174, -123.26006],
      [49.34179, -123.26013],
      [49.34186, -123.26021],
      [49.34208, -123.26043],
      [49.34215, -123.26046],
      [49.34222, -123.26035],
      [49.34227, -123.26024],
      [49.3424, -123.25993],
      [49.34243, -123.25982],
      [49.34244, -123.25967],
      [49.34243, -123.25918],
      [49.34239, -123.25881],
      [49.34232, -123.2584],
      [49.34222, -123.25789],
      [49.34215, -123.25748],
      [49.34212, -123.25723],
      [49.34213, -123.25705],
      [49.34215, -123.25693],
      [49.34218, -123.25684],
      [49.34224, -123.25676],
      [49.34231, -123.25674],
      [49.34262, -123.25674],
      HEADLAND_DECOURCY,
    ],
  },
  {
    routeNames: [ROUTES.caulfeild.name],
    description: "decourcy",
    type: "quiet",
    positions: [
      HEADLAND_DECOURCY,
      [49.3427, -123.25664],
      [49.34271, -123.25652],
      [49.34272, -123.25582],
      DECOURCY_E,
    ],
  },
  {
    routeNames: [ROUTES.caulfeild.name],
    description: "path",
    type: "mixed",
    positions: [
      DECOURCY_E,
      [49.34275, -123.25559],
      [49.34279, -123.2555],
      [49.34289, -123.25513],
      CAULFEILD_LANE_W,
    ],
  },
  {
    routeNames: [ROUTES.caulfeild.name],
    description: "caulfeild quiet",
    type: "quiet",
    positions: [
      CAULFEILD_LANE_W,
      [49.34298, -123.25486],
      [49.34301, -123.2547],
      [49.343, -123.25455],
      [49.34298, -123.25444],
      [49.34273, -123.25372],
      [49.34268, -123.25354],
      [49.34265, -123.25338],
      [49.34264, -123.25313],
      [49.34265, -123.25296],
      [49.34268, -123.25284],
      [49.34278, -123.25256],
      [49.34283, -123.25252],
      [49.34292, -123.25249],
      [49.34349, -123.25247],
      CAULFEILD_KEITH,
    ],
  },
  {
    routeNames: [ROUTES.caulfeild.name],
    description: "caulfeild busy",
    type: "shared",
    positions: [
      CAULFEILD_KEITH,
      [49.3437, -123.25249],
      [49.34505, -123.25313],
      [49.34522, -123.25321],
      [49.34534, -123.25323],
      [49.34546, -123.25321],
      [49.34558, -123.25315],
      [49.34568, -123.25301],
      [49.34574, -123.25289],
      [49.34578, -123.25273],
      [49.34605, -123.25084],
      [49.34612, -123.25044],
      [49.34634, -123.24941],
      [49.34644, -123.24905],
      [49.34664, -123.24854],
      [49.34675, -123.24834],
      [49.34753, -123.24704],
      [49.34759, -123.2469],
      [49.34764, -123.24669],
      [49.34812, -123.24653],
      [49.34854, -123.24636],
      [49.34872, -123.24624],
      [49.34883, -123.24611],
      [49.34888, -123.246],
      WILLOW_CREEK_CAULFEILD,
    ],
  },
  {
    routeNames: [ROUTES.caulfeild.name],
    description: "northwood, caulfeild",
    type: "shared",
    elevation: 0.5,
    positions: [
      WILLOW_CREEK_CAULFEILD,
      [49.34904, -123.24563],
      [49.34916, -123.24491],
      [49.3492, -123.24479],
      [49.34927, -123.24474],
      [49.34934, -123.24474],
      [49.34946, -123.24484],
      [49.34958, -123.24502],
      [49.3498, -123.24543],
      [49.34994, -123.24567],
      [49.35007, -123.24586],
      [49.35023, -123.24603],
      [49.35034, -123.24613],
      [49.35062, -123.24628],
      [49.35068, -123.24636],
      [49.35073, -123.24648],
      [49.35081, -123.24686],
      [49.3509, -123.2474],
      [49.35095, -123.24786],
      [49.35097, -123.24831],
      [49.35097, -123.24889],
      [49.35093, -123.24931],
      [49.35087, -123.24971],
      [49.35077, -123.2502],
      [49.35067, -123.25059],
      [49.35052, -123.25108],
      [49.35048, -123.25122],
      [49.35046, -123.25136],
      [49.35046, -123.25151],
      [49.35049, -123.25167],
      [49.35053, -123.25179],
      [49.35069, -123.25204],
      [49.3508, -123.25216],
      [49.35093, -123.25205],
      [49.35114, -123.25188],
      NORTHWOOD_OVERPASS_S,
    ],
  },
  {
    routeNames: [ROUTES.caulfeild.name],
    description: "northwood overpass",
    type: "shared",
    elevation: 1,
    positions: [
      NORTHWOOD_OVERPASS_S,
      [49.35161, -123.25151],
      NORTHWOOD_OVERPASS_N,
    ],
  },
  {
    routeNames: [ROUTES.caulfeild.name],
    description: "northwood n",
    type: "shared",
    elevation: 0.5,
    positions: [NORTHWOOD_OVERPASS_N, NORTHWOOD_WESTPORT],
  },
];