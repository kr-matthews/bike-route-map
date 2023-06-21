import { VIDEOS } from "./videos";

export const HARO = {
  name: "Haro",
  legs: [
    {
      videos: {
        eastbound: null,
        westbound: VIDEOS.haroWb,
      },
      segments: [
        {
          description: "all",
          directions: ["eastbound", "westbound"],
          positions: [
            [49.2932, -123.14024],
            [49.29316, -123.14024],
            [49.29309, -123.14021],
            [49.29304, -123.14016],
            [49.29302, -123.14008],
            [49.29301, -123.13995],
            [49.29269, -123.13945],
            [49.29178, -123.13802],
            [49.29078, -123.1365],
            [49.28976, -123.13492],
            [49.28875, -123.13335],
            [49.28798, -123.13217],
            [49.28722, -123.131],
            [49.28632, -123.12962],
            [49.28531, -123.12804],
            [49.28495, -123.12753],
            [49.28395, -123.12595],
            [49.28393, -123.12591],
          ],
        },
      ],
    },
  ],
};
