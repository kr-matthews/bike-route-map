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
            // key={"tile-layer"}
            attribution={TILE_LAYER.attribution}
            url={TILE_LAYER.url}
          />
          {BIKE_ROUTE_DATA.map((route) =>
            route.legs.map((leg) => (
              <FeatureGroup key={route.name + leg.name}>
                {leg.segments.map(({ directions, positions, videos }) => {
                  const availableVideos = (videos || directions).filter(
                    (direction) => !!leg.videos[direction]
                  );
                  return (
                    <Polyline
                      key={positions.toString()}
                      positions={positions}
                      pathOptions={{
                        color: getColour(directions),
                        weight: 6,
                      }}
                    >
                      <Tooltip sticky>
                        {route.name}
                        {leg.name && " (" + leg.name + ")"}
                        {availableVideos.length > 0 && " [video]"}
                      </Tooltip>
                      {availableVideos.length > 0 && (
                        <Popup>
                          {/* // <iframe
                      //   width="300px"
                      //   height="220px"
                      //   src={route.video}
                      //   // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      //   allowFullScreen
                      //   title="Embedded youtube"
                      // /> */}
                          Videos for: {availableVideos.join(", ")}
                        </Popup>
                      )}
                    </Polyline>
                  );
                })}
              </FeatureGroup>
            ))
          )}
        </MapContainer>
      </div>
    </>
  );
}

// TODO: display video(s) on click (outside of map? radio buttons per route?)
// TODO: highlight route on hover (shrink/dim other routes? but keep the clicked route visible)
// TODO: highlight videoed segments of route on click (maybe? shrink/dim other routes?)
// TODO: allow filtering (by direction, to only official, by quality, etc)
// TODO: indicate by default whether route has video (and/or quality of route, whether official or not (dashed line?), etc.)
// TODO: put `onTop` segments at higher z-index

function getColour(directions) {
  if (directions.length > 1) return "green";
  switch (directions[0]) {
    case "eastbound":
      return "blue";
    case "westbound":
      return "magenta";
    case "northbound":
      return "red";
    case "southbound":
      return "purple";
    default:
      return "black";
  }
}
