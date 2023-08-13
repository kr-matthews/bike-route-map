import { useContext } from "react";
import { ROUTES } from "../../data/routes";
import { Selections } from "../../App";

// !! partition routes by e-w / n-s, by city, by other?
// !!! allow 'zoom to route'
// !!! allow searching
// !! allow filtering (by direction, to only official, by quality, etc)?

export default function Routes() {
  return (
    <div
      style={{
        paddingLeft: "1em",
        flex: "1",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        maxHeight: "100vh",
        backgroundColor: "AliceBlue",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Routes</h2>
      <div
        style={{
          flex: 2,
          overflow: "auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          font: "120% system-ui",
        }}
      >
        {Object.values(ROUTES).map((route) => (
          <Route key={route.name} route={route} />
        ))}
      </div>
    </div>
  );
}

function Route({ route }) {
  const { selectedRoute, setSelected, highlighted, setHighlighted } =
    useContext(Selections);
  const isHighlighted = highlighted === route.name;
  const isSelected = selectedRoute?.name === route.name;

  return (
    <div
      style={{
        textAlign: "center",
        width: "10em",
        backgroundColor: isSelected ? "DarkGreen" : "#009E60", // !!! single source of truth for these
        borderRadius: "10px",
        padding: "6px 0",
        margin: "5px 0",
        cursor: "pointer",
        // opacity: isSelected || isNoneSelected ? "100%" : "60%",
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
        {route.shortName ?? route.name}
      </span>
    </div>
  );
}
