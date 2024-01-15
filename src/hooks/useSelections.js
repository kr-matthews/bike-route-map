import { useReducer, useState } from "react";
import { ROUTES } from "../data/routes";
import { VIDEOS } from "../data/videos";
import { comfortableTypes } from "../utils/pathOptions";
import {
  COLOUR_COMFORTABLE,
  COLOUR_OTHER,
  COLOUR_PAINTED_ONE_WAY,
  COLOUR_SHARED,
  COLOUR_SHOULDER_ONE_WAY,
} from "../utils/constants";

const settingsReducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return defaultSettings;

    case "toggle":
      return { ...state, [action.key]: !state[action.key] };

    default:
      return state;
  }
};

const defaultSettings = {
  showComfortable: true,
  showPainted: true,
  showShared: true,
  showShoulders: true,
  showOther: true,
  hideNonVideo: false,
};

export const availableTypeSettings = [
  { key: "showComfortable", name: "Comfortable", color: COLOUR_COMFORTABLE },
  { key: "showPainted", name: "Painted Lanes", color: COLOUR_PAINTED_ONE_WAY },
  { key: "showShared", name: "Shared Lanes", color: COLOUR_SHARED },
  {
    key: "showShoulders",
    name: "Highway Shoulders",
    color: COLOUR_SHOULDER_ONE_WAY,
  },
  { key: "showOther", name: "Narrow Sidewalks", color: COLOUR_OTHER },
];

export default function useSelections() {
  // interactions

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

  // settings

  const [settings, dispatchSettings] = useReducer(
    settingsReducer,
    defaultSettings
  );
  const isVisible = (segment) => {
    if (segment.hideUnlessVideo && !segment.videos?.includes(video?.id)) {
      return false;
    }
    if (comfortableTypes.includes(segment.type)) {
      return settings.showComfortable;
    }
    switch (segment.type) {
      case "painted":
        return settings.showPainted;
      case "shared":
        return settings.showShared;
      case "shoulder":
        return settings.showShoulders;
      case "other":
        return settings.showOther;

      default:
        return false;
    }
  };

  return {
    highlighted,
    setHighlighted,
    selectedRoute,
    setSelected: setSelectedAndClearVideo,
    video,
    setVideoId,
    settings,
    isVisible,
    dispatchSettings,
  };
}
