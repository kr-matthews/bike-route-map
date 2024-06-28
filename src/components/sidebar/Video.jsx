import { useContext, useState } from "react";
import { FilterContext, SettingContext } from "../../App";
import { COLOUR_NO_VIDEO, COLOUR_VIDEO } from "../../utils/constants";
import { displayDistance } from "../../utils/strings";
import { displayDirection } from "../../utils/videos";
import startIcon from "../../images/marker-green.svg";
import "./toggleSwitch.css";

const trivialOptions = ["1x"];
const bothOptions = ["1x", "4x"];

export default function Video({ video, direction }) {
  const { selectedVideo, selectVideo } = useContext(FilterContext);
  const { defaultSpeed } = useContext(SettingContext);
  const isShowing = video.id === selectedVideo?.id;
  const backgroundColor = isShowing ? COLOUR_VIDEO : COLOUR_NO_VIDEO;

  const hasTimeLapse = Boolean(video.tlId);
  const speedOptions = hasTimeLapse ? bothOptions : trivialOptions;
  const [showingTimeLapse, setShowingTimeLapse] = useState(
    hasTimeLapse && defaultSpeed === 4
  );

  // useEffect(
  //   function resetSpeed() {
  //     setShowingTimeLapse(hasTimeLapse && defaultSpeed === 4);
  //   },
  //   [hasTimeLapse, defaultSpeed]
  // );

  const dateText = video.date.toLocaleString("en-US", {
    month: "short",
    year: "numeric",
  });
  const durationText = `${video.minutes} min`;
  const speedTextSuffix = ` speed`;

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
            {displayDistance(video.distance)}, {durationText},{" "}
            {
              <SpeedDropdown
                options={speedOptions}
                selected={showingTimeLapse ? "4x" : "1x"}
                setSelected={(s) => setShowingTimeLapse(s === "4x")}
              />
            }
            {speedTextSuffix}
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

// could/should combine into ListTypeDropdown
function SpeedDropdown({ options, selected, setSelected }) {
  return (
    <select
      style={{ borderRadius: 5 }}
      value={selected}
      onChange={(e) => setSelected(e.target.value)}
      disabled={options.length === 1}
    >
      {options.map((option) => (
        <option key={option}>{option}</option>
      ))}
    </select>
  );
}

const YOUTUBE_PREFIX = "https://www.youtube.com/embed/";

function createUrl(video, defaultSpeed) {
  const id = (defaultSpeed === 4 && video.tlId) || video.id;
  return `${YOUTUBE_PREFIX}${id}`;
}
