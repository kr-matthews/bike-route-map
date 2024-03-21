import { useContext } from "react";
import { Selections } from "../../App";
import SegmentForm from "./SegmentForm";
import Panel from "./Panel";
import { VIEWS } from "./Sidebar";
import { DEFAULT_TILE_LAYER, TILE_LAYERS } from "../../utils/map";

const videoOptions = [undefined, true, false];

const getVideoOptionName = (option) =>
  option ? "With video" : option === false ? "Without video" : "All";

export default function Filters({ navigateTo }) {
  const { filters, dispatchFilters, tileLayerKey, setTileLayerKey } =
    useContext(Selections);
  const reset = () => {
    dispatchFilters({ type: "reset" });
    setTileLayerKey(DEFAULT_TILE_LAYER);
  };

  return (
    <Panel name={VIEWS.filters.name} navigateTo={navigateTo}>
      <div style={{ overflowY: "scroll", overflow: "auto" }}>
        <button
          style={{
            cursor: "pointer",
            margin: "0 20em 1em 20em",
          }}
          onClick={reset}
        >
          Reset
        </button>

        {/* padding to match inherent padding on inputs, prevent scroll bar */}
        <div style={{ padding: "4px", margin: "0.5em 0 1em 0" }}>
          <b>Background map: </b>
          {Object.keys(TILE_LAYERS).map((tileLayerOption) => (
            <label
              key={tileLayerOption}
              htmlFor="tiles"
              style={{
                cursor: "pointer",
                padding: "4px",
                textTransform: "capitalize",
              }}
              onClick={() => setTileLayerKey(tileLayerOption)}
            >
              <input
                type="radio"
                id={tileLayerOption.toString()}
                name="tiles"
                style={{ cursor: "pointer" }}
                checked={tileLayerKey === tileLayerOption}
                onChange={() => {}}
              />
              {tileLayerOption}
            </label>
          ))}
        </div>

        <SegmentForm
          view="filters"
          types={filters.types}
          directions={filters.directions}
          elevations={filters.elevations}
          dispatch={dispatchFilters}
        />

        <br />

        {/* padding to match inherent padding on inputs, prevent scroll bar */}
        <div style={{ padding: "4px" }}>
          {videoOptions.map((videoOption) => {
            const action = () => {
              dispatchFilters({
                type: "toggle",
                characteristic: "video",
                value: videoOption,
              });
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
                {getVideoOptionName(videoOption)}
              </label>
            );
          })}
        </div>
      </div>
    </Panel>
  );
}
