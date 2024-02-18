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
    <div
      style={{
        display: "grid",
        gridAutoRows: "1fr",
        gridTemplateColumns: "1fr 1fr 1fr",
      }}
    >
      <div style={{ verticalAlign: "top", marginRight: "1em" }}>
        {isFilters && (
          <HeaderCheckbox
            characteristic="type"
            options={types}
            dispatch={dispatch}
          />
        )}

        {TYPES.map((type) => {
          const isDisabled =
            isLegend && isTypeAlwaysOneWay(type) && !isAOneWayDirectionSelected;
          const onClick = isDisabled
            ? undefined
            : () =>
                dispatch({
                  type: "toggle",
                  characteristic: "type",
                  key: type.key,
                });
          return (
            <Input
              key={type.key}
              type={isLegend ? "radio" : "checkbox"}
              name={type.name}
              isDisabled={isDisabled}
              isChecked={types[type.key]}
              onClick={onClick}
              backgroundColor={type.colour ?? type.oneWayColour}
            />
          );
        })}
        <ErrorFooter options={types} />
      </div>

      <div style={{ verticalAlign: "top" }}>
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
          const onClick = isDisabled
            ? undefined
            : () =>
                dispatch({
                  type: "toggle",
                  characteristic: "direction",
                  key: direction.key,
                });
          return (
            <Input
              key={direction.key}
              type={isLegend ? "radio" : "checkbox"}
              name={direction.name}
              isDisabled={isDisabled}
              isChecked={directions[direction.key]}
              onClick={onClick}
            />
          );
        })}
        <ErrorFooter options={directions} />
      </div>

      <div style={{ verticalAlign: "top" }}>
        {isFilters && (
          <HeaderCheckbox
            characteristic="elevation"
            options={elevations}
            dispatch={dispatch}
          />
        )}

        {ELEVATIONS.map((elevation) => {
          const onClick = () =>
            dispatch({
              type: "toggle",
              characteristic: "elevation",
              key: elevation.key,
            });
          return (
            <Input
              key={elevation.key}
              type={isLegend ? "radio" : "checkbox"}
              name={elevation.name}
              isChecked={elevations[elevation.key]}
              onClick={onClick}
              backgroundColor={elevation.colour}
            />
          );
        })}
        <ErrorFooter options={elevations} />
      </div>
    </div>
  );
}

const HeaderCheckbox = ({ characteristic, options, dispatch }) => {
  const toggleAll = () => {
    dispatch({ type: "toggle-all", characteristic });
  };

  return (
    <Input
      type="checkbox"
      name={
        <b>
          <u>All {characteristic}s</u>
        </b>
      }
      isChecked={Object.values(options).every((b) => b)}
      onClick={toggleAll}
      withBorder={false}
    />
  );
};

const Input = ({
  type,
  name,
  isDisabled,
  isChecked,
  onClick,
  backgroundColor,
  withBorder = true,
}) => {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: isDisabled ? undefined : "pointer",
        color: backgroundColor ? WHITE : undefined,
        opacity: isDisabled ? 0.2 : 1,
        backgroundColor,
        border: `solid 1px ${
          withBorder ? backgroundColor ?? BLACK : "Transparent"
        }`,
        borderRadius: "5px",
        width: "11em",
        padding: "3px 0 3px 0",
        margin: "0 0 5px 0",
      }}
    >
      <label
        htmlFor={name}
        style={{
          cursor: isDisabled ? undefined : "pointer",
          display: "flex",
        }}
      >
        <input
          type={type}
          name={name}
          disabled={isDisabled}
          checked={isChecked}
          style={{ cursor: isDisabled ? undefined : "pointer" }}
          // change handled by div
          readOnly
        />
        {name}
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
