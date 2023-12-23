import Polyline from "./Polyline";
import { WEIGHT_NARROW } from "../../utils/constants";
import { usePolylineCreator } from "../../hooks/usePolylineCreator";

export default function PolylineCreator() {
  const { isEnabled, positions } = usePolylineCreator();

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
