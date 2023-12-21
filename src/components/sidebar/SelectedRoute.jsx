import { useContext } from "react";
import { Selections } from "../../App";
import Leg from "./Leg";
import { getRouteBounds } from "../../utils/map";

export default function SelectedRoute({ mapRef }) {
  const { selectedRoute, setSelected } = useContext(Selections);

  return (
    <div
      style={{
        paddingLeft: "0.5em",
        height: selectedRoute ? "425px" : 0,
        borderTopLeftRadius: "1em",
        borderTopRightRadius: "1em",
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
            {selectedRoute.isIncomplete && (
              <p style={{ paddingLeft: "1em" }}>
                Note: Route drawn on map is incomplete. Come back later.
              </p>
            )}
            {selectedRoute.legs.map((leg) => (
              <Leg key={selectedRoute.name + leg.name} leg={leg} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
