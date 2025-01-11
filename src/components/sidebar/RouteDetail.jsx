import { useContext } from "react";
import Leg from "./Leg";
import { FilterContext } from "../../App";
import { getBackgroundColor, getRouteBounds } from "../../utils/routes";
import { displayDistance, displayPercent } from "../../utils/strings";
import { TYPES } from "../../utils/segmentTypes";
import CloseIcon from "../icons/CloseIcon";
import ZoomToIcon from "../icons/ZoomToIcon";
import warningIcon from "../../images/warning.svg";

export default function RouteDetail({ mapRef }) {
  const { selectedRoute, selectRoute, highlightRoute } =
    useContext(FilterContext);
  const {
    name,
    legs,
    bidirectionalDistance,
    oneWayDistance,
    isOneWay,
    weightedProportions,
    isIncomplete,
    isGap,
    notes,
  } = selectedRoute;

  const isAllOneWay = bidirectionalDistance === 0;
  const isAllBidirectional = oneWayDistance === 0;
  const distance = isOneWay
    ? oneWayDistance
    : bidirectionalDistance + oneWayDistance / 2;

  const weightedDistance = Object.values(weightedProportions).reduce(
    (acc, weight) => acc + weight
  );

  const distanceTitle = isOneWay
    ? `${name} is one-way`
    : isAllBidirectional
    ? undefined
    : [
        isAllOneWay
          ? null
          : `${displayDistance(bidirectionalDistance)} of two-way travel`,
        `${displayDistance(oneWayDistance)} of one-way travel`,
        `${displayDistance(
          weightedDistance
        )} average* distance in each direction\n*if one direction of travel has gaps, this number will be misleading`,
      ]
        .filter(Boolean)
        .join("\n");

  const proportionsTitle = TYPES.map(({ key, name }) =>
    weightedProportions[key]
      ? `${displayPercent(weightedProportions[key] / weightedDistance)} ${name}`
      : null
  )
    .filter(Boolean)
    .join("\n");

  const bounds = getRouteBounds(name);

  return (
    selectedRoute && (
      <>
        {bounds && (
          <ZoomToIcon
            onClick={bounds ? () => mapRef.fitBounds(bounds) : undefined}
            onMouseOver={() => highlightRoute(name)}
            onMouseOut={() => highlightRoute(null)}
          />
        )}
        <h2
          style={{
            textAlign: "center",
            marginBottom: "0px",
            marginTop: "0.5em",
            paddingLeft: "1.5em",
            paddingRight: "1.5em",
          }}
        >
          <span
            onMouseOver={() => highlightRoute(name)}
            onMouseOut={() => highlightRoute(null)}
          >
            {isGap ? <em>{name}</em> : name}
          </span>
        </h2>
        <h4
          title={distanceTitle}
          style={{
            textAlign: "center",
            marginBottom: "4px",
            marginTop: 0,
            cursor: distanceTitle ? "help" : undefined,
          }}
        >
          Distance: {displayDistance(distance)}
          {distanceTitle && "*"}
        </h4>
        <div
          title={proportionsTitle}
          style={{
            marginRight: "0.5em",
            minHeight: "10px",
            cursor: "help",
            background: getBackgroundColor(selectedRoute),
          }}
        />
        <CloseIcon onClick={() => selectRoute(null)} />

        <div style={{ overflow: "auto" }}>
          {isIncomplete && (
            <p style={{ paddingLeft: "1em", paddingRight: "1em" }}>
              <img
                src={warningIcon}
                alt="incomplete"
                style={{ height: "1em" }}
              />{" "}
              <em>
                Note: The data for this route is incomplete and may extend
                further than is currently drawn on the map.
              </em>
            </p>
          )}

          {notes && (
            <p style={{ paddingLeft: "1em", paddingRight: "1em" }}>{notes}</p>
          )}

          {isGap && (
            <p style={{ paddingLeft: "1em", paddingRight: "1em" }}>
              Note: This is a <em>gap</em> in the official bike network, and is{" "}
              <b>not</b> an designated bike route.
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
