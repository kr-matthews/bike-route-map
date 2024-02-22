import zoomToIconDark from "../../images/zoomTo.svg";
import zoomToIconLight from "../../images/zoomToLight.svg";

export default function ZoomToIcon({ onClick, onMouseOver, onMouseOut, type }) {
  return (
    <span
      style={{
        position: "absolute",
        top: 20,
        left: 20,
        cursor: onClick ? "pointer" : "not-allowed",
      }}
      title="Zoom To"
      onClick={onClick}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <img
        src={type === "dark" ? zoomToIconDark : zoomToIconLight}
        alt="zoom to"
        style={{ height: "1.75em" }}
      />
    </span>
  );
}
