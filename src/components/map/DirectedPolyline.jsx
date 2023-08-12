import { useEffect, useRef, useState } from "react";
import { Polyline, useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-polylinedecorator";

/**
 * A Polyline, but with arrows indicating the direction.
 *
 * The implementation is messy because react-leaflet doesn't
 * seem to have proper support for this.
 */
export default function DirectedPolyline(props) {
  const map = useMap();
  const polylineRef = useRef();
  const [decorator, setDecorator] = useState();
  // zooming in won't trigger const zoom = map.getZoom() to update itself for some reason
  const [zoom, setZoom] = useState(map.getZoom());
  const isZoomedIn = zoom >= 15;

  useEffect(function addZoomListener() {
    map.addEventListener({ zoomend: (zoom) => setZoom(zoom.target._zoom) });
    // eslint-disable-next-line
  }, []);

  useEffect(
    function createDecorator() {
      const decorator = L.polylineDecorator(polylineRef.current, {
        patterns: [],
      });
      decorator.addEventListener(props.eventHandlers);
      setDecorator(decorator);
    },
    // eslint-disable-next-line
    []
  );

  useEffect(
    function removeDecoratorWhenZoomedOut() {
      if (!isZoomedIn && !!decorator) {
        decorator.removeFrom(map);
      }
    },
    // eslint-disable-next-line
    [decorator, isZoomedIn]
  );

  useEffect(
    function addDecoratorWhenZoomedIn() {
      if (isZoomedIn) {
        decorator.addTo(map);
      }
    },
    // eslint-disable-next-line
    [decorator, isZoomedIn]
  );

  useEffect(
    function updateArrows() {
      const arrow = {
        offset: "12%",
        repeat: 90,
        symbol: L.Symbol.arrowHead({
          pixelSize: 14,
          polygon: true,
          pathOptions: {
            ...props.pathOptions,
            dashArray: undefined,
            fill: props.pathOptions.color,
            fillOpacity: props.pathOptions.opacity,
          },
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
