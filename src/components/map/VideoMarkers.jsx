import { Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import startIcon from "../../images/marker-green.svg";
import endIcon from "../../images/marker-red.svg";
import combinedIcon from "../../images/marker-yellow.svg";

const startText = "Video Starts Here";
const endText = "Video Ends Here";
const combinedText = "Video Starts/Ends Here";

export default function VideoMarkers({ segment, video }) {
  const firstPosition = segment.positions[0];
  const lastPosition = segment.positions[segment.positions.length - 1];

  const videoStartsAtStart = (segment.videosStartAtStart ?? []).includes(video);
  const videoStartsAtEnd = (segment.videosStartAtEnd ?? []).includes(video);
  const videoEndsAtStart = (segment.videosEndAtStart ?? []).includes(video);
  const videoEndsAtEnd = (segment.videosEndAtEnd ?? []).includes(video);
  const videoLoopsAtStart = (segment.videosLoopAtStart ?? []).includes(video);
  const videoLoopsAtEnd = (segment.videosLoopAtEnd ?? []).includes(video);

  if (videoStartsAtStart) {
    return <VideoMarker type={"start"} position={firstPosition} />;
  }

  if (videoStartsAtEnd) {
    return <VideoMarker type={"start"} position={lastPosition} />;
  }

  if (videoEndsAtStart) {
    return <VideoMarker type={"end"} position={firstPosition} />;
  }

  if (videoEndsAtEnd) {
    return <VideoMarker type={"end"} position={lastPosition} />;
  }

  if (videoLoopsAtStart) {
    return <VideoMarker type={"loop"} position={firstPosition} />;
  }

  if (videoLoopsAtEnd) {
    return <VideoMarker type={"loop"} position={lastPosition} />;
  }
}

function VideoMarker({ position, type }) {
  const text =
    type === "start" ? startText : type === "end" ? endText : combinedText;
  const iconUrl =
    type === "start" ? startIcon : type === "end" ? endIcon : combinedIcon;
  const icon = L.icon({
    iconUrl,
    iconSize: [38, 95],
    iconAnchor: [19, 65],
  });

  return (
    <Marker position={position} icon={icon} opacity={0.75}>
      <Tooltip>{text}</Tooltip>
    </Marker>
  );
}
