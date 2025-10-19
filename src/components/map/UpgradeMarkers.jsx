import { useContext } from "react";
import { FilterContext, SettingContext } from "../../App";
import Marker from "./Marker";
import upgradeIcon from "../../images/marker-upgrade.svg";
import { UPGRADE_VIDEOS } from "../../data/videos/upgrades";

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
  return <Marker iconUrl={upgradeIcon} position={upgrade.position} useCenter />;
}
