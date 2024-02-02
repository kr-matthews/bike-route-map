import { useContext } from "react";
import { Selections } from "../../App";
import SegmentForm from "./SegmentForm";
import Panel from "./Panel";
import { VIEWS } from "./Sidebar";

// !!! add leg data and highlight on hover
// !!! ? handle non-routes, allow them to be previewed when they have a video

const videoOptions = [undefined, true, false];

const getName = (option) =>
  option ? "With video" : option === false ? "Without video" : "All";

export default function Filters({ navigateTo }) {
  const { filters, dispatchFilters } = useContext(Selections);

  return (
    <Panel name={VIEWS.filters.name} navigateTo={navigateTo}>
      <div style={{ overflowY: "scroll", overflow: "auto" }}>
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
    </Panel>
  );
}
