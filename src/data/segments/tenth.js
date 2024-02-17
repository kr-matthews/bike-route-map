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
const COMMERCIAL_10TH_SE = [49.26135, -123.06969];
const VICTORIA_GRANDVIEW_CUT_SE = [49.2614, -123.06583];
const VICTORIA_GRANDVIEW_CUT_NE = [49.26201, -123.06581];

export const TENTH = [
  {
    routeNames: [ROUTES.tenth.name],
    description: "west of yew",
    type: "quiet",
    videos: [VIDEOS.tenthEb.id, VIDEOS.tenthWb.id],
    videosStartAtStart: [VIDEOS.tenthEb.id],
    videosEndAtStart: [VIDEOS.tenthWb.id],
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
    videos: [VIDEOS.tenthEb.id, VIDEOS.tenthWb.id],
    positions: [VINE_10TH_SE, YEW_10TH],
  },
  {
    routeNames: [ROUTES.tenth.name],
    description: "yew to arbutus greenway",
    type: "dedicated",
    videos: [VIDEOS.tenthEb.id, VIDEOS.tenthWb.id, VIDEOS.arbutusGreenwayNb.id],
    positions: [
      YEW_10TH,
      [49.26284, -123.15303],
      [49.26288, -123.15288],
      ARBUTUS_GREENWAY_10TH,
    ],
  },
  {
    routeNames: [ROUTES.tenth.name],
    description: "arbutus greenway to oak",
    type: "dedicated",
    videos: [VIDEOS.tenthEb.id, VIDEOS.tenthWb.id],
    positions: [ARBUTUS_GREENWAY_10TH, MAPLE_10TH_NW],
  },
  {
    routeNames: [ROUTES.tenth.name],
    description: "arbutus greenway to oak",
    type: "quiet",
    videos: [VIDEOS.tenthEb.id, VIDEOS.tenthWb.id],
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
    videos: [VIDEOS.tenthEb.id],
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
    videos: [VIDEOS.tenthWb.id],
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
    description: "hospital to windsor",
    type: "quiet",
    videos: [VIDEOS.tenthEb.id, VIDEOS.tenthWb.id],
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
      [49.26201, -123.10104],
      [49.26199, -123.10034],
      [49.26199, -123.09865],
      [49.26198, -123.09616],
      [49.26193, -123.09608],
      [49.26163, -123.09609], // !!! kingsway lanes
      [49.26159, -123.096],
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
    videos: [VIDEOS.tenthEb.id, VIDEOS.tenthWb.id, VIDEOS.windsorNb.id],
    positions: [WINDSOR_10TH, GLEN_10TH],
  },
  {
    routeNames: [ROUTES.tenth.name],
    description: "windsor to commercial",
    type: "quiet",
    videos: [VIDEOS.tenthEb.id, VIDEOS.tenthWb.id],
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
      COMMERCIAL_10TH_SE,
    ],
  },
  {
    routeNames: [ROUTES.tenth.name],
    description: "commercial to victoria",
    type: "dedicated",
    elevation: 0.5,
    videos: [VIDEOS.tenthEb.id, VIDEOS.tenthWb.id],
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
    videos: [VIDEOS.tenthEb.id, VIDEOS.tenthWb.id],
    positions: [VICTORIA_GRANDVIEW_CUT_SE, VICTORIA_GRANDVIEW_CUT_NE],
  },
  {
    routeNames: [ROUTES.tenth.name],
    description: "victoria & broadway",
    type: "dedicated",
    elevation: 0.5,
    videos: [VIDEOS.tenthEb.id, VIDEOS.tenthWb.id],
    videosStartAtEnd: [VIDEOS.tenthWb.id],
    videosEndAtEnd: [VIDEOS.tenthEb.id],
    positions: [
      VICTORIA_GRANDVIEW_CUT_NE,
      [49.2621, -123.06581],
      VICTORIA_BROADWAY_SE,
    ],
  },
];
