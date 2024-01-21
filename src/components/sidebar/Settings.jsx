import { useContext } from "react";
import { DARK_BLUE, LIGHT_BLUE, WHITE } from "../../utils/colours";
import { Selections } from "../../App";
import SegmentForm from "./SegmentForm";

const videoOptions = [undefined, true, false];

const getName = (option) =>
  option ? "With video" : option === false ? "Without video" : "All";

export default function Settings({ goBack }) {
  const { settings, dispatchSettings } = useContext(Selections);

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
      <h2 style={{ paddingLeft: 15 }}>Settings</h2>
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

      <SegmentForm
        view="filter"
        types={settings.types}
        directions={settings.directions}
        elevations={settings.elevations}
        dispatch={dispatchSettings}
      />

      <br />

      {videoOptions.map((videoOption) => {
        const action = () => {
          dispatchSettings({ type: "video", value: videoOption });
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
              id={videoOption}
              name="videos"
              style={{ cursor: "pointer" }}
              checked={settings.videos === videoOption}
            />
            {getName(videoOption)}
          </label>
        );
      })}
    </div>
  );
}
