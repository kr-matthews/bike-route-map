import { useEffect, useState } from "react";
import { useReducer } from "react";
import { useMapEvent } from "react-leaflet";

// could make prev an array
const positionsReducer = (state, action) => {
  const { prev, positions } = state;
  switch (action.type) {
    case "reset":
      return { prev: null, positions: [] };

    case "undo":
      if (prev) {
        const newPositions = [...positions];
        newPositions.pop();
        newPositions.push(prev);
        return { prev: null, positions: newPositions };
      }
    /* falls through */
    case "remove":
      if (positions.length > 0) {
        const newPositions = [...positions];
        newPositions.pop();
        return { prev: null, positions: newPositions };
      }
      break;

    case "add": {
      const [lat, lng] = action.position;
      const newLat = Math.round(lat * 100_000) / 100_000;
      const newLng = Math.round(lng * 100_000) / 100_000;
      const newPosition = [newLat, newLng];
      return { prev: null, positions: [...positions, newPosition] };
    }

    case "move-last": {
      if (positions.length > 0) {
        const newPositions = [...positions];
        const prev = newPositions.pop();
        newPositions.push(action.position);
        return { prev, positions: newPositions };
      }
      break;
    }

    default:
      break;
  }
  return state;
};

/**
 * For dev use. Once enabled, instructions printed in console.
 * Each click, positions array will be copied to clipboard.
 */
export function usePolylineCreator() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [{ positions }, dispatch] = useReducer(positionsReducer, {
    prev: null,
    positions: [],
  });

  useEffect(function toggleListenerSetup() {
    const onKeyDown = async (e) => {
      if (e.ctrlKey && e.altKey && e.key === "d") {
        setIsEnabled((wasEnabled) => {
          const willBeEnabled = !wasEnabled;
          console.log("Polyline creator enabled:", willBeEnabled);
          if (willBeEnabled) {
            console.log("Undo: Ctrl+z");
            console.log("Clear: Ctrl+Escape");
            console.log("Move a point: not (yet?) implemented");
          }
          return willBeEnabled;
        });
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(
    function undoListenerSetup() {
      const onKeyDown = async (e) => {
        if (isEnabled && e.ctrlKey && e.key === "z") {
          dispatch({ type: "undo" });
        }
      };
      document.addEventListener("keydown", onKeyDown);
      return () => document.removeEventListener("keydown", onKeyDown);
    },
    [isEnabled]
  );

  useEffect(
    function resetListenerSetup() {
      const onKeyDown = async (e) => {
        if (isEnabled && e.ctrlKey && e.key === "Escape") {
          dispatch({ type: "reset" });
        }
      };
      document.addEventListener("keydown", onKeyDown);
      return () => document.removeEventListener("keydown", onKeyDown);
    },
    [isEnabled]
  );

  useEffect(
    function autoCopy() {
      if (isEnabled) {
        navigator.clipboard.writeText(format(positions));
      }
    },
    [isEnabled, positions]
  );

  useMapEvent("click", ({ latlng }) => {
    if (isEnabled) addPosition(latlng);
  });

  const addPosition = (latlng) => {
    const { lat, lng } = latlng;
    // adjust to make it the cursor finger tip (on chrome, at least)
    dispatch({ type: "add", position: [lat + 0.00001, lng] });
  };

  return { isEnabled, positions };
}

const format = (positions) => {
  return ["[", "]"].join(
    positions.map((position) => position.join(", ")).join("], [")
  );
};
