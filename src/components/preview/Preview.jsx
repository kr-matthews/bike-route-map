import Routes from "./Routes";
import SelectedRoute from "./SelectedRoute";

// !!! move styling to css files
export default function Preview() {
  return (
    <div
      style={{
        height: "100vh",
        width: "625px",
        paddingLeft: "1em",
        overflow: "hidden",
      }}
    >
      <Routes />
      <SelectedRoute />
    </div>
  );
}
