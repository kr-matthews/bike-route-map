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
  // const isFilter = view === "filter";

  const isAnAlwaysOneWayTypeSelected = types.some(
    (t, ind) => t && isAlwaysOneWay(TYPE_TYPES[ind])
  );
  const isAOneWayDirectionSelected = directions.some(
    (d, ind) => d && isOneWay(DIRECTION_TYPES[ind])
  );

  return (
    <table>
      <tbody>
        <tr>
          <td style={{ verticalAlign: "top" }}>
            {TYPE_TYPES.map(({ name, colour }, index) => {
              const data = TYPE_TYPES[index];
              const isDisabled =
                isLegend && isAlwaysOneWay(data) && !isAOneWayDirectionSelected;
              const action = isDisabled
                ? undefined
                : () => dispatch({ type: "type", data });
              return (
                <div key={name} style={{ padding: "5px" }}>
                  <input
                    type={isLegend ? "radio" : "checkbox"}
                    id="key"
                    name="type"
                    style={{ cursor: isDisabled ? undefined : "pointer" }}
                    disabled={isDisabled}
                    checked={types[index]}
                    onChange={action}
                  />
                  <label
                    htmlFor="comfortable"
                    style={{
                      cursor: isDisabled ? undefined : "pointer",
                      color: WHITE,
                      opacity: isDisabled ? 0.2 : 1,
                      backgroundColor: colour,
                      padding: "4px",
                    }}
                    onClick={action}
                  >
                    {name}
                  </label>
                </div>
              );
            })}
          </td>

          <td style={{ verticalAlign: "top" }}>
            {DIRECTION_TYPES.map(({ name, colour }, index) => {
              const data = DIRECTION_TYPES[index];
              const isDisabled =
                isLegend && isAnAlwaysOneWayTypeSelected && !isOneWay(data);
              const action = isDisabled
                ? undefined
                : () => dispatch({ type: "direction", data });
              return (
                <div key={name} style={{ padding: "5px" }}>
                  <input
                    type={isLegend ? "radio" : "checkbox"}
                    id="key"
                    name="direction"
                    style={{ cursor: isDisabled ? undefined : "pointer" }}
                    disabled={isDisabled}
                    checked={directions[index]}
                    onChange={action}
                  />
                  <label
                    htmlFor="comfortable"
                    style={{
                      cursor: isDisabled ? undefined : "pointer",
                      color: WHITE,
                      opacity: isDisabled ? 0.2 : 1,
                      backgroundColor: colour,
                      padding: "4px",
                    }}
                    onClick={action}
                  >
                    {name}
                  </label>
                </div>
              );
            })}
          </td>

          <td style={{ verticalAlign: "top" }}>
            {ELEVATION_TYPES.map(({ name, colour }, index) => {
              const data = ELEVATION_TYPES[index];
              const action = () => dispatch({ type: "elevation", data });
              return (
                <div key={name} style={{ padding: "5px" }}>
                  <input
                    type={isLegend ? "radio" : "checkbox"}
                    id="key"
                    name="elevation"
                    style={{ cursor: "pointer" }}
                    checked={elevations[index]}
                    onChange={action}
                  />
                  <label
                    htmlFor="comfortable"
                    style={{
                      cursor: "pointer",
                      color: colour ? WHITE : BLACK,
                      backgroundColor: colour,
                      padding: "4px",
                    }}
                    onClick={action}
                  >
                    {name}
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
