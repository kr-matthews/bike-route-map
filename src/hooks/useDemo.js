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

    case "clear-selected":
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

//// TEMP: these constants temporarily hard-coded for now

// lakes
// const routeStopsToAdd = [];
// const altPath = [
//   [49.26152, -122.96454],
//   [49.26436, -122.96453],
// ];
// const altStopsToAdd = [];

// dumfries;
const routeStopsToAdd = [
  [49.25157, -123.0733],
  [49.25164, -123.07212],
];
const altPath = [
  [49.25039, -123.07331],
  [49.25038, -123.07202],
  [49.25163, -123.07199],
];
const altStopsToAdd = [
  [49.25038, -123.07262],
  [49.25038, -123.07232],
  [49.25038, -123.07212],
];

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

  const startAnimation = () => {
    steps.forEach((step, index) => setTimeout(step, index * ONE_S));
  };

  const resetAnimation = () => {
    dispatch({ type: "reset" });
    // zoomTo(DEFAULT_BOUNDS);
  };

  const flyTo = (bounds) => mapRef && mapRef.flyToBounds(bounds);
  const fit = (bounds) => mapRef && mapRef.fitBounds(bounds);

  const spotlight = (routeName) => dispatch({ type: "spotlight", routeName });

  const highlight = (routeName) => dispatch({ type: "highlight", routeName });

  const switchToHighlight = (routeName) =>
    dispatch({ type: "spotlight-highlight", routeName });

  const showStopSign = (stop) => dispatch({ type: "add-stop", stop });

  const showAltPath = () => dispatch({ type: "show-alt-path" });

  const steps = [
    () => flyTo(DEFAULT_BOUNDS),
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
    ...routeStopsToAdd.map((stop) => () => showStopSign(stop)),
    () => null,
    showAltPath,
    ...altStopsToAdd.map((stop) => () => showStopSign(stop)),
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
    startAnimation,
    stops,
    altPath,
    filters: demoFilters,
    setRoute: setRouteName,
  };
}
