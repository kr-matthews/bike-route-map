import { useContext } from "react";
import { DARK_BLUE, LIGHT_BLUE, WHITE } from "../../utils/colours";
import { Selections } from "../../App";
import SegmentForm from "./SegmentForm";

// !!! fix arrows staying on map - probably need to keep the segment on the map but with 0 opacity/width

export default function Settings({ goBack }) {
  const { settings, dispatchSettings } = useContext(Selections);

  return (
    <div
      style={{
        paddingLeft: "0.5em",
        paddingRight: "0.5em",
        flex: "1",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "AliceBlue",
        position: "relative",
      }}
    >
      <h2 style={{ paddingLeft: 15 }}>Settings</h2>
      <button
        style={{
          position: "absolute",
          top: 25,
          right: 20,
          cursor: "pointer",
          color: WHITE,
          backgroundColor: LIGHT_BLUE,
          borderColor: DARK_BLUE,
        }}
        onClick={goBack}
      >
        Menu
      </button>

      <SegmentForm
        view="filter"
        types={settings.types}
        directions={settings.directions}
        elevations={settings.elevations}
        dispatch={dispatchSettings}
      />
    </div>
  );
}
