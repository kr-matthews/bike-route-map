import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import {
  ELEVATIONS,
  DIRECTIONS,
  TYPES,
  normalizeElevation,
  normalizeType,
} from "../utils/segmentTypes";
import { getAugmentedVideo, getVideo } from "../utils/videos";
import { getAugmentedRoute, getRoute } from "../utils/routes";
import { useIncompleteVideoView } from "./useIncompleteVideoView";

const updateSearchParams = (searchParams, keyValues) => {
  Object.entries(keyValues).forEach(([key, value]) => {
    if (value) {
      searchParams.set(key, encodeURIComponent(value));
    } else {
      searchParams.delete(key);
    }
  });
  window.history.replaceState(
    {},
    "",
    `${window.location.pathname}?${searchParams}`
  );
};

const filterReducer = (state, action) => {
  switch (action.type) {
    case "select-route":
      if (state.selectedRouteName === action.routeName) {
        return initialFilters(new URLSearchParams());
      } else {
        return {
          ...state,
          selectedRouteName: action.routeName,
          selectedVideoId: null,
        };
      }

    case "select-video":
      if (state.selectedVideoId === action.videoId) {
        return { ...state, selectedVideoId: null };
      } else {
        return { ...state, selectedVideoId: action.videoId };
      }

    case "select-route-video":
      return {
        ...state,
        selectedRouteName: action.routeName,
        selectedVideoId: action.videoId,
      };

    case "reset":
      return initialFilters(new URLSearchParams());
  }
};

const initialFilters = (searchParams) => ({
  selectedRouteName: getRoute(decodeURIComponent(searchParams.get("route")))
    ?.name,
  selectedVideoId: getVideo(decodeURIComponent(searchParams.get("video")))?.id,
});

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

export default function useFilters() {
  // search params
  const searchParams = useMemo(
    () => new URLSearchParams(window.location.search),
    []
  );

  // interactions

  const [highlightedRouteName, setHighlightedRouteName] = useState(null);
  const [{ selectedRouteName, selectedVideoId }, dispatchSelected] = useReducer(
    filterReducer,
    searchParams,
    initialFilters
  );

  useEffect(() => {
    updateSearchParams(searchParams, {
      route: selectedRouteName,
      video: selectedVideoId,
    });
  }, [searchParams, selectedRouteName, selectedVideoId]);

  const highlightedRoute = getAugmentedRoute(highlightedRouteName);
  const selectedRoute = getAugmentedRoute(selectedRouteName);
  const selectedVideo = getAugmentedVideo(selectedVideoId);

  const selectRouteName = useCallback(
    (routeName) => dispatchSelected({ type: "select-route", routeName }),
    []
  );
  const selectVideoId = useCallback(
    (videoId) => dispatchSelected({ type: "select-video", videoId }),
    []
  );
  const selectRouteNameAndVideoId = useCallback(
    (routeName, videoId) =>
      dispatchSelected({ type: "select-route-video", routeName, videoId }),
    []
  );

  // filters

  const [filters, dispatchFilters] = useReducer(
    filtersReducer,
    true,
    defaultFilters
  );

  const isSegmentHidden = (segment) => {
    const videoCount = (segment.videoIds ?? []).length;
    if (
      segment.hideUnlessVideo &&
      filters.videos &&
      segment.videoIds?.length > 0
    ) {
      return false;
    }

    if (
      segment.hideUnlessVideo &&
      !segment.videoIds?.includes(selectedVideo?.id)
    ) {
      return true;
    }

    if (segment.filterImmune) {
      return false;
    }

    if (filters.videos === "incomplete" && segment.oneWay && videoCount > 0) {
      return true;
    }

    if (filters.videos === "incomplete" && !segment.oneWay && videoCount > 1) {
      return true;
    }

    if (filters.videos !== undefined && filters.videos === (videoCount === 0)) {
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

  useIncompleteVideoView(dispatchFilters);

  return {
    highlightedRoute,
    highlightRoute: setHighlightedRouteName,
    selectedRoute,
    selectRoute: selectRouteName,
    selectedVideo,
    selectVideo: selectVideoId,
    selectRouteAndVideo: selectRouteNameAndVideoId,
    isSegmentHidden,
    filters,
    dispatchFilters,
  };
}
