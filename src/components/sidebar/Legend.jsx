import { useState } from "react";
import { MapContainer } from "react-leaflet";
import Segment from "../map/Segment";
import PanesAndTiles from "../map/PanesAndTiles";
import { SOMEWHAT_ZOOMED_IN } from "../../utils/params";
import mapIcon from "../../images/marker-yellow.svg";
import videoIcon from "../../images/video.svg";
import {
  HeavyFooter,
  HomeLink,
  CodeLink,
  Link,
} from "footer-dependency/dist/lib";

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
const mapZoom = SOMEWHAT_ZOOMED_IN;

const segmentTypes = [
  {
    name: "Standard",
    description: "Local street, separated lane/path, or painted lane.",
    props: {},
  },
  {
    name: "Uncomfortable/Unofficial",
    description: "Shared lane with high-volume and/or high-speed traffic.",
    props: { type: "uncomfortable" },
  },
  {
    name: "One-way",
    description: "Only one direction of travel is allowed.",
    props: { oneWay: "required" },
  },
  {
    name: "One-way recommended",
    description:
      "Both directions of travel are allowed, but typically only one is useful.",
    props: { oneWay: "recommended" },
  },
  {
    name: "Elevated",
    description:
      "Bridge or other elevated surface, you can't directly turn to/from the roads below.",
    props: { elevation: 1 },
  },
  {
    name: "Underground",
    description: "A tunnel; you can't directly turn to/from the roads above.",
    props: { elevation: -1 },
  },
  {
    name: "Closed",
    description: "For long-term construction or other reasons.",
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

      <p style={{ marginLeft: "auto", marginRight: "auto", color: "red" }}>
        Note: This project is still a work-in-progress. Some routes aren't drawn
        yet.
      </p>
      <p>
        This is a map of bike routes in and around Vancouver. All bike routes in
        Vancouver are present (let me know if any are missing). Major bike
        routes in adjacent cities (including UBC) are usually present, but there
        are plenty more that are not on this map.
      </p>
      <p>
        You can select (click on) a route via the list on the side panel, or
        directly on the map. Either way, existing videos (if any) will be shown
        for that route. If you select a video, then the segments that it
        includes will show up in purple. The video has chapters at the bottom
        for quickly finding a particular segment of a route (make the video
        fullscreen to see them more easily).
      </p>
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
          {segmentTypes.map(({ name }, index) => (
            <option key={name} value={index}>
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
      <div style={{ paddingTop: "3em" }}>
        <HeavyFooter>
          <HomeLink />
          <CodeLink gitHubRepoName="bike-route-map" themeType="light" />
          <Link
            url="https://www.youtube.com/channel/UCgzTHi3DEAYwPyR1M7P_AeQ"
            image={videoIcon}
            description="Associated YouTube Channel"
          />
          <Link
            url="https://vancouver.ca/files/cov/map-cycling-vancouver.pdf"
            image={mapIcon}
            description="City of Vancouver Cycling Map"
          />
          <Link
            url="https://www.translink.ca/-/media/translink/documents/rider-guide/cycling/2021-cycling-maps/tl-cyclerouteseastwest_v2021web.pdf"
            image={mapIcon}
            description="TransLink Cycling Map"
          />
        </HeavyFooter>
      </div>
    </div>
  );
}
