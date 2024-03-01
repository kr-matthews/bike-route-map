import { RIVER_PKWY_CAMBIE_SE, RIVER_PKWY_CAMBIE_SW } from "../intersections";
import { ROUTES } from "../routes";

const EB_PAINT_START = [49.1772, -123.14325];
const WB_PAINT_END = [49.176, -123.14618];

export const RIVER_PARKWAY = [
  {
    description: "hollybridge",
    type: "combined",
    positions: [
      [49.17405, -123.14767],
      [49.17412, -123.14789],
      [49.17424, -123.14811],
      [49.17461, -123.14853],
    ],
  },

  {
    routeNames: [ROUTES.riverPkwy.name],
    description: "eb: dedicated",
    type: "dedicated",
    oneWay: "required",
    positions: [
      [49.17469, -123.14852], // HOLLYBRIDGE
      [49.17472, -123.14842],
      [49.1753, -123.14722],
      [49.17534, -123.14721],
      [49.17554, -123.14676],
      [49.17553, -123.1467],
      [49.17585, -123.14601],
      [49.1759, -123.14599],
      [49.17618, -123.14537],
      [49.17618, -123.1453],
      [49.17624, -123.14516],
      [49.17627, -123.14505],
      [49.17633, -123.14494],
      [49.17637, -123.14488],
      [49.17651, -123.14458],
      [49.17655, -123.14456],
      [49.17677, -123.14409],
      [49.17678, -123.14398],
      [49.17712, -123.14328],
      EB_PAINT_START,
    ],
  },
  {
    routeNames: [ROUTES.riverPkwy.name],
    description: "eb: painted",
    type: "painted",
    oneWay: "required",
    positions: [
      EB_PAINT_START,
      [49.17769, -123.14226],
      [49.17793, -123.14181],
      [49.17812, -123.14149],
      [49.17826, -123.1413],
      [49.17851, -123.141],
      [49.17873, -123.1408],
      [49.1798, -123.14009],
      [49.18048, -123.13974],
      [49.18167, -123.1391],
      [49.18269, -123.13853],
      [49.18324, -123.13821],
      [49.18387, -123.13785],
      RIVER_PKWY_CAMBIE_SE,
    ],
  },
  {
    routeNames: [ROUTES.riverPkwy.name],
    description: "wb: painted",
    type: "painted",
    oneWay: "required",
    positions: [
      RIVER_PKWY_CAMBIE_SW,
      [49.18353, -123.13823],
      [49.18274, -123.13863],
      [49.18128, -123.13944],
      [49.18066, -123.13978],
      [49.18004, -123.14015],
      [49.17916, -123.14065],
      [49.17893, -123.14081],
      [49.17861, -123.14105],
      [49.17834, -123.14137],
      [49.17811, -123.14168],
      [49.178, -123.14186],
      [49.17636, -123.14535],
      [49.17598, -123.14613],
      WB_PAINT_END,
    ],
  },
  {
    routeNames: [ROUTES.riverPkwy.name],
    description: "wb: dedicated",
    type: "dedicated",
    oneWay: "required",
    positions: [
      WB_PAINT_END,
      [49.17569, -123.14684],
      [49.17564, -123.14687],
      [49.17543, -123.14732],
      [49.17543, -123.14739],
      [49.17485, -123.14855],
      [49.17476, -123.14866], // HOLLYBRIDGE
    ],
  },
];