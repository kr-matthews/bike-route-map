import { useEffect } from "react";

/**
 * For personal use, to show which 2-way routes don't have 2+ videos,
 * and which 1-way (req. or rec.) routes don't have any videos.
 */
export function useIncompleteVideoView(dispatchFilters) {
  useEffect(() => {
    const enableIncompleteVideoFilter = () =>
      dispatchFilters({
        type: "toggle",
        characteristic: "video",
        value: "incomplete",
      });
    const onKeyDown = async (e) => {
      if (e.ctrlKey && e.altKey && e.key === "i") {
        enableIncompleteVideoFilter();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [dispatchFilters]);
}
