import {
  BIDIRECTIONAL_COLOUR_FULL,
  BIDIRECTIONAL_COLOUR_LIGHT,
  ELEVATED_BORDER_COLOUR,
  BORDER_WEIGHT,
  DASH_PATTERN,
  NARROW_WEIGHT,
  UNIDIRECTIONAL_COLOUR_FULL,
  UNIDIRECTIONAL_COLOUR_LIGHT,
  VIDEO_BIDIRECTIONAL_COLOUR,
  VIDEO_UNIDIRECTIONAL_COLOUR,
  WIDE_WEIGHT,
  UNDERGROUND_BORDER_COLOUR,
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
  { routes, elevation },
  { highlighted }
) {
  const isHighlighted = (routes ?? []).includes(highlighted);

  if (!elevation) return null;

  return {
    color: elevation > 0 ? ELEVATED_BORDER_COLOUR : UNDERGROUND_BORDER_COLOUR,
    weight: (isHighlighted ? WIDE_WEIGHT : NARROW_WEIGHT) + BORDER_WEIGHT,
    // explicit opacity required to show hidden routes when video is selected
    opacity: 100,
  };
}

export function getSegmentPane(elevation, hasMultipleRoutes) {
  switch (elevation) {
    case 2:
      return "elevated-2";
    case 1.5:
      return "elevated-2-adj";
    case 1:
      return "elevated-1";
    case 0.5:
      return "elevated-1-adj";
    case -0.5:
      return "underground-1-adj";
    case -1:
      return "underground-1";

    default:
      return hasMultipleRoutes ? "shared" : "solo";
  }
}

export function getBorderPane(elevation) {
  switch (elevation) {
    case 2:
      return "elevated-2-border";
    case 1.5:
    case 1:
      return "elevated-1-border";
    case -1:
      return "underground-1-border";

    default:
      return undefined;
  }
}
