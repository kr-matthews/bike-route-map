import { createContext, useState } from "react";
import MainMap from "./components/map/MainMap";
import PhoneDialogs from "./components/dialogs/PhoneDialogs";
import Sidebar from "./components/sidebar/Sidebar";
import useFilters from "./hooks/useFilters";
import useSettings from "./hooks/useSettings";
import { useHiddenParser } from "./hooks/useHiddenParser";
import { WIDTH_BREAKPOINT } from "./utils/constants";
import useDemo from "./hooks/useDemo";
import DemoMap from "./components/map/DemoMap";

export const SettingContext = createContext();
export const FilterContext = createContext();
export const DemoContext = createContext();

export default function App() {
  // which ref it is depends on which map is open (main or demo)
  const [mapRef, setMapRef] = useState(null);

  const filters = useFilters();
  const settings = useSettings();
  const demo = useDemo(mapRef);

  useHiddenParser();

  // only check on initial page load
  const [screenIsTooNarrow] = useState(window.innerWidth < WIDTH_BREAKPOINT);

  return (
    <SettingContext.Provider value={settings}>
      <FilterContext.Provider value={filters}>
        <DemoContext.Provider value={demo}>
          <div style={{ display: "flex" }}>
            {demo.isActive ? (
              <DemoMap mapRef={mapRef} setMapRef={setMapRef} />
            ) : (
              <MainMap
                mapRef={mapRef}
                setMapRef={setMapRef}
                fullWidth={screenIsTooNarrow}
              />
            )}
            {screenIsTooNarrow ? (
              <PhoneDialogs mapRef={mapRef} />
            ) : (
              <Sidebar mapRef={mapRef} />
            )}
          </div>
        </DemoContext.Provider>
      </FilterContext.Provider>
    </SettingContext.Provider>
  );
}
