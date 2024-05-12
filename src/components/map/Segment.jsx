import { Fragment, useContext, useMemo } from "react";
import Polyline from "./Polyline";
import VideoMarkers from "./VideoMarkers";
import { Selections } from "../../App";
import {
  createBorderPathOptions,
  createPathOptions,
  getBorderPane,
  getSegmentPane,
} from "../../utils/pathOptions";
import { normalizeElevation } from "../../utils/segmentTypes";
import { getRoutesWithVideo } from "../../utils/videos";
import SegmentTooltip from "./SegmentTooltip";

export default function Segment({ segment }) {
  const { routeNames, oneWay, elevation, videoIds, hideArrows, positions } =
    segment;
  const {
    selectedRoute,
    selectRoute,
    highlightedRoute,
    highlightRoute,
    selectedVideo,
    selectRouteAndVideo,
    isSegmentHidden,
  } = useContext(Selections);

  const primaryRouteName = routeNames?.find((x) => x) || null;
  const hasMultipleRoutes = (routeNames?.length ?? 0) > 1;
  const hasAnyVideos = (videoIds?.length ?? 0) > 0;
  const pane = getSegmentPane(elevation, hasMultipleRoutes);
  const isHidden = isSegmentHidden(segment);

  const eventHandlers = useMemo(
    () => ({
      mouseover: () => highlightRoute(primaryRouteName),
      mouseout: () => highlightRoute(null),
      click: () => {
        if (primaryRouteName) {
          selectRoute(primaryRouteName);
        }
      },
      contextmenu: () => {
        if (hasAnyVideos) {
          const firstVideoId = videoIds[0];
          // use the first listed route which has the video
          // otherwise take any route which has the video
          const routesWithVideo = getRoutesWithVideo(firstVideoId);
          const aRouteNameWithVideo =
            (routeNames ?? []).find((routeName) =>
              routesWithVideo.some((route) => route.name === routeName)
            ) ?? routesWithVideo[0].name;
          selectRouteAndVideo(aRouteNameWithVideo, firstVideoId);
        }
      },
    }),
    [
      routeNames,
      primaryRouteName,
      videoIds,
      hasAnyVideos,
      highlightRoute,
      selectRoute,
      selectRouteAndVideo,
    ]
  );

  const isSelected = (routeNames ?? []).includes(selectedRoute?.name);
  const isHighlighted = (routeNames ?? []).includes(highlightedRoute?.name);
  const hasActiveVideo = videoIds?.includes(selectedVideo?.id);

  const polylineProps = useMemo(
    () => ({
      positions,
      pathOptions: createPathOptions(segment, {
        isHighlighted,
        isSelected,
        hasActiveVideo,
        isHidden,
      }),
      eventHandlers,
      pane,
    }),
    [
      segment,
      positions,
      isHighlighted,
      isSelected,
      hasActiveVideo,
      isHidden,
      eventHandlers,
      pane,
    ]
  );

  const hasBorder = normalizeElevation(elevation) !== 0;
  const borderProps = useMemo(
    () => ({
      positions,
      pathOptions: createBorderPathOptions(segment, {
        isSelected,
        isHidden,
      }),
      eventHandlers,
      pane: getBorderPane(elevation),
    }),
    [eventHandlers, segment, positions, elevation, isSelected, isHidden]
  );

  // not sure why using the component directly was causing `Polyline` to re-render every time
  const tooltipComponent = useMemo(
    () => <SegmentTooltip segment={segment} />,
    [segment]
  );

  // FIXME: tool tip not showing on decorator arrows hover
  return (
    <Fragment>
      <Polyline
        arrowType={!hideArrows && !isHidden && oneWay}
        polylineProps={polylineProps}
        borderProps={hasBorder ? borderProps : undefined}
      >
        {tooltipComponent}
      </Polyline>
      {selectedVideo && (
        <VideoMarkers segment={segment} videoId={selectedVideo.id} />
      )}
    </Fragment>
  );
}
