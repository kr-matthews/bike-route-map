import {
  BIDIRECTIONAL_COLOUR_FULL,
  BIDIRECTIONAL_COLOUR_LIGHT,
  BORDER_WEIGHT_ADD_ON,
  CLOSED_COLOUR,
  DASH_PATTERN,
  ELEVATED_BORDER_COLOUR,
  NARROW_WEIGHT,
  SHOULDER_COLOUR_FULL,
  SHOULDER_COLOUR_LIGHT,
  UNDERGROUND_BORDER_COLOUR,
  UNDERGROUND_WEIGHT,
  UNIDIRECTIONAL_COLOUR_FULL,
  UNIDIRECTIONAL_COLOUR_LIGHT,
  VIDEO_BIDIRECTIONAL_COLOUR,
  VIDEO_UNIDIRECTIONAL_COLOUR,
  WIDE_WEIGHT,
} from "./constants";

const comfortableTypes = [
  "dedicated",
  "combined",
  "mixed-use",
  "quiet",
  "comfortable", // catch-all
  undefined, // catch-all
];

export function createPathOptions(
  { routeNames, oneWay, isClosed, videos, type, hideUnlessVideo, elevation },
  { highlighted, selected, video }
) {
  const isSelected = (routeNames ?? []).includes(selected);
  const isHighlighted = (routeNames ?? []).includes(highlighted);
  const hasActiveVideo = videos?.includes(video);

  const isOneWay = oneWay === "required";

  const isComfortable = comfortableTypes.includes(type);
  const isPainted = type === "painted";
  const isShared = type === "shared";
  const isShoulder = type === "shoulder";
  const isOther = type === "other";

  const unidirectionalColour = isSelected
    ? UNIDIRECTIONAL_COLOUR_FULL
    : UNIDIRECTIONAL_COLOUR_LIGHT;
  const bidirectionalColour = isSelected
    ? BIDIRECTIONAL_COLOUR_FULL
    : BIDIRECTIONAL_COLOUR_LIGHT;
  const shoulderColour = isSelected
    ? SHOULDER_COLOUR_FULL
    : SHOULDER_COLOUR_LIGHT;

  const nonVideoColour = isShoulder
    ? shoulderColour
    : isOneWay
    ? unidirectionalColour
    : bidirectionalColour;
  const videoColour = isOneWay
    ? VIDEO_UNIDIRECTIONAL_COLOUR
    : VIDEO_BIDIRECTIONAL_COLOUR;

  const nonUndergroundWeight = isHighlighted ? WIDE_WEIGHT : NARROW_WEIGHT;

  if (hideUnlessVideo && !hasActiveVideo) return { weight: 0, opacity: 0 };

  return {
    color: isClosed
      ? CLOSED_COLOUR
      : hasActiveVideo
      ? videoColour
      : nonVideoColour,
    weight: elevation <= -1 ? UNDERGROUND_WEIGHT : nonUndergroundWeight,
    // explicit opacity required to show hidden routes when video is selected
    opacity: 100,
    dashArray: isShared ? DASH_PATTERN : undefined,
  };
}

export function createBorderPathOptions(
  { routeNames, elevation },
  { highlighted }
) {
  const isHighlighted = (routeNames ?? []).includes(highlighted);

  if (!elevation) return null;

  return {
    color: elevation > 0 ? ELEVATED_BORDER_COLOUR : UNDERGROUND_BORDER_COLOUR,
    weight:
      (isHighlighted ? WIDE_WEIGHT : NARROW_WEIGHT) + BORDER_WEIGHT_ADD_ON,
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
