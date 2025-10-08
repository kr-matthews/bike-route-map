import { Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import startIcon from "../../images/marker-green.svg";
import endIcon from "../../images/marker-red.svg";
import combinedIcon from "../../images/marker-yellow.svg";
import { Fragment } from "react";

const startText = "Video Starts Here";
const endText = "Video Ends Here";
const combinedText = "Video Starts/Ends Here";

export default function EndpointMarkers({ segment, videoId }) {
  const firstPosition = segment.positions[0];
  const lastPosition = segment.positions[segment.positions.length - 1];

  const startsAtStart = (segment.videoIdsStartAtStart ?? []).includes(videoId);
  const startsAtEnd = (segment.videoIdsStartAtEnd ?? []).includes(videoId);
  const endsAtStart = (segment.videoIdsEndAtStart ?? []).includes(videoId);
  const endsAtEnd = (segment.videoIdsEndAtEnd ?? []).includes(videoId);
  const loopsAtStart = (segment.videoIdsLoopAtStart ?? []).includes(videoId);
  const loopsAtEnd = (segment.videoIdsLoopAtEnd ?? []).includes(videoId);

  return (
    <Fragment>
      {startsAtStart && (
        <EndpointMarker type="start" position={firstPosition} />
      )}
      {startsAtEnd && <EndpointMarker type="start" position={lastPosition} />}
      {endsAtStart && <EndpointMarker type="end" position={firstPosition} />}
      {endsAtEnd && <EndpointMarker type="end" position={lastPosition} />}
      {loopsAtStart && <EndpointMarker type="loop" position={firstPosition} />}
      {loopsAtEnd && <EndpointMarker type="loop" position={lastPosition} />}
    </Fragment>
  );
}

function EndpointMarker({ position, type }) {
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
