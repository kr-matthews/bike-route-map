import { ROUTES } from "../data/routes";

export const getRoutesWithVideo = (videoId) => {
  return Object.values(ROUTES).filter(({ legs }) =>
    legs.some(({ videos }) =>
      Object.values(videos).some(({ id }) => id === videoId)
    )
  );
};
