import {
  ANGUS_59TH,
  ASHBURN_UPLAND,
  BORDEN_59TH,
  CAMBIE_59TH_NE_E,
  CAMBIE_59TH_NW,
  HEATHER_59TH,
  INVERNESS_59TH,
  ONTARIO_58TH,
  ONTARIO_59TH,
  PRINCE_EDWARD_59TH,
  VIVIAN_57TH,
  VIVIAN_LYNBROOK,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const ELLIOTT_57TH = [49.21799, -123.05422];
const ELLIOTT_ASHBURN = [49.21855, -123.05467];

export const MASUMI_MITSUI_GREENWAY = [
  {
    routes: [ROUTES.masumiMitsui.name],
    description: "angus to ontario",
    videos: [VIDEOS.masumiMitsuiEb, VIDEOS.masumiMitsuiWb],
    positions: [
      ANGUS_59TH,
      [49.21768, -123.14384],
      [49.21766, -123.14157],
      [49.21761, -123.14113],
      [49.21752, -123.14075],
      [49.21747, -123.1405],
      [49.21747, -123.14029],
      [49.21747, -123.14015],
      [49.21737, -123.13978],
      [49.21735, -123.13965],
      [49.21738, -123.13954],
      [49.21736, -123.13943],
      [49.21738, -123.13933],
      [49.21735, -123.13778],
      [49.2173, -123.13544],
      [49.21725, -123.13406],
      [49.21717, -123.13133],
      [49.21712, -123.12933],
      [49.21706, -123.12719],
      [49.21703, -123.12457],
      HEATHER_59TH,
      [49.21699, -123.12007],
      [49.21695, -123.11718],
      CAMBIE_59TH_NW,
      CAMBIE_59TH_NE_E,
      [49.21784, -123.1166],
      [49.2178, -123.11346],
      [49.21775, -123.11331],
      [49.21777, -123.11279],
      [49.21774, -123.11248],
      [49.21776, -123.11185],
      [49.21771, -123.11109],
      [49.2177, -123.10967],
      [49.21767, -123.10732],
      [49.21767, -123.10669],
      [49.21769, -123.10645],
      ONTARIO_58TH,
    ],
  },
  {
    routes: [ROUTES.masumiMitsui.name],
    description: "ontario to split",
    videos: [VIDEOS.masumiMitsuiEb, VIDEOS.masumiMitsuiWb],
    positions: [
      ONTARIO_59TH,
      [49.21676, -123.10195],
      PRINCE_EDWARD_59TH,
      [49.21654, -123.09099],
      [49.21657, -123.09084],
      [49.21648, -123.08549],
      [49.21642, -123.08162],
      [49.21641, -123.08082],
      INVERNESS_59TH,
      [49.2164, -123.07705],
      [49.21639, -123.0746],
      BORDEN_59TH,
      [49.21629, -123.07191],
      [49.21678, -123.07181],
      [49.21716, -123.07164],
      [49.21739, -123.07149],
      [49.21735, -123.07125],
      [49.21707, -123.07025],
      [49.21749, -123.06981],
      [49.21775, -123.06931],
      [49.21789, -123.06892],
      [49.21803, -123.06833],
      [49.21808, -123.0678],
      [49.21807, -123.06591],
      [49.21802, -123.06331],
      [49.21799, -123.06074],
      [49.21797, -123.05783],
      [49.21797, -123.05696],
      [49.21788, -123.05651],
      [49.21778, -123.05613],
      ASHBURN_UPLAND,
    ],
  },
  {
    routes: [ROUTES.masumiMitsui.name],
    description: "eastbound branch",
    oneWay: "recommended",
    videos: [VIDEOS.masumiMitsuiEb],
    positions: [
      ASHBURN_UPLAND,
      [49.21734, -123.05541],
      [49.21711, -123.05522],
      [49.21696, -123.05514],
      [49.21709, -123.05446],
      [49.21715, -123.05374],
      [49.2171, -123.05201],
      VIVIAN_LYNBROOK,
    ],
  },
  {
    routes: [ROUTES.masumiMitsui.name],
    description: "westbound branch 57th",
    oneWay: "recommended",
    videos: [VIDEOS.masumiMitsuiWb],
    positions: [VIVIAN_57TH, [49.21806, -123.05126], ELLIOTT_57TH],
  },
  {
    routes: [ROUTES.masumiMitsui.name],
    description: "westbound branch elliott path",
    oneWay: "required",
    videos: [VIDEOS.masumiMitsuiWb],
    positions: [ELLIOTT_57TH, [49.21841, -123.05461], ELLIOTT_ASHBURN],
  },
  {
    routes: [ROUTES.masumiMitsui.name],
    description: "westbound branch ashburn",
    oneWay: "recommended",
    videos: [VIDEOS.masumiMitsuiWb],
    positions: [
      ELLIOTT_ASHBURN,
      [49.21839, -123.055],
      [49.21815, -123.05518],
      [49.21793, -123.05541],
      ASHBURN_UPLAND,
    ],
  },
];
