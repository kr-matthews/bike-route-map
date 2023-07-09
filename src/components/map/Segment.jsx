import { useContext } from "react";
import { Polyline, Tooltip } from "react-leaflet";
import DirectedPolyline from "./DirectedPolyline";
import { createPathOptions } from "../../utils/pathOptions";
import { Selections } from "../../App";

export default function Segment(segment) {
  const { routes, directions, positions } = segment;
  const { selectedRoute, setSelected, highlighted, setHighlighted, video } =
    useContext(Selections);

  const primaryRoute = routes?.find((x) => x) || null;
  const tooltipContent = routes?.join("; ");

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
  };
  const tooltipProps = { sticky: true, opacity: 0.7 };

  // FIXME: arrows won't be removed when video is unselected
  const showDirection = directions?.length === 1; // || videos?.includes(video);

  // FIXME: tool tip not showing on decorator arrows hover
  return showDirection ? (
    <DirectedPolyline {...polylineProps}>
      {tooltipContent && <Tooltip {...tooltipProps}>{tooltipContent}</Tooltip>}
    </DirectedPolyline>
  ) : (
    <Polyline {...polylineProps}>
      {tooltipContent && <Tooltip {...tooltipProps}>{tooltipContent}</Tooltip>}
    </Polyline>
  );
}
