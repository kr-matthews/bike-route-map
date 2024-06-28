import { useContext } from "react";
import { FilterContext, SettingContext } from "../../App";
import { COLOUR_NO_VIDEO, COLOUR_VIDEO } from "../../utils/constants";
import { displayDistance } from "../../utils/strings";
import { displayDirection } from "../../utils/videos";
import startIcon from "../../images/marker-green.svg";
import "./toggleSwitch.css";

export default function Video({ video, direction }) {
  const { selectedVideo, selectVideo } = useContext(FilterContext);
  const { defaultSpeed } = useContext(SettingContext);
  const isShowing = video.id === selectedVideo?.id;
  const backgroundColor = isShowing ? COLOUR_VIDEO : COLOUR_NO_VIDEO;

  const dateText = video.date.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
  const durationText = `${video.minutes} min`;
  const speedText = `${video.tlId && defaultSpeed === 4 ? 4 : 1}x speed`;

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
              fontSize: "100%",
            }}
          >
            {displayDirection(direction)}, {dateText}
          </span>
          <br />
          <span style={{ fontSize: "90%" }}>
            {displayDistance(video.distance)}, {durationText}, {speedText}
          </span>
        </span>
        <span
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "4em",
            cursor: "pointer",
          }}
          title="Highlight on Map"
          onClick={updateVideo}
        >
          <label className="container">
            <input type="checkbox" checked={isShowing} onChange={updateVideo} />
            <span className="slider" />
          </label>
          <img src={startIcon} style={{ height: "30px", paddingLeft: "4px" }} />
        </span>
      </div>
      <div>
        <iframe
          width="275px"
          height="155px"
          src={createUrl(video, defaultSpeed)}
          // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Embedded YouTube"
        />
      </div>
    </span>
  );
}

const YOUTUBE_PREFIX = "https://www.youtube.com/embed/";

function createUrl(video, defaultSpeed) {
  const id = (defaultSpeed === 4 && video.tlId) || video.id;
  return `${YOUTUBE_PREFIX}${id}`;
}
