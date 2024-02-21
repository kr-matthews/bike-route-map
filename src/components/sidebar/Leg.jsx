import { getAugmentedVideo } from "../../utils/videos";
import Video from "./Video";

// !!! add leg data and highlight on hover

export default function Leg({ leg }) {
  const hasNoVideos = Object.entries(leg.videos).length === 0;

  return (
    <>
      <h3
        style={{
          textAlign: "center",
          marginBottom: "4px",
          marginTop: "0.5em",
        }}
      >
        {/* note: may be undefined; still want margin */}
        {leg.name}
      </h3>

      {/* {distance && (
        <div
          style={{ paddingBottom: "4px", textAlign: "center", fontSize: "90%" }}
        >
          <span>{distanceText}</span>
        </div>
      )} */}

      <div style={{ display: "flex", marginBottom: "4px" }}>
        {hasNoVideos && (
          <p style={{ paddingLeft: "1em" }}>No videos, yet. Come back later.</p>
        )}
        {Object.entries(leg.videos).map(([direction, video]) => (
          <Video
            key={video.id}
            video={getAugmentedVideo(video.id)}
            direction={direction}
          />
        ))}
      </div>
    </>
  );
}
