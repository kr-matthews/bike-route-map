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
import { DARK_BLUE, LIGHT_BLUE, WHITE } from "../../utils/colours";
import TryingToViewRoute from "./TryingToViewRoute";

export default function About({ goBack }) {
  return (
    <div style={{ overflowY: "auto" }}>
      <div style={{ margin: "2em", minHeight: "calc(100vh - 170px)" }}>
        <h1 style={{ textAlign: "center" }}>About</h1>
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
          Close
        </button>

        <div>
          <TryingToViewRoute />
          <p>
            This is a map of bike routes in and around Vancouver. All bike
            routes in <b>Vancouver</b> are included. Most bike routes in{" "}
            <b>Burnaby</b> and <b>New Westminster</b> are included. Major bike
            routes in <b>Richmond</b> and <b>UBC</b> are usually included. A few
            routes in adjacent regions (North Vancouver, West Vancouver, Port
            Moody, Coquitlam, Surrey, etc.) are included. But there are plenty
            more bike routes (and other instances of bike infrastructure) that
            are not shown on this map. More routes may (slowly) be added over
            time.
          </p>
          <p>
            You can click on a route directly on the map, or via the list in the
            main side panel. Either way, existing videos (if any exist for that
            route) will be shown. If you select the toggle on a video, then the
            segments that it covers will be emphasized on the map. The videos
            have chapters at the bottom for quickly finding a particular segment
            -- make a video fullscreen to see these chapters more easily. Also
            note that you can speed up the videos with "Shift" + ".", or slow
            them down with "Shift" + "," (this is a YouTube feature).
          </p>
          <p style={{ color: "red" }}>
            {disclaimer}{" "}
            <span style={{ color: "black" }}>
              If you see any errors, let me know via email or GitHub below.
            </span>
          </p>
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
