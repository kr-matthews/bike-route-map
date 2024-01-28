import About from "./About";
import Filters from "./Filters";
import Legend from "./Legend";
import Routes from "./Routes";
import useSavedState from "../../hooks/useSavedState";

// !! move styling to css files

export const VIEWS = {
  about: { key: "about", name: "About", Component: About },
  legend: { key: "legend", name: "Legend", Component: Legend },
  filters: { key: "filters", name: "Filters", Component: Filters },
};

export default function Sidebar({ mapRef }) {
  const [viewKey, setViewKey] = useSavedState("selected_view", VIEWS.about.key);
  const backToRoutes = () => setViewKey("default");
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
      {Object.values(VIEWS).map(
        (view) =>
          viewKey === view.key && (
            <view.Component key={view.key} goBack={backToRoutes} />
          )
      )}

      {isNoViewSelected && (
        <Routes mapRef={mapRef} navigateTo={(view) => setViewKey(view.key)} />
      )}
    </div>
  );
}
