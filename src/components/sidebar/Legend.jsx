import { useState } from "react";
import { MapContainer } from "react-leaflet";
import Segment from "../map/Segment";
import PanesAndTiles from "../map/PanesAndTiles";
import {
  COLOUR_CLOSED,
  COLOUR_COMFORTABLE,
  COLOUR_COMFORTABLE_ONE_WAY,
  COLOUR_ELEVATED_BORDER,
  COLOUR_OTHER,
  COLOUR_PAINTED_ONE_WAY,
  COLOUR_SHARED,
  COLOUR_SHOULDER_ONE_WAY,
  COLOUR_UNDERGROUND_BORDER,
  ZOOMED_IN_A_BIT,
} from "../../utils/constants";

const intersection = [49.26208, -123.10495];

const segment = {
  routeNames: ["Route Name"],
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
  routeNames: ["Another Route"],
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
const mapZoom = ZOOMED_IN_A_BIT;

const segmentTypes = [
  {
    name: "Comfortable",
    colour: COLOUR_COMFORTABLE,
    description:
      "Local street, dedicated/protected lane/path, or mixed with pedestrians.",
    props: {},
  },
  {
    name: "Painted Lane",
    colour: COLOUR_PAINTED_ONE_WAY,
    description:
      "Painted lane beside high-volume and/or high-speed traffic without significant physical protection. May or may not be directly beside parked cars.",
    props: { type: "painted", oneWay: "required" },
  },
  {
    name: "Shared Lane",
    colour: COLOUR_SHARED,
    description: "Shared lane with high-volume and/or high-speed traffic.",
    props: { type: "shared" },
  },
  {
    name: "Highway Shoulder",
    colour: COLOUR_SHOULDER_ONE_WAY,
    description: "Unprotected shoulder beside very high-speed traffic.",
    props: { type: "shoulder", oneWay: "required" },
  },
  {
    name: "Other",
    colour: COLOUR_OTHER,
    description:
      "Separated from traffic but poor quality, such as a narrow sidewalk shared with pedestrians.",
    props: { type: "other" },
  },
  {
    name: "Elevated",
    colour: COLOUR_ELEVATED_BORDER,
    description:
      "Bridge or other elevated surface. You can't directly connect to/from the roads/paths below.",
    props: { elevation: 1 },
  },
  {
    name: "Underground/Covered",
    colour: COLOUR_UNDERGROUND_BORDER,
    description:
      "A tunnel or other covered area. You can't directly connect to/from the roads/paths above.",
    props: { elevation: -1 },
  },
  {
    name: "One-way",
    colour: COLOUR_COMFORTABLE_ONE_WAY,
    description:
      "Only one direction of travel is allowed. A lighter colour. Directional arrows only appear when sufficiently zoomed in.",
    props: { oneWay: "required" },
  },
  {
    name: "One-way Recommended",
    colour: COLOUR_COMFORTABLE,
    description:
      "Only applies to comfortable. Both directions of travel are allowed, but typically only one is useful. Directional arrows only appear when sufficiently zoomed in.",
    props: { oneWay: "recommended" },
  },
  {
    name: "Closed",
    colour: COLOUR_CLOSED,
    description: "For long-term construction or other reasons.",
    props: { isClosed: true },
  },
];

export default function Legend({ goBack }) {
  const [selectedTypeIndex, setSelectedTypeIndex] = useState(0);

  return (
    <div
      style={{
        paddingLeft: "2em",
        paddingRight: "2em",
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
        onClick={goBack}
      >
        Menu
      </button>

      <p>
        See the dropdown and map below for an illustration of the types of
        routes shown. Note that arrows for one-way routes only appear if you
        zoom in sufficiently.
      </p>

      <p style={{ width: mapWidth, marginLeft: "auto", marginRight: "auto" }}>
        <span>Select type: </span>
        <select
          value={selectedTypeIndex}
          onChange={(e) => setSelectedTypeIndex(parseInt(e.target.value) || 0)}
        >
          {segmentTypes.map(({ name, colour }, index) => (
            <option
              key={name}
              value={index}
              style={{ color: "White", backgroundColor: colour }}
            >
              {name}
            </option>
          ))}
        </select>
        <br />
        <br />
        <span>{segmentTypes[selectedTypeIndex].description}</span>
      </p>
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          height: mapHeight,
          width: mapWidth,
        }}
      >
        <MapContainer
          key={selectedTypeIndex}
          style={{ width: mapWidth, height: mapHeight }}
          // bounds={mapBounds}
          center={mapCenter}
          zoom={mapZoom}
          scrollWheelZoom
        >
          <PanesAndTiles />

          <Segment {...segment} {...segmentTypes[selectedTypeIndex].props} />
          <Segment {...otherSegment} />
        </MapContainer>
      </div>
    </div>
  );
}
