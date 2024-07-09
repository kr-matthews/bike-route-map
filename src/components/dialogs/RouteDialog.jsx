import { useContext } from "react";
import { FilterContext } from "../../App";
import RouteDetail from "../sidebar/RouteDetail";
import Dialog from "./Dialog";

export default function RouteDialog({ mapRef }) {
  const { selectedRoute } = useContext(FilterContext);

  return (
    selectedRoute && (
      <Dialog>
        <RouteDetail mapRef={mapRef} />
      </Dialog>
    )
  );
}
