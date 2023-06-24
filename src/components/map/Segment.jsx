import { useContext } from "react";
import { Polyline, Tooltip } from "react-leaflet";
import DirectedPolyline from "./DirectedPolyline";
import { createPathOptions } from "../../utils/pathOptions";
import { Selections } from "../../App";

export default function Segment({ route, leg, segment }) {
  const { videos, directions, positions } = segment;
  const { selected, setSelected, highlighted, setHighlighted } =
    useContext(Selections);

  const availableVideos = (videos || directions).filter(
    (direction) => !!leg.videos[direction]
  );
  // TODO: refine tooltip
  const tooltipText = `${route.name}${
    leg.name ? " (" + leg.name + ")" : ""
  }${"*".repeat(availableVideos.length)}`;

  const polylineProps = {
    positions,
    pathOptions: createPathOptions(route, leg, segment, {
      selected,
      highlighted,
    }),
    eventHandlers: {
      mouseover: () => setHighlighted(route.name + leg.name),
      mouseout: () => setHighlighted(null),
      // TODO: allow set of selected routes?
      // mousedown: () => setSelected(),
      mouseup: () =>
        setSelected((current) =>
          current === route.name + leg.name ? null : route.name + leg.name
        ),
    },
  };
  const tooltipProps = { sticky: true, opacity: 0.7 };

  // FIXME: tool tip not showing on decorator arrows hover
  return directions.length === 1 ? (
    <DirectedPolyline {...polylineProps}>
      <Tooltip {...tooltipProps}>{tooltipText}</Tooltip>
    </DirectedPolyline>
  ) : (
    <Polyline {...polylineProps}>
      <Tooltip {...tooltipProps}>{tooltipText}</Tooltip>
    </Polyline>
  );
}
