import mapIcon from "../../images/marker-yellow.svg";
import videoIcon from "../../images/video.svg";
import {
  HeavyFooter,
  HomeLink,
  CodeLink,
  Link,
} from "footer-dependency/dist/lib";
import TryingToViewRoute from "./TryingToViewRoute";
import CloseIcon from "../icons/CloseIcon";

export default function Panel({ name, goBack, withLinks, wide, children }) {
  return (
    <div style={{ overflowY: "auto" }}>
      <div
        style={{
          margin: wide ? "0 0.5em" : "0 2em",
          minHeight: "calc(100vh - 170px)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>{name}</h2>
        <CloseIcon onClick={goBack} type="dark" />

        <div>
          <TryingToViewRoute />
          {children}
        </div>
      </div>

      {withLinks && (
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
      )}
    </div>
  );
}
