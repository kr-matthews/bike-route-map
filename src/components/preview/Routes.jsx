import { useContext, useMemo, useState } from "react";
import { ROUTES } from "../../data/routes";
import { Selections } from "../../App";
import { Search } from "./Search";
import {
  BIDIRECTIONAL_COLOUR_FULL,
  BIDIRECTIONAL_COLOUR_LIGHT,
} from "../../utils/params";
import { isSubsequence, removeWhiteSpaces } from "../../utils/strings";

// !! partition routes by e-w / n-s, by city, by other?
// !!! allow 'zoom to route'
// !! allow filtering (by direction, to only official, by quality, etc)?

export default function Routes() {
  const [searchText, setSearchText] = useState("");
  const routesToShow = useMemo(
    () =>
      Object.values(ROUTES).filter(({ name }) =>
        isSubsequence(
          removeWhiteSpaces(searchText.toLowerCase()),
          name.toLowerCase()
        )
      ),
    [searchText]
  );

  return (
    <div
      style={{
        paddingLeft: "1em",
        flex: "1",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "AliceBlue",
        position: "relative",
      }}
    >
      <h2 style={{ paddingLeft: 15 }}>Routes</h2>
      <Search text={searchText} setText={setSearchText} />
      <div
        style={{
          flex: 2,
          overflowY: "scroll",
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          gridTemplateRows: "repeat(1000, auto)",
          font: "120% system-ui",
        }}
      >
        {routesToShow.map((route) => (
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
        backgroundColor: isSelected
          ? BIDIRECTIONAL_COLOUR_FULL
          : BIDIRECTIONAL_COLOUR_LIGHT,
        borderRadius: "10px",
        padding: "6px 0",
        margin: "5px 0",
        cursor: "pointer",
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
