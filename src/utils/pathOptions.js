import {
  BIDIRECTIONAL_COLOUR_FULL,
  BIDIRECTIONAL_COLOUR_LIGHT,
  BORDER_COLOUR,
  BORDER_WEIGHT,
  DASH_PATTERN,
  NARROW_WEIGHT,
  UNIDIRECTIONAL_COLOUR_FULL,
  UNIDIRECTIONAL_COLOUR_LIGHT,
  VIDEO_BIDIRECTIONAL_COLOUR,
  VIDEO_UNIDIRECTIONAL_COLOUR,
  WIDE_WEIGHT,
} from "./params";

export function createPathOptions(
  { routes, directions, videos, type, hideUnlessVideo },
  { highlighted, selectedRoute, video }
) {
  // const isNoneSelected = !selectedRoute;
  const isSelected = (routes ?? []).includes(selectedRoute?.name);
  const isHighlighted = (routes ?? []).includes(highlighted);
  const hasActiveVideo = videos?.includes(video);
  const isUnofficial = type === "unofficial";
  const isUncomfortable = type === "uncomfortable";

  const unidirectionalColour = isSelected
    ? UNIDIRECTIONAL_COLOUR_FULL
    : UNIDIRECTIONAL_COLOUR_LIGHT;
  const bidirectionalColour = isSelected
    ? BIDIRECTIONAL_COLOUR_FULL
    : BIDIRECTIONAL_COLOUR_LIGHT;

  const nonVideoColour =
    directions?.length === 1 ? unidirectionalColour : bidirectionalColour;
  const videoColour =
    directions?.length === 1
      ? VIDEO_UNIDIRECTIONAL_COLOUR
      : VIDEO_BIDIRECTIONAL_COLOUR;

  if (hideUnlessVideo && !hasActiveVideo) return { weight: 0, opacity: 0 };

  return {
    color: hasActiveVideo ? videoColour : nonVideoColour,
    weight: isHighlighted ? WIDE_WEIGHT : NARROW_WEIGHT,
    // explicit opacity required to show hidden routes when video is selected
    opacity: 100,
    // opacity: isSelected || isNoneSelected ? FULL_OPACITY : DIM_OPACITY,
    dashArray: isUnofficial || isUncomfortable ? DASH_PATTERN : undefined,
  };
}

export function createBorderPathOptions(
  { routes, type, elevated },
  { highlighted }
) {
  const isHighlighted = (routes ?? []).includes(highlighted);
  const isUnofficial = type === "unofficial";
  const isUncomfortable = type === "uncomfortable";

  if (!elevated) return null;

  return {
    color: BORDER_COLOUR,
    weight: (isHighlighted ? WIDE_WEIGHT : NARROW_WEIGHT) + BORDER_WEIGHT,
    // explicit opacity required to show hidden routes when video is selected
    opacity: 100,
    dashArray: isUnofficial || isUncomfortable ? DASH_PATTERN : undefined,
  };
}
