import { useEffect, useRef } from "react";
import { Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-polylinedecorator";

// TODO: refine
const arrow = [
  {
    offset: "3%",
    repeat: 80,
    symbol: L.Symbol.arrowHead({
      pixelSize: 10,
      polygon: false,
      pathOptions: { stroke: true, color: "blue" },
    }),
  },
];

/** A Polyline, but with arrows indicating the direction. */
export default function DirectedPolyline(props) {
  const map = useMap();
  const polylineRef = useRef();

  useEffect(
    function addArrows() {
      L.polylineDecorator(polylineRef.current, { patterns: arrow }).addTo(map);
    },
    [map]
  );

  return <Polyline ref={polylineRef} {...props} />;
}
