import { ROUTES } from "../data/routes";
import { SEGMENTS } from "../data/segments";
import { ROUTE_VIDEOS } from "../data/videos/routes";
import { sumSegmentsLengths } from "./segments";

export function getVideo(id) {
  return Object.values(ROUTE_VIDEOS).find(
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

const segmentsWithAnyVideo = SEGMENTS.filter((segment) => segment.videoIds);

export const getVideoDistance = (videoId) =>
  sumSegmentsLengths(getVideoSegments(videoId));

export const videoUniqueDistanceCovered =
  sumSegmentsLengths(segmentsWithAnyVideo);

export const displayDirection = (direction) => {
  switch (direction) {
    case "counterclockwise":
      return "C-Clockwise";

    default:
      return direction;
  }
};

export const AUGMENTED_VIDEOS = Object.entries(ROUTE_VIDEOS).reduce(
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

export const videoCount = Object.keys(ROUTE_VIDEOS).length;

export const videoCumulativeMinutes = Object.values(ROUTE_VIDEOS).reduce(
  (s, v) => s + v.minutes,
  0
);

export const videoCumulativeDistance = Object.values(ROUTE_VIDEOS).reduce(
  (s, v) => s + getVideoDistance(v.id),
  0
);
