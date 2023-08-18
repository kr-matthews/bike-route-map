import { useRef } from "react";
import { Polyline } from "react-leaflet";
import useDirectionalArrows from "../../hooks/useDirectionalArrows";

export default function MyPolyline({
  showArrows,
  polylineProps,
  borderProps,
  children,
}) {
  const polylineRef = useRef();
  useDirectionalArrows(
    showArrows,
    polylineRef,
    polylineProps.pathOptions,
    polylineProps.eventHandlers
  );

  // mimic border by drawing thicker line underneath
  return (
    <>
      {borderProps && <Polyline {...borderProps} />}
      <Polyline ref={polylineRef} {...polylineProps}>
        {children}
      </Polyline>
    </>
  );
}
