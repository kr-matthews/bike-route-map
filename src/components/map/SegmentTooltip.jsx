import { Tooltip } from "react-leaflet";
import { segmentHasVideoForRoute } from "../../utils/segments";
import { getType, normalizeType } from "../../utils/segmentTypes";
import videoIcon from "../../images/video.svg";
import warningIcon from "../../images/warning.svg";
import { routeIsIncomplete } from "../../utils/routes";

const tooltipProps = { sticky: true, opacity: 0.7, className: "tooltip" };

export default function SegmentTooltip({ segment }) {
  const { routeNames, type, oneWay, videoIds, isClosed, undesignated } =
    segment;

  const primaryRouteName = routeNames?.find((x) => x) || null;
  const hasAnyRoutes = (routeNames?.length ?? 0) > 0;
  const hasAnyVideos = (videoIds?.length ?? 0) > 0;

  const typeText = getType(normalizeType(type))?.name;

  // FIXME: tool tip not showing on decorator arrows hover
  return (
    <Tooltip {...tooltipProps}>
      <>
        <div>{isClosed && <b>[CLOSED] </b>}</div>
        <div>
          <u>
            {typeText}
            {oneWay === "required" && " - One way"}
          </u>
        </div>
        {routeNames?.map((routeName) => (
          <div key={routeName}>
            {segmentHasVideoForRoute(segment, routeName) && (
              <img
                src={videoIcon}
                alt="video"
                style={{ marginRight: "0.5em", height: "0.8em" }}
              />
            )}
            {primaryRouteName === routeName ? <b>{routeName}</b> : routeName}{" "}
            {routeIsIncomplete(routeName) && (
              <img
                src={warningIcon}
                alt="incomplete"
                style={{ height: "1em" }}
              />
            )}
          </div>
        ))}
        <em>
          {undesignated
            ? "Not a designated bike route"
            : !hasAnyRoutes &&
              "Designated alternative option or connection between routes"}
        </em>
        <div>
          <em>
            {hasAnyVideos ? "Right-click for video" : "No video available"}
          </em>
        </div>
      </>
    </Tooltip>
  );
}
