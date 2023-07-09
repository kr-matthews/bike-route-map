import { useContext } from "react";
import { ROUTES } from "../../data/routes";
import { Selections } from "../../App";

const directions = ["eastbound", "westbound", "northbound", "southbound"];

export default function SelectedRoute() {
  const { selected } = useContext(Selections);

  // !!! handle legs properly
  const selectedRouteLeg =
    selected &&
    Object.values(ROUTES).find((route) => route.name === selected).legs[0];

  return (
    <>
      <h2>{selected}</h2>
      <div style={{ display: "flex" }}>
        {directions.map(
          (direction) =>
            selectedRouteLeg.videos[direction] && (
              <span key={direction}>
                <span style={{ textTransform: "capitalize" }}>{direction}</span>
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
    </>
  );
}
