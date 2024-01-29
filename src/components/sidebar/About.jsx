import { disclaimer } from "../../utils/strings";
import Panel from "./Panel";
import { VIEWS } from "./Sidebar";

export default function About({ goBack }) {
  return (
    <Panel name={VIEWS.about.name} goBack={goBack} withLinks>
      <p>
        This is a map of bike routes in and around Vancouver. All bike routes in{" "}
        <b>Vancouver</b> are included. Most bike routes in <b>Burnaby</b> and{" "}
        <b>New Westminster</b> are included. Major bike routes in{" "}
        <b>Richmond</b> and <b>UBC</b> are usually included. A few routes in
        adjacent regions (North Vancouver, West Vancouver, Port Moody,
        Coquitlam, Surrey, etc.) are included. But there are plenty more bike
        routes (and other instances of bike infrastructure) that are not shown
        on this map. More routes may (slowly) be added over time.
      </p>
      <p>
        You can click on a route directly on the map, or via the list in the
        main side panel. Either way, existing videos (if any exist for that
        route) will be shown. If you select the toggle on a video, then the
        segments that it covers will be emphasized on the map. The videos have
        chapters at the bottom for quickly finding a particular segment -- make
        a video fullscreen to see these chapters more easily. Also note that you
        can speed up the videos with "Shift" + ".", or slow them down with
        "Shift" + "," (this is a YouTube feature).
      </p>
      <p style={{ color: "red" }}>
        {disclaimer}{" "}
        <span style={{ color: "black" }}>
          If you see any errors, let me know via email or GitHub below.
        </span>
      </p>
    </Panel>
  );
}
