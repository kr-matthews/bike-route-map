import { useContext, useEffect } from "react";
import { MapContainer } from "react-leaflet";
import { SEGMENTS } from "../../data/segments";
import { DEFAULT_BOUNDS } from "../../utils/map";
import { Selections } from "../../App";
import Segment from "./Segment";
import PanesAndTiles from "./PanesAndTiles";
import PolylineCreator from "./PolylineCreator";
import "./map.css";

export default function MainMap({ setMapRef, fullWidth = false }) {
  const { setSelected, isHidden } = useContext(Selections);

  const visibleSegments = SEGMENTS.filter((segment) => !isHidden(segment));

  useEffect(
    function closeOnEsc() {
      const onKeyDown = async (e) => {
        if (e.key === "Escape") {
          setSelected(null);
        }
      };
      document.addEventListener("keydown", onKeyDown);
      return () => document.removeEventListener("keydown", onKeyDown);
    },
    [setSelected]
  );

  return (
    <div
      style={{
        height: "1em",
        width: fullWidth ? "100%" : "calc(100% - 625px)",
      }}
    >
      <MapContainer
        style={{
          width: "100%",
          height: "100vh",
        }}
        bounds={DEFAULT_BOUNDS}
        scrollWheelZoom
        whenReady={({ target: mapRef }) => setMapRef(mapRef)}
      >
        <PolylineCreator />

        <PanesAndTiles />

        {visibleSegments.map((segment) => (
          <Segment
            key={segment.routeNames?.join(",") + "|" + segment.description}
            {...segment}
          />
        ))}
      </MapContainer>
    </div>
  );
}
