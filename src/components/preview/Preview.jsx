import Routes from "./Routes";
import SelectedRoute from "./SelectedRoute";

// !!! move styling to css files
export default function Preview({ mapRef }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "625px",
        // required to hide animation bug when transitioning height
        overflow: "hidden",
      }}
    >
      <Routes />
      <SelectedRoute mapRef={mapRef} />
    </div>
  );
}
