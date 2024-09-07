import {
  ALDER_7TH,
  ARBUTUS_GREENWAY_7TH,
  ASH_7TH_E,
  ASH_7TH_W,
  BALACLAVA_8TH,
  BLANCA_8TH_E,
  BURRARD_7TH_W,
  COLUMBIA_5TH,
  CYPRESS_7TH,
  DISCOVERY_8TH,
  GLEN_7TH,
  GRANDVIEW_8TH_N,
  HEATHER_7TH,
  HIGHBURY_8TH,
  LAKEWOOD_8TH,
  LAUREL_7TH,
  ONTARIO_5TH,
  QUEBEC_5TH,
  TRAFALGAR_8TH,
  WOODLAND_7TH,
  YEW_10TH,
  YEW_8TH,
  YUKON_5TH_E,
  YUKON_5TH_W,
  YUKON_7TH_NE,
  YUKON_7TH_NW,
  YUKON_7TH_SE,
  YUKON_7TH_SW,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const WEST_OF_HIGHBURY = [49.26528, -123.18939];
const CAMBIE_7TH_W = [49.26496, -123.11495];
const GRANDVIEW_8TH_N_E = [49.26326, -123.068];

export const OFF_BROADWAY = [
  {
    description: "yew connection with 10th",
    type: "quiet",
    videoIds: [VIDEOS.arbutusGreenwayNb.id],
    positions: [YEW_10TH, YEW_8TH],
  },

  {
    routeNames: [ROUTES.offBroadway.name, ROUTES.ridgeway.name],
    description: "ridgeway overlap",
    type: "quiet",
    videoIds: [
      VIDEOS.offBroadwayEb.id,
      VIDEOS.offBroadwayWb.id,
      VIDEOS.ridgewayWb.id,
    ],
    videoIdsEndAtStart: [VIDEOS.offBroadwayWb.id, VIDEOS.ridgewayWb.id],
    positions: [
      BLANCA_8TH_E,
      [49.26563, -123.2121],
      [49.26559, -123.20901],
      [49.26554, -123.206],
      DISCOVERY_8TH,
    ],
  },
  {
    routeNames: [ROUTES.offBroadway.name],
    description: "west of highbury",
    type: "quiet",
    videoIds: [VIDEOS.offBroadwayEb.id, VIDEOS.offBroadwayWb.id],
    positions: [
      DISCOVERY_8TH,
      [49.26547, -123.20139],
      [49.26543, -123.19979],
      [49.26539, -123.19691],
      [49.26537, -123.19558],
      [49.26536, -123.19514],
      [49.26533, -123.19476],
      [49.26511, -123.19344],
      [49.26521, -123.19341],
      [49.26529, -123.19335],
      [49.26533, -123.19323],
      [49.26533, -123.19309],
      WEST_OF_HIGHBURY,
    ],
  },
  {
    routeNames: [ROUTES.offBroadway.name],
    description: "little bit west of highbury",
    type: "quiet",
    videoIds: [
      VIDEOS.offBroadwayEb.id,
      VIDEOS.offBroadwayWb.id,
      VIDEOS.highburyNb.id,
    ],
    videoIdsStartAtStart: [VIDEOS.highburyNb.id],
    positions: [WEST_OF_HIGHBURY, HIGHBURY_8TH],
  },
  {
    routeNames: [ROUTES.offBroadway.name],
    description: "highbury to yew",
    type: "quiet",
    videoIds: [VIDEOS.offBroadwayEb.id, VIDEOS.offBroadwayWb.id],
    positions: [
      HIGHBURY_8TH,
      [49.26524, -123.18582],
      [49.2652, -123.18376],
      [49.26518, -123.18184],
      [49.26514, -123.17985],
      [49.26511, -123.17784],
      [49.26508, -123.17589],
      BALACLAVA_8TH,
      [49.26502, -123.17118],
      [49.26498, -123.16842],
      [49.26494, -123.1665],
      TRAFALGAR_8TH,
      [49.2649, -123.16237],
      [49.26486, -123.16001],
      [49.26482, -123.15763],
      YEW_8TH,
    ],
  },
  {
    routeNames: [ROUTES.offBroadway.name],
    description: "yew to arbutus greenway",
    type: "quiet",
    videoIds: [
      VIDEOS.offBroadwayEb.id,
      VIDEOS.offBroadwayWb.id,
      VIDEOS.arbutusGreenwayNb.id,
    ],
    positions: [
      YEW_8TH,
      [49.26561, -123.15526],
      [49.2656, -123.15421],
      [49.26562, -123.15408],
      [49.26561, -123.15303],
      [49.26558, -123.15277],
      ARBUTUS_GREENWAY_7TH,
    ],
  },
  {
    routeNames: [ROUTES.offBroadway.name],
    description: "arbutus greenway to heather",
    type: "quiet",
    videoIds: [VIDEOS.offBroadwayEb.id, VIDEOS.offBroadwayWb.id],
    positions: [
      ARBUTUS_GREENWAY_7TH,
      [49.26555, -123.15048],
      CYPRESS_7TH,
      BURRARD_7TH_W,
      [49.26543, -123.14333],
      [49.26539, -123.14091],
      [49.26535, -123.13854],
      [49.26532, -123.13607],
      [49.26528, -123.13366],
      ALDER_7TH,
      [49.2652, -123.12892],
      [49.26517, -123.12649],
      LAUREL_7TH,
      [49.26508, -123.12175],
      HEATHER_7TH,
    ],
  },
  {
    routeNames: [ROUTES.offBroadway.name],
    description: "heather to ash",
    type: "quiet",
    videoIds: [
      VIDEOS.offBroadwayWb.id,
      VIDEOS.offBroadwayEb.id,
      VIDEOS.heatherSb.id,
    ],
    positions: [HEATHER_7TH, ASH_7TH_W],
  },
  {
    routeNames: [ROUTES.offBroadway.name],
    description: "ash to cambie",
    type: "quiet",
    videoIds: [VIDEOS.offBroadwayWb.id, VIDEOS.offBroadwayEb.id],
    positions: [ASH_7TH_W, ASH_7TH_E, [49.26498, -123.11508], CAMBIE_7TH_W],
  },
  {
    routeNames: [ROUTES.offBroadway.name],
    description: "eb: cambie to yukon",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.offBroadwayEb.id],
    positions: [
      CAMBIE_7TH_W,
      [49.26488, -123.11464],
      [49.26485, -123.11444],
      [49.26484, -123.11425],
      [49.26483, -123.11404],
      YUKON_7TH_SW,
      YUKON_7TH_SE,
    ],
  },
  {
    description: "wb: crossing yukon",
    type: "painted",
    oneWay: "required",
    hideArrows: true,
    positions: [YUKON_7TH_NE, YUKON_7TH_NW],
  },
  {
    routeNames: [ROUTES.offBroadway.name],
    description: "wb: yukon to cambie",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.offBroadwayWb.id],
    positions: [
      YUKON_7TH_NW,
      [49.26489, -123.11348],
      [49.2649, -123.11394],
      [49.26491, -123.11417],
      [49.26492, -123.11438],
      [49.26495, -123.11458],
      CAMBIE_7TH_W,
    ],
  },
  {
    routeNames: [ROUTES.offBroadway.name],
    description: "crossing yukon",
    type: "quiet",
    videoIds: [VIDEOS.offBroadwayWb.id],
    positions: [YUKON_5TH_W, YUKON_5TH_E],
  },
  {
    routeNames: [ROUTES.offBroadway.name],
    description: "yukon to mosaic",
    type: "quiet",
    elevation: 0.5,
    videoIds: [VIDEOS.offBroadwayWb.id, VIDEOS.offBroadwayEb.id],
    positions: [
      YUKON_5TH_E,
      [49.2666, -123.11078],
      COLUMBIA_5TH,
      [49.26652, -123.10667],
      ONTARIO_5TH,
      QUEBEC_5TH,
      [49.26641, -123.10082],
      [49.26638, -123.09882],
      [49.26547, -123.09886],
      [49.26544, -123.09693],
      [49.26541, -123.09576],
      [49.26529, -123.09573],
      [49.26528, -123.09486],
      [49.26527, -123.09294],
      [49.26526, -123.09098],
      [49.26524, -123.08907],
      [49.26522, -123.08712],
      [49.2652, -123.08539],
      [49.26519, -123.08524],
      [49.26512, -123.0852],
      [49.2643, -123.08521],
      [49.26428, -123.08324],
      GLEN_7TH,
      [49.26426, -123.07941],
      [49.26424, -123.07752],
      [49.26422, -123.07558],
      WOODLAND_7TH,
    ],
  },
  {
    routeNames: [ROUTES.offBroadway.name],
    description: "path to 8th",
    type: "dedicated",
    videoIds: [
      VIDEOS.offBroadwayWb.id,
      VIDEOS.offBroadwayEb.id,
      VIDEOS.centralValleyVancouverEbAlt.id,
    ],
    positions: [GRANDVIEW_8TH_N, [49.26325, -123.06818], GRANDVIEW_8TH_N_E],
  },
  {
    routeNames: [ROUTES.offBroadway.name],
    description: "grandview to lakewood",
    type: "quiet",
    videoIds: [
      VIDEOS.centralValleyVancouverEbAlt.id,
      VIDEOS.offBroadwayWb.id,
      VIDEOS.offBroadwayEb.id,
    ],
    videoIdsStartAtEnd: [VIDEOS.offBroadwayWb.id],
    videoIdsEndAtEnd: [VIDEOS.offBroadwayEb.id],
    positions: [
      GRANDVIEW_8TH_N_E,
      [49.26324, -123.06592],
      [49.26323, -123.06393],
      LAKEWOOD_8TH,
    ],
  },
];
