import {
  ALDER_7TH,
  ARBUTUS_GREENWAY_7TH,
  ASH_7TH,
  BALACLAVA_8TH,
  BLANCA_8TH,
  COLUMBIA_5TH,
  GLEN_7TH,
  GRANDVIEW_8TH_N,
  HIGHBURY_8TH,
  LAKEWOOD_8TH,
  ONTARIO_5TH,
  TRAFALGAR_8TH,
  WOODLAND_7TH,
  WOODLAND_GRANDVIEW,
  YUKON_5TH,
  YUKON_7TH,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

// TODO: shared intersections

export const OFF_BROADWAY = [
  {
    routes: [ROUTES.offBroadway.name],
    description: "west of yukon",
    videos: [VIDEOS.offBroadwayWb],
    positions: [
      BLANCA_8TH,
      [49.26563, -123.2121],
      [49.26559, -123.20901],
      [49.26552, -123.206],
      [49.26548, -123.20298],
      [49.26545, -123.20139],
      [49.26542, -123.19979],
      [49.26539, -123.19691],
      [49.26537, -123.19558],
      [49.26536, -123.19514],
      [49.26533, -123.19476],
      [49.26509, -123.19341],
      [49.26521, -123.19339],
      [49.26528, -123.19332],
      [49.26532, -123.19323],
      [49.26535, -123.19309],
      HIGHBURY_8TH,
      [49.26524, -123.18582],
      [49.26521, -123.18376],
      [49.26517, -123.18184],
      [49.26515, -123.17985],
      [49.26511, -123.17784],
      [49.26508, -123.17589],
      BALACLAVA_8TH,
      [49.26502, -123.17118],
      [49.26498, -123.16842],
      [49.26494, -123.1665],
      TRAFALGAR_8TH,
      [49.26489, -123.16237],
      [49.26487, -123.16001],
      [49.26483, -123.15763],
      [49.26478, -123.15529],
      [49.26563, -123.15526],
      [49.26561, -123.15421],
      [49.26564, -123.15408],
      [49.26563, -123.15303],
      [49.2656, -123.15277],
      ARBUTUS_GREENWAY_7TH,
      [49.26557, -123.15048],
      [49.26551, -123.14806],
      [49.26546, -123.14567],
      [49.26543, -123.14333],
      [49.26539, -123.14091],
      [49.26536, -123.13854],
      [49.26533, -123.13607],
      [49.26529, -123.13366],
      ALDER_7TH,
      [49.2652, -123.12892],
      [49.26518, -123.12649],
      [49.26512, -123.12412],
      [49.26508, -123.12175],
      [49.26504, -123.11981],
      ASH_7TH,
      [49.26499, -123.11498],
      [49.2649, -123.11461],
      [49.26486, -123.11428],
      YUKON_7TH,
    ],
  },
  // TODO: move to yukon file
  {
    routes: [ROUTES.yukon.name, ROUTES.offBroadway.name],
    description: "yukon/off-broadway",
    videos: [VIDEOS.offBroadwayWb],
    positions: [YUKON_7TH, [49.26571, -123.11278], YUKON_5TH],
  },
  {
    routes: [ROUTES.offBroadway.name],
    description: "yukon to mosaic",
    videos: [VIDEOS.offBroadwayWb],
    positions: [
      YUKON_5TH,
      [49.26659, -123.11078],
      COLUMBIA_5TH,
      [49.26651, -123.10667],
      ONTARIO_5TH,
      [49.26642, -123.10276],
      [49.2664, -123.10082],
      [49.26638, -123.09881],
      [49.26548, -123.09886],
      [49.26545, -123.09693],
      [49.26543, -123.09576],
      [49.2653, -123.09573],
      [49.2653, -123.09486],
      [49.26528, -123.09294],
      [49.26527, -123.09098],
      [49.26526, -123.08907],
      [49.26523, -123.08712],
      [49.2652, -123.08539],
      [49.26518, -123.08526],
      [49.26512, -123.0852],
      [49.2643, -123.0852],
      [49.26428, -123.08324],
      GLEN_7TH,
      [49.26426, -123.07941],
      [49.26422, -123.07752],
      [49.26423, -123.07558],
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
      [49.26325, -123.06592],
      [49.26324, -123.06393],
      LAKEWOOD_8TH,
    ],
  },
];
