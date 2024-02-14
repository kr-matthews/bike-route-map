import { useContext, useMemo, useState } from "react";
import { ROUTES } from "../../data/routes";
import { Selections } from "../../App";
import { Search } from "./Search";
import { isSubsequence, removeWhiteSpaces } from "../../utils/strings";
import { BLACK, WHITE } from "../../utils/colours";
import { COLOUR_HIGHLIGHTED } from "../../utils/constants";
import { VIEWS } from "./Sidebar";
import Panel from "./Panel";
import {
  getWeightedRouteDistance,
  getWeightedRouteDistanceOfType,
} from "../../utils/routes";
import { TYPE_TYPES } from "../../utils/segmentTypes";

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

function Route({ route }) {
  const { selectedRoute, setSelected, highlighted, setHighlighted } =
    useContext(Selections);
  const isHighlighted = highlighted === route.name;
  const isSelected = selectedRoute?.name === route.name;

  const background = getBackgroundColor(route.name, isHighlighted);

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

// ex: linear-gradient(to right,  #9c9e9f 0%,#9c9e9f 50%,#33ccff 50%,#33ccff 100%);

const getBackgroundColor = (routeName, isHighlighted) => {
  if (isHighlighted) return COLOUR_HIGHLIGHTED;

  const totalWeightedDistance = getWeightedRouteDistance(routeName);
  const cumulativeWeightedDistances = TYPE_TYPES.reduce(
    (acc, { key }) => [
      ...acc,
      acc[acc.length - 1] + getWeightedRouteDistanceOfType(routeName, key),
    ],
    [0]
  );

  const linearGradient =
    "to right, " +
    TYPE_TYPES.flatMap(({ colour }, index) =>
      cumulativeWeightedDistances[index] ===
      cumulativeWeightedDistances[index + 1]
        ? []
        : [
            gradientPortion(
              colour,
              cumulativeWeightedDistances[index],
              totalWeightedDistance
            ),
            gradientPortion(
              colour,
              cumulativeWeightedDistances[index + 1],
              totalWeightedDistance
            ),
          ]
    ).join(", ");

  return `linear-gradient(${linearGradient})`;
};

const gradientPortion = (colour, weight, totalWeight) =>
  `${colour} ${(100 * weight) / totalWeight}%`;
