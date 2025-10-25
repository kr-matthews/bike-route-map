import { useContext, useMemo } from "react";
import { FilterContext, SettingContext } from "../../App";
import Marker from "./Marker";
import upgradeIcon from "../../images/marker-upgrade.svg";
import upgradeIconBlue from "../../images/marker-upgrade-blue.svg";
import { UPGRADE_VIDEOS } from "../../data/videos/upgrades";
import { formatDate } from "../../utils/videos";

export default function UpgradeMarkers() {
  const { upgradesShown } = useContext(SettingContext);

  const { selectedUpgrade, highlightedUpgrade } = useContext(FilterContext);

  return Object.values(UPGRADE_VIDEOS).map(
    (upgrade) =>
      (upgradesShown ||
        upgrade.id === selectedUpgrade?.id ||
        upgrade.id === highlightedUpgrade?.id) && (
        <UpgradeMarker key={upgrade.id} upgrade={upgrade} />
      )
  );
}

function UpgradeMarker({ upgrade }) {
  const formattedDate = formatDate(upgrade.date);

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
    }),
    [selectUpgrade, highlightUpgrade, upgrade.id]
  );

  const isActive =
    upgrade.id === selectedUpgrade?.id || upgrade.id === highlightedUpgrade?.id;

  return (
    <Marker
      iconUrl={isActive ? upgradeIconBlue : upgradeIcon}
      position={upgrade.position}
      useCenter
      tooltip={formattedDate}
      eventHandlers={eventHandlers}
    />
  );
}
