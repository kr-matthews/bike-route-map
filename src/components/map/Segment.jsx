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
  const { routes, directions, positions, elevation } = segment;
  const { selectedRoute, setSelected, highlighted, setHighlighted, video } =
    useContext(Selections);

  const primaryRoute = routes?.find((x) => x) || null;
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

  // !!! improve tooltip content
  const tooltipProps = { sticky: true, opacity: 0.7 };
  const tooltipContent = routes?.join("; ");

  // FIXME: arrows won't be removed when video is unselected
  const showDirection = directions?.length === 1; // || videos?.includes(video);

  // FIXME: tool tip not showing on decorator arrows hover
  return (
    <MyPolyline
      isDirected={showDirection}
      polylineProps={polylineProps}
      borderProps={hasBorder ? borderProps : undefined}
    >
      {tooltipContent && <Tooltip {...tooltipProps}>{tooltipContent}</Tooltip>}
    </MyPolyline>
  );
}
