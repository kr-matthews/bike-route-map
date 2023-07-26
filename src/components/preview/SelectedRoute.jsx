import { useContext } from "react";
import { Selections } from "../../App";
import Leg from "./Leg";

export default function SelectedRoute() {
  const { selectedRoute } = useContext(Selections);

  return (
    <div
      style={{
        paddingLeft: "1em",
        height: selectedRoute ? "425px" : 0,
        display: "flex",
        flexDirection: "column",
        backgroundColor: "LightGreen",
        transition: "height 0.7s linear",
      }}
    >
      {selectedRoute && (
        <>
          <h2 style={{ textAlign: "center", marginBottom: "4px" }}>
            {selectedRoute.name}
          </h2>
          <div style={{ overflow: "auto" }}>
            {selectedRoute.legs.map((leg) => (
              <Leg key={selectedRoute.name + leg.name} leg={leg} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
