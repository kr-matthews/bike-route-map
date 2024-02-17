import { BLACK, WHITE } from "../../utils/colours";
import {
  DIRECTION_TYPES,
  ELEVATION_TYPES,
  TYPE_TYPES,
  isAlwaysOneWay,
  isOneWay,
} from "../../utils/segmentTypes";

export default function SegmentForm({
  view,
  types,
  directions,
  elevations,
  dispatch,
}) {
  const isLegend = view === "legend";

  const isAnAlwaysOneWayTypeSelected = TYPE_TYPES.some(
    (t) => types[t.key] && isAlwaysOneWay(t)
  );
  const isAOneWayDirectionSelected = DIRECTION_TYPES.some(
    (d) => directions[d.key] && isOneWay(d)
  );

  return (
    <table style={{ fontSize: "90%" }}>
      <tbody>
        <tr>
          <td style={{ verticalAlign: "top" }}>
            {TYPE_TYPES.map((type) => {
              const isDisabled =
                isLegend && isAlwaysOneWay(type) && !isAOneWayDirectionSelected;
              const action = isDisabled
                ? undefined
                : () => dispatch({ type: "type", key: type.key });
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
          </td>

          <td style={{ verticalAlign: "top" }}>
            {DIRECTION_TYPES.map((direction) => {
              const isDisabled =
                isLegend &&
                isAnAlwaysOneWayTypeSelected &&
                !isOneWay(direction);
              const action = isDisabled
                ? undefined
                : () => dispatch({ type: "direction", key: direction.key });
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
          </td>

          <td style={{ verticalAlign: "top" }}>
            {ELEVATION_TYPES.map((elevation) => {
              const action = () =>
                dispatch({ type: "elevation", key: elevation.key });
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
          </td>
        </tr>
      </tbody>
    </table>
  );
}
