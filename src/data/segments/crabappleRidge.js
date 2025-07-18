import {
  BARNARD_GRANVILLE,
  BARNARD_MIDDLE_ARM,
  FOURTH_WILLIAMS_N,
  FOURTH_WILLIAMS_S,
  NISHI_WILLIAMS_N,
  NISHI_WILLIAMS_S,
  STEVESTON_COMMUNITY_PARK_WESTWATER,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const NO_1_CHATHAM_E = [49.12643, -123.18134];
const CHATHAM_E = [49.12658, -123.17936];
const STEVESTON_COMMUNITY_PARK_CENTER = [49.12652, -123.17449];
const STEVESTON_COMMUNITY_PARK_IMPERIAL_N = [49.12315, -123.17441];

const SECOND_CHATHAM = [49.12644, -123.18425];
const GORMOND_ALLEY_RAYMOND = [49.14588, -123.18694];
const GORMOND_ALLEY_BARMOND = [49.14751, -123.18693];
const KIRKMOND_FRANCIS = [49.14833, -123.18893];
const MILLMORE_FRANCIS = [49.14833, -123.18989];
const MILLMORE_WARDMORE = [49.1491, -123.18992];
const MILLMORE_ULLSMORE = [49.14983, -123.18991];
const DALEMORE_BLUNDELL = [49.15566, -123.18761];
const GABRIOLA_BLUNDELL = [49.15566, -123.1898];
const BOWEN_BOWEN = [49.15874, -123.1895];
const QUILCHENA_DECOURCY = [49.15946, -123.18697];
const BARNARD_RIVER_NE = [49.17414, -123.18796];

export const CRABAPPLE_RIDGE = [
  {
    description: "chatham 1",
    type: "shared",
    undesignated: true,
    videoIds: [VIDEOS.crabappleSb.id],
    positions: [SECOND_CHATHAM, NO_1_CHATHAM_E],
  },
  {
    description: "chatham 2",
    type: "quiet",
    undesignated: true,
    videoIds: [VIDEOS.crabappleSb.id],
    positions: [
      NO_1_CHATHAM_E,
      [49.12653, -123.18109],
      [49.12653, -123.17971],
      CHATHAM_E,
    ],
  },
  {
    description: "steveston park west",
    type: "mixed",
    videoIds: [VIDEOS.crabappleSb.id],
    positions: [
      CHATHAM_E,
      [49.12644, -123.17928],
      [49.12648, -123.17917],
      [49.12652, -123.17896],
      [49.12654, -123.17868],
      [49.12655, -123.17717],
      STEVESTON_COMMUNITY_PARK_CENTER,
    ],
  },
  {
    description: "steveston park east",
    type: "mixed",
    positions: [
      STEVESTON_COMMUNITY_PARK_CENTER,
      [49.12651, -123.17376],
      [49.12652, -123.17228],
      [49.12655, -123.17189],
      [49.12674, -123.17133],
      [49.12674, -123.17124],
      [49.1268, -123.17116],
      [49.12681, -123.17105],
      [49.12685, -123.171],
      [49.127, -123.17075],
      [49.12712, -123.17058],
      [49.12713, -123.17001],
    ],
  },
  {
    description: "steveston park south & more",
    type: "mixed",
    videoIds: [VIDEOS.crabappleSb.id],
    positions: [
      STEVESTON_COMMUNITY_PARK_CENTER,
      [49.12522, -123.17447],
      [49.12521, -123.17435],
      [49.12505, -123.17436],
      [49.12324, -123.17437],
      STEVESTON_COMMUNITY_PARK_IMPERIAL_N,
    ],
  },
  {
    description: "steveston park south east branch",
    type: "other",
    videoIds: [VIDEOS.crabappleSb.id],
    videoIdsEndAtEnd: [VIDEOS.crabappleSb.id],
    positions: [
      STEVESTON_COMMUNITY_PARK_IMPERIAL_N,
      [49.12305, -123.17414],
      STEVESTON_COMMUNITY_PARK_WESTWATER,
    ],
  },
  {
    description: "steveston park south west branch",
    type: "other",
    positions: [
      STEVESTON_COMMUNITY_PARK_IMPERIAL_N,
      [49.12322, -123.17478],
      [49.1232, -123.17482], //lazy
    ],
  },

  {
    routeNames: [ROUTES.crabappleRidge.name],
    description: "south of williams",
    type: "quiet",
    videoIds: [VIDEOS.crabappleSb.id],
    positions: [
      SECOND_CHATHAM,
      [49.12834, -123.18425],
      [49.13023, -123.18424],
      [49.13202, -123.18423],
      [49.13378, -123.18423],
      [49.13467, -123.18424],
      [49.13467, -123.18471],
      [49.13466, -123.18492],
      [49.13462, -123.18508],
      [49.13457, -123.18528],
      [49.13455, -123.18548],
      [49.13455, -123.18571],
      [49.13459, -123.18584],
      [49.13508, -123.18586],
      [49.1352, -123.18584],
      [49.1355, -123.18573],
      [49.13639, -123.18571],
      [49.13728, -123.18572],
      [49.13728, -123.18695],
      [49.14028, -123.18699],
      FOURTH_WILLIAMS_S,
    ],
  },
  {
    routeNames: [ROUTES.crabappleRidge.name],
    description: "crossing williams at fourth",
    type: "shared",
    videoIds: [VIDEOS.crabappleSb.id],
    positions: [FOURTH_WILLIAMS_S, FOURTH_WILLIAMS_N],
  },
  {
    routeNames: [ROUTES.crabappleRidge.name],
    description: "crossing williams at nishi",
    type: "shared",
    positions: [NISHI_WILLIAMS_S, NISHI_WILLIAMS_N],
  },
  {
    routeNames: [ROUTES.crabappleRidge.name],
    description: "williams to raymond",
    type: "quiet",
    videoIds: [VIDEOS.crabappleSb.id],
    positions: [
      NISHI_WILLIAMS_N,
      [49.14178, -123.18562],
      [49.1418, -123.1873],
      [49.14433, -123.18732],
      [49.14588, -123.18733],
      GORMOND_ALLEY_RAYMOND,
    ],
  },
  {
    routeNames: [ROUTES.crabappleRidge.name],
    description: "alley from raymond to barmond",
    type: "mixed",
    videoIds: [VIDEOS.crabappleSb.id],
    positions: [
      GORMOND_ALLEY_RAYMOND,
      [49.1462, -123.18693],
      GORMOND_ALLEY_BARMOND,
    ],
  },
  {
    routeNames: [ROUTES.crabappleRidge.name],
    description: "barmond to francis",
    type: "quiet",
    videoIds: [VIDEOS.crabappleSb.id],
    positions: [
      GORMOND_ALLEY_BARMOND,
      [49.14751, -123.18891],
      KIRKMOND_FRANCIS,
    ],
  },
  {
    routeNames: [ROUTES.crabappleRidge.name],
    description: "francis",
    type: "shared",
    videoIds: [VIDEOS.crabappleSb.id],
    positions: [KIRKMOND_FRANCIS, MILLMORE_FRANCIS],
  },
  {
    routeNames: [ROUTES.crabappleRidge.name],
    description: "francis to wardmore",
    type: "quiet",
    videoIds: [VIDEOS.crabappleSb.id],
    positions: [MILLMORE_FRANCIS, MILLMORE_WARDMORE],
  },
  {
    routeNames: [ROUTES.crabappleRidge.name],
    description: "millmore path",
    type: "mixed",
    videoIds: [VIDEOS.crabappleSb.id],
    positions: [MILLMORE_WARDMORE, MILLMORE_ULLSMORE],
  },
  {
    routeNames: [ROUTES.crabappleRidge.name],
    description: "ullsmore to blundell",
    type: "quiet",
    videoIds: [VIDEOS.crabappleSb.id],
    positions: [
      MILLMORE_ULLSMORE,
      [49.14983, -123.18872],
      [49.1534, -123.18873],
      [49.1534, -123.1876],
      DALEMORE_BLUNDELL,
    ],
  },
  {
    routeNames: [ROUTES.crabappleRidge.name],
    description: "blundell",
    type: "shared",
    videoIds: [VIDEOS.crabappleSb.id],
    positions: [DALEMORE_BLUNDELL, GABRIOLA_BLUNDELL],
  },
  {
    routeNames: [ROUTES.crabappleRidge.name],
    description: "blundell to quilchena",
    type: "quiet",
    videoIds: [VIDEOS.crabappleSb.id],
    positions: [
      GABRIOLA_BLUNDELL,
      [49.15605, -123.18979],
      [49.15618, -123.18981],
      [49.15627, -123.18984],
      [49.15652, -123.18997],
      [49.15666, -123.18964],
      [49.15679, -123.18936],
      [49.15689, -123.18942],
      [49.15701, -123.18947],
      [49.15718, -123.1895],
      BOWEN_BOWEN,
    ],
  },
  {
    routeNames: [ROUTES.crabappleRidge.name],
    description: "quilchena path",
    type: "mixed",
    videoIds: [VIDEOS.crabappleSb.id],
    positions: [
      BOWEN_BOWEN,
      [49.15877, -123.18891],
      [49.1587, -123.18879],
      [49.15869, -123.18728],
      [49.15868, -123.18699],
      [49.15872, -123.18694],
      QUILCHENA_DECOURCY,
    ],
  },
  {
    routeNames: [ROUTES.crabappleRidge.name],
    description: "quilchena to barnard",
    type: "quiet",
    videoIds: [VIDEOS.crabappleSb.id],
    positions: [
      QUILCHENA_DECOURCY,
      [49.15947, -123.18893],
      [49.16085, -123.18892],
      [49.16091, -123.18889],
      [49.16093, -123.18882],
      [49.16093, -123.18854],
      [49.1628, -123.18857],
      [49.16281, -123.18473],
      [49.16282, -123.1846],
      [49.16286, -123.18453],
      BARNARD_GRANVILLE,
    ],
  },
  {
    routeNames: [ROUTES.crabappleRidge.name],
    description: "barnard",
    type: "shared",
    videoIds: [VIDEOS.crabappleSb.id, VIDEOS.granvilleWb.id],
    positions: [
      BARNARD_GRANVILLE,
      [49.16303, -123.18445],
      [49.16308, -123.18449],
      [49.16318, -123.18456],
      [49.16329, -123.18459],
      [49.16353, -123.18461],
      [49.16516, -123.18459],
      [49.16548, -123.18463],
      [49.16682, -123.18465],
      [49.16695, -123.18467],
      [49.16706, -123.18472],
      [49.16714, -123.18476],
      [49.16723, -123.18483],
      [49.16732, -123.18491],
      [49.1674, -123.18501],
      [49.16749, -123.18515],
      [49.16759, -123.18534],
      [49.16786, -123.18591],
      [49.16856, -123.18741],
      [49.16926, -123.18888],
      [49.16935, -123.18907],
      [49.16941, -123.18916],
      [49.16955, -123.18933],
      [49.16964, -123.18942],
      [49.16978, -123.18951],
      [49.16991, -123.18956],
      [49.17015, -123.18959],
      [49.17067, -123.18959],
      [49.17086, -123.18954],
      [49.17099, -123.18947],
      [49.17112, -123.18941],
      [49.17133, -123.1892],
      [49.1719, -123.18842],
      [49.17207, -123.18826],
      [49.17219, -123.18817],
      [49.17234, -123.18809],
      [49.17257, -123.18807],
      [49.17386, -123.18807],
      [49.17407, -123.18806],
      BARNARD_RIVER_NE,
    ],
  },
  {
    routeNames: [ROUTES.crabappleRidge.name],
    description: "river rd to middle arm trail",
    type: "mixed",
    videoIds: [VIDEOS.crabappleSb.id, VIDEOS.granvilleWb.id],
    videoIdsStartAtEnd: [VIDEOS.crabappleSb.id],
    videoIdsEndAtEnd: [VIDEOS.granvilleWb.id],
    positions: [BARNARD_RIVER_NE, BARNARD_MIDDLE_ARM],
  },
];
