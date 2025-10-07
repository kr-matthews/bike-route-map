import { useContext, useEffect, useRef, useState } from "react";
import { FilterContext, SettingContext } from "../../App";
import {
  COLOUR_VIDEO_NOT_SELECTED,
  COLOUR_VIDEO_NOT_SELECTED_BORDER,
  COLOUR_VIDEO_SELECTED,
  COLOUR_VIDEO_SELECTED_BORDER,
} from "../../utils/constants";
import { displayDistance } from "../../utils/strings";
import { displayDirection } from "../../utils/videos";
import startIcon from "../../images/marker-green.svg";
import endIcon from "../../images/marker-red.svg";
import "./toggleSwitch.css";

const trivialOptions = ["1x"];
const bothOptions = ["1x", "4x"];

export default function Video({ video, direction }) {
  const { selectedVideo, selectVideo } = useContext(FilterContext);
  const { defaultSpeed } = useContext(SettingContext);
  const isSelected = video.id === selectedVideo?.id;
  const backgroundColor = isSelected
    ? COLOUR_VIDEO_SELECTED
    : COLOUR_VIDEO_NOT_SELECTED;
  const borderColor = isSelected
    ? COLOUR_VIDEO_SELECTED_BORDER
    : COLOUR_VIDEO_NOT_SELECTED_BORDER;

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

  const url = createUrl(video, showingTimeLapse);

  const ref = useRef();

  useEffect(
    function scrollToVideoWhenSelected() {
      if (isSelected) {
        ref.current?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
      }
    },
    [isSelected]
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
            <input
              name="show-video"
              type="checkbox"
              checked={isSelected}
              onChange={updateVideo}
            />
            <span className="slider" />
          </label>
          <img
            src={isSelected ? startIcon : endIcon}
            style={{ height: "30px", paddingLeft: "4px" }}
          />
        </span>
      </div>
      <div>
        <iframe
          key={url}
          width="275px"
          height="155px"
          src={url}
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
      name="speed"
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

function createUrl(video, showingTimeLapse) {
  const id = showingTimeLapse ? video.tlId : video.id;
  return `${YOUTUBE_PREFIX}${id}`;
}
