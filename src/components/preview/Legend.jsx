import { MapContainer, Pane, TileLayer } from "react-leaflet";
import Segment from "../map/Segment";
import { TILE_LAYER } from "../../utils/map";
import { useState } from "react";
import { SOMEWHAT_ZOOMED_IN } from "../../utils/params";

const intersection = [49.26208, -123.10495];

const segment = {
  routes: ["Route Name"],
  description: "for the legend",
  positions: [
    [49.26217, -123.10949],
    [49.26212, -123.10689],
    intersection,
    [49.26205, -123.10302],
    [49.26201, -123.10104],
  ],
};
const otherSegment = {
  routes: ["Another Route"],
  description: "to show comparison",
  positions: [
    [49.26027, -123.10503],
    intersection,
    [49.263, -123.1049],
    [49.26466, -123.10482],
  ],
};

const mapWidth = "400px";
const mapHeight = "150px";

// const lats = segment.positions.map((x) => x[0]);
// const longs = segment.positions.map((x) => x[1]);
// const mapBounds = new LatLngBounds(
//   [Math.min(...lats), Math.min(...longs)],
//   [Math.max(...lats), Math.max(...longs)]
// );

const mapCenter = intersection;
const mapZoom = SOMEWHAT_ZOOMED_IN;

const segmentTypes = [
  {
    text: "Standard",
    props: {},
  },
  {
    text: "Uncomfortable or unofficial",
    props: { type: "uncomfortable" },
  },
  {
    text: "One-way",
    props: { oneWay: "required" },
  },
  {
    text: "Two-way allowed, but one-way recommended",
    props: { oneWay: "recommended" },
  },
  {
    text: "Elevated (a bridge)",
    props: { elevation: 1 },
  },
  {
    text: "Underground (a tunnel)",
    props: { elevation: -1 },
  },
  {
    text: "Closed long-term (for construction, etc.)",
    props: { isClosed: true },
  },
];

export default function Legend({ hide }) {
  const [selectedTypeIndex, setSelectedTypeIndex] = useState(0);

  return (
    <div
      style={{
        paddingLeft: "1em",
        flex: "1",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "AliceBlue",
        position: "relative",
      }}
    >
      <h2 style={{ paddingLeft: 15 }}>Legend</h2>
      <button
        style={{
          position: "absolute",
          top: 25,
          right: 20,
          cursor: "pointer",
        }}
        onClick={hide}
      >
        Show Routes
      </button>
      <div>
        <span>Select type: </span>
        <select
          value={selectedTypeIndex}
          onChange={(e) => setSelectedTypeIndex(parseInt(e.target.value) || 0)}
        >
          {segmentTypes.map(({ text }, index) => (
            <option key={text} value={index}>
              {text}
            </option>
          ))}
        </select>
      </div>
      <div style={{ height: mapHeight, width: mapWidth }}>
        <MapContainer
          key={selectedTypeIndex}
          style={{ width: mapWidth, height: mapHeight }}
          // bounds={mapBounds}
          center={mapCenter}
          zoom={mapZoom}
          scrollWheelZoom
        >
          {/* panes required as <Segment /> assumes they exist */}
          {/* TODO: de-duplicate */}
          <Pane name="elevated-2" style={{ zIndex: 311 }} />
          <Pane name="elevated-2-adj" style={{ zIndex: 310 }} />
          <Pane name="elevated-2-border" style={{ zIndex: 309 }} />
          <Pane name="elevated-1" style={{ zIndex: 308 }} />
          <Pane name="elevated-1-adj" style={{ zIndex: 307 }} />
          <Pane name="elevated-1-border" style={{ zIndex: 306 }} />
          <Pane name="shared" style={{ zIndex: 305 }} />
          <Pane name="solo" style={{ zIndex: 304 }} />
          <Pane name="underground-1-border" style={{ zIndex: 303 }} />
          <Pane name="underground-1" style={{ zIndex: 301 }} />
          <Pane name="underground-1-adj" style={{ zIndex: 300 }} />

          <TileLayer
            attribution={TILE_LAYER.attribution}
            url={TILE_LAYER.url}
          />

          <Segment {...segment} {...segmentTypes[selectedTypeIndex].props} />
          <Segment {...otherSegment} />
        </MapContainer>
      </div>
      Note: one-way arrows may only appear at certain zoom levels.
    </div>
  );
}
