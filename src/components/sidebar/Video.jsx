import { useEffect, useRef } from "react";
import "./toggleSwitch.css";

export default function Video({
  id,
  shouldScrollTo,
  backgroundColor,
  borderColor,
  textColor,
  title,
  subtitle,
  actionable,
}) {
  const ref = useRef();

  useEffect(
    function scrollToVideo() {
      if (shouldScrollTo) {
        ref.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    },
    [shouldScrollTo]
  );

  return (
    <span
      style={{
        backgroundColor,
        borderRadius: "1em",
        border: `2px solid ${borderColor}`,
        padding: "0.35em",
        margin: "0.25em",
      }}
      ref={ref}
    >
      <div style={{ margin: "0px 0px 5px 5px", position: "relative" }}>
        <span>
          <span
            style={{
              textTransform: "capitalize",
              fontWeight: "Bold",
              fontSize: "100%",
              color: textColor,
            }}
          >
            {title}
          </span>
          <br />
          <span style={{ fontSize: "90%", color: textColor }}>{subtitle}</span>
        </span>
        {actionable && (
          <span
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: "4em",
              cursor: "pointer",
            }}
          >
            {actionable}
          </span>
        )}
      </div>
      <div>
        <iframe
          key={id}
          width="275px"
          height="155px"
          src={createUrl(id)}
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded YouTube"
        />
      </div>
    </span>
  );
}

const YOUTUBE_PREFIX = "https://www.youtube.com/embed/";

function createUrl(id) {
  return `${YOUTUBE_PREFIX}${id}`;
}
