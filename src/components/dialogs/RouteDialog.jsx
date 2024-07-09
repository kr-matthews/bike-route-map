import { useContext } from "react";
import { FilterContext } from "../../App";
import RouteDetail from "../sidebar/RouteDetail";
import Dialog from "./Dialog";
import { LIGHT_GREEN } from "../../utils/colours";

export default function RouteDialog({ mapRef }) {
  const { selectedRoute } = useContext(FilterContext);

  return (
    selectedRoute && (
      <Dialog backgroundColor={LIGHT_GREEN}>
        <RouteDetail mapRef={mapRef} />
      </Dialog>
    )
  );
}
