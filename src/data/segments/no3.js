import {} from "../intersections";
import { ROUTES } from "../routes";

const NO_3_COOK_NE = [49.16656, -123.13644];
const NO_3_BUS_MALL_SE = [49.16743, -123.13643];
const NO_3_SEA_ISLAND_SW_S = [49.19069, -123.13087];

export const NO_3 = [
  {
    description: "cook wb",
    type: "dedicated",
    oneWay: "required",
    positions: [
      [49.16655, -123.13388],
      [49.16657, -123.134],
      [49.16658, -123.13621],
      [49.16656, -123.13628],
      NO_3_COOK_NE,
    ],
  },
  {
    routeNames: [ROUTES.no3.name],
    description: "nb: block after cook",
    type: "dedicated",
    oneWay: "required",
    positions: [
      NO_3_COOK_NE,
      [49.16665, -123.13644],
      [49.16669, -123.13641],
      [49.16737, -123.1364],
      NO_3_BUS_MALL_SE,
    ],
  },
  {
    routeNames: [ROUTES.no3.name],
    description: "nb: rest",
    type: "painted",
    oneWay: "required",
    positions: [
      NO_3_BUS_MALL_SE,
      [49.16881, -123.13642],
      [49.1702, -123.1364],
      [49.17104, -123.1364],
      [49.17202, -123.13647],
      [49.17384, -123.13657],
      [49.17449, -123.13663],
      [49.17493, -123.13663],
      [49.17541, -123.13659],
      [49.1763, -123.13653],
      [49.17737, -123.13651],
      [49.17737, -123.13651],
      [49.17838, -123.13651],
      [49.17975, -123.13649],
      [49.18123, -123.13649],
      [49.18285, -123.1365],
      [49.1836, -123.1365],
      [49.18436, -123.13647],
      [49.18466, -123.13634],
      [49.18496, -123.13616],
      [49.18736, -123.1338],
      [49.18881, -123.13236],
      [49.19064, -123.13057],
      [49.1909, -123.13031],
      [49.19119, -123.12996],
      [49.19129, -123.1298],
      [49.1916, -123.12961],
      [49.19183, -123.12947],
    ],
  },
  {
    routeNames: [ROUTES.no3.name],
    description: "sb: bridgeport to sea island",
    type: "painted",
    oneWay: "required",
    positions: [
      [49.19183, -123.12978],
      [49.19161, -123.12995],
      [49.19114, -123.13045],
      [49.1909, -123.13067],
      [49.19073, -123.13082],
      NO_3_SEA_ISLAND_SW_S,
    ],
  },
  {
    routeNames: [ROUTES.no3.name],
    description: "sb: sea island to capstan",
    type: "dedicated",
    oneWay: "required",
    positions: [
      NO_3_SEA_ISLAND_SW_S,
      [49.1904, -123.13114],
      [49.19038, -123.13118],
      [49.19022, -123.13134],
      [49.19017, -123.13135],
      [49.18985, -123.13166],
      [49.18906, -123.13242],
    ],
  },
  {
    routeNames: [ROUTES.no3.name],
    description: "sb: alderbridge to cook",
    type: "painted",
    oneWay: "required",
    positions: [
      [49.17722, -123.13679],
      [49.17541, -123.13688],
      [49.17493, -123.13691],
      [49.17384, -123.13689],
      [49.17203, -123.13676],
      [49.17122, -123.1367],
      [49.17021, -123.1367],
      [49.16881, -123.13672],
      [49.1677, -123.13671],
      [49.16664, -123.13673],
    ],
  },
];
