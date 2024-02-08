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
import { getAnyRouteWithVideo, hasVideo } from "../../utils/routes";
import videoIcon from "../../images/video.svg";
import VideoMarkers from "./VideoMarkers";
import { normalizeElevation, normalizeType } from "../../utils/segmentTypes";

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
          const correspondingRouteName = routeNames?.length
            ? routeNames[0]
            : // should always be defined
              getAnyRouteWithVideo(firstVideo)?.name;
          setSelected(correspondingRouteName);
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

  const isComfortable = normalizeType(type) === "comfortable";
  const isPainted = type === "painted";
  const isShared = type === "shared";
  const isShoulder = type === "shoulder";
  const isOther = type === "other";

  let typeText;
  if (isComfortable) {
    typeText = "Comfortable";
  } else if (isPainted) {
    typeText = "Painted Lane";
  } else if (isShared) {
    typeText = "Shared Lane";
  } else if (isShoulder) {
    typeText = "Highway Shoulder";
  } else if (isOther) {
    typeText = "Narrow Sidewalk or Rough Trail";
  }

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
