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

  const isAnAlwaysOneWayTypeSelected = TYPE_TYPES.some(
    (t) => types[t.props.type] && isAlwaysOneWay(t)
  );
  const isAOneWayDirectionSelected = DIRECTION_TYPES.some(
    (d) => directions[d.props.oneWay] && isOneWay(d)
  );

  return (
    <table>
      <tbody>
        <tr>
          <td style={{ verticalAlign: "top" }}>
            {TYPE_TYPES.map((data) => {
              const isDisabled =
                isLegend && isAlwaysOneWay(data) && !isAOneWayDirectionSelected;
              const action = isDisabled
                ? undefined
                : () => dispatch({ type: "type", data });
              return (
                <div key={data.name} style={{ padding: "5px" }}>
                  <input
                    type={isLegend ? "radio" : "checkbox"}
                    id="key"
                    name="type"
                    style={{ cursor: isDisabled ? undefined : "pointer" }}
                    disabled={isDisabled}
                    checked={types[data.props.type]}
                    onChange={action}
                  />
                  <label
                    htmlFor="comfortable"
                    style={{
                      cursor: isDisabled ? undefined : "pointer",
                      color: WHITE,
                      opacity: isDisabled ? 0.2 : 1,
                      backgroundColor: data.colour,
                      padding: "4px",
                    }}
                    onClick={action}
                  >
                    {data.name}
                  </label>
                </div>
              );
            })}
          </td>

          <td style={{ verticalAlign: "top" }}>
            {DIRECTION_TYPES.map((data) => {
              const isDisabled =
                isLegend && isAnAlwaysOneWayTypeSelected && !isOneWay(data);
              const action = isDisabled
                ? undefined
                : () => dispatch({ type: "direction", data });
              return (
                <div key={data.name} style={{ padding: "5px" }}>
                  <input
                    type={isLegend ? "radio" : "checkbox"}
                    id="key"
                    name="direction"
                    style={{ cursor: isDisabled ? undefined : "pointer" }}
                    disabled={isDisabled}
                    checked={directions[data.props.oneWay]}
                    onChange={action}
                  />
                  <label
                    htmlFor="comfortable"
                    style={{
                      cursor: isDisabled ? undefined : "pointer",
                      color: WHITE,
                      opacity: isDisabled ? 0.2 : 1,
                      backgroundColor: data.colour,
                      padding: "4px",
                    }}
                    onClick={action}
                  >
                    {data.name}
                  </label>
                </div>
              );
            })}
          </td>

          <td style={{ verticalAlign: "top" }}>
            {ELEVATION_TYPES.map((data) => {
              const action = () => dispatch({ type: "elevation", data });
              return (
                <div key={data.name} style={{ padding: "5px" }}>
                  <input
                    type={isLegend ? "radio" : "checkbox"}
                    id="key"
                    name="elevation"
                    style={{ cursor: "pointer" }}
                    checked={elevations[data.props.elevation]}
                    onChange={action}
                  />
                  <label
                    htmlFor="comfortable"
                    style={{
                      cursor: "pointer",
                      color: data.colour ? WHITE : BLACK,
                      backgroundColor: data.colour,
                      padding: "4px",
                    }}
                    onClick={action}
                  >
                    {data.name}
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
