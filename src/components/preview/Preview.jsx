import { useContext } from "react";
import { BIKE_ROUTE_DATA } from "../../data";
import { Selections } from "../../App";

const eastWest = BIKE_ROUTE_DATA.filter((route) =>
  route.legs.some((leg) =>
    ["eastbound", "westbound"].some(
      (direction) => leg.videos[direction] !== undefined
    )
  )
);
const northSouth = BIKE_ROUTE_DATA.filter((route) =>
  route.legs.some((leg) =>
    ["northbound", "southbound"].some(
      (direction) => leg.videos[direction] !== undefined
    )
  )
);

// TODO: clean up logic & styling
export default function Preview() {
  const { selected, setSelected, setHighlighted } = useContext(Selections);

  return (
    <div>
      East-West Routes:
      {eastWest.map((route) => (
        <div key={route.name}>
          {route.legs.length === 1 ? (
            <span
              style={{
                fontWeight:
                  selected === route.name + route.legs[0].name ? "bold" : "",
              }}
              onMouseOver={() =>
                setHighlighted(route.name + route.legs[0].name)
              }
              onMouseOut={() => setHighlighted(null)}
              onMouseUp={() =>
                setSelected((current) =>
                  current === route.name + route.legs[0].name
                    ? null
                    : route.name + route.legs[0].name
                )
              }
            >
              {route.name}
            </span>
          ) : (
            `${route.name}: ${route.legs.map((leg) => leg.name).join(", ")}`
          )}
        </div>
      ))}
      <br />
      North-South Routes:
      {northSouth.map((route) => (
        <div key={route.name}>
          {route.legs.length === 1
            ? route.name
            : `${route.name}: ${route.legs.map((leg) => leg.name).join(", ")}`}
        </div>
      ))}
      <br />
      {selected && (
        <div style={{ display: "flex" }}>
          {Object.entries(BIKE_ROUTE_DATA[7].legs[0].videos).map(
            ([direction, video]) => (
              <span key={direction}>
                <span style={{ textTransform: "capitalize" }}>{direction}</span>
                {video && (
                  <div>
                    <iframe
                      width="300px"
                      height="220px"
                      src={video}
                      // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Embedded youtube"
                    />
                  </div>
                )}
              </span>
            )
          )}
        </div>
      )}
    </div>
  );
}
