import { FeatureGroup } from "react-leaflet";
import Segment from "./Segment";

export default function Leg({ route, leg }) {
  return (
    <FeatureGroup key={route.name + leg.name}>
      {leg.segments.map((segment) => (
        <Segment
          key={segment.positions.toString()}
          route={route}
          leg={leg}
          segment={segment}
        />
      ))}
    </FeatureGroup>
  );
}

// {availableVideos.length > 0 && (
//   <Popup>
//     <iframe
//       width="300px"
//       height="220px"
//       src={route.videos}
//       // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//       allowFullScreen
//       title="Embedded youtube"
//     />
//     Videos for: {availableVideos.join(", ")}
//   </Popup>
// )}
