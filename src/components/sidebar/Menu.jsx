import { useState } from "react";
import mapIcon from "../../images/marker-yellow.svg";
import videoIcon from "../../images/video.svg";
import {
  HeavyFooter,
  HomeLink,
  CodeLink,
  Link,
} from "footer-dependency/dist/lib";
import { disclaimer } from "../../utils/strings";
import { DARK_BLUE, LIGHT_BLUE } from "../../utils/colours";

export default function Menu({ options, setSelectedId }) {
  return (
    <div style={{ overflowY: "auto" }}>
      <div style={{ margin: "2em", minHeight: "calc(100vh - 170px)" }}>
        <h1 style={{ textAlign: "center" }}>Menu</h1>

        {options.map(({ id, name }) => (
          <Option key={id} name={name} onClick={() => setSelectedId(id)} />
        ))}

        <div>
          <p style={{ color: "red" }}>
            Note: This project is still a work-in-progress. Some routes aren't
            drawn yet.
          </p>
          <p>
            This is a map of bike routes in and around Vancouver. All bike
            routes in Vancouver are present (let me know if any are missing).
            Major bike routes in adjacent cities (as well as UBC) are usually
            present, but there are plenty more bike routes (and other instances
            of bike infrastructure) that are not on this map.
          </p>
          <p>
            You can select (click on) a route via the 'Routes' side panel above,
            or directly on the map. Either way, existing videos (if any) will be
            shown for that route. If you select a video, then the segments that
            it includes will show up in purple. The video has chapters at the
            bottom for quickly finding a particular segment of a route -- make
            the video fullscreen to see them more easily.
          </p>
          <p style={{ color: "red" }}>{disclaimer}</p>
        </div>
      </div>

      <div style={{ paddingTop: "1em" }}>
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

function Option({ name, onClick }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        backgroundColor: hover ? DARK_BLUE : LIGHT_BLUE,
        borderRadius: "1em",
        padding: "1em",
        marginTop: "1em",
        marginLeft: "auto",
        marginRight: "auto",
        cursor: "pointer",
        width: "10em",
        textAlign: "center",
        color: "White",
        fontWeight: hover ? "bold" : "",
        fontSize: "120%",
      }}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      onClick={onClick}
    >
      {name}
    </div>
  );
}
