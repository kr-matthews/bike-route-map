const NARROW_WEIGHT = 4;
const WIDE_WEIGHT = 6;
const DIM_OPACITY = 0.65;
const FULL_OPACITY = 1;
const BIDIRECTIONAL_COLOUR = "DarkGreen";
const UNIDIRECTIONAL_COLOUR = "Blue";

export function createPathOptions(
  { routes, directions },
  { selectedRoute, highlighted },
  _settings
) {
  const isNoneSelected = !selectedRoute;
  const isSelected = (routes ?? []).includes(selectedRoute?.name);
  const isHighlighted = (routes ?? []).includes(highlighted);

  return {
    color:
      directions?.length === 1 ? UNIDIRECTIONAL_COLOUR : BIDIRECTIONAL_COLOUR,
    weight: isHighlighted ? WIDE_WEIGHT : NARROW_WEIGHT,
    opacity: isSelected || isNoneSelected ? FULL_OPACITY : DIM_OPACITY,
  };
}
