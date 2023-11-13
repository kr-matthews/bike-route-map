import { useContext, useState } from "react";
import { Selections } from "../../App";
import { VIDEO_UNIDIRECTIONAL_COLOUR } from "../../utils/params";

export default function Video({ video, direction }) {
  const { video: selectedVideo, setVideo } = useContext(Selections);
  const isShowing = video === selectedVideo;
  const backgroundColor = isShowing ? VIDEO_UNIDIRECTIONAL_COLOUR : "Grey";

  const [isHovering, setIsHovering] = useState(false);

  return (
    <span
      className="video"
      style={{
        backgroundColor,
        borderRadius: "1em",
        padding: "0.5em",
        margin: "0.25em",
        cursor: "pointer",
      }}
      onMouseDown={() =>
        setVideo((current) => (current === video ? null : video))
      }
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <h4
        className="video-header"
        style={{
          textTransform: "capitalize",
          fontWeight: isHovering || isShowing ? "Bold" : "Normal",
          textAlign: "center",
          padding: "3px 0",
          margin: "2px 40px 10px",
        }}
      >
        {direction}
      </h4>
      <div>
        <iframe
          width="275px"
          height="155px"
          src={video}
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded YouTube"
        />
      </div>
    </span>
  );
}
