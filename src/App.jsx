import { createContext } from "react";
import Map from "./components/map/Map";
import Preview from "./components/preview/Preview";
import useSelections from "./hooks/useSelections";

export const Selections = createContext();

export default function App() {
  const selections = useSelections();

  return (
    <Selections.Provider value={selections}>
      <div style={{ display: "flex" }}>
        <Map />
        <Preview />
      </div>
    </Selections.Provider>
  );
}
