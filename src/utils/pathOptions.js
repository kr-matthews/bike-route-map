const NARROW_WEIGHT = 6;
const WIDE_WEIGHT = 9;
const DIM_OPACITY = 0.5;
const FULL_OPACITY = 1;
const VIDEO_COLOUR = "Purple";
const BIDIRECTIONAL_COLOUR = "DarkGreen";
const UNIDIRECTIONAL_COLOUR = "Blue";
const DASH_PATTERN = "6, 10";

export function createPathOptions(
  { routes, directions, videos, type, hideUnlessVideo },
  { highlighted, selectedRoute, video }
) {
  const isNoneSelected = !selectedRoute;
  const isSelected = (routes ?? []).includes(selectedRoute?.name);
  const isHighlighted = (routes ?? []).includes(highlighted);
  const hasActiveVideo = videos?.includes(video);
  const isUnofficial = type === "unofficial";

  const nonVideoColour =
    directions?.length === 1 ? UNIDIRECTIONAL_COLOUR : BIDIRECTIONAL_COLOUR;

  if (hideUnlessVideo && !hasActiveVideo) return { weight: 0, opacity: 0 };

  return {
    color: hasActiveVideo ? VIDEO_COLOUR : nonVideoColour,
    weight: isHighlighted || hasActiveVideo ? WIDE_WEIGHT : NARROW_WEIGHT,
    opacity: isSelected || isNoneSelected ? FULL_OPACITY : DIM_OPACITY,
    dashArray: isUnofficial ? DASH_PATTERN : undefined,
  };
}
