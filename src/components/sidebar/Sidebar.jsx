import About from "./About";
import Filters from "./Filters";
import Legend from "./Legend";
import Routes from "./Routes";
import useSavedState from "../../hooks/useSavedState";

// !! move styling to css files

export const VIEWS = {
  routes: { key: "routes", name: "Routes" },
  about: { key: "about", name: "About" },
  legend: { key: "legend", name: "Legend" },
  filters: { key: "filters", name: "Filters" },
};

export default function Sidebar({ mapRef }) {
  const [viewKey, setViewKey] = useSavedState(
    "view_selection",
    VIEWS.routes.key
  );
  const backToRoutes = () => setViewKey(VIEWS.routes.key);
  const isNoneSelected = Object.values(VIEWS).every(
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
      {(viewKey === VIEWS.routes.key || isNoneSelected) && (
        <Routes mapRef={mapRef} navigateTo={(view) => setViewKey(view.key)} />
      )}

      {viewKey === VIEWS.legend.key && <Legend goBack={backToRoutes} />}

      {viewKey === VIEWS.filters.key && <Filters goBack={backToRoutes} />}

      {viewKey === VIEWS.about.key && <About goBack={backToRoutes} />}
    </div>
  );
}
