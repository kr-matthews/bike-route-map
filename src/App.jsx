import { createContext, useState } from "react";
import MainMap from "./components/map/MainMap";
import Sidebar from "./components/sidebar/Sidebar";
import useSelections from "./hooks/useSelections";
import { useHiddenParser } from "./hooks/useHiddenParser";
import PhoneWarning from "./components/PhoneWarning";

export const Selections = createContext();

export default function App() {
  const selections = useSelections();
  useHiddenParser();

  const [mapRef, setMapRef] = useState(null);

  // only check on initial page load
  const [isScreenTooNarrow] = useState(window.innerWidth < 800);

  return (
    <Selections.Provider value={selections}>
      <div style={{ display: "flex" }}>
        <MainMap setMapRef={setMapRef} fullWidth={isScreenTooNarrow} />
        {isScreenTooNarrow ? <PhoneWarning /> : <Sidebar mapRef={mapRef} />}
      </div>
    </Selections.Provider>
  );
}
