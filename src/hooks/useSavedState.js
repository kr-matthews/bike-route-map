import { useCallback, useState } from "react";

/**
 * Essentially [useState], but it stores the state in local storage
 * for use across reloads.
 *
 * @param {string} key - unique identifier for local storage read/write
 * @param {any} initialValue - starting value if none exists in local storage
 * @returns
 */
export default function useSavedState(key, initialValue) {
  const savedValue = JSON.parse(localStorage.getItem(key));
  const [value, setValue] = useState(() => {
    if (savedValue === null) {
      localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    } else {
      return savedValue;
    }
  });

  const setLocalValue = useCallback(
    (newValue) => {
      setValue(newValue);
      localStorage.setItem(key, JSON.stringify(newValue));
    },
    [key]
  );

  return [value, setLocalValue];
}
