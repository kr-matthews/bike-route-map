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
    segmentProps: { ...state.segmentProps, ...action.data.props },
  };
  switch (action.type) {
    case "type":
      newState.typeDescription = action.data.description;
      break;

    case "direction":
      newState.directionDescription = action.data.description;
      break;

    case "elevation":
      newState.elevationDescription = action.data.description;
      break;

    default:
      return state;
  }
  return newState;
};

const initialState = {
  key: 1,
  segmentProps: {
    ...TYPE_TYPES[0].props,
    ...DIRECTION_TYPES[2].props,
    ...ELEVATION_TYPES[1].props,
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

  const types = TYPE_TYPES.map((t) => t.props.type === segmentProps.type);
  const directions = DIRECTION_TYPES.map(
    (t) => t.props.oneWay === segmentProps.oneWay
  );
  const elevations = ELEVATION_TYPES.map(
    (t) => t.props.elevation === segmentProps.elevation
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
