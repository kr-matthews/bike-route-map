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
import { hasVideo } from "../../utils/routes";
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
  } = segment;
  const { selectedRoute, setSelected, highlighted, setHighlighted, video } =
    useContext(Selections);

  const primaryRouteName = routeNames?.find((x) => x) || null;
  const hasAnyRoutes = (routeNames?.length ?? 0) > 0;
  const hasMultipleRoutes = (routeNames?.length ?? 0) > 1;
  const pane = getSegmentPane(elevation, hasMultipleRoutes);

  const polylineProps = {
    positions,
    pathOptions: createPathOptions(segment, {
      highlighted,
      selected: selectedRoute?.name,
      video: video?.id,
    }),
    eventHandlers: {
      mouseover: () => setHighlighted(primaryRouteName),
      mouseout: () => setHighlighted(null),
      mousedown: () => {
        if (!primaryRouteName) return;
        setSelected((selected) =>
          selected === primaryRouteName ? null : primaryRouteName
        );
      },
    },
    pane,
  };

  const hasBorder = normalizeElevation(elevation) !== 0;
  const borderProps = {
    positions,
    pathOptions: createBorderPathOptions(segment, {
      highlighted,
      selected: selectedRoute?.name,
    }),
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
          !hideArrows && (oneWay === "required" || oneWay === "recommended")
        }
        polylineProps={polylineProps}
        borderProps={hasBorder ? borderProps : undefined}
      >
        <Tooltip {...tooltipProps}>
          <>
            <div>
              <em>
                {typeText}
                {oneWay === "required" && " - One way"}
              </em>
              {isClosed && <b> [CLOSED]</b>}
            </div>
            {hasAnyRoutes
              ? routeNames.map((routeName) => (
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
              : "Alternative option or connection between routes"}
          </>
        </Tooltip>
      </Polyline>
      {video && <VideoMarkers segment={segment} videoId={video.id} />}
    </Fragment>
  );
}
