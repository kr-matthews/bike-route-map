import { useContext } from "react";
import { Selections } from "../../App";
import { COLOUR_NO_VIDEO, COLOUR_VIDEO } from "../../utils/constants";
import { displayDistance } from "../../utils/strings";
import { displayDirection } from "../../utils/videos";
import startIcon from "../../images/marker-green.svg";
import "./toggleSwitch.css";

export default function Video({ video, direction }) {
  const { selectedVideo, selectVideo } = useContext(Selections);
  const isShowing = video.id === selectedVideo?.id;
  const backgroundColor = isShowing ? COLOUR_VIDEO : COLOUR_NO_VIDEO;

  const dateText = video.date.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
  const durationText = `${video.minutes} min`;

  const updateVideo = () => selectVideo(video.id);

  return (
    <span
      style={{
        backgroundColor,
        borderRadius: "1em",
        padding: "0.5em",
        margin: "0.25em",
      }}
    >
      <div style={{ margin: "0px 0px 5px 5px", position: "relative" }}>
        <span>
          <span
            style={{
              textTransform: "capitalize",
              fontWeight: "Bold",
              fontSize: "88%",
            }}
          >
            {displayDirection(direction)}
          </span>
          {", "}
          <span style={{ fontSize: "73%" }}>
            {dateText}, {durationText}, {displayDistance(video.distance)}
          </span>
        </span>
        <span
          style={{
            position: "absolute",
            right: 0,
            width: "3em",
            cursor: "pointer",
          }}
          title="Highlight on Map"
          onClick={updateVideo}
        >
          <label className="container">
            <input type="checkbox" checked={isShowing} onChange={updateVideo} />
            <span className="slider" />
          </label>
          <img src={startIcon} style={{ height: "14px", paddingLeft: "4px" }} />
        </span>
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
