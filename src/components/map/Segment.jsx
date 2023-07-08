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
    // TODO
    pathOptions: {},
    //  createPathOptions(routes[0], legs[0], segment, {
    //   selected,
    //   highlighted,
    // }),
    eventHandlers: {
      // mouseover: () => setHighlighted(routes[0].name + legs[0].name),
      mouseout: () => setHighlighted(null),
      // TODO: allow set of selected routes?
      // mousedown: () => setSelected(),
      // mouseup:
        // setSelected((current) =>
        //   current === route.name + leg.name ? null : route.name + leg.name
        // ),
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
