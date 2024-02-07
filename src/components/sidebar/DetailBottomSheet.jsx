import { useContext } from "react";
import { Selections } from "../../App";
import { DARK_GREEN, WHITE } from "../../utils/colours";
import RouteDetail from "./RouteDetail";

export default function DetailBottomSheet({ mapRef }) {
  const { selectedRoute } = useContext(Selections);

  return (
    <div
      style={{
        paddingLeft: "0.5em",
        height: selectedRoute ? "425px" : 0,
        borderTopLeftRadius: "1em",
        borderTopRightRadius: "1em",
        display: "flex",
        flexDirection: "column",
        backgroundColor: DARK_GREEN,
        color: WHITE,
        transition: "height 0.7s",
        position: "relative",
      }}
    >
      {selectedRoute && <RouteDetail mapRef={mapRef} />}
    </div>
  );
}
