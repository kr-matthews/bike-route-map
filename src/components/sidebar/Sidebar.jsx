import { useState } from "react";
import Routes from "./Routes";
import SelectedRoute from "./SelectedRoute";
import Legend from "./Legend";
import Menu from "./Menu";
import { useSavedState } from "../../hooks/useSavedState";

// !! move styling to css files

const ID_LEGEND = "legend";
const ID_ROUTES = "routes";
const ID_NONE = "none";

const menuOptions = [
  { id: ID_LEGEND, name: "Legend" },
  { id: ID_ROUTES, name: "Routes" },
];

export default function Sidebar({ mapRef }) {
  const [selectedOptionId, setSelectedOptionId] = useSavedState(
    "menu_selection",
    ID_NONE
  );
  const backToMenu = () => setSelectedOptionId(ID_NONE);
  const isNoneSelected = menuOptions.every(({ id }) => id !== selectedOptionId);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "625px",
        // required to hide animation bug when transitioning height
        overflow: "hidden",
        backgroundColor: "AliceBlue",
      }}
    >
      {isNoneSelected && (
        <Menu options={menuOptions} setSelectedId={setSelectedOptionId} />
      )}

      {selectedOptionId === ID_LEGEND && <Legend goBack={backToMenu} />}

      {selectedOptionId === ID_ROUTES && (
        <>
          <Routes goBack={backToMenu} />
          <SelectedRoute mapRef={mapRef} />
        </>
      )}
    </div>
  );
}
