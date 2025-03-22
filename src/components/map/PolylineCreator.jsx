import Polyline from "./Polyline";
import { WEIGHT_NARROW } from "../../utils/constants";
import { usePolylineCreator } from "../../hooks/usePolylineCreator";

/** Use `stringify` to have the clipboard copy be stringified. */
export default function PolylineCreator({ stringify }) {
  const { isEnabled, positions } = usePolylineCreator({ stringify });

  const polylineProps = {
    positions,
    pathOptions: {
      color: "Black",
      weight: WEIGHT_NARROW,
      opacity: 100,
    },
  };

  return isEnabled && <Polyline polylineProps={polylineProps} />;
}
