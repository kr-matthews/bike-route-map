import { useState } from "react";
import { ROUTES } from "../data/routes";

// !! tidy up function name conventions
export default function useSelections() {
  const [highlighted, setHighlighted] = useState(null);
  const [selected, setSelected] = useState(null);
  const [video, setVideo] = useState(null);

  const selectedRoute = Object.values(ROUTES).find(
    (route) => route.name === selected
  );
  // videos live within a route, so clear video on route change
  function setSelectedAndClearVideo(routeName) {
    setVideo(null);
    setSelected(routeName);
  }

  return {
    highlighted,
    setHighlighted,
    selectedRoute,
    setSelected: setSelectedAndClearVideo,
    video,
    setVideo,
  };
}
