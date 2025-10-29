import { useContext, useMemo } from "react";
import { FilterContext, SettingContext } from "../../App";
import Marker from "./Marker";
import upgradeIcon from "../../images/marker-upgrade.svg";
import upgradeIconBlue from "../../images/marker-upgrade-blue.svg";
import { UPGRADE_VIDEOS } from "../../data/videos/upgrades";
import { formatDate } from "../../utils/strings";

export default function UpgradeMarkers({ mapRef }) {
  const { upgradesShown } = useContext(SettingContext);

  const { selectedUpgrade, highlightedUpgrade } = useContext(FilterContext);

  return Object.values(UPGRADE_VIDEOS).map(
    (upgrade) =>
      (upgradesShown ||
        upgrade.id === selectedUpgrade?.id ||
        upgrade.id === highlightedUpgrade?.id) && (
        <UpgradeMarker key={upgrade.id} upgrade={upgrade} mapRef={mapRef} />
      )
  );
}

function UpgradeMarker({ upgrade, mapRef }) {
  const formattedDate = formatDate(upgrade.date);

  const { upgradesShown } = useContext(SettingContext);
  const {
    selectUpgrade,
    selectedUpgrade,
    highlightUpgrade,
    highlightedUpgrade,
  } = useContext(FilterContext);
  const eventHandlers = useMemo(
    () => ({
      click: () => selectUpgrade(upgrade.id),
      mouseover: () => highlightUpgrade(upgrade.id),
      mouseout: () => highlightUpgrade(null),
      contextmenu: () => mapRef.fitBounds([upgrade.position, upgrade.position]),
    }),
    [mapRef, selectUpgrade, highlightUpgrade, upgrade]
  );

  const isActive =
    upgrade.id === selectedUpgrade?.id || upgrade.id === highlightedUpgrade?.id;

  return (
    <Marker
      iconUrl={upgradesShown && isActive ? upgradeIconBlue : upgradeIcon}
      position={upgrade.position}
      useCenter
      tooltip={formattedDate}
      eventHandlers={eventHandlers}
    />
  );
}
