import { Fragment, useContext } from "react";
import { Tooltip } from "react-leaflet";
import {
  createBorderPathOptions,
  createPathOptions,
  getBorderPane,
  getSegmentPane,
} from "../../utils/pathOptions";
import { Selections } from "../../App";
import Polyline from "./Polyline";
import { getRoutesWithVideo, hasVideo } from "../../utils/routes";
import videoIcon from "../../images/video.svg";
import VideoMarkers from "./VideoMarkers";
import {
  getType,
  normalizeElevation,
  normalizeType,
} from "../../utils/segmentTypes";

export default function Segment(segment) {
  const {
    routeNames,
    type,
    oneWay,
    elevation,
    hideArrows,
    isClosed,
    positions,
    videos,
  } = segment;
  const {
    selectedRoute,
    setSelected,
    highlighted,
    setHighlighted,
    video,
    setVideoId,
    isSegmentHidden,
  } = useContext(Selections);

  const primaryRouteName = routeNames?.find((x) => x) || null;
  const hasAnyRoutes = (routeNames?.length ?? 0) > 0;
  const hasMultipleRoutes = (routeNames?.length ?? 0) > 1;
  const hasAnyVideos = (videos?.length ?? 0) > 0;
  const pane = getSegmentPane(elevation, hasMultipleRoutes);
  const isHidden = isSegmentHidden(segment);

  const eventHandlers = {
    mouseover: () => setHighlighted(primaryRouteName),
    mouseout: () => setHighlighted(null),
    click: () => {
      if (primaryRouteName) {
        const isRouteAlreadySelected = selectedRoute?.name === primaryRouteName;
        setSelected(isRouteAlreadySelected ? null : primaryRouteName);
      }
    },
    contextmenu: () => {
      if (videos?.length) {
        const firstVideo = videos[0];
        const isVideoAlreadyShown = video?.id === firstVideo;
        if (isVideoAlreadyShown) {
          setVideoId(null);
          setSelected(null);
        } else {
          // use the first listed route which has the video
          // otherwise take any route which has the video
          const routesWithVideo = getRoutesWithVideo(firstVideo);
          const aRouteWithVideo =
            (routeNames ?? []).find((routeName) =>
              routesWithVideo.some((route) => route.name === routeName)
            ) ?? routesWithVideo[0].name;
          setSelected(aRouteWithVideo);
          setVideoId(firstVideo);
        }
      }
    },
  };

  const polylineProps = {
    positions,
    pathOptions: createPathOptions(segment, {
      highlighted,
      selected: selectedRoute?.name,
      video: video?.id,
      isHidden,
    }),
    eventHandlers,
    pane,
  };

  const hasBorder = normalizeElevation(elevation) !== 0;
  const borderProps = {
    positions,
    pathOptions: createBorderPathOptions(segment, {
      highlighted,
      selected: selectedRoute?.name,
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
                  {hasVideo(segment, routeName) && (
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
      {video && <VideoMarkers segment={segment} videoId={video.id} />}
    </Fragment>
  );
}
