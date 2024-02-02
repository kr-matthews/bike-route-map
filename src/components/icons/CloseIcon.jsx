import closeIconLight from "../../images/closeLight.svg";

export default function CloseIcon({ onClick }) {
  return (
    <span
      style={{
        position: "absolute",
        top: 20,
        right: 20,
        cursor: "pointer",
      }}
      title="Close"
      onClick={onClick}
    >
      <img src={closeIconLight} alt="close" style={{ height: "1.75em" }} />
    </span>
  );
}
