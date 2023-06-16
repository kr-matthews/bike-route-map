import {
  FeatureGroup,
  MapContainer,
  Polyline,
  Popup,
  TileLayer,
  Tooltip,
} from "react-leaflet";
import { BIKE_ROUTE_DATA } from "../data";
import { LatLngBounds } from "leaflet";

// TODO: refine
const VANCOUVER_BOUNDS = new LatLngBounds(
  [49.164504, -123.300867],
  [49.334827, -122.907843]
);
const TILE_LAYER = {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  recommendedColour: "#603cba",
};

export default function Map() {
  return (
    <>
      <div style={{ height: "500px" }}>
        <MapContainer
          style={{
            width: "100vw",
            height: "100vh",
          }}
          bounds={VANCOUVER_BOUNDS}
          scrollWheelZoom
        >
          <TileLayer
            // key is required to force re-render when tile layer changes, since `url` is immutable
            key={"tile-layer"}
            attribution={TILE_LAYER.attribution}
            url={TILE_LAYER.url}
          />
          {/* {BIKE_ROUTE_SEGMENT_DATA.map(
            (route) =>
              route.positions.length > 0 && (
                <Polyline
                  key={route.name + route.segment + route.direction}
                  positions={route.positions}
                  pathOptions={{
                    color: TILE_LAYER.recommendedColour,
                    weight: 5,
                  }}
                >
                  <Tooltip>
                    {route.name} {route.segment}
                  </Tooltip>
                  <Popup>
                    {" "}
                    {route.video ? (
                      <iframe
                        width="300px"
                        height="220px"
                        src={route.video}
                        // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                      />
                    ) : (
                      "No video yet"
                    )}
                  </Popup>
                </Polyline>
              )
          )} */}
          {BIKE_ROUTE_DATA.map((route) =>
            route.segments.map((segment) => (
              <FeatureGroup key={route.name + segment.name}>
                <Tooltip>
                  {route.name} ({segment.name})
                </Tooltip>
                <Popup>
                  {/* // <iframe
                      //   width="300px"
                      //   height="220px"
                      //   src={route.video}
                      //   // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      //   allowFullScreen
                      //   title="Embedded youtube"
                      // /> */}
                  Videos: {Object.keys(segment.videos).length}
                </Popup>
                {Object.entries(segment.positions).map(
                  ([direction, positions]) => (
                    <Polyline
                      key={direction}
                      positions={positions}
                      pathOptions={{
                        color: getColour(direction),
                        weight: 5,
                      }}
                    />
                  )
                )}
              </FeatureGroup>
            ))
          )}
        </MapContainer>
      </div>
    </>
  );
}

function getColour(direction) {
  switch (direction) {
    case "eastbound":
      return "red";
    case "westbound":
      return "green";
    case "all":
      return "blue";
    default:
      return "purple";
  }
}
