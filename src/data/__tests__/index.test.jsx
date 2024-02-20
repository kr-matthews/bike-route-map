import "@testing-library/jest-dom";
import { ROUTES } from "../routes";
import { SEGMENTS } from "../segments";
import { VIDEOS } from "../videos";
import { getRoutesWithVideo } from "../../utils/videos";
import { MCKAY_BC_PARKWAY, MCKAY_CENTRAL_SE } from "../intersections";

// helpers

const positionsMatch = (p1, p2) => {
  return p1[0] === p2[0] && p1[1] === p2[1];
};

const getARouteName = (videoId) => getRoutesWithVideo(videoId)[0]?.name;

const EXCEPTIONAL_SEAMS = [
  // metrotown ccw loop point
  MCKAY_BC_PARKWAY,
  // metrotown ccw triple-intersection
  MCKAY_CENTRAL_SE,
];

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
          (seam) =>
            seams.filter((s) => positionsMatch(seam, s)).length !== 2 &&
            !EXCEPTIONAL_SEAMS.some((s) => positionsMatch(seam, s))
        );

        expect(unmatchedSeams).toHaveLength(0);
      });
    });
  });

  test("no unused videos", () => {
    const unusedVideos = Object.values(VIDEOS).filter(
      (video) => !routeVideos.includes(video.id)
    );
    expect(unusedVideos).toHaveLength(0);
  });
});
