import { useState } from "react";
import { ROUTES } from "../../data/routes";

export default function useSelections() {
  const [highlighted, setHighlighted] = useState(null);
  const [selected, setSelected] = useState(null);
  const selectedRoute = Object.values(ROUTES).find(
    (route) => route.name === selected
  );

  return {
    highlighted,
    setHighlighted,
    selectedRoute,
    setSelected,
  };
}
