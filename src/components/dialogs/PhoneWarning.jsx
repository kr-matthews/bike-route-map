import { useState } from "react";
import { disclaimer } from "../../utils/strings";
import Dialog from "./Dialog";

export default function PhoneWarning() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Dialog isOpen={isOpen}>
      <p>
        Your screen is too narrow to fit the sidebar, so only the map is shown.
        Please use a larger device to see the legend, to see a list of routes,
        to access embedded videos of routes, and more.
      </p>
      <p style={{ color: "red" }}>{disclaimer}</p>
      <button onClick={() => setIsOpen(false)}>Close</button>
    </Dialog>
  );
}
