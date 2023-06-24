const NARROW_WEIGHT = 4;
const WIDE_WEIGHT = 6;
const DIM_OPACITY = 0.65;
const FULL_OPACITY = 1;
const BIDIRECTIONAL_COLOUR = "DarkGreen";
const UNIDIRECTIONAL_COLOUR = "Blue";

export function createPathOptions(route, leg, segment, selections, _settings) {
  const isNoneSelected = !selections.selected;
  const isSelected = selections.selected === route.name + leg.name;
  const isHighlighted = selections.highlighted === route.name + leg.name;

  return {
    color:
      segment.directions.length > 1
        ? BIDIRECTIONAL_COLOUR
        : UNIDIRECTIONAL_COLOUR,
    weight: isHighlighted ? WIDE_WEIGHT : NARROW_WEIGHT,
    opacity: isSelected || isNoneSelected ? FULL_OPACITY : DIM_OPACITY,
  };
}
