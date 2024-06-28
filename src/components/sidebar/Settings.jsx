import { useContext } from "react";
import { SettingContext } from "../../App";
import Panel from "./Panel";
import { VIEWS } from "./Sidebar";
import { TILE_LAYERS } from "../../utils/map";

const videoSpeeds = [1, 4];

const getVideoSpeedName = (option) =>
  option === 1 ? "Real-time 1x" : "Time-lapse 4x (when available)";

export default function Settings({ navigateTo }) {
  const { tileLayerKey, setTileLayerKey, defaultSpeed, setDefaultSpeed } =
    useContext(SettingContext);

  return (
    <Panel name={VIEWS.settings.name} navigateTo={navigateTo}>
      <div style={{ overflowY: "scroll", overflow: "auto" }}>
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

        {/* padding to match inherent padding on inputs, prevent scroll bar */}
        <div style={{ padding: "4px" }}>
          <b>Default video speed: </b>
          {videoSpeeds.map((videoSpeed) => {
            const action = () => setDefaultSpeed(videoSpeed);
            return (
              <label
                key={videoSpeed}
                htmlFor="speed"
                style={{
                  cursor: "pointer",
                  padding: "4px",
                }}
                onClick={action}
              >
                <input
                  type="radio"
                  id={videoSpeed.toString()}
                  name="speed"
                  style={{ cursor: "pointer" }}
                  checked={defaultSpeed === videoSpeed}
                  onChange={() => {}}
                />
                {getVideoSpeedName(videoSpeed)}
              </label>
            );
          })}
          <br />
          {defaultSpeed === 4 && (
            <div style={{ paddingTop: 5 }}>
              <em>
                Use the YouTube built-in controls to 2x speed, for an overall
                effect of 8x.
              </em>
            </div>
          )}
        </div>
      </div>
    </Panel>
  );
}
