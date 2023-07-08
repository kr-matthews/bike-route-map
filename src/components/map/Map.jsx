import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngBounds } from "leaflet";
import { SEGMENTS } from "../../data/segments";
import Segment from "./Segment";

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
    <div style={{ height: "1em", width: "60vw" }}>
      <MapContainer
        style={{
          width: "60vw",
          height: "100vh",
        }}
        bounds={VANCOUVER_BOUNDS}
        scrollWheelZoom
      >
        <TileLayer attribution={TILE_LAYER.attribution} url={TILE_LAYER.url} />
        {SEGMENTS.map((segment, index) => (
          // TODO: don't use index
          <Segment key={segment.description + index} {...segment} />
        ))}
      </MapContainer>
    </div>
  );
}
