import { useState } from "react";
import Routes from "./Routes";
import SelectedRoute from "./SelectedRoute";
import Legend from "./Legend";
import Menu from "./Menu";

// !! move styling to css files

const ID_LEGEND = "legend";
const ID_ROUTES = "routes";

const menuOptions = [
  { id: ID_LEGEND, name: "Legend" },
  { id: ID_ROUTES, name: "Routes" },
];

export default function Sidebar({ mapRef }) {
  // !!! store in local storage
  const [selectedOptionId, setSelectedOptionId] = useState();
  const backToMenu = () => setSelectedOptionId();

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
      {!selectedOptionId && (
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
