import { Tooltip } from "react-leaflet";
import { segmentHasVideoForRoute } from "../../utils/segments";
import { getType, normalizeType } from "../../utils/segmentTypes";
import videoIcon from "../../images/video.svg";

const tooltipProps = { sticky: true, opacity: 0.7, className: "tooltip" };

export default function SegmentTooltip({ segment }) {
  const { routeNames, type, oneWay, videoIds, isClosed, hideUnlessVideo } =
    segment;

  const primaryRouteName = routeNames?.find((x) => x) || null;
  const hasAnyRoutes = (routeNames?.length ?? 0) > 0;
  const hasAnyVideos = (videoIds?.length ?? 0) > 0;

  const typeText = getType(normalizeType(type))?.name;

  // FIXME: tool tip not showing on decorator arrows hover
  return (
    <Tooltip {...tooltipProps}>
      <>
        <div>
          {isClosed && <b>[CLOSED] </b>}
          <u>
            {typeText}
            {oneWay === "required" && " - One way"}
          </u>
        </div>
        {hasAnyRoutes ? (
          routeNames.map((routeName) => (
            <div key={routeName}>
              {segmentHasVideoForRoute(segment, routeName) && (
                <img
                  src={videoIcon}
                  alt="video"
                  style={{ marginRight: "0.5em", height: "0.8em" }}
                />
              )}
              {primaryRouteName === routeName ? <b>{routeName}</b> : routeName}
            </div>
          ))
        ) : (
          <em>
            {hideUnlessVideo
              ? "Not an official bike route"
              : "Official alternative option or connection between routes"}
          </em>
        )}
        <div>
          <em>
            {hasAnyVideos ? "Right-click for video" : "No video available"}
          </em>
        </div>
      </>
    </Tooltip>
  );
}
