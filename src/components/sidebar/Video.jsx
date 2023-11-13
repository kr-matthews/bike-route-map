import { useContext } from "react";
import { Selections } from "../../App";
import { VIDEO_UNIDIRECTIONAL_COLOUR } from "../../utils/params";

export default function Video({ video, direction }) {
  const { video: selectedVideo, setVideo } = useContext(Selections);
  const isShowing = video === selectedVideo;

  return (
    <span>
      <h4
        style={{
          textTransform: "capitalize",
          fontWeight: "bold",
          textAlign: "center",
          backgroundColor: isShowing ? VIDEO_UNIDIRECTIONAL_COLOUR : "Grey",
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
}
