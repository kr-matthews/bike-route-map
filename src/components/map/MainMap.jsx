import { MapContainer } from "react-leaflet";
import { SEGMENTS } from "../../data/segments";
import Segment from "./Segment";
import PanesAndTiles from "./PanesAndTiles";
import { DEFAULT_BOUNDS } from "../../utils/map";
import "./map.css";

export default function MainMap({ setMapRef }) {
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
        <PanesAndTiles />

        {SEGMENTS.map((segment) => (
          <Segment
            key={
              segment.routeNames?.join() +
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
