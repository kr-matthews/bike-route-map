import { useContext } from "react";
import { Tooltip } from "react-leaflet";
import {
  createBorderPathOptions,
  createPathOptions,
} from "../../utils/pathOptions";
import { Selections } from "../../App";
import MyPolyline from "./MyPolyline";

// !! indicate by default whether route/segment has video (and/or quality of route, whether official or not (dashed line?), etc.)

export default function Segment(segment) {
  const { routes, directions, positions, elevated, description } = segment;
  const { selectedRoute, setSelected, highlighted, setHighlighted, video } =
    useContext(Selections);

  const primaryRoute = routes?.find((x) => x) || null;
  const tooltipContent = routes?.join("; ");
  const hasMultipleRoutes = (routes?.length ?? 0) > 1;
  const isConnection = description.includes("connection");
  const pane = elevated
    ? "elevated-segments"
    : isConnection
    ? "connection-segments"
    : hasMultipleRoutes
    ? "shared-segments"
    : "single-segments";

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

  const borderProps = {
    positions,
    pathOptions: createBorderPathOptions(segment, { highlighted }),
    pane: "elevation-borders",
  };

  const tooltipProps = { sticky: true, opacity: 0.7 };

  // FIXME: arrows won't be removed when video is unselected
  const showDirection = directions?.length === 1; // || videos?.includes(video);

  // FIXME: tool tip not showing on decorator arrows hover
  return (
    <MyPolyline
      isDirected={showDirection}
      polylineProps={polylineProps}
      borderProps={elevated && borderProps}
    >
      {tooltipContent && <Tooltip {...tooltipProps}>{tooltipContent}</Tooltip>}
    </MyPolyline>
  );
}
