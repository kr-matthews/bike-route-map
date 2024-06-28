import { createContext, useState } from "react";
import MainMap from "./components/map/MainMap";
import Sidebar from "./components/sidebar/Sidebar";
import useFilters from "./hooks/useFilters";
import useSettings from "./hooks/useSettings";
import { useHiddenParser } from "./hooks/useHiddenParser";
import PhoneWarning from "./components/PhoneWarning";

export const SettingContext = createContext();
export const FilterContext = createContext();

export default function App() {
  const filters = useFilters();
  const settings = useSettings();

  useHiddenParser();

  const [mapRef, setMapRef] = useState(null);

  // only check on initial page load
  const [isScreenTooNarrow] = useState(window.innerWidth < 800);

  return (
    <SettingContext.Provider value={settings}>
      <FilterContext.Provider value={filters}>
        <div style={{ display: "flex" }}>
          <MainMap
            mapRef={mapRef}
            setMapRef={setMapRef}
            fullWidth={isScreenTooNarrow}
          />
          {isScreenTooNarrow ? <PhoneWarning /> : <Sidebar mapRef={mapRef} />}
        </div>
      </FilterContext.Provider>
    </SettingContext.Provider>
  );
}
