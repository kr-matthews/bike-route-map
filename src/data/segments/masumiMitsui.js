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
    routeNames: [ROUTES.masumiMitsui.name],
    description: "angus to ontario",
    videos: [VIDEOS.masumiMitsuiEb.id, VIDEOS.masumiMitsuiWb.id],
    videosStartAtStart: [VIDEOS.masumiMitsuiEb.id],
    videosEndAtStart: [VIDEOS.masumiMitsuiWb.id],
    positions: [
      ANGUS_59TH,
      [49.21768, -123.14384],
      [49.21765, -123.14143],
      [49.21763, -123.14122],
      [49.21761, -123.14109],
      [49.21757, -123.1409],
      [49.21748, -123.14063],
      [49.21746, -123.14029],
      [49.21744, -123.13997],
      [49.21736, -123.13972],
      [49.21735, -123.13965],
      [49.21738, -123.13955],
      [49.21738, -123.13951],
      [49.21736, -123.13943],
      [49.21738, -123.13933],
      [49.21739, -123.13926],
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
      [49.2178, -123.11343],
      [49.21778, -123.11337],
      [49.21774, -123.1133],
      [49.21776, -123.1127],
      [49.21774, -123.11236],
      [49.21775, -123.11158],
      [49.2177, -123.11104],
      [49.21769, -123.10969],
      [49.21766, -123.10759],
      [49.21766, -123.1069],
      [49.21767, -123.10662],
      [49.21768, -123.10651],
      [49.21771, -123.10636],
      ONTARIO_58TH,
    ],
  },
  {
    routeNames: [ROUTES.masumiMitsui.name],
    description: "ontario to split",
    videos: [VIDEOS.masumiMitsuiEb.id, VIDEOS.masumiMitsuiWb.id],
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
    routeNames: [ROUTES.masumiMitsui.name],
    description: "eastbound branch",
    oneWay: "recommended",
    videos: [VIDEOS.masumiMitsuiEb.id],
    videosEndAtEnd: [VIDEOS.masumiMitsuiEb.id],
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
    routeNames: [ROUTES.masumiMitsui.name],
    description: "westbound branch 57th",
    oneWay: "recommended",
    videos: [VIDEOS.masumiMitsuiWb.id],
    videosStartAtStart: [VIDEOS.masumiMitsuiWb.id],
    positions: [VIVIAN_57TH, [49.21806, -123.05126], ELLIOTT_57TH],
  },
  {
    routeNames: [ROUTES.masumiMitsui.name],
    description: "westbound branch elliott path",
    oneWay: "required",
    videos: [VIDEOS.masumiMitsuiWb.id],
    positions: [ELLIOTT_57TH, [49.21841, -123.05461], ELLIOTT_ASHBURN],
  },
  {
    routeNames: [ROUTES.masumiMitsui.name],
    description: "westbound branch ashburn",
    oneWay: "recommended",
    videos: [VIDEOS.masumiMitsuiWb.id],
    positions: [
      ELLIOTT_ASHBURN,
      [49.21839, -123.055],
      [49.21815, -123.05518],
      [49.21793, -123.05541],
      ASHBURN_UPLAND,
    ],
  },
];
