import {
  ALDER_10TH,
  ARBUTUS_GREENWAY_10TH,
  CYPRESS_10TH,
  GLEN_10TH,
  HEATHER_10TH_N,
  HEATHER_10TH_S,
  ONTARIO_10TH,
  TRAFALGAR_10TH,
  VICTORIA_BROADWAY_SE,
  WINDSOR_10TH,
  WOODLAND_10TH,
  YEW_10TH,
  YUKON_10TH_E,
  YUKON_10TH_W,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const VINE_10TH_SE = [49.26292, -123.15764];
const MAPLE_10TH_NW = [49.26285, -123.15062];
const OAK_10TH_W = [49.26245, -123.12669];
const ASH_10TH_E = [49.2623, -123.1175];
const MAIN_10TH_W = [49.26202, -123.10104];
const WATSON_10TH_S = [49.26199, -123.10035];
const KINGSWAY_10TH_SE = [49.26196, -123.09842];
const MALL_10TH_N = [49.26201, -123.0975];
const MALL_10TH_E = [49.26198, -123.09705];
const PRINCE_EDWARD_10TH_N_W = [49.26197, -123.09617];
const PRINCE_EDWARD_10TH_S_E = [49.26159, -123.096];
const KEITH_10TH = [49.26145, -123.07944];
const CHINA_CREEK_E = [49.26144, -123.07817];
const COMMERCIAL_10TH_SE = [49.26135, -123.06969];
const VICTORIA_GRANDVIEW_CUT_SE = [49.2614, -123.06583];
const VICTORIA_GRANDVIEW_CUT_NE = [49.26201, -123.06581];

export const TENTH = [
  {
    routeNames: [ROUTES.tenth.name],
    description: "west of yew",
    type: "quiet",
    videoIds: [VIDEOS.tenthEb.id, VIDEOS.tenthWb.id],
    videoIdsStartAtStart: [VIDEOS.tenthEb.id],
    videoIdsEndAtStart: [VIDEOS.tenthWb.id],
    positions: [
      TRAFALGAR_10TH,
      [49.26302, -123.16242],
      [49.26298, -123.16006],
      [49.26295, -123.15771],
      VINE_10TH_SE,
    ],
  },
  {
    routeNames: [ROUTES.tenth.name],
    description: "vine to yew",
    type: "dedicated",
    videoIds: [VIDEOS.tenthEb.id, VIDEOS.tenthWb.id],
    positions: [VINE_10TH_SE, YEW_10TH],
  },
  {
    routeNames: [ROUTES.tenth.name],
    description: "yew to arbutus greenway",
    type: "dedicated",
    videoIds: [
      VIDEOS.tenthEb.id,
      VIDEOS.tenthWb.id,
      VIDEOS.arbutusGreenwayNb.id,
    ],
    positions: [
      YEW_10TH,
      [49.26284, -123.15303],
      [49.26288, -123.15288],
      ARBUTUS_GREENWAY_10TH,
    ],
  },
  {
    routeNames: [ROUTES.tenth.name],
    description: "arbutus greenway to maple",
    type: "dedicated",
    videoIds: [VIDEOS.tenthEb.id, VIDEOS.tenthWb.id],
    positions: [ARBUTUS_GREENWAY_10TH, MAPLE_10TH_NW],
  },
  {
    routeNames: [ROUTES.tenth.name],
    description: "maple to oak",
    type: "quiet",
    videoIds: [VIDEOS.tenthEb.id, VIDEOS.tenthWb.id],
    positions: [
      MAPLE_10TH_NW,
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
    routeNames: [ROUTES.tenth.name],
    description: "hospital eb",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.tenthEb.id],
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
    routeNames: [ROUTES.tenth.name],
    description: "hospital wb",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.tenthWb.id],
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
    routeNames: [ROUTES.tenth.name],
    description: "hospital to main",
    type: "quiet",
    videoIds: [VIDEOS.tenthEb.id, VIDEOS.tenthWb.id],
    positions: [
      ASH_10TH_E,
      [49.26226, -123.11492],
      YUKON_10TH_W,
      YUKON_10TH_E,
      [49.26219, -123.11099],
      [49.26217, -123.10949],
      [49.26212, -123.10689],
      ONTARIO_10TH,
      [49.26205, -123.10302],
      MAIN_10TH_W,
    ],
  },
  {
    routeNames: [ROUTES.tenth.name],
    description: "eb: main to watson",
    type: "quiet",
    oneWay: "required",
    videoIds: [VIDEOS.tenthEb.id],
    positions: [MAIN_10TH_W, [49.262, -123.10082], WATSON_10TH_S],
  },
  {
    routeNames: [ROUTES.tenth.name],
    description: "eb: watson to kingsway",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.tenthEb.id],
    positions: [WATSON_10TH_S, [49.26196, -123.09885], KINGSWAY_10TH_SE],
  },
  {
    routeNames: [ROUTES.tenth.name],
    description: "eb: kingsway to mall",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.tenthEb.id],
    positions: [
      KINGSWAY_10TH_SE,
      [49.26195, -123.09764],
      [49.26196, -123.0975],
      [49.26196, -123.09716],
      MALL_10TH_E,
    ],
  },
  {
    routeNames: [ROUTES.tenth.name],
    description: "wb: prince edward-ish to mall",
    type: "quiet",
    oneWay: "required",
    videoIds: [VIDEOS.tenthWb.id],
    positions: [MALL_10TH_E, [49.262, -123.09715], MALL_10TH_N],
  },
  {
    routeNames: [ROUTES.tenth.name],
    description: "wb: mall to main",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.tenthWb.id],
    positions: [
      MALL_10TH_N,
      [49.26203, -123.09758],
      [49.26204, -123.09839],
      [49.26203, -123.09892],
      [49.26203, -123.09919],
      [49.26205, -123.0999],
      [49.26204, -123.10037],
      [49.26205, -123.1008],
      MAIN_10TH_W,
    ],
  },
  {
    routeNames: [ROUTES.tenth.name],
    description: "before prince edward",
    type: "quiet",
    videoIds: [VIDEOS.tenthEb.id, VIDEOS.tenthWb.id],
    positions: [MALL_10TH_E, PRINCE_EDWARD_10TH_N_W],
  },
  {
    routeNames: [ROUTES.tenth.name],
    description: "prince edward",
    type: "dedicated",
    videoIds: [VIDEOS.tenthEb.id, VIDEOS.tenthWb.id],
    positions: [
      PRINCE_EDWARD_10TH_N_W,
      [49.26191, -123.0961],
      [49.26185, -123.09608],
      [49.26168, -123.0961],
      [49.26163, -123.09607],
      PRINCE_EDWARD_10TH_S_E,
    ],
  },
  {
    routeNames: [ROUTES.tenth.name],
    description: "prince edward to windsor",
    type: "quiet",
    videoIds: [VIDEOS.tenthEb.id, VIDEOS.tenthWb.id],
    positions: [
      PRINCE_EDWARD_10TH_S_E,
      [49.26158, -123.09494],
      [49.26157, -123.09303],
      [49.26155, -123.09107],
      [49.26153, -123.08912],
      [49.26151, -123.0872],
      [49.26149, -123.08525],
      WINDSOR_10TH,
    ],
  },
  {
    routeNames: [ROUTES.tenth.name, ROUTES.windsor.name],
    description: "windsor",
    type: "quiet",
    videoIds: [VIDEOS.tenthEb.id, VIDEOS.tenthWb.id, VIDEOS.windsorNb.id],
    positions: [WINDSOR_10TH, GLEN_10TH],
  },
  {
    routeNames: [ROUTES.tenth.name],
    description: "windsor to keith",
    type: "quiet",
    videoIds: [VIDEOS.tenthEb.id, VIDEOS.tenthWb.id],
    positions: [GLEN_10TH, KEITH_10TH],
  },
  {
    routeNames: [ROUTES.tenth.name],
    description: "china creek park",
    type: "dedicated",
    videoIds: [VIDEOS.tenthEb.id, VIDEOS.tenthWb.id],
    positions: [
      KEITH_10TH,
      [49.26144, -123.07866],
      [49.26146, -123.07843],
      [49.26147, -123.07828],
      CHINA_CREEK_E,
    ],
  },
  {
    routeNames: [ROUTES.tenth.name],
    description: "china creek park to commercial",
    type: "quiet",
    videoIds: [VIDEOS.tenthEb.id, VIDEOS.tenthWb.id],
    positions: [
      CHINA_CREEK_E,
      [49.26144, -123.07759],
      WOODLAND_10TH,
      [49.26137, -123.06984],
      COMMERCIAL_10TH_SE,
    ],
  },
  {
    routeNames: [ROUTES.tenth.name],
    description: "commercial to victoria",
    type: "dedicated",
    elevation: 0.5,
    videoIds: [VIDEOS.tenthEb.id, VIDEOS.tenthWb.id],
    positions: [
      COMMERCIAL_10TH_SE,
      [49.26133, -123.06704],
      [49.26131, -123.06699],
      [49.26131, -123.06681],
      [49.26133, -123.06675],
      [49.26132, -123.06583],
      VICTORIA_GRANDVIEW_CUT_SE,
    ],
  },
  {
    routeNames: [ROUTES.tenth.name],
    description: "victoria",
    type: "dedicated",
    elevation: 1,
    videoIds: [VIDEOS.tenthEb.id, VIDEOS.tenthWb.id],
    positions: [VICTORIA_GRANDVIEW_CUT_SE, VICTORIA_GRANDVIEW_CUT_NE],
  },
  {
    routeNames: [ROUTES.tenth.name],
    description: "victoria & broadway",
    type: "dedicated",
    elevation: 0.5,
    videoIds: [VIDEOS.tenthEb.id, VIDEOS.tenthWb.id],
    videoIdsStartAtEnd: [VIDEOS.tenthWb.id],
    videoIdsEndAtEnd: [VIDEOS.tenthEb.id],
    positions: [
      VICTORIA_GRANDVIEW_CUT_NE,
      [49.2621, -123.06581],
      VICTORIA_BROADWAY_SE,
    ],
  },
];
