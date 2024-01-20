import { BLACK } from "./colours";
import {
  COLOUR_CLOSED,
  COLOUR_COMFORTABLE,
  COLOUR_COMFORTABLE_ONE_WAY,
  COLOUR_ELEVATED_BORDER,
  COLOUR_HIGHLIGHTED,
  COLOUR_OTHER,
  COLOUR_OTHER_ONE_WAY,
  COLOUR_PAINTED_ONE_WAY,
  COLOUR_SHARED,
  COLOUR_SHARED_ONE_WAY,
  COLOUR_SHOULDER_ONE_WAY,
  COLOUR_UNDERGROUND_BORDER,
  COLOUR_VIDEO,
  DASH_PATTERN,
  WEIGHT_BORDER_ADD_ON,
  WEIGHT_NARROW,
  WEIGHT_UNDERGROUND,
  WEIGHT_WIDE,
} from "./constants";
import { normalizeType } from "./segmentTypes";

export function createPathOptions(
  { routeNames, oneWay, isClosed, videos, type, hideUnlessVideo, elevation },
  { highlighted, selected, video, isHidden }
) {
  const isSelected = (routeNames ?? []).includes(selected);
  const isHighlighted = (routeNames ?? []).includes(highlighted);
  const hasActiveVideo = videos?.includes(video);

  const isOneWay = oneWay === "required";

  const isComfortable = normalizeType(type) === "comfortable";
  const isPainted = type === "painted";
  const isShared = type === "shared";
  const isShoulder = type === "shoulder";
  const isOther = type === "other";

  let colour = BLACK;
  if (isComfortable) {
    colour = isOneWay ? COLOUR_COMFORTABLE_ONE_WAY : COLOUR_COMFORTABLE;
  } else if (isPainted) {
    colour = COLOUR_PAINTED_ONE_WAY;
  } else if (isShared) {
    colour = isOneWay ? COLOUR_SHARED_ONE_WAY : COLOUR_SHARED;
  } else if (isShoulder) {
    colour = COLOUR_SHOULDER_ONE_WAY;
  } else if (isOther) {
    colour = isOneWay ? COLOUR_OTHER_ONE_WAY : COLOUR_OTHER;
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
  { selected, isHidden }
) {
  const isSelected = (routeNames ?? []).includes(selected);

  if (!elevation) return null;

  return {
    color: elevation > 0 ? COLOUR_ELEVATED_BORDER : COLOUR_UNDERGROUND_BORDER,
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
