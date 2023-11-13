import { useContext, useEffect } from "react";
import { Selections } from "../../App";
import Leg from "./Leg";
import { getRouteBounds } from "../../utils/map";

export default function SelectedRoute({ mapRef }) {
  const { selectedRoute, setSelected } = useContext(Selections);

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
        paddingLeft: "0.5em",
        height: selectedRoute ? "425px" : 0,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "DarkGreen",
        color: "White",
        transition: "height 0.7s",
        position: "relative",
      }}
    >
      {selectedRoute && (
        <>
          <button
            style={{
              position: "absolute",
              top: 25,
              left: 20,
              cursor: "pointer",
            }}
            onClick={() => mapRef.fitBounds(getRouteBounds(selectedRoute.name))}
          >
            Zoom to
          </button>
          <h2 style={{ textAlign: "center", marginBottom: "4px" }}>
            {selectedRoute.name}
          </h2>
          <button
            style={{
              position: "absolute",
              top: 25,
              right: 20,
              cursor: "pointer",
            }}
            onClick={() => setSelected(null)}
          >
            Close
          </button>
          <div style={{ overflow: "auto" }}>
            {selectedRoute.isIncomplete &&
              "Note: Route drawn on map is incomplete. Come back later."}
            {selectedRoute.legs.map((leg) => (
              <Leg key={selectedRoute.name + leg.name} leg={leg} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
