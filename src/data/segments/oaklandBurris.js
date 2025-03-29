import {
  BUCKINGHAM_BURRIS,
  ROYAL_OAK_DOVER_NW,
  ROYAL_OAK_DOVER_SW,
  SIXTH_BURRIS,
} from "../intersections";
import { ROUTES } from "../routes";
import { VIDEOS } from "../videos";

const OAKLAND_PL_W = [49.22964, -122.98856];
const PEARL_OAKLAND_S = [49.22965, -122.98737];
const OAKDALE_OAKLAND_NE = [49.22969, -122.9856];
const EB_PRE_GILLEY = [49.2294, -122.97421];
const GILLEY_OAKLAND_S = [49.22936, -122.97201];
const CANADA_WAY_BURRIS = [49.23551, -122.95449];
const W_OF_6TH = [49.23737, -122.95151];

export const OAKLAND_BURRIS = [
  {
    description: "buckingham to canada way",
    type: "shared",
    undesignated: true,
    videoIds: [VIDEOS.oaklandBurrisWb.id, VIDEOS.oaklandBurrisEb.id],
    positions: [BUCKINGHAM_BURRIS, [49.2354, -122.95463], CANADA_WAY_BURRIS],
  },
  {
    description: "canada way to (almost) midtown",
    type: "shared",
    undesignated: true,
    videoIds: [VIDEOS.oaklandBurrisWb.id, VIDEOS.oaklandBurrisEb.id],
    positions: [
      CANADA_WAY_BURRIS,
      [49.23562, -122.95436],
      [49.23598, -122.95406],
      W_OF_6TH,
    ],
  },
  {
    description: "short path along burris to midtown",
    type: "mixed",
    videoIds: [VIDEOS.oaklandBurrisWb.id],
    videoIdsStartAtEnd: [VIDEOS.oaklandBurrisWb.id],
    positions: [
      W_OF_6TH,
      [49.2374, -122.95155],
      [49.23754, -122.95128],
      [49.23758, -122.95118],
      SIXTH_BURRIS,
    ],
  },
  {
    description: "old end of burris before path existed",
    type: "shared",
    undesignated: true,
    videoIds: [VIDEOS.oaklandBurrisEb.id],
    videoIdsEndAtEnd: [VIDEOS.oaklandBurrisEb.id],
    positions: [
      W_OF_6TH,
      [49.23746, -122.95132],
      [49.23752, -122.9512],
      SIXTH_BURRIS,
    ],
  },

  // eb
  {
    routeNames: [ROUTES.oaklandBurris.name],
    description: "eb: oakland to oakland pl",
    type: "comfortable",
    oneWay: "recommended",
    videoIds: [VIDEOS.oaklandBurrisEb.id],
    positions: [ROYAL_OAK_DOVER_SW, [49.22978, -122.98875], OAKLAND_PL_W],
  },
  {
    routeNames: [ROUTES.oaklandBurris.name],
    description: "eb: oakland pl",
    type: "quiet",
    oneWay: "recommended",
    videoIds: [VIDEOS.oaklandBurrisEb.id],
    positions: [
      OAKLAND_PL_W,
      [49.2296, -122.98848],
      [49.22958, -122.9884],
      [49.22957, -122.98741],
      PEARL_OAKLAND_S,
    ],
  },
  {
    routeNames: [ROUTES.oaklandBurris.name],
    description: "eb: lane to before gilley",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.oaklandBurrisEb.id],
    positions: [
      PEARL_OAKLAND_S,
      [49.22958, -122.98691],
      [49.22956, -122.9867],
      [49.22954, -122.98575],
      [49.22954, -122.98409],
      [49.22955, -122.98312],
      [49.22954, -122.98271],
      [49.22952, -122.98245],
      [49.22947, -122.98214],
      [49.22937, -122.98175],
      [49.22905, -122.98072],
      [49.22891, -122.98018],
      [49.22886, -122.97992],
      [49.22882, -122.97969],
      [49.22877, -122.97942],
      [49.22874, -122.97913],
      [49.22873, -122.97881],
      [49.22874, -122.97852],
      [49.22879, -122.97809],
      [49.22892, -122.97759],
      [49.229, -122.97734],
      [49.2292, -122.97685],
      [49.22926, -122.97666],
      [49.22933, -122.97641],
      [49.22938, -122.97612],
      [49.2294, -122.97587],
      [49.22942, -122.97562],
      EB_PRE_GILLEY,
    ],
  },
  {
    routeNames: [ROUTES.oaklandBurris.name],
    description: "eb: gilley right-turn lane",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.oaklandBurrisEb.id],
    positions: [EB_PRE_GILLEY, GILLEY_OAKLAND_S],
  },
  {
    routeNames: [ROUTES.oaklandBurris.name],
    description: "eb: lane after gilley",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.oaklandBurrisEb.id],
    positions: [
      GILLEY_OAKLAND_S,
      [49.22933, -122.97115],
      [49.22926, -122.97021],
      [49.22924, -122.96904],
      [49.22927, -122.96832],
      [49.22927, -122.96779],
      [49.22927, -122.96626],
      [49.22931, -122.9658],
      [49.22938, -122.9655],
      [49.22945, -122.96525],
      [49.22954, -122.96496],
      [49.22984, -122.96446],
      [49.23001, -122.96423],
      [49.23056, -122.96326],
      [49.23122, -122.96204],
      [49.23258, -122.95961],
      [49.23387, -122.95729],
      BUCKINGHAM_BURRIS,
    ],
  },

  // wb
  {
    routeNames: [ROUTES.oaklandBurris.name],
    description: "wb: lane",
    type: "painted",
    oneWay: "required",
    videoIds: [VIDEOS.oaklandBurrisWb.id],
    positions: [
      BUCKINGHAM_BURRIS,
      [49.23393, -122.95739],
      [49.23264, -122.9597],
      [49.23129, -122.96214],
      [49.23008, -122.96433],
      [49.22993, -122.96457],
      [49.22972, -122.96487],
      [49.22961, -122.96511],
      [49.22952, -122.96536],
      [49.22946, -122.96558],
      [49.2294, -122.96584],
      [49.22936, -122.96618],
      [49.22935, -122.96636],
      [49.22935, -122.96781],
      [49.22934, -122.96839],
      [49.22932, -122.96896],
      [49.22933, -122.96987],
      [49.2294, -122.97107],
      [49.22943, -122.97201],
      [49.22949, -122.97572],
      [49.22946, -122.97611],
      [49.2294, -122.97645],
      [49.22931, -122.97677],
      [49.2292, -122.97708],
      [49.22907, -122.97739],
      [49.22896, -122.97775],
      [49.22887, -122.9781],
      [49.22882, -122.97859],
      [49.22882, -122.979],
      [49.22884, -122.97929],
      [49.2289, -122.97966],
      [49.22894, -122.97988],
      [49.22903, -122.98032],
      [49.22942, -122.98164],
      [49.22952, -122.98198],
      [49.22959, -122.98233],
      [49.22962, -122.9827],
      [49.22964, -122.98406],
      OAKDALE_OAKLAND_NE,
    ],
  },
  {
    routeNames: [ROUTES.oaklandBurris.name],
    description: "wb: shared",
    type: "shared",
    oneWay: "required",
    videoIds: [VIDEOS.oaklandBurrisWb.id],
    positions: [
      OAKDALE_OAKLAND_NE,
      [49.22968, -122.9859],
      [49.22968, -122.98646],
      [49.22973, -122.987],
      [49.22983, -122.98757],
      [49.22991, -122.98795],
      [49.22994, -122.98825],
      [49.22995, -122.98869],
      ROYAL_OAK_DOVER_NW,
    ],
  },
];
