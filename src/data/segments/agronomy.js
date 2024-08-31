import {
  ACADIA_TORONTO,
  EAST_MALL_AGRONOMY,
  MARINE_AGRONOMY,
  UNIVERSITY_TORONTO_E,
  UNIVERSITY_TORONTO_W,
  WESBROOK_AGRONOMY_E,
  WESBROOK_AGRONOMY_W,
  WEST_MALL_AGRONOMY_N,
  WEST_MALL_AGRONOMY_S,
} from "../intersections";
import { ROUTES } from "../routes";

const UNIVERSITY_TORONTO_WW = [49.26624, -123.23704];

export const AGRONOMY = [
  {
    routeNames: [ROUTES.agronomy.name],
    description: "marine to west mall",
    type: "quiet",
    positions: [MARINE_AGRONOMY, [49.26024, -123.25381], WEST_MALL_AGRONOMY_N],
  },
  {
    routeNames: [ROUTES.agronomy.name],
    description: "west mall to university path",
    type: "quiet",
    positions: [
      WEST_MALL_AGRONOMY_S,
      [49.26006, -123.25064],
      [49.26012, -123.25043],
      [49.26057, -123.24916],
      EAST_MALL_AGRONOMY,
      [49.26176, -123.24577],
      WESBROOK_AGRONOMY_W,
      WESBROOK_AGRONOMY_E,
      [49.26332, -123.24138],
      [49.2644, -123.24226],
      ACADIA_TORONTO,
      UNIVERSITY_TORONTO_WW,
    ],
  },
  {
    routeNames: [ROUTES.agronomy.name],
    description: "crossing university",
    type: "quiet",
    positions: [
      UNIVERSITY_TORONTO_WW,
      UNIVERSITY_TORONTO_W,
      UNIVERSITY_TORONTO_E,
    ],
  },
  {
    description: "university shared path",
    type: "mixed",
    positions: [
      UNIVERSITY_TORONTO_WW,
      [49.26612, -123.23678],
      [49.26603, -123.23659],
      [49.26596, -123.23643],
      [49.26589, -123.23629],
      [49.26582, -123.2362],
      [49.26575, -123.23611],
      [49.26567, -123.23596],
      [49.26561, -123.23585],
      [49.26554, -123.23572],
      [49.26551, -123.23558],
      [49.26549, -123.23552],
      [49.26544, -123.23545],
      [49.26539, -123.2354],
      [49.2653, -123.23526],
      [49.26521, -123.23507],
      [49.26509, -123.23488],
      [49.26496, -123.23474],
      [49.26481, -123.23451],
      [49.26471, -123.23433],
      [49.26466, -123.23424],
    ],
  },
];
