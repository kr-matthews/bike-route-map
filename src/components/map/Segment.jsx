import { Fragment, useContext } from "react";
import { Tooltip } from "react-leaflet";
import Polyline from "./Polyline";
import VideoMarkers from "./VideoMarkers";
import { Selections } from "../../App";
import {
  createBorderPathOptions,
  createPathOptions,
  getBorderPane,
  getSegmentPane,
} from "../../utils/pathOptions";
import { segmentHasVideoForRoute } from "../../utils/segments";
import {
  getType,
  normalizeElevation,
  normalizeType,
} from "../../utils/segmentTypes";
import { getRoutesWithVideo } from "../../utils/videos";
import videoIcon from "../../images/video.svg";

export default function Segment(segment) {
  const {
    routeNames,
    type,
    oneWay,
    elevation,
    hideArrows,
    isClosed,
    positions,
    videoIds,
  } = segment;
  const {
    selectedRoute,
    selectRoute,
    highlightedRoute,
    highlightRoute,
    selectedVideo,
    selectVideo,
    isSegmentHidden,
  } = useContext(Selections);

  const primaryRouteName = routeNames?.find((x) => x) || null;
  const hasAnyRoutes = (routeNames?.length ?? 0) > 0;
  const hasMultipleRoutes = (routeNames?.length ?? 0) > 1;
  const hasAnyVideos = (videoIds?.length ?? 0) > 0;
  const pane = getSegmentPane(elevation, hasMultipleRoutes);
  const isHidden = isSegmentHidden(segment);

  const eventHandlers = {
    mouseover: () => highlightRoute(primaryRouteName),
    mouseout: () => highlightRoute(null),
    click: () => {
      if (primaryRouteName) {
        selectRoute((selectedRouteName) => {
          const isRouteAlreadySelected = selectedRouteName === primaryRouteName;
          return isRouteAlreadySelected ? null : primaryRouteName;
        });
      }
    },
    contextmenu: () => {
      if (hasAnyVideos) {
        const firstVideoId = videoIds[0];
        const isVideoAlreadyShown = selectedVideo?.id === firstVideoId;
        if (isVideoAlreadyShown) {
          selectVideo(null);
          selectRoute(null);
        } else {
          // use the first listed route which has the video
          // otherwise take any route which has the video
          const routesWithVideo = getRoutesWithVideo(firstVideoId);
          const aRouteNameWithVideo =
            (routeNames ?? []).find((routeName) =>
              routesWithVideo.some((route) => route.name === routeName)
            ) ?? routesWithVideo[0].name;
          selectRoute(aRouteNameWithVideo);
          selectVideo(firstVideoId);
        }
      }
    },
  };

  const isSelected = (routeNames ?? []).includes(selectedRoute?.name);
  const isHighlighted = (routeNames ?? []).includes(highlightedRoute?.name);
  const hasActiveVideo = videoIds?.includes(selectedVideo?.id);

  const polylineProps = {
    positions,
    pathOptions: createPathOptions(segment, {
      isHighlighted,
      isSelected,
      hasActiveVideo,
      isHidden,
    }),
    eventHandlers,
    pane,
  };

  const hasBorder = normalizeElevation(elevation) !== 0;
  const borderProps = {
    positions,
    pathOptions: createBorderPathOptions(segment, {
      isSelected,
      isHidden,
    }),
    eventHandlers,
    pane: getBorderPane(elevation),
  };

  const tooltipProps = { sticky: true, opacity: 0.7, className: "tooltip" };

  const typeText = getType(normalizeType(type))?.name;

  // FIXME: tool tip not showing on decorator arrows hover
  return (
    <Fragment>
      <Polyline
        showArrows={
          !hideArrows &&
          !isHidden &&
          (oneWay === "required" || oneWay === "recommended")
        }
        polylineProps={polylineProps}
        borderProps={hasBorder ? borderProps : undefined}
      >
        <Tooltip {...tooltipProps}>
          <>
            <div>
              {isClosed && <b>[CLOSED] </b>}
              <u>
                {typeText}
                {oneWay === "required" && " - One way"}
              </u>
            </div>
            {hasAnyRoutes ? (
              routeNames.map((routeName) => (
                <div key={routeName}>
                  {segmentHasVideoForRoute(segment, routeName) && (
                    <img
                      src={videoIcon}
                      alt="video"
                      style={{ marginRight: "0.5em", height: "0.8em" }}
                    />
                  )}
                  {primaryRouteName === routeName ? (
                    <b>{routeName}</b>
                  ) : (
                    routeName
                  )}
                </div>
              ))
            ) : (
              <em>Alternative option or connection between routes</em>
            )}
            <div>
              <em>
                {hasAnyVideos ? "Right-click for video" : "No video available"}
              </em>
            </div>
          </>
        </Tooltip>
      </Polyline>
      {selectedVideo && (
        <VideoMarkers segment={segment} videoId={selectedVideo.id} />
      )}
    </Fragment>
  );
}
