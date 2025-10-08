import { Marker as LeafletMarker, Tooltip } from "react-leaflet";
import L from "leaflet";

export default function Marker({ position, iconUrl, tooltip }) {
  const icon = L.icon({
    iconUrl,
    iconSize: [38, 45],
    iconAnchor: [19, 40],
  });

  return (
    <LeafletMarker position={position} icon={icon} opacity={0.75}>
      {tooltip && <Tooltip>{tooltip}</Tooltip>}
    </LeafletMarker>
  );
}
