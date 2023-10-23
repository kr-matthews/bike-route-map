import { useContext } from "react";
import { Tooltip } from "react-leaflet";
import {
  createBorderPathOptions,
  createPathOptions,
  getBorderPane,
  getSegmentPane,
} from "../../utils/pathOptions";
import { Selections } from "../../App";
import MyPolyline from "./MyPolyline";
import { hasVideo } from "../../utils/routes";
import videoIcon from "../../images/video.svg";

export default function Segment(segment) {
  const { routeNames, oneWay, hideArrows, isClosed, positions, elevation } =
    segment;
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
      video,
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

  const hasBorder = elevation >= 1 || elevation <= -1;
  const borderProps = {
    positions,
    pathOptions: createBorderPathOptions(segment, { highlighted }),
    pane: getBorderPane(elevation),
  };

  const tooltipProps = { sticky: true, opacity: 0.7, className: "tooltip" };

  // FIXME: tool tip not showing on decorator arrows hover
  return (
    <MyPolyline
      showArrows={
        !hideArrows && (oneWay === "required" || oneWay === "recommended")
      }
      polylineProps={polylineProps}
      borderProps={hasBorder ? borderProps : undefined}
    >
      <Tooltip {...tooltipProps}>
        {hasAnyRoutes ? (
          <>
            {isClosed && (
              <div>
                <b>[SEGMENT CLOSED]</b>
              </div>
            )}
            {routeNames.map((routeName) => (
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
            ))}
          </>
        ) : (
          "Alternative option or connection between routes"
        )}
      </Tooltip>
    </MyPolyline>
  );
}
