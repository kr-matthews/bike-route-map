import { BLACK } from "./colours";
import {
  COLOUR_CLOSED,
  COLOUR_HIGHLIGHTED,
  COLOUR_VIDEO,
  DASH_PATTERN,
  WEIGHT_BORDER_ADD_ON,
  WEIGHT_NARROW,
  WEIGHT_UNDERGROUND,
  WEIGHT_WIDE,
} from "./constants";
import {
  getElevation,
  getType,
  normalizeElevation,
  normalizeType,
} from "./segmentTypes";

export function createPathOptions(
  { routeNames, oneWay, isClosed, videoIds, type, hideUnlessVideo, elevation },
  { highlightedRoute, selectedRoute, selectedVideo, isHidden }
) {
  const isSelected = (routeNames ?? []).includes(selectedRoute?.name);
  const isHighlighted = (routeNames ?? []).includes(highlightedRoute?.name);
  const hasActiveVideo = videoIds?.includes(selectedVideo?.id);

  const isOneWay = oneWay === "required";

  let colour = BLACK;
  if (isOneWay) {
    colour = getType(normalizeType(type))?.oneWayColour;
  } else {
    colour = getType(normalizeType(type))?.colour;
  }
  if (isClosed) {
    colour = COLOUR_CLOSED;
  }
  if (hasActiveVideo) {
    colour = COLOUR_VIDEO;
  }
  if (isHighlighted) {
    colour = COLOUR_HIGHLIGHTED;
  }

  const nonUndergroundWeight = isSelected ? WEIGHT_WIDE : WEIGHT_NARROW;

  return {
    color: colour,
    weight: isHidden
      ? 0
      : elevation <= -1
      ? WEIGHT_UNDERGROUND
      : nonUndergroundWeight,
    // explicit opacity required to show hidden routes when video is selected
    opacity: 100,
    dashArray: hideUnlessVideo ? DASH_PATTERN : undefined,
  };
}

export function createBorderPathOptions(
  { routeNames, elevation },
  { selectedRoute, isHidden }
) {
  const isSelected = (routeNames ?? []).includes(selectedRoute?.name);

  if (!elevation) return null;

  return {
    color: getElevation(normalizeElevation(elevation))?.colour,
    weight: isHidden
      ? 0
      : (isSelected ? WEIGHT_WIDE : WEIGHT_NARROW) + WEIGHT_BORDER_ADD_ON,
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
