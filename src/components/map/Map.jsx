import { createContext, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { LatLngBounds } from "leaflet";
import { BIKE_ROUTE_DATA } from "../../data";
import Route from "./Route";

const VANCOUVER_BOUNDS = new LatLngBounds(
  [49.32946, -123.27558],
  [49.18965, -122.96316]
);
const TILE_LAYER = {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
};

export const Selections = createContext();

export default function Map() {
  const [highlighted, setHighlighted] = useState(null);
  const [selected, setSelected] = useState(null);

  return (
    <Selections.Provider
      value={{ selected, setSelected, highlighted, setHighlighted }}
    >
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
            attribution={TILE_LAYER.attribution}
            url={TILE_LAYER.url}
          />
          {BIKE_ROUTE_DATA.map((route) => (
            <Route route={route} key={route.name} />
          ))}
        </MapContainer>
      </div>
    </Selections.Provider>
  );
}

// TODO: display video(s) on click (outside of map? radio buttons per route?)
// TODO: highlight videoed segments of route on click/something (maybe? shrink/dim other routes?)
// TODO: allow filtering (by direction, to only official, by quality, etc)
// TODO: indicate by default whether route has video (and/or quality of route, whether official or not (dashed line?), etc.)
// TODO: put `onTop` segments at higher z-index
