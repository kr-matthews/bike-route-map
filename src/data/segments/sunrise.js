import {
  EARLES_38TH,
  EARLES_45TH,
  ELLIOTT_KENT,
  ELLIOTT_MARINE,
  KASLO_ADANAC,
  KASLO_PANDORA,
  KASLO_WALL,
  KINGSWAY_EARLES,
  SLOCAN_22ND_N,
  SLOCAN_22ND_S,
  SLOCAN_29TH,
  SLOCAN_ADANAC,
  SLOCAN_BC_PARKWAY,
  SLOCAN_N_GRANDVIEW,
  SLOCAN_N_GRANDVIEW_S,
  VIVIAN_45TH,
  VIVIAN_46TH,
  VIVIAN_57TH,
  VIVIAN_LYNBROOK,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const ELLIOTT_VIVIAN = [49.21271, -123.05513];

export const SUNRISE = [
  {
    routeNames: [ROUTES.sunrise.name],
    description: "kent to marine",
    type: "quiet",
    videoIds: [VIDEOS.sunriseNb.id, VIDEOS.sunriseSb.id],
    positions: [ELLIOTT_KENT, ELLIOTT_MARINE],
  },
  {
    routeNames: [ROUTES.sunrise.name],
    description: "marine to vivian",
    type: "shared",
    videoIds: [VIDEOS.sunriseNb.id, VIDEOS.sunriseSb.id],
    positions: [
      ELLIOTT_MARINE,
      [49.20761, -123.05686],
      [49.20794, -123.05671],
      [49.20881, -123.05593],
      [49.20942, -123.05557],
      [49.21019, -123.05536],
      [49.21199, -123.05511],
      ELLIOTT_VIVIAN,
    ],
  },
  {
    routeNames: [ROUTES.sunrise.name],
    description: "elliott to masumi mitsui",
    type: "quiet",
    videoIds: [VIDEOS.sunriseNb.id, VIDEOS.sunriseSb.id],
    positions: [
      ELLIOTT_VIVIAN,
      [49.21273, -123.05487],
      [49.21423, -123.0531],
      [49.21541, -123.05177],
      [49.21597, -123.05117],
      [49.21657, -123.05077],
      VIVIAN_LYNBROOK,
    ],
  },
  {
    routeNames: [ROUTES.sunrise.name],
    description: "masumi mitsui overlap",
    type: "quiet",
    videoIds: [
      VIDEOS.sunriseNb.id,
      VIDEOS.sunriseSb.id,
      VIDEOS.champlainHeightsGapEb.id,
    ],
    videoIdsStartAtStart: [VIDEOS.champlainHeightsGapEb.id],
    positions: [VIVIAN_LYNBROOK, VIVIAN_57TH],
  },
  {
    routeNames: [ROUTES.sunrise.name],
    description: "masumi mitsui to ridgeway",
    type: "quiet",
    videoIds: [VIDEOS.sunriseNb.id, VIDEOS.sunriseSb.id],
    positions: [
      VIVIAN_57TH,
      [49.22023, -123.05054],
      [49.2227, -123.05045],
      [49.22478, -123.05033],
      [49.22588, -123.05026],
      [49.22754, -123.05019],
      VIVIAN_46TH,
      VIVIAN_45TH,
    ],
  },
  {
    routeNames: [ROUTES.sunrise.name],
    description: "ridgeway to midtown",
    type: "quiet",
    videoIds: [VIDEOS.sunriseNb.id, VIDEOS.sunriseSb.id],
    positions: [
      EARLES_45TH,
      [49.23116, -123.04881],
      [49.23278, -123.04879],
      [49.23404, -123.04878],
      EARLES_38TH,
    ],
  },
  {
    routeNames: [ROUTES.sunrise.name, ROUTES.midtown.name],
    description: "earles to kingsway",
    type: "quiet",
    videoIds: [
      VIDEOS.sunriseNb.id,
      VIDEOS.sunriseSb.id,
      VIDEOS.midtownVancouverEb.id,
    ],
    positions: [EARLES_38TH, KINGSWAY_EARLES],
  },
  {
    routeNames: [ROUTES.sunrise.name, ROUTES.bcParkway.name],
    description: "slocan",
    type: "shared",
    videoIds: [
      VIDEOS.sunriseSb.id,
      VIDEOS.sunriseNb.id,
      VIDEOS.bcParkwayVancouverEb.id,
      VIDEOS.bcParkwayVancouverWb.id,
    ],
    positions: [SLOCAN_BC_PARKWAY, SLOCAN_29TH],
  },
  {
    routeNames: [ROUTES.sunrise.name],
    description: "bc parkway to 22nd",
    type: "shared",
    videoIds: [VIDEOS.sunriseSb.id, VIDEOS.sunriseNb.id],
    positions: [
      SLOCAN_BC_PARKWAY,
      [49.24793, -123.04965],
      [49.24973, -123.04963],
      SLOCAN_22ND_S,
      SLOCAN_22ND_N,
    ],
  },
  {
    routeNames: [ROUTES.sunrise.name],
    description: "22nd to adanac",
    type: "quiet",
    videoIds: [VIDEOS.sunriseSb.id, VIDEOS.sunriseNb.id],
    positions: [
      SLOCAN_22ND_N,
      [49.25154, -123.04961],
      [49.25403, -123.04957],
      [49.25543, -123.04957],
      [49.25636, -123.04955],
      [49.25793, -123.04955],
      SLOCAN_N_GRANDVIEW_S,
      SLOCAN_N_GRANDVIEW,
      [49.26034, -123.04958],
      [49.26201, -123.04958],
      [49.26388, -123.04956],
      [49.26572, -123.04954],
      [49.26759, -123.04951],
      [49.26949, -123.04948],
      [49.27137, -123.04944],
      [49.27326, -123.04941],
      [49.27497, -123.04939],
      [49.27662, -123.04935],
      SLOCAN_ADANAC,
    ],
  },
  {
    routeNames: [ROUTES.sunrise.name],
    description: "adanac to wall",
    type: "quiet",
    videoIds: [VIDEOS.sunriseSb.id, VIDEOS.sunriseNb.id],
    videoIdsStartAtEnd: [VIDEOS.sunriseSb.id],
    videoIdsEndAtEnd: [VIDEOS.sunriseNb.id],
    positions: [
      KASLO_ADANAC,
      [49.27772, -123.04672],
      [49.27825, -123.04672],
      [49.2802, -123.04671],
      [49.28115, -123.04671],
      [49.28207, -123.0467],
      KASLO_PANDORA,
      [49.28389, -123.04671],
      [49.28478, -123.04669],
      [49.28567, -123.04669],
      [49.28673, -123.04669],
      [49.28774, -123.04669],
      [49.28871, -123.04671],
      [49.28971, -123.04669],
      [49.29072, -123.04668],
      KASLO_WALL,
    ],
  },
];
