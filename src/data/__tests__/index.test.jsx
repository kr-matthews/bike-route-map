import "@testing-library/jest-dom";
import { ROUTES } from "../routes";
import { SEGMENTS } from "../segments";
import { VIDEOS } from "../videos";
import { getRoutesWithVideo } from "../../utils/videos";
import {
  MCKAY_BC_PARKWAY,
  MCKAY_CENTRAL_SE,
  SUSSEX_HAZEL_S,
} from "../intersections";
import {
  E_LOOP_E,
  E_LOOP_W,
  W_LOOP_E,
  W_LOOP_W,
} from "../segments/goldenEarsBridge";

// helpers

const positionsMatch = (p1, p2) => {
  return p1[0] === p2[0] && p1[1] === p2[1];
};

const getARouteName = (videoId) => getRoutesWithVideo(videoId)[0]?.name;

const EXCEPTIONAL_SEAMS = [
  // metrotown cw loop point
  SUSSEX_HAZEL_S,
  // metrotown ccw loop point
  MCKAY_BC_PARKWAY,
  // metrotown ccw triple-intersection
  MCKAY_CENTRAL_SE,
  // golden ears loops
  E_LOOP_E,
  E_LOOP_W,
  W_LOOP_E,
  W_LOOP_W,
];

// calculations

const routeVideoIds = [
  ...new Set(
    Object.values(ROUTES).flatMap((route) =>
      route.legs.flatMap((leg) =>
        Object.values(leg.videos).map((video) => video.id)
      )
    )
  ),
];

const startMarkerIds = SEGMENTS.flatMap((segment) => [
  ...(segment.videoIdsStartAtStart ?? []),
  ...(segment.videoIdsStartAtEnd ?? []),
]);

const endMarkerIds = SEGMENTS.flatMap((segment) => [
  ...(segment.videoIdsEndAtStart ?? []),
  ...(segment.videoIdsEndAtEnd ?? []),
]);

const seamMarkerIds = SEGMENTS.flatMap((segment) => [
  ...(segment.videoIdsLoopAtStart ?? []),
  ...(segment.videoIdsLoopAtEnd ?? []),
]);

describe("data", () => {
  describe.each(routeVideoIds)("route video %s", (videoId) => {
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
          segment.videoIds?.includes(videoId)
        ).flatMap((segment) => {
          let segmentSeams = [];
          if (
            !(
              segment.videoIdsStartAtStart?.includes(videoId) ||
              segment.videoIdsEndAtStart?.includes(videoId)
            )
          ) {
            segmentSeams.push(segment.positions[0]);
          }
          if (
            !(
              segment.videoIdsStartAtEnd?.includes(videoId) ||
              segment.videoIdsEndAtEnd?.includes(videoId)
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
      (video) => !routeVideoIds.includes(video.id)
    );
    expect(unusedVideos).toHaveLength(0);
  });

  test("no empty video ids", () => {
    const noIdVideos = Object.values(VIDEOS).filter((video) => !video.id);
    expect(noIdVideos).toHaveLength(0);
  });

  test("no duplicate video ids", () => {
    const uniqueVideoIds = [
      ...new Set(Object.values(VIDEOS).map(({ id }) => id)),
    ];
    expect(uniqueVideoIds).toHaveLength(Object.values(VIDEOS).length);
  });
});
