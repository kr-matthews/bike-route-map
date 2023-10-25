import { createContext, useState } from "react";
import MainMap from "./components/map/MainMap";
import Sidebar from "./components/sidebar/Sidebar";
import useSelections from "./hooks/useSelections";
import { useHiddenParser } from "./hooks/useHiddenParser";

export const Selections = createContext();

export default function App() {
  const selections = useSelections();
  useHiddenParser();

  const [mapRef, setMapRef] = useState(null);

  return (
    <Selections.Provider value={selections}>
      <div style={{ display: "flex" }}>
        <MainMap setMapRef={setMapRef} />
        <Sidebar mapRef={mapRef} />
      </div>
    </Selections.Provider>
  );
}
