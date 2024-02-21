import { ROUTES } from "../data/routes";
import { SEGMENTS } from "../data/segments";
import { VIDEOS } from "../data/videos";
import { sumSegmentsLengths } from "./segments";

export const getRoutesWithVideo = (videoId) => {
  return Object.values(ROUTES).filter(({ legs }) =>
    legs.some(({ videos }) =>
      Object.values(videos).some((video) => video.id === videoId)
    )
  );
};

const getVideoSegments = (videoId) =>
  SEGMENTS.filter((segment) => segment.videoIds?.includes(videoId));

export const getVideoDistance = (videoId) =>
  sumSegmentsLengths(getVideoSegments(videoId));

export const AUGMENTED_VIDEOS = Object.entries(VIDEOS).reduce(
  (acc, [key, video]) => {
    acc[key] = {
      ...video,
      distance: getVideoDistance(video.id),
    };
    return acc;
  },
  {}
);

export const getAugmentedVideo = (videoId) =>
  Object.values(AUGMENTED_VIDEOS).find((video) => video.id === videoId);
