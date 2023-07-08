import { CAMBIE_BRIDGE } from "./cambieBridge";
import { CVG } from "./cvg";
import { MASUMI_MITSUI_GREENWAY } from "./masumiMitsui";
import { OFF_BROADWAY } from "./offBroadway";
import { TENTH } from "./tenth";
import { THIRD } from "./third";

export const SEGMENTS = [
  ...THIRD,
  ...OFF_BROADWAY,
  ...CVG,
  ...TENTH,
  ...MASUMI_MITSUI_GREENWAY,
  ...CAMBIE_BRIDGE,
];
