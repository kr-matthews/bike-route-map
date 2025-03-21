import { useContext } from "react";
import { MapContainer, Marker } from "react-leaflet";
import { SEGMENTS } from "../../data/segments";
import { DEFAULT_BOUNDS } from "../../utils/map";
import { DemoContext, FilterContext } from "../../App";
import PanesAndTiles from "./PanesAndTiles";
import PolylineCreator from "./PolylineCreator";
import Segment from "./Segment";
import "./map.css";
import {
  createDemoBorderPathOptions,
  createDemoPathOptions,
} from "../../utils/pathOptions";
import stopIcon from "../../images/stop.svg";
import L from "leaflet";

export default function DemoMap({ setMapRef }) {
  const mapBounds = DEFAULT_BOUNDS;

  const demo = useContext(DemoContext);

  return (
    <FilterContext.Provider value={demo.filters}>
      <div
        style={{
          height: "1em",
          width: "calc(100% - 625px)",
        }}
      >
        <MapContainer
          key="demo"
          style={{
            width: "100%",
            height: "100vh",
          }}
          bounds={mapBounds}
          scrollWheelZoom
          whenReady={({ target: mapRef }) => setMapRef(mapRef)}
        >
          <PolylineCreator />

          <PanesAndTiles />

          {/* pass in all segments, including hidden ones, due to directional arrow bug */}
          {SEGMENTS.map((segment) => (
            <Segment
              key={segment.routeNames?.join(",") + "|" + segment.description}
              segment={segment}
              createPathOptions={createDemoPathOptions}
              createBorderPathOptions={createDemoBorderPathOptions}
            />
          ))}

          {demo.stops.map((stop) => {
            const icon = L.icon({
              iconUrl: stopIcon,
              iconSize: 30,
            });
            return (
              <Marker
                key={`${stop[0]}${stop[1]}`}
                position={stop}
                icon={icon}
                opacity={0.75}
              />
            );
          })}

          <Segment
            segment={{
              positions: demo.altPath,
              oneWay: "recommended",
              isAlt: true,
            }}
            createPathOptions={createDemoPathOptions}
            createBorderPathOptions={createDemoBorderPathOptions}
          />
        </MapContainer>
      </div>
    </FilterContext.Provider>
  );
}
