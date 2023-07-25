const NARROW_WEIGHT = 6;
const WIDE_WEIGHT = 9;
const DIM_OPACITY = 0.5;
const FULL_OPACITY = 1;
const VIDEO_BIDIRECTIONAL_COLOUR = "Purple";
const VIDEO_UNIDIRECTIONAL_COLOUR = "Magenta";
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
  const isUncomfortable = type === "uncomfortable";

  const nonVideoColour =
    directions?.length === 1 ? UNIDIRECTIONAL_COLOUR : BIDIRECTIONAL_COLOUR;
  const videoColour =
    directions?.length === 1
      ? VIDEO_UNIDIRECTIONAL_COLOUR
      : VIDEO_BIDIRECTIONAL_COLOUR;

  if (hideUnlessVideo && !hasActiveVideo) return { weight: 0, opacity: 0 };

  return {
    color: hasActiveVideo ? videoColour : nonVideoColour,
    weight: isHighlighted || hasActiveVideo ? WIDE_WEIGHT : NARROW_WEIGHT,
    opacity: isSelected || isNoneSelected ? FULL_OPACITY : DIM_OPACITY,
    dashArray: isUnofficial || isUncomfortable ? DASH_PATTERN : undefined,
  };
}
