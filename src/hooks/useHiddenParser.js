import { useEffect, useState } from "react";
import { parse } from "../utils/parse";

/**
 * For dev use, to parse the coordinates that google
 * provides (since it doesn't produce a nice copy-paste
 * format).
 */
export function useHiddenParser() {
  const [toParse, setToParse] = useState("");

  useEffect(() => {
    if (toParse) {
      navigator.clipboard.writeText(parse(toParse));
      setToParse("");
    }
  }, [toParse]);

  useEffect(() => {
    const onKeyDown = async (e) => {
      if (e.ctrlKey && e.altKey && e.key === "p") {
        setToParse(prompt("Enter coordinates (or press 'Esc' to exit):"));
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);
}
