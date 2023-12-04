import { useState } from "react";
import { ROUTES } from "../data/routes";
import { VIDEOS } from "../data/videos";

export default function useSelections() {
  const [highlighted, setHighlighted] = useState(null);
  const [selected, setSelected] = useState(null);
  const [videoId, setVideoId] = useState(null);

  const selectedRoute = Object.values(ROUTES).find(
    (route) => route.name === selected
  );

  const video = Object.values(VIDEOS).find((video) => video.id === videoId);

  // videos live within a route, so clear video on route change
  function setSelectedAndClearVideo(routeName) {
    setVideoId(null);
    setSelected(routeName);
  }

  return {
    highlighted,
    setHighlighted,
    selectedRoute,
    setSelected: setSelectedAndClearVideo,
    video,
    setVideoId,
  };
}
