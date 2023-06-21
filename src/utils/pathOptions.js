const NARROW_WEIGHT = 4;
const WIDE_WEIGHT = 6;
const DIM_OPACITY = 0.65;
const FULL_OPACITY = 1;
const BIDIRECTIONAL_COLOUR = "DarkGreen";
const UNIDIRECTIONAL_COLOUR = "Blue";

export function createPathOptions(route, leg, segment, options, _settings) {
  const isNoneSelected = !options.selectedLeg;
  const isSelected = options.selectedLeg === route.name + leg.name;

  return {
    color:
      segment.directions.length > 1
        ? BIDIRECTIONAL_COLOUR
        : UNIDIRECTIONAL_COLOUR,
    weight: options.isHighlighted ? WIDE_WEIGHT : NARROW_WEIGHT,
    opacity: isSelected || isNoneSelected ? FULL_OPACITY : DIM_OPACITY,
  };
}
