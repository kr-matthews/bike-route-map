import {
  ONTARIO_10TH,
  ONTARIO_14TH,
  ONTARIO_1ST_N,
  ONTARIO_1ST_N_N,
  ONTARIO_1ST_S,
  ONTARIO_26TH_S,
  ONTARIO_30TH,
  ONTARIO_33RD_N,
  ONTARIO_33RD_S,
  ONTARIO_37TH,
  ONTARIO_42ND,
  ONTARIO_45TH,
  ONTARIO_58TH,
  ONTARIO_59TH,
  ONTARIO_5TH,
  ONTARIO_63RD,
  ONTARIO_KENT_N,
  ONTARIO_PATH_ATHLETES,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const ONTARIO_69TH_NW = [49.20946, -123.10677];
const ONTARIO_52ND_S = [49.22289, -123.10606];
const ONTARIO_49TH_N = [49.22581, -123.10597];
const NORTH_OF_ONTARIO_33RD = [49.24148, -123.10533];
const ONTARIO_MARINE_N = [49.21249, -123.10655];
const ONTARIO_ATHLETES = [49.27151, -123.10456];

export const ONTARIO = [
  {
    routeNames: [ROUTES.ontario.name],
    description: "kent to 69th",
    type: "quiet",
    videoIds: [VIDEOS.ontarioNb.id, VIDEOS.ontarioSb.id],
    positions: [ONTARIO_KENT_N, [49.20939, -123.1067], ONTARIO_69TH_NW],
  },
  {
    routeNames: [ROUTES.ontario.name],
    description: "69th to marine",
    type: "dedicated",
    videoIds: [VIDEOS.ontarioNb.id, VIDEOS.ontarioSb.id],
    positions: [ONTARIO_69TH_NW, [49.21219, -123.10665], ONTARIO_MARINE_N],
  },
  {
    routeNames: [ROUTES.ontario.name],
    description: "marine to 59th",
    type: "quiet",
    videoIds: [VIDEOS.ontarioNb.id, VIDEOS.ontarioSb.id],
    positions: [
      ONTARIO_MARINE_N,
      ONTARIO_63RD,
      [49.21507, -123.10637],
      ONTARIO_59TH,
    ],
  },
  {
    routeNames: [ROUTES.ontario.name, ROUTES.masumiMitsui.name],
    description: "masumi mitsui",
    type: "quiet",
    videoIds: [
      VIDEOS.ontarioNb.id,
      VIDEOS.ontarioSb.id,
      VIDEOS.masumiMitsuiEb.id,
      VIDEOS.masumiMitsuiWb.id,
    ],
    positions: [ONTARIO_59TH, ONTARIO_58TH],
  },
  {
    routeNames: [ROUTES.ontario.name],
    description: "58th to 52nd",
    type: "quiet",
    videoIds: [VIDEOS.ontarioNb.id, VIDEOS.ontarioSb.id],
    positions: [
      ONTARIO_58TH,
      [49.21854, -123.10621],
      [49.22024, -123.10614],
      [49.22204, -123.10609],
      ONTARIO_52ND_S,
    ],
  },
  {
    routeNames: [ROUTES.ontario.name],
    description: "nb: 52nd to 49th",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.ontarioNb.id],
    positions: [
      ONTARIO_52ND_S,
      [49.22304, -123.106],
      [49.22386, -123.10599],
      [49.22483, -123.10595],
      [49.22567, -123.10592],
      ONTARIO_49TH_N,
    ],
  },
  {
    routeNames: [ROUTES.ontario.name],
    description: "sb: 49th to 52nd",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.ontarioSb.id],
    positions: [
      ONTARIO_49TH_N,
      [49.22568, -123.10605],
      [49.22468, -123.10607],
      [49.22447, -123.10607],
      [49.22386, -123.1061],
      [49.22305, -123.10612],
      ONTARIO_52ND_S,
    ],
  },
  {
    routeNames: [ROUTES.ontario.name],
    description: "49th to 33rd",
    type: "quiet",
    videoIds: [VIDEOS.ontarioNb.id, VIDEOS.ontarioSb.id],
    positions: [
      ONTARIO_49TH_N,
      [49.22766, -123.1059],
      ONTARIO_45TH,
      [49.23097, -123.10574],
      ONTARIO_42ND,
      [49.23368, -123.10564],
      [49.23551, -123.10556],
      ONTARIO_37TH,
      ONTARIO_33RD_S,
      ONTARIO_33RD_N,
    ],
  },
  {
    routeNames: [ROUTES.ontario.name],
    description: "just north of 33rd",
    type: "quiet",
    videoIds: [
      VIDEOS.ontarioSb.id,
      VIDEOS.ontarioNb.id,
      VIDEOS.twentyNinthWb.id,
    ],
    videoIdsStartAtEnd: [VIDEOS.twentyNinthWb.id],
    positions: [ONTARIO_33RD_N, NORTH_OF_ONTARIO_33RD],
  },
  {
    routeNames: [ROUTES.ontario.name],
    description: "just north of 33rd to athletes",
    type: "quiet",
    videoIds: [VIDEOS.ontarioSb.id, VIDEOS.ontarioNb.id],
    positions: [
      NORTH_OF_ONTARIO_33RD,
      ONTARIO_30TH,
      [49.24453, -123.10519],
      [49.24605, -123.10512],
      ONTARIO_26TH_S,
      [49.24883, -123.105],
      [49.24991, -123.10495],
      [49.25186, -123.10487],
      [49.25377, -123.10477],
      [49.25422, -123.10476],
      [49.2543, -123.10483],
      [49.25441, -123.10491],
      [49.25455, -123.10501],
      [49.25466, -123.10505],
      [49.25644, -123.10494],
      [49.25679, -123.10516],
      ONTARIO_14TH,
      [49.26027, -123.10503],
      ONTARIO_10TH,
      [49.263, -123.1049],
      [49.26466, -123.10482],
      ONTARIO_5TH,
      [49.2683, -123.10468],
      ONTARIO_1ST_S,
      ONTARIO_1ST_N,
      ONTARIO_1ST_N_N,
      ONTARIO_ATHLETES,
    ],
  },
  {
    routeNames: [ROUTES.ontario.name],
    description: "athletes to path",
    type: "mixed",
    videoIds: [VIDEOS.ontarioSb.id, VIDEOS.ontarioNb.id],
    positions: [ONTARIO_ATHLETES, ONTARIO_PATH_ATHLETES],
  },
];
