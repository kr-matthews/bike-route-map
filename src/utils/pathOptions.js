const NARROW_WEIGHT = 4;
const WIDE_WEIGHT = 6;
const DIM_OPACITY = 0.65;
const FULL_OPACITY = 1;
const VIDEO_COLOUR = "Purple";
const BIDIRECTIONAL_COLOUR = "DarkGreen";
const UNIDIRECTIONAL_COLOUR = "Blue";

export function createPathOptions(
  { routes, directions, videos },
  { highlighted, selectedRoute, video }
) {
  const isNoneSelected = !selectedRoute;
  const isSelected = (routes ?? []).includes(selectedRoute?.name);
  const isHighlighted = (routes ?? []).includes(highlighted);
  const hasActiveVideo = videos?.includes(video);

  const nonVideoColour =
    directions?.length === 1 ? UNIDIRECTIONAL_COLOUR : BIDIRECTIONAL_COLOUR;

  return {
    color: hasActiveVideo ? VIDEO_COLOUR : nonVideoColour,
    weight: isHighlighted || hasActiveVideo ? WIDE_WEIGHT : NARROW_WEIGHT,
    opacity: isSelected || isNoneSelected ? FULL_OPACITY : DIM_OPACITY,
  };
}
