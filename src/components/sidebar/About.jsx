import mapIcon from "../../images/marker-yellow.svg";
import videoIcon from "../../images/video.svg";
import databaseIcon from "../../images/database.svg";
import {
  HeavyFooter,
  HomeLink,
  CodeLink,
  Link,
} from "footer-dependency/dist/lib";
import { disclaimer, displayDistance } from "../../utils/strings";
import Panel from "./Panel";
import { VIEWS } from "./Sidebar";
import { BLACK, RED } from "../../utils/colours";
import {
  routeVideoCount,
  routeVideoCumulativeDistance,
  routeVideoCumulativeMinutes,
  routeVideoUniqueDistanceCovered,
} from "../../utils/videos";

export default function About({ navigateTo }) {
  return (
    <Panel name={VIEWS.about.name} navigateTo={navigateTo}>
      <div
        style={{ overflowY: "scroll", overflow: "auto", paddingRight: "1em" }}
      >
        <p>
          This map features {routeVideoCount} videos with a cumulative length of
          over {Math.floor(routeVideoCumulativeMinutes / 60)} hours, covering a
          unique {displayDistance(routeVideoUniqueDistanceCovered)} (
          {displayDistance(routeVideoCumulativeDistance)} in total).
        </p>
        <ul>
          <li>
            <b>Hover</b> over a segment for information.
          </li>
          <li>
            <b>Click</b> on a segment for route <b>details</b> (when
            applicable).
          </li>
          <li>
            <b>Right-click</b> on a segment for a corresponding <b>video</b>{" "}
            (when available).
          </li>
          <li>
            Show your <b>current location</b> (top-left of map); best when used
            on mobile.
          </li>
          <li>Use the icons in the top right to:</li>
          <ul>
            <li>
              See a <b>list</b> of all <b>routes</b>, and search by name/region.
            </li>
            <li>
              See a <b>list</b> of all <b>upgrade videos</b>, and search by
              name/region.
            </li>
            <li>
              View the <b>legend</b>.
            </li>
            <li>
              <b>Filter</b> which segments are displayed on the map.
            </li>
            <li>
              Change the <b>background</b> map and the default{" "}
              <b>video speed</b>.
            </li>
          </ul>
        </ul>
        <p>
          This is a map of bike routes in and around Vancouver. All routes in
          Vancouver are included. Many routes in adjacent regions are included -
          select a region in the Routes panel dropdown for more information. But
          there are plenty more routes (and other instances of bike
          infrastructure) that are not shown on this map. More routes may be
          added over time.
        </p>
        <p>
          When played, videos have chapters to make it easy to find a specific
          portion of the route. Consider watching videos at 2x speed ("Shift" +
          "{">"}" to speed up).
        </p>
        <p style={{ color: RED }}>
          {disclaimer}{" "}
          <span style={{ color: BLACK }}>
            Note: in situations where it's unlikely to cause confusion, some
            routes may have brief segments with the wrong colour - for example,
            marked as a quiet street (purple) or a painted lane (blue) but has a
            half-block which is physically separated (should be green). If you
            see any potentially <em>misleading</em> errors, then let me know via
            email or GitHub below.
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
              url="https://opendata.vancouver.ca/explore/dataset/bikeways/information/"
              image={databaseIcon}
              description="City of Vancouver Bikeways Dataset"
            />
            <Link
              url="https://www.openstreetmap.org/#map=13/49.2506/-123.1161"
              image={databaseIcon}
              description="Open Street Map"
            />
            <Link
              url="https://vancouver.ca/files/cov/map-cycling-vancouver.pdf"
              image={mapIcon}
              description="City of Vancouver Cycling Map"
            />
            <Link
              url="https://www.translink.ca/-/media/translink/documents/rider-guide/cycling/2024-cycling-maps/tl-west_v2024_01.pdf"
              image={mapIcon}
              description="TransLink Cycling Map"
            />
          </HeavyFooter>
        </div>
      </div>
    </Panel>
  );
}
