import {
  ANGUS_45TH,
  BALACLAVA_45TH,
  CAMBIE_45TH_E,
  CAMBIE_45TH_W,
  CARNARVON_45TH,
  DUMFRIES_47TH,
  EAST_BLVD_45TH,
  INVERNESS_45TH,
  INVERNESS_47TH,
  NANAIMO_45TH,
  NANAIMO_46TH,
  ONTARIO_45TH,
  PRINCE_EDWARD_45TH,
  TISDALL_46TH,
  WILLOW_46TH,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const NANAIMO_47TH = [49.22759, -123.05908];

export const FORTY_FIFTH = [
  {
    routeNames: [ROUTES.fortyFifth.name, ROUTES.balaclava.name],
    description: "balaclava",
    type: "quiet",
    videoIds: [
      VIDEOS.fortyFifthEb.id,
      VIDEOS.fortyFifthWb.id,
      VIDEOS.balaclavaNb.id,
      VIDEOS.balaclavaSb.id,
    ],
    videoIdsStartAtStart: [VIDEOS.fortyFifthEb.id],
    videoIdsEndAtStart: [VIDEOS.fortyFifthWb.id],
    positions: [BALACLAVA_45TH, CARNARVON_45TH],
  },
  {
    routeNames: [ROUTES.fortyFifth.name],
    description: "balaclava to heather",
    type: "quiet",
    videoIds: [VIDEOS.fortyFifthEb.id, VIDEOS.fortyFifthWb.id],
    positions: [
      CARNARVON_45TH,
      [49.23099, -123.1716],
      [49.23099, -123.17035],
      [49.23098, -123.16894],
      [49.23099, -123.16754],
      [49.23102, -123.16733],
      [49.23101, -123.16584],
      [49.23099, -123.1643],
      [49.23095, -123.16147],
      [49.23091, -123.15862],
      [49.23086, -123.15573],
      EAST_BLVD_45TH,
      [49.23081, -123.15217],
      [49.23077, -123.14938],
      ANGUS_45TH,
      [49.2307, -123.14486],
      [49.23064, -123.14157],
      [49.23061, -123.1397],
      [49.23052, -123.13733],
      [49.23044, -123.13496],
      [49.22954, -123.135],
      [49.22943, -123.13199],
      [49.22931, -123.12823],
      [49.22926, -123.12682],
      WILLOW_46TH,
    ],
  },
  {
    routeNames: [ROUTES.fortyFifth.name, ROUTES.heather.name],
    description: "heather",
    type: "quiet",
    videoIds: [
      VIDEOS.fortyFifthEb.id,
      VIDEOS.fortyFifthWb.id,
      VIDEOS.heatherSb.id,
    ],
    positions: [WILLOW_46TH, TISDALL_46TH],
  },
  {
    routeNames: [ROUTES.fortyFifth.name],
    description: "heather to inverness",
    type: "quiet",
    videoIds: [VIDEOS.fortyFifthEb.id, VIDEOS.fortyFifthWb.id],
    positions: [
      TISDALL_46TH,
      [49.23001, -123.12164],
      [49.22987, -123.11796],
      CAMBIE_45TH_W,
      CAMBIE_45TH_E,
      [49.22971, -123.11304],
      [49.22963, -123.11086],
      [49.22954, -123.10826],
      ONTARIO_45TH,
      [49.22938, -123.10156],
      [49.22933, -123.09942],
      PRINCE_EDWARD_45TH,
      [49.22923, -123.09396],
      [49.22918, -123.09066],
      [49.22912, -123.08788],
      [49.2291, -123.08513],
      [49.22907, -123.08264],
      INVERNESS_45TH,
    ],
  },
  {
    routeNames: [ROUTES.fortyFifth.name],
    description: "inverness to nanaimo",
    type: "quiet",
    videoIds: [VIDEOS.fortyFifthWb.id, VIDEOS.fortyFifthEb.id],
    positions: [
      INVERNESS_47TH,
      [49.22766, -123.07723],
      [49.22764, -123.07584],
      [49.22718, -123.07585],
      DUMFRIES_47TH,
      [49.22714, -123.07169],
      [49.22769, -123.07168],
      [49.22767, -123.06981],
      [49.22765, -123.06834],
      [49.22761, -123.06575],
      [49.22767, -123.06559],
      [49.22762, -123.06227],
      NANAIMO_47TH,
    ],
  },
  {
    routeNames: [ROUTES.fortyFifth.name],
    description: "nanaimo: 47 to 46",
    type: "quiet",
    videoIds: [
      VIDEOS.fortyFifthWb.id,
      VIDEOS.fortyFifthEb.id,
      VIDEOS.killarneyEb.id,
      VIDEOS.killarneyWb.id,
    ],
    videoIdsStartAtStart: [VIDEOS.killarneyEb.id],
    videoIdsEndAtStart: [VIDEOS.killarneyWb.id],
    positions: [NANAIMO_47TH, NANAIMO_46TH],
  },
  {
    routeNames: [ROUTES.fortyFifth.name],
    description: "nanaimo: 46 to 45",
    type: "quiet",
    videoIds: [VIDEOS.fortyFifthWb.id, VIDEOS.fortyFifthEb.id],
    positions: [NANAIMO_46TH, NANAIMO_45TH],
  },
];
