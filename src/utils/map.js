import { LatLngBounds } from "leaflet";

export const TILE_LAYER = {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
};

export const DEFAULT_BOUNDS = new LatLngBounds(
  [49.33, -123.26],
  [49.12, -122.82]
);
