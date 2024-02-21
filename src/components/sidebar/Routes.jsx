import { useContext, useMemo, useState } from "react";
import { Selections } from "../../App";
import { Search } from "./Search";
import { isSubsequence, removeWhiteSpaces } from "../../utils/strings";
import { BLACK, WHITE } from "../../utils/colours";
import { VIEWS } from "./Sidebar";
import Panel from "./Panel";
import { AUGMENTED_ROUTES, getBackgroundColor } from "../../utils/routes";

export default function Routes({ navigateTo }) {
  const [searchText, setSearchText] = useState("");
  const routesToShow = useMemo(
    () =>
      Object.values(AUGMENTED_ROUTES).filter(({ name }) =>
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

function Route({ route }) {
  const { selectedRoute, selectRoute, highlightedRoute, highlightRoute } =
    useContext(Selections);
  const isHighlighted = highlightedRoute?.name === route.name;
  const isSelected = selectedRoute?.name === route.name;

  const background = getBackgroundColor(route, isHighlighted);

  return (
    <div
      style={{
        textAlign: "center",
        width: "10em",
        background,
        borderRadius: "10px",
        padding: "6px 0",
        margin: "5px 0",
        cursor: "pointer",
      }}
      onMouseOver={() => highlightRoute(route.name)}
      onMouseOut={() => highlightRoute(null)}
      onMouseDown={() =>
        selectRoute((selected) => (selected === route.name ? null : route.name))
      }
    >
      <span
        style={{
          fontWeight: isSelected ? "bold" : "",
          color: isHighlighted ? BLACK : WHITE,
        }}
      >
        {isSelected ? (
          <i>
            <u>{route.shortName ?? route.name}</u>
          </i>
        ) : (
          route.shortName ?? route.name
        )}
      </span>
    </div>
  );
}
