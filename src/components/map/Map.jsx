import { MapContainer, Pane, TileLayer } from "react-leaflet";
import { LatLngBounds } from "leaflet";
import { SEGMENTS } from "../../data/segments";
import Segment from "./Segment";
import "./map.css";

const VANCOUVER_BOUNDS = new LatLngBounds(
  [49.32946, -123.27558],
  [49.18965, -122.96316]
);
const TILE_LAYER = {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
};

export default function Map() {
  return (
    <div style={{ height: "1em", width: "calc(100% - 625px)" }}>
      <MapContainer
        style={{
          width: "100%",
          height: "100vh",
        }}
        bounds={VANCOUVER_BOUNDS}
        scrollWheelZoom
      >
        <Pane name="elevated-segments" style={{ zIndex: 305 }} />
        <Pane name="elevated-adj-segments" style={{ zIndex: 304 }} />
        <Pane name="elevation-borders" style={{ zIndex: 303 }} />
        <Pane name="shared-segments" style={{ zIndex: 302 }} />
        <Pane name="single-segments" style={{ zIndex: 301 }} />
        <Pane name="connection-segments" style={{ zIndex: 300 }} />
        <TileLayer attribution={TILE_LAYER.attribution} url={TILE_LAYER.url} />
        {SEGMENTS.map((segment) => (
          <Segment
            key={
              segment.routes?.join() +
              segment.legs?.join() +
              segment.description
            }
            {...segment}
          />
        ))}
      </MapContainer>
    </div>
  );
}
