import { useContext, useEffect, useMemo, useState } from "react";
import { FilterContext, SettingContext } from "../../App";
import { Search } from "./Search";
import { isSubsequence, removeWhiteSpaces } from "../../utils/strings";
import { VIEWS } from "./Sidebar";
import Panel from "./Panel";
import { ListTypeDropdown } from "./ListTypeDropdown";
import useSavedState from "../../hooks/useSavedState";
import { REGIONS } from "../../data/regions";
import { BLACK, DARK_BLUE, LIGHT_BLUE, WHITE } from "../../utils/colours";
import { COLOUR_HIGHLIGHTED } from "../../utils/constants";
import { UPGRADE_VIDEOS } from "../../data/videos/upgrades";

const booleanOptions = ["Show all", "Show only selected/highlighted"];

export default function Upgrades({ navigateTo, mapRef }) {
  const [searchText, setSearchText] = useState("");
  const [regionNameToShow, setRegionNameToShow] = useSavedState(
    "upgrade_region_name",
    REGIONS.all.name
  );

  // actual value not important, just that it changes;
  // not sure how else to 'detect' that mapRef?.getBounds() has changed
  const [mapChangedIndicator, setMapChangedIndicator] = useState(0);

  useEffect(() => {
    mapRef?.addEventListener({
      moveend: () => setMapChangedIndicator((x) => x + 1),
      zoomend: () => setMapChangedIndicator((x) => x + 1),
    });
  }, [mapRef]);

  const upgradesToShow = useMemo(
    () =>
      Object.values(UPGRADE_VIDEOS)
        .filter(
          ({ title, region, routeNames, position }) =>
            (isSubsequence(
              removeWhiteSpaces(searchText.toLowerCase()),
              title.toLowerCase()
            ) ||
              routeNames.some((routeName) =>
                isSubsequence(
                  removeWhiteSpaces(searchText.toLowerCase()),
                  routeName.toLowerCase()
                )
              )) &&
            (regionNameToShow === REGIONS.all.name ||
              (regionNameToShow === REGIONS.inView.name &&
                mapRef?.getBounds().contains(position)) ||
              region.name === regionNameToShow)
        )
        .toSorted((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0)),
    // eslint-disable-next-line
    [searchText, regionNameToShow, mapRef, mapChangedIndicator]
  );

  const s = upgradesToShow.length === 1 ? "" : "s";

  return (
    <Panel
      name={VIEWS.upgrades.name}
      title={VIEWS.upgrades.name}
      navigateTo={navigateTo}
    >
      <ListTypeDropdown
        selected={regionNameToShow}
        setSelected={setRegionNameToShow}
      />
      <Search text={searchText} setText={setSearchText} />

      <UpgradeMarkerSetting />

      <p style={{ marginTop: 0, marginRight: "12px" }}>
        Listing {upgradesToShow.length} upgrade{s}.
      </p>

      {upgradesToShow.length > 0 && (
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
          {upgradesToShow.map((upgrade) => (
            <Upgrade key={upgrade.id} upgrade={upgrade} mapRef={mapRef} />
          ))}
        </div>
      )}
    </Panel>
  );
}

function Upgrade({ upgrade, mapRef }) {
  const {
    highlightedUpgrade,
    highlightUpgrade,
    selectedUpgrade,
    selectUpgrade,
  } = useContext(FilterContext);
  const isHighlighted = highlightedUpgrade?.id === upgrade.id;
  const isSelected = selectedUpgrade?.id === upgrade.id;

  const background = isHighlighted
    ? COLOUR_HIGHLIGHTED
    : isSelected
    ? DARK_BLUE
    : LIGHT_BLUE;
  const textColour = isSelected || isHighlighted ? WHITE : BLACK;
  const displayName = upgrade.title;
  const region = upgrade.region.name;

  const clickMessages = ["Click for details & video", "Right-click to zoom-to"];

  return (
    <div
      title={clickMessages}
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
      onMouseOver={() => highlightUpgrade(upgrade.id)}
      onMouseOut={() => highlightUpgrade(null)}
      onClick={() => selectUpgrade(upgrade.id)}
      onContextMenu={(e) => {
        e.preventDefault();
        mapRef.fitBounds([upgrade.position, upgrade.position]);
      }}
    >
      <div
        style={{
          fontWeight: isSelected ? "bold" : "",
          fontSize: isSelected ? "96%" : "100%",
          lineHeight: "20px",
          height: "40px",
          color: textColour,
        }}
      >
        {isSelected ? <u>{displayName}</u> : displayName}
      </div>
      <div
        style={{
          fontSize: "67%",
          color: textColour,
        }}
      >
        {region}
      </div>
    </div>
  );
}

function UpgradeMarkerSetting() {
  const { upgradesShown, setUpgradesShown } = useContext(SettingContext);

  return (
    // padding to match inherent padding on inputs, prevent scroll bar
    <div style={{ padding: "4px", margin: "0.5em 0 1em 0" }}>
      <b>Upgrade markers: </b>
      {booleanOptions.map((option) => (
        <label
          key={option}
          htmlFor="upgrades"
          style={{
            cursor: "pointer",
            padding: "4px",
          }}
          onClick={() => setUpgradesShown(option === booleanOptions[0])}
        >
          <input
            type="radio"
            id={option}
            name="upgrades"
            style={{ cursor: "pointer" }}
            checked={option === booleanOptions[upgradesShown ? 0 : 1]}
            onChange={() => {}}
          />
          {option}
        </label>
      ))}
    </div>
  );
}
