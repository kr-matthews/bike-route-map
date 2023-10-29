import { LatLngBounds } from "leaflet";
import { SEGMENTS } from "../data/segments";

export const TILE_LAYER = {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
};

export const DEFAULT_BOUNDS = new LatLngBounds(
  [49.32946, -123.26558],
  [49.16, -122.84116]
);

export function getRouteBounds(name) {
  const routeSegments = SEGMENTS.filter(({ routeNames }) =>
    (routeNames ?? []).includes(name)
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
