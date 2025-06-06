import {
  AVIATION_N_SERVICE_NW,
  AVIATION_N_SERVICE_SE_E,
  AVIATION_N_SERVICE_SW_W,
  TEMPLETON_N_SERVICE_NW_N,
  TEMPLETON_N_SERVICE_SW_S,
  TEMPLETON_TEMPLETON_STATION_SE,
  TEMPLETON_TEMPLETON_STATION_SE_E,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const TERMINAL_SIDEWALK_E = [49.19433, -123.17432];
const TERMINAL_PATH_E = [49.19451, -123.17366];
const TEMPLETON_N_SERVICE_NW_W = [49.19702, -123.15056];
const TEMPLETON_N_SERVICE_SW_W = [49.1968, -123.15084];
const N_SERVICE_SHOULDER_W = [49.19441, -123.17275];
const EB_SHARE_START = [49.19378, -123.16779];

export const N_SERVICE = [
  // w end
  {
    routeNames: [ROUTES.nService.name],
    description: "w sidewalk",
    type: "other",
    videoIds: [VIDEOS.nServiceEb.id, VIDEOS.grantMcConachieWb.id],
    videoIdsStartAtStart: [VIDEOS.nServiceEb.id],
    videoIdsEndAtStart: [VIDEOS.grantMcConachieWb.id],
    positions: [
      [49.19458, -123.17511],
      [49.19455, -123.17497],
      [49.19451, -123.17482],
      [49.19447, -123.17466],
      [49.19442, -123.17453],
      [49.19438, -123.17442],
      TERMINAL_SIDEWALK_E,
    ],
  },
  {
    routeNames: [ROUTES.nService.name],
    description: "w path",
    type: "dedicated",
    videoIds: [VIDEOS.nServiceEb.id, VIDEOS.grantMcConachieWb.id],
    positions: [
      TERMINAL_SIDEWALK_E,
      [49.19435, -123.17425],
      [49.19436, -123.17415],
      [49.19436, -123.17396],
      [49.19439, -123.1739],
      [49.19447, -123.17374],
      TERMINAL_PATH_E,
    ],
  },
  {
    routeNames: [ROUTES.nService.name],
    description: "w road",
    type: "shared",
    videoIds: [VIDEOS.nServiceEb.id, VIDEOS.grantMcConachieWb.id],
    positions: [TERMINAL_PATH_E, N_SERVICE_SHOULDER_W],
  },

  // eb
  {
    routeNames: [ROUTES.nService.name],
    description: "eb 1",
    type: "shoulder",
    oneWay: "required",
    videoIds: [VIDEOS.nServiceEb.id],
    positions: [
      N_SERVICE_SHOULDER_W,
      [49.19435, -123.17254],
      [49.19422, -123.17141],
      [49.19391, -123.16861],
      [49.19388, -123.16841],
      EB_SHARE_START,
    ],
  },
  {
    routeNames: [ROUTES.nService.name],
    description: "eb 2",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.nServiceEb.id],
    positions: [
      EB_SHARE_START,
      [49.19378, -123.16767],
      AVIATION_N_SERVICE_SW_W,
    ],
  },
  {
    routeNames: [ROUTES.nService.name],
    description: "eb 3",
    type: "shoulder",
    oneWay: "required",
    videoIds: [VIDEOS.nServiceEb.id],
    positions: [
      AVIATION_N_SERVICE_SW_W,
      [49.19369, -123.16693],
      [49.19365, -123.16662],
      AVIATION_N_SERVICE_SE_E,
      [49.19353, -123.1656],
      [49.19347, -123.16483],
      [49.19329, -123.16323],
      [49.19324, -123.16263],
      [49.1932, -123.16201],
      [49.19318, -123.16146],
      [49.19318, -123.16055],
      [49.19318, -123.1592],
      [49.19316, -123.15717],
      [49.19316, -123.15628],
      [49.19317, -123.15598],
      [49.1932, -123.15558],
      [49.19324, -123.15526],
      [49.19331, -123.15485],
      [49.19339, -123.15453],
      [49.19347, -123.15425],
      [49.19358, -123.15393],
      [49.19371, -123.15361],
      [49.19384, -123.15334],
      [49.19399, -123.15308],
      [49.19412, -123.1529],
      [49.19439, -123.15255],
      [49.19464, -123.1523],
      [49.19485, -123.15212],
      [49.19502, -123.15201],
      [49.19522, -123.1519],
      [49.19541, -123.15185],
      [49.19622, -123.15165],
      [49.19642, -123.15159],
      [49.19652, -123.15152],
      [49.19661, -123.15143],
      [49.19669, -123.15131],
      [49.19676, -123.15114],
      [49.1968, -123.15098],
      TEMPLETON_N_SERVICE_SW_W,
    ],
  },
  {
    routeNames: [ROUTES.nService.name],
    description: "eb to templeton station rd",
    type: "shoulder",
    oneWay: "required",
    videoIds: [VIDEOS.nServiceEb.id],
    positions: [
      TEMPLETON_N_SERVICE_SW_W,
      [49.19687, -123.15072],
      [49.19686, -123.15056],
      [49.19684, -123.15044],
      TEMPLETON_TEMPLETON_STATION_SE,
      [49.19679, -123.14991],
      TEMPLETON_TEMPLETON_STATION_SE_E,
    ],
  },
  {
    description: "eb to templeton st",
    type: "shoulder",
    oneWay: "required",
    positions: [
      TEMPLETON_N_SERVICE_SW_W,
      [49.19679, -123.15077],
      [49.19676, -123.15068],
      [49.19671, -123.15061],
      [49.19664, -123.15055],
      TEMPLETON_N_SERVICE_SW_S,
    ],
  },

  // wb
  {
    routeNames: [ROUTES.nService.name],
    description: "wb approach from templeton station rd",
    type: "shoulder",
    oneWay: "required",
    positions: [
      [49.19688, -123.14985],
      [49.19698, -123.15034],
      TEMPLETON_N_SERVICE_NW_W,
    ],
  },
  {
    description: "wb approach from templeton st",
    type: "shoulder",
    oneWay: "required",
    positions: [
      TEMPLETON_N_SERVICE_NW_N,
      [49.19709, -123.15026],
      [49.19705, -123.15039],
      TEMPLETON_N_SERVICE_NW_W,
    ],
  },
  {
    routeNames: [ROUTES.nService.name],
    description: "wb to aviation ave",
    type: "shoulder",
    oneWay: "required",
    positions: [
      TEMPLETON_N_SERVICE_NW_W,
      [49.19702, -123.15074],
      [49.19701, -123.1509],
      [49.19699, -123.15103],
      [49.19694, -123.15123],
      [49.1969, -123.15135],
      [49.19682, -123.15151],
      [49.19673, -123.15165],
      [49.19662, -123.15176],
      [49.1965, -123.15185],
      [49.19636, -123.15191],
      [49.19619, -123.15194],
      [49.19553, -123.15197],
      [49.19543, -123.15198],
      [49.19536, -123.152],
      [49.19525, -123.15204],
      [49.19513, -123.1521],
      [49.195, -123.15218],
      [49.19484, -123.1523],
      [49.19462, -123.1525],
      [49.19447, -123.15265],
      [49.19432, -123.15281],
      [49.19417, -123.15301],
      [49.19401, -123.15326],
      [49.19384, -123.15359],
      [49.19369, -123.15393],
      [49.1936, -123.15416],
      [49.19351, -123.15446],
      [49.19343, -123.15478],
      [49.19335, -123.15517],
      [49.1933, -123.15548],
      [49.19328, -123.15576],
      [49.19327, -123.15608],
      [49.19328, -123.15688],
      [49.19328, -123.15742],
      [49.19327, -123.15935],
      [49.19327, -123.1597],
      [49.19326, -123.16097],
      [49.19326, -123.16132],
      [49.19327, -123.16164],
      [49.19334, -123.16277],
      [49.19341, -123.1635],
      [49.19354, -123.16469],
      [49.19376, -123.16662],
      AVIATION_N_SERVICE_NW,
    ],
  },
  {
    routeNames: [ROUTES.nService.name],
    description: "wb from aviation",
    type: "shoulder",
    oneWay: "required",
    videoIds: [VIDEOS.grantMcConachieWb.id],
    positions: [
      AVIATION_N_SERVICE_NW,
      [49.19392, -123.16803],
      [49.1941, -123.16963],
      [49.19425, -123.17091],
      [49.19443, -123.17247],
      N_SERVICE_SHOULDER_W,
    ],
  },
];
