import { useContext } from "react";
import { Selections } from "../../App";
import { VIDEO_UNIDIRECTIONAL_COLOUR } from "../../utils/params";

export default function Leg({ leg }) {
  const { video: selectedVideo, setVideo } = useContext(Selections);
  const hasNoVideos = Object.entries(leg.videos).length === 0;

  return (
    <>
      {leg.name && (
        <h3 style={{ textAlign: "center", marginBottom: "4px" }}>{leg.name}</h3>
      )}
      <div style={{ display: "flex", marginBottom: "4px" }}>
        {hasNoVideos && "No videos... yet. Come back later."}
        {Object.entries(leg.videos).map(([direction, video]) => {
          const isShowing = video === selectedVideo;
          return (
            <span key={direction}>
              <h4
                style={{
                  textTransform: "capitalize",
                  fontWeight: "bold",
                  textAlign: "center",
                  backgroundColor: isShowing
                    ? VIDEO_UNIDIRECTIONAL_COLOUR
                    : "Grey",
                  borderRadius: "50px",
                  padding: "10px 0",
                  margin: "10px 40px",
                  cursor: "pointer",
                  color: "White",
                }}
                onMouseDown={() =>
                  setVideo((current) => (current === video ? null : video))
                }
              >
                {direction}
              </h4>
              <div>
                <iframe
                  width="300px"
                  height="220px"
                  src={video}
                  // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded YouTube"
                />
              </div>
            </span>
          );
        })}
      </div>
    </>
  );
}
