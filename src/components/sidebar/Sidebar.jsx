import { useCallback } from "react";
import Legend from "./Legend";
import Menu from "./Menu";
import Routes from "./Routes";
import SelectedRoute from "./SelectedRoute";
import useRoutesAutoSelect from "../../hooks/useRoutesAutoSelect";
import useSavedState from "../../hooks/useSavedState";
import Filters from "./Filters";

// !! move styling to css files

const ID_LEGEND = "legend";
const ID_ROUTES = "routes";
const ID_FILTERS = "filters";
const ID_NONE = "none";

const menuOptions = [
  { id: ID_LEGEND, name: "Legend" },
  { id: ID_ROUTES, name: "Routes" },
  { id: ID_FILTERS, name: "Filters" },
];

export default function Sidebar({ mapRef }) {
  const [selectedOptionId, setSelectedOptionId] = useSavedState(
    "menu_selection",
    ID_NONE
  );
  const backToMenu = () => setSelectedOptionId(ID_NONE);
  const isNoneSelected = menuOptions.every(({ id }) => id !== selectedOptionId);

  const isOnMenu = selectedOptionId === ID_NONE;
  const goToRoutes = useCallback(
    () => setSelectedOptionId(ID_ROUTES),
    [setSelectedOptionId]
  );
  useRoutesAutoSelect(isOnMenu, goToRoutes);

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

      {selectedOptionId === ID_FILTERS && <Filters goBack={backToMenu} />}
    </div>
  );
}
