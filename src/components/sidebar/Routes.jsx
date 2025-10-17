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
import { ListTypeDropdown } from "./ListTypeDropdown";
import useSavedState from "../../hooks/useSavedState";
import warningIcon from "../../images/warning.svg";
import { REGIONS } from "../../data/regions";

export default function Routes({ navigateTo, mapRef }) {
  const [searchText, setSearchText] = useState("");
  const [regionNameToShow, setRegionNameToShow] = useSavedState(
    "list_region_name",
    REGIONS.all.name
  );
  const region = Object.entries(REGIONS).find(
    ([_, { name }]) => name === regionNameToShow
  )[1];

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
        ({ name, regions, segmentBounds, isGap }) =>
          !isGap &&
          isSubsequence(
            removeWhiteSpaces(searchText.toLowerCase()),
            name.toLowerCase()
          ) &&
          (regionNameToShow === REGIONS.all.name ||
            (regionNameToShow === REGIONS.inView.name &&
              segmentBounds.some((segmentBound) =>
                mapRef?.getBounds().intersects(segmentBound)
              )) ||
            regions?.map(({ name }) => name).includes(regionNameToShow))
      ),
    // eslint-disable-next-line
    [searchText, regionNameToShow, mapRef, mapChangedIndicator]
  );

  const s = routesToShow.length === 1 ? "" : "s";

  return (
    <Panel
      name={VIEWS.routes.name}
      title={VIEWS.routes.name}
      navigateTo={navigateTo}
    >
      <ListTypeDropdown
        selected={regionNameToShow}
        setSelected={setRegionNameToShow}
      />
      <Search text={searchText} setText={setSearchText} />

      <p style={{ marginTop: 0, marginRight: "12px" }}>
        Showing {routesToShow.length} route{s}. {region.notes}
      </p>

      {routesToShow.length > 0 && (
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
  const region =
    route.regions.length < 2 ? route.regions[0].name : "Multiple Regions";

  const distance = route.isOneWay
    ? route.oneWayDistance
    : route.bidirectionalDistance + route.oneWayDistance / 2;
  const videoCount = route.legs.reduce(
    (acc, leg) => acc + Object.keys(leg.videos ?? []).length,
    0
  );
  const nameDistanceVideoCountMessages = [
    route.name,
    route.regions.map(({ name }) => name).join(", "),
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
        {region}
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
