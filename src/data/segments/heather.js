import {
  CAMBIE_49TH_SW,
  HEATHER_10TH_N,
  HEATHER_10TH_S,
  HEATHER_14TH_N,
  HEATHER_14TH_S,
  HEATHER_28TH,
  HEATHER_29TH,
  HEATHER_33RD_N,
  HEATHER_33RD_S,
  HEATHER_37TH,
  HEATHER_49TH_S,
  HEATHER_52ND,
  HEATHER_59TH,
  HEATHER_64TH,
  HEATHER_67TH,
  HEATHER_7TH,
  HEATHER_KENT_N,
  TISDALL_46TH,
  TISDALL_49TH_SE,
  TISDALL_49TH_SW,
  WILLOW_33RD_SW,
  WILLOW_37TH,
  WILLOW_46TH,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const HEATHER = [
  // willow/33rd extras
  {
    description: "willow extra",
    positions: [
      WILLOW_37TH,
      [49.2383, -123.12372],
      [49.23923, -123.12369],
      [49.23927, -123.12381],
      [49.23969, -123.12381],
      [49.23977, -123.12374],
      WILLOW_33RD_SW,
    ],
  },
  {
    description: "33rd eb",
    oneWay: "required",
    positions: [WILLOW_33RD_SW, [49.24122, -123.1236], HEATHER_33RD_S],
  },
  {
    description: "33rd wb",
    oneWay: "required",
    positions: [HEATHER_33RD_N, [49.24132, -123.12364], WILLOW_33RD_SW],
  },
  // 41st
  {
    description: "41st wb",
    oneWay: "required",
    positions: [
      [49.2262, -123.11726],
      [49.2263, -123.12042],
      [49.22642, -123.12361],
      [49.22654, -123.12669],
      [49.22659, -123.12771],
    ],
  },
  {
    description: "41st eb 1",
    oneWay: "required",
    positions: [
      [49.22649, -123.12773],
      [49.22645, -123.12675],
      [49.2264, -123.12519],
      HEATHER_49TH_S,
    ],
  },
  {
    routes: [ROUTES.heather.name],
    description: "41st eb 2",
    oneWay: "required",
    positions: [HEATHER_49TH_S, TISDALL_49TH_SW],
  },
  {
    routes: [ROUTES.heather.name],
    description: "41st eb 3",
    oneWay: "required",
    positions: [TISDALL_49TH_SW, TISDALL_49TH_SE],
  },
  {
    description: "41st eb 4",
    oneWay: "required",
    positions: [
      TISDALL_49TH_SE,
      [49.22617, -123.11896],
      [49.22613, -123.11807],
      CAMBIE_49TH_SW,
    ],
  },
  // rest
  {
    routes: [ROUTES.heather.name],
    description: "marpole",
    positions: [
      HEATHER_KENT_N,
      [49.20698, -123.12434],
      [49.20719, -123.12451],
      [49.2073, -123.12427],
      [49.20742, -123.12423],
      [49.20838, -123.12421],
      [49.20954, -123.12417],
      HEATHER_67TH,
      [49.21136, -123.1241],
      HEATHER_64TH,
      [49.21334, -123.12403],
      [49.21469, -123.12399],
      [49.21607, -123.12394],
      HEATHER_59TH,
      [49.21815, -123.12388],
      [49.21916, -123.12385],
      [49.22147, -123.12377],
      HEATHER_52ND,
    ],
  },
  {
    routes: [ROUTES.heather.name],
    description: "nb to 49th",
    oneWay: "recommended",
    positions: [
      HEATHER_52ND,
      [49.22386, -123.12368],
      [49.22545, -123.12362],
      HEATHER_49TH_S,
    ],
  },
  {
    routes: [ROUTES.heather.name],
    description: "sb from 49th",
    oneWay: "recommended",
    positions: [
      TISDALL_49TH_SE,
      [49.22537, -123.12091],
      [49.22356, -123.12095],
      [49.22325, -123.12294],
      HEATHER_52ND,
    ],
  },
  {
    routes: [ROUTES.heather.name],
    description: "49th to 46th",
    positions: [TISDALL_49TH_SW, TISDALL_46TH],
  },
  {
    routes: [ROUTES.heather.name],
    description: "46th to 37th",
    positions: [
      WILLOW_46TH,
      [49.23053, -123.12336],
      [49.23086, -123.12343],
      [49.23177, -123.12386],
      [49.23208, -123.12392],
      [49.23288, -123.12391],
      [49.23381, -123.12387],
      [49.23566, -123.1238],
      WILLOW_37TH,
    ],
  },
  {
    routes: [ROUTES.heather.name],
    description: "37th to 29th",
    positions: [
      HEATHER_37TH,
      [49.23982, -123.1207],
      HEATHER_33RD_S,
      HEATHER_33RD_N,
      [49.24223, -123.12061],
      [49.24327, -123.12056],
      [49.24434, -123.12053],
      HEATHER_29TH,
    ],
  },
  {
    routes: [ROUTES.heather.name, ROUTES.twentyNinth.name],
    description: "29th",
    positions: [HEATHER_28TH, HEATHER_29TH],
  },
  {
    routes: [ROUTES.heather.name],
    description: "28th to 14th",
    positions: [
      HEATHER_28TH,
      [49.2471, -123.12045],
      [49.248, -123.12042],
      [49.24907, -123.12038],
      [49.25009, -123.12034],
      [49.25156, -123.1203],
      [49.25339, -123.12023],
      [49.2552, -123.12016],
      [49.257, -123.1201],
      [49.25771, -123.12008],
      HEATHER_14TH_S,
    ],
  },
  {
    routes: [ROUTES.heather.name, ROUTES.fourteenth.name],
    description: "14th",
    videos: [VIDEOS.fourteenthWb],
    positions: [HEATHER_14TH_S, HEATHER_14TH_N],
  },
  {
    routes: [ROUTES.heather.name],
    description: "14th to 7th",
    positions: [
      HEATHER_14TH_N,
      [49.2595, -123.12003],
      [49.26048, -123.11998],
      HEATHER_10TH_S,
      HEATHER_10TH_N,
      [49.2633, -123.11988],
      HEATHER_7TH,
    ],
  },
];
