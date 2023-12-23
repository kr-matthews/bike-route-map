import Polyline from "./Polyline";
import { NARROW_WEIGHT } from "../../utils/constants";
import { usePolylineCreator } from "../../hooks/usePolylineCreator";

export default function PolylineCreator() {
  const { isEnabled, positions } = usePolylineCreator();

  const polylineProps = {
    positions,
    pathOptions: {
      color: "Black",
      weight: NARROW_WEIGHT,
      opacity: 100,
    },
  };

  return isEnabled && <Polyline polylineProps={polylineProps} />;
}
