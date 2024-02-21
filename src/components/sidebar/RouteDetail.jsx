import { useContext } from "react";
import Leg from "./Leg";
import { Selections } from "../../App";
import { getBackgroundColor, getRouteBounds } from "../../utils/routes";
import CloseIcon from "../icons/CloseIcon";
import ZoomToIcon from "../icons/ZoomToIcon";
import { displayDistance } from "../../utils/strings";

export default function RouteDetail({ mapRef }) {
  const { selectedRoute, selectRoute, highlightRoute } = useContext(Selections);
  const { name, legs, bidirectionalDistance, oneWayDistance, isOneWay } =
    selectedRoute;

  const isAllBidirectional = oneWayDistance === 0;
  const distance = isOneWay
    ? oneWayDistance
    : bidirectionalDistance + oneWayDistance / 2;

  return (
    selectedRoute && (
      <>
        <ZoomToIcon
          onClick={() => mapRef.fitBounds(getRouteBounds(name))}
          onMouseOver={() => highlightRoute(name)}
          onMouseOut={() => highlightRoute(null)}
        />
        <h2
          style={{
            textAlign: "center",
            marginBottom: "0px",
            marginTop: "0.5em",
          }}
        >
          <span
            onMouseOver={() => highlightRoute(name)}
            onMouseOut={() => highlightRoute(null)}
          >
            {name}
          </span>
        </h2>
        <h4 style={{ textAlign: "center", marginBottom: "4px", marginTop: 0 }}>
          Distance: {displayDistance(distance)}
          {!isAllBidirectional && "*"}
          {/* // !!! tooltip info */}
        </h4>
        <div
          style={{
            marginRight: "0.5em",
            minHeight: "10px",
            background: getBackgroundColor(selectedRoute),
          }}
        />
        <CloseIcon onClick={() => selectRoute(null)} />

        <div style={{ overflow: "auto" }}>
          {selectedRoute.isIncomplete && (
            <p style={{ paddingLeft: "1em" }}>
              Note: Route drawn on map is incomplete. Come back later.
            </p>
          )}
          {legs.map((leg) => (
            <Leg key={name + leg.name} leg={leg} />
          ))}
        </div>
      </>
    )
  );
}
