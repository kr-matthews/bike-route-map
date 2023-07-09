import { useContext } from "react";
import { ROUTES } from "../../data/routes";
import { Selections } from "../../App";

const directions = ["eastbound", "westbound", "northbound", "southbound"];

// TODO: clean up logic & styling
export default function Preview() {
  const { selected, setSelected, setHighlighted } = useContext(Selections);

  // TODO: handle legs properly
  const selectedRouteLeg =
    selected &&
    Object.values(ROUTES).find((route) => route.name === selected).legs[0];

  // TODO: partition routes by e-w / n-s (or other?)
  return (
    <div>
      <h3>Routes</h3>
      {Object.values(ROUTES).map((route) => (
        <div key={route.name}>
          <span
            style={{
              fontWeight: selected === route.name ? "bold" : "",
            }}
            onMouseOver={() => setHighlighted(route.name)}
            onMouseOut={() => setHighlighted(null)}
            onMouseUp={() =>
              setSelected((current) =>
                current === route.name ? null : route.name
              )
            }
          >
            {route.name}
          </span>
        </div>
      ))}
      <br />
      {selected && (
        // TODO: account for multiple legs
        <div style={{ display: "flex" }}>
          {directions.map(
            (direction) =>
              selectedRouteLeg.videos[direction] && (
                <span key={direction}>
                  <span style={{ textTransform: "capitalize" }}>
                    {direction}
                  </span>
                  <div>
                    <iframe
                      width="300px"
                      height="220px"
                      src={selectedRouteLeg.videos[direction]}
                      // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded youtube"
                    />
                  </div>
                </span>
              )
          )}
        </div>
      )}
    </div>
  );
}
