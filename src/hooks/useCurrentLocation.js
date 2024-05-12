import { useEffect, useState } from "react";

export function useCurrentLocation(mapRef) {
  const [mostRecentCurrentLocation, setMostRecentCurrentLocation] = useState({
    mostRecentLatlng: null,
    mostRecentAccuracy: null,
  });
  const { mostRecentLatlng, mostRecentAccuracy } = mostRecentCurrentLocation;
  const [didMostRecentRequestFail, setDidMostRecentRequestFail] =
    useState(false);

  useEffect(
    function addLocationHandlers() {
      mapRef?.addEventListener({
        locationfound: handleLocationFound,
        locationerror: handleLocationError,
      });
    },
    [mapRef]
  );

  function requestLocation() {
    mapRef.locate({ setView: true });
  }

  function handleLocationFound(event) {
    setDidMostRecentRequestFail(false);
    setMostRecentCurrentLocation({
      mostRecentLatlng: [event.latlng.lat, event.latlng.lng],
      mostRecentAccuracy: event.accuracy,
    });
  }

  function handleLocationError(error) {
    setDidMostRecentRequestFail(true);
    alert(`Can't find current location: ${error.message}`);
  }

  return {
    mostRecentLatlng,
    mostRecentAccuracy,
    didMostRecentRequestFail,
    requestLocation,
  };
}
