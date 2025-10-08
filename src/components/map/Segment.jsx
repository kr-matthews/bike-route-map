import { Fragment, useContext, useMemo } from "react";
import Polyline from "./Polyline";
import EndpointMarkers from "./EndpointMarkers";
import { FilterContext } from "../../App";
import {
  createBorderPathOptions as defaultCreateBorderPathOptions,
  createPathOptions as defaultCreatePathOptions,
  getBorderPane,
  getSegmentPane,
} from "../../utils/pathOptions";
import { normalizeElevation } from "../../utils/segmentTypes";
import { getRoutesWithVideo } from "../../utils/videos";
import SegmentTooltip from "./SegmentTooltip";

export default function Segment({
  segment,
  createBorderPathOptions = defaultCreateBorderPathOptions,
  createPathOptions = defaultCreatePathOptions,
}) {
  const { routeNames, oneWay, elevation, videoIds, hideArrows, positions } =
    segment;
  // for main map, this gets the 'real' filter context,
  //  for the demo map, the demo hook provides its own modified values,
  //  definitely could be implemented better
  const {
    selectedRoute,
    selectRoute,
    highlightedRoute,
    highlightRoute,
    selectedVideo,
    selectRouteAndVideo,
    isSegmentHidden,
  } = useContext(FilterContext);

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
          // cycle through videos
          const currentlySelectedVideoIndex = videoIds.findIndex(
            (id) => id === selectedVideo?.id
          );
          const nextVideoIndex =
            (currentlySelectedVideoIndex + 1) % videoIds.length;
          const nextVideoId = videoIds[nextVideoIndex];
          // use the first listed route which has the video
          // otherwise take any route which has the video
          const routesWithVideo = getRoutesWithVideo(nextVideoId);
          const aRouteNameWithVideo =
            (routeNames ?? []).find((routeName) =>
              routesWithVideo.some((route) => route.name === routeName)
            ) ?? routesWithVideo[0].name;
          selectRouteAndVideo(aRouteNameWithVideo, nextVideoId);
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
      selectedVideo,
    ]
  );

  const isSelected = (routeNames ?? []).includes(selectedRoute?.name);
  const isHighlighted = (routeNames ?? []).includes(highlightedRoute?.name);
  const otherIsHighlighted = highlightedRoute?.name && !isHighlighted;
  const hasActiveVideo = videoIds?.includes(selectedVideo?.id);

  const polylineProps = useMemo(
    () => ({
      positions,
      pathOptions: createPathOptions(segment, {
        isSelected,
        isHighlighted,
        otherIsHighlighted,
        hasActiveVideo,
        isHidden,
      }),
      eventHandlers,
      pane,
    }),
    [
      segment,
      positions,
      isSelected,
      isHighlighted,
      otherIsHighlighted,
      hasActiveVideo,
      isHidden,
      eventHandlers,
      pane,
      createPathOptions,
    ]
  );

  const hasBorder = normalizeElevation(elevation) !== 0;
  const borderProps = useMemo(
    () => ({
      positions,
      pathOptions: createBorderPathOptions(segment, {
        isSelected,
        otherIsHighlighted,
        isHidden,
      }),
      eventHandlers,
      pane: getBorderPane(elevation),
    }),
    [
      eventHandlers,
      segment,
      positions,
      elevation,
      isSelected,
      otherIsHighlighted,
      isHidden,
      createBorderPathOptions,
    ]
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
        <EndpointMarkers segment={segment} videoId={selectedVideo.id} />
      )}
    </Fragment>
  );
}
