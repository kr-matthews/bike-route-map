import { useContext } from "react";
import { FilterContext } from "../../App";
import UpgradeDetail from "../sidebar/UpgradeDetail";
import Dialog from "./Dialog";
import { LIGHT_GREEN } from "../../utils/colours";

export default function UpgradeDialog({ mapRef }) {
  const { selectedUpgrade } = useContext(FilterContext);

  return (
    selectedUpgrade && (
      <Dialog backgroundColor={LIGHT_GREEN}>
        <UpgradeDetail mapRef={mapRef} />
      </Dialog>
    )
  );
}
