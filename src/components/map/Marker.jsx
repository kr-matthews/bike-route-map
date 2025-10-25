import { Marker as LeafletMarker, Tooltip } from "react-leaflet";
import L from "leaflet";

export default function Marker({
  position,
  iconUrl,
  tooltip,
  useCenter,
  eventHandlers,
}) {
  const icon = L.icon({
    iconUrl,
    iconSize: [38, 45],
    iconAnchor: useCenter ? undefined : [19, 40],
  });

  return (
    <LeafletMarker
      position={position}
      icon={icon}
      opacity={0.75}
      eventHandlers={eventHandlers}
    >
      {tooltip && <Tooltip>{tooltip}</Tooltip>}
    </LeafletMarker>
  );
}
