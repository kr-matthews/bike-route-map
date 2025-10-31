import { ROUTES } from "../data/routes";
import { SEGMENTS } from "../data/segments";
import { ROUTE_VIDEOS } from "../data/videos/routes";
import { UPGRADE_VIDEOS } from "../data/videos/upgrades";
import { sumSegmentsLengths } from "./segments";

// route videos

export function getRouteVideo(videoId) {
  return Object.values(ROUTE_VIDEOS).find(
    (video) => video.id.toLowerCase() === videoId?.toLowerCase()
  );
}

export const getRoutesWithVideo = (videoId) => {
  return Object.values(ROUTES).filter(({ legs }) =>
    legs.some(({ videos }) =>
      Object.values(videos).some((video) => video.id === videoId)
    )
  );
};

const getVideoSegments = (videoId) =>
  SEGMENTS.filter((segment) => segment.videoIds?.includes(videoId));

const segmentsWithAnyVideo = SEGMENTS.filter((segment) => segment.videoIds);

export const getRouteVideoDistance = (videoId) =>
  sumSegmentsLengths(getVideoSegments(videoId));

export const routeVideoUniqueDistanceCovered =
  sumSegmentsLengths(segmentsWithAnyVideo);

const AUGMENTED_ROUTE_VIDEOS = Object.entries(ROUTE_VIDEOS).reduce(
  (acc, [key, video]) => {
    acc[key] = {
      ...video,
      distance: getRouteVideoDistance(video.id),
    };
    return acc;
  },
  {}
);

export const getAugmentedRouteVideo = (videoId) =>
  Object.values(AUGMENTED_ROUTE_VIDEOS).find((video) => video.id === videoId);

export const routeVideoCount = Object.keys(ROUTE_VIDEOS).length;

export const routeVideoCumulativeMinutes = Object.values(ROUTE_VIDEOS).reduce(
  (s, v) => s + v.minutes,
  0
);

export const routeVideoCumulativeDistance = Object.values(ROUTE_VIDEOS).reduce(
  (s, v) => s + getRouteVideoDistance(v.id),
  0
);

// upgrade videos

export const getUpgradeVideo = (upgradeId) =>
  Object.values(UPGRADE_VIDEOS).find((upgrade) => upgrade.id === upgradeId);

export const upgradeVideoCount = Object.keys(UPGRADE_VIDEOS).length;
