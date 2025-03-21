import About from "./About";
import Filters from "./Filters";
import Legend from "./Legend";
import Routes from "./Routes";
import Settings from "./Settings";
import DetailBottomSheet from "./DetailBottomSheet";
import useSavedState from "../../hooks/useSavedState";
import DemoConfig from "./DemoConfig";
import { useContext } from "react";
import { DemoContext } from "../../App";

// !! move styling to css files

export const VIEWS = {
  about: { key: "about", name: "About", Component: About },
  routes: { key: "routes", name: "Routes", Component: Routes },
  legend: { key: "legend", name: "Legend", Component: Legend },
  filters: { key: "filters", name: "Filters", Component: Filters },
  settings: { key: "settings", name: "Settings", Component: Settings },
};

export default function Sidebar({ mapRef }) {
  const [viewKey, setViewKey] = useSavedState("selected_view", VIEWS.about.key);
  const navigateTo = (view) => setViewKey(view.key);
  const demoPanel = useContext(DemoContext);
  const isNoViewSelected = Object.values(VIEWS).every(
    ({ key }) => key !== viewKey
  );

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
      {demoPanel.isActive ? (
        <DemoConfig navigateTo={navigateTo} demoPanel={demoPanel} />
      ) : (
        Object.values(VIEWS).map(
          (view) =>
            (viewKey === view.key ||
              (view.key === VIEWS.about.key && isNoViewSelected)) && (
              <view.Component
                key={view.key}
                navigateTo={navigateTo}
                mapRef={mapRef}
              />
            )
        )
      )}

      <DetailBottomSheet mapRef={mapRef} />
    </div>
  );
}
