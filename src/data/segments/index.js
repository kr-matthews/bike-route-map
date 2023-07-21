import { ALEXANDER } from "./alexander";
import { BC_PARKWAY } from "./bcParkway";
import { BUTE } from "./bute";
import { CAMBIE_BRIDGE } from "./cambieBridge";
import { CARDERO } from "./cardero";
import { CARRALL } from "./carrall";
import { CHILCO } from "./chilco";
import { COMOX_HELMCKEN } from "./comoxHelmcken";
import { CVG } from "./cvg";
import { FOURTH } from "./fourth";
import { HARO } from "./haro";
import { LIONS_GATE_BRIDGE } from "./lionsGateBridge";
import { MASUMI_MITSUI_GREENWAY } from "./masumiMitsui";
import { MIDTOWN } from "./midtown";
import { NELSON } from "./nelson";
import { OFF_BROADWAY } from "./offBroadway";
import { POWELL } from "./powell";
import { SMITHE } from "./smithe";
import { TENTH } from "./tenth";
import { THIRD } from "./third";
import { TWENTY_SECOND } from "./twentySecond";
import { VALLEY } from "./valley";

// convention: bi-directional paths are stored northbound, eastbound, or clockwise
export const SEGMENTS = [
  ...ALEXANDER,
  ...BC_PARKWAY,
  ...BUTE,
  ...CAMBIE_BRIDGE,
  ...CARDERO,
  ...CARRALL,
  ...CHILCO,
  ...COMOX_HELMCKEN,
  ...CVG,
  ...FOURTH,
  ...HARO,
  ...LIONS_GATE_BRIDGE,
  ...MASUMI_MITSUI_GREENWAY,
  ...MIDTOWN,
  ...NELSON,
  ...OFF_BROADWAY,
  ...POWELL,
  ...SMITHE,
  ...TENTH,
  ...THIRD,
  ...TWENTY_SECOND,
  ...VALLEY,
];
