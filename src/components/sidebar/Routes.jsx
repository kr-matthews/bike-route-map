import { useContext, useEffect, useMemo, useState } from "react";
import { FilterContext } from "../../App";
import { Search } from "./Search";
import {
  displayDistance,
  isSubsequence,
  removeWhiteSpaces,
} from "../../utils/strings";
import { BLACK, WHITE } from "../../utils/colours";
import { VIEWS } from "./Sidebar";
import Panel from "./Panel";
import {
  AUGMENTED_ROUTES,
  getBackgroundColor,
  getRouteBounds,
} from "../../utils/routes";
import { ALL, VISIBLE } from "../../data/routes";
import { ListTypeDropdown } from "./ListTypeDropdown";
import useSavedState from "../../hooks/useSavedState";
import warningIcon from "../../images/warning.svg";

export default function Routes({ navigateTo, mapRef }) {
  const [searchText, setSearchText] = useState("");
  const [regionToShow, setRegionToShow] = useSavedState("list_region", ALL);

  // actual value not important, just that it changes;
  // not sure how else to 'detect' that mapRef?.getBounds() has changed
  const [mapChangedIndicator, setMapChangedIndicator] = useState(0);

  useEffect(() => {
    mapRef?.addEventListener({
      moveend: () => setMapChangedIndicator((x) => x + 1),
      zoomend: () => setMapChangedIndicator((x) => x + 1),
    });
  }, [mapRef]);

  const routesToShow = useMemo(
    () =>
      Object.values(AUGMENTED_ROUTES).filter(
        ({ name, cities, segmentBounds, isGap }) =>
          !isGap &&
          isSubsequence(
            removeWhiteSpaces(searchText.toLowerCase()),
            name.toLowerCase()
          ) &&
          (regionToShow === ALL ||
            (regionToShow === VISIBLE &&
              segmentBounds.some((segmentBound) =>
                mapRef?.getBounds().intersects(segmentBound)
              )) ||
            cities?.includes(regionToShow))
      ),
    // eslint-disable-next-line
    [searchText, regionToShow, mapRef, mapChangedIndicator]
  );

  return (
    <Panel
      name={VIEWS.routes.name}
      title={`${VIEWS.routes.name} (${routesToShow.length})`}
      navigateTo={navigateTo}
    >
      <ListTypeDropdown selected={regionToShow} setSelected={setRegionToShow} />
      <Search text={searchText} setText={setSearchText} />

      {routesToShow.length ? (
        <div
          style={{
            flex: 2,
            overflowY: "scroll",
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "repeat(1000, auto)",
            font: "120% system-ui",
          }}
        >
          {routesToShow.map((route) => (
            <Route key={route.name} route={route} mapRef={mapRef} />
          ))}
        </div>
      ) : (
        "No routes match the search/region"
      )}
    </Panel>
  );
}

function Route({ route, mapRef }) {
  const { selectedRoute, selectRoute, highlightedRoute, highlightRoute } =
    useContext(FilterContext);
  const isHighlighted = highlightedRoute?.name === route.name;
  const isSelected = selectedRoute?.name === route.name;

  const background = getBackgroundColor(route, isHighlighted);
  const displayName = route.shortName ?? route.name;
  const city = route.cities.length < 2 ? route.cities[0] : "Multiple Regions";

  const distance = route.isOneWay
    ? route.oneWayDistance
    : route.bidirectionalDistance + route.oneWayDistance / 2;
  const videoCount = route.legs.reduce(
    (acc, leg) => acc + Object.keys(leg.videos ?? []).length,
    0
  );
  const nameDistanceVideoCountMessages = [
    route.name,
    route.cities.join(", "),
    route.isIncomplete
      ? "**Note: Route shown on map may be incomplete.**"
      : null,
    displayDistance(distance),
    videoCount ? `${videoCount} video${videoCount === 1 ? "" : "s"}` : null,
    "Click for details & videos",
    "Right-click to zoom-to",
  ]
    .filter(Boolean)
    .join("\n");
  // route.legs.flatMap((leg) => Object.keys(leg.videos ?? []).map(capitalize) ?? [])

  const bounds = getRouteBounds(route.name);

  return (
    <div
      title={nameDistanceVideoCountMessages}
      style={{
        textAlign: "center",
        width: "10em",
        background,
        borderRadius: "10px",
        padding: "4px 0",
        margin: "3px 0",
        cursor: "pointer",
        position: "relative",
      }}
      onMouseOver={() => highlightRoute(route.name)}
      onMouseOut={() => highlightRoute(null)}
      onClick={() => selectRoute(route.name)}
      onContextMenu={
        bounds
          ? (e) => {
              e.preventDefault();
              mapRef.fitBounds(bounds);
            }
          : undefined
      }
    >
      <div
        style={{
          fontWeight: isSelected ? "bold" : "",
          color: isHighlighted ? BLACK : WHITE,
        }}
      >
        {isSelected ? <u>{displayName}</u> : displayName}
      </div>
      <div
        style={{
          fontSize: "67%",
          color: isHighlighted ? BLACK : WHITE,
        }}
      >
        {city}
      </div>
      {route.isIncomplete && (
        <img
          src={warningIcon}
          alt="incomplete"
          style={{ position: "absolute", right: 4, bottom: 4, height: "0.8em" }}
        />
      )}
    </div>
  );
}
