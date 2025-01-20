import {
  BLANCA_4TH_N,
  BLANCA_4TH_SE,
  BLANCA_4TH_SW,
  CHANCELLOR_4TH,
  HIGHBURY_4TH_N,
  HIGHBURY_4TH_S,
  MARINE_4TH_NE,
  MARINE_4TH_NW,
  MARINE_4TH_S,
  WALLACE_4TH_N,
  WALLACE_4TH_S,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const CHANCELLOR_4TH_S = [49.26896, -123.22563];

const DRUMMOND_4TH_S = [49.26891, -123.21953];
const EB_BEFORE_SASAMAT_4TH = [49.26898, -123.20936];
const TRIMBLE_4TH_SE = [49.26883, -123.20567];
const EB_BEFORE_MARINE = [49.26831, -123.20103];
const EB_AFTER_MARINE = [49.26873, -123.19929];

const WB_AFTER_MARINE = [49.26847, -123.20098];
const DRUMMOND_4TH_N = [49.26904, -123.21949];

const WB_BEFORE_MARINE = [49.26889, -123.19803];

export const FOURTH = [
  {
    routeNames: [ROUTES.fourth.name],
    description: "connection between chancellor and 4th",
    type: "mixed",
    videoIds: [VIDEOS.fourthEb.id, VIDEOS.fourthWb.id],
    videoIdsStartAtStart: [VIDEOS.fourthEb.id],
    videoIdsEndAtStart: [VIDEOS.fourthWb.id],
    positions: [CHANCELLOR_4TH, CHANCELLOR_4TH_S],
  },
  {
    routeNames: [ROUTES.fourth.name],
    description: "eb: chancellor blvd",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.fourthEb.id],
    positions: [
      CHANCELLOR_4TH_S,
      [49.26879, -123.22519],
      [49.26869, -123.2248],
      [49.26863, -123.22454],
      [49.26858, -123.22422],
      [49.26855, -123.22392],
      [49.26854, -123.22355],
      [49.26855, -123.2232],
      [49.26859, -123.22256],
      [49.26863, -123.22216],
      [49.26868, -123.22167],
      [49.26874, -123.22107],
      [49.26883, -123.22031],
      DRUMMOND_4TH_S,
    ],
  },
  {
    routeNames: [ROUTES.fourth.name],
    description: "eb: chancellor to sasamat",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.fourthEb.id],
    positions: [
      DRUMMOND_4TH_S,
      [49.26898, -123.219],
      [49.26904, -123.21824],
      [49.26906, -123.2177],
      [49.26907, -123.21725],
      BLANCA_4TH_SW,
      BLANCA_4TH_SE,
      EB_BEFORE_SASAMAT_4TH,
    ],
  },
  {
    routeNames: [ROUTES.fourth.name],
    description: "eb: sasamat to trimble",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.fourthEb.id],
    positions: [
      EB_BEFORE_SASAMAT_4TH,
      [49.26899, -123.20898],
      [49.26895, -123.20619],
      [49.26894, -123.2061],
      [49.26892, -123.20597],
      [49.26889, -123.20585],
      TRIMBLE_4TH_SE,
    ],
  },
  {
    routeNames: [ROUTES.fourth.name],
    description: "eb: trimble to before marine",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.fourthEb.id],
    positions: [
      TRIMBLE_4TH_SE,
      [49.26828, -123.20338],
      [49.26822, -123.20306],
      [49.2682, -123.2029],
      [49.26819, -123.20268],
      [49.26818, -123.20209],
      [49.26819, -123.20163],
      [49.26822, -123.20137],
      EB_BEFORE_MARINE,
    ],
  },
  {
    routeNames: [ROUTES.fourth.name],
    description: "eb: before marine",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.fourthEb.id],
    positions: [
      EB_BEFORE_MARINE,
      [49.26848, -123.20046],
      [49.26862, -123.19998],
      MARINE_4TH_S,
    ],
  },
  {
    routeNames: [ROUTES.fourth.name, ROUTES.seasideBypass.name],
    description: "eb: after marine",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.fourthEb.id, VIDEOS.seasideBypassMarine4thEb.id],
    positions: [
      MARINE_4TH_S,
      [49.26868, -123.1997],
      [49.26872, -123.19943],
      EB_AFTER_MARINE,
    ],
  },
  {
    routeNames: [ROUTES.fourth.name, ROUTES.seasideBypass.name],
    description: "eb: marine to wallace",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.fourthEb.id, VIDEOS.seasideBypassMarine4thEb.id],
    positions: [
      EB_AFTER_MARINE,
      [49.26872, -123.19806],
      [49.26862, -123.19345],
      WALLACE_4TH_S,
    ],
  },
  {
    routeNames: [ROUTES.fourth.name],
    description: "eb: wallace to highbury",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.fourthEb.id],
    videoIdsEndAtEnd: [VIDEOS.fourthEb.id],
    positions: [WALLACE_4TH_S, [49.26862, -123.18871], HIGHBURY_4TH_S],
  },

  // wb
  {
    routeNames: [ROUTES.fourth.name],
    description: "wb: highbury to wallace",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.fourthWb.id],
    videoIdsStartAtStart: [VIDEOS.fourthWb.id],
    positions: [HIGHBURY_4TH_N, [49.26873, -123.18874], WALLACE_4TH_N],
  },
  {
    routeNames: [ROUTES.fourth.name, ROUTES.seasideBypass.name],
    description: "wb: wallace to before marine",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.fourthWb.id, VIDEOS.seasideBypassMarine4thWb.id],
    positions: [WALLACE_4TH_N, [49.26882, -123.19343], WB_BEFORE_MARINE],
  },
  {
    routeNames: [ROUTES.fourth.name, ROUTES.seasideBypass.name],
    description: "wb before marine",
    type: "dedicated",
    oneWay: "required",
    videoIds: [VIDEOS.fourthWb.id, VIDEOS.seasideBypassMarine4thWb.id],
    positions: [
      WB_BEFORE_MARINE,
      [49.26891, -123.19908],
      [49.26889, -123.19942],
      MARINE_4TH_NE,
    ],
  },
  {
    routeNames: [ROUTES.fourth.name],
    description: "wb: crossing marine",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.fourthWb.id],
    positions: [
      MARINE_4TH_NE,
      [49.26878, -123.20003],
      MARINE_4TH_NW,
      WB_AFTER_MARINE,
    ],
  },
  {
    routeNames: [ROUTES.fourth.name],
    description: "wb: marine to drummond",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.fourthWb.id],
    positions: [
      WB_AFTER_MARINE,
      [49.26836, -123.20133],
      [49.26832, -123.20153],
      [49.26829, -123.20177],
      [49.26828, -123.20221],
      [49.26828, -123.20272],
      [49.2683, -123.203],
      [49.26837, -123.20336],
      [49.26896, -123.20583],
      [49.269, -123.20601],
      [49.26902, -123.20613],
      [49.26902, -123.20622],
      [49.26906, -123.2089],
      [49.26912, -123.21197],
      BLANCA_4TH_N,
      [49.26918, -123.21688],
      [49.26918, -123.21733],
      [49.26917, -123.21777],
      [49.26916, -123.21813],
      [49.26913, -123.21855],
      [49.26909, -123.21902],
      DRUMMOND_4TH_N,
    ],
  },
  {
    routeNames: [ROUTES.fourth.name],
    description: "wb: drummond and beyond",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.fourthWb.id],
    positions: [
      DRUMMOND_4TH_N,
      [49.26883, -123.22142],
      [49.26873, -123.22239],
      [49.26869, -123.223],
      [49.26867, -123.22337],
      [49.26867, -123.22365],
      [49.26869, -123.2239],
      [49.2687, -123.22408],
      [49.26875, -123.22436],
      [49.26882, -123.22471],
      [49.26889, -123.22497],
      [49.26908, -123.22548],
      CHANCELLOR_4TH_S,
    ],
  },
];
