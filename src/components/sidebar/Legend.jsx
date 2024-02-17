import { useReducer } from "react";
import { MapContainer } from "react-leaflet";
import Segment from "../map/Segment";
import PanesAndTiles from "../map/PanesAndTiles";
import { ZOOMED_IN_A_BIT } from "../../utils/constants";
import {
  DIRECTIONS,
  ELEVATIONS,
  TYPES,
  getDirection,
  getElevation,
  getType,
} from "../../utils/segmentTypes";
import SegmentForm from "./SegmentForm";
import Panel from "./Panel";
import { VIEWS } from "./Sidebar";

const intersection = [49.26208, -123.10495];

const segment = {
  routeNames: ["Route Name"],
  description: "for the legend",
  filterImmune: true,
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
  filterImmune: true,
  positions: [
    [49.26027, -123.10503],
    intersection,
    [49.263, -123.1049],
    [49.26466, -123.10482],
  ],
};

const mapWidth = "400px";
const mapHeight = "125px";

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

  switch (action.characteristic) {
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
    type: TYPES[0].key,
    oneWay: DIRECTIONS[2].key,
    elevation: ELEVATIONS[1].key,
  },
  typeDescription: TYPES[0].description,
  directionDescription: DIRECTIONS[2].description,
  elevationDescription: ELEVATIONS[1].description,
};

export default function Legend({ navigateTo }) {
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

  const types = TYPES.reduce(
    (acc, t) => ({
      ...acc,
      [t.key]: t.key === segmentProps.type,
    }),
    {}
  );
  const directions = DIRECTIONS.reduce(
    (acc, d) => ({
      ...acc,
      [d.key]: d.key === segmentProps.oneWay,
    }),
    {}
  );
  const elevations = ELEVATIONS.reduce(
    (acc, e) => ({
      ...acc,
      [e.key ?? 0]: e.key === segmentProps.elevation,
    }),
    {}
  );

  return (
    <Panel name={VIEWS.legend.name} navigateTo={navigateTo}>
      <div style={{ overflowY: "scroll", overflow: "auto" }}>
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
            marginLeft: "6em",
            height: mapHeight,
            width: mapWidth,
          }}
        >
          <MapContainer
            // key required to correctly set panels for elevation
            // it could be removed if each segment was always rendered but
            // hidden via width/opacity like the main map
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

        <div>
          {typeDescription && <p>{typeDescription}</p>}
          {directionDescription && <p>{directionDescription}</p>}
          {elevationDescription && <p>{elevationDescription}</p>}
        </div>
      </div>
    </Panel>
  );
}
