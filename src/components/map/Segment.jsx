import { useContext } from "react";
import { Polyline, Tooltip } from "react-leaflet";
import DirectedPolyline from "./DirectedPolyline";
import { createPathOptions } from "../../utils/pathOptions";
import { Selections } from "../../App";

export default function Segment(segment) {
  const { routes, legs, videos, directions, positions } = segment;
  const { selected, setSelected, highlighted, setHighlighted } =
    useContext(Selections);

  const primaryRoute = routes?.find((x) => x) || null;
  const tooltipContent = routes?.join("; ");

  const polylineProps = {
    positions,
    // TODO: fix path options
    pathOptions: {},
    //  createPathOptions(routes[0], legs[0], segment, {
    //   selected,
    //   highlighted,
    // }),
    eventHandlers: {
      mouseover: () => setHighlighted(primaryRoute),
      mouseout: () => setHighlighted(null),
      // mousedown: () => setSelected(),
      mouseup: () => {
        if (!primaryRoute) return;
        setSelected((current) =>
          current === primaryRoute ? null : primaryRoute
        );
      },
    },
  };
  const tooltipProps = { sticky: true, opacity: 0.7 };

  // FIXME: tool tip not showing on decorator arrows hover
  return directions?.length === 1 ? (
    <DirectedPolyline {...polylineProps}>
      {tooltipContent && <Tooltip {...tooltipProps}>{tooltipContent}</Tooltip>}
    </DirectedPolyline>
  ) : (
    <Polyline {...polylineProps}>
      {tooltipContent && <Tooltip {...tooltipProps}>{tooltipContent}</Tooltip>}
    </Polyline>
  );
}
