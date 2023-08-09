import { useContext } from "react";
import { Selections } from "../../App";

const directions = ["eastbound", "westbound", "northbound", "southbound"];

export default function Leg({ leg }) {
  const { video, setVideo } = useContext(Selections);

  return (
    <>
      {leg.name && (
        <h3 style={{ textAlign: "center", marginBottom: "4px" }}>{leg.name}</h3>
      )}
      <div style={{ display: "flex", marginBottom: "4px" }}>
        {directions.map((direction) => {
          const isShowing = video === leg.videos[direction];
          return (
            leg.videos[direction] && (
              <span key={direction}>
                <h4
                  style={{
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    textAlign: "center",
                    backgroundColor: isShowing ? "RGBA(128,0,128,1)" : "Grey",
                    borderRadius: "50px",
                    padding: "10px 0",
                    margin: "10px 40px",
                    cursor: "pointer",
                    color: "White",
                  }}
                  onMouseDown={() =>
                    setVideo((current) =>
                      current === leg.videos[direction]
                        ? null
                        : leg.videos[direction]
                    )
                  }
                >
                  {direction}
                </h4>
                <div>
                  <iframe
                    width="300px"
                    height="220px"
                    src={leg.videos[direction]}
                    // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title="Embedded YouTube"
                  />
                </div>
              </span>
            )
          );
        })}
      </div>
    </>
  );
}
