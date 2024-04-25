import { ROUTES } from "../data/routes";
import { SEGMENTS } from "../data/segments";
import { VIDEOS } from "../data/videos";
import { sumSegmentsLengths } from "./segments";

export function getVideo(id) {
  return Object.values(VIDEOS).find(
    (video) => video.id.toLowerCase() === id?.toLowerCase()
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

export const getVideoDistance = (videoId) =>
  sumSegmentsLengths(getVideoSegments(videoId));

export const displayDirection = (direction) => {
  switch (direction) {
    case "counterclockwise":
      return "C-Clockwise";

    default:
      return direction;
  }
};

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
