import Routes from "./Routes";
import SelectedRoute from "./SelectedRoute";

// !!! move styling to css files
export default function Preview() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        width: "625px",
      }}
    >
      <Routes />
      <SelectedRoute />
    </div>
  );
}
