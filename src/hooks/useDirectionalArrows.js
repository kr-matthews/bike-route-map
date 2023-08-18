import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-polylinedecorator";

const SOMEWHAT_ZOOMED_IN = 16;
const VERY_ZOOMED_IN = 18;

/**
 * The implementation is messy because react-leaflet doesn't
 * seem to have proper support for this.
 */
export default function useDirectionalArrows(
  isActive,
  polylineRef,
  pathOptions,
  eventHandlers
) {
  const map = useMap();
  const [decorator, setDecorator] = useState();
  // zooming in won't trigger const zoom = map.getZoom() to update itself for some reason
  const [zoom, setZoom] = useState(map.getZoom());
  const isZoomedIn = zoom >= SOMEWHAT_ZOOMED_IN;
  const isVeryZoomedIn = zoom >= VERY_ZOOMED_IN;

  useEffect(
    function addZoomListener() {
      if (isActive) {
        map.addEventListener({ zoomend: (zoom) => setZoom(zoom.target._zoom) });
      }
    },
    // eslint-disable-next-line
    [isActive]
  );

  useEffect(
    function createDecorator() {
      const decorator = L.polylineDecorator(polylineRef.current, {
        patterns: [],
      });
      if (isActive) {
        decorator.addEventListener(eventHandlers);
        setDecorator(decorator);
      }
    },
    // eslint-disable-next-line
    [isActive]
  );

  useEffect(
    function removeDecoratorWhenZoomedOut() {
      if (isActive && !isZoomedIn && !!decorator) {
        decorator.removeFrom(map);
      }
    },
    // eslint-disable-next-line
    [isActive, decorator, isZoomedIn]
  );

  useEffect(
    function addDecoratorWhenZoomedIn() {
      if (isActive && isZoomedIn) {
        decorator.addTo(map);
      }
    },
    // eslint-disable-next-line
    [isActive, decorator, isZoomedIn]
  );

  useEffect(
    function updateArrows() {
      const arrow = {
        // somewhat arbitrary, but made to work with cambie bridge nb loop-ramp
        offset: isVeryZoomedIn ? 45 : 20,
        repeat: isVeryZoomedIn ? 100 : 70,
        symbol: L.Symbol.arrowHead({
          pixelSize: 14,
          polygon: true,
          pathOptions: {
            ...pathOptions,
            dashArray: undefined,
            fill: pathOptions.color,
            fillOpacity: pathOptions.opacity,
          },
        }),
      };

      if (isActive && decorator) {
        decorator.setPatterns([arrow]);
      }
    },
    [isActive, isVeryZoomedIn, decorator, pathOptions]
  );
}