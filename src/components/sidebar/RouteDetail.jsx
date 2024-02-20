import { useContext } from "react";
import Leg from "./Leg";
import { Selections } from "../../App";
import { getRouteBounds } from "../../utils/routes";
import CloseIcon from "../icons/CloseIcon";
import ZoomToIcon from "../icons/ZoomToIcon";

export default function RouteDetail({ mapRef }) {
  const { selectedRoute, setSelected, setHighlighted } = useContext(Selections);

  return (
    selectedRoute && (
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
    )
  );
}
