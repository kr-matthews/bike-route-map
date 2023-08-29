import {
  NANAIMO_ADANAC_E,
  NANAIMO_ADANAC_W,
  NANAIMO_PANDORA_E,
  NANAIMO_PANDORA_W,
} from "../intersections";
import { ROUTES } from "../routes";

const NANAIMO_CHARLES_E = [49.27295, -123.05651];
const NANAIMO_CHARLES_W = [49.27295, -123.05669];

export const NANAIMO = [
  {
    description: "charles crossing",
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
    positions: [
      [49.2866, -123.0566],
      [49.2866, -123.05631],
      [49.28664, -123.05626],
      [49.28674, -123.05626],
    ],
  },
  {
    routes: [ROUTES.nanaimo.name],
    description: "nb",
    oneWay: "required",
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
    routes: [ROUTES.nanaimo.name],
    description: "sb",
    oneWay: "required",
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
      [49.26863, -123.05672],
    ],
  },
];
