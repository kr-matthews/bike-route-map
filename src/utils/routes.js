import { ROUTES } from "../data/routes";

export function hasVideo(segment, routeName) {
  const route = Object.values(ROUTES).find(({ name }) => name === routeName);
  const routeVideos = route.legs.flatMap(({ videos }) => Object.values(videos));

  return (segment.videos ?? []).some((video) =>
    (routeVideos ?? []).includes(video)
  );
}
