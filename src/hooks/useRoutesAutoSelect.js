import { useContext, useEffect, useState } from "react";
import { Selections } from "../App";

export default function useRoutesAutoSelect(isOnMenu, goToRoutes) {
  const { selectedRoute } = useContext(Selections);

  const [selectedARoute, setSelectedARoute] = useState(false);

  useEffect(() => {
    if (selectedRoute) {
      setSelectedARoute(true);
    }
  }, [selectedRoute]);

  useEffect(() => {
    if (selectedARoute) {
      if (isOnMenu) {
        goToRoutes();
      }
      setSelectedARoute(false);
    }
  }, [selectedARoute, goToRoutes, isOnMenu]);
}
