import { useReducer } from "react";
import { MapContainer } from "react-leaflet";
import Segment from "../map/Segment";
import PanesAndTiles from "../map/PanesAndTiles";
import { ZOOMED_IN_A_BIT } from "../../utils/constants";
import { DARK_BLUE, LIGHT_BLUE, WHITE } from "../../utils/colours";
import {
  DIRECTION_TYPES,
  ELEVATION_TYPES,
  TYPE_TYPES,
  getDirection,
  getElevation,
  getType,
} from "../../utils/segmentTypes";
import SegmentForm from "./SegmentForm";

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
  routeNames: ["Route 2", "Route 3"],
  description: "to show comparison",
  positions: [
    [49.26027, -123.10503],
    intersection,
    [49.263, -123.1049],
    [49.26466, -123.10482],
  ],
};

const mapWidth = "400px";
const mapHeight = "200px";

// const lats = segment.positions.map((x) => x[0]);
// const longs = segment.positions.map((x) => x[1]);
// const mapBounds = new LatLngBounds(
//   [Math.min(...lats), Math.min(...longs)],
//   [Math.max(...lats), Math.max(...longs)]
// );

const mapCenter = intersection;
const mapZoom = ZOOMED_IN_A_BIT;

// reducer

const reducer = (state, action) => {
  let newState = {
    ...state,
    key: state.key + 1,
    segmentProps: { ...state.segmentProps },
  };
  switch (action.type) {
    case "type":
      newState.typeDescription = getType(action.key).description;
      newState.segmentProps.type = action.key;
      break;

    case "direction":
      newState.directionDescription = getDirection(action.key).description;
      newState.segmentProps.oneWay = action.key;
      break;

    case "elevation":
      newState.elevationDescription = getElevation(action.key).description;
      newState.segmentProps.elevation = action.key;
      break;

    default:
      return state;
  }
  return newState;
};

const initialState = {
  key: 1,
  segmentProps: {
    type: TYPE_TYPES[0].key,
    oneWay: DIRECTION_TYPES[2].key,
    elevation: ELEVATION_TYPES[1].key,
  },
  typeDescription: TYPE_TYPES[0].description,
  directionDescription: DIRECTION_TYPES[2].description,
  elevationDescription: ELEVATION_TYPES[1].description,
};

export default function Legend({ goBack }) {
  const [
    {
      key,
      segmentProps,
      typeDescription,
      directionDescription,
      elevationDescription,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const types = TYPE_TYPES.reduce(
    (acc, t) => ({
      ...acc,
      [t.key]: t.key === segmentProps.type,
    }),
    {}
  );
  const directions = DIRECTION_TYPES.reduce(
    (acc, d) => ({
      ...acc,
      [d.key]: d.key === segmentProps.oneWay,
    }),
    {}
  );
  const elevations = ELEVATION_TYPES.reduce(
    (acc, e) => ({
      ...acc,
      [e.key ?? 0]: e.key === segmentProps.elevation,
    }),
    {}
  );

  return (
    <div
      style={{
        paddingLeft: "0.5em",
        paddingRight: "0.5em",
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
          color: WHITE,
          backgroundColor: LIGHT_BLUE,
          borderColor: DARK_BLUE,
        }}
        onClick={goBack}
      >
        Menu
      </button>

      <SegmentForm
        view="legend"
        types={types}
        directions={directions}
        elevations={elevations}
        dispatch={dispatch}
      />

      <br />
      <div
        style={{
          marginLeft: "auto",
          marginRight: "auto",
          height: mapHeight,
          width: mapWidth,
        }}
      >
        <MapContainer
          // key required to trigger new map to remove old arrows
          key={key}
          style={{ width: mapWidth, height: mapHeight }}
          // bounds={mapBounds}
          center={mapCenter}
          zoom={mapZoom}
          scrollWheelZoom
        >
          <PanesAndTiles />

          <Segment {...segment} {...segmentProps} />
          <Segment {...otherSegment} />
        </MapContainer>
      </div>

      {typeDescription && (
        <p style={{ width: mapWidth, marginLeft: "auto", marginRight: "auto" }}>
          {typeDescription}
        </p>
      )}
      {directionDescription && (
        <p style={{ width: mapWidth, marginLeft: "auto", marginRight: "auto" }}>
          {directionDescription}
        </p>
      )}
      {elevationDescription && (
        <p style={{ width: mapWidth, marginLeft: "auto", marginRight: "auto" }}>
          {elevationDescription}
        </p>
      )}
    </div>
  );
}
