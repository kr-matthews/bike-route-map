import { useContext } from "react";
import { Selections } from "../../App";

const directions = ["eastbound", "westbound", "northbound", "southbound"];

export default function Leg({ leg }) {
  const { video, setVideo } = useContext(Selections);

  return (
    <>
      {leg.name && <h3>{leg.name}</h3>}
      <div style={{ display: "flex" }}>
        {directions.map(
          (direction) =>
            leg.videos[direction] && (
              <span key={direction}>
                <h4
                  style={{ textTransform: "capitalize" }}
                  onMouseDown={() =>
                    setVideo((current) =>
                      current === leg.videos[direction]
                        ? null
                        : leg.videos[direction]
                    )
                  }
                >
                  {`${direction}${
                    video === leg.videos[direction] ? " (now showing)" : ""
                  }`}
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
        )}
      </div>
    </>
  );
}
