import { useState } from "react";
import { disclaimer } from "../../utils/strings";
import Dialog from "./Dialog";

export default function PhoneWarning() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog isOpen={isOpen}>
      <p>
        Your screen is too narrow to fit the sidebar, so you're only getting
        limited functionality. Please use a larger device to see the legend, see
        a list of routes, see a list of upgrade videos, apply filters to the
        map, change the map background, and more.
      </p>
      <p style={{ color: "red" }}>{disclaimer}</p>
      <button onClick={() => setIsOpen(false)}>Close</button>
    </Dialog>
  );
}
