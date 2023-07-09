import { useContext } from "react";
import { ROUTES } from "../../data/routes";
import { Selections } from "../../App";

// TODO: partition routes by e-w / n-s (or other?)
export default function Routes() {
  const { selectedRoute, setSelected, setHighlighted } = useContext(Selections);

  return (
    <>
      <h2>Routes</h2>
      {Object.values(ROUTES).map((route) => (
        <div key={route.name}>
          <span
            style={{
              fontWeight: selectedRoute?.name === route.name ? "bold" : "",
            }}
            onMouseOver={() => setHighlighted(route.name)}
            onMouseOut={() => setHighlighted(null)}
            onMouseUp={() =>
              setSelected((selected) =>
                selected === route.name ? null : route.name
              )
            }
          >
            {route.name}
          </span>
        </div>
      ))}
    </>
  );
}
