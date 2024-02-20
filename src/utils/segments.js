import L from "leaflet";
import { ROUTES } from "../data/routes";

export function segmentHasVideoForRoute(segment, routeName) {
  const route = Object.values(ROUTES).find(({ name }) => name === routeName);
  // route may be null for uses like the legend
  if (!route) return false;

  const routeVideos = route.legs.flatMap(({ videos }) => Object.values(videos));

  return (segment.videos ?? []).some((videoId) =>
    (routeVideos ?? []).map(({ id }) => id).includes(videoId)
  );
}

const segmentLength = (segment) =>
  segment.positions.reduce((accumulator, currPosition, index) => {
    if (index === 0) return 0;

    const prevPosition = segment.positions[index - 1];
    const nextLength = L.latLng(prevPosition).distanceTo(
      L.latLng(currPosition)
    );
    return accumulator + nextLength;
  }, 0);

const segmentWeight = (segment) => (segment.oneWay ? 0.5 : 1);

export const sumSegmentsWeightedLengths = (segments) =>
  segments.reduce(
    (accumulator, segment) =>
      accumulator + segmentWeight(segment) * segmentLength(segment),
    0
  );

export const sumSegmentsLengths = (segments) =>
  segments.reduce(
    (accumulator, segment) => accumulator + segmentLength(segment),
    0
  );
