import { createContext, useState } from "react";
import Map from "./components/map/Map";
import Preview from "./components/preview/Preview";

export const Selections = createContext();

export default function App() {
  const [highlighted, setHighlighted] = useState(null);
  const [selected, setSelected] = useState(null);

  return (
    <Selections.Provider
      value={{ selected, setSelected, highlighted, setHighlighted }}
    >
      <div style={{ display: "flex" }}>
        <Map />
        <Preview />
      </div>
    </Selections.Provider>
  );
}

// TODO: display video(s) on click (outside of map? radio buttons per route?)
// TODO: highlight videoed segments of route on click/something (maybe? shrink/dim other routes?)
// TODO: allow filtering (by direction, to only official, by quality, etc)
// TODO: indicate by default whether route has video (and/or quality of route, whether official or not (dashed line?), etc.)
// TODO: put `onTop` segments at higher z-index
