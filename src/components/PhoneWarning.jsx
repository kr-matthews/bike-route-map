import { useState } from "react";
import { disclaimer } from "../utils/strings";

export default function PhoneWarning() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <dialog open={isOpen} style={{ zIndex: 900, margin: "5em" }}>
      <p>
        Your screen is too narrow to fit the sidebar, so only the map is shown.
        Please use a larger device to see the legend, to see a list of routes,
        to access embedded videos of routes, and more.
      </p>
      <p style={{ color: "red" }}>{disclaimer}</p>
      <button onClick={() => setIsOpen(false)}>Close</button>
    </dialog>
  );
}
