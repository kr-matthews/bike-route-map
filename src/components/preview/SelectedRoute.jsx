import { useContext } from "react";
import { ROUTES } from "../../data/routes";
import { Selections } from "../../App";
import Leg from "./Leg";

export default function SelectedRoute() {
  const { selected } = useContext(Selections);

  // TODO: provide directly via context, instead of selected
  const selectedRoute = Object.values(ROUTES).find(
    (route) => route.name === selected
  );

  return (
    <>
      <h2>{selected}</h2>
      {selectedRoute.legs.map((leg) => (
        <Leg key={leg.name} leg={leg} />
      ))}
    </>
  );
}
