import { useContext } from "react";
import { ROUTES } from "../../data/routes";
import { Selections } from "../../App";

// TODO: partition routes by e-w / n-s (or other?)
// TODO: allow 'zoom to route'
// TODO: allow filtering (by direction, to only official, by quality, etc)?
export default function Routes() {
  return (
    <>
      <h2>Routes</h2>
      <div
        style={{
          height: "calc(50% - 70px)",
          width: "100%",
          overflow: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          // gap: "1re",
          font: "120% system-ui",
        }}
      >
        {Object.values(ROUTES).map((route) => (
          <Route key={route.name} route={route} />
        ))}
      </div>
    </>
  );
}

function Route({ route }) {
  const { selectedRoute, setSelected, highlighted, setHighlighted } =
    useContext(Selections);
  const isHighlighted = highlighted === route.name;
  const isSelected = selectedRoute?.name === route.name;
  const isNoneSelected = !selectedRoute;

  return (
    <div
      style={{
        textAlign: "center",
        width: "10em",
        backgroundColor: "DarkGreen",
        borderRadius: "10px",
        padding: "4px 0",
        margin: "5px 0",
        cursor: "pointer",
        opacity: isSelected || isNoneSelected ? "100%" : "60%",
      }}
      onMouseOver={() => setHighlighted(route.name)}
      onMouseOut={() => setHighlighted(null)}
      onMouseDown={() =>
        setSelected((selected) => (selected === route.name ? null : route.name))
      }
    >
      <span
        style={{
          fontWeight: isHighlighted ? "bold" : "",
          color: "White",
        }}
      >
        {route.name}
      </span>
    </div>
  );
}
