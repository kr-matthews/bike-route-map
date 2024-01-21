import { useReducer, useState } from "react";
import { ROUTES } from "../data/routes";
import { VIDEOS } from "../data/videos";
import {
  DIRECTION_TYPES,
  ELEVATION_TYPES,
  TYPE_TYPES,
  normalizeElevation,
  normalizeType,
} from "../utils/segmentTypes";

const settingsReducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return defaultSettings;

    case "type": {
      const newTypes = { ...state.types };
      newTypes[action.key] = !newTypes[action.key];
      return { ...state, types: newTypes };
    }

    case "direction": {
      const newDirections = { ...state.directions };
      newDirections[action.key] = !newDirections[action.key];
      return { ...state, directions: newDirections };
    }

    case "elevation": {
      const newElevations = { ...state.elevations };
      newElevations[action.key] = !newElevations[action.key];
      return { ...state, elevations: newElevations };
    }

    case "video": {
      return { ...state, videos: action.value };
    }

    default:
      return state;
  }
};

const defaultSettings = {
  types: TYPE_TYPES.reduce((acc, t) => ({ ...acc, [t.key]: true }), {}),
  directions: DIRECTION_TYPES.reduce(
    (acc, d) => ({ ...acc, [d.key]: true }),
    {}
  ),
  elevations: ELEVATION_TYPES.reduce(
    (acc, e) => ({ ...acc, [e.key]: true }),
    {}
  ),
  videos: undefined, // using true, false, and undefined is probably a bad idea...
};

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
  const isSegmentHidden = (segment) => {
    if (segment.hideUnlessVideo && !segment.videos?.includes(video?.id)) {
      return true;
    }

    if (
      settings.videos !== undefined &&
      settings.videos === ((segment.videos ?? []).length === 0)
    ) {
      return true;
    }

    if (!settings.types[normalizeType(segment.type)]) {
      return true;
    }

    if (!settings.directions[segment.oneWay]) {
      return true;
    }

    if (!settings.elevations[normalizeElevation(segment.elevation)]) {
      return true;
    }

    return false;
  };

  return {
    highlighted,
    setHighlighted,
    selectedRoute,
    setSelected: setSelectedAndClearVideo,
    video,
    setVideoId,
    settings,
    isSegmentHidden,
    dispatchSettings,
  };
}
