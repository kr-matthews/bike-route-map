import { useEffect, useReducer, useState } from "react";
import { getAugmentedRoute, getRouteBounds } from "../utils/routes";
import { DEFAULT_BOUNDS } from "../utils/map";

const ONE_S = 1_000;

// due to leaflet issues, segments must *always* be on the map
//  (just invisible when they shouldn't be there), so this state
//  stores a boolean flag instead of the path itself... awkward
const initialState = {
  spotlightedRouteName: null,
  selectedRouteName: null,
  highlightedRouteName: null,
  altPathVisible: false,
  stops: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "spotlight":
      if (state.spotlightedRouteName !== action.routeName) {
        return {
          ...state,
          spotlightedRouteName: action.routeName,
        };
      }
      break;

    case "clear-spotlight":
      if (state.spotlightedRouteName) {
        return {
          ...state,
          spotlightedRouteName: null,
        };
      }
      break;

    case "select":
      if (state.selectedRouteName !== action.routeName) {
        return {
          ...state,
          selectedRouteName: action.routeName,
        };
      }
      break;

    case "clear-select":
      if (state.selectedRouteName) {
        return {
          ...state,
          selectedRouteName: null,
        };
      }
      break;

    case "highlight":
      if (state.highlightedRouteName !== action.routeName) {
        return {
          ...state,
          highlightedRouteName: action.routeName,
        };
      }
      break;

    case "clear-highlight":
      if (state.highlightedRouteName) {
        return {
          ...state,
          highlightedRouteName: null,
        };
      }
      break;

    case "spotlight-highlight":
      if (state.highlightedRouteName !== action.routeName) {
        return {
          ...state,
          spotlightedRouteName: null,
          highlightedRouteName: action.routeName,
        };
      }
      break;

    case "add-stop":
      return {
        ...state,
        stops: [...state.stops, action.stop],
      };

    case "clear-stops":
      if (state.stops.length > 0) {
        return {
          ...state,
          stops: [],
        };
      }
      break;

    case "show-alt-path":
      return {
        ...state,
        altPathVisible: true,
      };

    case "hide-alt-path":
      if (state.altPathVisible) {
        return {
          ...state,
          altPathVisible: false,
        };
      }
      break;

    case "reset": {
      const { type: _type, ...nonTypeAction } = action;
      return { ...initialState, ...nonTypeAction };
    }

    default:
      return state;
  }

  return state;
};

export default function useDemo(mapRef) {
  //// active

  const [isActive, setIsActive] = useState(false);

  useEffect(
    function togglePanel() {
      const onKeyDown = async (e) => {
        if (e.ctrlKey && e.altKey && e.key === "v") {
          setIsActive((x) => !x);
        }
      };
      document.addEventListener("keydown", onKeyDown);
      return () => document.removeEventListener("keydown", onKeyDown);
    },
    [setIsActive]
  );

  //// animation

  const [routeName, setRouteName] = useState(null);
  const [routeStops, setRouteStops] = useState([]);
  // clearing this while it's on the map with arrows will cause the arrows to stay forever...
  const [altPath, setAltPath] = useState([]);
  const [altStops, setAltStops] = useState([]);

  const startRouteAnimation = () => {
    routeSteps.forEach((step, index) => setTimeout(step, index * ONE_S));
  };

  const startAreaAnimation = () => {
    areaSteps.forEach((step, index) => setTimeout(step, index * ONE_S));
  };

  const startShortcutAnimation = () => {
    shortcutSteps.forEach((step, index) => setTimeout(step, index * ONE_S));
  };

  const resetAnimation = () => {
    dispatch({ type: "reset" });
    // zoomTo(DEFAULT_BOUNDS);
  };

  const flyTo = (bounds) => mapRef && mapRef.flyToBounds(bounds);
  const fit = (bounds) => mapRef && mapRef.fitBounds(bounds);

  const spotlight = (routeName) => dispatch({ type: "spotlight", routeName });

  const clearSpotlight = () => dispatch({ type: "clear-spotlight" });

  const switchToHighlight = (routeName) =>
    dispatch({ type: "spotlight-highlight", routeName });

  const highlight = (routeName) => dispatch({ type: "highlight", routeName });

  // const clearHighlight = () => dispatch({ type: "clear-highlight" });

  const select = (routeName) => dispatch({ type: "select", routeName });

  const clearSelect = () => dispatch({ type: "clear-select" });

  const showStopSign = (stop) => dispatch({ type: "add-stop", stop });

  const showAltPath = () => dispatch({ type: "show-alt-path" });

  const routeSteps = [
    () => fit(DEFAULT_BOUNDS),
    () => null,
    () => spotlight(routeName),
    () => null,
    () => flyTo(getRouteBounds(routeName)),
    () => null,
    () => clearSpotlight(routeName),
    () => null,
    () => select(routeName),
    () => null,
    () => clearSelect(routeName),
    () => null,
    () => select(routeName),
    () => null,
    () => clearSelect(routeName),
  ];

  const areaSteps = [
    () => fit(DEFAULT_BOUNDS),
    () => null,
    () => spotlight(routeName),
    () => null,
    () => flyTo(getRouteBounds(routeName)),
    () => null,
    () => null,
    () => clearSpotlight(routeName),
    () => null,
    () => null,
    () => flyTo(altPath),
  ];

  const shortcutSteps = [
    () => fit(DEFAULT_BOUNDS),
    () => null,
    () => spotlight(routeName),
    () => null,
    () => flyTo(getRouteBounds(routeName)),
    () => null,
    () => switchToHighlight(routeName),
    () => null,
    () => null,
    () => null,
    () => flyTo(altPath),
    // for unknown reasons, adding stop signs after calling leaflet's `flyToBounds`
    //  causes the timeout to lag ~half a second - extremely confusing,
    //  but these redundant highlight & fit take the lag instead...
    () => highlight(routeName),
    () => fit(altPath),
    ...routeStops.map((stop) => () => showStopSign(stop)),
    () => null,
    showAltPath,
    ...altStops.map((stop) => () => showStopSign(stop)),
  ];

  //// filters

  // interactions

  const [
    {
      spotlightedRouteName,
      selectedRouteName,
      highlightedRouteName,
      altPathVisible,
      stops,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const spotlightedRoute = getAugmentedRoute(spotlightedRouteName);
  const selectedRoute = getAugmentedRoute(selectedRouteName);
  const highlightedRoute = getAugmentedRoute(highlightedRouteName);

  // filters

  const isSegmentHidden = (segment) => {
    if (segment.isAlt) {
      return !altPathVisible;
    }

    if (segment.undesignated) {
      return true;
    }

    if (spotlightedRoute) {
      return !(segment.routeNames ?? []).includes(spotlightedRouteName);
    }

    return false;
  };

  // mimic what useFilters would return, but modified for demo purposes
  const demoFilters = {
    highlightedRoute,
    highlightRoute: () => null,
    selectedRoute,
    selectRoute: () => null,
    selectedVideo: null,
    selectVideo: () => null,
    selectRouteAndVideo: () => null,
    isSegmentHidden,
  };

  return {
    isActive,
    setIsActive,
    resetAnimation,
    startRouteAnimation,
    startAreaAnimation,
    startShortcutAnimation,
    routeName,
    stops,
    altPath,
    filters: demoFilters,
    setRoute: setRouteName,
    setRouteStops,
    setAltPath,
    setAltStops,
  };
}
