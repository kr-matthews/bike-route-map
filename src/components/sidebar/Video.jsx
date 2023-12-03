import { useContext } from "react";
import { Selections } from "../../App";
import { VIDEO_UNIDIRECTIONAL_COLOUR } from "../../utils/params";

export default function Video({ video, direction }) {
  const { video: selectedVideo, setVideo } = useContext(Selections);
  const isShowing = video === selectedVideo;
  const backgroundColor = isShowing ? VIDEO_UNIDIRECTIONAL_COLOUR : "Grey";

  // !!! add date info to videos
  const dateText = null; // "September 2023";

  return (
    <span
      style={{
        backgroundColor,
        borderRadius: "1em",
        padding: "0.5em",
        margin: "0.25em",
      }}
    >
      <div style={{ margin: "0px 5px 5px", position: "relative" }}>
        <span>
          <span
            style={{
              textTransform: "capitalize",
              fontWeight: "Bold",
              fontSize: "90%",
            }}
          >
            {direction}
          </span>
          {dateText && (
            <>
              {", "}
              <span style={{ fontSize: "70%" }}>September 2023</span>
            </>
          )}
        </span>
        <button
          style={{
            position: "absolute",
            right: 0,
            cursor: "pointer",
          }}
          onClick={() =>
            setVideo((current) => (current === video ? null : video))
          }
        >
          <span style={{ fontSize: "90%" }}>{isShowing ? "Hide" : "Show"}</span>
        </button>
      </div>
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
