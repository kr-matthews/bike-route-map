import { useEffect, useRef } from "react";
import { displayDistance } from "../../utils/strings";
import {
  displayDirection,
  formatDate,
  formatDuration,
} from "../../utils/videos";
import "./toggleSwitch.css";

const speedTextSuffix = ` speed`;

export default function Video({
  id,
  direction,
  date,
  meters,
  minutes,
  iconSrc,
  onClick,
  isSelected,
  backgroundColor,
  borderColor,
  speedOptions,
  selectedSpeedOption,
  onSelectSpeedOption,
}) {
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
            {displayDirection(direction)}, {formatDate(date)}
          </span>
          <br />
          <span style={{ fontSize: "90%" }}>
            {displayDistance(meters)}, {formatDuration(minutes)}
            {speedOptions && (
              <>
                ,{" "}
                <SpeedDropdown
                  options={speedOptions}
                  selected={selectedSpeedOption}
                  setSelected={onSelectSpeedOption}
                />
                {speedTextSuffix}
              </>
            )}
          </span>
        </span>
        {Boolean(isSelected) === isSelected && (
          <span
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: "4em",
              cursor: "pointer",
            }}
            title="Highlight on Map"
            onClick={onClick}
          >
            <label className="container">
              <input
                name="show-video"
                type="checkbox"
                checked={isSelected}
                onChange={onClick}
              />
              <span className="slider" />
            </label>
            <img src={iconSrc} style={{ height: "30px", paddingLeft: "4px" }} />
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

function createUrl(id) {
  return `${YOUTUBE_PREFIX}${id}`;
}
