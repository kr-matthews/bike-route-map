import { useEffect, useRef, useState } from "react";
import { Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-polylinedecorator";

// const arrow = [
//   {
//     offset: "3%",
//     repeat: 80,
//     symbol: L.Symbol.arrowHead({
//       pixelSize: 10,
//       polygon: false,
//       pathOptions: { stroke: true, color: "blue" },
//     }),
//   },
// ];

/** A Polyline, but with arrows indicating the direction. */
export default function DirectedPolyline(props) {
  const map = useMap();
  const polylineRef = useRef();
  const [decorator, setDecorator] = useState();
  // const isZoomedIn = map.getZoom() > 15;

  // useEffect(function addZoomListener() {
  //   map.addEventListener({ zoomend: (zoom) => console.log(zoom.target._zoom) });
  // }, []);

  useEffect(
    function addDecorator() {
      const decorator = L.polylineDecorator(polylineRef.current, {
        patterns: [],
      });
      decorator.addTo(map);
      decorator.addEventListener(props.eventHandlers);
      setDecorator(decorator);
    },
    // eslint-disable-next-line
    []
  );

  useEffect(
    function updateArrows() {
      const arrow = {
        offset: "3%",
        repeat: 90,
        symbol: L.Symbol.arrowHead({
          pixelSize: 14,
          polygon: true,
          pathOptions: { ...props.pathOptions },
        }),
      };

      if (decorator) {
        decorator.setPatterns([arrow]);
      }
    },
    [decorator, props.pathOptions]
  );

  return <Polyline ref={polylineRef} {...props} />;
}
