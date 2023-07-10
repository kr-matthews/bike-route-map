import { useState } from "react";
import { ROUTES } from "../data/routes";

// TODO: tidy up function name conventions
export default function useSelections() {
  const [highlighted, setHighlighted] = useState(null);
  const [selected, setSelected] = useState(null);
  const [video, setVideo] = useState(null);

  const selectedRoute = Object.values(ROUTES).find(
    (route) => route.name === selected
  );
  // videos live within a route, so clear video on route change
  function setSelectedRouteName(route) {
    setVideo(null);
    setSelected(route);
  }

  return {
    highlighted,
    setHighlighted,
    selectedRoute,
    setSelected: setSelectedRouteName,
    video,
    setVideo,
  };
}
