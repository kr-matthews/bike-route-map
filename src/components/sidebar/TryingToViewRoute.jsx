import { useContext } from "react";
import { Selections } from "../../App";

export default function TryingToViewRoute() {
  const { selectedRoute } = useContext(Selections);

  return (
    selectedRoute && (
      <div
        style={{
          color: "red",
          border: "1px black solid",
          background: "yellow",
          padding: "10px",
          textAlign: "center",
        }}
      >
        <em>Trying to see route information? Close this panel.</em>
      </div>
    )
  );
}
