import {
  DUNBAR_18TH_E,
  DUNBAR_18TH_W,
  DUNBAR_29TH_E,
  DUNBAR_29TH_W,
  DUNBAR_39TH_E,
  DUNBAR_39TH_W,
  DUNBAR_MARINE_NE,
  DUNBAR_MARINE_NW,
  DUNBAR_MARINE_S,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const DUNBAR_16TH_NE = [49.258, -123.18508];
const DUNBAR_16TH_NW = [49.25804, -123.18522];
const DUNBAR_16TH_SE = [49.25783, -123.18512];
const DUNBAR_16TH_SW = [49.25783, -123.1852];

const DUNBAR_NB_BEFORE_41ST = [49.23433, -123.18531];
const DUNBAR_41ST_SE = [49.23469, -123.18529];
const DUNBAR_NB_AFTER_41ST = [49.23533, -123.18528];
const DUNBAR_NB_BEFORE_KING_EDWARD = [49.24955, -123.18515];
const DUNBAR_NB_AFTER_KING_EDWARD = [49.25077, -123.18513];
const DUNBAR_NB_AFTER_18TH = [49.25666, -123.1851];

const DUNBAR_SB_BEYOND_18TH = [49.25615, -123.1852];
const DUNBAR_SB_BEFORE_KING_EDWARD = [49.25083, -123.18526];
const DUNBAR_SB_AFTER_KING_EDWARD = [49.24955, -123.18526];
const DUNBAR_40TH_W = [49.23558, -123.18539];

export const DUNBAR = [
  // 16th
  {
    routeNames: [ROUTES.dunbar.name],
    description: "16th wb: part 1",
    oneWay: "required",
    positions: [[49.25803, -123.1841], DUNBAR_16TH_NW],
  },
  {
    routeNames: [ROUTES.dunbar.name],
    description: "16th wb: part 2",
    oneWay: "required",
    videos: [VIDEOS.dunbarNb.id],
    videosEndAtEnd: [VIDEOS.dunbarNb.id],
    positions: [DUNBAR_16TH_NW, [49.25806, -123.18602]],
  },
  {
    routeNames: [ROUTES.dunbar.name],
    description: "16th eb",
    oneWay: "required",
    positions: [
      [49.25784, -123.1859],
      DUNBAR_16TH_SW,
      DUNBAR_16TH_SE,
      [49.25782, -123.18409],
    ],
  },

  // dunbar itself
  {
    routeNames: [ROUTES.dunbar.name],
    description: "nb: crossing marine",
    type: "shared",
    oneWay: "required",
    hideArrows: true,
    positions: [DUNBAR_MARINE_S, DUNBAR_MARINE_NE],
  },
  {
    routeNames: [ROUTES.dunbar.name],
    description: "nb: marine to before 41st",
    type: "shared",
    oneWay: "required",
    videos: [VIDEOS.dunbarNb.id],
    videosStartAtStart: [VIDEOS.dunbarNb.id],
    positions: [DUNBAR_MARINE_NE, DUNBAR_NB_BEFORE_41ST],
  },
  {
    routeNames: [ROUTES.dunbar.name],
    description: "nb: before 41st",
    oneWay: "required",
    videos: [VIDEOS.dunbarNb.id],
    positions: [DUNBAR_NB_BEFORE_41ST, DUNBAR_41ST_SE],
  },
  {
    routeNames: [ROUTES.dunbar.name],
    description: "nb: after 41st",
    type: "shared",
    oneWay: "required",
    videos: [VIDEOS.dunbarNb.id],
    positions: [DUNBAR_41ST_SE, DUNBAR_NB_AFTER_41ST],
  },
  {
    routeNames: [ROUTES.dunbar.name],
    description: "nb: after 41st to before king edward",
    oneWay: "required",
    videos: [VIDEOS.dunbarNb.id],
    positions: [
      DUNBAR_NB_AFTER_41ST,
      DUNBAR_39TH_E,
      [49.23859, -123.18524],
      [49.24048, -123.18522],
      [49.24237, -123.1852],
      [49.24429, -123.18518],
      DUNBAR_29TH_E,
      [49.24808, -123.18516],
      DUNBAR_NB_BEFORE_KING_EDWARD,
    ],
  },
  {
    routeNames: [ROUTES.dunbar.name],
    description: "nb: crossing king edward",
    type: "shared",
    oneWay: "required",
    videos: [VIDEOS.dunbarNb.id],
    positions: [DUNBAR_NB_BEFORE_KING_EDWARD, DUNBAR_NB_AFTER_KING_EDWARD],
  },
  {
    routeNames: [ROUTES.dunbar.name],
    description: "nb: after king edward to after 18th",
    oneWay: "required",
    videos: [VIDEOS.dunbarNb.id],
    positions: [
      DUNBAR_NB_AFTER_KING_EDWARD,
      [49.25198, -123.18512],
      [49.25378, -123.1851],
      [49.25559, -123.18508],
      DUNBAR_18TH_E,
      DUNBAR_NB_AFTER_18TH,
    ],
  },
  {
    routeNames: [ROUTES.dunbar.name],
    description: "nb: after 18th to 16th",
    type: "shared",
    oneWay: "required",
    videos: [VIDEOS.dunbarNb.id],
    positions: [
      DUNBAR_NB_AFTER_18TH,
      DUNBAR_16TH_SE,
      [49.25801, -123.18519],
      DUNBAR_16TH_NW,
    ],
  },
  {
    routeNames: [ROUTES.dunbar.name],
    description: "16th: wb dunbar to dunbar",
    oneWay: "required",
    positions: [[49.25799, -123.18409], DUNBAR_16TH_NE],
  },
  {
    routeNames: [ROUTES.dunbar.name],
    description: "sb: 16th through intersection",
    type: "shared",
    oneWay: "required",
    hideArrows: true,
    positions: [
      DUNBAR_16TH_NE,
      [49.25796, -123.18517],
      [49.25789, -123.1852],
      DUNBAR_16TH_SW,
    ],
  },
  {
    routeNames: [ROUTES.dunbar.name],
    description: "sb: 16th to beyond 18th",
    type: "shared",
    oneWay: "required",
    positions: [DUNBAR_16TH_SW, DUNBAR_18TH_W, DUNBAR_SB_BEYOND_18TH],
  },
  {
    routeNames: [ROUTES.dunbar.name],
    description: "sb: beyond 16th to before king edward",
    oneWay: "required",
    positions: [
      DUNBAR_SB_BEYOND_18TH,
      [49.25559, -123.1852],
      [49.25379, -123.18523],
      [49.25199, -123.18524],
      DUNBAR_SB_BEFORE_KING_EDWARD,
    ],
  },
  {
    routeNames: [ROUTES.dunbar.name],
    description: "sb: crossing king edward ",
    type: "shared",
    oneWay: "required",
    positions: [DUNBAR_SB_BEFORE_KING_EDWARD, DUNBAR_SB_AFTER_KING_EDWARD],
  },
  {
    routeNames: [ROUTES.dunbar.name],
    description: "sb: after king edward to 40th",
    oneWay: "required",
    positions: [
      DUNBAR_SB_AFTER_KING_EDWARD,
      [49.24808, -123.18527],
      DUNBAR_29TH_W,
      [49.2443, -123.18531],
      [49.24238, -123.18533],
      [49.24048, -123.18535],
      [49.23859, -123.18536],
      DUNBAR_39TH_W,
      DUNBAR_40TH_W,
    ],
  },
  {
    routeNames: [ROUTES.dunbar.name],
    description: "sb: 40th to marine",
    type: "shared",
    oneWay: "required",
    positions: [
      DUNBAR_40TH_W,
      [49.23478, -123.18541],
      [49.23383, -123.18542],
      DUNBAR_MARINE_NW,
      DUNBAR_MARINE_S,
    ],
  },
];
