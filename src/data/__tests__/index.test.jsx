import "@testing-library/jest-dom";
import { ROUTES } from "../routes";
import { SEGMENTS } from "../segments";
import { ROUTE_VIDEOS } from "../videos/routes";
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
import { VIDEOS } from "../videos";

const ALL_VIDEOS_VALUES = Object.values(VIDEOS)
  .map((videos) => Object.values(videos))
  .flat();

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

  describe.each(Object.values(VIDEOS.upgrades))(
    "upgrade video $title",
    (upgrade) => {
      test(`has route names`, () => {
        expect(upgrade.routeNames).toEqual(expect.any(Array));
        // some upgrades are not on routes
        // expect(upgrade.routeNames.length).toBeGreaterThanOrEqual(1);
      });
      test(`has direction`, () => {
        expect(upgrade.direction).toBeTruthy();
      });
      test(`has position`, () => {
        expect(upgrade.position).toHaveLength(2);
      });
      test(`has region`, () => {
        expect(upgrade.region).toBeTruthy();
      });
    }
  );

  test("no unused route videos", () => {
    const unusedRouteVideos = Object.values(ROUTE_VIDEOS).filter(
      (video) => !routeVideoIds.includes(video.id)
    );
    expect(unusedRouteVideos).toHaveLength(0);
  });

  test("no empty video ids", () => {
    const videosWithoutId = ALL_VIDEOS_VALUES.filter((video) => !video.id);
    expect(videosWithoutId).toHaveLength(0);
  });

  test("no duplicate video ids", () => {
    const uniqueVideoIds = [...new Set(ALL_VIDEOS_VALUES.map(({ id }) => id))];
    expect(uniqueVideoIds).toHaveLength(ALL_VIDEOS_VALUES.length);
  });

  test("no duplicate time-lapse route video ids", () => {
    const tlVideoIds = Object.values(ROUTE_VIDEOS)
      .map(({ tlId }) => tlId)
      .filter(Boolean);
    const uniqueTlVideoIds = [...new Set(tlVideoIds)];
    expect(uniqueTlVideoIds).toHaveLength(tlVideoIds.length);
  });

  test("time-lapse ids are distinct from corresponding id", () => {
    Object.values(ROUTE_VIDEOS).forEach(({ id, tlId }) =>
      expect(id).not.toEqual(tlId)
    );
  });
});
