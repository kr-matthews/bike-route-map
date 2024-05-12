import { Circle } from "react-leaflet";
import { useCurrentLocation } from "../../hooks/useCurrentLocation";
import locationIcon from "../../images/location.svg";

const leafletBlue = "#3388ff";

export default function CurrentLocation({ mapRef }) {
  const {
    requestLocation,
    mostRecentLatlng,
    mostRecentAccuracy,
    didMostRecentRequestFail,
  } = useCurrentLocation(mapRef);

  const color = didMostRecentRequestFail ? "Red" : leafletBlue;

  return (
    <>
      <img
        src={locationIcon}
        alt="location"
        title="Show current location"
        style={{
          cursor: "pointer",
          width: 30,
          height: 30,
          position: "absolute",
          top: 80,
          left: 12,
          zIndex: 400,
        }}
        onClick={requestLocation}
      />
      {mostRecentLatlng && mostRecentAccuracy && (
        <>
          <Circle
            center={mostRecentLatlng}
            radius={mostRecentAccuracy}
            pathOptions={{ color, pane: "location" }}
          />
          {mostRecentAccuracy > 100 && (
            <Circle
              center={mostRecentLatlng}
              radius={10}
              pathOptions={{ color, pane: "location" }}
            />
          )}
        </>
      )}
    </>
  );
}
