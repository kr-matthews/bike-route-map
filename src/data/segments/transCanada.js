import {
  CARLETON_YALE,
  SKEENA_BRIDGEWAY,
  TRANS_CANADA_FRANCES_UNION,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const UNDER_BRIDGE = [49.29225, -123.02588];
const WILLINGDON_CAMBRIDGE = [49.28651, -123.00309];
const TRANS_CANADA_PENZANCE = [49.28952, -122.99349];
const FELL_N = [49.28601, -122.97524];
const FELL_HASTINGS_SE = [49.28023, -122.97543];

export const TRANS_CANADA = [
  {
    routeNames: [ROUTES.transCanada.name],
    description: "from bridgeway",
    type: "mixed",
    videoIds: [VIDEOS.seaToRiverNb.id],
    videoIdsEndAtStart: [VIDEOS.seaToRiverNb.id],
    positions: [
      SKEENA_BRIDGEWAY,
      [49.29081, -123.02836],
      [49.29108, -123.02804],
      [49.29153, -123.02735],
      [49.29193, -123.02662],
      UNDER_BRIDGE,
    ],
  },
  {
    routeNames: [ROUTES.transCanada.name],
    description: "~second narrows bridge to sea to river",
    type: "other",
    videoIds: [VIDEOS.seaToRiverNb.id],
    positions: [
      UNDER_BRIDGE,
      [49.29233, -123.02564],
      [49.29241, -123.02533],
      [49.29248, -123.02488],
      [49.29259, -123.02428],
      [49.29264, -123.02404],
      [49.2927, -123.02387],
      [49.2927, -123.02313],
      [49.29263, -123.02212],
      [49.29262, -123.02166],
      [49.29261, -123.02145],
      [49.29249, -123.02059],
      [49.29228, -123.01941],
      [49.29218, -123.01883],
      [49.29207, -123.01748],
      [49.29205, -123.01706],
      [49.29204, -123.01609],
      [49.29199, -123.01543],
      [49.29171, -123.01399],
      [49.29169, -123.01385],
      [49.29159, -123.01362],
      [49.29123, -123.01279],
      [49.29116, -123.01265],
      [49.29105, -123.01254],
      [49.2909, -123.01234],
      [49.29074, -123.0121],
      [49.29068, -123.01196],
      [49.29055, -123.01163],
      [49.29045, -123.01147],
      [49.29017, -123.01114],
      CARLETON_YALE,
    ],
  },
  {
    routeNames: [ROUTES.transCanada.name],
    description: "sea to river to willingdon",
    type: "other",
    positions: [
      CARLETON_YALE,
      [49.28993, -123.01101],
      [49.28973, -123.01082],
      [49.28959, -123.01069],
      [49.28917, -123.01015],
      [49.28884, -123.00955],
      [49.28857, -123.00911],
      [49.28841, -123.00866],
      [49.28829, -123.00843],
      [49.28809, -123.0082],
      [49.288, -123.00808],
      [49.28782, -123.00764],
      [49.2878, -123.00743],
      [49.2876, -123.0069],
      [49.28757, -123.00674],
      [49.28754, -123.00621],
      [49.28751, -123.00605],
      [49.28746, -123.00591],
      [49.28741, -123.00587],
      [49.28728, -123.0059],
      [49.28726, -123.0057],
      [49.28721, -123.00556],
      [49.28712, -123.00484],
      [49.28718, -123.00445],
      [49.28713, -123.00422],
      [49.2871, -123.00392],
      [49.28709, -123.00368],
      [49.28704, -123.00339],
      [49.28697, -123.00316],
      [49.28687, -123.00313],
      [49.28679, -123.00317],
      [49.28663, -123.00319],
      [49.28652, -123.00311],
      WILLINGDON_CAMBRIDGE,
    ],
  },
  {
    routeNames: [ROUTES.transCanada.name],
    description: "willingdon and/to penzance",
    type: "mixed",
    positions: [
      WILLINGDON_CAMBRIDGE,
      [49.28648, -123.00295],
      [49.2864, -123.0029],
      [49.28602, -123.00291],
      [49.28585, -123.00289],
      [49.28567, -123.00279],
      [49.28564, -123.00271],
      [49.28563, -123.00247],
      [49.28563, -123.00201],
      [49.28565, -123.0016],
      [49.28574, -123.00104],
      [49.28581, -123.00081],
      [49.28592, -123.00047],
      [49.28626, -122.99957],
      [49.28647, -122.99905],
      [49.28683, -122.99824],
      [49.28751, -122.99707],
      [49.28798, -122.99628],
      [49.28836, -122.99563],
      [49.28902, -122.9946],
      [49.28959, -122.99359],
      TRANS_CANADA_PENZANCE,
    ],
  },
  {
    routeNames: [ROUTES.transCanada.name],
    description: "penzance to fell",
    type: "other",
    positions: [
      TRANS_CANADA_PENZANCE,
      [49.28956, -122.99338],
      [49.28996, -122.99192],
      [49.29021, -122.99105],
      [49.29034, -122.99021],
      [49.29065, -122.98931],
      [49.29071, -122.98913],
      [49.29076, -122.98881],
      [49.29081, -122.9886],
      [49.2909, -122.98838],
      [49.29095, -122.98818],
      [49.29096, -122.98796],
      [49.29095, -122.98775],
      [49.29088, -122.98731],
      [49.29079, -122.98698],
      [49.2907, -122.98671],
      [49.29034, -122.98607],
      [49.29016, -122.98568],
      [49.2901, -122.98551],
      [49.29009, -122.98542],
      [49.29005, -122.98515],
      [49.29006, -122.98496],
      [49.29003, -122.98474],
      [49.28993, -122.98431],
      [49.28958, -122.98349],
      [49.28944, -122.98289],
      [49.28941, -122.9827],
      [49.28941, -122.98242],
      [49.28937, -122.98228],
      [49.28916, -122.98164],
      [49.28891, -122.98075],
      [49.28877, -122.98043],
      [49.28862, -122.98017],
      [49.28827, -122.9797],
      [49.2881, -122.97944],
      [49.28757, -122.97868],
      [49.28684, -122.97765],
      [49.28636, -122.97697],
      [49.28626, -122.9768],
      [49.28621, -122.97667],
      [49.2862, -122.97631],
      [49.28617, -122.97619],
      [49.28617, -122.97608],
      [49.2862, -122.97588],
      [49.28614, -122.97556],
      [49.28608, -122.97534],
      FELL_N,
    ],
  },
  {
    routeNames: [ROUTES.transCanada.name],
    description: "fell",
    type: "quiet",
    positions: [
      FELL_N,
      [49.28427, -122.97533],
      [49.28275, -122.97539],
      [49.28264, -122.97543],
      [49.2825, -122.9755],
      [49.28033, -122.97555],
      FELL_HASTINGS_SE,
    ],
  },
  {
    routeNames: [ROUTES.transCanada.name],
    description: "connect to frances union",
    type: "mixed",
    positions: [
      FELL_HASTINGS_SE,
      [49.28022, -122.97537],
      TRANS_CANADA_FRANCES_UNION,
    ],
  },
];
