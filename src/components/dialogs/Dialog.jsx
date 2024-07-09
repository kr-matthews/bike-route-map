import { LIGHT_GREEN } from "../../utils/colours";

export default function Dialog({ isOpen = true, children }) {
  return (
    <dialog
      open={isOpen}
      style={{
        zIndex: 1000,
        backgroundColor: LIGHT_GREEN,
        marginTop: "1em",
        marginLeft: "auto",
        marginRight: "auto",
        minWidth: "320px",
        maxWidth: "80%",
        maxHeight: "60%",
        overflow: "auto",
      }}
    >
      {children}
    </dialog>
  );
}
