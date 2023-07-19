import { useContext } from "react";
import { Selections } from "../../App";
import Routes from "./Routes";
import SelectedRoute from "./SelectedRoute";

// TODO: clean up logic & styling
export default function Preview() {
  return (
    <div style={{ height: "100vh", width: "100%", overflow: "auto" }}>
      <Routes />
      <SelectedRoute />
    </div>
  );
}
