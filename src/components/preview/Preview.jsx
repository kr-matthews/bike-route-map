import { useContext } from "react";
import { Selections } from "../../App";
import Routes from "./Routes";
import SelectedRoute from "./SelectedRoute";

// TODO: clean up logic & styling
export default function Preview() {
  return (
    <div style={{ height: "100vh", width: "100%", overflow: "auto" }}>
      <Debug />
      <Routes />
      <SelectedRoute />
    </div>
  );
}

// ~ TEMP
function Debug() {
  const selections = useContext(Selections);
  return (
    <>
      DEBUG
      {Object.entries(selections).map(([key, value]) => (
        <div key={key}>
          {key}:{" "}
          {value instanceof Function
            ? "(function)"
            : (value ?? "null").toString()}
          {value instanceof Object &&
            !(value instanceof Function) &&
            " has name " + value.name}
        </div>
      ))}
    </>
  );
}
