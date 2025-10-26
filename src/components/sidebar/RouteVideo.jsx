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

const trivialOptions = ["1x"];
const bothOptions = ["1x", "4x"];

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

  return (
    <Video
      id={showingTimeLapse ? video.tlId : video.id}
      direction={direction}
      date={video.date}
      meters={video.distance}
      minutes={video.minutes}
      iconSrc={isSelected ? startIcon : endIcon}
      onClick={() => selectVideo(video.id)}
      isSelected={isSelected}
      backgroundColor={backgroundColor}
      borderColor={borderColor}
      speedOptions={speedOptions}
      selectedSpeedOption={showingTimeLapse ? "4x" : "1x"}
      onSelectSpeedOption={(s) => setShowingTimeLapse(s === "4x")}
    />
  );
}
