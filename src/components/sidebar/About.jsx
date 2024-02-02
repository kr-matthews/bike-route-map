import mapIcon from "../../images/marker-yellow.svg";
import videoIcon from "../../images/video.svg";
import {
  HeavyFooter,
  HomeLink,
  CodeLink,
  Link,
} from "footer-dependency/dist/lib";
import { disclaimer } from "../../utils/strings";
import Panel from "./Panel";
import { VIEWS } from "./Sidebar";

export default function About({ navigateTo }) {
  return (
    <Panel name={VIEWS.about.name} navigateTo={navigateTo}>
      <div
        style={{ overflowY: "scroll", overflow: "auto", paddingRight: "1em" }}
      >
        <p>
          This is a map of bike routes in and around Vancouver. All bike routes
          in <b>Vancouver</b> are included. Most bike routes in <b>Burnaby</b>{" "}
          and <b>New Westminster</b> are included. Major bike routes in{" "}
          <b>Richmond</b> and <b>UBC</b> are usually included. A few routes in
          adjacent regions (North Vancouver, West Vancouver, Port Moody,
          Coquitlam, Surrey, etc.) are included. But there are plenty more bike
          routes (and other instances of bike infrastructure) that are not shown
          on this map. More routes may (slowly) be added over time.
        </p>
        <p>
          You can hover over or click segments on the map for more information,
          including videos when available. For full details on the colors/etc.
          see the legend ("?" icon above). For videos, the exact parts of the
          map covered can be highlighted. When played, videos have chapters to
          make it easy to find a specific portion of the route. Consider
          watching videos at 2x speed ("Shift" + "{">"}" to speed up).
        </p>
        <p style={{ color: "red" }}>
          {disclaimer}{" "}
          <span style={{ color: "black" }}>
            If you see any errors, let me know via email or GitHub below.
          </span>
        </p>

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
    </Panel>
  );
}
