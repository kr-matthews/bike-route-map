import {
  LOW_LEVEL_COTTON_N,
  LOW_LEVEL_COTTON_S,
  SECOND_NARROWS_NE,
  SECOND_NARROWS_NW,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const COTTON_MAIN_S = [49.30686, -123.03937];
const HARBOUR_MAIN_S = [49.30563, -123.0342];
const COTTON_MAIN_N = [49.3068, -123.03826];

const BARROW_E = [49.30399, -123.02984];

export const MAIN_COTTON = [
  // eb
  {
    routeNames: [ROUTES.mainCotton.name],
    description: "eb protected",
    type: "comfortable", // mostly dedicated, except the end
    oneWay: "required",
    positions: [
      LOW_LEVEL_COTTON_S,
      [49.30821, -123.04665],
      [49.3082, -123.04501],
      [49.3082, -123.04484],
      [49.30818, -123.0446],
      [49.30816, -123.04449],
      [49.30801, -123.04384],
      [49.30791, -123.04361],
      [49.30786, -123.04349],
      [49.3072, -123.04104],
      [49.30714, -123.04085],
      [49.30713, -123.0407],
      [49.30709, -123.04048],
      [49.30704, -123.04034],
      [49.30705, -123.04027],
      [49.30704, -123.04019],
      [49.30692, -123.03972],
      COTTON_MAIN_S,
    ],
  },
  {
    routeNames: [ROUTES.mainCotton.name],
    description: "eb painted",
    type: "painted",
    oneWay: "required",
    positions: [
      COTTON_MAIN_S,
      [49.30686, -123.03931],
      [49.30671, -123.03855],
      [49.30662, -123.03816],
      [49.30649, -123.03765],
      [49.30641, -123.0372],
      [49.30636, -123.0368],
      [49.30633, -123.03656],
      [49.30626, -123.03624],
      [49.30613, -123.03583],
      [49.30576, -123.03443],
      HARBOUR_MAIN_S,
    ],
  },

  // wb
  {
    routeNames: [ROUTES.mainCotton.name],
    description: "wb dedicated",
    type: "dedicated",
    oneWay: "required",
    positions: [
      HARBOUR_MAIN_S,
      [49.30568, -123.03413],
      [49.3059, -123.03412],
      [49.30596, -123.03437],
      [49.30612, -123.03494],
      [49.30613, -123.03504],
      [49.30645, -123.03615],
      [49.3065, -123.03637],
      [49.30661, -123.03711],
      COTTON_MAIN_N,
    ],
  },
  {
    routeNames: [ROUTES.mainCotton.name],
    description: "wb painted",
    type: "painted",
    oneWay: "required",
    positions: [
      COTTON_MAIN_N,
      [49.30684, -123.03846],
      [49.307, -123.03928],
      [49.30708, -123.03967],
      [49.30728, -123.0404],
      [49.30733, -123.04059],
      [49.30743, -123.04102],
      [49.30756, -123.04154],
      [49.30764, -123.04189],
      [49.30806, -123.0434],
      [49.30813, -123.04365],
      [49.30817, -123.04381],
      [49.30825, -123.04397],
      [49.30828, -123.04409],
      [49.30832, -123.04426],
      [49.30835, -123.04441],
      [49.30839, -123.04464],
      [49.30841, -123.04497],
      [49.30842, -123.04579],
      LOW_LEVEL_COTTON_N,
    ],
  },

  // east of harbour
  {
    routeNames: [ROUTES.mainCotton.name],
    description: "harbour & barrow",
    type: "quiet",
    videoIds: [VIDEOS.secondNarrowsSb.id, VIDEOS.secondNarrowsNb.id],
    videoIdsStartAtStart: [VIDEOS.secondNarrowsSb.id],
    videoIdsEndAtStart: [VIDEOS.secondNarrowsNb.id],
    positions: [
      HARBOUR_MAIN_S,
      [49.30517, -123.0342],
      [49.3046, -123.03209],
      [49.30404, -123.02997],
      BARROW_E,
    ],
  },
  {
    routeNames: [ROUTES.mainCotton.name],
    description: "path from barrow to main",
    type: "mixed",
    videoIds: [VIDEOS.secondNarrowsSb.id, VIDEOS.secondNarrowsNb.id],
    positions: [BARROW_E, [49.30412, -123.02984], SECOND_NARROWS_NW],
  },
  {
    routeNames: [ROUTES.mainCotton.name],
    description: "main st path under highway",
    type: "mixed",
    videoIds: [VIDEOS.secondNarrowsNb.id],
    positions: [
      SECOND_NARROWS_NW,
      [49.30457, -123.03001],
      [49.30464, -123.02998],
      [49.30466, -123.02994],
      [49.30467, -123.02988],
      [49.30466, -123.02972],
      [49.30466, -123.02938],
      [49.30467, -123.02901],
      [49.30474, -123.0279],
      [49.30472, -123.02757],
      [49.30474, -123.02711],
      [49.3048, -123.02665],
      [49.30483, -123.02623],
      [49.30487, -123.02568],
      [49.30492, -123.02548],
      [49.30494, -123.02533],
      [49.30496, -123.02514],
      [49.30496, -123.02499],
      SECOND_NARROWS_NE,
    ],
  },
];
