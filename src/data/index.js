// TODO: add missing routes

import { CAMBIE_BRIDGE } from "./cambieBridge";
import { CVG } from "./cvg";
import { HARO } from "./haro";
import { LIONS_GATE_BRIDGE } from "./lionsGateBridge";
import { MASUMI_MITSUI_GREENWAY } from "./masumiMitsuiGreenway";
import { MIDTOWN } from "./midtown";
import { OFF_BROADWAY } from "./offBroadway";
import { SMITHE } from "./smithe";
import { TENTH } from "./tenth";

// convention: bi-directional paths are stored northbound, eastbound, or clockwise
export const BIKE_ROUTE_DATA = [
  MIDTOWN,
  HARO,
  MASUMI_MITSUI_GREENWAY,
  CAMBIE_BRIDGE,
  SMITHE,
  OFF_BROADWAY,
  CVG,
  TENTH,
  LIONS_GATE_BRIDGE,
];
