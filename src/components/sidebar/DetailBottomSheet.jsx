import { useContext } from "react";
import { FilterContext } from "../../App";
import { LIGHT_GREEN, WHITE } from "../../utils/colours";
import RouteDetail from "./RouteDetail";
import UpgradeDetail from "./UpgradeDetail";

export default function DetailBottomSheet({ mapRef }) {
  const { selectedUpgrade, selectedRoute } = useContext(FilterContext);

  return (
    <div
      style={{
        paddingLeft: "0.5em",
        height: selectedUpgrade || selectedRoute ? "67%" : 0,
        borderTopLeftRadius: "1em",
        borderTopRightRadius: "1em",
        display: "flex",
        flexDirection: "column",
        backgroundColor: LIGHT_GREEN,
        color: WHITE,
        transition: "height 0.7s",
        position: "relative",
      }}
    >
      {selectedUpgrade ? (
        <UpgradeDetail mapRef={mapRef} />
      ) : selectedRoute ? (
        <RouteDetail mapRef={mapRef} />
      ) : null}
    </div>
  );
}
