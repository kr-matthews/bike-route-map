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
        <Pane name="elevated-2" style={{ zIndex: 311 }} />
        <Pane name="elevated-2-adj" style={{ zIndex: 310 }} />
        <Pane name="elevated-2-border" style={{ zIndex: 309 }} />
        <Pane name="elevated-1" style={{ zIndex: 308 }} />
        <Pane name="elevated-1-adj" style={{ zIndex: 307 }} />
        <Pane name="elevated-1-border" style={{ zIndex: 306 }} />
        <Pane name="shared" style={{ zIndex: 305 }} />
        <Pane name="solo" style={{ zIndex: 304 }} />
        <Pane name="underground-1-border" style={{ zIndex: 303 }} />
        <Pane name="underground-1" style={{ zIndex: 301 }} />
        <Pane name="underground-1-adj" style={{ zIndex: 300 }} />

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
