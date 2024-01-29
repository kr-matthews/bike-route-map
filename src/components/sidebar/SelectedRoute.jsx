import { useContext } from "react";
import { Selections } from "../../App";
import Leg from "./Leg";
import { getRouteBounds } from "../../utils/map";
import { DARK_GREEN, WHITE } from "../../utils/colours";
import CloseIcon from "../icons/CloseIcon";
import ZoomToIcon from "../icons/ZoomToIcon";

export default function SelectedRoute({ mapRef }) {
  const { selectedRoute, setSelected, setHighlighted } = useContext(Selections);

  return (
    <div
      style={{
        paddingLeft: "0.5em",
        height: selectedRoute ? "425px" : 0,
        borderTopLeftRadius: "1em",
        borderTopRightRadius: "1em",
        display: "flex",
        flexDirection: "column",
        backgroundColor: DARK_GREEN,
        color: WHITE,
        transition: "height 0.7s",
        position: "relative",
      }}
    >
      {selectedRoute && (
        <>
          <ZoomToIcon
            onClick={() => mapRef.fitBounds(getRouteBounds(selectedRoute.name))}
            onMouseOver={() => setHighlighted(selectedRoute.name)}
            onMouseOut={() => setHighlighted(null)}
          />
          <h2 style={{ textAlign: "center", marginBottom: "4px" }}>
            <span
              onMouseOver={() => setHighlighted(selectedRoute.name)}
              onMouseOut={() => setHighlighted(null)}
            >
              {selectedRoute.name}
            </span>
          </h2>
          <CloseIcon onClick={() => setSelected(null)} />

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
