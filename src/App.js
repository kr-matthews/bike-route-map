import { createContext } from "react";
import Map from "./components/map/Map";
import Preview from "./components/preview/Preview";
import useSelections from "./components/hooks/useSelections";

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

// TODO: highlight videoed segments of route on click/something (maybe? shrink/dim other routes?)
// TODO: allow filtering (by direction, to only official, by quality, etc)
// TODO: indicate by default whether route has video (and/or quality of route, whether official or not (dashed line?), etc.)
// TODO: put `onTop` segments at higher z-index or something
