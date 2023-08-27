import { MapContainer, Pane, TileLayer } from "react-leaflet";
import { SEGMENTS } from "../../data/segments";
import Segment from "./Segment";
import { TILE_LAYER, DEFAULT_BOUNDS } from "../../utils/map";
import "./map.css";

export default function Map({ setMapRef }) {
  return (
    <div style={{ height: "1em", width: "calc(100% - 625px)" }}>
      <MapContainer
        style={{
          width: "100%",
          height: "100vh",
        }}
        bounds={DEFAULT_BOUNDS}
        scrollWheelZoom
        whenReady={({ target: mapRef }) => setMapRef(mapRef)}
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
