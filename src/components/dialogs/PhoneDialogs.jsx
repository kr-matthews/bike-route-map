import PhoneWarning from "./PhoneWarning";
import RouteDialog from "./RouteDialog";

export default function PhoneDialogs({ mapRef }) {
  // phone warning last so that it appears on top
  return (
    <>
      <RouteDialog mapRef={mapRef} />
      <PhoneWarning />
    </>
  );
}
