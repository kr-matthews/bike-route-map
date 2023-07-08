import { useContext } from "react";
import { Polyline, Tooltip } from "react-leaflet";
import DirectedPolyline from "./DirectedPolyline";
import { createPathOptions } from "../../utils/pathOptions";
import { Selections } from "../../App";

export default function Segment(segment) {
  const { routes, legs, videos, directions, positions } = segment;
  const { selected, setSelected, highlighted, setHighlighted } =
    useContext(Selections);

  // TODO: fix & refine tooltip
  const tooltipText = `${routes?.join(", ")}${
    legs ? " (" + legs.join(", ") + ")" : ""
  }${"*".repeat(videos?.length ?? 0)}`;

  const polylineProps = {
    positions,
    // TODO: fix path options
    pathOptions: {},
    //  createPathOptions(routes[0], legs[0], segment, {
    //   selected,
    //   highlighted,
    // }),
    eventHandlers: {
      mouseover: () => setHighlighted(routes[0]),
      mouseout: () => setHighlighted(null),
      // TODO: allow selecting _multiple_ routes?
      // TODO: allow choosing route on shared segment
      // mousedown: () => setSelected(),
      mouseup: () => {
        if (!routes || routes.length === 0) return;
        setSelected((current) => (current === routes[0] ? null : routes[0]));
      },
    },
  };
  const tooltipProps = { sticky: true, opacity: 0.7 };

  // FIXME: tool tip not showing on decorator arrows hover
  return directions?.length === 1 ? (
    <DirectedPolyline {...polylineProps}>
      <Tooltip {...tooltipProps}>{tooltipText}</Tooltip>
    </DirectedPolyline>
  ) : (
    <Polyline {...polylineProps}>
      <Tooltip {...tooltipProps}>{tooltipText}</Tooltip>
    </Polyline>
  );
}
