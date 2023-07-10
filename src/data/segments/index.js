import { CAMBIE_BRIDGE } from "./cambieBridge";
import { CVG } from "./cvg";
import { HARO } from "./haro";
import { LIONS_GATE_BRIDGE } from "./lionsGateBridge";
import { MASUMI_MITSUI_GREENWAY } from "./masumiMitsui";
import { MIDTOWN } from "./midtown";
import { OFF_BROADWAY } from "./offBroadway";
import { SMITHE } from "./smithe";
import { TENTH } from "./tenth";
import { THIRD } from "./third";
import { VALLEY } from "./valley";

// convention: bi-directional paths are stored northbound, eastbound, or clockwise
export const SEGMENTS = [
  ...CAMBIE_BRIDGE,
  ...CVG,
  ...HARO,
  ...LIONS_GATE_BRIDGE,
  ...MASUMI_MITSUI_GREENWAY,
  ...MIDTOWN,
  ...OFF_BROADWAY,
  ...SMITHE,
  ...TENTH,
  ...THIRD,
  ...VALLEY,
];
