import { LatLngBounds } from "leaflet";
import { DEFAULT_BOUNDS } from "./map";
import { sumSegmentsLengths, sumSegmentsWeightedLengths } from "./segments";
import { TYPES, normalizeType } from "./segmentTypes";
import { SEGMENTS } from "../data/segments";
import { ROUTES } from "../data/routes";
import { COLOUR_HIGHLIGHTED } from "./constants";

export function getRouteBounds(routeName) {
  const routeSegments = SEGMENTS.filter(({ routeNames }) =>
    (routeNames ?? []).includes(routeName)
  );

  if (routeSegments.length === 0) return DEFAULT_BOUNDS;

  const latitudes = routeSegments.flatMap(({ positions }) =>
    positions.map(([lat, _]) => lat)
  );
  const longitudes = routeSegments.flatMap(({ positions }) =>
    positions.map(([_, long]) => long)
  );

  return new LatLngBounds(
    [Math.min(...latitudes), Math.min(...longitudes)],
    [Math.max(...latitudes), Math.max(...longitudes)]
  );
}

const getRouteSegments = (routeName) =>
  SEGMENTS.filter((segment) => segment.routeNames?.includes(routeName));

const getRouteSegmentsOfType = (routeName, segmentType) =>
  getRouteSegments(routeName).filter(
    (segment) => normalizeType(segment.type ?? "comfortable") === segmentType
  );

const getRouteSegmentsOfDirections = (routeName, segmentDirections) =>
  getRouteSegments(routeName).filter((segment) =>
    segmentDirections.includes(segment.oneWay)
  );

export const getWeightedRouteDistance = (routeName) =>
  sumSegmentsWeightedLengths(getRouteSegments(routeName));

export const getWeightedRouteDistanceOfType = (routeName, segmentType) =>
  sumSegmentsWeightedLengths(getRouteSegmentsOfType(routeName, segmentType));

const getRouteBidirectionalDistance = (routeName) =>
  sumSegmentsLengths(getRouteSegmentsOfDirections(routeName, [undefined]));

const getRouteOneWayDistance = (routeName) =>
  sumSegmentsLengths(
    getRouteSegmentsOfDirections(routeName, ["required", "recommended"])
  );

const getRouteWeightedProportions = (routeName) =>
  TYPES.reduce((acc, type) => {
    acc[type.key] = getWeightedRouteDistanceOfType(routeName, type.key);
    return acc;
  }, {});

// ex: linear-gradient(to right,  #9c9e9f 0%,#9c9e9f 50%,#33ccff 50%,#33ccff 100%);

export const getBackgroundColor = (route, isHighlighted = false) => {
  if (isHighlighted) return COLOUR_HIGHLIGHTED;

  const cumulativeWeightedDistances = TYPES.reduce(
    (acc, { key }) => [
      ...acc,
      acc[acc.length - 1] + route.weightedProportions[key],
    ],
    [0]
  );
  const totalWeightedDistance =
    cumulativeWeightedDistances[cumulativeWeightedDistances.length - 1];

  const linearGradient =
    "to right, " +
    TYPES.flatMap(({ key, colour, oneWayColour }, index) =>
      route.weightedProportions[key] === 0
        ? []
        : [
            gradientPortion(
              colour ?? oneWayColour,
              cumulativeWeightedDistances[index],
              totalWeightedDistance
            ),
            gradientPortion(
              colour ?? oneWayColour,
              cumulativeWeightedDistances[index + 1],
              totalWeightedDistance
            ),
          ]
    ).join(", ");

  return `linear-gradient(${linearGradient})`;
};

const gradientPortion = (colour, weight, totalWeight) =>
  `${colour} ${(100 * weight) / totalWeight}%`;

export const AUGMENTED_ROUTES = Object.entries(ROUTES).reduce(
  (acc, [key, route]) => {
    acc[key] = {
      ...route,
      bidirectionalDistance: getRouteBidirectionalDistance(route.name),
      oneWayDistance: getRouteOneWayDistance(route.name),
      weightedProportions: getRouteWeightedProportions(route.name),
    };
    return acc;
  },
  {}
);

export const getAugmentedRoute = (routeName) =>
  Object.values(AUGMENTED_ROUTES).find((route) => route.name === routeName);
