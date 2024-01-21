import { useContext } from "react";
import { DARK_BLUE, LIGHT_BLUE, WHITE } from "../../utils/colours";
import { Selections } from "../../App";
import SegmentForm from "./SegmentForm";

// !!! reconfigure to routes being home page
// !!! replace buttons with icons when appropriate
// !!! show tooltips on border (and on arrows??)
// !!! general clean up and de-duplication
// !! add leg data and highlight on hover
// !! handle non-routes, allow them to be previewed when they have a video

const videoOptions = [undefined, true, false];

const getName = (option) =>
  option ? "With video" : option === false ? "Without video" : "All";

export default function Filters({ goBack }) {
  const { filters, dispatchFilters } = useContext(Selections);

  return (
    <div
      style={{
        paddingLeft: "0.5em",
        paddingRight: "0.5em",
        flex: "1",
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "AliceBlue",
        position: "relative",
      }}
    >
      <h2 style={{ paddingLeft: 15 }}>Filters</h2>
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
        Menu
      </button>

      <button
        style={{
          cursor: "pointer",
          margin: "0 20em 1em 20em",
        }}
        onClick={() => dispatchFilters({ type: "reset" })}
      >
        Reset
      </button>

      <SegmentForm
        view="filter"
        types={filters.types}
        directions={filters.directions}
        elevations={filters.elevations}
        dispatch={dispatchFilters}
      />

      <br />

      {videoOptions.map((videoOption) => {
        const action = () => {
          dispatchFilters({ type: "video", value: videoOption });
        };
        return (
          <label
            key={videoOption ?? "both"}
            htmlFor="videos"
            style={{
              cursor: "pointer",
              padding: "4px",
            }}
            onClick={action}
          >
            <input
              type="radio"
              id={(videoOption ?? "both").toString()}
              name="videos"
              style={{ cursor: "pointer" }}
              checked={filters.videos === videoOption}
              onChange={() => {}}
            />
            {getName(videoOption)}
          </label>
        );
      })}
    </div>
  );
}
