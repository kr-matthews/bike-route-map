import { useContext, useMemo, useState } from "react";
import { ROUTES } from "../../data/routes";
import { Selections } from "../../App";
import { Search } from "./Search";
import { isSubsequence, removeWhiteSpaces } from "../../utils/strings";
import { BLACK, DARK_GREEN, LIGHT_GREEN, WHITE } from "../../utils/colours";
import { COLOUR_HIGHLIGHTED } from "../../utils/constants";
import { VIEWS } from "./Sidebar";
import Panel from "./Panel";

export default function Routes({ navigateTo }) {
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
    <Panel name={VIEWS.routes.name} navigateTo={navigateTo}>
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
    </Panel>
  );
}

// !! route background colour
// %s probably too much effort, so just 'main' colour; or uniform gradient with all 'relevant' colours
// see https://stackoverflow.com/questions/19081355/how-can-apply-multiple-background-color-to-one-div

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
        backgroundColor: isHighlighted
          ? COLOUR_HIGHLIGHTED
          : isSelected
          ? DARK_GREEN
          : LIGHT_GREEN,
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
          fontWeight: isSelected ? "bold" : "",
          color: isHighlighted ? BLACK : WHITE,
        }}
      >
        {route.shortName ?? route.name}
      </span>
    </div>
  );
}
