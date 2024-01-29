import closeIconDark from "../../images/close.svg";
import closeIconLight from "../../images/closeLight.svg";

export default function CloseIcon({ onClick, type }) {
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
      <img
        src={type === "dark" ? closeIconDark : closeIconLight}
        alt="close"
        style={{ height: "1.75em" }}
      />
    </span>
  );
}
