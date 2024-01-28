import { useContext, useMemo, useState } from "react";
import { ROUTES } from "../../data/routes";
import { Selections } from "../../App";
import { Search } from "./Search";
import { isSubsequence, removeWhiteSpaces } from "../../utils/strings";
import {
  BLACK,
  DARK_BLUE,
  DARK_GREEN,
  LIGHT_BLUE,
  LIGHT_GREEN,
  WHITE,
} from "../../utils/colours";
import { COLOUR_HIGHLIGHTED } from "../../utils/constants";
import SelectedRoute from "./SelectedRoute";
import { VIEWS } from "./Sidebar";

export default function Routes({ mapRef, navigateTo }) {
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
    <>
      <div
        style={{
          paddingLeft: "1em",
          flex: "1",
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <h2 style={{ paddingLeft: 15 }}>Routes</h2>
        <Search text={searchText} setText={setSearchText} />
        <span
          style={{
            position: "absolute",
            top: 25,
            right: 20,
            cursor: "pointer",
            color: WHITE,
            backgroundColor: LIGHT_BLUE,
            borderColor: DARK_BLUE,
          }}
        >
          {Object.values(VIEWS).map(
            (view) =>
              view.key !== VIEWS.routes.key && (
                <button
                  key={view.key}
                  style={{
                    cursor: "pointer",
                    color: WHITE,
                    backgroundColor: LIGHT_BLUE,
                    borderColor: DARK_BLUE,
                  }}
                  onClick={() => navigateTo(view)}
                >
                  {view.name}
                </button>
              )
          )}
        </span>
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
      <SelectedRoute mapRef={mapRef} />
    </>
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
