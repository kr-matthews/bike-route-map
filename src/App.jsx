import { createContext, useState } from "react";
import Map from "./components/map/Map";
import Preview from "./components/preview/Preview";
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
        <Map setMapRef={setMapRef} />
        <Preview mapRef={mapRef} />
      </div>
    </Selections.Provider>
  );
}
