import { useContext, useState } from "react";
import { FilterContext, SettingContext } from "../../App";
import {
  COLOUR_VIDEO_NOT_SELECTED,
  COLOUR_VIDEO_NOT_SELECTED_BORDER,
  COLOUR_VIDEO_SELECTED,
  COLOUR_VIDEO_SELECTED_BORDER,
} from "../../utils/constants";
import startIcon from "../../images/marker-green.svg";
import endIcon from "../../images/marker-red.svg";
import "./toggleSwitch.css";
import Video from "./Video";
import {
  displayDirection,
  formatDate,
  formatDuration,
} from "../../utils/videos";
import { displayDistance } from "../../utils/strings";
import { WHITE } from "../../utils/colours";

const trivialOptions = ["1x"];
const bothOptions = ["1x", "4x"];

const speedTextSuffix = ` speed`;

export default function RouteVideo({ video, direction }) {
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

  const toggleVideo = () => selectVideo(video.id);

  return (
    <Video
      id={showingTimeLapse ? video.tlId : video.id}
      shouldScrollTo={isSelected}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      textColor={WHITE}
      speedOptions={speedOptions}
      title={`${displayDirection(direction)}, ${formatDate(video.date)}`}
      subtitle={
        <>
          {displayDistance(video.distance)}, {formatDuration(video.minutes)},{" "}
          <SpeedDropdown
            options={speedOptions}
            selected={showingTimeLapse ? "4x" : "1x"}
            setSelected={(s) => setShowingTimeLapse(s === "4x")}
          />
          {speedTextSuffix}
        </>
      }
      actionable={
        <span title="Highlight on Map" onClick={toggleVideo}>
          <label className="container">
            <input
              name="show-video"
              type="checkbox"
              checked={isSelected}
              onChange={toggleVideo}
            />
            <span className="slider" />
          </label>
          <img
            src={isSelected ? startIcon : endIcon}
            style={{ height: "30px", paddingLeft: "4px" }}
          />
        </span>
      }
    />
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
