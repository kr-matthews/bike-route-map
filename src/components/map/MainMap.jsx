import { useContext, useEffect } from "react";
import { MapContainer } from "react-leaflet";
import { SEGMENTS } from "../../data/segments";
import { DEFAULT_BOUNDS } from "../../utils/map";
import { getRouteBounds } from "../../utils/routes";
import { FilterContext } from "../../App";
import CurrentLocation from "./CurrentLocation";
import PanesAndTiles from "./PanesAndTiles";
import PolylineCreator from "./PolylineCreator";
import Segment from "./Segment";
import "./map.css";

export default function MainMap({ mapRef, setMapRef, fullWidth = false }) {
  const { selectRoute, selectedRoute } = useContext(FilterContext);

  const mapBounds = selectedRoute
    ? getRouteBounds(selectedRoute.name)
    : DEFAULT_BOUNDS;

  useEffect(
    function closeOnEsc() {
      const onKeyDown = async (e) => {
        if (e.key === "Escape") {
          selectRoute(null);
        }
      };
      document.addEventListener("keydown", onKeyDown);
      return () => document.removeEventListener("keydown", onKeyDown);
    },
    [selectRoute]
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
        bounds={mapBounds}
        scrollWheelZoom
        whenReady={({ target: mapRef }) => setMapRef(mapRef)}
      >
        <PolylineCreator />

        <PanesAndTiles />

        {/* pass in all segments, including hidden ones, due to directional arrow bug */}
        {SEGMENTS.map((segment) => (
          <Segment
            key={segment.routeNames?.join(",") + "|" + segment.description}
            segment={segment}
          />
        ))}

        <CurrentLocation mapRef={mapRef} />
      </MapContainer>
    </div>
  );
}
