import { useCallback, useReducer, useState } from "react";
import {
  ELEVATIONS,
  DIRECTIONS,
  TYPES,
  normalizeElevation,
  normalizeType,
} from "../utils/segmentTypes";
import { getAugmentedVideo } from "../utils/videos";
import { getAugmentedRoute } from "../utils/routes";

const filtersReducer = (state, action) => {
  switch (action.type) {
    case "reset":
      return defaultFilters(true);

    case "toggle":
      switch (action.characteristic) {
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

    case "toggle-all": {
      const key = `${action.characteristic}s`;
      const areAllOn = Object.values(state[key]).every((b) => b);
      const newCharacteristic = defaultFilters(!areAllOn)[key];
      return { ...state, [key]: newCharacteristic };
    }

    default:
      return state;
  }
};

const defaultFilters = (allOn) => ({
  types: TYPES.reduce((acc, t) => ({ ...acc, [t.key]: !!allOn }), {}),
  directions: DIRECTIONS.reduce((acc, d) => ({ ...acc, [d.key]: !!allOn }), {}),
  elevations: ELEVATIONS.reduce((acc, e) => ({ ...acc, [e.key]: !!allOn }), {}),
  videos: undefined, // using true, false, and undefined is probably a bad idea...
});

export default function useSelections() {
  // interactions

  const [highlightedRouteName, setHighlightedRouteName] = useState(null);
  const [selectedRouteName, setSelectedRouteName] = useState(null);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const highlightedRoute = getAugmentedRoute(highlightedRouteName);
  const selectedRoute = getAugmentedRoute(selectedRouteName);
  const selectedVideo = getAugmentedVideo(selectedVideoId);

  // videos live within a route, so clear video on route change
  const handleSelectingRouteName = useCallback(
    (selectionFunction) =>
      setSelectedRouteName((selectedRouteName) => {
        if (selectionFunction(selectedRouteName) !== selectedRouteName) {
          setSelectedVideoId(null);
          return selectionFunction(selectedRouteName);
        }
        return selectedRouteName;
      }),
    []
  );

  // filters

  const [filters, dispatchFilters] = useReducer(
    filtersReducer,
    true,
    defaultFilters
  );

  const isSegmentHidden = (segment) => {
    if (
      segment.hideUnlessVideo &&
      !segment.videoIds?.includes(selectedVideo?.id)
    ) {
      return true;
    }

    if (segment.filterImmune) {
      return false;
    }

    if (
      filters.videos !== undefined &&
      filters.videos === ((segment.videoIds ?? []).length === 0)
    ) {
      return true;
    }

    if (!filters.types[normalizeType(segment.type)]) {
      return true;
    }

    if (!filters.directions[segment.oneWay]) {
      return true;
    }

    if (!filters.elevations[normalizeElevation(segment.elevation)]) {
      return true;
    }

    return false;
  };

  return {
    highlightedRoute,
    highlightRoute: setHighlightedRouteName,
    selectedRoute,
    selectRoute: handleSelectingRouteName,
    selectedVideo,
    selectVideo: setSelectedVideoId,
    filters,
    isSegmentHidden,
    dispatchFilters,
  };
}
