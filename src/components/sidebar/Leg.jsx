import Video from "./Video";

export default function Leg({ leg }) {
  const hasNoVideos = Object.entries(leg.videos).length === 0;

  return (
    <>
      {leg.name && (
        <h3 style={{ textAlign: "center", marginBottom: "4px" }}>{leg.name}</h3>
      )}
      <div style={{ display: "flex", marginBottom: "4px" }}>
        {hasNoVideos && (
          <p style={{ paddingLeft: "1em" }}>No videos, yet. Come back later.</p>
        )}
        {Object.entries(leg.videos).map(([direction, video]) => (
          <Video key={video} video={video} direction={direction} />
        ))}
      </div>
    </>
  );
}
