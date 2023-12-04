import { useContext } from "react";
import { Selections } from "../../App";
import { VIDEO_UNIDIRECTIONAL_COLOUR } from "../../utils/params";

export default function Video({ video, direction }) {
  const { video: selectedVideo, setVideoId } = useContext(Selections);
  const isShowing = video.id === selectedVideo?.id;
  const backgroundColor = isShowing ? VIDEO_UNIDIRECTIONAL_COLOUR : "Grey";

  const dateText = video.date.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });
  const durationText = `${video.minutes} min`;

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
          {", "}
          <span style={{ fontSize: "70%" }}>
            {dateText}, {durationText}
          </span>
        </span>
        <button
          style={{
            position: "absolute",
            right: 0,
            cursor: "pointer",
          }}
          onClick={() =>
            setVideoId((current) => (current === video.id ? null : video.id))
          }
        >
          <span style={{ fontSize: "90%" }}>{isShowing ? "Hide" : "Show"}</span>
        </button>
      </div>
      <div>
        <iframe
          width="275px"
          height="155px"
          src={createUrl(video)}
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded YouTube"
        />
      </div>
    </span>
  );
}

const YOUTUBE_PREFIX = "https://www.youtube.com/embed/";

function createUrl(video) {
  return `${YOUTUBE_PREFIX}${video.id}`;
}
