import { useContext } from "react";
import { Selections } from "../../App";
import Routes from "./Routes";
import SelectedRoute from "./SelectedRoute";

// TODO: clean up logic & styling
export default function Preview() {
  const { selected } = useContext(Selections);

  return (
    <div>
      <Routes />
      {selected && <SelectedRoute />}
    </div>
  );
}
