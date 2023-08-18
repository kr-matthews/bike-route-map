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

// !! indicate by default whether route/segment has video (and/or quality of route, whether official or not (dashed line?), etc.)

export default function Segment(segment) {
  const { routes, oneWay, hideArrows, positions, elevation } = segment;
  const { selectedRoute, setSelected, highlighted, setHighlighted, video } =
    useContext(Selections);

  const primaryRoute = routes?.find((x) => x) || null;
  const hasAnyRoutes = (routes?.length ?? 0) > 0;
  const hasMultipleRoutes = (routes?.length ?? 0) > 1;
  const pane = getSegmentPane(elevation, hasMultipleRoutes);

  const polylineProps = {
    positions,
    pathOptions: createPathOptions(segment, {
      highlighted,
      selectedRoute,
      video,
    }),
    eventHandlers: {
      mouseover: () => setHighlighted(primaryRoute),
      mouseout: () => setHighlighted(null),
      mousedown: () => {
        if (!primaryRoute) return;
        setSelected((selected) =>
          selected === primaryRoute ? null : primaryRoute
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
      {hasAnyRoutes && (
        <Tooltip {...tooltipProps}>
          {routes.map((route) => (
            <div key={route}>
              {primaryRoute === route ? <b>{route}</b> : route}
            </div>
          ))}
        </Tooltip>
      )}
    </MyPolyline>
  );
}
