import {
  ALDER_7TH,
  ARBUTUS_GREENWAY_7TH,
  ASH_7TH,
  BALACLAVA_8TH,
  BLANCA_8TH_E,
  BURRARD_7TH,
  COLUMBIA_5TH,
  CYPRESS_7TH,
  DISCOVERY_8TH,
  GLEN_7TH,
  GRANDVIEW_8TH_N,
  HEATHER_7TH,
  HIGHBURY_8TH,
  LAKEWOOD_8TH,
  ONTARIO_5TH,
  TRAFALGAR_8TH,
  WOODLAND_7TH,
  WOODLAND_GRANDVIEW,
  YEW_10TH,
  YEW_8TH,
  YUKON_5TH,
  YUKON_7TH,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

export const OFF_BROADWAY = [
  {
    description: "yew connection with 10th",
    positions: [YEW_10TH, YEW_8TH],
  },
  {
    routes: [ROUTES.offBroadway.name, ROUTES.ridgeway.name],
    description: "ridgeway overlap",
    videos: [VIDEOS.offBroadwayWb],
    positions: [
      BLANCA_8TH_E,
      [49.26563, -123.2121],
      [49.26559, -123.20901],
      [49.26554, -123.206],
      DISCOVERY_8TH,
    ],
  },
  {
    routes: [ROUTES.offBroadway.name],
    description: "west of yukon",
    videos: [VIDEOS.offBroadwayWb],
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
      [49.26561, -123.15526],
      [49.2656, -123.15421],
      [49.26563, -123.15408],
      [49.26562, -123.15303],
      [49.26559, -123.15277],
      ARBUTUS_GREENWAY_7TH,
      [49.26555, -123.15048],
      CYPRESS_7TH,
      BURRARD_7TH,
      [49.26543, -123.14333],
      [49.26539, -123.14091],
      [49.26535, -123.13854],
      [49.26532, -123.13607],
      [49.26528, -123.13366],
      ALDER_7TH,
      [49.2652, -123.12892],
      [49.26517, -123.12649],
      [49.26512, -123.12412],
      [49.26508, -123.12175],
      HEATHER_7TH,
      ASH_7TH,
      [49.26498, -123.11508],
      [49.2649, -123.11461],
      [49.26486, -123.11428],
      YUKON_7TH,
    ],
  },
  {
    routes: [ROUTES.offBroadway.name],
    description: "yukon to mosaic",
    videos: [VIDEOS.offBroadwayWb],
    positions: [
      YUKON_5TH,
      [49.2666, -123.11078],
      COLUMBIA_5TH,
      [49.26652, -123.10667],
      ONTARIO_5TH,
      [49.26644, -123.10276],
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
  // TODO: move to mosaic file
  {
    routes: [ROUTES.mosaic.name, ROUTES.offBroadway.name],
    description: "mosaic/off-broadway",
    videos: [VIDEOS.offBroadwayWb],
    positions: [WOODLAND_7TH, WOODLAND_GRANDVIEW],
  },
  {
    routes: [ROUTES.offBroadway.name],
    description: "cvg/off-broadway east",
    videos: [VIDEOS.offBroadwayWb],
    positions: [
      GRANDVIEW_8TH_N,
      [49.26325, -123.06818],
      [49.26326, -123.06806],
      [49.26324, -123.06592],
      [49.26323, -123.06393],
      LAKEWOOD_8TH,
    ],
  },
];
