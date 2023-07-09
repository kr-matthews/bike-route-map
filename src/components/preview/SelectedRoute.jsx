import { useContext } from "react";
import { ROUTES } from "../../data/routes";
import { Selections } from "../../App";
import Leg from "./Leg";

export default function SelectedRoute() {
  const { selectedRoute } = useContext(Selections);

  if (!selectedRoute) return null;

  return (
    <>
      <h2>{selectedRoute.name}</h2>
      {selectedRoute.legs.map((leg) => (
        <Leg key={selectedRoute.name + leg.name} leg={leg} />
      ))}
    </>
  );
}
