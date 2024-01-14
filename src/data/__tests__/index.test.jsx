import "@testing-library/jest-dom";
import { SEGMENTS } from "../segments";
import { ROUTES } from "../routes";

// helpers

const positionsMatch = (p1, p2) => {
  return p1[0] === p2[0] && p1[1] === p2[1];
};

const getARouteName = (videoId) => {
  return (
    Object.values(ROUTES).find(({ legs }) =>
      legs.some(({ videos }) =>
        Object.values(videos).some(({ id }) => id === videoId)
      )
    )?.name ?? "NO ROUTE"
  );
};

// calculations

const routeVideos = [
  ...new Set(
    Object.values(ROUTES).flatMap((route) =>
      route.legs.flatMap((leg) =>
        Object.values(leg.videos).map((video) => video.id)
      )
    )
  ),
];

const startMarkerIds = SEGMENTS.flatMap((segment) => [
  ...(segment.videosStartAtStart ?? []),
  ...(segment.videosStartAtEnd ?? []),
]);

const endMarkerIds = SEGMENTS.flatMap((segment) => [
  ...(segment.videosEndAtStart ?? []),
  ...(segment.videosEndAtEnd ?? []),
]);

const seamMarkerIds = SEGMENTS.flatMap((segment) => [
  ...(segment.videosLoopAtStart ?? []),
  ...(segment.videosLoopAtEnd ?? []),
]);

describe("data", () => {
  describe.each(routeVideos)("route video %s", (videoId) => {
    // bit of a hack to show (a) route name in test
    describe(`(${getARouteName(videoId)})`, () => {
      test(`has 1 start marker and 1 end marker OR 1 seam marker`, () => {
        const startMarkers = startMarkerIds.filter(
          (startId) => startId === videoId
        ).length;
        const endMarkers = endMarkerIds.filter(
          (startId) => startId === videoId
        ).length;
        const seamMarkers = seamMarkerIds.filter(
          (startId) => startId === videoId
        ).length;

        if (seamMarkers > 0) {
          expect([startMarkers, endMarkers, seamMarkers]).toEqual([0, 0, 1]);
        } else {
          expect([startMarkers, endMarkers, seamMarkers]).toEqual([1, 1, 0]);
        }
      });

      test(`each un-marked seam has a match`, () => {
        const seams = SEGMENTS.filter((segment) =>
          segment.videos?.includes(videoId)
        ).flatMap((segment) => {
          let segmentSeams = [];
          if (
            !(
              segment.videosStartAtStart?.includes(videoId) ||
              segment.videosEndAtStart?.includes(videoId)
            )
          ) {
            segmentSeams.push(segment.positions[0]);
          }
          if (
            !(
              segment.videosStartAtEnd?.includes(videoId) ||
              segment.videosEndAtEnd?.includes(videoId)
            )
          ) {
            segmentSeams.push(segment.positions[segment.positions.length - 1]);
          }
          return segmentSeams;
        });

        const unmatchedSeams = seams.filter(
          // if a video overlaps itself, this may fail; consider changing to `=== 1`
          (seam) => seams.filter((s) => positionsMatch(seam, s)).length !== 2
        );

        expect(unmatchedSeams).toHaveLength(0);
      });
    });
  });
});