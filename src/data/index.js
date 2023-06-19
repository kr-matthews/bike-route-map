// TODO: add missing routes

import { CAMBIE_BRIDGE } from "./cambieBridge";
import { HARO } from "./haro";
import { MASUMI_MITSUI_GREENWAY } from "./masumiMitsuiGreenway";
import { MIDTOWN } from "./midtown";
import { SMITHE } from "./smithe";

// convention: bi-directional paths are stored northbound, eastbound, or clockwise
export const BIKE_ROUTE_DATA = [
  MIDTOWN,
  HARO,
  MASUMI_MITSUI_GREENWAY,
  CAMBIE_BRIDGE,
  SMITHE,
];
