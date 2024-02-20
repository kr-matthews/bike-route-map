import { LatLngBounds } from "leaflet";
import { DEFAULT_BOUNDS } from "./map";
import { sumSegmentsWeightedLengths } from "./segments";
import { normalizeType } from "./segmentTypes";
import { SEGMENTS } from "../data/segments";

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

export const getWeightedRouteDistance = (routeName) =>
  sumSegmentsWeightedLengths(getRouteSegments(routeName));

export const getWeightedRouteDistanceOfType = (routeName, segmentType) =>
  sumSegmentsWeightedLengths(getRouteSegmentsOfType(routeName, segmentType));
