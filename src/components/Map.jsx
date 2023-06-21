import {
  FeatureGroup,
  MapContainer,
  Polyline,
  TileLayer,
  Tooltip,
} from "react-leaflet";
import { BIKE_ROUTE_DATA } from "../data";
import { LatLngBounds } from "leaflet";
import { createContext, useContext, useState } from "react";
import DirectedPolyline from "./DirectedPolyline";

const VANCOUVER_BOUNDS = new LatLngBounds(
  [49.32946, -123.27558],
  [49.18965, -122.96316]
);
const TILE_LAYER = {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
};

const SelectedLeg = createContext();

export default function Map() {
  const [selectedLeg, setSelectedLeg] = useState(null);
  return (
    <SelectedLeg.Provider value={{ selectedLeg, setSelectedLeg }}>
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
    </SelectedLeg.Provider>
  );
}

function Route({ route }) {
  return route.legs.map((leg) => (
    <Leg key={route.name + leg.name} leg={leg} route={route} />
  ));
}

function Leg({ route, leg }) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <FeatureGroup
      key={route.name + leg.name}
      eventHandlers={{
        mouseover: () => setIsHovered(true),
        mouseout: () => setIsHovered(false),
      }}
    >
      {leg.segments.map((segment) => (
        <Segment
          key={segment.positions.toString()}
          route={route}
          leg={leg}
          segment={segment}
          isHighlighted={isHovered}
        />
      ))}
    </FeatureGroup>
  );
}

function Segment({ route, leg, segment, isHighlighted }) {
  const { videos, directions, positions } = segment;
  const { selectedLeg, setSelectedLeg } = useContext(SelectedLeg);

  const availableVideos = (videos || directions).filter(
    (direction) => !!leg.videos[direction]
  );
  const tooltipText = `${route.name}${
    leg.name ? " (" + leg.name + ")" : ""
  }${"*".repeat(availableVideos.length)}`;

  const polylineProps = {
    positions,
    pathOptions: createPathOptions(route, leg, segment, {
      selectedLeg,
      isHighlighted,
    }),
    eventHandlers: {
      mouseup: () =>
        setSelectedLeg((current) =>
          current === route.name + leg.name ? null : route.name + leg.name
        ),
    },
  };
  const tooltipProps = { sticky: true, opacity: 0.7 };

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

// function HandleClicks() {
//   const { setSelectedLeg } = useContext(SelectedLeg);
//   useMapEvents({
//     mousedown: () => setSelectedLeg((current) => (current ? null : current)),
//   });
//   return null;
// }

// TODO: display video(s) on click (outside of map? radio buttons per route?)
// TODO: highlight videoed segments of route on click/something (maybe? shrink/dim other routes?)
// TODO: allow filtering (by direction, to only official, by quality, etc)
// TODO: indicate by default whether route has video (and/or quality of route, whether official or not (dashed line?), etc.)
// TODO: put `onTop` segments at higher z-index

function createPathOptions(route, leg, segment, options, _settings) {
  const isNoneSelected = !options.selectedLeg;
  const isSelected = options.selectedLeg === route.name + leg.name;

  return {
    color: segment.directions.length > 1 ? "DarkGreen" : "Blue",
    weight: options.isHighlighted ? 6 : 4,
    opacity: isSelected || isNoneSelected ? 1 : 0.65,
  };
}
