import { ROUTES } from "../data/routes";

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
