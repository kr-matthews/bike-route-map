export default function Dialog({ isOpen = true, backgroundColor, children }) {
  return (
    <dialog
      open={isOpen}
      style={{
        zIndex: 1000,
        backgroundColor,
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
