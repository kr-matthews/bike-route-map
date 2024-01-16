import { useContext } from "react";
import { DARK_BLUE, LIGHT_BLUE, WHITE } from "../../utils/colours";
import { Selections } from "../../App";
import { availableTypeSettings } from "../../hooks/useSelections";

// !!! add has-video filter (and secret has-no-video filter??)

export default function Settings({ goBack }) {
  const { settings, dispatchSettings } = useContext(Selections);

  return (
    <div
      style={{
        paddingLeft: "2em",
        paddingRight: "2em",
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

      {availableTypeSettings.map(({ key, name, colour }) => (
        <div key={key} style={{ padding: "5px" }}>
          <input
            type="checkbox"
            id="key"
            name="name"
            style={{ cursor: "pointer" }}
            checked={settings[key]}
            onChange={() => dispatchSettings({ type: "toggle", key })}
          />
          <label
            htmlFor="comfortable"
            style={{
              cursor: "pointer",
              color: WHITE,
              backgroundColor: colour,
              padding: "4px",
            }}
            onClick={() => dispatchSettings({ type: "toggle", key })}
          >
            {name}
          </label>
        </div>
      ))}
    </div>
  );
}
