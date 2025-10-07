import { WIDTH_BREAKPOINT } from "../../utils/constants";
import { getAugmentedRouteVideo } from "../../utils/videos";
import Video from "./Video";

// !!! add leg data and highlight on hover

export default function Leg({ leg }) {
  const hasNoVideos = Object.entries(leg.videos).length === 0;
  const isScreenTooNarrow = window.innerWidth < WIDTH_BREAKPOINT;

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

      <div
        style={{
          display: isScreenTooNarrow ? "inline-grid" : "flex",
          marginBottom: "4px",
        }}
      >
        {hasNoVideos && (
          <p style={{ paddingLeft: "1em" }}>No videos, yet. Come back later.</p>
        )}
        {Object.entries(leg.videos).map(([direction, video]) => (
          <Video
            key={video.id}
            video={getAugmentedRouteVideo(video.id)}
            direction={direction}
          />
        ))}
      </div>
    </>
  );
}
