import { useContext } from "react";
import Leg from "./Leg";
import { Selections } from "../../App";
import { getRouteBounds } from "../../utils/routes";
import CloseIcon from "../icons/CloseIcon";
import ZoomToIcon from "../icons/ZoomToIcon";

export default function RouteDetail({ mapRef }) {
  const { selectedRoute, selectRoute, highlightRoute } = useContext(Selections);

  return (
    selectedRoute && (
      <>
        <ZoomToIcon
          onClick={() => mapRef.fitBounds(getRouteBounds(selectedRoute.name))}
          onMouseOver={() => highlightRoute(selectedRoute.name)}
          onMouseOut={() => highlightRoute(null)}
        />
        <h2 style={{ textAlign: "center", marginBottom: "4px" }}>
          <span
            onMouseOver={() => highlightRoute(selectedRoute.name)}
            onMouseOut={() => highlightRoute(null)}
          >
            {selectedRoute.name}
          </span>
        </h2>
        <CloseIcon onClick={() => selectRoute(null)} />

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
