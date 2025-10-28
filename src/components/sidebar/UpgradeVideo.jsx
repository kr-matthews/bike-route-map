import { BLACK, LIGHT_YELLOW, WHITE } from "../../utils/colours";
import { WIDTH_BREAKPOINT } from "../../utils/constants";
import {
  displayDirection,
  formatDate,
  formatDuration,
} from "../../utils/videos";
import Video from "./Video";

export default function UpgradeVideo({ upgrade }) {
  const screenIsTooNarrow = window.innerWidth < WIDTH_BREAKPOINT;

  return (
    <>
      <div
        style={{
          display: screenIsTooNarrow ? "inline-grid" : "flex",
          marginBottom: "4px",
        }}
      >
        <Video
          id={upgrade.id}
          backgroundColor={LIGHT_YELLOW}
          borderColor={WHITE}
          textColor={BLACK}
          title={`${displayDirection(upgrade.direction)}, ${formatDate(
            upgrade.date
          )}, ${formatDuration(upgrade.minutes)}`}
        />
      </div>
    </>
  );
}
