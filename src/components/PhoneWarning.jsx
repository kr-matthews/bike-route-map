import { useState } from "react";

export default function PhoneWarning() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <dialog open={isOpen} style={{ zIndex: 900, margin: "5em" }}>
      Your screen is too narrow to show/use the sidebar, so only the map is
      shown. Please use a computer.
      <br />
      <br />
      <button onClick={() => setIsOpen(false)}>Close</button>
    </dialog>
  );
}
