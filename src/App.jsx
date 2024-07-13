import { createContext, useState } from "react";
import MainMap from "./components/map/MainMap";
import PhoneDialogs from "./components/dialogs/PhoneDialogs";
import Sidebar from "./components/sidebar/Sidebar";
import useFilters from "./hooks/useFilters";
import useSettings from "./hooks/useSettings";
import { useHiddenParser } from "./hooks/useHiddenParser";
import { WIDTH_BREAKPOINT } from "./utils/constants";

export const SettingContext = createContext();
export const FilterContext = createContext();

export default function App() {
  const filters = useFilters();
  const settings = useSettings();

  useHiddenParser();

  const [mapRef, setMapRef] = useState(null);

  // only check on initial page load
  const [isScreenTooNarrow] = useState(window.innerWidth < WIDTH_BREAKPOINT);

  return (
    <SettingContext.Provider value={settings}>
      <FilterContext.Provider value={filters}>
        <div style={{ display: "flex" }}>
          <MainMap
            mapRef={mapRef}
            setMapRef={setMapRef}
            fullWidth={isScreenTooNarrow}
          />
          {isScreenTooNarrow ? (
            <PhoneDialogs mapRef={mapRef} />
          ) : (
            <Sidebar mapRef={mapRef} />
          )}
        </div>
      </FilterContext.Provider>
    </SettingContext.Provider>
  );
}
