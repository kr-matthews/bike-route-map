import { Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import startIcon from "../../images/marker-green.svg";
import endIcon from "../../images/marker-red.svg";
import combinedIcon from "../../images/marker-yellow.svg";
import { Fragment } from "react";

const startText = "Video Starts Here";
const endText = "Video Ends Here";
const combinedText = "Video Starts/Ends Here";

export default function VideoMarkers({ segment, video }) {
  const firstPosition = segment.positions[0];
  const lastPosition = segment.positions[segment.positions.length - 1];

  const startsAtStart = (segment.videosStartAtStart ?? []).includes(video);
  const startsAtEnd = (segment.videosStartAtEnd ?? []).includes(video);
  const endsAtStart = (segment.videosEndAtStart ?? []).includes(video);
  const endsAtEnd = (segment.videosEndAtEnd ?? []).includes(video);
  const loopsAtStart = (segment.videosLoopAtStart ?? []).includes(video);
  const loopsAtEnd = (segment.videosLoopAtEnd ?? []).includes(video);

  return (
    <Fragment>
      {startsAtStart && <VideoMarker type="start" position={firstPosition} />}
      {startsAtEnd && <VideoMarker type="start" position={lastPosition} />}
      {endsAtStart && <VideoMarker type="end" position={firstPosition} />}
      {endsAtEnd && <VideoMarker type="end" position={lastPosition} />}
      {loopsAtStart && <VideoMarker type="loop" position={firstPosition} />}
      {loopsAtEnd && <VideoMarker type="loop" position={lastPosition} />}
    </Fragment>
  );
}

function VideoMarker({ position, type }) {
  const text =
    type === "start" ? startText : type === "end" ? endText : combinedText;
  const iconUrl =
    type === "start" ? startIcon : type === "end" ? endIcon : combinedIcon;
  const icon = L.icon({
    iconUrl,
    iconSize: [38, 45],
    iconAnchor: [19, 40],
  });

  return (
    <Marker position={position} icon={icon} opacity={0.75}>
      <Tooltip>{text}</Tooltip>
    </Marker>
  );
}
