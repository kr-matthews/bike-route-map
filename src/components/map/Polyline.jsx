import { useRef } from "react";
import { Polyline as LeafletPolyline } from "react-leaflet";
import useDirectionalArrows from "../../hooks/useDirectionalArrows";

export default function Polyline({
  arrowType,
  polylineProps,
  borderProps,
  children,
}) {
  const polylineRef = useRef();
  useDirectionalArrows(
    arrowType,
    polylineRef,
    polylineProps.pathOptions,
    polylineProps.eventHandlers,
    polylineProps.pane
  );

  // mimic border by drawing thicker line underneath
  return (
    <>
      {borderProps && (
        <LeafletPolyline {...borderProps}>{children}</LeafletPolyline>
      )}
      <LeafletPolyline ref={polylineRef} {...polylineProps}>
        {children}
      </LeafletPolyline>
    </>
  );
}
