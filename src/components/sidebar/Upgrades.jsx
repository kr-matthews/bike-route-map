import { useContext, useEffect, useMemo, useState } from "react";
import { SettingContext } from "../../App";
import { Search } from "./Search";
import { isSubsequence, removeWhiteSpaces } from "../../utils/strings";
import { VIEWS } from "./Sidebar";
import Panel from "./Panel";
import { ListTypeDropdown } from "./ListTypeDropdown";
import useSavedState from "../../hooks/useSavedState";
import { REGIONS } from "../../data/regions";
import { UPGRADE_VIDEOS } from "../../data/videos/upgrades";

const booleanOptions = ["Show", "Hide"];

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
      Object.values(UPGRADE_VIDEOS).filter(
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
      ),
    // eslint-disable-next-line
    [searchText, regionNameToShow, mapRef, mapChangedIndicator]
  );

  return (
    <Panel
      name={VIEWS.upgrades.name}
      title={`${VIEWS.upgrades.name} (${upgradesToShow.length})`}
      navigateTo={navigateTo}
    >
      <ListTypeDropdown
        selected={regionNameToShow}
        setSelected={setRegionNameToShow}
      />
      <Search text={searchText} setText={setSearchText} />

      <UpgradeMarkerSetting />

      {upgradesToShow.length ? (
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
            <Upgrade key={upgrade.title} upgrade={upgrade} />
          ))}
        </div>
      ) : (
        "No upgrades match the search/region"
      )}
    </Panel>
  );
}

function Upgrade({ upgrade }) {
  // !!! create tile UI and functionality
  return <div key={upgrade.title}>{upgrade.title}</div>;
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
