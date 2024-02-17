import { BLACK, RED, WHITE } from "../../utils/colours";
import {
  DIRECTIONS,
  ELEVATIONS,
  TYPES,
  isTypeAlwaysOneWay,
  isDirectionOneWay,
} from "../../utils/segmentTypes";

export default function SegmentForm({
  view,
  types,
  directions,
  elevations,
  dispatch,
}) {
  const isLegend = view === "legend";
  const isFilters = view === "filters";

  const isAnAlwaysOneWayTypeSelected = TYPES.some(
    (t) => types[t.key] && isTypeAlwaysOneWay(t)
  );
  const isAOneWayDirectionSelected = DIRECTIONS.some(
    (d) => directions[d.key] && isDirectionOneWay(d)
  );

  return (
    <table style={{ fontSize: "90%" }}>
      <tbody>
        <tr>
          <td style={{ verticalAlign: "top" }}>
            {isFilters && (
              <HeaderCheckbox
                characteristic="type"
                options={types}
                dispatch={dispatch}
              />
            )}

            {TYPES.map((type) => {
              const isDisabled =
                isLegend &&
                isTypeAlwaysOneWay(type) &&
                !isAOneWayDirectionSelected;
              const action = isDisabled
                ? undefined
                : () =>
                    dispatch({
                      type: "toggle",
                      characteristic: "type",
                      key: type.key,
                    });
              return (
                <div key={type.name} style={{ padding: "5px" }}>
                  <input
                    type={isLegend ? "radio" : "checkbox"}
                    id="key"
                    name="type"
                    style={{ cursor: isDisabled ? undefined : "pointer" }}
                    disabled={isDisabled}
                    checked={types[type.key]}
                    onChange={action}
                  />
                  <label
                    htmlFor="comfortable"
                    style={{
                      cursor: isDisabled ? undefined : "pointer",
                      color: WHITE,
                      opacity: isDisabled ? 0.2 : 1,
                      backgroundColor: type.colour ?? type.oneWayColour,
                      padding: "4px",
                    }}
                    onClick={action}
                  >
                    {type.name}
                  </label>
                </div>
              );
            })}
            <ErrorFooter options={types} />
          </td>

          <td style={{ verticalAlign: "top" }}>
            {isFilters && (
              <HeaderCheckbox
                characteristic="direction"
                options={directions}
                dispatch={dispatch}
              />
            )}

            {DIRECTIONS.map((direction) => {
              const isDisabled =
                isLegend &&
                isAnAlwaysOneWayTypeSelected &&
                !isDirectionOneWay(direction);
              const action = isDisabled
                ? undefined
                : () =>
                    dispatch({
                      type: "toggle",
                      characteristic: "direction",
                      key: direction.key,
                    });
              return (
                <div key={direction.name} style={{ padding: "5px" }}>
                  <input
                    type={isLegend ? "radio" : "checkbox"}
                    id="key"
                    name="direction"
                    style={{ cursor: isDisabled ? undefined : "pointer" }}
                    disabled={isDisabled}
                    checked={directions[direction.key]}
                    onChange={action}
                  />
                  <label
                    htmlFor="comfortable"
                    style={{
                      cursor: isDisabled ? undefined : "pointer",
                      opacity: isDisabled ? 0.2 : 1,
                      padding: "4px",
                    }}
                    onClick={action}
                  >
                    {direction.name}
                  </label>
                </div>
              );
            })}
            <ErrorFooter options={directions} />
          </td>

          <td style={{ verticalAlign: "top" }}>
            {isFilters && (
              <HeaderCheckbox
                characteristic="elevation"
                options={elevations}
                dispatch={dispatch}
              />
            )}

            {ELEVATIONS.map((elevation) => {
              const action = () =>
                dispatch({
                  type: "toggle",
                  characteristic: "elevation",
                  key: elevation.key,
                });
              return (
                <div key={elevation.name} style={{ padding: "5px" }}>
                  <input
                    type={isLegend ? "radio" : "checkbox"}
                    id="key"
                    name="elevation"
                    style={{ cursor: "pointer" }}
                    checked={elevations[elevation.key]}
                    onChange={action}
                  />
                  <label
                    htmlFor="comfortable"
                    style={{
                      cursor: "pointer",
                      color: elevation.colour ? WHITE : BLACK,
                      backgroundColor: elevation.colour,
                      padding: "4px",
                    }}
                    onClick={action}
                  >
                    {elevation.name}
                  </label>
                </div>
              );
            })}
            <ErrorFooter options={elevations} />
          </td>
        </tr>
      </tbody>
    </table>
  );
}

const HeaderCheckbox = ({ characteristic, options, dispatch }) => {
  const toggleAll = () => {
    dispatch({ type: "toggle-all", characteristic });
  };

  return (
    <div style={{ padding: "5px" }}>
      <input
        type="checkbox"
        id="key"
        name={characteristic}
        style={{ cursor: "pointer" }}
        checked={Object.values(options).every((b) => b)}
        onChange={toggleAll}
      />
      <label
        htmlFor={`all-${characteristic}`}
        style={{
          cursor: "pointer",
          padding: "4px",
        }}
        onClick={toggleAll}
      >
        <b>
          <u>All {characteristic}s</u>
        </b>
      </label>
    </div>
  );
};

const ErrorFooter = ({ options }) => {
  return (
    !Object.values(options).some((b) => b) && (
      <em style={{ color: RED }}>Select at least one!</em>
    )
  );
};
