import {
  LAKEWOOD_JOHN_HENDRY_PARK,
  MCLEAN_ADANAC,
  MCLEAN_FRANKLIN,
  MCLEAN_POWELL,
  WOODLAND_10TH,
  WOODLAND_14TH,
  WOODLAND_7TH,
  WOODLAND_GRANDVIEW,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const JOHN_HENDRY_PARK_14TH = [49.25771, -123.0653];

export const MOSAIC = [
  {
    description: "trout lake alley",
    videos: [VIDEOS.mosaicSb],
    videosEndAtEnd: [VIDEOS.mosaicSb],
    positions: [
      JOHN_HENDRY_PARK_14TH,
      [49.25816, -123.06529],
      [49.25815, -123.06402],
      LAKEWOOD_JOHN_HENDRY_PARK,
    ],
  },
  {
    routeNames: [ROUTES.mosaic.name],
    description: "14th",
    videos: [VIDEOS.mosaicSb],
    positions: [
      WOODLAND_14TH,
      [49.25775, -123.06984],
      [49.25772, -123.06601],
      JOHN_HENDRY_PARK_14TH,
    ],
  },
  {
    routeNames: [ROUTES.mosaic.name],
    description: "14th to 7th",
    videos: [VIDEOS.mosaicSb],
    positions: [
      WOODLAND_14TH,
      [49.25959, -123.07369],
      WOODLAND_10TH,
      [49.2633, -123.07363],
      WOODLAND_7TH,
    ],
  },
  {
    routeNames: [ROUTES.mosaic.name, ROUTES.offBroadway.name],
    description: "mosaic/off broadway",
    videos: [VIDEOS.mosaicSb, VIDEOS.offBroadwayWb],
    positions: [WOODLAND_7TH, WOODLAND_GRANDVIEW],
  },
  {
    routeNames: [ROUTES.mosaic.name],
    description: "grandview to franklin",
    videos: [VIDEOS.mosaicSb],
    positions: [
      WOODLAND_GRANDVIEW,
      [49.26601, -123.07357],
      [49.26783, -123.07353],
      [49.26962, -123.07351],
      [49.27144, -123.07347],
      [49.27308, -123.07343],
      [49.27398, -123.07341],
      [49.27399, -123.07448],
      [49.27584, -123.07445],
      [49.27667, -123.07443],
      [49.27679, -123.07421],
      MCLEAN_ADANAC,
      [49.27943, -123.07415],
      [49.28077, -123.07409],
      [49.28127, -123.07411],
      MCLEAN_FRANKLIN,
    ],
  },
  {
    routeNames: [ROUTES.mosaic.name],
    description: "north tip",
    videos: [VIDEOS.mosaicSb, VIDEOS.pandoraEb],
    videosStartAtEnd: [VIDEOS.mosaicSb, VIDEOS.pandoraEb],
    positions: [MCLEAN_FRANKLIN, [49.28321, -123.07408], MCLEAN_POWELL],
  },
];
