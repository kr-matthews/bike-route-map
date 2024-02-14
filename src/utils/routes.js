import { ROUTES } from "../data/routes";
import { SEGMENTS } from "../data/segments";
import { normalizeType } from "./segmentTypes";
import { sumWeightedLengths } from "./segments";

export function hasVideo(segment, routeName) {
  const route = Object.values(ROUTES).find(({ name }) => name === routeName);
  // route may be null for uses like the legend
  if (!route) return false;

  const routeVideos = route.legs.flatMap(({ videos }) => Object.values(videos));

  return (segment.videos ?? []).some((videoId) =>
    (routeVideos ?? []).map(({ id }) => id).includes(videoId)
  );
}

export const getRoutesWithVideo = (videoId) => {
  return Object.values(ROUTES).filter(({ legs }) =>
    legs.some(({ videos }) =>
      Object.values(videos).some(({ id }) => id === videoId)
    )
  );
};

const getRouteSegments = (routeName) =>
  SEGMENTS.filter((segment) => segment.routeNames?.includes(routeName));

const getRouteSegmentsOfType = (routeName, segmentType) =>
  getRouteSegments(routeName).filter(
    (segment) => normalizeType(segment.type ?? "comfortable") === segmentType
  );

export const getWeightedRouteDistance = (routeName) =>
  sumWeightedLengths(getRouteSegments(routeName));

export const getWeightedRouteDistanceOfType = (routeName, segmentType) =>
  sumWeightedLengths(getRouteSegmentsOfType(routeName, segmentType));
