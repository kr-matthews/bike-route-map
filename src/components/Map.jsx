import { createContext, useContext, useState } from "react";
import {
  FeatureGroup,
  MapContainer,
  Polyline,
  TileLayer,
  Tooltip,
} from "react-leaflet";
import { LatLngBounds } from "leaflet";
import DirectedPolyline from "./DirectedPolyline";
import { createPathOptions } from "../utils/pathOptions";
import { BIKE_ROUTE_DATA } from "../data";

const VANCOUVER_BOUNDS = new LatLngBounds(
  [49.32946, -123.27558],
  [49.18965, -122.96316]
);
const TILE_LAYER = {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
};

const Selections = createContext();

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

function Route({ route }) {
  return route.legs.map((leg) => (
    <Leg key={route.name + leg.name} leg={leg} route={route} />
  ));
}

function Leg({ route, leg }) {
  return (
    <FeatureGroup key={route.name + leg.name}>
      {leg.segments.map((segment) => (
        <Segment
          key={segment.positions.toString()}
          route={route}
          leg={leg}
          segment={segment}
        />
      ))}
    </FeatureGroup>
  );
}

function Segment({ route, leg, segment }) {
  const { videos, directions, positions } = segment;
  const { selected, setSelected, highlighted, setHighlighted } =
    useContext(Selections);

  const availableVideos = (videos || directions).filter(
    (direction) => !!leg.videos[direction]
  );
  // TODO: refine tooltip
  const tooltipText = `${route.name}${
    leg.name ? " (" + leg.name + ")" : ""
  }${"*".repeat(availableVideos.length)}`;

  const polylineProps = {
    positions,
    pathOptions: createPathOptions(route, leg, segment, {
      selected,
      highlighted,
    }),
    eventHandlers: {
      mouseover: () => setHighlighted(route.name + leg.name),
      mouseout: () => setHighlighted(null),
      // TODO: allow set of selected routes?
      // mousedown: () => setSelected(),
      mouseup: () =>
        setSelected((current) =>
          current === route.name + leg.name ? null : route.name + leg.name
        ),
    },
  };
  const tooltipProps = { sticky: true, opacity: 0.7 };

  // FIXME: tool tip not showing on decorator arrows hover
  return directions.length === 1 ? (
    <DirectedPolyline {...polylineProps}>
      <Tooltip {...tooltipProps}>{tooltipText}</Tooltip>
    </DirectedPolyline>
  ) : (
    <Polyline {...polylineProps}>
      <Tooltip {...tooltipProps}>{tooltipText}</Tooltip>
    </Polyline>
  );
}

// {availableVideos.length > 0 && (
//   <Popup>
//     <iframe
//       width="300px"
//       height="220px"
//       src={route.videos}
//       // allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//       allowFullScreen
//       title="Embedded youtube"
//     />
//     Videos for: {availableVideos.join(", ")}
//   </Popup>
// )}

// TODO: display video(s) on click (outside of map? radio buttons per route?)
// TODO: highlight videoed segments of route on click/something (maybe? shrink/dim other routes?)
// TODO: allow filtering (by direction, to only official, by quality, etc)
// TODO: indicate by default whether route has video (and/or quality of route, whether official or not (dashed line?), etc.)
// TODO: put `onTop` segments at higher z-index
