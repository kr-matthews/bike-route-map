import { useContext, useEffect, useMemo, useState } from "react";
import { Selections } from "../../App";
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

export default function Routes({ navigateTo, mapRef }) {
  const [searchText, setSearchText] = useState("");
  const [routesToShowType, setRoutesToShowType] = useState(ALL);

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
        ({ name, cities, segmentBounds }) =>
          isSubsequence(
            removeWhiteSpaces(searchText.toLowerCase()),
            name.toLowerCase()
          ) &&
          (routesToShowType === ALL ||
            (routesToShowType === VISIBLE &&
              segmentBounds.some((segmentBound) =>
                mapRef?.getBounds().intersects(segmentBound)
              )) ||
            cities?.includes(routesToShowType))
      ),
    // eslint-disable-next-line
    [searchText, routesToShowType, mapRef, mapChangedIndicator]
  );

  return (
    <Panel name={VIEWS.routes.name} navigateTo={navigateTo}>
      <ListTypeDropdown
        options={[]}
        selected={routesToShowType}
        setSelected={setRoutesToShowType}
      />
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
    useContext(Selections);
  const isHighlighted = highlightedRoute?.name === route.name;
  const isSelected = selectedRoute?.name === route.name;

  const background = getBackgroundColor(route, isHighlighted);
  const displayName = route.shortName ?? route.name;

  const distance = route.isOneWay
    ? route.oneWayDistance
    : route.bidirectionalDistance + route.oneWayDistance / 2;
  const videoCount = route.legs.reduce(
    (acc, leg) => acc + Object.keys(leg.videos ?? []).length,
    0
  );
  const nameDistanceVideoCountMessages = [
    route.name,
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
        padding: "6px 0",
        margin: "5px 0",
        cursor: "pointer",
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
      <span
        style={{
          fontWeight: isSelected ? "bold" : "",
          color: isHighlighted ? BLACK : WHITE,
        }}
      >
        {isSelected ? <u>{displayName}</u> : displayName}
      </span>
    </div>
  );
}
