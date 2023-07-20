import { useContext } from "react";
import { Selections } from "../../App";
import Leg from "./Leg";

export default function SelectedRoute() {
  const { selectedRoute } = useContext(Selections);

  if (!selectedRoute) return null;

  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "4px" }}>
        {selectedRoute.name}
      </h2>
      <div style={{ height: "calc(50% - 70px)", overflow: "auto" }}>
        {selectedRoute.legs.map((leg) => (
          <Leg key={selectedRoute.name + leg.name} leg={leg} />
        ))}
      </div>
    </>
  );
}
