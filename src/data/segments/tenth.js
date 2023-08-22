import {
  ALDER_10TH,
  ARBUTUS_GREENWAY_10TH,
  CYPRESS_10TH,
  GLEN_10TH,
  HEATHER_10TH_N,
  HEATHER_10TH_S,
  ONTARIO_10TH,
  TRAFALGAR_10TH,
  VICTORIA_BROADWAY,
  WINDSOR_10TH,
  WOODLAND_10TH,
  YEW_10TH,
  YUKON_10TH,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const OAK_10TH_W = [49.26245, -123.12669];
const ASH_10TH_E = [49.2623, -123.1175];

export const TENTH = [
  {
    routes: [ROUTES.tenth.name],
    description: "west of hospital",
    videos: [VIDEOS.tenthEb, VIDEOS.tenthWb],
    positions: [
      TRAFALGAR_10TH,
      [49.26302, -123.16242],
      [49.26298, -123.16006],
      [49.26295, -123.15771],
      [49.26293, -123.15766],
      YEW_10TH,
      [49.26284, -123.15303],
      [49.26288, -123.15288],
      ARBUTUS_GREENWAY_10TH,
      [49.26285, -123.15062],
      [49.26283, -123.15053],
      CYPRESS_10TH,
      [49.26275, -123.14579],
      [49.26271, -123.14341],
      [49.26267, -123.14103],
      [49.26263, -123.13859],
      [49.2626, -123.13618],
      [49.26257, -123.13374],
      ALDER_10TH,
      [49.26249, -123.12903],
      OAK_10TH_W,
    ],
  },
  {
    routes: [ROUTES.tenth.name],
    description: "hospital eb",
    oneWay: "required",
    videos: [VIDEOS.tenthEb],
    positions: [
      OAK_10TH_W,
      [49.2624, -123.12649],
      [49.26238, -123.12538],
      [49.26236, -123.12423],
      [49.26232, -123.12187],
      HEATHER_10TH_S,
      [49.26227, -123.11758],
      ASH_10TH_E,
    ],
  },
  {
    routes: [ROUTES.tenth.name],
    description: "hospital wb",
    oneWay: "required",
    videos: [VIDEOS.tenthWb],
    positions: [
      ASH_10TH_E,
      [49.26234, -123.1176],
      HEATHER_10TH_N,
      [49.26242, -123.12188],
      [49.26245, -123.12424],
      [49.26247, -123.12539],
      [49.26249, -123.12654],
      OAK_10TH_W,
    ],
  },
  {
    routes: [ROUTES.tenth.name],
    description: "hospital to windsor",
    videos: [VIDEOS.tenthEb, VIDEOS.tenthWb],
    positions: [
      ASH_10TH_E,
      [49.26226, -123.11492],
      YUKON_10TH,
      [49.26219, -123.11099],
      [49.26217, -123.10949],
      [49.26212, -123.10689],
      ONTARIO_10TH,
      [49.26205, -123.10302],
      [49.26201, -123.10104],
      [49.26199, -123.10034],
      [49.26199, -123.09865],
      [49.26198, -123.09616],
      [49.26193, -123.09608],
      [49.26163, -123.09609],
      [49.26159, -123.096],
      [49.26159, -123.09494],
      [49.26157, -123.09303],
      [49.26156, -123.09107],
      [49.26153, -123.08912],
      [49.26151, -123.0872],
      [49.26149, -123.08525],
      WINDSOR_10TH,
    ],
  },
  {
    routes: [ROUTES.tenth.name, ROUTES.windsor.name],
    description: "windsor",
    videos: [VIDEOS.tenthEb, VIDEOS.tenthWb],
    positions: [WINDSOR_10TH, GLEN_10TH],
  },
  {
    routes: [ROUTES.tenth.name],
    description: "windsor to victoria",
    videos: [VIDEOS.tenthEb, VIDEOS.tenthWb],
    positions: [
      GLEN_10TH,
      [49.26145, -123.07944],
      [49.26144, -123.07866],
      [49.26146, -123.07843],
      [49.26147, -123.07828],
      [49.26144, -123.07817],
      [49.26144, -123.07759],
      WOODLAND_10TH,
      [49.26137, -123.06984],
      [49.26135, -123.06969],
      [49.26132, -123.06581],
      [49.26212, -123.06581],
      VICTORIA_BROADWAY,
    ],
  },
];
