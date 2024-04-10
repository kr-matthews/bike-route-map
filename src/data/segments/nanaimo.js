import {
  NANAIMO_ADANAC_E,
  NANAIMO_ADANAC_W,
  NANAIMO_PANDORA_E,
  NANAIMO_PANDORA_W,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const NANAIMO_CHARLES_E = [49.27295, -123.05651];
const NANAIMO_CHARLES_W = [49.27295, -123.05669];

const NANAIMO_2ND_W = [49.26863, -123.05672];

export const NANAIMO = [
  {
    description: "charles crossing",
    type: "dedicated",
    positions: [
      NANAIMO_CHARLES_W,
      NANAIMO_CHARLES_E,
      [49.27295, -123.05646],
      [49.2732, -123.05646],
      [49.2732, -123.05639],
      [49.27328, -123.05625],
    ],
  },
  {
    description: "cambridge crossing",
    type: "dedicated",
    positions: [
      [49.2866, -123.0566],
      [49.2866, -123.05631],
      [49.28664, -123.05626],
      [49.28674, -123.05626],
    ],
  },
  {
    routeNames: [ROUTES.nanaimo.name],
    description: "nb",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.nanaimoNb.id],
    videoIdsStartAtStart: [VIDEOS.nanaimoNb.id],
    videoIdsEndAtEnd: [VIDEOS.nanaimoNb.id],
    positions: [
      [49.26855, -123.05648],
      [49.26941, -123.05648],
      [49.26961, -123.05649],
      [49.27136, -123.05649],
      NANAIMO_CHARLES_E,
      [49.27416, -123.05651],
      [49.2758, -123.05651],
      NANAIMO_ADANAC_E,
      [49.27911, -123.05649],
      [49.28024, -123.05643],
      [49.28117, -123.05643],
      [49.28208, -123.05642],
      NANAIMO_PANDORA_E,
    ],
  },
  {
    routeNames: [ROUTES.nanaimo.name],
    description: "sb",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.nanaimoSb.id],
    positions: [
      NANAIMO_PANDORA_W,
      [49.28208, -123.05668],
      [49.28115, -123.0567],
      [49.28023, -123.05669],
      [49.2791, -123.05668],
      NANAIMO_ADANAC_W,
      [49.27565, -123.05668],
      [49.27414, -123.05669],
      NANAIMO_CHARLES_W,
      [49.27119, -123.05668],
      [49.26961, -123.05671],
      [49.26936, -123.05671],
      NANAIMO_2ND_W,
    ],
  },
  {
    description: "leaving via 2nd",
    type: "quiet",
    hideUnlessVideo: true,
    videoIds: [VIDEOS.nanaimoSb.id],
    videoIdsEndAtStart: [VIDEOS.nanaimoSb.id],
    positions: [[49.26861, -123.05803], [49.2686, -123.05672], NANAIMO_2ND_W],
  },
];
