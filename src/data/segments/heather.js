import {
  CAMBIE_49TH_SE,
  CAMBIE_49TH_SW,
  HEATHER_10TH_N,
  HEATHER_10TH_S,
  HEATHER_14TH_N,
  HEATHER_14TH_S,
  HEATHER_24TH,
  HEATHER_28TH,
  HEATHER_29TH,
  HEATHER_33RD_N,
  HEATHER_37TH,
  HEATHER_49TH_S,
  HEATHER_59TH,
  HEATHER_64TH,
  HEATHER_67TH,
  HEATHER_7TH,
  HEATHER_KENT_N,
  TISDALL_46TH,
  TISDALL_49TH_SE,
  TISDALL_49TH_SW,
  WILLOW_37TH,
  WILLOW_46TH,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const HEATHER_33RD_S = [49.24112, -123.12065];
const WILLOW_35TH_SW = [49.23927, -123.12381];
const WILLOW_33RD_SW = [49.24118, -123.12371];
const HEATHER_52ND = [49.22326, -123.12369];
const NORTH_OF_49TH = [49.22709, -123.12176];

export const HEATHER = [
  // willow/33rd extras
  {
    description: "willow 37 to 35",
    type: "quiet",
    positions: [
      WILLOW_37TH,
      [49.2383, -123.12372],
      [49.23923, -123.12369],
      WILLOW_35TH_SW,
    ],
  },
  {
    description: "willow 35 to 33",
    type: "comfortable",
    positions: [
      WILLOW_35TH_SW,
      [49.23969, -123.12381],
      [49.23977, -123.12374],
      WILLOW_33RD_SW,
    ],
  },
  {
    description: "33rd eb",
    type: "painted",
    oneWay: "required",
    positions: [WILLOW_33RD_SW, [49.24122, -123.1236], HEATHER_33RD_S],
  },
  {
    description: "33rd wb",
    type: "dedicated",
    oneWay: "required",
    positions: [HEATHER_33RD_N, [49.24132, -123.12364], WILLOW_33RD_SW],
  },

  // 41st
  {
    description: "49th wb",
    type: "painted",
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
    description: "49th eb 1",
    type: "painted",
    oneWay: "required",
    positions: [
      [49.22649, -123.12773],
      [49.22645, -123.12675],
      [49.2264, -123.12519],
      HEATHER_49TH_S,
    ],
  },
  {
    routeNames: [ROUTES.heather.name],
    description: "49th eb 2",
    type: "painted",
    oneWay: "required",
    positions: [HEATHER_49TH_S, TISDALL_49TH_SW],
  },
  {
    routeNames: [ROUTES.heather.name],
    description: "49th eb 3",
    type: "painted",
    oneWay: "required",
    videos: [VIDEOS.heatherSb.id, VIDEOS.cambieSb.id],
    positions: [TISDALL_49TH_SW, TISDALL_49TH_SE],
  },
  {
    description: "49th eb 4",
    type: "painted",
    oneWay: "required",
    videos: [VIDEOS.cambieSb.id],
    positions: [
      TISDALL_49TH_SE,
      [49.22617, -123.11896],
      [49.22613, -123.11807],
      CAMBIE_49TH_SW,
    ],
  },
  {
    description: "41st eb 5",
    type: "painted",
    oneWay: "required",
    positions: [CAMBIE_49TH_SW, CAMBIE_49TH_SE],
  },

  // primary
  {
    routeNames: [ROUTES.heather.name],
    description: "kent to 67",
    type: "quiet",
    videos: [VIDEOS.heatherSb.id],
    videosEndAtStart: [VIDEOS.heatherSb.id],
    positions: [
      HEATHER_KENT_N,
      [49.20698, -123.12434],
      [49.20719, -123.12451],
      [49.2073, -123.12427],
      [49.20742, -123.12423],
      [49.20838, -123.12421],
      [49.20954, -123.12417],
      HEATHER_67TH,
    ],
  },
  {
    routeNames: [ROUTES.heather.name],
    description: "67 to 64",
    type: "quiet",
    videos: [VIDEOS.heatherSb.id, VIDEOS.sixtySeventhPlusWb.id],
    positions: [HEATHER_67TH, [49.21136, -123.1241], HEATHER_64TH],
  },
  {
    routeNames: [ROUTES.heather.name],
    description: "64 to 52",
    videos: [VIDEOS.heatherSb.id],
    type: "quiet",
    positions: [
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
    routeNames: [ROUTES.heather.name],
    description: "nb to 49th",
    type: "quiet",
    oneWay: "recommended",
    positions: [
      HEATHER_52ND,
      [49.22386, -123.12368],
      [49.22545, -123.12362],
      HEATHER_49TH_S,
    ],
  },
  {
    routeNames: [ROUTES.heather.name],
    description: "sb from 49th",
    type: "quiet",
    oneWay: "recommended",
    videos: [VIDEOS.heatherSb.id],
    positions: [
      TISDALL_49TH_SE,
      [49.22537, -123.12091],
      [49.22356, -123.12095],
      [49.22325, -123.12294],
      HEATHER_52ND,
    ],
  },
  {
    routeNames: [ROUTES.heather.name],
    description: "just north of 49th",
    type: "quiet",
    videos: [VIDEOS.heatherSb.id, VIDEOS.cambieSb.id],
    videosStartAtEnd: [VIDEOS.cambieSb.id],
    positions: [TISDALL_49TH_SW, NORTH_OF_49TH],
  },
  {
    routeNames: [ROUTES.heather.name],
    description: "just north of 49th to 46th",
    type: "quiet",
    videos: [VIDEOS.heatherSb.id],
    positions: [NORTH_OF_49TH, TISDALL_46TH],
  },
  {
    routeNames: [ROUTES.heather.name],
    description: "46th to 37th",
    type: "quiet",
    videos: [VIDEOS.heatherSb.id],
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
    routeNames: [ROUTES.heather.name],
    description: "37th to 29th",
    type: "quiet",
    videos: [VIDEOS.heatherSb.id],
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
    routeNames: [ROUTES.heather.name, ROUTES.twentyNinth.name],
    description: "29th",
    type: "quiet",
    videos: [VIDEOS.heatherSb.id, VIDEOS.twentyNinthWb.id],
    positions: [HEATHER_28TH, HEATHER_29TH],
  },
  {
    routeNames: [ROUTES.heather.name],
    description: "28th to 14th",
    type: "quiet",
    videos: [VIDEOS.heatherSb.id],
    positions: [
      HEATHER_28TH,
      [49.2471, -123.12045],
      [49.248, -123.12042],
      [49.24907, -123.12038],
      HEATHER_24TH,
      [49.25156, -123.1203],
      [49.25339, -123.12023],
      [49.2552, -123.12016],
      [49.257, -123.1201],
      [49.25771, -123.12008],
      HEATHER_14TH_S,
    ],
  },
  {
    routeNames: [ROUTES.heather.name, ROUTES.fourteenth.name],
    description: "14th",
    type: "quiet",
    videos: [VIDEOS.heatherSb.id, VIDEOS.fourteenthWb.id],
    positions: [HEATHER_14TH_S, HEATHER_14TH_N],
  },
  {
    routeNames: [ROUTES.heather.name],
    description: "14th to 7th",
    type: "quiet",
    videos: [VIDEOS.heatherSb.id],
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
