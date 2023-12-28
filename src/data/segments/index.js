import { ADANAC } from "./adanac";
import { ALBERNI } from "./alberni";
import { ALDER } from "./alder";
import { ALEXANDER } from "./alexander";
import { ARBUTUS_GREENWAY } from "./arbutusGreenway";
import { ARTHUR_LAING } from "./arthurLaing";
import { BALACLAVA } from "./balaclava";
import { BARNET } from "./barnet";
import { BC_PARKWAY } from "./bcParkway";
import { BEATTY } from "./beatty";
import { BLANCA } from "./blanca";
import { BRIDGEPORT_TRAIL } from "./bridgeportTrail";
import { BRUNETTE_FRASER } from "./brunetteFraser";
import { BURNABY } from "./burnaby";
import { BURRARD } from "./burrard";
import { BUTE } from "./bute";
import { BYRNE_CREEK } from "./byrneCreek";
import { CAMBIE } from "./cambie";
import { CAMBIE_BRIDGE } from "./cambieBridge";
import { CANADA_LINE } from "./canadaLine";
import { CARDERO } from "./cardero";
import { CARRALL } from "./carrall";
import { CASSIAR } from "./cassiar";
import { CENTRAL_PARK_PERIMETER_TRAIL } from "./centralParkPerimeterTrail";
import { CENTRAL_VALLEY_GREENWAY } from "./centralValleyGreenway";
import { CHANCELLOR } from "./chancellor";
import { CHILCO } from "./chilco";
import { COLUMBIA } from "./columbia";
import { COMOX_HELMCKEN } from "./comoxHelmcken";
import { CYPRESS } from "./cypress";
import { DEER_LAKE_PARKWAY } from "./deerLakeParkway";
import { DUMFRIES } from "./dumfries";
import { DUNBAR } from "./dunbar";
import { DUNSMUIR } from "./dunsmuir";
import { FORTY_FIFTH } from "./fortyFifth";
import { FOURTEENTH } from "./fourteenth";
import { FOURTH } from "./fourth";
import { FRANCES_UNION } from "./francesUnion";
import { FRASER_FORESHORE } from "./fraserForeshoreTrail";
import { FRASER_RIVER_TRAIL } from "./fraserRiverTrail";
import { GARDEN_CITY } from "./gardenCity";
import { GLADSTONE } from "./gladstone";
import { GLENLYON } from "./glenlyon";
import { GRANVILLE } from "./granville";
import { HARO } from "./haro";
import { HASTINGS_PARK } from "./hastingsPark";
import { HEATHER } from "./heather";
import { HIGHBURY } from "./highbury";
import { HILLCREST } from "./hillcrest";
import { HOMER } from "./homer";
import { HORNBY } from "./hornby";
import { IMPERIAL } from "./imperial";
import { INVERNESS } from "./inverness";
import { KEEFER } from "./keefer";
import { KENT } from "./kent";
import { KERR } from "./kerr";
import { KILLARNEY } from "./killarney";
import { KING_EDWARD } from "./kingEdward";
import { KNIGHT_STREET_BRIDGE } from "./knightStBridge";
import { LAKEWOOD } from "./lakewood";
import { LIONS_GATE_BRIDGE } from "./lionsGateBridge";
import { LOUGHEED } from "./lougheed";
import { MARINE } from "./marine";
import { MARINE_WAY } from "./marineWay";
import { MASUMI_MITSUI_GREENWAY } from "./masumiMitsui";
import { MIDTOWN } from "./midtown";
import { MOSAIC } from "./mosaic";
import { NANAIMO } from "./nanaimo";
import { NELSON } from "./nelson";
import { NICOLA } from "./nicola";
import { OAK_STREET_BRIDGE } from "./oakStBridge";
import { OFF_BROADWAY } from "./offBroadway";
import { ONTARIO } from "./ontario";
import { PANDORA } from "./pandora";
import { PENDER } from "./pender";
import { PORT_MANN_BRIDGE } from "./portMannBridge";
import { PORTSIDE } from "./portside";
import { POWELL } from "./powell";
import { PRINCE_EDWARD } from "./princeEdward";
import { RAILWAY } from "./railway";
import { RAILWAY_GREENWAY } from "./railwayGreenway";
import { RICHARDS } from "./richards";
import { RIDGEWAY } from "./ridgeway";
import { RUMBLE } from "./rumble";
import { RUPERT } from "./rupert";
import { SEA_TO_RIVER } from "./seaToRiver";
import { SEASIDE } from "./seaside";
import { SEASIDE_BYPASS } from "./seasideBypass";
import { SECOND_NARROWS_BRIDGE } from "./secondNarrowsBridge";
import { SIXTEENTH } from "./sixteenth";
import { SIXTY_SEVENTH } from "./sixtySeventh";
import { SMITHE } from "./smithe";
import { SPIRIT_TRAIL } from "./spiritTrail";
import { STANLEY_PARK_LOOP } from "./stanleyPark";
import { SUNRISE } from "./sunrise";
import { TENTH } from "./tenth";
import { TERMINAL_PATH } from "./terminalPath";
import { THIRD } from "./third";
import { TWENTY_NINTH } from "./twentyNinth";
import { TWENTY_SECOND } from "./twentySecond";
import { UNIVERSITY } from "./university";
import { VALLEY } from "./valley";
import { WALES_DUCHESS } from "./walesDuchess";
import { WATERFRONT } from "./waterfront";
import { WESBROOK } from "./wesbrook";
import { WILLINGDON } from "./willingdon";
import { WILLINGDON_LINEAR_PARK } from "./willingdonLinearPark";
import { WINDERMERE } from "./windermere";
import { WINDSOR } from "./windsor";
import { YORK } from "./york";
import { YUKON } from "./yukon";

// convention: bi-directional paths are stored northbound, eastbound, or clockwise
export const SEGMENTS = [
  ...ADANAC,
  ...ALBERNI,
  ...ALDER,
  ...ALEXANDER,
  ...ARBUTUS_GREENWAY,
  ...ARTHUR_LAING,
  ...BALACLAVA,
  ...BARNET,
  ...BC_PARKWAY,
  ...BEATTY,
  ...BLANCA,
  ...BRIDGEPORT_TRAIL,
  ...BRUNETTE_FRASER,
  ...BURNABY,
  ...BURRARD,
  ...BUTE,
  ...BYRNE_CREEK,
  ...CAMBIE,
  ...CAMBIE_BRIDGE,
  ...CANADA_LINE,
  ...CARDERO,
  ...CARRALL,
  ...CASSIAR,
  ...CENTRAL_PARK_PERIMETER_TRAIL,
  ...CENTRAL_VALLEY_GREENWAY,
  ...CHANCELLOR,
  ...CHILCO,
  ...COLUMBIA,
  ...COMOX_HELMCKEN,
  ...CYPRESS,
  ...DEER_LAKE_PARKWAY,
  ...DUMFRIES,
  ...DUNBAR,
  ...DUNSMUIR,
  ...FORTY_FIFTH,
  ...FOURTEENTH,
  ...FOURTH,
  ...FRANCES_UNION,
  ...FRASER_FORESHORE,
  ...FRASER_RIVER_TRAIL,
  ...GARDEN_CITY,
  ...GLADSTONE,
  ...GLENLYON,
  ...GRANVILLE,
  ...HARO,
  ...HASTINGS_PARK,
  ...HEATHER,
  ...HIGHBURY,
  ...HILLCREST,
  ...HOMER,
  ...HORNBY,
  ...IMPERIAL,
  ...INVERNESS,
  ...KEEFER,
  ...KENT,
  ...KERR,
  ...KILLARNEY,
  ...KING_EDWARD,
  ...KNIGHT_STREET_BRIDGE,
  ...LAKEWOOD,
  ...LIONS_GATE_BRIDGE,
  ...LOUGHEED,
  ...MARINE,
  ...MARINE_WAY,
  ...MASUMI_MITSUI_GREENWAY,
  ...MIDTOWN,
  ...MOSAIC,
  ...NANAIMO,
  ...NELSON,
  ...NICOLA,
  ...OAK_STREET_BRIDGE,
  ...OFF_BROADWAY,
  ...ONTARIO,
  ...PANDORA,
  ...PENDER,
  ...PORT_MANN_BRIDGE,
  ...PORTSIDE,
  ...POWELL,
  ...PRINCE_EDWARD,
  ...RAILWAY,
  ...RAILWAY_GREENWAY,
  ...RICHARDS,
  ...RIDGEWAY,
  ...RUMBLE,
  ...RUPERT,
  ...SEA_TO_RIVER,
  ...SEASIDE,
  ...SEASIDE_BYPASS,
  ...SECOND_NARROWS_BRIDGE,
  ...SIXTEENTH,
  ...SIXTY_SEVENTH,
  ...SMITHE,
  ...SPIRIT_TRAIL,
  ...STANLEY_PARK_LOOP,
  ...SUNRISE,
  ...TENTH,
  ...TERMINAL_PATH,
  ...THIRD,
  ...TWENTY_NINTH,
  ...TWENTY_SECOND,
  ...UNIVERSITY,
  ...VALLEY,
  ...WALES_DUCHESS,
  ...WATERFRONT,
  ...WESBROOK,
  ...WILLINGDON,
  ...WILLINGDON_LINEAR_PARK,
  ...WINDERMERE,
  ...WINDSOR,
  ...YORK,
  ...YUKON,
];
